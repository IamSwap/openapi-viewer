import "./globals.css";
import { Inter } from "next/font/google";
import Script from "next/script";
import "@stoplight/elements/styles.min.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "OpenAPI Viewer",
  description: "OpenAPI Documentation Viewer with Stoplight Elements",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <Script src="/scripts/web-components.min.js" strategy="afterInteractive" />
      </head>
      <body className={`h-full m-0 font-sans ${inter.className}`}>{children}</body>
    </html>
  );
}
