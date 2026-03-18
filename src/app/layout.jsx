import { Inter } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Compass",
  description: "Mental Health Self-Assessment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} antialiased`}
        style={{ transition: "background-color 0.2s ease, color 0.2s ease" }}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}