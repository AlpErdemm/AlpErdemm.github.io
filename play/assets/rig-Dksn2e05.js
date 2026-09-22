const r=`<!-- Kapak (Lid) - Rusted Cupboard - Spoil - melee, a second lid swung\r
     attackSpeed 0.82 -> round(20/0.82) = 24 ticks = 1.20 s\r
\r
     Archetype \`swing\`: the arm draws a wide arc and the \`fx\` flares at\r
     contact. A flat plate brought down is the one thing this body can do, and\r
     it is the slowest cycle in the family beside the Scale.\r
\r
     The family's plate - the most hit points a point of budget buys in the\r
     Cupboard - so the outline is all width and no height.\r
\r
     \`WEAPON kapak [119, 48]\` is the held lid's far rim. It rests high, which\r
     \`swing\`'s +56 at contact brings level with the body it is coming down on -\r
     the reading Kuflu Peynir's cleaver and Curuf's slab are both drawn to.\r
\r
     Silhouette: the dome on its rim. The widest and shortest mass in the\r
     Cupboard - x 10..94 against a top at y 44 - and the only one whose\r
     footprint is wider than its own body. Nothing else in the family is wider\r
     than it is tall.\r
\r
     Mass x 10..94, y 44..118. Materials 2 / fills 4: tin 55514A A8A298\r
     D6D0C4 * rust B0582C, one ring. Brass eye F2C46A. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="kapak" style="--dur-atk:1.20s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="34" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 88px">\r
    <path d="M30 88 L22 94" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 88 L22 94" stroke="#55514A" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="97" r="6.5" fill="#A8A298" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#55514A" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#A8A298" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#55514A" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#A8A298" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- The knob, before the dome, so the dome covers where it is seated. -->\r
    <path d="M45 44 L59 44 L57 60 L47 60 Z" fill="#D6D0C4" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
\r
    <!-- The dome: fill, crescent, two pressed rings, gleam, then the ink. -->\r
    <path d="M14 100 Q14 60 52 58 Q90 60 90 100 Z" fill="#A8A298"/>\r
    <path d="M90 100 L52 100 L52 94 L84 94 Q86 76 74 66 Q86 70 90 100 Z" fill="#55514A"/>\r
    <path d="M24 92 Q52 82 80 92 M20 78 Q52 68 84 78" fill="none" stroke="#55514A" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M30 84 Q26 74 34 68" fill="none" stroke="#D6D0C4" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M14 100 Q14 60 52 58 Q90 60 90 100 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- The rim, wider than the dome: the plate's whole reading at 53 px. -->\r
    <path d="M10 100 L94 100 L90 118 L14 118 Z" fill="#A8A298" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M52 100 L94 100 L90 118 L52 118 Z" fill="#55514A"/>\r
    <path d="M10 100 L94 100 L90 118 L14 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M20 108 Q52 104 84 108" fill="none" stroke="#B0582C" stroke-width="2.8" stroke-linecap="round"/>\r
\r
    <path d="M34 72 L46 74 M58 74 L70 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="41" cy="84" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="63" cy="84" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="42.4" cy="85" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <ellipse cx="64.4" cy="85" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <circle cx="40" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="62" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M46 96 Q52 100 58 96" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 64 L50 78 L40 92 L52 106 L42 122"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:84px 88px">\r
    <path d="M84 88 L100 70" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M84 88 L100 70" stroke="#A8A298" stroke-width="10" stroke-linecap="round"/>\r
    <!-- A second lid, held up edge-on and brought down. Its far rim is the aim,\r
         resting high so \`swing\`'s +56 at contact lands it level. -->\r
    <path d="M98 74 Q112 50 119 48 Q118 60 108 80 Z"\r
          fill="#D6D0C4" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M104 70 Q112 58 116 54" fill="none" stroke="#55514A" stroke-width="2.6" stroke-linecap="round"/>\r
  </g>\r
  <g class="fx" style="transform-origin:119px 66px">\r
    <path d="M119 54 L137 44 M123 66 L141 66 M119 78 L137 88"\r
          stroke="#A8A298" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 54 L131 49 M123 66 L135 66 M119 78 L131 83"\r
          stroke="#D6D0C4" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="135" cy="48" r="2.6" fill="#A8A298"/>\r
    <circle cx="137" cy="82" r="2.4" fill="#D6D0C4"/>\r
  </g>\r
</svg>\r
`;export{r as default};
