const r=`<!-- Turşu (Pickle) · Mold 5 · Assassin · melee, twin glass shards\r
     attackSpeed 0.66 → round(20/0.66) = 30 ticks = 1.50 s\r
\r
     Archetype \`stab\`: the character sheet's strip is a lightning lunge that\r
     passes through the target, and \`stab\`'s 16-unit forward shove is that.\r
     The shards rest low (+27°) like the Dumpling's dagger, because \`stab\`\r
     adds only +6° at contact and \`setAim\` can lift a low guard to a level\r
     body inside the cap. The forward shard's point is \`WEAPON\` tursu\r
     [117, 108] and its geometry is unchanged.\r
\r
     Redrawn for ticket 20 against docs/style-bible.md. The old rig was the\r
     roster's one skinny body, 28 wide, and §6 has no room for it: a Unit is\r
     60–74 wide. What survives of "skinny" is the ratio — the capsule is\r
     x 22..82 (60 wide), y 34..112 (78 tall), 1.30, the tallest §6 allows,\r
     the same box the Vinegar's bottle takes, so the Mold's two tall bodies\r
     read as tall beside the Stilton's square. The broken-jar rim is worn as\r
     a crown of glass shards (tips y 14). Eye y 80 = 59% of the mass.\r
     Materials 4 / fills 10: pickle 6B7A32 4E5E28 A5B667 · steel/glass\r
     8A8F98 C8CCD6 · mold 3E8C7A 9ED4C4 · leather 6E4A2A 4A3826 C9A66B. One\r
     crescent (4E5E28, lower right), one gleam (A5B667, upper left). The\r
     warts are shade-coloured fills at rx 3, above the §11.3 floor. Tint\r
     lines, two: the shard glints. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="tursu" style="--dur-atk:1.50s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="25" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear arm and the reverse-grip shard; its point stops at x 9 (ink to 7.5). -->\r
  <g class="armB" style="transform-origin:32px 92px">\r
    <path d="M32 92 L24 102" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M32 92 L24 102" stroke="#6B7A32" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="22" cy="104" r="6" fill="#6B7A32" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M24 106 L16 112 L9 116 L12 109 L19 100 Z"\r
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M19 105 L13 112" fill="none" stroke="#C8CCD6" stroke-width="2.2" stroke-linecap="round"/>\r
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
    <!-- The capsule: fill, crescent, gleam, warts, then the outline over the lot. -->\r
    <path d="M52 34 C36 34 22 46 22 66 L22 86 C22 102 36 112 52 112 C68 112 82 102 82 86 L82 66 C82 46 68 34 52 34 Z"\r
          fill="#6B7A32"/>\r
    <path d="M82 66 L82 86 C82 102 68 112 52 112 L52 107 C65 107 77 99 77 86 L77 66 C77 54 70 44 62 38 L66 35 C76 41 82 52 82 66 Z"\r
          fill="#4E5E28"/>\r
    <path d="M30 62 Q31 50 40 43" fill="none" stroke="#A5B667" stroke-width="5" stroke-linecap="round"/>\r
    <g fill="#4E5E28">\r
      <ellipse cx="42" cy="50" rx="3" ry="2.4"/>\r
      <ellipse cx="56" cy="43" rx="3" ry="2.4"/>\r
      <ellipse cx="28" cy="74" rx="2.6" ry="3.2"/>\r
      <ellipse cx="32" cy="98" rx="3" ry="2.4"/>\r
    </g>\r
    <path d="M52 34 C36 34 22 46 22 66 L22 86 C22 102 36 112 52 112 C68 112 82 102 82 86 L82 66 C82 46 68 34 52 34 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- The broken jar's rim, worn as a crown: a band and three standing shards. -->\r
    <path d="M28 46 Q52 34 76 46 L76 40 Q52 28 28 40 Z"\r
          fill="#C8CCD6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M34 40 L38 22 L44 36 Z M48 34 L54 14 L60 32 Z M64 36 L72 22 L74 40 Z"\r
          fill="#C8CCD6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M78 50 C76 56 76 60 78 60 C80 60 80 56 78 50 Z" fill="#C8CCD6" stroke="#2A2114" stroke-width="2.3"/>\r
\r
    <!-- Mold colonies on the lit flank: the Origin's tell. -->\r
    <circle cx="31" cy="58" r="4.5" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="37" cy="52" r="3.2" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="32" cy="66" r="3" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>\r
    <circle cx="29.8" cy="56.8" r="1.8" fill="#9ED4C4"/>\r
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
    <g data-expression="cute">\r
      <path d="M32 70 Q38 65 44 70 M60 70 Q66 65 72 70" fill="none" stroke="#6B7A32" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 70 Q38 65 44 70 M60 70 Q66 65 72 70" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="93" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="93" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 92 Q52 100 60 92 Q59 103 52 104 Q45 103 44 92 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 98 Q52 100 55 98" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M34 44 L46 58 L36 72 L48 86 L38 100"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Forward arm and the dominant shard; point at (117, 108). -->\r
  <g class="armF" style="transform-origin:70px 92px">\r
    <path d="M70 92 L84 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M70 92 L84 100" stroke="#6B7A32" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="86" cy="102" r="6" fill="#6B7A32" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M88 98 L100 99 L107 103 L117 108 L109 109 L100 106 L88 106 Z"\r
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M93 102 L109 106" fill="none" stroke="#C8CCD6" stroke-width="2.2" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:116px 100px">\r
    <path d="M96 76 Q132 96 100 124" fill="none" stroke="#8A8F98" stroke-width="8"\r
          stroke-linecap="round" opacity=".55"/>\r
    <path d="M100 82 Q126 98 102 118" fill="none" stroke="#FFFFFF" stroke-width="3"\r
          stroke-linecap="round"/>\r
    <path d="M100 124 Q132 104 96 76" fill="none" stroke="#C8CCD6" stroke-width="3.4"\r
          stroke-linecap="round" opacity=".7"/>\r
    <circle cx="128" cy="86" r="3.2" fill="#3E8C7A"/>\r
    <circle cx="134" cy="102" r="2.6" fill="#9ED4C4"/>\r
    <circle cx="126" cy="116" r="3" fill="#3E8C7A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
