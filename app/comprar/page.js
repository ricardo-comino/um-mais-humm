"use client";

import { useState } from "react";
import { CardCustom } from "../_components/card";
import { editions } from "@/app/_constants/enum";

export default function Page() {
  const [objEditions] = useState(editions);
  return (
    <div className="mainSmall">
      <h1>Qual de nossas versões você gostaria de comprar?</h1>
      <div className="wrapFlex gap16">
        {objEditions.map((edition) => (
          <CardCustom key={edition.id} obj={edition} type={"destaque"} />
        ))}
      </div>
    </div>
  );
}
