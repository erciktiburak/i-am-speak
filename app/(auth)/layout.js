import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";
//import { Clerk } from "@clerk/nextjs/dist/types/server";

export const metadata = {
  title: "Auth",
  description: "I-AM-SPEAK Social Media App",
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="eng">
        <body children={`${inter.className} bg-purple-1`}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
