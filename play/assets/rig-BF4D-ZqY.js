const r=`<!-- Börek · Hamur 5 ✦ · Dövüşçü · yakın dövüş
     attackSpeed 1.05 → round(20/1.05) = 19 tick = 0.95 sn

     SINIF KURALI: DÖVÜŞÇÜ SİLAH TAŞIMAZ. \`armF\` ve \`armB\` boş, iki yumruk da
     kendi malzemesinden bir SARGI taşıyor — burada yırtık bir yufka şeridi.
     Kadroda eli boş duran ikinci aile bu; ilki sürü birimleriydi (bkz.
     README) ve orada gövde silahtı. Burada silah YOK, mesele bu.

     ARKETİP \`punch\`: iki kol birden vurur, arka kol %58'de çapraz atar.

     SİLUET: Hamur'un tek DİKDÖRTGEN gövdesi. Simit halka, Pide uzun oval,
     Mantı kıvrılmış bohça; Börek kübik bir su böreği dilimi ve 40 px'te onu
     ayıran şey köşeler. Kesik yüzdeki üç kat aynı zamanda sınıfın kartıdır:
     bir darbe bir kat alır, hepsini değil. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="punch" data-unit="borek" style="--dur-atk:0.95s">

  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6.2" fill="#000" opacity=".35"/>

  <g class="armB" style="transform-origin:30px 92px">
    <path d="M30 92 L16 96" stroke="#2A2620" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 92 L16 96" stroke="#C98A3C" stroke-width="8" stroke-linecap="round"/>
    <path d="M25 99 L27 90 M21 100 L23 91" stroke="#EFDCB4" stroke-width="3" stroke-linecap="round"/>
    <circle cx="13" cy="98" r="10" fill="#C98A3C" stroke="#2A2620" stroke-width="3"/>
    <path d="M6 104 Q13 110 20 102 Q16 107 10 107 Z" fill="#A96E2A"/>
    <path d="M9 92 L9 105 M14 91 L14 106" stroke="#2A2620" stroke-width="1.6" opacity=".7"/>
  </g>

  <g class="legB" style="transform-origin:44px 116px">
    <path d="M44 106 L41 126" stroke="#2A2620" stroke-width="12" stroke-linecap="round"/>
    <path d="M44 106 L41 126" stroke="#A96E2A" stroke-width="8" stroke-linecap="round"/>
    <path d="M34 126 Q29 131 32 136 L46 136 Q47 130 43 125 Z"
          fill="#8A5620" stroke="#2A2620" stroke-width="2.8" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 116px">
    <path d="M62 106 L65 126" stroke="#2A2620" stroke-width="12" stroke-linecap="round"/>
    <path d="M62 106 L65 126" stroke="#C98A3C" stroke-width="8" stroke-linecap="round"/>
    <path d="M62 125 Q57 130 60 136 L75 136 Q77 131 72 126 Z"
          fill="#A96E2A" stroke="#2A2620" stroke-width="2.8" stroke-linejoin="round"/>
  </g>

  <g class="body" style="transform-origin:52px 120px">
    <path d="M22 55 Q22 49 28 48 L76 48 Q82 49 82 55 L82 106
             Q80 115 72 116 L31 116 Q22 114 22 106 Z"
          fill="#C98A3C" stroke="#2A2620" stroke-width="4" stroke-linejoin="round"/>
    <path d="M26 56 L78 56" stroke="#EFDCB4" stroke-width="2.4" opacity=".75"/>
    <path d="M64 52 L82 52 L82 112 L64 112 Z" fill="#A96E2A" opacity=".55"/>
    <path d="M22 66 L82 66 M22 80 L82 80" stroke="#F3E3C0" stroke-width="5"/>
    <path d="M22 66 L82 66 M22 80 L82 80" stroke="#2A2620" stroke-width="1.4" opacity=".45"/>
    <!-- Reference pass: deeper pastry lamination, torn flaky corners and the red
         baker's sash keep the slice from reading as a plain wooden block. -->
    <path d="M24 61 Q34 56 44 61 T64 61 T81 59 M24 74 Q34 69 45 74 T65 74 T81 72"
          fill="none" stroke="#9A5D22" stroke-width="2.2" stroke-linecap="round" opacity=".8"/>
    <path d="M24 83 Q35 87 46 83 T68 83 T81 82 L81 91 Q68 94 55 90 T31 92 L23 89 Z"
          fill="#B83A2E" stroke="#2A2620" stroke-width="2.6" stroke-linejoin="round"/>
    <path d="M29 86 Q48 91 76 85" fill="none" stroke="#E46D45" stroke-width="2"
          stroke-linecap="round" opacity=".8"/>
    <path d="M22 57 L17 61 L23 64 M81 58 L87 62 L81 66 M23 103 L17 108 L24 109"
          fill="#E8B35E" stroke="#2A2620" stroke-width="2" stroke-linejoin="round"/>
    <path d="M24 46 Q52 38 80 46 L82 52 L22 52 Z"
          fill="#E3A650" stroke="#2A2620" stroke-width="3.4" stroke-linejoin="round"/>
    <path d="M32 45 Q52 41 72 45" stroke="#F7DFA6" stroke-width="3" fill="none"
          stroke-linecap="round" opacity=".8"/>
    <circle cx="36" cy="47" r="1.6" fill="#2A2620"/>
    <circle cx="52" cy="43" r="1.6" fill="#2A2620"/>
    <circle cx="68" cy="47" r="1.6" fill="#2A2620"/>

    <path d="M31 86 L43 86 M61 86 L73 86" stroke="#2A2620" stroke-width="3.4"
          stroke-linecap="round"/>
    <ellipse cx="37" cy="94" rx="6.6" ry="7.6" fill="#fff" stroke="#2A2620" stroke-width="2.3"/>
    <ellipse cx="67" cy="94" rx="6.6" ry="7.6" fill="#fff" stroke="#2A2620" stroke-width="2.3"/>
    <ellipse cx="38.4" cy="95" rx="3.6" ry="4.8" fill="#2A2620"/>
    <ellipse cx="68.4" cy="95" rx="3.6" ry="4.8" fill="#2A2620"/>
    <circle cx="36" cy="91.4" r="1.6" fill="#fff"/>
    <circle cx="66" cy="91.4" r="1.6" fill="#fff"/>
    <path d="M44 105 Q52 101 60 105" stroke="#2A2620" stroke-width="3"
          fill="none" stroke-linecap="round"/>
    <circle cx="26" cy="100" r="3" fill="#E3A650" opacity=".8"/>
    <circle cx="78" cy="100" r="3" fill="#A96E2A" opacity=".8"/>

    <path d="M28 54 Q39 49 50 52" fill="none" stroke="#FFF0C8" stroke-width="2.4"
          stroke-linecap="round" opacity=".9"/>
    <path d="M31 58 L38 56 M46 57 L54 55 M62 57 L70 55" stroke="#F7DFA6"
          stroke-width="1.8" stroke-linecap="round"/>
    <circle cx="29" cy="69" r="1.4" fill="#6F3F18"/><circle cx="76" cy="74" r="1.2" fill="#6F3F18"/>
    <circle cx="32" cy="109" r="1.5" fill="#F1C77B"/><circle cx="73" cy="107" r="1.3" fill="#F1C77B"/>

    <g data-expression="cute">
      <path d="M31 86 Q37 81 43 86 M61 86 Q67 81 73 86" fill="none" stroke="#C98A3C" stroke-width="7" stroke-linecap="round"/>
      <path d="M31 86 Q37 81 43 86 M61 86 Q67 81 73 86" fill="none" stroke="#2A2620" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="29" cy="103" rx="3.2" ry="1.9" fill="#E87660" opacity=".58"/><ellipse cx="75" cy="103" rx="3.2" ry="1.9" fill="#E87660" opacity=".58"/>
      <path d="M44 103 Q52 111 60 103 Q59 114 52 115 Q45 114 44 103 Z" fill="#3B211C" stroke="#2A2620" stroke-width="2.3"/>
      <path d="M49 110 Q52 112 55 110" fill="none" stroke="#EB816B" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M34 58 L46 74 L36 88 L48 100 L38 110"
          stroke="#0A0A06" stroke-width="2.8" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:74px 92px">
    <path d="M74 92 L98 89" stroke="#2A2620" stroke-width="16" stroke-linecap="round"/>
    <path d="M74 92 L98 89" stroke="#C98A3C" stroke-width="12" stroke-linecap="round"/>
    <path d="M85 95 L89 85 M90 95.5 L94 85.5 M95 96 L99 86" stroke="#EFDCB4" stroke-width="3.4"
          stroke-linecap="round"/>
    <circle cx="108" cy="87" r="12" fill="#C98A3C" stroke="#2A2620" stroke-width="3.4"/>
    <path d="M97 81 Q102 87 97 93" fill="none" stroke="#2A2620" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M99 94 Q108 102 117 92 Q112 99 105 99 Z" fill="#A96E2A"/>
    <path d="M100 81 Q105 77 111 78" stroke="#F7DFA6" stroke-width="2.6" fill="none"
          stroke-linecap="round" opacity=".7"/>
    <path d="M103 77 L103 96 M110 76 L110 97" stroke="#2A2620" stroke-width="1.8" opacity=".7"/>
    <path d="M117 80 A12 12 0 0 1 117 94" fill="none" stroke="#F3E3C0" stroke-width="1.8"
          opacity=".55"/>
  </g>

  <g class="fx" style="transform-origin:120px 87px">
    <path d="M120 74 L136 66 M124 87 L142 87 M120 100 L136 108"
          stroke="#F7DFA6" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M120 74 L131 69 M124 87 L137 87 M120 100 L131 105"
          stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="132" cy="78" r="2.6" fill="#F3E3C0"/>
    <circle cx="134" cy="98" r="2.2" fill="#F3E3C0"/>
  </g>
</svg>
`;export{r as default};
