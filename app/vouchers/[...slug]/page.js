"use client";

import Image from "next/image";
import imgDetail from "@/public/img_304x304.jpg";
import { Avatar } from "@mui/material";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Link from "next/link";
import ButtonCTA from "@/app/_components/button";

export default function Page({ params }) {
  const company = decodeURI(params.slug[1]);

  return (
    <div className="mainSmall">
      <h1 className="contentFlex">
        <Avatar sx={{ bgcolor: "#000000" }} aria-label={company}>
          {company.substring(0, 1)}
        </Avatar>
        {company}
      </h1>
      <ScrollingCarousel className="wrapCarousel">
        <div className="itemCarousel">
          <Image src={imgDetail} alt="Imagem do voucher" height={304} />
        </div>
        <div className="itemCarousel">
          <Image src={imgDetail} alt="Imagem do voucher" height={304} />
        </div>
      </ScrollingCarousel>
      <p className="p-18 colorBrand center">
        Voucher: 2 por 1 prato principal*
      </p>
      <section>
        <p>
          <b>Regras de uso do voucher</b>
        </p>
        <p>
          Válido todos os dias, exceto sábado no jantar, para tilápia, cupim e
          costelinha.
          <br />
          Data de expiração: 31/05/2024
        </p>
        <div className="wrapButtonFlex">
          <Link href={`/`}>
            <ButtonCTA textButtom={"Utilizar voucher"} />
          </Link>
          <Link href={`/vouchers`}>
            <ButtonCTA textButtom={"Voltar"} type={"secondary"} />
          </Link>
        </div>
      </section>
      <section>
        <p>
          <b>Endereço</b>
        </p>
        <p>Rua Piauí, 248, Santa Paula, São Caetano do Sul - SP</p>
      </section>
      <section className="iframeContainer">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.58628936626!2d-46.571751925485174!3d-23.619165763716808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce9883380ab%3A0xa36e17a9b88e2ff!2sR.%20Piau%C3%AD%2C%20248%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009541-150!5e0!3m2!1spt-BR!2sbr!4v1710265893866!5m2!1spt-BR!2sbr"
          frameborder="0"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </section>
    </div>
  );
}
