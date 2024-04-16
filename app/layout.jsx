import { Poppins } from "next/font/google";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import ContextProvider from "@/context/ContextProvider";

const poppins = Poppins({
  subsets: ['latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: '--poppins-font',
})

export const metadata = {
  title: "Skryptly",
  description: "Skryptly's YouTube Video Description Generator is an AI-powered tool designed to help you create compelling, SEO-friendly video descriptions in seconds. It effortlessly generates engaging summaries, optimizes content for search engines, and even inserts timestamps automatically.",
  icons: {
    icon: '/image/scripty-logo.png',
  }
};

export default function RootLayout({ children }) {

  return (

    <ClerkProvider>
        <html lang="en">
          <body className={`${poppins.variable} font-sans`}>
            <ContextProvider>
              {children}
            </ContextProvider>
          </body>

        </html>
    </ClerkProvider>

  );
}
