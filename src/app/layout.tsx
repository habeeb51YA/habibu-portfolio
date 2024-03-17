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
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  minimumScale: 1,
  userScalable: true,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} h-full mb-20 relative   `}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="absolute h-max h-full w-full bg-foreground">
            <BackgroundAnimatation />
          </div>

          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
