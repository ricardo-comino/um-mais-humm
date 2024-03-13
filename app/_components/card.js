"use client";

import { useState } from "react";
import "@/app/variables.scss";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import imgCard from "@/public/img_304x304.jpg";
import imgDigital from "@/public/img_digital.jpg";
import imgFisico from "@/public/img_fisico.jpg";
import Image from "next/image";
import Link from "next/link";
import { shareVoucher } from "./utils";
import ButtonCTA from "@/app/_components/button";

export const CardCustom = ({ obj, type }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return type === "destaque" ? (
    <Card
      sx={{
        maxWidth: 246,
        borderRadius: "8px",
        opacity: obj.status ? "1" : "0.2",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 0,
      }}
    >
      <Image src={obj.name === "Digital" ? imgDigital : imgFisico} alt="Imagem do voucher" />
      <CardActions className="cardActions color">
        <Link href={`/`} className="p-18 white center">
          {obj.name}
        </Link>
      </CardActions>
    </Card>
  ) : (
    <Card
      sx={{
        maxWidth: 345,
        borderRadius: "8px",
        opacity: obj.status ? "1" : "0.2",
      }}
    >
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#000000" }} aria-label={obj.company}>
            {obj.company.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton
            aria-label="compartilhar"
            onClick={() => {
              shareVoucher(
                obj.company,
                obj.voucher,
                `/vouchers/${obj.slug}/${obj.company}`
              );
            }}
          >
            <ShareIcon />
          </IconButton>
        }
        title={obj.company}
        subheader={obj.validate}
      />
      <Image src={imgCard} alt="Imagem do voucher"/>
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {obj.voucher}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        {obj.status ? (
          <Link href={`/vouchers/${obj.slug}/${obj.company}`}>
            <ButtonCTA
              textButtom={"Eu quero"}
              bgColor={"$primary-color"}
              size={"small"}
            />
          </Link>
        ) : (
          <ButtonCTA
            textButtom={"Utilizado em 31/03/2024"}
            disabled={true}
            size={"small"}
          />
        )}
        {obj.status && (
          <CardContent className="cardExpand">
            <Typography
              variant="body2"
              color="text.secondary"
              onClick={handleExpandClick}
            >
              <b>Regras de uso</b>
            </Typography>
          </CardContent>
        )}
      </CardActions>
      {expanded && (
        <CardContent className="cardExpand plus">
          <Typography variant="body2" color="text.secondary">
            {obj.roles}
          </Typography>
        </CardContent>
      )}
    </Card>
  );
};
