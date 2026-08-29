const n=`<!-- Fedai · Komutan portresi · "Kaybettiğini geri alarak" kazanır
     Kasket, kısa çene sakalı, kaşın üstünde eski bir yara. Kadronun tek düz
     siperlikli portresi: 24 px'te onu ayıran şey gözlerin üstündeki o yatay
     çizgi — Kasap'ın bandanası da Fanatik'in bandı da eğri, bu değil.
     Kel değil (bkz. ../hoarder/rig.svg, kadronun kel olanı o).
     Kazanınca kalkan çıkar: pasif düşeni geri veriyor, kutlama değil kurtarma.
     Kaybedince siperlik gözlere iner. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-commander="bodyguard">

  <path d="M47 96 L73 96 L73 108 Q86 111 88 120 L32 120 Q34 111 47 108 Z"
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>
  <path d="M47 107 Q60 118 73 107 Q86 111 88 120 L32 120 Q34 111 47 107 Z"
        fill="#2E3440" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M52 108 Q60 117 68 108 L64 120 L56 120 Z"
        fill="#F0E6D2" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>

  <g class="head" style="transform-origin:60px 96px">
    <ellipse cx="28" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <ellipse cx="92" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <circle cx="60" cy="70" r="32" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>
    <ellipse cx="45" cy="53" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 45 53)"/>

    <g class="faceIdle">
      <path d="M34 82 Q37 100 60 102 Q83 100 86 82 Q79 95 60 95 Q41 95 34 82 Z"
            fill="#4A4038" opacity=".92"/>
      <path d="M38 58 Q48 53 56 57 M82 58 Q72 53 64 57" stroke="#2A2114" stroke-width="5"
            fill="none" stroke-linecap="round"/>
      <circle cx="49" cy="69" r="3.2" fill="#2A2114"/>
      <circle cx="72" cy="68" r="3.2" fill="#2A2114"/>
      <path d="M61 74 L58 81 L63 81" stroke="#2A2114" stroke-width="2.4" fill="none"
            stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M52 89 L68 89" stroke="#2A2114" stroke-width="3.2" stroke-linecap="round"/>
      <path d="M79 47 L83 57" stroke="#C4413A" stroke-width="2.6" stroke-linecap="round"/>
    </g>

    <g class="faceWin" opacity="0">
      <path d="M34 80 Q37 98 60 100 Q83 98 86 80 Q79 93 60 93 Q41 93 34 80 Z"
            fill="#4A4038" opacity=".92"/>
      <path d="M38 53 Q48 48 56 52 M82 53 Q72 48 64 52" stroke="#2A2114" stroke-width="5"
            fill="none" stroke-linecap="round"/>
      <path d="M43 70 Q49 63 55 70 M65 70 Q71 63 77 70" stroke="#2A2114" stroke-width="3.4"
            fill="none" stroke-linecap="round"/>
      <path d="M61 74 L58 81 L63 81" stroke="#2A2114" stroke-width="2.4" fill="none"
            stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M50 85 Q60 95 70 85 Z" fill="#2A2114"/>
      <path d="M53 86 Q60 89 67 86" stroke="#F0E6D2" stroke-width="2.2" fill="none"/>
      <path d="M79 47 L83 57" stroke="#C4413A" stroke-width="2.6" stroke-linecap="round"/>
    </g>

    <g class="faceLose" opacity="0">
      <path d="M34 84 Q37 101 60 102 Q83 101 86 84 Q79 97 60 97 Q41 97 34 84 Z"
            fill="#4A4038" opacity=".92"/>
      <path d="M38 56 Q48 61 56 62 M82 56 Q72 61 64 62" stroke="#2A2114" stroke-width="5"
            fill="none" stroke-linecap="round"/>
      <path d="M44 71 L55 71 M65 71 L76 71" stroke="#2A2114" stroke-width="3.4"
            stroke-linecap="round"/>
      <path d="M61 76 L58 82 L63 82" stroke="#2A2114" stroke-width="2.4" fill="none"
            stroke-linejoin="round" stroke-linecap="round"/>
      <path d="M51 93 Q60 86 69 92" stroke="#2A2114" stroke-width="3" fill="none"
            stroke-linecap="round"/>
      <path d="M79 47 L83 57" stroke="#C4413A" stroke-width="2.6" stroke-linecap="round"/>
    </g>
  </g>

  <g class="hat" style="transform-origin:60px 44px">
    <path d="M28 43 Q26 19 60 17 Q94 19 92 43 Q76 37 60 37 Q44 37 28 43 Z"
          fill="#2E3440" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>
    <path d="M34 29 Q60 23 86 29" stroke="#3E4756" stroke-width="2.8" fill="none"/>
    <path d="M23 43 Q60 37 97 43 Q97 51 60 50 Q23 51 23 43 Z"
          fill="#242A33" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>
  </g>

  <g class="fxWin" opacity="0" style="transform-origin:98px 30px">
    <path d="M98 11 L114 17 Q114 38 98 46 Q82 38 82 17 Z"
          fill="#C9BFA8" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M91 27 L97 34 L107 21" stroke="#2A2114" stroke-width="3.6" fill="none"
          stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  <g class="fxLose" opacity="0" style="transform-origin:96px 44px">
    <path d="M96 38 C90 47 89 55 94 58 C99 55 98 47 96 38 Z" fill="#7FC4E8"
          stroke="#2A2114" stroke-width="2.2"/>
  </g>
</svg>
`;export{n as default};
