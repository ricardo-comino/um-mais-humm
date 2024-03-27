"use client";

import { Suspense } from "react";
import Loading from "../loading";
import Link from "next/link";
import ButtonCTA from "../_components/button";

export default function Page() {
  return (
    <Suspense fallback={Loading}>
      <div className="mainSmall">
        <section>
          <h1>Regras de uso</h1>
          <p>
            É obrigatória a apresentação do cupom digital na hora do pedido;
          </p>
          <p>
            Nas promoções do tipo “ 2 por 1”, é considerado gratuito o produto
            ou serviço de igual ou menor valor, sem exceção;
          </p>
          <p>As ofertas não dão direito a reembolso em dinheiro;</p>
          <p>
            As ofertas do Um mais Humm não podem ser acumuladas com outras
            promoções, descontos, vales ou tickets;
          </p>
          <p>
            O estabelecimento participante é o único responsável pelo
            cumprimento da oferta e prestação do serviço ou produto oferecido;
          </p>
          <p>
            Feriados, emendas e datas comemorativas como dia das mães, dos
            namorados, dos pais, Natal etc.: verifique se o voucher será aceito
            no estabelecimento antes de visitá-lo;
          </p>
          <p>
            O resgate da oferta está submetido à disponibilidade do
            estabelecimento participante;
          </p>
          <p>
            O estabelecimento participante reserva-se o direito de dar
            cumprimento às normas da casa, bem como às leis vigentes para ruído,
            classificação etária e consumo alcoólico;
          </p>
          <p>
            O estabelecimento participante reserva-se o direito de atualizações
            e adequações de horários, preços e programação durante o período de
            vigência do livrinho;
          </p>
          <p>
            Em casos de franquias, elas serão aceitas apenas nos
            estabelecimentos com o endereço da página (Ofertas exclusivas para a
            região do ABCD+);
          </p>
          <p>
            Nas opções de delivery, as ofertas de verão ser retiradas
            diretamente com o estabelecimento e não são válidas em aplicativos
            terceiros;
          </p>
          <p>
            Nas opções de delivery, verifique se o estabelecimento atende sua
            região. Todas as ofertas são válidas somente no salão, exceto se
            especificado diferentemente na página;
          </p>
          <p>
            Atualizações de promoções serão publicadas nas redes sociais, fique
            ligado;
          </p>
          <p>
            O Um mais Humm não se responsabiliza pelo conteúdo de publicidade
            dos estabelecimentos participantes;
          </p>
          <p>
            Um mais Humm não se responsabiliza pelo encerramento das atividades
            de qualquer estabelecimento participante;
          </p>
          <p>
            Imagens referente a cada parceiro não estão associadas
            necessariamente a promoção oferecida;
          </p>
        </section>
        <section>
          <h1>Recomendações</h1>
          <p>Conferir os horários de funcionamento antes de sair de casa;</p>
          <p>Realizar agendamento/reserva quando necessário;</p>
          <p>
            Conferir a política dos parceiros referente as datas comemorativas e
            válidas dos descontos;
          </p>
        </section>
        <section>
          <h1>Valorize e apoie</h1>
          <p>
            Os parceiros desta edição elaboraram descontos exclusivos para você
            aproveitar. Desfrute, usufrua a cortesia e experimente outros
            serviços que o estabelecimento oferece.
          </p>
        </section>
        <section className="wrapButtonFlex">
          <Link href={`/`}>
            <ButtonCTA textButtom={"Voltar"} type={"secondary"} />
          </Link>
        </section>
      </div>
    </Suspense>
  );
}
