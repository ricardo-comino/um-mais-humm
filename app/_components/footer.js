"use client";

import Image from "next/image";
import Link from "next/link";
import Whatsapp from "@/public/icon_whatsapp.svg";
import Instagram from "@/public/icon_instagram.svg";

const Footer = () => {
  return (
    <div className="footer">
      <p className="p-12 white">
        Um mais Humm
        <br /> CNPJ 46.139.550/0001-97
      </p>
      <div className="wrap-icons">
        <Link href="http://wa.me/5511996648800" target="_blank">
          <Image src={Whatsapp} alt="WhatsApp" />
        </Link>
        <Link href="https://www.instagram.com/ummaishumm/" target="_blank">
          <Image src={Instagram} alt="Instagram Um Mais Humm" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
