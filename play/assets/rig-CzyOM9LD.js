const r=`<!-- Nar · Pazar 5 ✦ · Nişancı · menzil 4\r
     attackSpeed 0.83 → round(20/0.83) = 24 tick = 1.20 sn\r
\r
     Başlık da yanlıştı, sanat da. Eski başlık "Şerbet 4 ✦ ... menzil 4 · tek\r
     hedef · attackSpeed 0.95 → 21 tick" diyordu; \`units.ts\` Pazar 5 diyor,\r
     0.83 diyor, ve \`skills.ts\` hedefin BİTİŞİĞİNDEKİLERE de vuruyor, yani tek\r
     hedef değil. Süre (stildeki dur-atk 1.20s = 24 tick) tesadüfen doğruydu.\r
\r
     Silah sapandı; sayfa TANE TOPU istiyor — pirinç kuşaklı ahşap namlu,\r
     üstünde tane dolu cam hazne, ağzı kızıl. Zırh, altın bandolier, pazar\r
     pelerini ve altın kese de sayfadan.\r
\r
     ARKETİP \`throw\` DEĞİL \`stab\`, Simit/Mısır/Ayçiçeği ile aynı gerekçe:\r
     omuzlanmış bir namlu -56°/+38° savrulmaz, geri teper.\r
\r
     \`.ammo\` grubu KALDIRILDI ve \`MUZZLE\` \`part: 'ammo'\`dan \`part: 'armF'\`e\r
     geçti. Elde tutulan bir avuç yoktu artık — tane namludan çıkıyor, ve\r
     \`stab\`in ammo pisti olmadığı için grup kalsaydı avuç namlunun ucunda\r
     asılı kalırdı. \`SHOTS\` zaten \`flakes\`: bir avuç tane, tek mermi değil. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="nar" style="--dur-atk:1.20s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="28" ry="6.2" fill="#000" opacity=".33"/>\r
\r
  <g class="armB" style="transform-origin:28px 92px">\r
    <path d="M28 94 L20 106" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>\r
    <path d="M28 94 L20 106" stroke="#8E2A22" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M22 98 L29 101" stroke="#D9A93C" stroke-width="2.4" stroke-linecap="round"/>\r
    <circle cx="18" cy="109" r="5.6" fill="#8E2A22" stroke="#2A2114" stroke-width="2.6"/>\r
    <path d="M16 82 A12 12 0 0 1 40 82 Q28 87 16 82 Z"\r
          fill="#C0392B" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>\r
    <path d="M18 80 A12 12 0 0 1 38 80" fill="none" stroke="#D9A93C" stroke-width="3"/>\r
    <circle cx="28" cy="76" r="2.6" fill="#D9A93C" stroke="#2A2114" stroke-width="1.6"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 116px">\r
    <path d="M44 106 L41 126" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>\r
    <path d="M44 106 L41 126" stroke="#6E1E18" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M36 114 L47 113" stroke="#D9A93C" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M34 126 Q29 131 32 136 L46 136 Q48 130 43 125 Z"\r
          fill="#5A3A1E" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M35 130 L45 129" stroke="#D9A93C" stroke-width="2.2" stroke-linecap="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 116px">\r
    <path d="M62 106 L65 126" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>\r
    <path d="M62 106 L65 126" stroke="#8E2A22" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M59 113 L70 114" stroke="#D9A93C" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M63 125 Q58 130 61 136 L75 136 Q78 131 72 126 Z"\r
          fill="#8A5A32" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M64 130 L74 130" stroke="#D9A93C" stroke-width="2.2" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="body" style="transform-origin:52px 118px">\r
    <path d="M24 62 L40 66 L36 118 Q26 124 18 116 Z"\r
          fill="#F5EBD8" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M27 64 L24 118 M33 65.5 L30 120" stroke="#C0392B" stroke-width="5.5"/>\r
    <path d="M22 70 L38 74" stroke="#D9A93C" stroke-width="4" stroke-linecap="round"/>\r
    <circle cx="21" cy="120" r="3" fill="#D9A93C" stroke="#2A2114" stroke-width="1.8"/>\r
    <circle cx="33" cy="123" r="3" fill="#D9A93C" stroke="#2A2114" stroke-width="1.8"/>\r
\r
    <path d="M38 52 L41 32 L47 46 L52 26 L57 46 L63 32 L66 52 Z"\r
          fill="#8E2A22" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M41 32 L43 38 L39 38 Z M52 26 L55 33 L49 33 Z M63 32 L65 38 L61 38 Z"\r
          fill="#D9A93C" stroke="#2A2114" stroke-width="1.6" stroke-linejoin="round"/>\r
\r
    <circle cx="52" cy="76" r="30" fill="#C0392B" stroke="#2A2114" stroke-width="4.2"/>\r
    <path d="M52 48 Q68 64 65 100" stroke="#8E2A22" stroke-width="3" fill="none" opacity=".65"/>\r
    <path d="M52 48 Q36 64 39 100" stroke="#8E2A22" stroke-width="3" fill="none" opacity=".65"/>\r
    <ellipse cx="39" cy="62" rx="9" ry="5.5" fill="#fff" opacity=".22"/>\r
\r
    <path d="M32 55 L46 63 L44 68 L31 61 Z" fill="#2A2114"/>\r
    <path d="M72 55 L58 63 L60 68 L73 61 Z" fill="#2A2114"/>\r
    <ellipse cx="43" cy="71" rx="6.5" ry="7.5" fill="#fff" stroke="#2A2114" stroke-width="2.4"/>\r
    <ellipse cx="61" cy="71" rx="6.5" ry="7.5" fill="#fff" stroke="#2A2114" stroke-width="2.4"/>\r
    <ellipse cx="44.3" cy="72" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="62.3" cy="72" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="42.6" cy="68.6" r="1.6" fill="#fff"/>\r
    <circle cx="60.6" cy="68.6" r="1.6" fill="#fff"/>\r
    <path d="M45 84 Q52 79 59 84" stroke="#2A2114" stroke-width="3" fill="none"\r
          stroke-linecap="round"/>\r
\r
    <path d="M30 92 L74 106" stroke="#5A3A1E" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M30 92 L74 106" stroke="#8A5A32" stroke-width="5.5" stroke-linecap="round"/>\r
    <circle cx="38" cy="95" r="3.4" fill="#D9A93C" stroke="#2A2114" stroke-width="1.6"/>\r
    <circle cx="49" cy="98.5" r="3.4" fill="#D9A93C" stroke="#2A2114" stroke-width="1.6"/>\r
    <circle cx="60" cy="102" r="3.4" fill="#D9A93C" stroke="#2A2114" stroke-width="1.6"/>\r
\r
    <path d="M36 104 L68 104 L66 124 Q52 130 38 124 Z"\r
          fill="#8E2A22" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>\r
    <circle cx="52" cy="112" r="8.5" fill="#D9A93C" stroke="#2A2114" stroke-width="3"/>\r
    <circle cx="52" cy="108.5" r="2.2" fill="#C4213E"/>\r
    <circle cx="48.6" cy="111" r="2.2" fill="#C4213E"/>\r
    <circle cx="55.4" cy="111" r="2.2" fill="#C4213E"/>\r
    <circle cx="50" cy="115" r="2.2" fill="#C4213E"/>\r
    <circle cx="54" cy="115" r="2.2" fill="#C4213E"/>\r
\r
    <path d="M70 116 Q78 112 86 116 L84 130 Q77 134 71 130 Z"\r
          fill="#8A5A32" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M71 118 Q78 115 85 118" stroke="#5A3A1E" stroke-width="2.4" fill="none"/>\r
    <circle cx="78" cy="125" r="3.6" fill="#D9A93C" stroke="#2A2114" stroke-width="1.8"/>\r
\r
    <!-- Skin pores, crown edge light and lacquered bounce deepen the pomegranate shell. -->\r
    <path d="M34 52 Q42 44 53 45" fill="none" stroke="#F07A69" stroke-width="2.2"\r
          stroke-linecap="round" opacity=".78"/>\r
    <path d="M32 96 Q52 108 70 95" fill="none" stroke="#77211D" stroke-width="2"\r
          stroke-linecap="round" opacity=".7"/>\r
    <g fill="#F18B78" opacity=".75"><circle cx="31" cy="72" r="1.2"/><circle cx="70" cy="68" r="1"/>\r
      <circle cx="37" cy="99" r="1.1"/><circle cx="68" cy="89" r="1.2"/></g>\r
\r
    <g data-expression="cute">\r
      <path d="M31 61 Q39 55 46 61 M58 61 Q65 55 73 61" fill="none" stroke="#C0392B" stroke-width="8" stroke-linecap="round"/>\r
      <path d="M32 61 Q39 55 46 61 M58 61 Q65 55 72 61" fill="none" stroke="#2A2114" stroke-width="2.9" stroke-linecap="round"/>\r
      <ellipse cx="32" cy="84" rx="3.2" ry="1.9" fill="#F17E72" opacity=".68"/><ellipse cx="72" cy="84" rx="3.2" ry="1.9" fill="#F17E72" opacity=".68"/>\r
      <path d="M45 83 Q52 91 59 83 Q58 93 52 94 Q46 93 45 83 Z" fill="#481B1D" stroke="#2A2114" stroke-width="2.2"/>\r
      <path d="M49 89 Q52 91 55 89" fill="none" stroke="#F28C80" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M36 56 L50 70 L38 84 L54 96 L44 110"\r
          stroke="#1A1410" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:70px 96px">\r
    <path d="M70 96 L80 100" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>\r
    <path d="M70 96 L80 100" stroke="#C0392B" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M60 82 A13 13 0 0 1 86 82 Q73 87 60 82 Z"\r
          fill="#C0392B" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>\r
    <path d="M62 80 A13 13 0 0 1 84 80" fill="none" stroke="#D9A93C" stroke-width="3.2"/>\r
    <circle cx="73" cy="75" r="2.8" fill="#D9A93C" stroke="#2A2114" stroke-width="1.6"/>\r
\r
    <path d="M66 106 L112 94" stroke="#2A2114" stroke-width="19" stroke-linecap="round"/>\r
    <path d="M66 106 L112 94" stroke="#8A5A32" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M70 106 L108 96" stroke="#A87044" stroke-width="3" stroke-linecap="round"\r
          opacity=".7"/>\r
    <path d="M80 105 L83 93" stroke="#D9A93C" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M98 100 L101 88" stroke="#D9A93C" stroke-width="5" stroke-linecap="round"/>\r
\r
    <path d="M84 88 L104 83 L106 91 L86 96 Z"\r
          fill="#5A3A1E" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>\r
    <circle cx="90" cy="91" r="2.6" fill="#C4213E"/>\r
    <circle cx="96" cy="89.5" r="2.6" fill="#C4213E"/>\r
    <circle cx="102" cy="88" r="2.4" fill="#C4213E"/>\r
    <circle cx="93" cy="86.5" r="2" fill="#F2707F"/>\r
\r
    <ellipse cx="115" cy="92" rx="5" ry="11" fill="#D9A93C" stroke="#2A2114" stroke-width="3"/>\r
    <ellipse cx="116" cy="92" rx="2.8" ry="7.5" fill="#6E1E18"/>\r
    <ellipse cx="116" cy="92" rx="1.5" ry="4.5" fill="#FF5A3C"/>\r
\r
    <circle cx="74" cy="108" r="6.2" fill="#8E2A22" stroke="#2A2114" stroke-width="2.8"/>\r
    <circle cx="96" cy="101" r="6" fill="#8E2A22" stroke="#2A2114" stroke-width="2.8"/>\r
    <path d="M92 102 L100 100" stroke="#6E1E18" stroke-width="2" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 92px">\r
    <path d="M118 92 L136 85 M118 92 L139 93 M118 92 L135 100 M118 92 L129 79 M118 92 L128 104"\r
          stroke="#FF5A3C" stroke-width="4.6" stroke-linecap="round" opacity=".9"/>\r
    <ellipse cx="120" cy="92" rx="6" ry="9" fill="#FFC9A0" opacity=".9"/>\r
    <circle cx="132" cy="86" r="3" fill="#C4213E"/>\r
    <circle cx="138" cy="96" r="2.6" fill="#F2707F"/>\r
    <circle cx="130" cy="102" r="2.4" fill="#C4213E"/>\r
  </g>\r
</svg>\r
`;export{r as default};
