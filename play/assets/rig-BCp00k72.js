const n=`<!-- Çırak · Komutan portresi · "Herkesten çok birleştirerek" kazanır
     Ustasından kalma KOCAMAN aşçı şapkası, yana devrilmiş — roster'ın tek
     "şapkası kendinden büyük" portresi, ve gençliği söyleyen şey o. Kafa
     yüzeyinde un tozu.
     Yüz üç durumda da geniş — çırak her şeye tepki verir. Kazanınca zıplar,
     kaybedince şapka gözlerini tamamen kapatır (utanç). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-commander="apprentice">

  <path d="M47 96 L73 96 L73 108 Q86 111 88 120 L32 120 Q34 111 47 108 Z"
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>
  <path d="M47 107 Q60 118 73 107 Q86 111 88 120 L32 120 Q34 111 47 107 Z"
        fill="#F0E6D2" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="60" cy="114" r="2.8" fill="#D9B23C" stroke="#2A2114" stroke-width="1.6"/>

  <g class="head" style="transform-origin:60px 96px">
    <ellipse cx="28" cy="76" rx="6.6" ry="8.4" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <ellipse cx="92" cy="76" rx="6.6" ry="8.4" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <circle cx="60" cy="72" r="31" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>
    <ellipse cx="45" cy="56" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 45 56)"/>
    <!-- un tozu -->
    <circle cx="78" cy="60" r="2.6" fill="#F7F1E2" opacity=".9"/>
    <circle cx="84" cy="68" r="1.8" fill="#F7F1E2" opacity=".8"/>
    <circle cx="38" cy="84" r="2.2" fill="#F7F1E2" opacity=".75"/>

    <g class="faceIdle">
      <path d="M42 58 Q48 54 55 57 M78 58 Q72 54 65 57" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <circle cx="50" cy="70" r="4.4" fill="#2A2114"/>
      <circle cx="71" cy="69" r="4.4" fill="#2A2114"/>
      <circle cx="51.6" cy="68.4" r="1.6" fill="#fff"/>
      <circle cx="72.6" cy="67.4" r="1.6" fill="#fff"/>
      <path d="M52 90 Q60 94 68 89" stroke="#2A2114" stroke-width="2.6" fill="none"
            stroke-linecap="round"/>
    </g>

    <g class="faceWin" opacity="0">
      <path d="M41 52 Q48 46 56 51 M79 52 Q72 46 64 51" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <path d="M44 71 Q50 62 56 71 M65 71 Q71 62 77 71" stroke="#2A2114" stroke-width="3.4"
            fill="none" stroke-linecap="round"/>
      <path d="M48 86 Q60 101 72 86 Z" fill="#2A2114"/>
      <path d="M51 87 Q60 90 69 87" stroke="#F0E6D2" stroke-width="2.2" fill="none"/>
      <ellipse cx="38" cy="82" rx="5" ry="3.4" fill="#E8776C" opacity=".5"/>
      <ellipse cx="83" cy="81" rx="5" ry="3.4" fill="#E8776C" opacity=".5"/>
    </g>

    <g class="faceLose" opacity="0">
      <path d="M42 53 Q48 59 55 61 M78 53 Q72 59 65 61" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <path d="M45 72 L56 72 M65 72 L76 72" stroke="#2A2114" stroke-width="3.2"
            stroke-linecap="round"/>
      <path d="M52 94 Q60 87 68 93" stroke="#2A2114" stroke-width="2.6" fill="none"
            stroke-linecap="round"/>
    </g>
  </g>

  <!-- devrilmiş kocaman aşçı şapkası -->
  <g class="hat" style="transform-origin:60px 44px">
    <path d="M22 48 Q18 22 34 18 Q38 4 56 8 Q70 -2 82 10 Q98 12 96 32 Q98 46 90 50
             Q76 44 58 45 Q38 46 22 48 Z"
          fill="#F7F1E2" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>
    <path d="M23 45 Q58 38 95 44" stroke="#D6CDB6" stroke-width="2.6" fill="none"/>
    <path d="M40 20 Q46 12 58 13 M68 12 Q80 14 84 24" stroke="#D6CDB6" stroke-width="2.4"
          fill="none" stroke-linecap="round"/>
  </g>

  <g class="fxWin" opacity="0" style="transform-origin:96px 34px">
    <circle cx="98" cy="30" r="5" fill="#F7F1E2" stroke="#2A2114" stroke-width="2"/>
    <circle cx="108" cy="42" r="3.6" fill="#F7F1E2" stroke="#2A2114" stroke-width="1.8"/>
    <path d="M104 16 L108 8 M112 26 L119 23" stroke="#F3D98A" stroke-width="3"
          stroke-linecap="round"/>
  </g>
  <g class="fxLose" opacity="0" style="transform-origin:98px 46px">
    <circle cx="98" cy="44" r="4.4" fill="#D6CDB6" opacity=".85"/>
    <circle cx="107" cy="52" r="3" fill="#D6CDB6" opacity=".7"/>
    <circle cx="92" cy="55" r="2.4" fill="#D6CDB6" opacity=".6"/>
  </g>
</svg>
`;export{n as default};
