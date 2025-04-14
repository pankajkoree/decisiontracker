import { BackgroundBeams } from "@/components/ui/background-beams";
import "./globals.css";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "decision tracker",
  description: "Tiny Decisions - A Personal Decision Log",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins:100,100italic,200,200italic,300,300italic,regular,italic,500,500italic,600,600italic,700,700italic,800,800italic,900,900italic"
          rel="stylesheet"
        />
      </head>
      <body>
        <BackgroundBeams />
        <main className="relative z-10">{children}</main>
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
