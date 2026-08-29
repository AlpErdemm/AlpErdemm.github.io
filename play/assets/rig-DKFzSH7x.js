const e=`<!-- Simit · Hamur 2 ✦ · Nişancı · menzilli (range 4)
     attackSpeed 1.43 → round(20/1.43) = 14 tick = 0.70 sn

     BU RIG ESKİMİŞTİ, sadece çirkin değildi. Başlığı "Maya 4 ✦ · Satır · yakın
     dövüş · SİLAHSIZ" diyordu ve \`data-atk="swing"\` taşıyordu; birim ise
     \`units.ts\`'te menzil 4 bir nişancı. Yani tüfeğiyle 4 hex öteden vuran bir
     karakter, elleri boş, yakın dövüş süpürmesi oynatıyordu — ve mermisi
     \`SHOTS\` tablosunda olmadığı için göğsünün ortasından çıkan krem bir nokta
     olarak uçuyordu (bkz. projectile.ts'te lahmacun/nar notu, aynı hata).

     ARKETİP \`stab\`, ve tematik değil zamanlama gerekçesiyle: README'nin dediği
     gibi 13 ayrı saldırı yok, altı arketip var — zamanlama ortak, geometri
     birime özel. \`stab\` armF'i 11px geri çekip 16px ileri atıyor ve topu topu
     ±14° döndürüyor; omuzlanmış bir tüfekte bu tam olarak geri tepmenin şekli.
     Bir \`throw\` (-56°/+38°) namluyu havada savururdu.

     Namlu ağzı \`MUZZLE\`'da \`part: 'armF'\` — elde tutulan bir mermi yok, atış
     namlunun ucundan çıkıyor; Biber'in değirmeniyle aynı durum.

     SİLUET: ortası DELİK, roster'ın tek negatif-boşluklu gövdesi. Referans o
     boşluğa yüzü koyuyor, yani delik artık bir yüz plakası — 40 px'te halkayı
     dolu daireden ayıran şey bundan sonra iç kenarın koyu çizgisi ve plakanın
     gövdeden açık tonu. Eski rig boşluğu bilerek boş tutuyordu; bu takas
     bilinçli, ve okunurluk için iç kenar kalın bırakıldı. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="simit" style="--dur-atk:0.70s">

  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6.2" fill="#000" opacity=".33"/>

  <g class="armB" style="transform-origin:32px 94px">
    <path d="M32 94 L28 106" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>
    <path d="M32 94 L28 106" stroke="#8B5A2B" stroke-width="9" stroke-linecap="round"/>
    <circle cx="27" cy="109" r="6" fill="#8B5A2B" stroke="#2A2114" stroke-width="2.8"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 104 L40 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 104 L40 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>
    <path d="M35 118 L46 116" stroke="#C9A66B" stroke-width="3" stroke-linecap="round"/>
    <path d="M32 126 Q27 131 30 136 L45 136 Q47 130 42 125 Z"
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M33 130 L44 129" stroke="#C9A66B" stroke-width="2.4" stroke-linecap="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 104 L66 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 104 L66 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>
    <path d="M60 116 L71 118" stroke="#C9A66B" stroke-width="3" stroke-linecap="round"/>
    <path d="M64 125 Q58 130 61 136 L76 136 Q80 131 74 126 Z"
          fill="#7A5430" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M63 130 L74 130" stroke="#C9A66B" stroke-width="2.4" stroke-linecap="round"/>
  </g>

  <g class="body" style="transform-origin:52px 120px">
    <!-- Başörtüsünün ucu halkanın ARKASINDAN çıksın diye önce çiziliyor. -->
    <path d="M40 30 Q20 24 8 38 Q12 55 26 47 Q34 42 42 41 Z"
          fill="#F3E6C6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M14 36 Q24 40 34 40" stroke="#DCC79C" stroke-width="2" fill="none"/>
    <path d="M18 37 L18 46 M18 39 L15 37 M18 39 L21 37 M18 43 L15 41 M18 43 L21 41"
          stroke="#A03830" stroke-width="1.7" fill="none" stroke-linecap="round"/>

    <circle cx="52" cy="70" r="18" fill="#CE9A66"/>
    <path d="M36 62 A18 18 0 0 1 68 62" fill="none" stroke="#A9743F" stroke-width="5"
          opacity=".55"/>
    <circle cx="52" cy="70" r="26.5" fill="none" stroke="#B5702E" stroke-width="17"/>
    <path d="M30 52 A28 28 0 0 1 52 43" fill="none" stroke="#D89A45" stroke-width="7"
          stroke-linecap="round" opacity=".55"/>
    <path d="M74 88 A28 28 0 0 1 58 96" fill="none" stroke="#8B5A2B" stroke-width="7"
          stroke-linecap="round" opacity=".45"/>
    <circle cx="52" cy="70" r="35" fill="none" stroke="#2A2114" stroke-width="4"/>
    <circle cx="52" cy="70" r="18" fill="none" stroke="#2A2114" stroke-width="3.8"/>

    <ellipse cx="79" cy="70" rx="3.4" ry="2.3" fill="#F3E6C6"/>
    <ellipse cx="25" cy="70" rx="3.4" ry="2.3" fill="#F3E6C6"/>
    <ellipse cx="75.4" cy="56.5" rx="2.4" ry="3.3" fill="#F3E6C6"/>
    <ellipse cx="28.6" cy="56.5" rx="2.4" ry="3.3" fill="#F3E6C6"/>
    <ellipse cx="75.4" cy="83.5" rx="3.3" ry="2.4" fill="#F3E6C6"/>
    <ellipse cx="28.6" cy="83.5" rx="3.3" ry="2.4" fill="#F3E6C6"/>
    <ellipse cx="65.5" cy="93.4" rx="2.4" ry="3.3" fill="#F3E6C6"/>
    <ellipse cx="38.5" cy="93.4" rx="2.4" ry="3.3" fill="#F3E6C6"/>
    <ellipse cx="52" cy="97" rx="3.4" ry="2.3" fill="#F3E6C6"/>
    <ellipse cx="67.6" cy="85.6" rx="2.2" ry="3" fill="#F3E6C6"/>
    <ellipse cx="36.4" cy="85.6" rx="2.2" ry="3" fill="#F3E6C6"/>
    <ellipse cx="22.9" cy="59.4" rx="3" ry="2.2" fill="#F3E6C6"/>
    <ellipse cx="81.1" cy="59.4" rx="3" ry="2.2" fill="#F3E6C6"/>
    <ellipse cx="78" cy="78" rx="2.3" ry="3.2" fill="#F3E6C6"/>
    <ellipse cx="26" cy="78" rx="2.3" ry="3.2" fill="#F3E6C6"/>
    <ellipse cx="58" cy="96" rx="3.1" ry="2.2" fill="#F3E6C6"/>
    <ellipse cx="46" cy="96" rx="3.1" ry="2.2" fill="#F3E6C6"/>

    <!-- Yüz halkanın boşluğunda. Kaşlar plakanın kenarını taşıyor: 40 px'te
         öfkeyi okutan tek şey o iki eğik blok. -->
    <path d="M38 60 L50 66 L48 70 L37 65 Z" fill="#2A2114"/>
    <path d="M66 60 L54 66 L56 70 L67 65 Z" fill="#2A2114"/>
    <ellipse cx="45" cy="74" rx="5.4" ry="6" fill="#fff" stroke="#2A2114" stroke-width="2.2"/>
    <ellipse cx="59" cy="74" rx="5.4" ry="6" fill="#fff" stroke="#2A2114" stroke-width="2.2"/>
    <ellipse cx="46" cy="75" rx="3" ry="3.8" fill="#2A2114"/>
    <ellipse cx="60" cy="75" rx="3" ry="3.8" fill="#2A2114"/>
    <circle cx="44.6" cy="72.6" r="1.3" fill="#fff"/>
    <circle cx="58.6" cy="72.6" r="1.3" fill="#fff"/>
    <path d="M47 84 Q52 81 57 84" stroke="#2A2114" stroke-width="2.6" fill="none"
          stroke-linecap="round"/>

    <!-- Başörtüsü: halkanın tepesine sarılı, düğüm solda. -->
    <path d="M23.6 47.8 A36 36 0 0 1 80.4 47.8 L65.4 59.5 A17 17 0 0 0 38.6 59.5 Z"
          fill="#F3E6C6" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M30 48 Q52 38 74 48" stroke="#DCC79C" stroke-width="2.2" fill="none"/>
    <path d="M36 56 Q52 49 68 56" stroke="#DCC79C" stroke-width="2" fill="none" opacity=".8"/>
    <ellipse cx="45" cy="31" rx="7.5" ry="6.2" fill="#F3E6C6" stroke="#2A2114" stroke-width="3"/>
    <ellipse cx="37" cy="27.5" rx="5.2" ry="4.4" fill="#F3E6C6" stroke="#2A2114" stroke-width="2.8"/>
    <path d="M41 30 Q45 34 50 31" stroke="#DCC79C" stroke-width="2.2" fill="none"/>

    <!-- Önlük, sonra üstüne halat kemer ve başak madalyonu. -->
    <path d="M42 104 L64 104 L62 127 Q52 132 42 127 Z"
          fill="#F3E6C6" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M52 112 L52 123 M52 115 L48 112 M52 115 L56 112 M52 119 L48 116 M52 119 L56 116"
          stroke="#A03830" stroke-width="1.9" fill="none" stroke-linecap="round"/>
    <path d="M28 105 Q52 111 76 105" stroke="#C9A66B" stroke-width="6.5" fill="none"
          stroke-linecap="round"/>
    <path d="M34 107 L36 103 M43 109.5 L45 105.5 M60 109.5 L62 105.5 M69 107 L71 103"
          stroke="#8B5A2B" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="52" cy="109" r="6.4" fill="#D9B23C" stroke="#2A2114" stroke-width="2.8"/>
    <path d="M52 106 L52 112 M52 108 L49.5 106.5 M52 108 L54.5 106.5 M52 110.5 L49.5 109 M52 110.5 L54.5 109"
          stroke="#8B5A2B" stroke-width="1.5" fill="none" stroke-linecap="round"/>

    <!-- Tohum kesesi, sol kalçada. -->
    <path d="M16 106 Q24 101 32 106 L30 120 Q23 125 18 120 Z"
          fill="#8B5A2B" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M17 111 L31 111 M18 116 L30 116" stroke="#6E4A2A" stroke-width="2"/>
    <ellipse cx="21" cy="104" rx="2.6" ry="2" fill="#D9B23C"/>
    <ellipse cx="27" cy="103.5" rx="2.6" ry="2" fill="#D9B23C"/>

    <!-- Toasted crust glints and varied sesame values prevent a flat dotted ring. -->
    <path d="M29 51 A31 31 0 0 1 49 40" fill="none" stroke="#F2BB67" stroke-width="2"
          stroke-linecap="round" opacity=".8"/>
    <g fill="#8E5526" opacity=".8"><ellipse cx="33" cy="49" rx="1.8" ry="1.2"/>
      <ellipse cx="69" cy="49" rx="1.7" ry="1.1"/><ellipse cx="73" cy="88" rx="1.8" ry="1.2"/>
      <ellipse cx="40" cy="95" rx="1.7" ry="1.1"/></g>
    <path d="M42 105 Q52 110 62 105" fill="none" stroke="#F7DFA6" stroke-width="1.5" opacity=".65"/>

    <g data-expression="cute">
      <path d="M37 65 Q43 60 49 65 M55 65 Q61 60 67 65" fill="none" stroke="#CE9A66" stroke-width="7" stroke-linecap="round"/>
      <path d="M37 65 Q43 60 49 65 M55 65 Q61 60 67 65" fill="none" stroke="#2A2114" stroke-width="2.7" stroke-linecap="round"/>
      <ellipse cx="36" cy="84" rx="3" ry="1.8" fill="#E77D68" opacity=".62"/><ellipse cx="68" cy="84" rx="3" ry="1.8" fill="#E77D68" opacity=".62"/>
      <path d="M46 83 Q52 90 58 83 Q57 92 52 93 Q47 92 46 83 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.1"/>
      <path d="M49 88 Q52 90 55 88" fill="none" stroke="#ED8A74" stroke-width="1.7" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M32 52 L44 62 L34 72 L46 84 L36 94"
          stroke="#1A1410" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Ön kol + tüfek, tek parça. İki el de burada: \`stab\` armF'i ötelerken
       armB ayrı dönüyor, kavrama iki gruba bölünse eller birbirinden ayrılırdı. -->
  <g class="armF" style="transform-origin:70px 96px">
    <path d="M52 103 L88 93" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M52 103 L88 93" stroke="#93683C" stroke-width="10" stroke-linecap="round"/>
    <path d="M56 101 L84 93.5" stroke="#B08551" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M58 101 L61 99.2 M64 99.4 L67 97.6" stroke="#4A3826" stroke-width="2.4"
          stroke-linecap="round"/>
    <path d="M86 94 L118 85.8" stroke="#2A2114" stroke-width="10" stroke-linecap="round"/>
    <path d="M86 94 L118 85.8" stroke="#8A8F98" stroke-width="6" stroke-linecap="round"/>
    <path d="M88 96 L92 82" stroke="#2A2114" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M88 96 L92 82" stroke="#C8CCD6" stroke-width="4.4" stroke-linecap="round"/>
    <path d="M115 89.2 L119 81.2" stroke="#2A2114" stroke-width="7" stroke-linecap="round"/>
    <path d="M115 89.2 L119 81.2" stroke="#C8CCD6" stroke-width="4" stroke-linecap="round"/>
    <path d="M78 99 Q83 105 88 99" stroke="#2A2114" stroke-width="3" fill="none"
          stroke-linecap="round"/>
    <circle cx="80" cy="95.5" r="4.6" fill="#D9B23C" stroke="#2A2114" stroke-width="2.4"/>
    <path d="M80 93 L80 98" stroke="#8B5A2B" stroke-width="1.5" stroke-linecap="round"/>

    <path d="M70 96 L76 98" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>
    <path d="M70 96 L76 98" stroke="#8B5A2B" stroke-width="9" stroke-linecap="round"/>
    <circle cx="78" cy="98.5" r="6.4" fill="#8B5A2B" stroke="#2A2114" stroke-width="2.8"/>
    <path d="M84 100 L98 92" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M84 100 L98 92" stroke="#8B5A2B" stroke-width="8.4" stroke-linecap="round"/>
    <path d="M86 99 L95 94" stroke="#C9A66B" stroke-width="2.4" stroke-linecap="round"/>
    <circle cx="100" cy="91" r="6.2" fill="#8B5A2B" stroke="#2A2114" stroke-width="2.8"/>
    <path d="M96 89.5 L104 92" stroke="#6E4A2A" stroke-width="1.9" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:120px 84px">
    <path d="M120 84 L137 78 M120 84 L139 85 M120 84 L136 91 M120 84 L130 72 M120 84 L128 95"
          stroke="#F0C24A" stroke-width="4.6" stroke-linecap="round" opacity=".9"/>
    <circle cx="121" cy="84" r="6.4" fill="#FBEBB4" opacity=".95"/>
    <ellipse cx="133" cy="80" rx="3" ry="2.2" fill="#F3E6C6"/>
    <ellipse cx="138" cy="88" rx="2.8" ry="2" fill="#F3E6C6"/>
    <ellipse cx="130" cy="93" rx="2.6" ry="2" fill="#F3E6C6"/>
  </g>
</svg>
`;export{e as default};
