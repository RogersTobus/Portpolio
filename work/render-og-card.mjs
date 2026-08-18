import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const sharp = require("sharp");

const projectRoot = path.resolve(import.meta.dirname, "..");
const backgroundPath = path.join(projectRoot, "public", "og-background-20260818.png");
const headerLogoPath = path.join(projectRoot, "public", "xbase-header-logo.svg");
const heroSymbolPath = path.join(projectRoot, "public", "xbase-hero-symbol.svg");
const datedOutputPath = path.join(projectRoot, "public", "og-xbase-20260818.png");
const fallbackOutputPath = path.join(projectRoot, "public", "og.png");

const [headerLogo, heroSymbolSource] = await Promise.all([
  fs.readFile(headerLogoPath),
  fs.readFile(heroSymbolPath, "utf8"),
]);

const heroSymbol = Buffer.from(
  heroSymbolSource
    .replaceAll('fill="#020511"', 'fill="#FFFFFF"')
    .replaceAll('fill="black"', 'fill="#FFFFFF"'),
);

const overlay = Buffer.from(`
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="shade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#020511" stop-opacity="0.98"/>
      <stop offset="0.58" stop-color="#020511" stop-opacity="0.78"/>
      <stop offset="1" stop-color="#020511" stop-opacity="0.05"/>
    </linearGradient>
    <filter id="glow" x="-80%" y="-80%" width="260%" height="260%">
      <feGaussianBlur stdDeviation="18" result="blur"/>
      <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
    </filter>
  </defs>
  <rect width="1200" height="630" fill="url(#shade)"/>
  <rect x="68" y="58" width="258" height="68" rx="34" fill="#FFFFFF" fill-opacity="0.96"/>
  <text x="72" y="202" font-family="Arial, sans-serif" font-size="17" font-weight="700" letter-spacing="3.2" fill="#6FA2FF">MARKETING × DATA × AI</text>
  <rect x="72" y="224" width="48" height="4" rx="2" fill="#0C70FD"/>
  <text x="72" y="308" font-family="Malgun Gothic, Apple SD Gothic Neo, Arial, sans-serif" font-size="60" font-weight="700" letter-spacing="-3.6">
    <tspan fill="#4A91FF">데이터</tspan><tspan fill="#FFFFFF">로 길을 찾고,</tspan>
    <tspan x="72" dy="82" fill="#FFFFFF">경험과 성과를 만듭니다.</tspan>
  </text>
  <text x="74" y="474" font-family="Malgun Gothic, Apple SD Gothic Neo, Arial, sans-serif" font-size="24" font-weight="400" letter-spacing="-1" fill="#C9D5EA">마케팅·데이터·AI를 연결해 경험을 더 나은 성과로 바꿉니다.</text>
  <text x="74" y="560" font-family="Arial, sans-serif" font-size="19" font-weight="700" letter-spacing="1.2" fill="#FFFFFF">xbase.co.kr</text>
  <circle cx="1010" cy="298" r="124" fill="#020511" fill-opacity="0.78" stroke="#2F7FFF" stroke-width="2" filter="url(#glow)"/>
</svg>`);

const headerLogoRaster = await sharp(headerLogo).resize({ width: 212 }).png().toBuffer();
const heroSymbolRaster = await sharp(heroSymbol).resize({ width: 154 }).png().toBuffer();

const card = await sharp(backgroundPath)
  .resize(1200, 630, { fit: "cover", position: "center" })
  .composite([
    { input: overlay, left: 0, top: 0 },
    { input: headerLogoRaster, left: 91, top: 70 },
    { input: heroSymbolRaster, left: 933, top: 231 },
  ])
  .png({ compressionLevel: 9, palette: false })
  .toBuffer();

await Promise.all([
  fs.writeFile(datedOutputPath, card),
  fs.writeFile(fallbackOutputPath, card),
]);

console.log(datedOutputPath);
console.log(fallbackOutputPath);
