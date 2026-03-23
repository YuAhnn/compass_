"use client";

import { ThemeProvider } from "next-themes"

export default function Providers({ children }) {
  return (
    <ThemeProvider
      attribute="data-theme"
      defaultTheme="mytheme"
      themes={["mytheme", "mytheme-dark"]}
      enableSystem={false}
    >
      {children}
    </ThemeProvider>
  )
}