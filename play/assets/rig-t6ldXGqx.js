const r=`<!-- Patlıcan (Eggplant) · Garden 4 · Brawler · melee, bare fists\r
     attackSpeed 1.11 → round(20/1.11) = 18 ticks = 0.90 s\r
\r
     Class rule (V3, README "Silahsız gövdeler"): a Brawler carries no weapon,\r
     the hands are the weapon. Arms, fists, legs and boots are the Strudel's\r
     and Meatball's construction (style bible §6, §11.1) so the Brawlers all\r
     throw the same punch; the wrist wrap here is a vine tendril in leaf\r
     green, the Garden's own string. Archetype \`punch\`; the front fist's\r
     leading edge rests at x 120 (\`WEAPON\` patlican [119, 87]).\r
\r
     Redrawn for ticket 17 against docs/style-bible.md, whose §10 is this\r
     rig's change list applied line by line. It was the reference face, so\r
     the face did not move: eye y 86 = 61% of the mass. Mass = the teardrop,\r
     x 20..84, y 40..116 with a 4 stroke: 68 × 76, ratio 1.12. The calyx and\r
     stem are the crown; the vine belt at the hips is the Garden's tell. The\r
     purple-black ink, the alpha'd highlights, the leaf pauldrons and the\r
     field patch went. Materials 4 / fills 9: purple 4A2A6B 33184D C9A6E8 ·\r
     leaf 4E7A32 78A54C · vine A57A3E E0C083 · leather 6E4A2A 4A3826. One\r
     shade crescent (33184D, lower right), one gleam (C9A6E8, upper left).\r
     Tint lines, two: the leaf vein and the belt stitch. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="punch" data-unit="patlican" style="--dur-atk:0.90s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear fist rests at x 18 so its ink stays inside the safe area (x ≥ 6). -->\r
  <g class="armB" style="transform-origin:30px 92px">\r
    <path d="M30 92 L20 95" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 92 L20 95" stroke="#4A2A6B" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M24 99 L26 90" stroke="#4E7A32" stroke-width="3" stroke-linecap="round"/>\r
    <circle cx="18" cy="97" r="10" fill="#4A2A6B" stroke="#2A2114" stroke-width="3"/>\r
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
    <!-- The teardrop, its crescent and its gleam. -->\r
    <path d="M52 40 C74 40 84 62 84 84 C84 106 70 116 52 116 C34 116 20 106 20 84 C20 62 30 40 52 40 Z"\r
          fill="#4A2A6B" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M68 52 C80 66 82 96 66 110 C78 104 84 94 84 84 C84 68 78 56 68 52 Z" fill="#33184D"/>\r
    <path d="M34 64 Q30 72 30 80" fill="none" stroke="#C9A6E8" stroke-width="5" stroke-linecap="round"/>\r
\r
    <!-- Stem and calyx, the crown, pulled down over the brow like a helmet. -->\r
    <path d="M52 26 L52 44" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M52 26 L52 44" stroke="#4E7A32" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M52 44 C40 44 30 50 26 58 C34 62 44 62 52 58 Z"\r
          fill="#4E7A32" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M52 44 C64 44 74 50 78 58 C70 62 60 62 52 58 Z"\r
          fill="#4E7A32" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M34 54 L44 57" stroke="#78A54C" stroke-width="2.2" stroke-linecap="round"/>\r
\r
    <!-- Vine belt at the hips. -->\r
    <path d="M26 103 Q52 110 78 103" fill="none" stroke="#A57A3E" stroke-width="6.5" stroke-linecap="round"/>\r
    <path d="M30 104 Q52 109 74 104" fill="none" stroke="#E0C083" stroke-width="1.8" stroke-dasharray="3 3"/>\r
\r
    <!-- The cast face (style bible §5), eye y 86 — the reference values. -->\r
    <path d="M32 74 L44 76 M60 76 L72 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="86" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="86" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 99 Q52 104 60 99" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 76 Q38 71 44 76 M60 76 Q66 71 72 76" fill="none" stroke="#4A2A6B" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 76 Q38 71 44 76 M60 76 Q66 71 72 76" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="99" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="99" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 98 Q52 106 60 98 Q59 109 52 110 Q45 109 44 98 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 104 Q52 106 55 104" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M36 56 L48 72 L38 86 L50 98 L40 110"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:74px 92px">\r
    <path d="M74 92 L98 89" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M74 92 L98 89" stroke="#4A2A6B" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M88 95 L92 85" stroke="#4E7A32" stroke-width="3.4" stroke-linecap="round"/>\r
    <circle cx="108" cy="87" r="12" fill="#4A2A6B" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M97 81 Q102 87 97 93" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:120px 87px">\r
    <path d="M119 73 L134 64 M123 87 L142 87 M119 101 L134 110"\r
          stroke="#C9A6E8" stroke-width="5.5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 73 L129 67 M123 87 L136 87 M119 101 L129 107"\r
          stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M131 76 L135 73 L134 78 Z" fill="#4A2A6B" stroke="#2A2114" stroke-width="1.2"/>\r
    <path d="M133 97 L138 96 L135 100 Z" fill="#4A2A6B" stroke="#2A2114" stroke-width="1.2"/>\r
  </g>\r
</svg>\r
`;export{r as default};
