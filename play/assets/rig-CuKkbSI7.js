const r=`<!-- Fanatik · Komutan portresi · "Tek bir sinerjiyi erken açarak" kazanır\r
     Alnında altıgen rozetli bir bant — altıgen tahtanın kendi biçimi; tek\r
     sinerjiye erken yemin eden biri oyunun geometrisini rozet yapmış.\r
     Palet bilerek koyu mor: cast'in geri kalanı krem/toprak tonunda, "saplantı"\r
     rengi yan yana durunca hemen ayrışıyor.\r
     Bakışı üç durumda da SABİT — fanatik şaşırmaz. Değişen şey ateşin şiddeti:\r
     kazanınca rozet yanar, kaybedince çatlar. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-commander="zealot">\r
\r
  <path d="M47 96 L73 96 L73 108 Q86 111 88 120 L32 120 Q34 111 47 108 Z"\r
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>\r
  <path d="M47 107 Q60 118 73 107 Q86 111 88 120 L32 120 Q34 111 47 107 Z"\r
        fill="#3E2A52" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <path d="M53 112 L60 108 L67 112 L67 120 L53 120 Z" fill="#6B4A8F" stroke="#2A2114"\r
        stroke-width="2.6" stroke-linejoin="round"/>\r
\r
  <g class="head" style="transform-origin:60px 96px">\r
    <ellipse cx="28" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>\r
    <ellipse cx="92" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>\r
    <circle cx="60" cy="70" r="32" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>\r
    <ellipse cx="45" cy="53" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 45 53)"/>\r
\r
    <g class="faceIdle">\r
      <path d="M40 54 L55 58 M80 54 L65 58" stroke="#2A2114" stroke-width="3.2"\r
            fill="none" stroke-linecap="round"/>\r
      <circle cx="49" cy="69" r="6" fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4"/>\r
      <circle cx="72" cy="68" r="6" fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4"/>\r
      <circle cx="49" cy="69" r="2.8" fill="#2A2114"/>\r
      <circle cx="72" cy="68" r="2.8" fill="#2A2114"/>\r
      <path d="M52 91 L68 90" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <g class="faceWin" opacity="0">\r
      <path d="M40 51 L55 56 M80 51 L65 56" stroke="#2A2114" stroke-width="3.2"\r
            fill="none" stroke-linecap="round"/>\r
      <circle cx="49" cy="69" r="7" fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4"/>\r
      <circle cx="72" cy="68" r="7" fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4"/>\r
      <circle cx="49" cy="69" r="3" fill="#6B4A8F"/>\r
      <circle cx="72" cy="68" r="3" fill="#6B4A8F"/>\r
      <path d="M48 88 Q60 100 72 88 Z" fill="#2A2114"/>\r
    </g>\r
\r
    <g class="faceLose" opacity="0">\r
      <path d="M40 57 L55 53 M80 57 L65 53" stroke="#2A2114" stroke-width="3.2"\r
            fill="none" stroke-linecap="round"/>\r
      <path d="M44 65 L55 73 M55 65 L44 73" stroke="#2A2114" stroke-width="3.2"\r
            stroke-linecap="round"/>\r
      <path d="M66 64 L77 72 M77 64 L66 72" stroke="#2A2114" stroke-width="3.2"\r
            stroke-linecap="round"/>\r
      <path d="M51 95 Q60 87 69 94" stroke="#2A2114" stroke-width="3" fill="none"\r
            stroke-linecap="round"/>\r
    </g>\r
  </g>\r
\r
  <!-- bant + altıgen rozet -->\r
  <g class="hat" style="transform-origin:60px 44px">\r
    <path d="M28 47 Q30 33 60 33 Q90 33 92 47 Q76 41 60 41 Q44 41 28 47 Z"\r
          fill="#3E2A52" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>\r
    <path d="M60 26 L72 33 L72 46 L60 53 L48 46 L48 33 Z"\r
          fill="#6B4A8F" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M60 33 L66 36.5 L66 43 L60 46.5 L54 43 L54 36.5 Z" fill="#C9A8E8" opacity=".85"/>\r
    <path d="M92 45 L104 40 L100 50 L106 54 L91 51" fill="#3E2A52" stroke="#2A2114"\r
          stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="fxWin" opacity="0" style="transform-origin:60px 30px">\r
    <path d="M60 4 Q68 16 64 24 Q60 18 56 24 Q52 16 60 4 Z" fill="#C9A8E8"\r
          stroke="#2A2114" stroke-width="2.2" stroke-linejoin="round"/>\r
    <path d="M30 24 L24 16 M90 24 L96 16" stroke="#C9A8E8" stroke-width="3"\r
          stroke-linecap="round"/>\r
  </g>\r
  <g class="fxLose" opacity="0" style="transform-origin:60px 40px">\r
    <path d="M60 26 L57 36 L63 40 L58 52" stroke="#2A2114" stroke-width="3"\r
          fill="none" stroke-linejoin="round"/>\r
  </g>\r
</svg>\r
`;export{r as default};
