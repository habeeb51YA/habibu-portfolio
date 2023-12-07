import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { NavigationMenuDemo } from "@/components/navmenu";
import { Toaster } from "@/components/ui/toaster";
import BackgroundAnimatation from "@/components/animation/background-animation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Habibu's portfolio",
  description: "A portfolio site for habibu yusuf abdulhamid",
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
    minimumScale: 1,
    userScalable: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} mb-20 fixed `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <BackgroundAnimatation />
          {/* <NavigationMenuDemo /> */}

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
