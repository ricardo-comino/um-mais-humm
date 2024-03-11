import Image from "next/image";
import Logo from "@/public/logo_white.svg";

export default function Loading() {
  // You can add any UI inside Loading, including a Skeleton.
  return (
    <section className="loading">
      <div className="wrap-loading">
        <Image src={Logo} alt="Logo Um Mais Humm" width={272} />
        <p className="p-24 white center">A região do ABCD+ na palma da sua mão.</p>
      </div>
    </section>
  );
}
