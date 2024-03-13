"use client";

import Link from "next/link";
import Image from "next/image";
import Home from "@/public/icon_home.svg";
import Vouchers from "@/public/icon_voucher.svg";
import Shop from "@/public/icon_shopping.svg";
import Location from "@/public/icon_location.svg";
import Roles from "@/public/icon_file.svg";
import Help from "@/public/icon_help.svg";
import Logout from "@/public/icon_logout.svg";

const Navigation = ({ toggle }) => {
  return (
    <nav className={`nav ${toggle && "show"}`}>
      <Link href="/" className="link">
        Página inicial
        <Image src={Home} alt="Icone Página inicial" className="icon-menu" />
      </Link>
      <Link href="/vouchers" className="link">
        Vouchers
        <Image src={Vouchers} alt="Icone Vouchers" className="icon-menu" />
      </Link>
      <Link href="/comprar" className="link">
        Comprar
        <Image src={Shop} alt="Icone Comprar" className="icon-menu" />
      </Link>
      <Link href="https://maps.app.goo.gl/toEpo5uZyCRMe92i6" target="_blank" className="link">
        Localizações
        <Image src={Location} alt="Icone Localizações" className="icon-menu" />
      </Link>
      <Link href="/regras-de-uso" className="link">
        Regras de Uso
        <Image src={Roles} alt="Icone Regras de Uso" className="icon-menu" />
      </Link>
      <Link href="/ajuda" className="link">
        Ajuda
        <Image src={Help} alt="Icone Ajuda" className="icon-menu" />
      </Link>
      <Link href="/sair" className="link">
        Sair
        <Image src={Logout} alt="Icone Sair" className="icon-menu" />
      </Link>
      {/* <Link href="/comprar" className="link">
        Comprar
        <Image src={Shop} alt="Icone Comprar" className="icon-menu" />
      </Link>
      <Link href="/comprar" className="link">
        Comprar
        <Image src={Shop} alt="Icone Comprar" className="icon-menu" />
      </Link>
      <Link href="/vouchers" className="link">
        Vouchers
        <Image src={Vouchers} alt="Icone Vouchers" className="icon-menu" />
      </Link>
      <Link href="/comprar" className="link">
        Comprar
        <Image src={Shop} alt="Icone Comprar" className="icon-menu" />
      </Link> */}
    </nav>
  );
};

export default Navigation;
