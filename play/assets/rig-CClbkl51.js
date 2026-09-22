const r=`<!-- Kurum (Soot) · Burnt Oven · Spoil · melee, flue brush\r
     attackSpeed 1.11 -> round(20/1.11) = 18 ticks = 0.90 s\r
\r
     Archetype \`crank\`, and it is the first body on disk to wear one. A mill\r
     has no discrete release; \`RELEASE.crank\` is the shared \`fx\` flash and the\r
     arm only rocks 6 degrees either side. That is exactly what a body made of\r
     grit does to a surface: it scours rather than strikes, and the flash at\r
     33% is the blow. \`WEAPON kurum [118, 56]\` is the far corner of the brush\r
     head, so \`setAim\` still swings the rod down into a body a row below.\r
\r
     The family's silhouette rule: five bodies, five outlines a player can\r
     tell apart at 0.42 px per unit. This one is the round lumpy puff, and the\r
     rod is what stops it reading as the Ember's dome.\r
\r
     No Origin, no Role and no team colour: the def carries no tags and\r
     \`ENAMEL.md\` forbids the rest. No \`data-expression="cute"\` group either,\r
     the Dumpling's and the Flatcake's precedent, because this body is not on\r
     the player's side of the counter and the placement phase should not\r
     soften it.\r
\r
     Mass = the soot puff, x 20..84 (64 wide), y 48..118 (70 tall), ratio\r
     1.09. Eye y 86 = 54% of the mass. Materials 3 / fills 7: char 454039\r
     5E574E 322E29 * ash 6A645C 8A847B 4F4A44 * ember F2A02A. One crescent\r
     (4F4A44, lower right), one gleam (8A847B, upper left). Tint lines, two:\r
     the bristle strokes. The eye is ember rather than the cast's white,\r
     which is the one place the Burnt Oven palette is allowed onto the face. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="crank" data-unit="kurum" style="--dur-atk:0.90s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="27" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 96px">\r
    <path d="M30 96 L22 104" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 96 L22 104" stroke="#4F4A44" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="20" cy="106" r="6" fill="#6A645C" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
\r
  <!-- Legs sit 2 units short of the roster's y 136 sole line: \`check-tiers\`\r
       measures ink as geometry plus half the pen and the family takes no\r
       waiver, so the boot is drawn to land at 135.9 rather than overrun. -->\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 106 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 106 L41 124" stroke="#322E29" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#454039" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 106 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 106 L65 124" stroke="#322E29" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#454039" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- Two grit flecks lifting off the crown, drawn first so the puff covers\r
         their base. Both sit right of centre and at different sizes: a\r
         symmetrical pair either side of x 52 reads as a pair of ears at board\r
         scale, which is the one thing this body must not be. -->\r
    <circle cx="66" cy="38" r="5" fill="#4F4A44" stroke="#2A2114" stroke-width="2.6"/>\r
    <circle cx="78" cy="28" r="3.2" fill="#4F4A44" stroke="#2A2114" stroke-width="2.6"/>\r
\r
    <!-- The puff: fill, crescent, gleam, then the ink outline over the lot. -->\r
    <path d="M52 48 Q72 48 78 62 Q88 70 82 84 Q88 100 76 110 Q68 120 52 117 Q36 120 28 110 Q16 100 22 84 Q16 70 26 62 Q32 48 52 48 Z"\r
          fill="#6A645C"/>\r
    <path d="M82 84 Q88 100 76 110 Q68 120 52 117 L52 112 Q66 114 72 106 Q82 98 77 86 Z"\r
          fill="#4F4A44"/>\r
    <path d="M32 62 Q27 70 27 79" fill="none" stroke="#8A847B" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M52 48 Q72 48 78 62 Q88 70 82 84 Q88 100 76 110 Q68 120 52 117 Q36 120 28 110 Q16 100 22 84 Q16 70 26 62 Q32 48 52 48 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- The face: the cast's set from style-bible §5, with the eye filled\r
         ember instead of white. Angry brows: the inner end drops 6. -->\r
    <path d="M32 72 L44 78 M60 78 L72 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="86" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="86" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 101 Q52 96 60 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <path class="crack" d="M34 58 L46 72 L36 86 L48 100 L38 112"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front arm and the flue brush as one part. The rod rests at 51 degrees\r
       above horizontal, inside the roster's 58..78 band's spirit and low\r
       enough that the mill's small rock still reads as work. -->\r
  <g class="armF" style="transform-origin:76px 94px">\r
    <path d="M76 94 L88 87" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M76 94 L88 87" stroke="#4F4A44" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="90" cy="85" r="6.5" fill="#6A645C" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M89 87 L106 66" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M89 87 L106 66" stroke="#6A645C" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M103 68 L114 53 L120 59 L109 74 Z"\r
          fill="#454039" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M106 63 L115 57 M110 68 L118 62" stroke="#8A847B" stroke-width="2.6" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 62px">\r
    <path d="M118 52 L134 44 M122 63 L140 62 M118 74 L134 80"\r
          stroke="#8A847B" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M118 52 L129 47 M122 63 L135 62 M118 74 L129 77"\r
          stroke="#A9A29A" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="132" cy="54" r="2.6" fill="#6A645C"/>\r
    <circle cx="134" cy="72" r="2.4" fill="#6A645C"/>\r
  </g>\r
</svg>\r
`;export{r as default};
