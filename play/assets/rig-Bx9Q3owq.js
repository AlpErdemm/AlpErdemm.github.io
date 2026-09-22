const r=`<!-- Sirke (Vinegar) · Mold 3 · Marksman · ranged (range 3)\r
     attackSpeed 1.11 → round(20/1.11) = 18 ticks = 0.90 s\r
\r
     Archetype \`spray\`, kept: the sprayer's kick is armF's -9°/+11° and the\r
     body squeeze is what a pressurised bottle does. It is also the one\r
     archetype with an ammo track, so the \`.ammo\` squirt stays and \`MUZZLE\`\r
     reads it at (118, 87) with \`part: 'ammo'\`.\r
\r
     Redrawn for ticket 20 against docs/style-bible.md. Mass = the bottle,\r
     x 22..82 (60 wide), y 38..116 (78 tall), ratio 1.30 — the thinnest §6\r
     allows, which is what keeps a bottle a bottle beside the Pickle's\r
     capsule and the Stilton's wheel. The old bottle was 44 wide, under the\r
     floor. Neck and cork are the crown (cork top y 12). The glass is drawn\r
     in the cast's steel light C8CCD6 with a white gleam: glass and the\r
     sprayer's steel share one material, which is what leaves room for the\r
     Mold's teal and the cast's leather inside the four-material cap. The\r
     vinegar sits at y 66 so the whole face plate is on the liquid; eye y 84\r
     = 59% of the mass. Materials 4 / fills 9: steel/glass 8A8F98 C8CCD6 ·\r
     vinegar C8B45A 9A8838 · mold 3E8C7A 9ED4C4 · leather 6E4A2A 4A3826\r
     C9A66B. One crescent (9A8838, lower right, in the liquid), one gleam\r
     (white, upper left, on the glass). Tint lines, one: the nozzle glint.\r
     The Mold's tell is three colonies on the lit shoulder. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="spray" data-unit="sirke" style="--dur-atk:0.90s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="25" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 96px">\r
    <path d="M30 96 L22 106" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 96 L22 106" stroke="#6E4A2A" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="20" cy="108" r="6" fill="#6E4A2A" stroke="#2A2114" stroke-width="3"/>\r
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
    <!-- Neck and cork first, so the shoulder covers the neck's base. -->\r
    <path d="M42 42 L42 20 L62 20 L62 42 Z" fill="#C8CCD6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <rect x="39" y="12" width="26" height="12" rx="3" fill="#C9A66B" stroke="#2A2114" stroke-width="3"/>\r
\r
    <!-- The bottle: glass, vinegar with its meniscus, crescent, gleam, then\r
         the ink outline over the lot so the shade never eats it. -->\r
    <path d="M30 38 L74 38 Q82 44 82 60 L82 106 Q82 116 72 116 L32 116 Q22 116 22 106 L22 60 Q22 44 30 38 Z"\r
          fill="#C8CCD6"/>\r
    <path d="M22 68 Q37 63 52 67 Q67 71 82 66 L82 106 Q82 116 72 116 L32 116 Q22 116 22 106 Z" fill="#C8B45A"/>\r
    <path d="M82 78 L82 106 Q82 116 72 116 L52 116 L52 111 L70 111 Q77 111 77 104 L77 78 Z" fill="#9A8838"/>\r
    <path d="M28 50 Q26 56 26 64" fill="none" stroke="#FFFFFF" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M30 38 L74 38 Q82 44 82 60 L82 106 Q82 116 72 116 L32 116 Q22 116 22 106 L22 60 Q22 44 30 38 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Mold colonies on the lit shoulder: the Origin's tell. -->\r
    <circle cx="31" cy="50" r="5" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="38" cy="44" r="3.6" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="29" cy="59" r="3" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="29.5" cy="48.5" r="1.8" fill="#9ED4C4"/>\r
\r
    <!-- The cast face (style bible §5), eye y 84. -->\r
    <path d="M32 72 L44 74 M60 74 L72 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 97 Q52 102 60 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#C8B45A" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 96 Q52 104 60 96 Q59 107 52 108 Q45 107 44 96 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 102 Q52 104 55 102" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M34 48 L46 62 L36 76 L48 90 L38 104"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front arm and the pressure sprayer as one part; the squirt leaves the\r
       nozzle at (118, 87). -->\r
  <g class="armF" style="transform-origin:70px 96px">\r
    <path d="M70 96 L84 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M70 96 L84 100" stroke="#6E4A2A" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M86 97 L114 89" stroke="#2A2114" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M86 97 L114 89" stroke="#8A8F98" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M91 94 L108 89.5" stroke="#C8CCD6" stroke-width="1.8" stroke-linecap="round"/>\r
    <path d="M90 96 L94 84" stroke="#2A2114" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M90 96 L94 84" stroke="#C8CCD6" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M112 84 L118 86 L118 92 L112 94 Z" fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M84 102 Q88 108 94 106" fill="none" stroke="#2A2114" stroke-width="3" stroke-linecap="round"/>\r
    <circle cx="86" cy="100" r="6" fill="#6E4A2A" stroke="#2A2114" stroke-width="3"/>\r
\r
    <g class="ammo">\r
      <ellipse cx="118" cy="87" rx="4" ry="3.2" fill="#C8B45A" stroke="#2A2114" stroke-width="2.2"/>\r
    </g>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 87px">\r
    <path d="M118 87 C130 78 144 74 156 74" fill="none" stroke="#9A8838"\r
          stroke-width="7" stroke-linecap="round" opacity=".45"/>\r
    <path d="M118 87 C132 87 146 89 158 92" fill="none" stroke="#C8B45A"\r
          stroke-width="6" stroke-linecap="round" opacity=".7"/>\r
    <path d="M118 87 C130 95 142 102 152 108" fill="none" stroke="#3E8C7A"\r
          stroke-width="5.5" stroke-linecap="round" opacity=".5"/>\r
    <circle cx="140" cy="80" r="3" fill="#C8B45A" opacity=".8"/>\r
    <circle cx="146" cy="95" r="2.6" fill="#9A8838" opacity=".7"/>\r
    <circle cx="136" cy="100" r="2.4" fill="#9ED4C4" opacity=".7"/>\r
  </g>\r
</svg>\r
`;export{r as default};
