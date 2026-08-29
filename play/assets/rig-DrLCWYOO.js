const n=`<!-- Ayçiçeği · Bostan 5 ✦ · Nişancı · menzil 4
     attackSpeed 0.83 → round(20/0.83) = 24 tick = 1.20 sn

     Karakter sayfasına göre yeniden çizildi. Eski rig "silah: kendi tablası —
     çekirdeğini fırlatıyor" diyordu ve elleri boştu; sayfa bir okçu istiyor:
     yapraklı ahşap YAY, tohum uçlu oklar, sırtta örgü OK ÇANTASI, ve Bostan'ın
     ortak imzası olan mavi KORKULUK KUMAŞI yaması.

     ARKETİP \`throw\` DEĞİL \`stab\`. Yay kolunun sabit durması gerekiyor; \`throw\`
     onu -56°'den +38°'ye savurur. \`stab\` yay kolunu 16px ileri itiyor — bırakma
     anındaki sıçrama — ve asıl hareketi \`ATTACK_COMMON\` yapıyor: armB 0.24'te
     +16° geri, 0.36'da -14° ileri. Bu tam olarak kirişi çekip bırakmak, ve
     çekiş elini armB'ye koymanın tek sebebi bu.

     ARMB PİVOTU (58,86), gövdenin arkasındaki uzak omuz — kadro geneli gibi
     (24,88) civarında değil. Çekiş eli kirişin çentiğine ulaşmak zorunda ve
     çentik gövdenin sağında; sol omuzdan çıkan bir kol oraya varamazdı.

     Yay, kiriş ve ok armF'te tek parça: kirişi bir gruba, çekiş elini başka
     gruba koymak Simit'te reddedilen şeyin aynısı olurdu — iki grup ayrı
     dönüyor, kavrama dağılıyor. Burada yalnızca EL armB'de, kiriş değil, ve
     ikisinin arası vuruş boyunca birkaç pikselden fazla açılmıyor. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="aycicegi" style="--dur-atk:1.20s">

  <ellipse class="shadow" cx="52" cy="137" rx="24" ry="5.6" fill="#000" opacity=".33"/>

  <g class="armB" style="transform-origin:58px 86px">
    <path d="M58 90 L67 85 L75 81" fill="none" stroke="#2A2114" stroke-width="12"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58 90 L67 85 L75 81" fill="none" stroke="#4E6B2A" stroke-width="8.5"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M70 80 L73 87" stroke="#8A6A3A" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="77" cy="80" r="5.4" fill="#5A7A2A" stroke="#2A2114" stroke-width="2.6"/>
  </g>

  <g class="legB" style="transform-origin:44px 116px">
    <path d="M44 108 L41 128" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M44 108 L41 128" stroke="#5A4028" stroke-width="8.5" stroke-linecap="round"/>
    <path d="M34 128 Q29 132 32 136 L46 136 Q48 131 43 127 Z"
          fill="#4A3220" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 116px">
    <path d="M62 108 L65 128" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M62 108 L65 128" stroke="#6B4A28" stroke-width="8.5" stroke-linecap="round"/>
    <path d="M63 127 Q58 131 61 136 L75 136 Q78 132 73 128 Z"
          fill="#5A4028" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>
  </g>

  <g class="body" style="transform-origin:52px 126px">
    <path d="M26 82 L40 78 L46 104 Q36 110 28 106 Z"
          fill="#8A6A3A" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M28 88 L43 84 M29 95 L44 91" stroke="#6B4A28" stroke-width="2.2"/>
    <path d="M30 78 L28 66 M36 76 L36 64 M42 75 L44 63"
          stroke="#5A4028" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M28 66 L25 60 L31 61 Z" fill="#3A2412"/>
    <path d="M36 64 L33 58 L39 59 Z" fill="#3A2412"/>
    <path d="M44 63 L41 57 L47 58 Z" fill="#3A2412"/>

    <path d="M52 110 L52 62" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M52 110 L52 62" stroke="#5A7A2A" stroke-width="6" stroke-linecap="round"/>
    <path d="M52 96 C40 96 34 88 34 79 C45 79 52 87 52 96 Z"
          fill="#6B8A32" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M40 82 C44 86 48 90 51 94" stroke="#4E6B2A" stroke-width="2" fill="none"/>

    <path d="M38 88 L66 88 L64 112 Q52 118 40 112 Z"
          fill="#5A4028" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M38 92 L66 96 L65 104 L38 100 Z"
          fill="#2E5A8C" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M52 95 C56 97 57 100 54 102 C51 103 50 100 52 95 Z" fill="#E8DCC0"/>
    <path d="M40 94 L40 99 M64 98 L64 103" stroke="#E8DCC0" stroke-width="1.6"
          stroke-linecap="round"/>

      <path d="M48.3 29.4 C48.0 22.6 52.0 10.0 52.0 10.0 C52.0 10.0 56.0 22.6 55.7 29.4 Z"
            fill="#E8C33A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M56.4 29.6 C59.3 23.4 68.7 14.1 68.7 14.1 C68.7 14.1 66.4 27.1 63.0 33.0 Z"
            fill="#F0D96A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M63.5 33.5 C69.0 29.4 81.6 25.5 81.6 25.5 C81.6 25.5 73.6 36.0 67.8 39.6 Z"
            fill="#E8C33A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M68.0 40.3 C74.8 39.2 87.7 41.7 87.7 41.7 C87.7 41.7 75.7 47.2 68.9 47.7 Z"
            fill="#F0D96A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M68.8 48.4 C75.3 50.5 85.7 58.8 85.7 58.8 C85.7 58.8 72.5 58.1 66.2 55.4 Z"
            fill="#E8C33A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M65.8 56.0 C70.5 60.9 75.9 72.9 75.9 72.9 C75.9 72.9 64.5 66.2 60.2 60.9 Z"
            fill="#F0D96A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M59.6 61.2 C61.5 67.8 60.6 81.0 60.6 81.0 C60.6 81.0 53.7 69.7 52.4 63.0 Z"
            fill="#E8C33A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M51.6 63.0 C50.3 69.7 43.4 81.0 43.4 81.0 C43.4 81.0 42.5 67.8 44.4 61.2 Z"
            fill="#F0D96A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M43.8 60.9 C39.5 66.2 28.1 72.9 28.1 72.9 C28.1 72.9 33.5 60.9 38.2 56.0 Z"
            fill="#E8C33A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M37.8 55.4 C31.5 58.1 18.3 58.8 18.3 58.8 C18.3 58.8 28.7 50.5 35.2 48.4 Z"
            fill="#F0D96A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M35.1 47.7 C28.3 47.2 16.3 41.7 16.3 41.7 C16.3 41.7 29.2 39.2 36.0 40.3 Z"
            fill="#E8C33A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M36.2 39.6 C30.4 36.0 22.4 25.5 22.4 25.5 C22.4 25.5 35.0 29.4 40.5 33.5 Z"
            fill="#F0D96A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
      <path d="M41.0 33.0 C37.6 27.1 35.3 14.1 35.3 14.1 C35.3 14.1 44.7 23.4 47.6 29.6 Z"
            fill="#E8C33A" stroke="#2A2114" stroke-width="1.8" stroke-linejoin="round"/>
    <circle cx="52" cy="46" r="19" fill="#6B4A28" stroke="#2A2114" stroke-width="4"/>
    <circle cx="45" cy="37" r="2.1" fill="#3A2412"/>
    <circle cx="59" cy="37" r="2.1" fill="#3A2412"/>
    <circle cx="38" cy="48" r="2" fill="#3A2412"/>
    <circle cx="66" cy="48" r="2" fill="#3A2412"/>
    <circle cx="46" cy="60" r="2" fill="#3A2412"/>
    <circle cx="58" cy="60" r="2" fill="#3A2412"/>

    <path d="M36 34 L48 40 L46 45 L35 40 Z" fill="#2A2114"/>
    <path d="M68 34 L56 40 L58 45 L69 40 Z" fill="#2A2114"/>
    <ellipse cx="45" cy="48" rx="5.6" ry="6.4" fill="#fff" stroke="#2A2114" stroke-width="2.2"/>
    <ellipse cx="59" cy="48" rx="5.6" ry="6.4" fill="#fff" stroke="#2A2114" stroke-width="2.2"/>
    <ellipse cx="46.2" cy="49" rx="3.2" ry="4.2" fill="#2A2114"/>
    <ellipse cx="60.2" cy="49" rx="3.2" ry="4.2" fill="#2A2114"/>
    <circle cx="44.6" cy="45.8" r="1.4" fill="#fff"/>
    <circle cx="58.6" cy="45.8" r="1.4" fill="#fff"/>
    <path d="M46 59 Q52 55 58 59" stroke="#2A2114" stroke-width="2.6" fill="none"
          stroke-linecap="round"/>

    <!-- Material polish: petal veins, seed facets and a warm rim catch the key light. -->
    <path d="M33 36 Q52 24 71 36" fill="none" stroke="#FFF0A0" stroke-width="2.2"
          stroke-linecap="round" opacity=".75"/>
    <path d="M31 44 L41 50 M73 44 L63 50 M52 28 L52 42" stroke="#B87A18"
          stroke-width="1.5" stroke-linecap="round" opacity=".85"/>
    <g fill="#F0CB56"><circle cx="45" cy="50" r="1.2"/><circle cx="57" cy="47" r="1.1"/>
      <circle cx="62" cy="55" r="1.2"/><circle cx="41" cy="58" r="1"/></g>

    <g data-expression="cute">
      <path d="M35 39 Q42 35 48 40 M56 40 Q62 35 69 39" fill="none" stroke="#6B4A28" stroke-width="9" stroke-linecap="round"/>
      <path d="M35 39 Q42 34 48 39 M56 39 Q62 34 69 39" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="38" cy="57" rx="3" ry="1.8" fill="#E77962" opacity=".62"/><ellipse cx="66" cy="57" rx="3" ry="1.8" fill="#E77962" opacity=".62"/>
      <path d="M45 57 Q52 65 59 57 Q58 67 52 68 Q46 67 45 57 Z" fill="#3A1B18" stroke="#2A2114" stroke-width="2.2"/>
      <path d="M49 63 Q52 65 55 63" fill="none" stroke="#EF826E" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M38 34 L48 44 L38 54 L50 64 L42 74"
          stroke="#1A1410" stroke-width="2.8" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:72px 92px">
    <path d="M72 92 L92 88" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 92 L92 88" stroke="#6B8A32" stroke-width="8.5" stroke-linecap="round"/>
    <path d="M78 87 L82 94" stroke="#4E6B2A" stroke-width="2.2" stroke-linecap="round"/>

    <path d="M96 42 C110 60 110 104 96 120" fill="none" stroke="#2A2114" stroke-width="9"
          stroke-linecap="round"/>
    <path d="M96 42 C110 60 110 104 96 120" fill="none" stroke="#6B4A28" stroke-width="5.5"
          stroke-linecap="round"/>
    <path d="M104 58 C110 54 114 56 114 60 C109 63 105 62 104 58 Z"
          fill="#6B8A32" stroke="#2A2114" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M104 104 C110 108 114 106 114 102 C109 99 105 100 104 104 Z"
          fill="#6B8A32" stroke="#2A2114" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M96 42 L78 80 L96 120" fill="none" stroke="#E8DCC0" stroke-width="2.2"
          stroke-linejoin="round"/>

    <path d="M78 80 L112 80" stroke="#2A2114" stroke-width="6" stroke-linecap="round"/>
    <path d="M78 80 L112 80" stroke="#A87A3A" stroke-width="4" stroke-linecap="round"/>
    <path d="M108 74 C114 76 119 79 120 80 C119 81 114 84 108 86 Z"
          fill="#3A2412" stroke="#2A2114" stroke-width="2" stroke-linejoin="round"/>
    <path d="M80 77 L86 74 L86 79 Z" fill="#6B8A32"/>
    <path d="M80 83 L86 86 L86 81 Z" fill="#6B8A32"/>
    <circle cx="94" cy="90" r="5.6" fill="#5A7A2A" stroke="#2A2114" stroke-width="2.6"/>
  </g>

  <g class="fx" style="transform-origin:120px 80px">
    <path d="M118 80 L146 80" stroke="#E8C33A" stroke-width="9" stroke-linecap="round"
          opacity=".5"/>
    <path d="M120 80 L142 80" stroke="#FBEBB4" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="130" cy="72" rx="2.8" ry="2.1" fill="#E8C33A"/>
    <ellipse cx="136" cy="88" rx="2.6" ry="2" fill="#F0D96A"/>
  </g>
</svg>
`;export{n as default};
