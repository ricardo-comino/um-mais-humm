import { Poppins } from "next/font/google";
import "@/app/globals.scss";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

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
        <Header />
          <main className="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
