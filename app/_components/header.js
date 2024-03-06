"use client";

import Link from "next/link";
import Navigation from "./navigation";
import Image from "next/image";
import Menu from "@/public/icon_menu.svg";
import CloseMenu from "@/public/icon-close.svg";
import Account from "@/public/icon_account.svg";
import Logo from "@/public/logo_white.svg";
import { useState } from "react";

const Header = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <div className="header">
      <Link href="/">
        <Image src={Logo} alt="Um Mais Humm" height={56} />
      </Link>
      <div className="wrap-icons">
        <Image
          src={!toggle ? Menu : CloseMenu}
          alt="Menu"
          width={48}
          height={48}
          onClick={() => setToggle(!toggle)}
        />
        <Image src={Account} alt="Minha conta" width={48} height={48} />
      </div>
      <Navigation toggle={toggle} />
    </div>
  );
};

export default Header;
