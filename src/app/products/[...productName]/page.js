import Link from "next/link";

import { headers } from "next/headers";

export async function generateMetadata() {
    const headersList = headers();
    const refererUrl = headersList.get("referer") || null;
   
    return {
       title: "Product Page",
       openGraph: {
          url: refererUrl
       },
       alternates: {
          canonical: refererUrl,
       },
    };
  }

export default function Page({params = {}}) {
    const { productName = "" } = params
    return (
        <>   
        <h2>Product - {productName}</h2>
        <Link href="/" >HomePage</Link>
        </>
    );
}