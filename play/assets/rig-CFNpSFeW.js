const r=`<!-- Sabun (Soap) - Bleached Sink - Spoil - melee, a second bar swung\r
     attackSpeed 1.00 -> round(20/1.00) = 20 ticks = 1.00 s\r
\r
     Archetype \`swing\`: the arm draws a wide arc and the \`fx\` flares at\r
     contact.\r
\r
     \`WEAPON sabun [119, 50]\` is the held bar's far edge, resting high.\r
\r
     Silhouette: the bar. Wide, low, and chamfered rather than rounded, with\r
     one pressed line across the waist - the third block in the family and the\r
     one that is neither the Sponge's arc nor the Scourer's corner. All three\r
     were measured side by side at board size.\r
\r
     Mass x 12..92, y 48..118. Materials 2 / fills 4: soap 4E6A8C 8FAFD0\r
     C7DDEE * brass eye F2C46A. One pressed line, one gleam (upper left). -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="sabun" style="--dur-atk:1.00s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="32" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 86px">\r
    <path d="M30 86 L22 92" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 86 L22 92" stroke="#4E6A8C" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="95" r="6.5" fill="#8FAFD0" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#4E6A8C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#8FAFD0" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#4E6A8C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#8FAFD0" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- The bar: fill, crescent, the pressed line round its waist, a gleam,\r
         then the ink. Long corners turned shallow rather than round - a\r
         chamfer, which is neither the Sponge's arc nor the Scourer's angle. -->\r
    <path d="M14 70 Q14 52 34 50 L70 50 Q90 52 90 70 L90 100 Q90 118 70 118 L34 118 Q14 118 14 100 Z" fill="#8FAFD0"/>\r
    <path d="M90 70 L90 100 Q90 118 70 118 L52 118 L52 112 L70 112 Q84 112 84 100 L84 70 Q84 58 72 56 Q90 58 90 70 Z" fill="#4E6A8C"/>\r
    <path d="M20 104 Q52 98 86 104" fill="none" stroke="#4E6A8C" stroke-width="2.8" stroke-linecap="round"/>\r
    <path d="M26 64 Q22 76 26 88" fill="none" stroke="#C7DDEE" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M14 70 Q14 52 34 50 L70 50 Q90 52 90 70 L90 100 Q90 118 70 118 L34 118 Q14 118 14 100 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <path d="M34 72 L46 74 M58 74 L70 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="41" cy="84" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="63" cy="84" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="42.4" cy="85" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <ellipse cx="64.4" cy="85" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <circle cx="40" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="62" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M46 97 Q52 101 58 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 56 L50 70 L40 84 L52 98 L42 114"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:82px 86px">\r
    <path d="M82 86 L98 82" stroke="#2A2114" stroke-width="18" stroke-linecap="round"/>\r
    <path d="M82 86 L98 82" stroke="#8FAFD0" stroke-width="14" stroke-linecap="round"/>\r
    <!-- A second bar of soap, held up and brought down. -->\r
    <!-- A second bar, held flat. Its far edge is the aim, resting high so\r
         \`swing\`'s contact brings it down level. -->\r
    <path d="M96 66 Q108 50 119 50 Q118 62 108 78 Z"\r
          fill="#C7DDEE" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M102 66 Q110 56 115 54" fill="none" stroke="#4E6A8C" stroke-width="2.6" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:119px 64px">\r
    <path d="M119 52 L137 42 M123 64 L141 64 M119 76 L137 86"\r
          stroke="#8FAFD0" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 52 L131 47 M123 64 L135 64 M119 76 L131 81"\r
          stroke="#C7DDEE" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="135" cy="46" r="2.6" fill="#8FAFD0"/>\r
    <circle cx="137" cy="80" r="2.4" fill="#C7DDEE"/>\r
  </g>\r
</svg>\r
`;export{r as default};
