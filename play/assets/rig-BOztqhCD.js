const e=`<!-- Kül (Ash) · Burnt Oven · Spoil · melee, bare fists
     attackSpeed 1.20 -> round(20/1.20) = 17 ticks = 0.85 s

     Archetype \`punch\`, shared with Kömür and for the opposite reason: this is
     the family's cheapest body and it carries nothing, so the two fists are
     the whole of what it has. It is the fastest cycle on the family, which is
     what a swarm body should read as beside the Charcoal's 1.20 s.

     \`WEAPON kul [115, 92]\` is the front knuckle, the Brawler convention.

     Silhouette: the heap. A cone flaring to a wide flat base, with a peak
     that has slumped over to the right, and it is the only body on the family
     cut as a triangle. The Ember is a dome and the Charcoal a block; a heap
     is the one outline that is wider at the floor than anywhere above it, so
     it reads at 53 px even in the Stop 9 swarm where five of these stand at
     once. Palest body in the family too: ash is what is left when the ember
     has gone out, and it is the only Burnt Oven body lighter than the ground.

     No Origin, no Role, no team colour, no tier mark, and no
     \`data-expression="cute"\` group. Mass = the heap, x 18..86 (68 wide),
     y 44..118 (74 tall), ratio 1.09. Slumped peak to y 36. Eye y 88 = 59% of
     the mass. Materials 2 / fills 5: ash B5AFA5 D4CEC4 8A847B * ember F2A02A
     D9541F. One crescent (8A847B, lower right), one gleam (D4CEC4, upper
     left). Tint lines, two: the ember still alive at the base. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="punch" data-unit="kul" style="--dur-atk:0.85s">

  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 96px">
    <path d="M30 96 L22 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 96 L22 100" stroke="#8A847B" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="102" r="9" fill="#B5AFA5" stroke="#2A2114" stroke-width="3"/>
    <path d="M14 97 L14 108" stroke="#8A847B" stroke-width="2.6" stroke-linecap="round"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#8A847B" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#B5AFA5" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#8A847B" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#B5AFA5" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The slumped peak first, so the heap covers where it joins. It hooks
         to the right and does not come back: a symmetric tip would read as a
         hat at board scale, and a heap of ash has never been tidy. -->
    <path d="M52 50 Q66 38 74 44 Q64 50 58 54" fill="#D4CEC4"
          stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The heap: fill, crescent, seams, gleam, then the ink over the lot. -->
    <path d="M52 44 C60 52 72 70 82 100 Q88 116 68 118 L36 118 Q16 116 22 100 C32 70 44 52 52 44 Z"
          fill="#B5AFA5"/>
    <path d="M82 100 Q88 116 68 118 L52 118 L52 112 L66 112 Q78 112 76 100 Z"
          fill="#8A847B"/>
    <path d="M28 114 L40 111 M64 112 L78 114" fill="none" stroke="#D9541F"
          stroke-width="2.6" stroke-linecap="round"/>
    <path d="M42 66 Q35 80 32 94" fill="none" stroke="#D4CEC4" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 44 C60 52 72 70 82 100 Q88 116 68 118 L36 118 Q16 116 22 100 C32 70 44 52 52 44 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 76 L44 78 M60 78 L72 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="88" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="88" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 101 Q52 106 60 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <path class="crack" d="M38 58 L50 72 L40 86 L52 100 L42 114"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:76px 96px">
    <path d="M76 96 L94 93" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M76 96 L94 93" stroke="#B5AFA5" stroke-width="12" stroke-linecap="round"/>
    <circle cx="103" cy="92" r="11" fill="#B5AFA5" stroke="#2A2114" stroke-width="3"/>
    <path d="M93 86 Q98 92 93 98" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M99 83 L99 101 M106 82 L106 102" stroke="#8A847B" stroke-width="3" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:117px 92px">
    <path d="M117 80 L133 72 M121 92 L139 92 M117 104 L133 112"
          stroke="#8A847B" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M117 80 L128 75 M121 92 L134 92 M117 104 L128 109"
          stroke="#D4CEC4" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="131" cy="82" r="2.6" fill="#B5AFA5"/>
    <circle cx="133" cy="102" r="2.4" fill="#D9541F"/>
  </g>
</svg>
`;export{e as default};
