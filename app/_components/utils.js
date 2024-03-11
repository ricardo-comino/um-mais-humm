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
