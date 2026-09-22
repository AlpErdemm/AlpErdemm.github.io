const r=`<!-- Dondurma (Sundae) · Treat 5 · Brawler · melee, bare fists\r
     attackSpeed 1.05 → round(20/1.05) = 19 ticks = 0.95 s\r
\r
     Class rule (V3, README "Silahsız gövdeler"): a Brawler carries no weapon,\r
     the hands are the weapon. The long iron paddle of the ice-cream seller\r
     is left out on purpose — the class's one visual rule is the empty hand,\r
     and the first exception in the most tempting place would unmake it. Both\r
     fists wear a wrap in the cone's waffle. Archetype \`punch\`: both arms\r
     strike, the rear one crossing at 58%. The front fist's leading edge\r
     rests at x 119 (\`WEAPON\` dondurma [119, 85]), so unitRig.ts needs no\r
     change. The arms and fists are the Strudel's exactly (both Brawlers\r
     throw the same punch).\r
\r
     Redrawn for ticket 19 against docs/style-bible.md. Mass = the pulled\r
     cream column standing in its cone, the Treat's one tall body: x 20..84\r
     (64 wide), y 38..118 (80 tall), ratio 1.25, with a cherry as the crown\r
     (stem to y 14). Eye y 82 = 55% of the mass; the cone's rim is at y 106\r
     so the cute smile stays on the cream. The pistachio shoulder, the red\r
     sash and the badge went: two more materials that were one column at\r
     40 px. The cream body has no gleam (style bible §11.3); the one gleam is\r
     spent on the cherry, the darker crown item. Materials 4 / fills 8: cream\r
     F3E6C8 D3BC93 · cone D0983E 9A6A24 · cherry C8323A F08A8A · leather\r
     6E4A2A 4A3826 (the cast's shared leather). One shade crescent (D3BC93,\r
     the right face of the column). Tint lines, none: the waffle is two\r
     4-wide bands in the cone shade, fill bands as the Meatball's furrows. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="punch" data-unit="dondurma" style="--dur-atk:0.95s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="27" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear fist rests at x 18 so its ink stays inside the safe area (x ≥ 6). -->\r
  <g class="armB" style="transform-origin:30px 92px">\r
    <path d="M30 92 L20 95" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 92 L20 95" stroke="#F3E6C8" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M24 99 L26 90" stroke="#D0983E" stroke-width="3" stroke-linecap="round"/>\r
    <circle cx="18" cy="97" r="10" fill="#F3E6C8" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M13 91 L13 104 M18 90 L18 105" stroke="#D0983E" stroke-width="3" stroke-linecap="round"/>\r
  </g>\r
\r
  <!-- Legs and boots are the cast's shared construction (style bible §6):\r
       from y 104 to 126 off pivots x 44 / 62, soles flat on 136, boots 16 × 11. -->\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 104 L41 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 104 L41 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 126 Q26 131 29 136 L44 136 Q46 130 42 125 Z"\r
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 104 L65 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 104 L65 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 125 Q60 130 62 136 L77 136 Q79 131 74 126 Z"\r
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The cherry, the crown item, sits on the dome behind the column's top. -->\r
    <path d="M59 25 Q61 18 67 14" fill="none" stroke="#2A2114" stroke-width="3" stroke-linecap="round"/>\r
    <circle cx="58" cy="31" r="7" fill="#C8323A" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M54.5 29 Q55 27 57 26.5" fill="none" stroke="#F08A8A" stroke-width="2.4" stroke-linecap="round"/>\r
\r
    <!-- The column: mass and crescent; then the cone over its foot. -->\r
    <path d="M52 38 C70 38 84 50 84 68 C84 82 83 96 83 106 L21 106 C21 96 20 82 20 68\r
             C20 50 34 38 52 38 Z"\r
          fill="#F3E6C8" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M84 68 C84 82 83 96 83 106 L76 106 C76 96 77 82 77 68 C77 56 70 46 60 41\r
             C74 44 84 54 84 68 Z" fill="#D3BC93"/>\r
    <path d="M21 106 Q52 112 83 106 L70 118 L34 118 Z"\r
          fill="#D0983E" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M31 110 L55 117 M73 110 L49 117" stroke="#9A6A24" stroke-width="4" stroke-linecap="round"/>\r
\r
    <!-- The cast face (style bible §5), eye y 82. -->\r
    <path d="M32 70 L44 72 M60 72 L72 70" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="82" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="82" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="83" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="83" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="79.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="79.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 95 Q52 100 60 95" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 72 Q38 67 44 72 M60 72 Q66 67 72 72" fill="none" stroke="#F3E6C8" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 72 Q38 67 44 72 M60 72 Q66 67 72 72" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="95" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="95" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 94 Q52 102 60 94 Q59 105 52 106 Q45 105 44 94 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 100 Q52 102 55 100" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M36 46 L48 60 L38 74 L50 88 L40 102"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:74px 92px">\r
    <path d="M74 92 L98 89" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M74 92 L98 89" stroke="#F3E6C8" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M86 95 L90 85 M92 95.5 L96 85.5" stroke="#D0983E" stroke-width="3.4" stroke-linecap="round"/>\r
    <circle cx="107" cy="85" r="12" fill="#F3E6C8" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M96 79 Q101 85 96 91" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M102 75 L102 94 M109 74 L109 95" stroke="#D0983E" stroke-width="3" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:119px 85px">\r
    <path d="M119 72 L135 64 M123 85 L141 85 M119 98 L135 106"\r
          stroke="#F3E6C8" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 72 L130 67 M123 85 L136 85 M119 98 L130 103"\r
          stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="131" cy="76" r="2.6" fill="#C8323A"/>\r
    <circle cx="133" cy="96" r="2.2" fill="#C8323A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
