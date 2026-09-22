const r=`<!-- Mentese (Hinge) - Rusted Cupboard - Spoil - melee, a broken leaf turned\r
     attackSpeed 0.85 -> round(20/0.85) = 24 ticks = 1.20 s\r
\r
     Archetype \`crank\`, Kurum's and Sac's: the arm turns at a constant rate\r
     rather than easing, which is what \`rigAnim.ts\` gives \`armF\` a \`linear\`\r
     curve for. A hinge is the one body in the family whose whole motion is a\r
     turn, so the archetype is the fiction.\r
\r
     \`WEAPON mentese [117, 60]\` is the free leaf's outer corner, at the top of\r
     its turn.\r
\r
     Silhouette: the split. Two flat leaves drawn apart with a barrel of three\r
     knuckles between them - the only Cupboard body with a hole through its own\r
     middle, and the only one on the board whose outline is two masses rather\r
     than one. At 53 px the gap survives when detail does not.\r
\r
     Mass x 16..88, y 44..120. Materials 2 / fills 4: brassed iron 5A4C36\r
     9C8654 C9B47A * rust B0582C, one run. Brass eye F2C46A, one to a leaf,\r
     which is why they sit wider apart than any other face in the family. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="crank" data-unit="mentese" style="--dur-atk:1.20s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="32" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 86px">\r
    <path d="M30 86 L22 92" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 86 L22 92" stroke="#5A4C36" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="95" r="6.5" fill="#9C8654" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#5A4C36" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#9C8654" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#5A4C36" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#9C8654" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- Two leaves, drawn apart, and the barrel between them last so it covers\r
         both inner edges. The gap is the whole silhouette. -->\r
    <path d="M18 48 L46 48 L46 118 L18 118 Z" fill="#9C8654"/>\r
    <path d="M18 48 L46 48 L46 118 L18 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M58 48 L86 48 L86 118 L58 118 Z" fill="#9C8654"/>\r
    <path d="M70 48 L86 48 L86 118 L70 118 Z" fill="#5A4C36"/>\r
    <path d="M58 48 L86 48 L86 118 L58 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Countersunk holes, three a leaf: the one mark that says hinge and not\r
         plate at 53 px. -->\r
    <circle cx="30" cy="60" r="3.6" fill="#5A4C36"/>\r
    <circle cx="30" cy="84" r="3.6" fill="#5A4C36"/>\r
    <circle cx="30" cy="108" r="3.6" fill="#5A4C36"/>\r
    <circle cx="76" cy="60" r="3.6" fill="#2A2114"/>\r
    <circle cx="76" cy="84" r="3.6" fill="#2A2114"/>\r
    <circle cx="76" cy="108" r="3.6" fill="#2A2114"/>\r
    <path d="M24 56 L24 76" fill="none" stroke="#C9B47A" stroke-width="4.5" stroke-linecap="round"/>\r
\r
    <!-- The barrel: three knuckles on one pin. -->\r
    <path d="M44 46 L60 46 L60 70 L44 70 Z" fill="#C9B47A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M44 74 L60 74 L60 96 L44 96 Z" fill="#9C8654" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M44 100 L60 100 L60 120 L44 120 Z" fill="#C9B47A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M52 44 L52 122" fill="none" stroke="#5A4C36" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M64 102 Q68 110 64 116" fill="none" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>\r
\r
    <path d="M23 70 L35 72 M71 72 L83 70" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="30" cy="82" rx="5.4" ry="6.21" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="76" cy="82" rx="5.4" ry="6.21" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="31.4" cy="83" rx="2.94" ry="3.93" fill="#2A2114"/>\r
    <ellipse cx="77.4" cy="83" rx="2.94" ry="3.93" fill="#2A2114"/>\r
    <circle cx="29" cy="79.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="75" cy="79.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 98 L60 98" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 56 L50 70 L40 84 L52 98 L42 114"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:80px 82px">\r
    <path d="M80 82 L94 74" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M80 82 L94 74" stroke="#9C8654" stroke-width="10" stroke-linecap="round"/>\r
    <!-- A free leaf off a broken hinge, turned on its pin. Its outer corner is\r
         the aim, and \`crank\` turns it through its own face. -->\r
    <path d="M92 78 L117 60 L112 74 L100 88 Z"\r
          fill="#C9B47A" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <circle cx="106" cy="72" r="3" fill="#5A4C36"/>\r
  </g>\r
  <g class="fx" style="transform-origin:119px 70px">\r
    <path d="M119 58 L137 48 M123 70 L141 70 M119 82 L137 92"\r
          stroke="#9C8654" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 58 L131 53 M123 70 L135 70 M119 82 L131 87"\r
          stroke="#C9B47A" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="135" cy="52" r="2.6" fill="#9C8654"/>\r
    <circle cx="137" cy="86" r="2.4" fill="#C9B47A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
