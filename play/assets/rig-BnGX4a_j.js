const r=`<!-- Bal Kavanozu · economy 3-star · non-combatant · AAA vector rework\r
     Reworked 2026-08-21 from the repository-authored SVG; no external source.\r
\r
     The gameplay read remains unchanged: one limbless honey jar, no weapon,\r
     data-atk="none". The polish comes from disciplined value bands rather\r
     than SVG filters or gradients, keeping every mark compatible with Pixi's\r
     Graphics.svg parser and legible at the 63 px board height.\r
\r
     Material stack: near-black plum contour; aged brass lid; amber honey in\r
     three depth bands; cool glass edge light; warm hex-coin focal accent.\r
     The face stays above the honey line so it survives thumbnail reduction. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="none" data-unit="balkavanozu" style="--dur-atk:0s;--dur-idle:2.4s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="31" ry="6.8" fill="#07080B" opacity=".46"/>\r
  <ellipse cx="52" cy="135.5" rx="22" ry="3.2" fill="#D88A20" opacity=".13"/>\r
\r
  <g class="body" style="transform-origin:52px 124px">\r
    <!-- restrained honey motes broaden the silhouette without implying combat -->\r
    <path d="M23 69 L25.2 73.2 L29.5 75.2 L25.2 77.3 L23 81.5 L20.9 77.3 L16.7 75.2 L20.9 73.2 Z"\r
          fill="#FFD978" stroke="#2A1713" stroke-width="1.8" stroke-linejoin="round"/>\r
    <circle cx="82" cy="88" r="2.5" fill="#FFCB57" stroke="#2A1713" stroke-width="1.5"/>\r
    <circle cx="20" cy="99" r="1.9" fill="#ECA73A"/>\r
\r
    <!-- jar's heavy outer silhouette -->\r
    <path d="M30 53 L74 53 L77 61 L80 119 Q80 134 65 136 L39 136 Q24 134 24 119 L27 61 Z"\r
          fill="#24151A" stroke="#140D12" stroke-width="2.6" stroke-linejoin="round"/>\r
\r
    <!-- glass body: cool rim, warm interior -->\r
    <path d="M31 55 L73 55 L76 63 L77.6 118 Q78 130 64 132 L40 132 Q26 130 26.4 118 L28 63 Z"\r
          fill="#C9D7D4" stroke="#4D3330" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M33 59 L71 59 L73 66 L74 117 Q74.5 127 63 128.5 L41 128.5 Q29.5 127 30 117 L31 66 Z"\r
          fill="#F4D68E"/>\r
\r
    <!-- honey: three deliberate value bands and a thick surface meniscus -->\r
    <path d="M30.7 78 Q40 73 51.5 77 Q63 81 73.3 76.5 L74 117 Q74.5 127 63 128.5 L41 128.5 Q29.5 127 30 117 Z"\r
          fill="#F1B438"/>\r
    <path d="M30.3 98 Q42 94 53 98 Q64 102 73.7 97 L74 117 Q74.5 127 63 128.5 L41 128.5 Q29.5 127 30 117 Z"\r
          fill="#D9861E"/>\r
    <path d="M30 114 Q41 110 52 114 Q63 118 74 112 L74 117 Q74.5 127 63 128.5 L41 128.5 Q29.5 127 30 117 Z"\r
          fill="#A9571B" opacity=".82"/>\r
    <path d="M31 78 Q40 73.5 51.5 77.3 Q63 81.2 73 76.8" fill="none"\r
          stroke="#FFE397" stroke-width="3" stroke-linecap="round"/>\r
    <path d="M32 82 Q42 77.7 51 80.8" fill="none" stroke="#C96A1C" stroke-width="1.7"\r
          opacity=".72" stroke-linecap="round"/>\r
\r
    <!-- readable face, protected by a dark brow band -->\r
    <path d="M35 63 Q43 58 49 64 L47 68 Q41 64 35 68 Z" fill="#3A211B"/>\r
    <path d="M69 63 Q61 58 55 64 L57 68 Q63 64 69 68 Z" fill="#3A211B"/>\r
    <ellipse cx="43" cy="69.5" rx="6.5" ry="7" fill="#FFF4D8" stroke="#2A1713" stroke-width="2.5"/>\r
    <ellipse cx="61" cy="69.5" rx="6.5" ry="7" fill="#FFF4D8" stroke="#2A1713" stroke-width="2.5"/>\r
    <ellipse cx="44.4" cy="70.7" rx="3.3" ry="4.3" fill="#2A1713"/>\r
    <ellipse cx="62.4" cy="70.7" rx="3.3" ry="4.3" fill="#2A1713"/>\r
    <circle cx="42.8" cy="68.1" r="1.45" fill="#FFF"/>\r
    <circle cx="60.8" cy="68.1" r="1.45" fill="#FFF"/>\r
    <path d="M45.5 84 Q52 88 58.5 84" fill="none" stroke="#2A1713" stroke-width="3"\r
          stroke-linecap="round"/>\r
    <path d="M48 84.8 Q52 86.8 56 84.8" fill="none" stroke="#FFE5B0" stroke-width="1.4"\r
          stroke-linecap="round"/>\r
\r
    <!-- hex-coin badge: economy identity and board-hex echo -->\r
    <path d="M52 94 L63 100.5 L63 113.5 L52 120 L41 113.5 L41 100.5 Z"\r
          fill="#6E3518" stroke="#2A1713" stroke-width="3.2" stroke-linejoin="round"/>\r
    <path d="M52 96.5 L60.8 101.7 L60.8 112.3 L52 117.5 L43.2 112.3 L43.2 101.7 Z"\r
          fill="#F7C64F" stroke="#FFE394" stroke-width="1.6" stroke-linejoin="round"/>\r
    <path d="M49 101.5 Q53 99.5 56 102.5 L54 105 Q51 103.5 49.5 105 Q48.5 106.2 51 107\r
             L54.5 108.5 Q58 110.5 55.5 113.5 Q52.5 116.2 48 113.5"\r
          fill="none" stroke="#8D4919" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M52 99.5 L52 115" stroke="#8D4919" stroke-width="1.6" stroke-linecap="round"/>\r
\r
    <!-- trapped bubbles add depth without turning into texture noise -->\r
    <circle cx="66.5" cy="88" r="3.2" fill="#FFE8A3" stroke="#C66A1B" stroke-width="1.5" opacity=".9"/>\r
    <circle cx="67.2" cy="87.2" r="1" fill="#FFF8DA"/>\r
    <circle cx="37.5" cy="91" r="2.1" fill="#FFE8A3" opacity=".72"/>\r
    <circle cx="69" cy="121" r="1.7" fill="#FFD269" opacity=".65"/>\r
\r
    <!-- glass thickness and controlled speculars -->\r
    <path d="M31 61 L29.5 116 Q29 124 36 127" fill="none" stroke="#F8FFFF" stroke-width="4.2"\r
          opacity=".72" stroke-linecap="round"/>\r
    <path d="M34.5 64 L33.5 88" fill="none" stroke="#FFF" stroke-width="2"\r
          opacity=".9" stroke-linecap="round"/>\r
    <path d="M72 62 L74 115 Q74 123 68 127" fill="none" stroke="#7D9292" stroke-width="2.4"\r
          opacity=".62" stroke-linecap="round"/>\r
    <path d="M36 128 Q52 132 68 128" fill="none" stroke="#F7E6B1" stroke-width="2"\r
          opacity=".85" stroke-linecap="round"/>\r
\r
    <!-- aged brass cap: stacked value bands and embossed grooves -->\r
    <path d="M27 49 L29 39 Q30 34 36 34 L68 34 Q74 34 75 39 L77 49 Z"\r
          fill="#4A281B" stroke="#140D12" stroke-width="3.8" stroke-linejoin="round"/>\r
    <path d="M30 47 L31.5 39 Q32 37 36 37 L68 37 Q72 37 72.5 39 L74 47 Z"\r
          fill="#B66B24"/>\r
    <path d="M31.5 39 Q32 36 36 36 L68 36 Q72 36 72.5 39 Z" fill="#F2BD51"/>\r
    <path d="M32 45 L74 45" stroke="#6F391D" stroke-width="2.2"/>\r
    <path d="M35 39 L34 47 M42 38 L41.5 47 M49 38 L49 47 M56 38 L56 47 M63 38 L63.5 47 M70 39 L71 47"\r
          stroke="#7E431F" stroke-width="1.7" opacity=".78"/>\r
    <path d="M34 38 L68 38" stroke="#FFE28C" stroke-width="2" opacity=".75" stroke-linecap="round"/>\r
\r
    <!-- iconic honey crown and drip -->\r
    <path d="M39 34 Q40 27 46 29 Q52 20 57 29 Q65 25 67 34 Z"\r
          fill="#F7B82F" stroke="#2A1713" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M44 31 Q48 27 51 30 M56 30 Q60 27 63 30" fill="none" stroke="#FFE599"\r
          stroke-width="2" stroke-linecap="round"/>\r
    <path d="M72 47 Q79 56 76.5 65 Q71 68 69.5 62 Q69 54 72 47 Z"\r
          fill="#F3AD2D" stroke="#2A1713" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M73 51 Q75 56 74 61" fill="none" stroke="#FFE39A" stroke-width="1.5"\r
          stroke-linecap="round"/>\r
\r
    <!-- death treatment remains nested so it inherits body motion -->\r
    <!-- AAA glass/honey pass: caustic edge, trapped bubbles and embossed comb. -->\r
    <path d="M34 62 C30 78 31 104 35 119" fill="none" stroke="#FFF9E8" stroke-width="2.4"\r
          stroke-linecap="round" opacity=".72"/>\r
    <g fill="none" stroke="#FFE59A" stroke-width="1.4" opacity=".9">\r
      <circle cx="43" cy="88" r="2.2"/><circle cx="64" cy="103" r="1.7"/><circle cx="55" cy="117" r="1.3"/>\r
    </g>\r
    <path d="M45 106 L49 103 L53 106 L53 111 L49 114 L45 111 Z M53 111 L57 108 L61 111 L61 116 L57 119 L53 116 Z"\r
          fill="none" stroke="#7B3F17" stroke-width="1.5" opacity=".6"/>\r
\r
    <g data-expression="cute">\r
      <path d="M35 64 Q42 59 49 64 M55 64 Q62 59 69 64" fill="none" stroke="#F4D68E" stroke-width="8" stroke-linecap="round"/>\r
      <path d="M36 63 Q42 58 48 63 M56 63 Q62 58 68 63" fill="none" stroke="#2A1713" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="36" cy="79" rx="3.1" ry="1.9" fill="#E87962" opacity=".58"/><ellipse cx="68" cy="79" rx="3.1" ry="1.9" fill="#E87962" opacity=".58"/>\r
      <path d="M45 82 Q52 89 59 82 Q58 92 52 93 Q46 92 45 82 Z" fill="#4A2119" stroke="#2A1713" stroke-width="2.2"/>\r
      <path d="M49 88 Q52 90 55 88" fill="none" stroke="#FF9A76" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M32 60 L46 74 L38 88 L52 101 L43 116 L50 128"\r
          stroke="#170D10" stroke-width="3.4" fill="none" stroke-linejoin="round"/>\r
    <path class="crack" d="M52 101 L67 91 L75 103 M43 116 L34 110 L29 119"\r
          stroke="#170D10" stroke-width="2.7" fill="none" stroke-linejoin="round"/>\r
    <path class="crack" d="M47 74 L55 68" stroke="#FFF6D8" stroke-width="1.3"\r
          fill="none" opacity=".7"/>\r
  </g>\r
</svg>\r
`;export{r as default};
