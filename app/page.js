"use client";

import { Suspense, useState } from "react";
import Loading from "./loading";
import { vouchers, editions } from "@/app/_constants/enum";
import { CardCustom } from "./_components/card";
import { ScrollingCarousel } from "@trendyol-js/react-carousel";
import Link from "next/link";
import ButtonCTA from "./_components/button";
import { Accordion, AccordionSummary, AccordionDetails } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

export default function Page() {
  const [objVouchers] = useState(vouchers);
  const [objEditions] = useState(editions);

  return (
    <Suspense fallback={Loading}>
      <section className="center">
        <h1>
          O livrinho de descontos que te dá experiências em dobro na região do
          ABCD+
        </h1>
        <p className="p-18">Agora na versão Digital e Físico</p>
      </section>
      <section className="center">
        <div className="wrapFlex gap16 center2">
          {objEditions.map((edition) => (
            <CardCustom key={edition.id} obj={edition} type={"destaque"} />
          ))}
        </div>
      </section>
      <section className="center">
        <p className="p-18">Compre já seu livrinho de descontos</p>
        <p>
          Cada estabelecimento possui um voucher exclusivo, 2 por 1 ou 50% de
          desconto em pratos e experiências!
          <br />
          Você pode escolher entre a versão Digital ou Física, escolha uma para
          comprar agora.
        </p>

        <div className="wrapButtonFlex">
          <Link href={`/comprar`}>
            <ButtonCTA textButtom={"Comprar"} />
          </Link>
        </div>
      </section>
      <section>
        <div className="wrapFlex center">
          <h2>Estabelecimentos / Vouchers</h2>
          <Link href={`/vouchers`}>
            <span className="p-14 colorBrand">Ver mais</span>
          </Link>
        </div>
        <div className="wrapFlex gap16">
          {objVouchers.length > 0 ? (
            <ScrollingCarousel className="wrapCarousel">
              {objVouchers.map((voucher) => (
                <CardCustom key={voucher.id} obj={voucher} />
              ))}
            </ScrollingCarousel>
          ) : (
            <p>Voucher não encontrado</p>
          )}
        </div>
      </section>

      <section>
        <h1>Ajuda</h1>
        <div>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="p-14">
                Qual a validade do livrinho físico e digital?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="p-12">
                A 3ª edição é válida de 01/06/2024 até 31/05/2025, tanto para a
                versão física quanto digital!
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="p-14">Como funciona a utilização do desconto?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="p-12">
                <b>Livrinho Físico:</b> apresente-se no estabelecimento
                escolhido com o livrinho físico em mãos e comunique sobre a
                utilização, certifique-se que as regras de uso do livro e do
                estabelecimento estejam sendo cumpridas, destaque o voucher no
                canto superior direito da página na hora de pagar a conta e
                aproveite o seu.
                <br />
                <b>Versão Digital:</b> Comunique sobre a utilização,
                certifique-se que as regras de uso do livro e do estabelecimento
                estejam sendo cumpridas, valide o seu voucher digital em frente
                a algum funcionário do estabelecimento na hora de pagar a conta
                e aproveite o seu descontão :)
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="p-14">
                Não utilizei o meu desconto, tenho direito a algum tipo de
                reembolso?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="p-12">
                As ofertas do Um mais Humm são exclusivas para utilização nos
                nossos parceiros, e elas não dão direito a reembolso em
                dinheiro.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="p-14">
                Vamos sair em casal, posso usar 2 livrinhos ao mesmo tempo?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="p-12">
                Com certeza! O nosso objetivo é que vocês aproveitem ao máximo
                ao lado de pessoas queridas! Podem ir em casais, em família, em
                amigos… se cada casal tiver um voucher, os vouchers poderão ser
                utilizados em conjunto!
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="p-14">
                Qual o valor do livrinho físico? E digital?
              </p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="p-12">
                Os valores do livrinho físico e digital são iguais! Os descontos
                e benefícios são exatamente os mesmos… O valor oficial da 3ª
                edição é R$ 179,90.
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="p-14">Quais as cidades participantes?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="p-12">
                Nosso livrinho é exclusivo para a região do ABCD+, com parceiros
                em Santo André, São Bernardo, São Caetano, Mauá, Diadema e
                Ribeirão Pires
              </p>
            </AccordionDetails>
          </Accordion>
          <Accordion>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1-content"
              id="panel1-header"
            >
              <p className="p-14">Como faço se precisar de suporte?</p>
            </AccordionSummary>
            <AccordionDetails>
              <p className="p-12">
                Entre contato conosco através do WhatsApp ou Instagram,
                resolvemos seu problema rapidinho :)
              </p>
            </AccordionDetails>
          </Accordion>
        </div>
      </section>
    </Suspense>
  );
}
