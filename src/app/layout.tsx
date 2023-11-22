import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";

config.autoAddCss = false;

const roboto = Roboto({ weight: ["300", "400", "700"], subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Opera Frontend Intern Task",
  description: "React frontend intern task for Opera by Mateusz Boboryko.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>{children}</body>
    </html>
  );
}
