const n=`<!-- Şiş · Ocak 5 ✦ · Öncü · yakın dövüş
     attackSpeed 0.80 → round(20/0.80) = 25 tick = 1.25 sn

     Karakter sayfasına göre yeniden çizildi. Eski rig üç kahverengi elipsti;
     sayfa bir şiş istiyor — et, biber, soğan, acı biber katları üst üste,
     tepesinde şişin ucu — ve yanında iki imza: ateş dolu MANGAL KALKANI ve
     üstünde yemek dizili UZUN ŞİŞ MIZRAĞI.

     ARKETİP \`swing\` DEĞİL \`stab\`. Mızrak dik duruyor; \`swing\` onu -42°'den
     +56°'ye savursaydı gövdenin içinden geçerdi. Sayfanın saldırı şeridi de
     savurma değil SAPLAMA gösteriyor: mızrak indiriliyor, ileri gidiyor,
     ucundan ateş çıkıyor.

     MIZRAK DİNLENİRKEN DİK, ve indirmeyi \`setAim\` yapıyor. Uç, kol pivotundan
     -75° yukarıda; \`stab\`in temas dönüşü +6°, yani nişan hizalı bir hedef için
     +56° istiyor ve \`AIM_RAMP\` bunu vuruşun içinde açıp kapatıyor. Sonuç tam
     olarak şeritteki hareket: dinlenirken dik tutulan mızrak, vuruşta inip
     saplanıyor, sonra geri dikiliyor. Rigde tek bir kare bunun için
     çizilmedi — açı tablodan geliyor.

     SİLUET: DİKEY KULE + solda yuvarlak ateş. Kadronun en uzunu ve tek
     "yanan kalkan" taşıyanı. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="sis" style="--dur-atk:1.25s">

  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6.4" fill="#000" opacity=".35"/>

  <!-- Mangal kalkanı: arka kolda, gövdenin solundan taşıyor. -->
  <g class="armB" style="transform-origin:32px 92px">
    <path d="M32 94 L26 104" stroke="#241C18" stroke-width="13" stroke-linecap="round"/>
    <path d="M32 94 L26 104" stroke="#5A4632" stroke-width="9" stroke-linecap="round"/>
    <path d="M21.0 103.3 L18.5 107.7" stroke="#3A3228" stroke-width="5" stroke-linecap="round"/>
    <path d="M13.7 96.0 L9.3 98.5" stroke="#3A3228" stroke-width="5" stroke-linecap="round"/>
    <path d="M13.7 76.0 L9.3 73.5" stroke="#3A3228" stroke-width="5" stroke-linecap="round"/>
    <path d="M21.0 68.7 L18.5 64.3" stroke="#3A3228" stroke-width="5" stroke-linecap="round"/>
    <circle cx="31" cy="86" r="22" fill="#3A3228" stroke="#241C18" stroke-width="4"/>
    <circle cx="31" cy="86" r="16" fill="#8C3A14" stroke="#241C18" stroke-width="2.4"/>
    <path d="M20 76 C24 84 21 92 25 101 C28 93 27 86 31 78 C34 88 32 95 36 103
             C40 93 37 84 40 75 C43 86 42 94 44 99 C46 90 45 82 44 76 Z"
          fill="#E8801E"/>
    <path d="M25 82 C28 89 26 95 29 101 C32 94 31 88 34 82 C37 90 36 96 38 100
             C40 92 39 86 38 81" fill="#FFC060"/>
    <path d="M22 76 L22 96 M31 71 L31 101 M40 76 L40 96" stroke="#241C18"
          stroke-width="2.4" stroke-linecap="round" opacity=".85"/>
    <path d="M19 104 L43 104 L41 124 Q31 129 21 124 Z"
          fill="#E8D8B0" stroke="#241C18" stroke-width="2.8" stroke-linejoin="round"/>
    <path d="M31 109 C34 112 35 116 33 120 C31 122 29 121 29 118 C29 115 31 113 31 109 Z"
          fill="#A03028"/>
  </g>

  <g class="legB" style="transform-origin:44px 118px">
    <path d="M44 108 L41 128" stroke="#241C18" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 128" stroke="#4A3A28" stroke-width="10" stroke-linecap="round"/>
    <path d="M35 118 L47 117" stroke="#8A6A3A" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M34 128 Q29 132 32 136 L47 136 Q49 131 44 127 Z"
          fill="#3A3228" stroke="#241C18" stroke-width="2.8" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 118px">
    <path d="M62 108 L65 128" stroke="#241C18" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 128" stroke="#5A4632" stroke-width="10" stroke-linecap="round"/>
    <path d="M59 117 L71 118" stroke="#8A6A3A" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M63 127 Q58 131 61 136 L76 136 Q79 132 74 128 Z"
          fill="#4A3A28" stroke="#241C18" stroke-width="2.8" stroke-linejoin="round"/>
  </g>

  <g class="body" style="transform-origin:52px 120px">
    <path d="M52 24 L52 112" stroke="#241C18" stroke-width="7" stroke-linecap="round"/>
    <path d="M52 24 L52 112" stroke="#C8CCD6" stroke-width="4.2" stroke-linecap="round"/>
    <path d="M52 10 L58 30 L46 30 Z" fill="#C8CCD6" stroke="#241C18" stroke-width="2.8"
          stroke-linejoin="round"/>

    <ellipse cx="52" cy="36" rx="17" ry="9" fill="#7A4A28" stroke="#241C18" stroke-width="3.4"/>
    <ellipse cx="52" cy="47" rx="19" ry="7.5" fill="#E8D8B0" stroke="#241C18" stroke-width="3.4"/>
    <ellipse cx="52" cy="56" rx="20" ry="7" fill="#6B7A32" stroke="#241C18" stroke-width="3.4"/>
    <ellipse cx="52" cy="65" rx="21" ry="6.5" fill="#A03028" stroke="#241C18" stroke-width="3.4"/>
    <ellipse cx="52" cy="82" rx="23" ry="15" fill="#8C5230" stroke="#241C18" stroke-width="4"/>

    <path d="M38 33 Q52 28 66 33" stroke="#5A3218" stroke-width="2.4" fill="none" opacity=".7"/>
    <path d="M40 44 Q52 40 64 44" stroke="#C9B489" stroke-width="2.2" fill="none" opacity=".8"/>
    <ellipse cx="41" cy="77" rx="4" ry="3" fill="#A0653C" opacity=".5"/>
    <ellipse cx="64" cy="90" rx="3.4" ry="2.6" fill="#5A3218" opacity=".5"/>

    <path d="M34 68 L47 75 L45 80 L33 74 Z" fill="#241C18"/>
    <path d="M70 68 L57 75 L59 80 L71 74 Z" fill="#241C18"/>
    <ellipse cx="42" cy="83" rx="6.2" ry="7.2" fill="#fff" stroke="#241C18" stroke-width="2.3"/>
    <ellipse cx="62" cy="83" rx="6.2" ry="7.2" fill="#fff" stroke="#241C18" stroke-width="2.3"/>
    <ellipse cx="43.3" cy="84" rx="3.5" ry="4.6" fill="#241C18"/>
    <ellipse cx="63.3" cy="84" rx="3.5" ry="4.6" fill="#241C18"/>
    <circle cx="41.6" cy="80.6" r="1.6" fill="#fff"/>
    <circle cx="61.6" cy="80.6" r="1.6" fill="#fff"/>
    <path d="M45 93 Q52 89 59 93" stroke="#241C18" stroke-width="2.8" fill="none"
          stroke-linecap="round"/>

    <path d="M38 96 L66 96 L64 124 Q52 129 40 124 Z"
          fill="#A03028" stroke="#241C18" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M45 97 L44 124 M52 97 L52 126 M59 97 L60 124" stroke="#E8D8B0"
          stroke-width="3" stroke-linecap="round"/>
    <path d="M52 102 C55 105 56 110 54 114 C52 116 50 115 50 112 C50 108 52 106 52 102 Z"
          fill="#D9752A" stroke="#241C18" stroke-width="1.8"/>
    <path d="M34 97 Q52 103 70 97" stroke="#8A6A3A" stroke-width="6" fill="none"
          stroke-linecap="round"/>

    <!-- İKİNCİ HÂL: mangalda dönmüş şiş. \`rigLoader\`'ın \`cooked\` parçası —
         motorda \`opacity 0\` başlar, \`trait:ocak\` olayında beş tikte açılır ve
         bir daha kapanmaz (\`UnitRig.cook\`). Kartlarda görünmez.

         Şiş'in siluetini yapan şey ÜST ÜSTE DİZİLİ dört lokma, ve kavrulan da
         onlar: her biri kendi renginin mühürlenmiş hâliyle yeniden boyanıyor
         ve üstlerine ızgara çizgisi geçiyor. Alttaki büyük gövde (y 82) YÜZÜ
         taşıyor, o yüzden ona sadece kenardan bir kavrulma hilali geliyor —
         bu katman \`body\`'nin üstüne çiziliyor, tam kaplasa gözleri silerdi.

         Aynı işlem \`armF\`'teki mızrak kopyalarına uygulanmıyor: onlar ayrı bir
         parçada ve \`cooked\` yalnız \`body\`'nin çocuğu. -->
    <g class="cooked" style="transform-origin:52px 60px">
      <ellipse cx="52" cy="36" rx="17" ry="9" fill="#4A2A14" stroke="#241C18" stroke-width="3.4"/>
      <ellipse cx="52" cy="47" rx="19" ry="7.5" fill="#C9A87A" stroke="#241C18" stroke-width="3.4"/>
      <ellipse cx="52" cy="56" rx="20" ry="7" fill="#3E4A20" stroke="#241C18" stroke-width="3.4"/>
      <ellipse cx="52" cy="65" rx="21" ry="6.5" fill="#6B1C16" stroke="#241C18" stroke-width="3.4"/>

      <path d="M42 31 L40 41 M52 29 L52 43 M62 31 L64 41" stroke="#1A120C"
            stroke-width="2.4" stroke-linecap="round" opacity=".85"/>
      <path d="M43 42 L41 52 M53 41 L53 53 M63 42 L65 52" stroke="#1A120C"
            stroke-width="2.2" stroke-linecap="round" opacity=".8"/>
      <path d="M42 51 L40 61 M52 50 L52 62 M62 51 L64 61" stroke="#1A120C"
            stroke-width="2.2" stroke-linecap="round" opacity=".8"/>
      <path d="M43 60 L41 70 M53 59 L53 71 M63 60 L65 70" stroke="#1A120C"
            stroke-width="2.2" stroke-linecap="round" opacity=".75"/>

      <path d="M52 24 L52 30" stroke="#C8CCD6" stroke-width="4.2" stroke-linecap="round"/>

      <!-- Alt gövdenin kavrulması: RİMDE, dolgu değil KONTUR.
           İlk hâli iki dolgu hilaliydi ve ikisi de içeri taşıyordu: sağ alttaki
           ağzın (\`M45 93 Q52 89 59 93\`) x 52..59 arasını, yani gülüşün sağ
           yarısını, tamamen siliyordu — bu grup \`body\`'nin ÜSTÜNE çiziliyor,
           altındaki her şeyi kapatır. Sonuç 63 px'te asimetrik yarım bir
           gülüştü. Kontur olarak, elipsin kenarına yapışık: içeri taşıyacak
           dolgu alanı yok, ve zaten mine yönünün kendi söz dağarcığı bu —
           yuvarlak uçlu sert bir hilal. -->
      <path d="M31 76 C29 79 29 85 31 89" stroke="#3E2410" stroke-width="5"
            fill="none" stroke-linecap="round" opacity=".85"/>
      <path d="M73 76 C75 79 75 85 73 89" stroke="#3E2410" stroke-width="5"
            fill="none" stroke-linecap="round" opacity=".85"/>
      <path d="M40 96 Q52 100 64 96" stroke="#3E2410" stroke-width="4"
            fill="none" stroke-linecap="round" opacity=".8"/>
      <path d="M32 78 C31 80 31 84 32 86" stroke="#FFC060" stroke-width="1.6"
            fill="none" stroke-linecap="round" opacity=".75"/>

      <path d="M27 60 C23 66 24 72 27 76" stroke="#D9752A" stroke-width="2.8"
            fill="none" stroke-linecap="round" opacity=".9"/>
      <path d="M77 58 C81 64 80 71 77 75" stroke="#D9752A" stroke-width="2.8"
            fill="none" stroke-linecap="round" opacity=".9"/>
      <circle cx="24" cy="57" r="2" fill="#FFC060"/>
      <circle cx="80" cy="55" r="1.8" fill="#E8621F"/>
    </g>

    <!-- Char crust, oil glints and ember pinpoints enrich the stacked skewer. -->
    <path d="M38 34 Q52 29 66 34 M37 79 Q52 72 67 79" fill="none" stroke="#E9A66A"
          stroke-width="1.8" stroke-linecap="round" opacity=".7"/>
    <path d="M42 61 L47 64 M58 60 L63 63 M44 91 L49 88 M61 92 L66 87" stroke="#42251B"
          stroke-width="2" stroke-linecap="round"/>
    <g fill="#FF8A2A"><circle cx="35" cy="68" r="1.3"/><circle cx="70" cy="73" r="1.1"/><circle cx="58" cy="99" r="1"/></g>

    <g data-expression="cute">
      <path d="M34 74 Q40 69 47 74 M57 74 Q64 69 70 74" fill="none" stroke="#8C5230" stroke-width="8" stroke-linecap="round"/>
      <path d="M34 74 Q40 69 47 74 M57 74 Q64 69 70 74" fill="none" stroke="#241C18" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="34" cy="93" rx="3.1" ry="1.8" fill="#E77A61" opacity=".62"/><ellipse cx="70" cy="93" rx="3.1" ry="1.8" fill="#E77A61" opacity=".62"/>
      <path d="M45 92 Q52 100 59 92 Q58 102 52 103 Q46 102 45 92 Z" fill="#3B211B" stroke="#241C18" stroke-width="2.2"/>
      <path d="M49 98 Q52 100 55 98" fill="none" stroke="#ED856B" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M38 42 L48 56 L38 70 L50 84 L40 96"
          stroke="#0E0A08" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Şiş mızrağı: dik duruyor, üstünde yemek dizili. -->
  <g class="armF" style="transform-origin:76px 92px">
    <path d="M76 92 L88 96" stroke="#241C18" stroke-width="14" stroke-linecap="round"/>
    <path d="M76 92 L88 96" stroke="#5A4632" stroke-width="10" stroke-linecap="round"/>
    <path d="M78 89 L82 97 M84 91 L88 99" stroke="#8A6A3A" stroke-width="2.4"
          stroke-linecap="round"/>

    <path d="M92 124 L97 22" stroke="#241C18" stroke-width="8" stroke-linecap="round"/>
    <path d="M92 124 L97 22" stroke="#C8CCD6" stroke-width="4.6" stroke-linecap="round"/>
    <path d="M97 12 L103 32 L91 32 Z" fill="#C8CCD6" stroke="#241C18" stroke-width="2.8"
          stroke-linejoin="round"/>
    <path d="M93 118 L90 128 L97 126 Z" fill="#C8CCD6" stroke="#241C18" stroke-width="2.4"
          stroke-linejoin="round"/>

    <ellipse cx="96" cy="44" rx="10" ry="7" fill="#E8D8B0" stroke="#241C18" stroke-width="3"/>
    <path d="M88 43 Q96 38 104 43" stroke="#C9B489" stroke-width="2.2" fill="none"/>
    <ellipse cx="95" cy="60" rx="11" ry="6.5" fill="#6B7A32" stroke="#241C18" stroke-width="3"/>
    <ellipse cx="95" cy="74" rx="10" ry="7" fill="#8C5230" stroke="#241C18" stroke-width="3"/>
    <ellipse cx="94" cy="88" rx="9" ry="6" fill="#A03028" stroke="#241C18" stroke-width="3"/>

    <path d="M87 100 Q94 96 100 100 Q94 104 87 100 Z" fill="#8A6A3A" stroke="#241C18"
          stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M93 103 L93 110" stroke="#8A6A3A" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="93" cy="113" r="4" fill="#D9A83A" stroke="#241C18" stroke-width="2.2"/>
    <circle cx="90" cy="98" r="6.4" fill="#3A3228" stroke="#241C18" stroke-width="2.8"/>
  </g>

  <g class="fx" style="transform-origin:98px 90px">
    <path d="M96 90 L138 90" stroke="#B33A18" stroke-width="15" stroke-linecap="round"
          opacity=".45"/>
    <path d="M98 90 L134 90" stroke="#D9752A" stroke-width="8.5" stroke-linecap="round"
          opacity=".9"/>
    <path d="M100 90 L128 90" stroke="#FFC060" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="140" cy="82" rx="3" ry="2.3" fill="#D9752A"/>
    <ellipse cx="143" cy="94" rx="2.6" ry="2" fill="#FFC060"/>
  </g>
</svg>
`;export{n as default};
