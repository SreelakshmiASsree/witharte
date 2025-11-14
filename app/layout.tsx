import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Witharte",
  description: "Art Gallery",
  icons: {
    icon: [
      {
        url: "/images/logo.jpg",
        type: "image/png",
        sizes: "512x512",
      },
    ],
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased"
       style={{ fontFamily: "Helvetica, Arial, sans-serif" }}
      >
        {children}
      </body>
    </html>
  );
}
