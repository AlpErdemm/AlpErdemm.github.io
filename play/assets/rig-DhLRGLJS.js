const r=`<!-- Guve (Pantry Moth) - Crawling Crate - Spoil - ranged 2, wing dust\r
     attackSpeed 1.08 -> round(20/1.08) = 19 ticks = 0.95 s\r
\r
     Two triangular folded wings over a narrow body, feathered antennae\r
     above. The wings are the silhouette and they are drawn folded rather\r
     than spread: a spread moth is a diamond and would read as the Spider's\r
     splay at board size, a folded one is a tent and reads as nothing else\r
     in the family.\r
\r
     Archetype \`spray\`, the second body on the roster ever to wear it - the\r
     body squeezes and the \`.fx\` cone opens. \`MUZZLE guve\` is \`part: 'ammo'\`\r
     for the reason Sirke's is: \`spray\` is one of the three archetypes with\r
     an ammo track, so the puff the rig is drawn holding is the thing that\r
     leaves, and the shot starts where the eye was already looking.\r
\r
     \`SHOTS guve\` is a \`spray\` of pale wing scale over dusty grey, flat -\r
     the moth beats it off at the body in front rather than lobbing it.\r
\r
     Mass = the wing tent, x 22..84 (62 wide), y 46..112 (66 tall), ratio\r
     1.06. Eye y 70 = 36% of the mass. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="spray" data-unit="guve" style="--dur-atk:0.95s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="23" ry="5.5" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 86px">\r
    <path d="M30 86 L20 93" stroke="#241A10" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M30 86 L20 93" stroke="#8F6A3E" stroke-width="5.5" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 106 L40 122" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M44 106 L40 122" stroke="#6B4A2A" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M31 124 Q28 129 31 134 L43 134 Q45 128 42 123 Z"\r
          fill="#8F6A3E" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 106 L66 122" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M62 106 L66 122" stroke="#6B4A2A" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 63 134 L75 134 Q77 129 74 124 Z"\r
          fill="#8F6A3E" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- Feathered antennae, drawn before the wings so their roots are\r
         covered. Different lengths and both swept back. -->\r
    <path d="M42 56 Q32 44 26 34" fill="none" stroke="#241A10" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M62 56 Q70 46 74 38" fill="none" stroke="#241A10" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M36 46 L30 42 M32 40 L26 37 M68 46 L74 43 M71 41 L77 38"\r
          stroke="#241A10" stroke-width="2.6" stroke-linecap="round"/>\r
\r
    <!-- The wing tent: fill, crescent, gleam, ink. -->\r
    <path d="M52 50 Q74 62 82 88 Q86 104 70 110 Q52 114 34 110 Q18 104 22 88 Q30 62 52 50 Z"\r
          fill="#B8A377"/>\r
    <path d="M82 88 Q86 104 70 110 Q60 113 52 113 L52 106 Q66 106 73 99 Q79 93 77 87 Z"\r
          fill="#8F6A3E"/>\r
    <path d="M38 66 Q31 76 29 88" fill="none" stroke="#EFE3C0" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M52 50 Q74 62 82 88 Q86 104 70 110 Q52 114 34 110 Q18 104 22 88 Q30 62 52 50 Z"\r
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Wing bars: three tint strokes across the fold, uneven, plus the\r
         centre seam in ink so the tent reads as two wings and not a cape. -->\r
    <path d="M52 52 L52 112" fill="none" stroke="#241A10" stroke-width="3" stroke-linecap="round"/>\r
    <path d="M32 94 Q52 99 72 93" fill="none" stroke="#6B4A2A" stroke-width="3.2" stroke-linecap="round"/>\r
    <path d="M36 82 Q52 86 68 81" fill="none" stroke="#6B4A2A" stroke-width="2.8" stroke-linecap="round"/>\r
\r
    <path d="M38 58 L47 63 M57 63 L66 58" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>\r
    <ellipse cx="43" cy="70" rx="6" ry="7" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="61" cy="70" rx="6" ry="7" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="44.2" cy="71" rx="3.2" ry="4.4" fill="#241A10"/>\r
    <ellipse cx="62.2" cy="71" rx="3.2" ry="4.4" fill="#241A10"/>\r
    <circle cx="42" cy="67.6" r="1.5" fill="#FFFFFF"/>\r
    <circle cx="60" cy="67.6" r="1.5" fill="#FFFFFF"/>\r
\r
    <path class="crack" d="M38 60 L48 74 L38 88 L50 100 L40 110"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:70px 86px">\r
    <path d="M70 86 L84 82" stroke="#241A10" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M70 86 L84 82" stroke="#8F6A3E" stroke-width="5.5" stroke-linecap="round"/>\r
    <circle cx="86" cy="81" r="6" fill="#B8A377" stroke="#241A10" stroke-width="3"/>\r
    <!-- The held puff. \`MUZZLE\` reads this group's centre, so the dust\r
         leaves the hand rather than the chest. -->\r
    <g class="ammo">\r
      <circle cx="102" cy="72" r="6.5" fill="#D9C89A" stroke="#241A10" stroke-width="3"/>\r
      <circle cx="99" cy="69" r="2" fill="#EFE3C0"/>\r
    </g>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:110px 68px">\r
    <path d="M110 68 L134 56 M110 70 L136 70 M110 72 L134 84"\r
          stroke="#D9C89A" stroke-width="4.6" stroke-linecap="round" opacity=".9"/>\r
    <circle cx="128" cy="60" r="2.6" fill="#EFE3C0"/>\r
    <circle cx="130" cy="79" r="2.2" fill="#EFE3C0"/>\r
  </g>\r
</svg>\r
`;export{r as default};
