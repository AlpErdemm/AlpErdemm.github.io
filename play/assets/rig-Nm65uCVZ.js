const r=`<!-- Küflü Peynir (Stilton) · Mold 4 · Vanguard · melee, cheese cleaver\r
     attackSpeed 0.83 → round(20/0.83) = 24 ticks = 1.20 s\r
\r
     Archetype \`swing\`: the cleaver goes up and comes down, and \`swing\`'s +56°\r
     at contact turns the -50° rest into +6°, level with the body it lands\r
     on. The cleaver's far corner is \`WEAPON\` kuflupeynir [120, 44] and its\r
     geometry is unchanged.\r
\r
     Redrawn for ticket 20 against docs/style-bible.md. Mass = one wheel of\r
     cheese seen face on, a rounded square x 15..89, y 34..108 — 74 × 74,\r
     ratio 1.0, the widest §6 allows and the Bagel's box; the Mold's other\r
     two bodies are 60 × 78, so at 40 px the Stilton is the square one. The\r
     old rig's fifty mold colonies were a texture that read as one teal\r
     smear on the Board; the veins are now four 4-wide bands of the Mold's\r
     teal (the Meatball's furrow construction, fill bands not tint lines),\r
     kept above the brows and below the mouth so they read through the\r
     face, plus three colonies on the rind. The fermenting barrel shield\r
     was a fifth material and became a leather-faced round shield with a\r
     steel boss, the Flatcake's material. No gleam: the cheese is cream and\r
     a lighter cream vanished at 0.42 (§11.3). Eye y 80 = 62% of the mass.\r
     Materials 4 / fills 9: cheese E8DFAE C4B36E · mold 3E8C7A 9ED4C4 ·\r
     steel 8A8F98 C8CCD6 · leather 6E4A2A 4A3826 C9A66B. One crescent\r
     (C4B36E, lower right). Tint lines, two: the shield keyline and the\r
     cleaver glint. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="kuflupeynir" style="--dur-atk:1.20s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="31" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear arm and the round shield; its rim stops at x 10 (ink to 8.5). -->\r
  <g class="armB" style="transform-origin:32px 92px">\r
    <path d="M32 92 L26 96" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M32 92 L26 96" stroke="#E8DFAE" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="26" cy="94" r="16" fill="#C9A66B" stroke="#2A2114" stroke-width="3"/>\r
    <circle cx="26" cy="94" r="11.5" fill="none" stroke="#6E4A2A" stroke-width="2.2"/>\r
    <circle cx="26" cy="94" r="5" fill="#8A8F98" stroke="#2A2114" stroke-width="2.6"/>\r
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
    <!-- The wheel: fill, crescent, veins, then the outline over the lot. -->\r
    <path d="M25 34 L79 34 Q89 34 89 44 L89 98 Q89 108 79 108 L25 108 Q15 108 15 98 L15 44 Q15 34 25 34 Z"\r
          fill="#E8DFAE"/>\r
    <path d="M89 58 L89 98 Q89 108 79 108 L52 108 L52 103 L76 103 Q84 103 84 95 L84 58 Z" fill="#C4B36E"/>\r
    <g fill="none" stroke="#3E8C7A" stroke-width="4" stroke-linecap="round">\r
      <path d="M20 52 Q32 46 44 56"/>\r
      <path d="M60 44 Q72 38 84 48"/>\r
      <path d="M18 100 Q34 94 46 103"/>\r
      <path d="M70 92 Q80 86 88 96"/>\r
    </g>\r
    <path d="M25 34 L79 34 Q89 34 89 44 L89 98 Q89 108 79 108 L25 108 Q15 108 15 98 L15 44 Q15 34 25 34 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Mold colonies on the rind: the Origin's tell. -->\r
    <circle cx="27" cy="62" r="4.5" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="80" cy="60" r="3.6" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="30" cy="42" r="3" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="25.8" cy="60.8" r="1.8" fill="#9ED4C4"/>\r
\r
    <!-- The cast face (style bible §5), eye y 80. -->\r
    <path d="M32 68 L44 70 M60 70 L72 68" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="80" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="80" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="81" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="81" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="77.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="77.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 93 Q52 98 60 93" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <!-- The belt at the hem, with a steel buckle. -->\r
    <path d="M17 106 Q52 112 87 106" fill="none" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M17 106 Q52 112 87 106" fill="none" stroke="#6E4A2A" stroke-width="4.5" stroke-linecap="round"/>\r
    <rect x="48" y="105" width="8" height="8" rx="1.5" fill="#8A8F98" stroke="#2A2114" stroke-width="2.4"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 70 Q38 65 44 70 M60 70 Q66 65 72 70" fill="none" stroke="#E8DFAE" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 70 Q38 65 44 70 M60 70 Q66 65 72 70" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="93" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="93" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 92 Q52 100 60 92 Q59 103 52 104 Q45 103 44 92 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 98 Q52 100 55 98" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M32 44 L46 58 L34 72 L48 86 L38 102"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Forward arm and the cleaver; far corner at (120, 44). -->\r
  <g class="armF" style="transform-origin:80px 92px">\r
    <path d="M80 92 L92 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M80 92 L92 100" stroke="#E8DFAE" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M92 106 L96 80" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M92 106 L96 80" stroke="#6E4A2A" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M88 84 L100 36 L120 44 L108 92 Z"\r
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M116 48 L106 87" fill="none" stroke="#C8CCD6" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="105" cy="58" r="2.6" fill="#2A2114"/>\r
    <circle cx="94" cy="101" r="6" fill="#E8DFAE" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:52px 84px">\r
    <path d="M92 30 A62 62 0 0 1 92 138" fill="none" stroke="#3E8C7A"\r
          stroke-width="13" opacity=".3" stroke-linecap="round"/>\r
    <path d="M96 40 A54 54 0 0 1 96 128" fill="none" stroke="#9ED4C4"\r
          stroke-width="4" stroke-linecap="round"/>\r
    <circle cx="122" cy="60" r="3.4" fill="#3E8C7A"/>\r
    <circle cx="130" cy="84" r="2.8" fill="#9ED4C4"/>\r
    <circle cx="122" cy="110" r="3" fill="#3E8C7A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
