const e=`<!-- Damla (Drip) - Bleached Sink - Spoil - melee, a point held out
     attackSpeed 1.06 -> round(20/1.06) = 19 ticks = 0.95 s

     Archetype \`stab\`: the arm draws back and drives forward. A point is the
     only thing this body has and the whole of what it does with it.

     \`WEAPON damla [116, 86]\` is the held drop's tip, level.

     Silhouette: the teardrop. Narrow at the crown and widest at the floor,
     the inverse of every other body in the Sink and of the Foam it stands
     beside - at 53 px the family reads as one wedge among eleven masses.

     Mass x 18..86, y 26..118. Materials 2 / fills 4: water 6E96A6 A9CBD6
     E2F1F6 * brass eye F2C46A. One gleam (upper left), one crescent (lower
     right). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="damla" style="--dur-atk:0.95s">

  <ellipse class="shadow" cx="52" cy="137" rx="22" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 92px">
    <path d="M30 92 L22 98" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 92 L22 98" stroke="#6E96A6" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="101" r="6.5" fill="#A9CBD6" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#6E96A6" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#A9CBD6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#6E96A6" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#A9CBD6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The drop: fill, crescent, the gleam, then the ink. Pointed at the
         top and heaviest at the floor, which is the one outline in the Sink
         that is narrower above than below. -->
    <path d="M52 28 Q64 58 74 78 Q84 98 72 110 Q63 118 52 118 Q41 118 32 110 Q20 98 30 78 Q40 58 52 28 Z" fill="#A9CBD6"/>
    <path d="M74 78 Q84 98 72 110 Q63 118 52 118 L52 112 Q62 112 68 104 Q76 96 68 80 Z" fill="#6E96A6"/>
    <path d="M40 60 Q34 76 38 92" fill="none" stroke="#E2F1F6" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 28 Q64 58 74 78 Q84 98 72 110 Q63 118 52 118 Q41 118 32 110 Q20 98 30 78 Q40 58 52 28 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 76 L46 78 M58 78 L70 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="88" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="88" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="89" rx="3.05" ry="4.07" fill="#2A2114"/>
    <ellipse cx="64.4" cy="89" rx="3.05" ry="4.07" fill="#2A2114"/>
    <circle cx="40" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 101 Q52 105 58 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 62 L50 76 L40 90 L52 104 L42 120"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:76px 94px">
    <path d="M76 94 L92 90" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M76 94 L92 90" stroke="#A9CBD6" stroke-width="12" stroke-linecap="round"/>
    <!-- A second drop, held point out. -->
    <!-- A second drop, held point-first. Its tip is the aim. -->
    <path d="M116 86 Q100 80 94 88 Q100 96 116 90 Z"
          fill="#E2F1F6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="fx" style="transform-origin:119px 88px">
    <path d="M119 76 L137 66 M123 88 L141 88 M119 100 L137 110"
          stroke="#A9CBD6" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M119 76 L131 71 M123 88 L135 88 M119 100 L131 105"
          stroke="#E2F1F6" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="135" cy="70" r="2.6" fill="#A9CBD6"/>
    <circle cx="137" cy="104" r="2.4" fill="#E2F1F6"/>
  </g>
</svg>
`;export{e as default};
