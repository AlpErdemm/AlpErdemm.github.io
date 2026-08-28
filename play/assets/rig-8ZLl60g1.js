const r=`<!-- Tepsi · Eşya · "Duvar olur. Sadece duvar."\r
     İki halka kulplu yuvarlak bakır tepsi, hafif yandan. Silueti taşıyan\r
     şey tabak değil, iki yandaki kulplar: 24 px'te "kulaklı oval" olarak\r
     okunuyor ve bu onu kapaktan (tepesinde topuz) ve havandan (derin kap)\r
     ayırıyor. Ortadaki kazıma yıldız tepsiyi tepsi yapan tek süs. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-item="tepsi">\r
\r
  <!-- kulplar -->\r
  <circle cx="14" cy="66" r="10" fill="none" stroke="#2A2114" stroke-width="9"/>\r
  <circle cx="14" cy="66" r="10" fill="none" stroke="#C9973F" stroke-width="5"/>\r
  <circle cx="106" cy="66" r="10" fill="none" stroke="#2A2114" stroke-width="9"/>\r
  <circle cx="106" cy="66" r="10" fill="none" stroke="#C9973F" stroke-width="5"/>\r
\r
  <!-- kalınlık: aynı ovalin koyu kopyası, altta -->\r
  <ellipse cx="60" cy="72" rx="44" ry="30" fill="#8A5F2C"\r
           stroke="#2A2114" stroke-width="4"/>\r
  <!-- yüz -->\r
  <ellipse cx="60" cy="64" rx="44" ry="30" fill="#C9973F"\r
           stroke="#2A2114" stroke-width="4"/>\r
  <ellipse cx="60" cy="64" rx="35" ry="22" fill="#B0813A"/>\r
  <ellipse cx="60" cy="64" rx="24" ry="14" fill="#C9973F"/>\r
\r
  <!-- kazıma yıldız -->\r
  <path d="M60 52 L64 61 L73 64 L64 67 L60 76 L56 67 L47 64 L56 61 Z"\r
        fill="#8A5F2C"/>\r
  <ellipse cx="42" cy="50" rx="14" ry="5" fill="#fff" opacity=".2"\r
           transform="rotate(-18 42 50)"/>\r
\r
  <!-- perçinler, kulpların oturduğu yer -->\r
  <circle cx="20" cy="66" r="3" fill="#2A2114" opacity=".7"/>\r
  <circle cx="100" cy="66" r="3" fill="#2A2114" opacity=".7"/>\r
</svg>\r
`;export{r as default};
