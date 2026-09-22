const r=`<!-- Tel (Wire) - Rusted Cupboard - Spoil - range 2, a cut length thrown\r
     attackSpeed 1.08 -> round(20/1.08) = 19 ticks = 0.95 s\r
\r
     Archetype \`throw\`, Cira's and Orumcek's. It carries an ammo track, so the\r
     coil the hand is drawn holding is the thing that leaves - \`MUZZLE tel\r
     { part: 'ammo', x: 110, y: 72 }\`, and \`SHOTS tel\` puts one \`pellet\` in the\r
     air rather than a scatter, because wire leaves the hand as one thing.\r
\r
     The family's reach at two hexes, and the first body of it the player\r
     cannot simply walk into.\r
\r
     Silhouette: the column and the sprung end. The narrowest mass in the\r
     Cupboard - x 36..70, half the width of anything beside it - with one loose\r
     end curling out over the top to the left, which is where all of its wide\r
     reading is. A narrow body under an asymmetric hook reads at 53 px as\r
     nothing else on the board does.\r
\r
     Mass x 10..70, y 30..118. Materials 2 / fills 4: wire 6A6258 A39A8C\r
     CFC6B6 * rust B0582C, one run. Brass eye F2C46A. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="throw" data-unit="tel" style="--dur-atk:0.95s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="20" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 90px">\r
    <path d="M30 90 L22 96" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 90 L22 96" stroke="#6A6258" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="99" r="6.5" fill="#A39A8C" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#6A6258" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#A39A8C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#6A6258" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#A39A8C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- The loose end, sprung out over the top and away to the left. It is the\r
         only thing on this body wider than the column, so it is the whole of\r
         the wide reading. -->\r
    <path d="M44 40 Q24 26 14 42 Q22 52 34 46" fill="none" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M44 40 Q24 26 14 42 Q22 52 34 46" fill="none" stroke="#CFC6B6" stroke-width="5" stroke-linecap="round"/>\r
\r
    <!-- The column: fill, crescent, then the coil wound over it, then the ink. -->\r
    <path d="M40 40 L66 40 L70 118 L36 118 Z" fill="#A39A8C"/>\r
    <path d="M70 118 L52 118 L52 112 L68 112 Z" fill="#6A6258"/>\r
    <path d="M38 52 Q52 60 68 52 M38 66 Q52 74 68 66 M38 108 Q52 116 68 108"\r
          fill="none" stroke="#6A6258" stroke-width="3" stroke-linecap="round"/>\r
    <path d="M42 46 L42 60" fill="none" stroke="#CFC6B6" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M62 96 Q66 104 62 112" fill="none" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M40 40 L66 40 L70 118 L36 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <path d="M38 74 L50 76 M56 76 L68 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="45" cy="86" rx="5.2" ry="5.98" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="61" cy="86" rx="5.2" ry="5.98" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="46.4" cy="87" rx="2.83" ry="3.78" fill="#2A2114"/>\r
    <ellipse cx="62.4" cy="87" rx="2.83" ry="3.78" fill="#2A2114"/>\r
    <circle cx="44" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="60" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M48 97 Q53 100 58 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 56 L50 70 L40 84 L52 98 L42 114"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:72px 90px">\r
    <path d="M72 90 L88 84" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M72 90 L88 84" stroke="#A39A8C" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="92" cy="82" r="6.5" fill="#A39A8C" stroke="#2A2114" stroke-width="3"/>\r
\r
    <g class="ammo">\r
      <path d="M98 84 Q108 68 110 72 Q104 80 112 76" fill="none" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
      <path d="M98 84 Q108 68 110 72 Q104 80 112 76" fill="none" stroke="#CFC6B6" stroke-width="4.5" stroke-linecap="round"/>\r
    </g>\r
  </g>\r
  <g class="fx" style="transform-origin:112px 78px">\r
    <path d="M112 66 L130 56 M116 78 L134 78 M112 90 L130 100"\r
          stroke="#A39A8C" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M112 66 L124 61 M116 78 L128 78 M112 90 L124 95"\r
          stroke="#CFC6B6" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="128" cy="60" r="2.6" fill="#A39A8C"/>\r
    <circle cx="130" cy="94" r="2.4" fill="#CFC6B6"/>\r
  </g>\r
</svg>\r
`;export{r as default};
