import { Suspense } from "react";
import { Poppins } from "next/font/google";
import "@/app/globals.scss";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";
import Loading from "@/app/loading";

export const runtime = 'edge'

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Um mais Humm",
  description: "A região do ABCD+ na palma da sua mão",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        <Suspense fallback={Loading}>
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </Suspense>
      </body>
    </html>
  );
}
