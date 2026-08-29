const n=`<!-- Çay · İkram 4 ✦ · Nişancı · menzil 4
     attackSpeed 0.95 → round(20/0.95) = 21 tick = 1.05 sn

     Karakter sayfasına göre yeniden çizildi. Eski rig "silah: ince belli
     bardak — sıcak çayı savuruyor" diyordu ve eli boştu; sayfa bir okçu
     istiyor: ÇAY DALI YAY, KAŞIK OKLUK, yaprak bandana, çay pelerini.

     Menzilli üçlüsünün DÖRDÜNCÜ tekrarı: \`range: 4\`, yani \`carriesShot\` evet
     diyor, ama ne \`MUZZLE\` ne \`SHOTS\` satırı vardı — ok, göğsün ortasından
     çıkan krem bir noktaydı. Simit, Mısır ve Ayçiçeği'nde de aynıydı.

     ARKETİP \`throw\` DEĞİL \`stab\`, ve yay için doğru kurgu Ayçiçeği'nde zaten
     kurulmuştu; ikisi aynı olsun diye birebir izlendi. Yay tutan kol sabit
     durmalı, \`throw\`un -56°/+38°'i bunu yapmaz; \`stab\` kolu 16px itiyor, ki o
     da bırakma sarsıntısı. Asıl işi ortak pist yapıyor: \`ATTACK_COMMON\` armB'yi
     0.24'te +16°'ye, 0.36'da -14°'ye götürüyor — GER, sonra BIRAK.

     armB pivotu (58,86), roster'ın alıştığı (24,88) değil: gez gövdenin
     sağında duruyor ve sol omuza asılı bir kol oraya yetişemez. Kiriş armF'te
     yayla birlikte kalıyor — iki ayrı dönen gruba bölünmüş bir kiriş, Simit'in
     çift elli kavramasının zaten elediği hata.

     \`.ammo\` grubu kaldırıldı: \`stab\`in ammo pisti yok, kalsaydı tane namlunun
     ucunda asılı kalırdı; \`MUZZLE\` okun ucunu \`armF\` üzerinden okuyor.

     İKRAM ORTAK TABAN: gümüş tepsi. KAP: ince belli bardak, kadronun tek
     KUM SAATİ silueti — Kahve'nin fincanından ve Lokum'un küpünden ayıran o. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="cay" style="--dur-atk:1.05s">

  <ellipse class="shadow" cx="52" cy="137" rx="24" ry="5.4" fill="#000" opacity=".33"/>

  <g class="armB" style="transform-origin:58px 86px">
    <path d="M58 92 L68 88 L78 86" fill="none" stroke="#2A2114" stroke-width="12"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58 92 L68 88 L78 86" fill="none" stroke="#5C3A22" stroke-width="8.5"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M70 84 L73 91" stroke="#A8322A" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="81" cy="86" r="5.4" fill="#5C3A22" stroke="#2A2114" stroke-width="2.6"/>
  </g>

  <g class="legB" style="transform-origin:44px 118px">
    <path d="M44 112 L41 128" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M44 112 L41 128" stroke="#4A3320" stroke-width="8.5" stroke-linecap="round"/>
    <path d="M36 118 L47 117" stroke="#A8322A" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M35 128 Q30 132 33 136 L46 136 Q47 131 43 127 Z"
          fill="#3A2718" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 118px">
    <path d="M62 112 L65 128" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M62 112 L65 128" stroke="#5C3A22" stroke-width="8.5" stroke-linecap="round"/>
    <path d="M59 117 L70 118" stroke="#A8322A" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M63 127 Q58 132 61 136 L75 136 Q77 131 72 128 Z"
          fill="#4A3320" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>
  </g>

  <g class="body" style="transform-origin:52px 124px">
    <path d="M28 62 Q16 76 18 104 Q26 112 34 106 L36 70 Z"
          fill="#7A1E1E" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M21 78 L33 80 L31 104 Q25 108 21 102 Z" fill="#EDE3D0"/>
    <path d="M26 86 C31 87 32 92 29 96 C25 97 23 93 24 89 Z"
          fill="#5A6B32" stroke="#2A2114" stroke-width="1.6" stroke-linejoin="round"/>

    <path d="M26 62 L40 58 L46 92 L32 96 Z"
          fill="#5C3A22" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M27 70 L42 66 M29 80 L44 76" stroke="#3A2718" stroke-width="2.2"/>
    <path d="M30 58 L28 46 M36 56 L36 44 M42 56 L44 45"
          stroke="#8A5A32" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="27" cy="43" rx="4.4" ry="5.6" fill="#D9902A" stroke="#2A2114" stroke-width="2.2"/>
    <ellipse cx="36" cy="41" rx="4.4" ry="5.6" fill="#D9902A" stroke="#2A2114" stroke-width="2.2"/>
    <ellipse cx="45" cy="42" rx="4.4" ry="5.6" fill="#D9902A" stroke="#2A2114" stroke-width="2.2"/>

    <ellipse cx="52" cy="118" rx="28" ry="6.4" fill="#C8CCD6" stroke="#2A2114" stroke-width="3.4"/>
    <ellipse cx="52" cy="116" rx="20" ry="4" fill="#E4E7EC" opacity=".8"/>

    <path d="M38 100 L66 100 L68 118 L36 118 Z"
          fill="#4A3320" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M42 100 L42 118 M62 100 L62 118" stroke="#7A1E1E" stroke-width="4"/>
    <path d="M46 102 L58 102 L57 114 Q52 118 47 114 Z"
          fill="#EDE3D0" stroke="#2A2114" stroke-width="2.2" stroke-linejoin="round"/>
    <path d="M52 105 C56 106 57 110 54 113 C51 114 49 111 50 108 Z"
          fill="#5A6B32" stroke="#2A2114" stroke-width="1.6" stroke-linejoin="round"/>

    <path d="M50 30 C42 26 38 17 42 11 C49 14 52 22 52 30 Z"
          fill="#5A6B32" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M54 31 C62 26 66 17 62 12 C55 16 52 23 54 31 Z"
          fill="#3E5A2A" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>

    <path d="M30 26 C31 44 38 54 38 66 C38 78 36 84 36 92 L68 92
             C68 84 66 78 66 66 C66 54 73 44 74 26 Z"
          fill="#F2EDE4" stroke="#2A2114" stroke-width="4" stroke-linejoin="round" opacity=".97"/>
    <path d="M33 38 C34 50 41 58 41 68 C41 78 39 82 39 88 L65 88
             C65 82 63 78 63 68 C63 58 70 50 71 38 Z"
          fill="#7A1E1E"/>
    <path d="M35 34 C36 48 43 56 43 68" stroke="#F7F3EC" stroke-width="4"
          fill="none" opacity=".5" stroke-linecap="round"/>
    <ellipse cx="52" cy="26" rx="22" ry="5.5" fill="none" stroke="#2A2114" stroke-width="3.4"/>

    <path d="M34 46 L47 53 L45 58 L33 52 Z" fill="#2A2114"/>
    <path d="M70 46 L57 53 L59 58 L71 52 Z" fill="#2A2114"/>
    <ellipse cx="43" cy="60" rx="6.5" ry="7.5" fill="#fff" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="61" cy="60" rx="6.5" ry="7.5" fill="#fff" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="44.3" cy="61" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="62.3" cy="61" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="42.6" cy="57.6" r="1.6" fill="#fff"/>
    <circle cx="60.6" cy="57.6" r="1.6" fill="#fff"/>

    <path d="M37 72 Q52 79 67 72 L68 88 Q52 95 36 88 Z"
          fill="#A8322A" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
    <path d="M38 78 Q52 85 66 78" stroke="#7A1E1E" stroke-width="2.6" fill="none"/>
    <path d="M46 82 L52 80 L58 82" stroke="#D9902A" stroke-width="2.2" fill="none"
          stroke-linecap="round"/>
    <circle cx="52" cy="88" r="2.6" fill="#D9902A"/>

    <!-- Tea-glass refraction, meniscus and etched tulip detail. -->
    <path d="M39 33 C34 54 35 78 40 94" fill="none" stroke="#FFD9C2" stroke-width="2.2"
          stroke-linecap="round" opacity=".72"/>
    <path d="M38 48 Q52 53 66 48" fill="none" stroke="#F3A25A" stroke-width="2.2" opacity=".8"/>
    <path d="M46 101 Q52 96 58 101 Q57 109 52 113 Q47 109 46 101 Z"
          fill="none" stroke="#D9A93C" stroke-width="1.6"/>
    <circle cx="43" cy="57" r="1.2" fill="#FFF1D6"/><circle cx="62" cy="69" r="1" fill="#FFF1D6"/>

    <g data-expression="cute">
      <path d="M34 52 Q41 47 47 52 M57 52 Q63 47 70 52" fill="none" stroke="#7A1E1E" stroke-width="8" stroke-linecap="round"/>
      <path d="M35 52 Q41 47 47 52 M57 52 Q63 47 69 52" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="35" cy="71" rx="3" ry="1.8" fill="#F08A73" opacity=".65"/><ellipse cx="69" cy="71" rx="3" ry="1.8" fill="#F08A73" opacity=".65"/>
      <path d="M45 79 Q52 86 59 79 Q58 88 52 89 Q46 88 45 79 Z" fill="#431D20" stroke="#2A2114" stroke-width="2.2"/>
      <path d="M49 85 Q52 87 55 85" fill="none" stroke="#EF806B" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M36 34 L48 48 L38 62 L50 76 L40 90"
          stroke="#1A1410" stroke-width="2.8" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:72px 92px">
    <path d="M72 92 L88 88" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 92 L88 88" stroke="#5C3A22" stroke-width="8.5" stroke-linecap="round"/>
    <path d="M76 85 L79 92 M82 84 L85 91" stroke="#A8322A" stroke-width="2.4"
          stroke-linecap="round"/>

    <path d="M97 48 C112 64 112 106 97 122" fill="none" stroke="#2A2114"
          stroke-width="9" stroke-linecap="round"/>
    <path d="M97 48 C112 64 112 106 97 122" fill="none" stroke="#7A5430"
          stroke-width="5.5" stroke-linecap="round"/>
    <path d="M104 60 C110 57 114 60 113 65 C108 66 105 64 104 60 Z"
          fill="#5A6B32" stroke="#2A2114" stroke-width="2" stroke-linejoin="round"/>
    <path d="M106 106 C112 104 116 108 114 112 C109 112 106 110 106 106 Z"
          fill="#3E5A2A" stroke="#2A2114" stroke-width="2" stroke-linejoin="round"/>
    <path d="M97 48 L85 85 L97 122" fill="none" stroke="#2A2114" stroke-width="4"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M97 48 L85 85 L97 122" fill="none" stroke="#F2EDE4" stroke-width="2.2"
          stroke-linecap="round" stroke-linejoin="round"/>

    <path d="M85 85 L111 81" stroke="#2A2114" stroke-width="6.4" stroke-linecap="round"/>
    <path d="M85 85 L111 81" stroke="#A88450" stroke-width="3.8" stroke-linecap="round"/>
    <ellipse cx="116" cy="80" rx="6.4" ry="4.6" fill="#D9902A" stroke="#2A2114"
             stroke-width="2.6"/>
    <ellipse cx="116" cy="80" rx="3" ry="2" fill="#F0C878"/>
    <path d="M86 88 C82 91 78 91 76 88 C79 85 83 85 86 82 Z"
          fill="#5A6B32" stroke="#2A2114" stroke-width="2" stroke-linejoin="round"/>

    <circle cx="93" cy="86" r="5.6" fill="#5C3A22" stroke="#2A2114" stroke-width="2.6"/>
  </g>

  <g class="fx" style="transform-origin:120px 80px">
    <path d="M120 80 L146 76" stroke="#C0392B" stroke-width="9" stroke-linecap="round"
          opacity=".45"/>
    <path d="M121 80 L142 77" stroke="#E8802A" stroke-width="4.6" stroke-linecap="round"
          opacity=".9"/>
    <path d="M122 80 L138 78" stroke="#FFD9A0" stroke-width="2" stroke-linecap="round"/>
    <path d="M130 68 C134 65 138 67 137 71 C133 72 130 71 130 68 Z" fill="#5A6B32"/>
    <path d="M133 90 C137 88 141 90 139 94 C135 94 133 92 133 90 Z" fill="#3E5A2A"/>
  </g>
</svg>
`;export{n as default};
