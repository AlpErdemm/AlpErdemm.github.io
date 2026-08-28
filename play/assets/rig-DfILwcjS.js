const r=`<!-- Pazarcı · Komutan portresi · "Tezgâhı herkesten önce görerek" kazanır\r
     Fes ve ince kıvrık bıyık. Kasap'ın gür bıyığına bilerek zıt: aynı ailenin\r
     en sinsi ferdi, ve 40 px'te ikisini ayıran tek şey bıyığın kalınlığı ile\r
     başlığın silüeti.\r
     Kazanınca fes havaya kalkar ve altın parlar; kaybedince fes gözlerin\r
     üstüne düşer. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-commander="trader">\r
\r
  <!-- boyun + yaka: portrenin alt kenarı, kafanın döneceği zemin -->\r
  <path d="M47 96 L73 96 L73 108 Q86 111 88 120 L32 120 Q34 111 47 108 Z"\r
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>\r
  <path d="M47 107 Q60 118 73 107 Q86 111 88 120 L32 120 Q34 111 47 107 Z"\r
        fill="#3E6E6B" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <path d="M52 109 L60 120 L68 109" fill="#F0E6D2" stroke="#2A2114" stroke-width="2.6"\r
        stroke-linejoin="round"/>\r
\r
  <g class="head" style="transform-origin:60px 96px">\r
    <ellipse cx="28" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>\r
    <ellipse cx="92" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>\r
    <circle cx="60" cy="70" r="32" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>\r
    <ellipse cx="45" cy="53" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 45 53)"/>\r
\r
    <g class="faceIdle">\r
      <path d="M41 57 L53 54 M79 58 Q71 52 67 56" stroke="#2A2114" stroke-width="2.8"\r
            fill="none" stroke-linecap="round"/>\r
      <circle cx="49" cy="68" r="3.4" fill="#2A2114"/>\r
      <circle cx="72" cy="67" r="3.4" fill="#2A2114"/>\r
      <path d="M46 84 Q54 80 60 82 Q57.5 77.5 50 77 M74 84 Q66 80 60 82 Q62.5 77.5 70 77"\r
            fill="#2A2114"/>\r
      <path d="M51 93 Q60 96 69 92" stroke="#2A2114" stroke-width="2.6" fill="none"\r
            stroke-linecap="round"/>\r
    </g>\r
\r
    <g class="faceWin" opacity="0">\r
      <path d="M40 52 Q47 47 54 51 M80 53 Q73 48 66 52" stroke="#2A2114" stroke-width="2.8"\r
            fill="none" stroke-linecap="round"/>\r
      <path d="M43 70 Q49 62 55 70 M66 70 Q72 62 78 70" stroke="#2A2114" stroke-width="3.4"\r
            fill="none" stroke-linecap="round"/>\r
      <path d="M45 82 Q54 77 60 80 Q57 73 48 73 M75 82 Q66 77 60 80 Q63 73 72 73"\r
            fill="#2A2114"/>\r
      <path d="M49 89 Q60 101 71 89 Z" fill="#2A2114"/>\r
      <path d="M52 90 Q60 93 68 90" stroke="#F0E6D2" stroke-width="2.2" fill="none"/>\r
    </g>\r
\r
    <g class="faceLose" opacity="0">\r
      <path d="M40 53 Q47 59 54 60 M80 54 Q73 60 66 60" stroke="#2A2114" stroke-width="2.8"\r
            fill="none" stroke-linecap="round"/>\r
      <path d="M44 70 L55 70 M65 70 L76 70" stroke="#2A2114" stroke-width="3.4"\r
            stroke-linecap="round"/>\r
      <path d="M46 84 Q54 86 60 83 Q57 79 50 80 M74 84 Q66 86 60 83 Q63 79 70 80"\r
            fill="#2A2114"/>\r
      <path d="M51 95 Q60 88 69 94" stroke="#2A2114" stroke-width="2.6" fill="none"\r
            stroke-linecap="round"/>\r
    </g>\r
  </g>\r
\r
  <!-- fes: kafadan ayrı, çünkü kazanınca havaya kalkıp kaybedince düşen o -->\r
  <g class="hat" style="transform-origin:60px 44px">\r
    <path d="M38 42 L82 42 L75 14 Q74 9 68 9 L52 9 Q46 9 45 14 Z"\r
          fill="#C4552E" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>\r
    <path d="M40 35 L80 35" stroke="#8E3A1E" stroke-width="2.6" opacity=".65"/>\r
    <path d="M53 11 Q40 16 37 30 Q36 37 42 38" fill="none" stroke="#2A2114" stroke-width="2.4"/>\r
    <circle cx="42" cy="39" r="4.6" fill="#D9B23C" stroke="#2A2114" stroke-width="2.2"/>\r
  </g>\r
\r
  <g class="fxWin" opacity="0" style="transform-origin:98px 30px">\r
    <circle cx="100" cy="26" r="4.6" fill="#D9B23C" stroke="#2A2114" stroke-width="1.8"/>\r
    <circle cx="110" cy="38" r="3.4" fill="#D9B23C" stroke="#2A2114" stroke-width="1.6"/>\r
    <path d="M96 12 L100 4 M108 18 L116 14" stroke="#D9B23C" stroke-width="3"\r
          stroke-linecap="round"/>\r
  </g>\r
  <g class="fxLose" opacity="0" style="transform-origin:98px 44px">\r
    <path d="M98 38 C92 47 91 55 96 58 C101 55 100 47 98 38 Z" fill="#7FC4E8"\r
          stroke="#2A2114" stroke-width="2.2"/>\r
  </g>\r
</svg>\r
`;export{r as default};
