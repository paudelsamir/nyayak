import type { Metadata } from "next";
import SyncUser from "../components/SyncUser";
import "./globals.css";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import ConvexClientProvider from "../components/ConvexClientProvider";

const hasAuthProviders = Boolean(
  process.env.NEXT_PUBLIC_CONVEX_URL && process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY
);

export const metadata: Metadata = {
  title: "Nyayak",
  description: "Your Next.js + Clerk App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        {hasAuthProviders ? (
          <ConvexClientProvider>
            <SyncUser />
            <NavBar />
            {children}
            <Footer />
          </ConvexClientProvider>
        ) : (
          <>
            {/* NavBar relies on Clerk hooks; render auth-free shell when keys are absent. */}
            {children}
            <Footer />
          </>
        )}
      </body>
    </html>
  );
}
