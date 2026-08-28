const r=`<!-- Karpuz · Sulu 4 ✦ · yakın dövüş · alan (çevre)\r
     attackSpeed 0.95 → round(20/0.95) = 21 tick = 1.05 sn\r
     Silah: dilim baltası — kendi diliminden. Kadronun en geniş savurması.\r
\r
     Zırh şeması: her plaka bir karpuz dilimi — dış kabuk (#4A8C3C), iç beyaz\r
     (#F3E6C6), et (#E24B3B), çekirdek. Üç iç içe şekil, hepsi düz dolgu:\r
     motorda gradyan güvenilir değil (bkz. proje hafızası). Omuzluk kolun\r
     kendisine bağlı, gövdeye değil — savuruşta omuz eklemi hiçbir karede\r
     açıkta kalmasın diye. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="karpuz" style="--dur-atk:1.20s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="34" ry="6.8" fill="#000" opacity=".35"/>\r
\r
  <!-- Arka kol. Omuzluk pivotun hemen üstünde: dönerken eklemi hep örter. -->\r
  <g class="armB" style="transform-origin:20.5px 84px">\r
    <path d="M20 79 L18 103" stroke="#2A2114" stroke-width="17" stroke-linecap="round"/>\r
    <path d="M20 79 L18 103" stroke="#3C7C33" stroke-width="12" stroke-linecap="round"/>\r
    <circle cx="17" cy="107" r="7.5" fill="#3C7C33" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M12.6 105.5 L21.4 107.5" stroke="#2F6B27" stroke-width="1.9" stroke-linecap="round"/>\r
    <path d="M8 75 A12.5 12.5 0 0 1 33 75 Q20.5 80 8 75 Z"\r
          fill="#4A8C3C" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M11.4 74.2 A9.1 9.1 0 0 1 29.6 74.2 Q20.5 78.3 11.4 74.2 Z" fill="#F3E6C6"/>\r
    <path d="M14.2 73.5 A6.3 6.3 0 0 1 26.8 73.5 Q20.5 76.8 14.2 73.5 Z" fill="#E24B3B"/>\r
    <ellipse cx="17.5" cy="69.8" rx="1.3" ry="1.8" fill="#2A2114"/>\r
    <ellipse cx="23.5" cy="69.8" rx="1.3" ry="1.8" fill="#2A2114"/>\r
    <ellipse cx="20.5" cy="72.6" rx="1.3" ry="1.8" fill="#2A2114"/>\r
  </g>\r
\r
  <!-- Bacaklar: geniş duruş, uyluk plakası dilim, ayak koyu tırnak. -->\r
  <g class="legB">\r
    <path d="M44 110 L36 128" stroke="#2A2114" stroke-width="19" stroke-linecap="round"/>\r
    <path d="M44 110 L36 128" stroke="#3C7C33" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M30 126 Q24 131 26 136 L42 136 Q45 130 40 126 Z"\r
          fill="#4C4527" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M32 136 L32.5 130" stroke="#2A2114" stroke-width="1.8" stroke-linecap="round"/>\r
    <path d="M37 136 L37 129.5" stroke="#2A2114" stroke-width="1.8" stroke-linecap="round"/>\r
    <path d="M31 111 L45 113 Q43 124 37 127 Q31 122 31 111 Z"\r
          fill="#4A8C3C" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M34.5 114.5 L42 115.5 Q41 122 37 124 Q34.5 120.5 34.5 114.5 Z" fill="#F3E6C6"/>\r
    <path d="M36 116.2 L40.5 116.8 Q40 120.8 37.5 122 Q36 119.8 36 116.2 Z" fill="#E24B3B"/>\r
    <ellipse cx="38" cy="119" rx="1.1" ry="1.6" fill="#2A2114"/>\r
  </g>\r
  <g class="legF">\r
    <path d="M62 110 L70 128" stroke="#2A2114" stroke-width="19" stroke-linecap="round"/>\r
    <path d="M62 110 L70 128" stroke="#4A8C3C" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M66 126 Q61 130 64 136 L80 136 Q82 131 76 126 Z"\r
          fill="#56502D" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M69 136 L69 130" stroke="#2A2114" stroke-width="1.8" stroke-linecap="round"/>\r
    <path d="M74 136 L74.5 129.5" stroke="#2A2114" stroke-width="1.8" stroke-linecap="round"/>\r
    <path d="M61 113 L75 111 Q75 122 69 127 Q63 124 61 113 Z"\r
          fill="#4A8C3C" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M64 115.5 L71.5 114.5 Q71.5 120.5 68.5 124 Q65 121 64 115.5 Z" fill="#F3E6C6"/>\r
    <path d="M65.5 117 L70 116.3 Q70 120 68.5 121.6 Q66 119.6 65.5 117 Z" fill="#E24B3B"/>\r
    <ellipse cx="68" cy="119" rx="1.1" ry="1.6" fill="#2A2114"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- Sap önce: gövde dairesi dibini örtsün, arkadan çıkıyormuş gibi dursun. -->\r
    <path d="M53 43 C52 30 46 20 40 22 C34 24 35 32 42 32"\r
          stroke="#2A2114" stroke-width="11" fill="none" stroke-linecap="round"/>\r
    <path d="M53 43 C52 30 46 20 40 22 C34 24 35 32 42 32"\r
          stroke="#58A03C" stroke-width="7" fill="none" stroke-linecap="round"/>\r
\r
    <circle cx="52" cy="78" r="37" fill="#4A8C3C" stroke="#2A2114" stroke-width="4.4"/>\r
\r
    <path d="M30 60 C24 72 24 88 30 100" stroke="#2F6B27" stroke-width="6.5" fill="none"\r
          opacity=".9" stroke-linecap="round"/>\r
    <path d="M41 48 C34 66 34 92 41 110" stroke="#2F6B27" stroke-width="6.5" fill="none"\r
          opacity=".9" stroke-linecap="round"/>\r
    <path d="M52.5 45 C46 62 46 96 52.5 112" stroke="#2F6B27" stroke-width="6.5" fill="none"\r
          opacity=".9" stroke-linecap="round"/>\r
    <path d="M64 48 C71 66 71 92 64 110" stroke="#2F6B27" stroke-width="6.5" fill="none"\r
          opacity=".9" stroke-linecap="round"/>\r
    <path d="M75 60 C81 72 81 88 75 100" stroke="#2F6B27" stroke-width="6.5" fill="none"\r
          opacity=".9" stroke-linecap="round"/>\r
    <path d="M28 64 Q36 50 52 47" stroke="#8FCF72" stroke-width="6" fill="none"\r
          opacity=".4" stroke-linecap="round"/>\r
\r
    <!-- Yara izi: kabuk yarılmış, altından et görünüyor. Kaş kuyruğunu örter. -->\r
    <path d="M66 44 L60 54 L66 57 L62 66" stroke="#F3E6C6" stroke-width="6.5" fill="none"\r
          stroke-linejoin="round" stroke-linecap="round"/>\r
    <path d="M66 44 L60 54 L66 57 L62 66" stroke="#E24B3B" stroke-width="3.2" fill="none"\r
          stroke-linejoin="round" stroke-linecap="round"/>\r
    <path d="M69 85 L75 88 L69 91" stroke="#F3E6C6" stroke-width="5" fill="none"\r
          stroke-linejoin="round" stroke-linecap="round"/>\r
    <path d="M69 85 L75 88 L69 91" stroke="#E24B3B" stroke-width="2.4" fill="none"\r
          stroke-linejoin="round" stroke-linecap="round"/>\r
\r
    <ellipse cx="41" cy="82" rx="8.5" ry="9.5" fill="#fff" stroke="#2A2114" stroke-width="2.6"/>\r
    <ellipse cx="63" cy="82" rx="8.5" ry="9.5" fill="#fff" stroke="#2A2114" stroke-width="2.6"/>\r
    <ellipse cx="43" cy="83" rx="5" ry="6.5" fill="#2A2114"/>\r
    <ellipse cx="65" cy="83" rx="5" ry="6.5" fill="#2A2114"/>\r
    <circle cx="40.5" cy="79.5" r="2.2" fill="#fff"/>\r
    <circle cx="62.5" cy="79.5" r="2.2" fill="#fff"/>\r
\r
    <path d="M33 63 L48 71.5 L46 76 L32 69 Z" fill="#2A2114" stroke-linejoin="round"/>\r
    <path d="M71 63 L56 71.5 L58 76 L72 69 Z" fill="#2A2114" stroke-linejoin="round"/>\r
    <path d="M45 99 Q52 93 59 99" stroke="#2A2114" stroke-width="3.6" fill="none"\r
          stroke-linecap="round"/>\r
\r
    <!-- Kasık plakası, sonra üstüne halat kemer. -->\r
    <path d="M40 104 L64 104 Q63 121 52 128 Q41 121 40 104 Z"\r
          fill="#4A8C3C" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M44 108 L60 108 Q59.5 119 52 123.5 Q44.5 119 44 108 Z" fill="#F3E6C6"/>\r
    <path d="M46.5 110.5 L57.5 110.5 Q57 118 52 121 Q47 118 46.5 110.5 Z" fill="#E24B3B"/>\r
    <ellipse cx="49.5" cy="114" rx="1.5" ry="2.1" fill="#2A2114"/>\r
    <ellipse cx="54.5" cy="114" rx="1.5" ry="2.1" fill="#2A2114"/>\r
    <ellipse cx="52" cy="117.5" rx="1.5" ry="2.1" fill="#2A2114"/>\r
\r
    <path d="M29 103 Q52 110 75 103" stroke="#6E5436" stroke-width="7" fill="none"\r
          stroke-linecap="round"/>\r
    <path d="M34 105.5 L36 101.5" stroke="#4A3826" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M42.5 107.5 L44.5 103.5" stroke="#4A3826" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M51 108.5 L53 104.5" stroke="#4A3826" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M59.5 108 L61.5 104" stroke="#4A3826" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M68 106 L70 102" stroke="#4A3826" stroke-width="2.2" stroke-linecap="round"/>\r
\r
    <!-- Waxy rind bloom, speckles and a cool lower bounce give the large fruit volume. -->\r
    <path d="M27 57 Q34 46 47 44" fill="none" stroke="#B9E69A" stroke-width="2.2"\r
          stroke-linecap="round" opacity=".72"/>\r
    <path d="M34 105 Q52 115 70 104" fill="none" stroke="#244F23" stroke-width="2.2"\r
          stroke-linecap="round" opacity=".65"/>\r
    <g fill="#B4D98B" opacity=".7"><circle cx="32" cy="69" r="1.3"/><circle cx="43" cy="52" r="1.1"/>\r
      <circle cx="72" cy="62" r="1.2"/><circle cx="75" cy="91" r="1"/></g>\r
\r
    <g data-expression="cute">\r
      <path d="M32 69 Q40 63 48 69 M56 69 Q64 63 72 69" fill="none" stroke="#4A8C3C" stroke-width="9" stroke-linecap="round"/>\r
      <path d="M33 69 Q40 63 48 69 M56 69 Q64 63 71 69" fill="none" stroke="#2A2114" stroke-width="3.1" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="97" rx="3.6" ry="2.1" fill="#E86F60" opacity=".62"/><ellipse cx="73" cy="97" rx="3.6" ry="2.1" fill="#E86F60" opacity=".62"/>\r
      <path d="M44 97 Q52 106 60 97 Q59 109 52 110 Q45 109 44 97 Z" fill="#3A1A18" stroke="#2A2114" stroke-width="2.5"/>\r
      <path d="M49 104 Q52 107 55 104" fill="none" stroke="#F17B6B" stroke-width="1.9" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M34 54 L46 68 L38 76 L52 90 L44 100 L58 112"\r
          stroke="#1A1410" stroke-width="3.4" fill="none" stroke-linejoin="round"/>\r
    <path class="crack" d="M52 90 L68 82 L74 94"\r
          stroke="#1A1410" stroke-width="2.8" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Ön kol + balta, tek dönüş. Sırayla: omuzluk, kol, sap, sargılar, ağız,\r
       bileme, yumruk. Sap ağzın altından geçer, yumruk sapın üstünde durur. -->\r
  <g class="armF" style="transform-origin:91px 84px">\r
    <path d="M91 79 L88 107" stroke="#2A2114" stroke-width="19" stroke-linecap="round"/>\r
    <path d="M91 79 L88 107" stroke="#57A544" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M77 75 A14 14 0 0 1 105 75 Q91 80.5 77 75 Z"\r
          fill="#4A8C3C" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M80.8 74.2 A10.2 10.2 0 0 1 101.2 74.2 Q91 78.6 80.8 74.2 Z" fill="#F3E6C6"/>\r
    <path d="M83.9 73.4 A7.1 7.1 0 0 1 98.1 73.4 Q91 76.9 83.9 73.4 Z" fill="#E24B3B"/>\r
    <ellipse cx="87.8" cy="69.4" rx="1.4" ry="1.9" fill="#2A2114"/>\r
    <ellipse cx="94.2" cy="69.4" rx="1.4" ry="1.9" fill="#2A2114"/>\r
    <ellipse cx="91" cy="72.4" rx="1.4" ry="1.9" fill="#2A2114"/>\r
\r
    <path d="M84 122 L109 14" stroke="#2A2114" stroke-width="9.5" stroke-linecap="round"/>\r
    <path d="M84 122 L109 14" stroke="#6E5436" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M88 106 L94 80" stroke="#4A3826" stroke-width="1.6" stroke-linecap="round"/>\r
    <path d="M85 119 L87 111" stroke="#4A3826" stroke-width="8" stroke-linecap="round"/>\r
\r
    <path d="M98.5 60 L103.5 38" stroke="#4A8C3C" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M96 55 L104.5 52" stroke="#2F6B27" stroke-width="2" stroke-linecap="round"/>\r
    <path d="M98 46 L106.5 43" stroke="#2F6B27" stroke-width="2" stroke-linecap="round"/>\r
    <path d="M90.5 71 L100.5 73" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M91 71.3 L100 72.7" stroke="#C8CCD6" stroke-width="4.6" stroke-linecap="round"/>\r
\r
    <path d="M113 12 A36 36 0 0 1 100 69 Z"\r
          fill="#4A8C3C" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M111.7 18 A29.8 29.8 0 0 1 101.3 63 Z" fill="#F3E6C6"/>\r
    <path d="M110.4 24 A24 24 0 0 1 102.7 57 Z" fill="#E24B3B"/>\r
    <ellipse cx="111.1" cy="30.3" rx="1.5" ry="2.1" fill="#2A2114"/>\r
    <ellipse cx="109.9" cy="41.3" rx="1.5" ry="2.1" fill="#2A2114"/>\r
    <ellipse cx="106.1" cy="51.7" rx="1.5" ry="2.1" fill="#2A2114"/>\r
\r
    <ellipse cx="104" cy="22" rx="5.5" ry="4.6" fill="#58A03C" stroke="#2A2114" stroke-width="2.6"/>\r
    <ellipse cx="108.5" cy="15" rx="4.2" ry="3.5" fill="#58A03C" stroke="#2A2114" stroke-width="2.4"/>\r
\r
    <circle cx="87" cy="110" r="9" fill="#57A544" stroke="#2A2114" stroke-width="3.4"/>\r
    <path d="M82 107.5 L92 110" stroke="#2F6B27" stroke-width="2" stroke-linecap="round"/>\r
    <ellipse cx="91" cy="104.5" rx="4.2" ry="3.2" fill="#57A544" stroke="#2A2114" stroke-width="2.6"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:52px 78px">\r
    <path d="M100 22 A 66 66 0 0 1 100 142" fill="none" stroke="#4FBFA0"\r
          stroke-width="14" opacity=".28" stroke-linecap="round"/>\r
    <path d="M100 22 A 66 66 0 0 1 100 142" fill="none" stroke="#9BF0D4"\r
          stroke-width="4" stroke-linecap="round"/>\r
  </g>\r
</svg>\r
`;export{r as default};
