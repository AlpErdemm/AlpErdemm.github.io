const r=`<!-- Şehit · Komutan portresi · "Pahalıya kaybederek" kazanır\r
     Silüeti KAZANMIŞ değil DAYANMIŞ okunmalı: alnında bağlanmış bez, yanakta\r
     bir yara bandı, çenede kırçıl sakal. Roster'ın tek "yorgun" portresi.\r
     Kaybetmek onun kazanma koşulu olduğu için \`faceLose\` çökük değil KARARLI —\r
     ağzı sıkı, kaşlar toplanmış. Kazanınca şaşırıyor gibi görünür, çünkü\r
     kazanmak onun işi değil. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-commander="martyr">\r
\r
  <path d="M47 96 L73 96 L73 108 Q86 111 88 120 L32 120 Q34 111 47 108 Z"\r
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>\r
  <path d="M47 107 Q60 118 73 107 Q86 111 88 120 L32 120 Q34 111 47 107 Z"\r
        fill="#8A7355" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <path d="M44 114 L52 118 M44 118 L52 114" stroke="#5E4B36" stroke-width="2.6"\r
        stroke-linecap="round"/>\r
\r
  <g class="head" style="transform-origin:60px 96px">\r
    <ellipse cx="28" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>\r
    <ellipse cx="92" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>\r
    <circle cx="60" cy="70" r="32" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>\r
    <ellipse cx="45" cy="53" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 45 53)"/>\r
    <!-- yanak bandı: tamir izi, yara değil — oyun kanlı değil -->\r
    <path d="M74 79 L86 74" stroke="#D8CBB0" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M76 79.5 L84 76" stroke="#B9A98A" stroke-width="1.6"/>\r
    <!-- kırçıl sakal -->\r
    <path d="M40 80 Q45 96 60 98 Q75 96 80 80 Q72 90 60 90 Q48 90 40 80 Z"\r
          fill="#8A7355" opacity=".55"/>\r
\r
    <g class="faceIdle">\r
      <path d="M41 56 Q48 53 55 56 M79 56 Q72 53 65 56" stroke="#2A2114" stroke-width="3"\r
            fill="none" stroke-linecap="round"/>\r
      <circle cx="49" cy="68" r="3.2" fill="#2A2114"/>\r
      <circle cx="72" cy="67" r="3.2" fill="#2A2114"/>\r
      <path d="M52 90 L68 89" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <g class="faceWin" opacity="0">\r
      <path d="M40 50 Q47 45 55 49 M80 50 Q73 45 65 49" stroke="#2A2114" stroke-width="3"\r
            fill="none" stroke-linecap="round"/>\r
      <circle cx="49" cy="67" r="4.6" fill="#2A2114"/>\r
      <circle cx="72" cy="66" r="4.6" fill="#2A2114"/>\r
      <circle cx="50.6" cy="65.4" r="1.6" fill="#fff"/>\r
      <circle cx="73.6" cy="64.4" r="1.6" fill="#fff"/>\r
      <ellipse cx="60" cy="91" rx="8" ry="6" fill="#2A2114"/>\r
    </g>\r
\r
    <g class="faceLose" opacity="0">\r
      <path d="M41 51 Q48 57 55 58 M79 51 Q72 57 65 58" stroke="#2A2114" stroke-width="3.2"\r
            fill="none" stroke-linecap="round"/>\r
      <path d="M44 69 L55 69 M65 69 L76 69" stroke="#2A2114" stroke-width="3.4"\r
            stroke-linecap="round"/>\r
      <path d="M50 90 L70 90" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    </g>\r
  </g>\r
\r
  <!-- alın bezi: başlık yerine bağ. Kaybedince gözlere kayan o. -->\r
  <g class="hat" style="transform-origin:60px 44px">\r
    <path d="M28 46 Q30 30 60 30 Q90 30 92 46 Q76 40 60 40 Q44 40 28 46 Z"\r
          fill="#D8CBB0" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>\r
    <path d="M33 39 Q46 34 60 34 Q74 34 87 39" stroke="#B9A98A" stroke-width="2.4" fill="none"/>\r
    <path d="M28 44 L12 38 L18 48 L10 52 L27 50" fill="#D8CBB0" stroke="#2A2114"\r
          stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="fxWin" opacity="0" style="transform-origin:60px 18px">\r
    <ellipse cx="60" cy="14" rx="20" ry="6" fill="none" stroke="#F3D98A" stroke-width="3.6"/>\r
    <path d="M34 6 L30 0 M86 6 L90 0" stroke="#F3D98A" stroke-width="2.8" stroke-linecap="round"/>\r
  </g>\r
  <g class="fxLose" opacity="0" style="transform-origin:36px 80px">\r
    <path d="M36 74 C31 83 30 90 35 93 C40 90 39 83 36 74 Z" fill="#7FC4E8"\r
          stroke="#2A2114" stroke-width="2.2"/>\r
  </g>\r
</svg>\r
`;export{r as default};
