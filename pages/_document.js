import { Html, Head, Main, NextScript } from "next/document";
import Navbar from "@/componets/Navbar";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Navbar/>
        <Main />
        <NextScript />
        <div id="root" />
      </body>
    </Html>
  );
}
