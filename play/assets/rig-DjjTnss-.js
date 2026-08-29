const l=`<!-- Tepsi · Eşya · "Duvar olur. Sadece duvar."
     İki halka kulplu yuvarlak bakır tepsi, hafif yandan. Silueti taşıyan
     şey tabak değil, iki yandaki kulplar: 24 px'te "kulaklı oval" olarak
     okunuyor ve bu onu kapaktan (tepesinde topuz) ve havandan (derin kap)
     ayırıyor. Ortadaki kazıma yıldız tepsiyi tepsi yapan tek süs. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="tepsi">

  <!-- kulplar -->
  <circle cx="14" cy="66" r="10" fill="none" stroke="#2A2114" stroke-width="9"/>
  <circle cx="14" cy="66" r="10" fill="none" stroke="#C9973F" stroke-width="5"/>
  <circle cx="106" cy="66" r="10" fill="none" stroke="#2A2114" stroke-width="9"/>
  <circle cx="106" cy="66" r="10" fill="none" stroke="#C9973F" stroke-width="5"/>

  <!-- kalınlık: aynı ovalin koyu kopyası, altta -->
  <ellipse cx="60" cy="72" rx="44" ry="30" fill="#8A5F2C"
           stroke="#2A2114" stroke-width="4"/>
  <!-- yüz -->
  <ellipse cx="60" cy="64" rx="44" ry="30" fill="#C9973F"
           stroke="#2A2114" stroke-width="4"/>
  <ellipse cx="60" cy="64" rx="35" ry="22" fill="#B0813A"/>
  <ellipse cx="60" cy="64" rx="24" ry="14" fill="#C9973F"/>

  <!-- kazıma yıldız -->
  <path d="M60 52 L64 61 L73 64 L64 67 L60 76 L56 67 L47 64 L56 61 Z"
        fill="#8A5F2C"/>
  <ellipse cx="42" cy="50" rx="14" ry="5" fill="#fff" opacity=".2"
           transform="rotate(-18 42 50)"/>

  <!-- perçinler, kulpların oturduğu yer -->
  <circle cx="20" cy="66" r="3" fill="#2A2114" opacity=".7"/>
  <circle cx="100" cy="66" r="3" fill="#2A2114" opacity=".7"/>
</svg>
`;export{l as default};
