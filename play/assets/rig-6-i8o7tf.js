const e=`<!-- Zifir (Tar) · Burnt Oven · Spoil · ranged (range 3)
     attackSpeed 0.90 -> round(20/0.90) = 22 ticks = 1.10 s

     Archetype \`lob\`, the family's second and deliberately built the same way
     as Duman's: the ball is an \`.ammo\` group in the fist, \`MUZZLE zifir\`
     reads that group rather than the arm, and the hand-off happens where the
     eye already is. Two Burnt Oven shooters, one way of putting a thing in
     the air. \`SHOTS zifir\` is a \`blob\` with the steepest arc on the board at
     0.18, because pitch is heavy and it goes over a front line rather than
     through one.

     Silhouette: the drip. A rounded bell of set pitch with five pendants
     hanging off its lower edge, uneven, the longest reaching y 116 and the
     notches between them cut back to y 94. It is the only body on the roster
     whose outline ends in a fringe rather than a line, and the notches are
     deep on purpose: a shallow scallop closes up at 53 px and the fringe was
     the whole read. Everything else in the family sits flat on its own bottom
     edge; this one is still running.

     No Origin, no Role, no team colour, no tier mark, and no
     \`data-expression="cute"\` group. Mass = the bell with its pendants,
     x 18..86 (68 wide), y 46..116 (70 tall), ratio 1.03. No crown. Eye y 82 =
     47% of the mass, high because the pendants own the bottom third.
     Materials 2 / fills 5: pitch 463E33 6A645C 231F1A * ember B02E1F D9541F.
     One crescent (231F1A, lower right), one gleam (6A645C, upper left). Tint
     lines, two: the wet runs down the face of the bell. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="lob" data-unit="zifir" style="--dur-atk:1.10s">

  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:28px 92px">
    <path d="M28 92 L20 98" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M28 92 L20 98" stroke="#231F1A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="17" cy="101" r="6.5" fill="#463E33" stroke="#2A2114" stroke-width="3"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 112 L41 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 112 L41 126" stroke="#231F1A" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 126 Q26 130 29 134 L44 134 Q46 129 42 125 Z"
          fill="#463E33" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 112 L65 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 112 L65 126" stroke="#231F1A" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 125 Q60 130 62 134 L77 134 Q79 130 74 126 Z"
          fill="#463E33" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The bell and its pendants are one path, so the fringe is part of the
         outline rather than five shapes hung off it: at board scale a hem
         drawn as separate pieces reads as a row of feet. Five drips, all
         different lengths, none a mirror of another. -->
    <path d="M52 46 C72 46 86 62 86 82 L86 90 L80 114 L74 94 L64 116 L56 96 L46 114 L38 94 L28 112 L22 90 L18 82 C18 62 32 46 52 46 Z"
          fill="#463E33"/>
    <path d="M86 82 L86 90 L80 114 L74 94 L69 104 L70 88 Q77 88 79 82 Z" fill="#231F1A"/>
    <path d="M62 60 Q64 74 62 88 M72 66 Q75 78 73 90" fill="none" stroke="#6A645C"
          stroke-width="2.2" stroke-linecap="round"/>
    <path d="M30 62 Q24 70 24 82" fill="none" stroke="#6A645C" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 46 C72 46 86 62 86 82 L86 90 L80 114 L74 94 L64 116 L56 96 L46 114 L38 94 L28 112 L22 90 L18 82 C18 62 32 46 52 46 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 70 L44 72 M60 72 L72 70" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="82" rx="6.6" ry="7.6" fill="#B02E1F" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="82" rx="6.6" ry="7.6" fill="#B02E1F" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="83" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="83" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="79.4" r="1.6" fill="#D9541F"/>
    <circle cx="64" cy="79.4" r="1.6" fill="#D9541F"/>
    <path d="M44 95 Q52 100 60 95" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <path class="crack" d="M36 56 L48 70 L38 84 L50 98 L40 110"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:74px 90px">
    <path d="M74 90 L88 78" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M74 90 L88 78" stroke="#231F1A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="91" cy="75" r="6.5" fill="#463E33" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <circle cx="104" cy="62" r="9.5" fill="#231F1A" stroke="#2A2114" stroke-width="2.6"/>
      <path d="M99 57 Q102 54 106 55" fill="none" stroke="#6A645C" stroke-width="2.6" stroke-linecap="round"/>
      <path d="M104 72 Q106 78 103 80" fill="none" stroke="#231F1A" stroke-width="4" stroke-linecap="round"/>
    </g>
  </g>

  <g class="fx" style="transform-origin:104px 62px">
    <path d="M104 62 C118 54 134 54 148 58" fill="none" stroke="#231F1A"
          stroke-width="7" stroke-linecap="round" opacity=".5"/>
    <path d="M104 62 C118 64 134 68 146 76" fill="none" stroke="#3A332B"
          stroke-width="6" stroke-linecap="round" opacity=".75"/>
    <circle cx="132" cy="58" r="3" fill="#231F1A" opacity=".8"/>
    <circle cx="138" cy="72" r="2.6" fill="#6A645C" opacity=".7"/>
    <circle cx="124" cy="74" r="2.4" fill="#B02E1F" opacity=".75"/>
  </g>
</svg>
`;export{e as default};
