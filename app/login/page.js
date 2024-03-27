"use client";

import { useState } from "react";
import Link from "next/link";
import ButtonCTA from "../_components/button";
import {
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  OutlinedInput,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextMaskCPF, isValidCPF } from "../_components/utils";

export default function Page() {
  const [showPassword, setShowPassword] = useState(false);
  const [values, setValues] = useState();

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value,
    });
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <div className="mainSmall bigSmall">
      <section>
        <h1>Que ótimo te ver por aqui :)</h1>
      </section>
      <section className="wrapFlex flexCol">
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="cpf">CPF</InputLabel>
          <OutlinedInput
            value={values?.cpf}
            onChange={handleChange}
            name="cpf"
            id="cpf"
            inputComponent={TextMaskCPF}
            label="CPF"
            required
          />
          {values?.cpf?.length === 14 && !isValidCPF(values.cpf) && (
            <p className="p-12 error">CPF inválido!</p>
          )}
        </FormControl>
        <FormControl sx={{ width: "100%" }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">
            Password
          </InputLabel>
          <OutlinedInput
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
            required
          />
        </FormControl>
      </section>
      <section className="wrapButtonFlex">
        <Link href={`/`}>
          <ButtonCTA textButtom={"Entrar"} />
        </Link>
        <Link href={`/`}>
          <ButtonCTA textButtom={"Cadastre-se"} type={"secondary"} />
        </Link>
      </section>
      <section className="wrapButtonFlex">
        <Link href={`/`} className="p-14 colorBrand">
          Esqueci a senha
        </Link>
      </section>
    </div>
  );
}
