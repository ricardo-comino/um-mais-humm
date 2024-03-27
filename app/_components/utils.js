import React, { forwardRef } from "react";
import { IMaskInput } from "react-imask";

export const shareVoucher = (title, text, url) => {
  const shareData = {
    title: title,
    text: text,
    url: url,
  };

  if (navigator.userAgent.indexOf("Firefox") > -1) {
    navigator.clipboard.writeText(shareData.url);
  } else {
    navigator.share(shareData);
  }
};

export const isValidCPF = (cpf) => {
  const cpfNumbers = cpf.replace(/\D/g, '');
  if (cpfNumbers.length !== 11) return false;

  const cpfArray = cpfNumbers.split('').map((char) => parseInt(char));

  let sum = 0;
  let factor = 10;
  for (let i = 0; i < 9; i++) {
    sum += cpfArray[i] * factor;
    factor--;
  }

  let remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;

  if (remainder !== cpfArray[9]) return false;

  sum = 0;
  factor = 11;
  for (let i = 0; i < 10; i++) {
    sum += cpfArray[i] * factor;
    factor--;
  }

  remainder = (sum * 10) % 11;
  if (remainder === 10 || remainder === 11) remainder = 0;

  if (remainder !== cpfArray[10]) return false;

  return true;
};

export const TextMaskCPF = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="000.000.000-00"
      inputRef={ref}
      onAccept={(value) => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});
