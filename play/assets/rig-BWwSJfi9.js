const r=`<!-- Tuz · Eşya · "Keskinleşir. İnceleşir."\r
     Tuzluk: bombeli delikli kapak, kalın camdan bodur gövde, dibinde tuz.\r
     24 px'te üç şey okunuyor — kapaktaki delik dizisi, kapak ile gövde\r
     arasındaki koyu bilezik, ve yana dökülmüş iri kristaller.\r
     Zeytinyağı şişesiyle karışmasın diye bilerek bodur ve geniş çizildi:\r
     onun uzun bir boynu var, bunun hiç yok. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-item="tuz">\r
\r
  <!-- cam gövde -->\r
  <path d="M40 52 L80 52 L80 94 Q80 106 66 106 L54 106 Q40 106 40 94 Z"\r
        fill="#DCE4EA" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <!-- içindeki tuz, camın içinde durduğu için çizgisiz -->\r
  <path d="M44 70 L76 70 L76 94 Q76 102 66 102 L54 102 Q44 102 44 94 Z"\r
        fill="#F7F1E2"/>\r
  <ellipse cx="49" cy="66" rx="5" ry="11" fill="#fff" opacity=".2"\r
           transform="rotate(-10 49 66)"/>\r
\r
  <!-- kapak -->\r
  <path d="M36 46 Q36 22 60 20 Q84 22 84 46 Z"\r
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>\r
  <circle cx="52" cy="34" r="2.6" fill="#2A2114" opacity=".65"/>\r
  <circle cx="60" cy="30" r="2.6" fill="#2A2114" opacity=".65"/>\r
  <circle cx="68" cy="34" r="2.6" fill="#2A2114" opacity=".65"/>\r
  <circle cx="56" cy="41" r="2.3" fill="#2A2114" opacity=".65"/>\r
  <circle cx="65" cy="41" r="2.3" fill="#2A2114" opacity=".65"/>\r
  <path d="M34 44 L86 44 L86 53 L34 53 Z"\r
        fill="#B9C2CC" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>\r
\r
  <!-- dökülen kristaller: küp, çünkü tuz küp kırılır -->\r
  <path d="M90 90 L99 87 L102 96 L93 99 Z"\r
        fill="#F7F1E2" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>\r
  <path d="M17 97 L26 94 L29 103 L20 106 Z"\r
        fill="#F7F1E2" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>\r
  <path d="M99 74 L106 72 L108 79 L101 81 Z"\r
        fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>\r
  <path d="M27 82 L33 80 L35 87 L29 89 Z"\r
        fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>\r
</svg>\r
`;export{r as default};
