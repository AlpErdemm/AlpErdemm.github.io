const n=`<!-- Kasap · Komutan portresi · "Kazandığı turu ezerek" kazanır
     Gür bıyık ve kırmızı bandana. Pazarcı'nın ince kıvrık bıyığına bilerek
     zıt (bkz. ../trader/rig.svg): 40 px'te ikisini ayıran şey bıyığın kütlesi.
     Kazanınca bıyık kalkar ve satır parlar; kaybedince bandana gözlere düşer. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-commander="butcher">

  <path d="M47 96 L73 96 L73 108 Q86 111 88 120 L32 120 Q34 111 47 108 Z"
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>
  <path d="M47 107 Q60 118 73 107 Q86 111 88 120 L32 120 Q34 111 47 107 Z"
        fill="#F0E6D2" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M40 116 L80 116" stroke="#C4413A" stroke-width="3.4" opacity=".8"/>

  <g class="head" style="transform-origin:60px 96px">
    <ellipse cx="28" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <ellipse cx="92" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <circle cx="60" cy="70" r="32" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>
    <ellipse cx="45" cy="53" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 45 53)"/>

    <g class="faceIdle">
      <path d="M40 55 Q47 51 54 54 M80 55 Q73 51 66 54" stroke="#2A2114" stroke-width="3.4"
            fill="none" stroke-linecap="round"/>
      <circle cx="49" cy="68" r="3.4" fill="#2A2114"/>
      <circle cx="72" cy="67" r="3.4" fill="#2A2114"/>
      <path d="M40 82 Q48 74 60 79 Q72 74 80 82 Q72 89 60 85 Q48 89 40 82 Z" fill="#2A2114"/>
      <path d="M52 93 Q60 95 68 92" stroke="#2A2114" stroke-width="2.6" fill="none"
            stroke-linecap="round"/>
    </g>

    <g class="faceWin" opacity="0">
      <path d="M40 50 Q47 45 54 49 M80 51 Q73 46 66 50" stroke="#2A2114" stroke-width="3.4"
            fill="none" stroke-linecap="round"/>
      <path d="M43 70 Q49 62 55 70 M66 70 Q72 62 78 70" stroke="#2A2114" stroke-width="3.4"
            fill="none" stroke-linecap="round"/>
      <path d="M38 79 Q48 69 60 75 Q72 69 82 79 Q72 84 60 81 Q48 84 38 79 Z" fill="#2A2114"/>
      <path d="M49 88 Q60 100 71 88 Z" fill="#2A2114"/>
      <path d="M52 89 Q60 92 68 89" stroke="#F0E6D2" stroke-width="2.2" fill="none"/>
    </g>

    <g class="faceLose" opacity="0">
      <path d="M40 52 Q47 58 54 59 M80 53 Q73 59 66 59" stroke="#2A2114" stroke-width="3.4"
            fill="none" stroke-linecap="round"/>
      <path d="M44 70 L55 70 M65 70 L76 70" stroke="#2A2114" stroke-width="3.4"
            stroke-linecap="round"/>
      <path d="M41 84 Q48 79 60 82 Q72 79 79 84 Q72 92 60 87 Q48 92 41 84 Z" fill="#2A2114"/>
      <path d="M51 96 Q60 89 69 95" stroke="#2A2114" stroke-width="2.6" fill="none"
            stroke-linecap="round"/>
    </g>
  </g>

  <g class="hat" style="transform-origin:60px 44px">
    <path d="M27 44 Q30 18 60 18 Q90 18 93 44 Q78 38 60 38 Q42 38 27 44 Z"
          fill="#C4413A" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>
    <path d="M33 33 Q46 27 60 27 Q74 27 87 33" stroke="#9B2F2A" stroke-width="2.8" fill="none"/>
    <path d="M27 42 Q20 46 15 42 Q19 50 26 49" fill="#C4413A" stroke="#2A2114"
          stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="fxWin" opacity="0" style="transform-origin:98px 30px">
    <path d="M92 34 L112 14 L118 20 L98 40 Z" fill="#D8DEE6" stroke="#2A2114" stroke-width="2.4"
          stroke-linejoin="round"/>
    <path d="M96 30 L110 17" stroke="#F0F5FA" stroke-width="2.2"/>
    <path d="M104 8 L107 2 M114 28 L120 26" stroke="#F0E6D2" stroke-width="2.6"
          stroke-linecap="round"/>
  </g>
  <g class="fxLose" opacity="0" style="transform-origin:96px 44px">
    <path d="M96 38 C90 47 89 55 94 58 C99 55 98 47 96 38 Z" fill="#7FC4E8"
          stroke="#2A2114" stroke-width="2.2"/>
  </g>
</svg>
`;export{n as default};
