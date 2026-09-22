const e=`<!-- Kor (Ember) · Burnt Oven · Spoil · melee, bare fist
     attackSpeed 0.95 -> round(20/0.95) = 21 ticks = 1.05 s

     Archetype \`throw\`, and it is the first body on disk to wear one. The
     track is an overhand arc: armF winds to -56 and comes over to +38, the
     widest reach of the seven. There is deliberately **no \`.ammo\` group** on
     this rig, so \`throw\`'s ammo row is skipped the way \`spray\`'s was on a
     bottle with nothing in its hand; at range 1 nothing leaves, and what is
     left is the one archetype that brings a fist down from above. That is
     the Ember: it does not swing sideways, it drops on you.

     \`WEAPON kor [114, 90]\` is the knuckle, the Brawler convention rather
     than the far end of a tool, because this body carries none.

     Silhouette: the smooth dome with a crown of flat flames. It is the only
     one of the five whose outline is a single unbroken curve, which is what
     tells it from the Soot's lumps at 0.42 px per unit. Fire is flat: three
     licks, three flat fills, no glow and no bloom (\`ENAMEL.md\`).

     No Origin, no Role, no team colour, no tier mark, and no
     \`data-expression="cute"\` group. Mass = the ember stone, x 20..84 (64
     wide), y 50..118 (68 tall), ratio 1.06. Crown (the flames) to y 18. Eye
     y 88 = 56% of the mass. Materials 2 / fills 6: char 454039 5E574E 322E29
     * ember F2A02A D9541F B02E1F. One crescent (322E29, lower right), one
     gleam (5E574E, upper left). Tint lines, two: the ember seams. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="throw" data-unit="kor" style="--dur-atk:1.05s">

  <ellipse class="shadow" cx="52" cy="137" rx="27" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:32px 94px">
    <path d="M32 94 L24 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M32 94 L24 100" stroke="#322E29" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="103" r="9" fill="#454039" stroke="#2A2114" stroke-width="3"/>
    <path d="M14 99 L14 108" stroke="#B02E1F" stroke-width="2.6" stroke-linecap="round"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 106 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 106 L41 124" stroke="#322E29" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#454039" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 106 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 106 L65 124" stroke="#322E29" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#454039" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The flame crown first, so the dome covers every base. Flat fills,
         lightest on the left because the light is top left. -->
    <path d="M40 54 Q32 38 42 20 Q46 36 52 30 Q58 44 50 54 Z"
          fill="#F2A02A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M50 54 Q48 34 60 18 Q62 34 68 28 Q74 44 64 54 Z"
          fill="#D9541F" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M62 54 Q64 40 74 32 Q78 44 72 54 Z"
          fill="#B02E1F" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The dome: fill, crescent, seams, gleam, then the ink over the lot. -->
    <path d="M52 50 C34 50 22 64 20 82 C18 100 30 118 52 118 C74 118 86 100 84 82 C82 64 70 50 52 50 Z"
          fill="#454039"/>
    <path d="M84 82 C86 100 74 118 52 118 L52 113 C70 113 81 99 79 82 C77 68 70 59 62 55 L68 51 C77 57 83 68 84 82 Z"
          fill="#322E29"/>
    <path d="M28 70 L40 78 L32 92 M64 106 L74 98" fill="none" stroke="#D9541F"
          stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M30 64 Q26 72 26 80" fill="none" stroke="#5E574E" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 50 C34 50 22 64 20 82 C18 100 30 118 52 118 C74 118 86 100 84 82 C82 64 70 50 52 50 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 74 L44 80 M60 80 L72 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="88" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="88" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 103 Q52 98 60 103" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <path class="crack" d="M36 60 L48 74 L38 88 L50 102 L40 114"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:74px 94px">
    <path d="M74 94 L92 91" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M74 94 L92 91" stroke="#454039" stroke-width="12" stroke-linecap="round"/>
    <circle cx="102" cy="90" r="11" fill="#454039" stroke="#2A2114" stroke-width="3"/>
    <path d="M92 84 Q97 90 92 96" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M98 81 L98 99 M105 80 L105 100" stroke="#B02E1F" stroke-width="3" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:116px 90px">
    <path d="M116 78 L132 70 M120 90 L138 90 M116 102 L132 110"
          stroke="#D9541F" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M116 78 L127 73 M120 90 L133 90 M116 102 L127 107"
          stroke="#F2A02A" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="130" cy="80" r="2.6" fill="#B02E1F"/>
    <circle cx="132" cy="100" r="2.4" fill="#F2A02A"/>
  </g>
</svg>
`;export{e as default};
