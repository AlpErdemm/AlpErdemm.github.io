const r=`<!-- Limon · Eşya · "Uyanır. Erken ve sık."\r
     Bütün bir limon, yaprağı ve önünde kesilmiş yarısı. İki parça olması\r
     bilinçli: 24 px'te tek bir sarı oval "yumurta" gibi okunuyor, dilimli\r
     kesit ise limonu tereddütsüz limon yapıyor. Uçlardaki iki meme ucu da\r
     siluete sadece bu meyvede olan iki çıkıntıyı veriyor. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-item="limon">\r
\r
  <!-- yaprak -->\r
  <path d="M56 44 Q50 22 72 12 Q82 32 62 44 Z"\r
        fill="#5E8C4A" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>\r
  <path d="M60 42 Q66 28 71 17" stroke="#3F6B37" stroke-width="2.6" fill="none"/>\r
\r
  <!-- uçlar, gövdenin altına giriyor -->\r
  <path d="M76 52 L90 48 L86 62 Z"\r
        fill="#E8C33C" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>\r
  <path d="M20 70 L8 68 L14 82 Z"\r
        fill="#E8C33C" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>\r
\r
  <!-- bütün limon -->\r
  <ellipse cx="48" cy="64" rx="31" ry="23" fill="#E8C33C"\r
           stroke="#2A2114" stroke-width="4" transform="rotate(-12 48 64)"/>\r
  <ellipse cx="36" cy="53" rx="11" ry="5" fill="#fff" opacity=".2"\r
           transform="rotate(-24 36 53)"/>\r
\r
  <!-- kesilmiş yarısı -->\r
  <circle cx="86" cy="88" r="21" fill="#E8C33C" stroke="#2A2114" stroke-width="3.8"/>\r
  <circle cx="86" cy="88" r="16" fill="#F7F1E2"/>\r
  <circle cx="86" cy="88" r="13.5" fill="#F2D95C"/>\r
  <path d="M86 88 L86 74.5 M86 88 L97.5 81 M86 88 L97.5 95\r
           M86 88 L86 101.5 M86 88 L74.5 95 M86 88 L74.5 81"\r
        stroke="#F7F1E2" stroke-width="3" stroke-linecap="round"/>\r
</svg>\r
`;export{r as default};
