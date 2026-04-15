import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sandhyagurung.art"),
  title: {
    default: "Sandhya Gurung | Contemporary Painter",
    template: "%s | Sandhya Gurung",
  },
  description:
    "Enter the world of Sandhya Gurung, a distinguished painter from Nepal based in the UK, where acrylic landscapes become meditations on memory, light, and grace.",
  keywords: [
    "Sandhya Gurung",
    "contemporary painter",
    "acrylic landscapes",
    "UK artist",
    "Nepal artist",
    "original paintings",
  ],
  openGraph: {
    title: "Sandhya Gurung | Contemporary Painter",
    description:
      "A refined portfolio of poetic landscapes by Sandhya Gurung, celebrating a rare artistic voice and a deeply human presence.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
