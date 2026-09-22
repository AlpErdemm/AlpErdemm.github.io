const e=`<!-- Mildiyo (Mildew) . Damp Cellar . Spoil . melee, a fringe driven forward
     attackSpeed 0.83 > round(20/0.83) = 24 ticks = 1.20 s

     Archetype \`stab\`, the Seep's: the arm draws back and drives forward.

     \`WEAPON mildiyo [117, 85]\` is the leading front of the bloom.

     Silhouette: the veil. A tall soft mass whose outline is one continuous
     fine scallop the whole way round, with no straight run anywhere and the
     same treatment on every side . the only body in the game finished that
     way. The Moss breaks upward along its crown only; this breaks everywhere.

     Mass x 16..90, y 30..118. Materials 2 / fills 4: mildew 5A5264 968CA0
     D8D0DE * brass eye F2C46A. Two bloom rings, one gleam (upper left), one
     crescent (lower right). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="mildiyo" style="--dur-atk:1.20s">

  <ellipse class="shadow" cx="52" cy="137" rx="28" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 93px">
    <path d="M30 93 L22 99" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 93 L22 99" stroke="#5A5264" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="102" r="6.5" fill="#968CA0" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#5A5264" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#968CA0" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#5A5264" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#968CA0" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The veil: fill, crescent, the bloom rings, a gleam, then the ink.
         Scalloped on all four sides at one pitch, so no edge of it is a line. -->
    <path d="M24 44 Q34 32 44 40 Q52 28 60 40 Q70 32 80 44 Q88 54 82 64 Q90 74 82 84 Q90 96 82 106 Q88 116 76 118 Q64 112 52 118 Q40 112 28 118 Q16 116 22 106 Q14 96 22 84 Q14 74 22 64 Q16 54 24 44 Z" fill="#968CA0"/>
    <path d="M82 84 Q90 96 82 106 Q88 116 76 118 Q64 112 52 118 L52 112 Q64 106 76 112 Q82 110 78 104 Q84 94 78 86 Z" fill="#5A5264"/>
    <path d="M34 60 Q52 68 70 60 M34 96 Q52 104 70 96" fill="none" stroke="#5A5264" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M30 54 Q26 66 30 78" fill="none" stroke="#D8D0DE" stroke-width="5" stroke-linecap="round"/>
    <path d="M24 44 Q34 32 44 40 Q52 28 60 40 Q70 32 80 44 Q88 54 82 64 Q90 74 82 84 Q90 96 82 106 Q88 116 76 118 Q64 112 52 118 Q40 112 28 118 Q16 116 22 106 Q14 96 22 84 Q14 74 22 64 Q16 54 24 44 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 72 L46 74 M58 74 L70 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="84" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="84" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="85" rx="3.05" ry="4.07" fill="#2A2114"/>
    <ellipse cx="64.4" cy="85" rx="3.05" ry="4.07" fill="#2A2114"/>
    <circle cx="40" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 97 Q52 101 58 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 56 L50 70 L40 84 L52 98 L42 114"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:77px 93px">
    <path d="M77 93 L93 89" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M77 93 L93 89" stroke="#968CA0" stroke-width="12" stroke-linecap="round"/>
    <!-- A second front of the bloom, driven out ahead of the mass. Its tip is the aim. -->
    <path d="M117 85 Q101 79 95 87 Q101 95 117 89 Z"
          fill="#D8D0DE" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="fx" style="transform-origin:120px 87px">
    <path d="M120 75 L138 65 M124 87 L142 87 M120 99 L138 109"
          stroke="#968CA0" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M120 75 L132 70 M124 87 L136 87 M120 99 L132 104"
          stroke="#D8D0DE" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="136" cy="69" r="2.6" fill="#968CA0"/>
    <circle cx="138" cy="103" r="2.4" fill="#D8D0DE"/>
  </g>
</svg>
`;export{e as default};
