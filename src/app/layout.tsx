import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
const GeistSans = Inter({ subsets: ["latin"] });
import { cn } from "@/lib/utils";
import { AppProviders } from "./providers";

export const metadata: Metadata = {
  title: {
    default: "Wishlist App",
    template: "%s | Wishlist",
  },
  description: "Create, share and reserve gifts with AI assistance.",
  keywords: ["wishlist", "gift list", "AI", "kids", "birthday", "sharing"],
  authors: [{ name: "Your Name or Team", url: "https://yourdomain.com" }],
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          GeistSans.className,
          "bg-background text-foreground min-h-screen antialiased",
        )}
      >
        <div className="flex min-h-full flex-col bg-gray-50">
          <AppProviders>{children}</AppProviders>
        </div>
      </body>
    </html>
  );
}
