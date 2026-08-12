import DetailPage from "../detail-page";
import { detailMetadata } from "../seo";
export const metadata = detailMetadata("about");
export default function Page(){return <DetailPage slug="about"/>}
