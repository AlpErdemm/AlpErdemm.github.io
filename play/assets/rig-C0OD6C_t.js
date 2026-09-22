const e=`<!-- Salamura (Brine) . Damp Cellar . Spoil . melee, a second jar swung
     attackSpeed 1.00 > round(20/1.00) = 20 ticks = 1.00 s

     Archetype \`swing\`: the arm draws a wide arc and the \`fx\` flares at
     contact.

     \`WEAPON salamura [119, 50]\` is the held jar's far edge, resting high.

     Silhouette: the jar. Straight sides, a hard shoulder and a short neck .
     the one squared body in a family of masses that have all slumped, spread
     or bloomed. Measured beside the Rot and the Humidity at board size until
     none of the three could be taken for another: this is the only one of
     them with a corner.

     Mass x 18..86, y 36..118. Materials 2 / fills 4: brine 5A5A34 9A9A56
     D6D69A * brass eye F2C46A. One fill line, one gleam (upper left), one
     crescent (lower right). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="swing" data-unit="salamura" style="--dur-atk:1.00s">

  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 86px">
    <path d="M30 86 L22 92" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 86 L22 92" stroke="#5A5A34" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="95" r="6.5" fill="#9A9A56" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#5A5A34" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#9A9A56" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#5A5A34" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#9A9A56" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The neck first, then the body over it, so the shoulder covers the
         join. -->
    <path d="M40 36 L64 36 L64 52 L40 52 Z" fill="#D6D69A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The jar: fill, crescent, the fill line, a gleam, then the ink.
         Straight sides and a hard shoulder, which is the silhouette. -->
    <path d="M20 66 L34 50 L70 50 L84 66 L84 112 L80 118 L24 118 L20 112 Z" fill="#9A9A56"/>
    <path d="M84 66 L84 112 L80 118 L52 118 L52 112 L76 112 L78 108 L78 68 L66 56 Z" fill="#5A5A34"/>
    <path d="M24 100 L80 100" fill="none" stroke="#5A5A34" stroke-width="3" stroke-linecap="round"/>
    <path d="M28 66 L26 84" fill="none" stroke="#D6D69A" stroke-width="5" stroke-linecap="round"/>
    <path d="M20 66 L34 50 L70 50 L84 66 L84 112 L80 118 L24 118 L20 112 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 76 L46 78 M58 78 L70 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="88" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="88" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="89" rx="3.38" ry="4.51" fill="#2A2114"/>
    <ellipse cx="64.4" cy="89" rx="3.38" ry="4.51" fill="#2A2114"/>
    <circle cx="40" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 101 Q52 105 58 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 60 L50 74 L40 88 L52 102 L42 118"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:82px 86px">
    <path d="M82 86 L98 82" stroke="#2A2114" stroke-width="18" stroke-linecap="round"/>
    <path d="M82 86 L98 82" stroke="#9A9A56" stroke-width="14" stroke-linecap="round"/>
    <!-- A second jar of brine, held flat. Its far edge is the aim, resting high so \`swing\`'s contact
         brings it down level. -->
    <path d="M96 66 Q108 50 119 50 Q118 62 108 78 Z"
          fill="#D6D69A" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M102 66 Q110 56 115 54" fill="none" stroke="#5A5A34" stroke-width="2.6" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:119px 64px">
    <path d="M119 52 L137 42 M123 64 L141 64 M119 76 L137 86"
          stroke="#9A9A56" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M119 52 L131 47 M123 64 L135 64 M119 76 L131 81"
          stroke="#D6D69A" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="135" cy="46" r="2.6" fill="#9A9A56"/>
    <circle cx="137" cy="80" r="2.4" fill="#D6D69A"/>
  </g>
</svg>
`;export{e as default};
