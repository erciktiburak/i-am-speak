import { ClerkProvider } from "@clerk/nextjs";
import "../globals.css";

export const metadata = {
  title: "Next.js",
  description: "I-AM-SPEAK Social Media App",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="eng">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
