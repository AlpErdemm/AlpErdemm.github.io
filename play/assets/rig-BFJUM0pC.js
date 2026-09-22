const r=`<!-- Şiş (Skewer) · Hearth 5 · Vanguard · melee, skewer spear and grill shield\r
     attackSpeed 0.80 → round(20/0.80) = 25 ticks = 1.25 s\r
\r
     Archetype \`stab\`, not \`swing\`: the spear rests upright and a swing would\r
     carry it through the body. \`WEAPON\` sis [97, 12] is the spear's head; it\r
     rests at -75° from the arm pivot and \`setAim\` lowers it about 56° into a\r
     level target inside the thrust, the lower-and-stab the character sheet\r
     draws, produced by the table rather than a keyframe. Geometry unchanged.\r
\r
     Redrawn for ticket 16 against docs/style-bible.md. Mass = the stacked\r
     tower, x 22..82 (60 wide), y 30..108 (78 tall), ratio 1.30, the tallest\r
     the cast allows and the roster's one vertical body; the rod's point is\r
     the crown (y 12). The face lives on the bottom chunk, drawn as a rounded\r
     block 60 wide so the brows fit with 6 to spare; the three morsels above\r
     (meat, onion, pepper) are 3-stroke plates on the rod. The old rig's\r
     burning brazier shield, apron and second food tower on the spear went:\r
     the shield is a steel grill, the spear carries two morsels. Eye y 78 =\r
     62% of the mass. Materials 4 / fills 7: meat 8C5230 5E3218 B07048 ·\r
     pepper B83A2E (the Dough batch's cloth red) · onion EAD4A8 (the\r
     Dumpling's dough) · steel 8A8F98 C8CCD6. The Vanguard's legs are steel\r
     greaves rather than the cast's leather, because leather would have been\r
     a fifth material; the boots keep the shared shape. One crescent (5E3218,\r
     the chunk's right face), one gleam (B07048, upper left). Tint lines,\r
     one: the spear glint.\r
\r
     \`cooked\` (the Hearth's second state, \`UnitRig.cook\`) grills the three\r
     morsels with bars of the meat shade and chars the chunk's rim; the face\r
     is untouched, because the layer draws over \`body\` and anything placed on\r
     the face erases it. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="sis" style="--dur-atk:1.25s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="25" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- The grill shield on the rear arm; its rim stops at x 8 (ink to 6.5). -->\r
  <g class="armB" style="transform-origin:32px 92px">\r
    <path d="M32 94 L26 104" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M32 94 L26 104" stroke="#8C5230" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="28" cy="88" r="20" fill="#8A8F98" stroke="#2A2114" stroke-width="3"/>\r
    <circle cx="28" cy="88" r="14" fill="#C8CCD6" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M22 78 L22 98 M34 78 L34 98" stroke="#8A8F98" stroke-width="3" stroke-linecap="round"/>\r
  </g>\r
\r
  <!-- Legs are the cast's shared construction (style bible §6) in the\r
       Vanguard's steel: from y 104 to 126 off pivots x 44 / 62, soles flat on\r
       136, boots 16 × 11. -->\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 104 L41 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 104 L41 126" stroke="#8A8F98" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 126 Q26 131 29 136 L44 136 Q46 130 42 125 Z"\r
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 104 L65 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 104 L65 126" stroke="#8A8F98" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 125 Q60 130 62 136 L77 136 Q79 131 74 126 Z"\r
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The rod and its point, then the morsels top to bottom so each one\r
         overlaps the one above; the chunk with the face last. -->\r
    <path d="M52 16 L52 36" stroke="#2A2114" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M52 16 L52 36" stroke="#8A8F98" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M52 12 L56 26 L48 26 Z" fill="#C8CCD6" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>\r
    <ellipse cx="52" cy="37" rx="20" ry="7" fill="#8C5230" stroke="#2A2114" stroke-width="3"/>\r
    <ellipse cx="52" cy="47" rx="24" ry="7" fill="#EAD4A8" stroke="#2A2114" stroke-width="3"/>\r
    <ellipse cx="52" cy="58" rx="27" ry="7" fill="#B83A2E" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M30 62 L74 62 Q82 62 82 70 L82 100 Q82 108 74 108 L30 108 Q22 108 22 100 L22 70 Q22 62 30 62 Z"\r
          fill="#8C5230" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M77 62 Q82 62 82 70 L82 100 Q82 108 74 108 L74 103 Q77 103 77 100 L77 67 Z" fill="#5E3218"/>\r
    <path d="M27 75 Q27 68 34 66" fill="none" stroke="#B07048" stroke-width="5" stroke-linecap="round"/>\r
\r
    <!-- The cast face (style bible §5), eye y 78. -->\r
    <path d="M32 66 L44 68 M60 68 L72 66" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="78" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="78" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="79" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="79" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="75.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="75.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 91 Q52 96 60 91" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <g class="cooked" style="transform-origin:52px 60px">\r
      <path d="M44 33 L42 41 M52 32 L52 42 M60 33 L62 41 M43 43 L41 52 M53 42 L53 53 M63 43 L65 52 M42 54 L40 63 M52 53 L52 64 M62 54 L64 63"\r
            fill="none" stroke="#5E3218" stroke-width="3" stroke-linecap="round"/>\r
      <path d="M27 68 Q25 85 27 102 M40 104 Q52 107 64 104"\r
            fill="none" stroke="#5E3218" stroke-width="5" stroke-linecap="round"/>\r
      <circle cx="31" cy="66" r="2.6" fill="#E4632A"/>\r
      <circle cx="75" cy="56" r="2.4" fill="#E4632A"/>\r
    </g>\r
\r
    <g data-expression="cute">\r
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#8C5230" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 90 Q52 98 60 90 Q59 101 52 102 Q45 101 44 90 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 96 Q52 98 55 96" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M38 46 L48 60 L38 74 L50 88 L40 104"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- The skewer spear: upright, two morsels on it, head at (97, 12). -->\r
  <g class="armF" style="transform-origin:76px 92px">\r
    <path d="M76 92 L88 96" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M76 92 L88 96" stroke="#8C5230" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M92 124 L97 22" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M92 124 L97 22" stroke="#8A8F98" stroke-width="4.6" stroke-linecap="round"/>\r
    <path d="M95 70 L93 112" stroke="#C8CCD6" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M97 12 L103 32 L91 32 Z" fill="#C8CCD6" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>\r
    <ellipse cx="96" cy="44" rx="9" ry="6" fill="#8C5230" stroke="#2A2114" stroke-width="3"/>\r
    <ellipse cx="95" cy="58" rx="9" ry="5.5" fill="#B83A2E" stroke="#2A2114" stroke-width="3"/>\r
    <circle cx="90" cy="98" r="6.5" fill="#8C5230" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:98px 90px">\r
    <path d="M98 90 L134 90" stroke="#E4632A" stroke-width="8" stroke-linecap="round" opacity=".9"/>\r
    <path d="M100 90 L128 90" stroke="#FFD9A0" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="140" cy="82" rx="3" ry="2.3" fill="#E4632A"/>\r
    <ellipse cx="143" cy="94" rx="2.6" ry="2" fill="#FFD9A0"/>\r
  </g>\r
</svg>\r
`;export{r as default};
