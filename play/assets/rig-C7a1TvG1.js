const n=`<!-- İstifçi · Komutan portresi · "Herkesten hızlı büyüyerek" kazanır
     Kel tepe, yan saç, yuvarlak gözlük — roster'ın tek gözlüklü portresi, ve
     40 px'te onu ayıran şey o iki halka.
     **Bal Kavanozu'na bilerek bağlanmadı.** Eski gövde rig'i kavanozun
     paletini taşıyordu; kavanoz kadrodan çıkarsa bu portre de onunla ölürdü.
     Onun yerine jenerik "istifçi" dili: gözlük, para, tıkabasa yanak.
     \`.hat\` grubu burada saç — başlığı yok ama parça sözlüğü aynı kalsın diye
     (bkz. anim.css'in parça tablosu). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-commander="hoarder">

  <path d="M45 96 L75 96 L75 108 Q88 111 90 120 L30 120 Q32 111 45 108 Z"
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>
  <path d="M45 107 Q60 118 75 107 Q88 111 90 120 L30 120 Q32 111 45 107 Z"
        fill="#7A5B3C" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="60" cy="115" r="3.4" fill="#D9B23C" stroke="#2A2114" stroke-width="1.8"/>

  <g class="head" style="transform-origin:60px 96px">
    <ellipse cx="26" cy="74" rx="7.4" ry="9.4" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <ellipse cx="94" cy="74" rx="7.4" ry="9.4" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <!-- geniş kafa: her şeyi biriktiren tek karakter -->
    <ellipse cx="60" cy="72" rx="35" ry="32" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>
    <ellipse cx="44" cy="55" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 44 55)"/>

    <g class="faceIdle">
      <path d="M40 53 L54 55 M80 53 L66 55" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <path d="M42 70 L56 70 M64 70 L78 70" stroke="#2A2114" stroke-width="3.2"
            stroke-linecap="round"/>
      <path d="M52 90 Q60 93 68 89" stroke="#2A2114" stroke-width="2.6" fill="none"
            stroke-linecap="round"/>
    </g>

    <g class="faceWin" opacity="0">
      <path d="M40 49 Q47 45 54 49 M80 49 Q73 45 66 49" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <!-- gözünde para: kazanç bu karakterin yüzünde rakam olur -->
      <circle cx="49" cy="70" r="7.4" fill="#D9B23C" stroke="#2A2114" stroke-width="2.6"/>
      <circle cx="72" cy="69" r="7.4" fill="#D9B23C" stroke="#2A2114" stroke-width="2.6"/>
      <path d="M49 65.5 L49 74.5 M46.4 68 Q51.6 70 46.4 72.5" stroke="#2A2114" stroke-width="1.8"
            fill="none" stroke-linecap="round"/>
      <path d="M72 64.5 L72 73.5 M69.4 67 Q74.6 69 69.4 71.5" stroke="#2A2114" stroke-width="1.8"
            fill="none" stroke-linecap="round"/>
      <path d="M49 87 Q60 99 71 87 Z" fill="#2A2114"/>
    </g>

    <g class="faceLose" opacity="0">
      <path d="M40 51 Q47 57 54 59 M80 51 Q73 57 66 59" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <circle cx="49" cy="71" r="4" fill="#2A2114"/>
      <circle cx="72" cy="70" r="4" fill="#2A2114"/>
      <ellipse cx="60" cy="93" rx="7" ry="5" fill="#2A2114"/>
    </g>

    <!-- yuvarlak gözlük: üç ifadenin de üstünde, çünkü çıkarmıyor -->
    <circle cx="49" cy="70" r="11" fill="none" stroke="#B8873F" stroke-width="3"/>
    <circle cx="72" cy="69" r="11" fill="none" stroke="#B8873F" stroke-width="3"/>
    <path d="M60 70 L61 69.5" stroke="#B8873F" stroke-width="3" stroke-linecap="round"/>
    <path d="M38 68 L27 66 M83 67 L94 65" stroke="#B8873F" stroke-width="2.6"
          stroke-linecap="round"/>
  </g>

  <!-- saç: başlık değil, ama aynı parça — kazanınca kalkar, kaybedince düşer -->
  <g class="hat" style="transform-origin:60px 44px">
    <path d="M27 56 Q24 40 30 34 Q34 44 34 52 Z" fill="#8A7355" stroke="#2A2114"
          stroke-width="3" stroke-linejoin="round"/>
    <path d="M93 56 Q96 40 90 34 Q86 44 86 52 Z" fill="#8A7355" stroke="#2A2114"
          stroke-width="3" stroke-linejoin="round"/>
    <path d="M46 42 Q60 36 74 42" stroke="#8A7355" stroke-width="3.4" fill="none"
          stroke-linecap="round" opacity=".8"/>
  </g>

  <g class="fxWin" opacity="0" style="transform-origin:98px 32px">
    <circle cx="99" cy="28" r="6" fill="#D9B23C" stroke="#2A2114" stroke-width="2.2"/>
    <circle cx="110" cy="40" r="4.2" fill="#D9B23C" stroke="#2A2114" stroke-width="1.8"/>
    <circle cx="104" cy="12" r="3.4" fill="#D9B23C" stroke="#2A2114" stroke-width="1.6"/>
  </g>
  <g class="fxLose" opacity="0" style="transform-origin:98px 40px">
    <circle cx="99" cy="36" r="6" fill="#8A7355" stroke="#2A2114" stroke-width="2.2"/>
    <path d="M92 48 L106 48" stroke="#8A7355" stroke-width="3" stroke-linecap="round"/>
  </g>
</svg>
`;export{n as default};
