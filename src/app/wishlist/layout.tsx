import React from "react";

import { Footer } from "@/components";
import { WishlistHeader } from "@/app/wishlist/_components";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full bg-white sm:max-w-md">
      <WishlistHeader />
      {children}
      <Footer className="bg-gray-50" />
    </div>
  );
}
