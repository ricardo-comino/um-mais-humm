"use client";

import { useState } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import ShareIcon from "@mui/icons-material/Share";
import imgCard from "@/public/img_card.jpg";
import Image from "next/image";
import Link from "next/link";
import { shareVoucher } from "./utils";

export const CardCustom = ({ obj }) => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345, borderRadius: "8px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: "#000000" }} aria-label={obj.company}>
            {obj.company.substring(0, 1)}
          </Avatar>
        }
        action={
          <IconButton aria-label="compartilhar" onClick={() => shareVoucher(obj.company, obj.voucher, `/vouchers/${obj.id}`)}>
            <ShareIcon />
          </IconButton>
        }
        title={obj.company}
        subheader={obj.validate}
      />
      <Image src={imgCard} alt="Imagem do voucher" height={194} />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {obj.voucher}
        </Typography>
      </CardContent>
      <CardActions className="cardActions">
        <Link href={`/vouchers/${obj.id}`}>
          <Button variant="contained">Eu quero</Button>
        </Link>
        <CardContent className="cardExpand">
          <Typography
            variant="body2"
            color="text.secondary"
            onClick={handleExpandClick}
          >
            <b>Regras de uso</b>
          </Typography>
        </CardContent>
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
