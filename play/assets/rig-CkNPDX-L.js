const r=`<!-- Tortu (Scale) - Rusted Cupboard - Spoil - melee, a horn of its own crust\r
     attackSpeed 0.80 -> round(20/0.80) = 25 ticks = 1.25 s\r
\r
     Archetype \`swing\`, and the slowest cycle in the family. This is the heavy\r
     the formations lead with: every shape but the swarm puts one body at the\r
     front and this is it.\r
\r
     \`WEAPON tortu [119, 52]\` is the carried crust's outer horn - the leading\r
     edge of the mass rather than anything held, the reading Kavruk is drawn\r
     to.\r
\r
     Silhouette: the stepped bank. Both flanks climb in flat terraces rather\r
     than curving, and the two flanks do not step at the same heights, so the\r
     outline is a staircase that is wrong on one side. Nothing else in the\r
     Cupboard has a straight horizontal edge above its own base, and nothing\r
     else on the board steps at all.\r
\r
     Mass x 16..88, y 56..118 - short and broad, because a body that leads a\r
     wall has to read as something standing in the way.\r
\r
     Materials 2 / fills 4: sediment 4B3B2A 8A7156 B79A76 * rust B0582C, two\r
     runs. Brass eye F2C46A. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="tortu" style="--dur-atk:1.25s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="34" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 88px">\r
    <path d="M30 88 L22 94" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 88 L22 94" stroke="#4B3B2A" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="97" r="6.5" fill="#8A7156" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#4B3B2A" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#8A7156" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#4B3B2A" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#8A7156" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- The crust: fill, crescent, the strata across it, gleam, then the ink.\r
         Both sides step, and they do not step at the same heights. -->\r
    <path d="M18 112 L18 96 L24 96 L24 82 L32 82 L32 66 L42 58 L64 56 L72 68 L78 82 L86 96 L86 112 Q88 118 72 118 L32 118 Q16 118 18 112 Z" fill="#8A7156"/>\r
    <path d="M78 82 L86 96 L86 112 Q88 118 72 118 L52 118 L52 110 L76 110 L76 96 L70 84 Z" fill="#4B3B2A"/>\r
    <path d="M22 96 L84 96 M28 82 L80 82 M34 68 L74 68" fill="none" stroke="#4B3B2A" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M28 88 L26 104" fill="none" stroke="#B79A76" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M60 100 Q64 106 60 112 M40 72 Q44 78 40 84" fill="none" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M18 112 L18 96 L24 96 L24 82 L32 82 L32 66 L42 58 L64 56 L72 68 L78 82 L86 96 L86 112 Q88 118 72 118 L32 118 Q16 118 18 112 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <path d="M32 66 L44 68 M60 68 L72 66" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="78" rx="6.4" ry="7.36" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="78" rx="6.4" ry="7.36" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="79" rx="3.49" ry="4.65" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="79" rx="3.49" ry="4.65" fill="#2A2114"/>\r
    <circle cx="38" cy="75.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="75.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 94 Q52 99 60 94" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 60 L50 74 L40 88 L52 102 L42 118"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:82px 88px">\r
    <path d="M82 88 L98 72" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M82 88 L98 72" stroke="#8A7156" stroke-width="12" stroke-linecap="round"/>\r
    <!-- A horn of its own crust, broken off and carried. It rests high, and\r
         \`swing\` brings the outer edge level at contact. -->\r
    <path d="M94 76 L112 58 L119 52 L114 70 L104 86 Z"\r
          fill="#B79A76" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M102 74 L112 62" fill="none" stroke="#4B3B2A" stroke-width="2.6" stroke-linecap="round"/>\r
  </g>\r
  <g class="fx" style="transform-origin:119px 68px">\r
    <path d="M119 56 L137 46 M123 68 L141 68 M119 80 L137 90"\r
          stroke="#8A7156" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 56 L131 51 M123 68 L135 68 M119 80 L131 85"\r
          stroke="#B79A76" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="135" cy="50" r="2.6" fill="#8A7156"/>\r
    <circle cx="137" cy="84" r="2.4" fill="#B79A76"/>\r
  </g>\r
</svg>\r
`;export{r as default};
