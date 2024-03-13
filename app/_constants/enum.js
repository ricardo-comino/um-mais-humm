export const categories = [
  {
    id: 1,
    name: "Ver todos",
    status: true,
  },
  {
    id: 2,
    name: "Comer & beber",
    status: false,
  },
  {
    id: 3,
    name: "Experiências",
    status: false,
  },
];

export const subCategories = [
  {
    id: 1,
    name: "Italiana",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 2,
    name: "Carnes",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 3,
    name: "Frutos do mar",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 4,
    name: "Japonesa",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 5,
    name: "Bares",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 6,
    name: "Hambúrguer",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 7,
    name: "Doceria",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 8,
    name: "Pizzaria",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 9,
    name: "Saudável",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 10,
    name: "Brunch & Café da manhã",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 11,
    name: "Churrascaria",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 12,
    name: "Mexicana",
    category: "Comer & beber",
    status: false,
  },
  {
    id: 13,
    name: "Beleza & Estética",
    category: "Experiências",
    status: false,
  },
  {
    id: 14,
    name: "Esportes",
    category: "Experiências",
    status: false,
  },
  {
    id: 15,
    name: "Acessórios",
    category: "Experiências",
    status: false,
  },
  {
    id: 16,
    name: "Roupas",
    category: "Experiências",
    status: false,
  },
  {
    id: 17,
    name: "Diversão",
    category: "Experiências",
    status: false,
  },
  {
    id: 18,
    name: "Tatuagem",
    category: "Experiências",
    status: false,
  },
];

export const vouchers = [
  {
    id: 1,
    company: "Armazém São Caetano",
    voucher: "2 por 1 prato principal",
    roles: "Válido todos os dias, exceto sábado no jantar.",
    validate: "Válido até 31/03/2025",
    category: "Comer & beber",
    subCategory: "Italiana",
    slug: "armazem-sao-caetano",
    iframeGoogleMaps:
      "pb=!1m18!1m12!1m3!1d3655.58628936626!2d-46.571751925485174!3d-23.619165763716808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce9883380ab%3A0xa36e17a9b88e2ff!2sR.%20Piau%C3%AD%2C%20248%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009541-150!5e0!3m2!1spt-BR!2sbr!4v1710265893866!5m2!1spt-BR!2sbr",
    status: true,
  },
  {
    id: 2,
    company: "Botequim Carioca",
    voucher: "2 por 1 drink",
    roles: "Válido todos os dias, exceto sábado no jantar.",
    validate: "Válido até 31/03/2025",
    category: "Comer & beber",
    subCategory: "Bares",
    slug: "botequim-carioca",
    iframeGoogleMaps:
      "pb=!1m18!1m12!1m3!1d3655.58628936626!2d-46.571751925485174!3d-23.619165763716808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce9883380ab%3A0xa36e17a9b88e2ff!2sR.%20Piau%C3%AD%2C%20248%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009541-150!5e0!3m2!1spt-BR!2sbr!4v1710265893866!5m2!1spt-BR!2sbr",
    status: true,
  },
  {
    id: 3,
    company: "Casinha 52",
    voucher: "2 por 1 cookie",
    roles: "Válido todos os dias, exceto sábado no jantar.",
    validate: "Válido até 31/03/2025",
    category: "Comer & beber",
    subCategory: "Doceria",
    slug: "casinha-52",
    iframeGoogleMaps:
      "pb=!1m18!1m12!1m3!1d3655.58628936626!2d-46.571751925485174!3d-23.619165763716808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce9883380ab%3A0xa36e17a9b88e2ff!2sR.%20Piau%C3%AD%2C%20248%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009541-150!5e0!3m2!1spt-BR!2sbr!4v1710265893866!5m2!1spt-BR!2sbr",
    status: true,
  },
  {
    id: 4,
    company: "Clube Vida de Cão",
    voucher: "2 por 1 day use",
    roles: "Válido todos os dias, exceto sábado.",
    validate: "Válido até 31/03/2025",
    category: "Experiências",
    subCategory: "Diversão",
    slug: "clube-vida-de-cao",
    iframeGoogleMaps:
      "pb=!1m18!1m12!1m3!1d3655.58628936626!2d-46.571751925485174!3d-23.619165763716808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce9883380ab%3A0xa36e17a9b88e2ff!2sR.%20Piau%C3%AD%2C%20248%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009541-150!5e0!3m2!1spt-BR!2sbr!4v1710265893866!5m2!1spt-BR!2sbr",
    status: false,
  },
  {
    id: 5,
    company: "Use Cloe",
    voucher: "2 por 1 bijuteria",
    roles: "Válido todos os dias, exceto sábado no jantar.",
    validate: "Válido até 31/03/2025",
    category: "Experiências",
    subCategory: "Acessórios",
    slug: "use-cloe",
    iframeGoogleMaps: `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3655.58628936626!2d-46.571751925485174!3d-23.619165763716808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94ce5ce9883380ab%3A0xa36e17a9b88e2ff!2sR.%20Piau%C3%AD%2C%20248%20-%20Santo%20Ant%C3%B4nio%2C%20S%C3%A3o%20Caetano%20do%20Sul%20-%20SP%2C%2009541-150!5e0!3m2!1spt-BR!2sbr!4v1710265893866!5m2!1spt-BR!2sbr" frameborder="0" allowfullscreen loading="lazy"></iframe>`,
    status: true,
  },
];

export const editions = [
  {
    id: 1,
    name: "Digital",
    slug: "digital",
    status: true,
  },
  {
    id: 2,
    name: "Físico",
    slug: "fisico",
    status: true,
  },
];
