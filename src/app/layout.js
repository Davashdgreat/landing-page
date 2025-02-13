import "./globals.css"
import Navbar from "@/app/components/navbar";
import {Montserrat} from "next/font/google"

const montserrat = Montserrat({ subsets: ["latin"], weight: ["100", "300", "400", "500", "600", "700", "800", "900"] });


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="montserrat.className">{children}</main>
      </body>
    </html>
  );
}
