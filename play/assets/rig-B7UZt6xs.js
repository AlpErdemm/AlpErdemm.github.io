const e=`<!-- Cüruf (Clinker) · Burnt Oven · Spoil · melee, fused slag slab
     attackSpeed 0.80 -> round(20/0.80) = 25 ticks = 1.25 s

     Archetype \`swing\`: armF winds to -42, comes across to +56 and pushes 10
     forward through contact. The slab rests at 57 degrees above horizontal,
     inside the roster's 58..78 band, so the aim's correction brings it down
     level with a body one row lower instead of folding it back over the
     shoulder.

     \`WEAPON curuf [118, 50]\` is the slab's far corner.

     Silhouette: the spire. It is the tallest of the five and the only one
     that comes to a point, which is the read a 5-cost body wants from across
     the board: the thing at the back that is bigger than the rest. The ember
     seams run through the slag rather than sitting on it, because a clinker
     is what set while it was still hot.

     No Origin, no Role, no team colour, no tier mark, and no
     \`data-expression="cute"\` group. Mass = the slag spire, x 22..80 (58
     wide), y 40..118 (78 tall), ratio 1.34, a shade over §6's 1.3 and spent
     on purpose: the peak is the whole silhouette. Eye y 90 = 64% of the
     mass. Materials 2 / fills 6: char 454039 5E574E 322E29 * ember F2A02A
     D9541F B02E1F. One crescent (322E29, lower right), one lit facet
     (5E574E, upper left). Tint lines, three: the seams. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="swing" data-unit="curuf" style="--dur-atk:1.25s">

  <ellipse class="shadow" cx="52" cy="137" rx="25" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:32px 96px">
    <path d="M32 96 L24 104" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M32 96 L24 104" stroke="#322E29" stroke-width="8" stroke-linecap="round"/>
    <circle cx="21" cy="107" r="7" fill="#454039" stroke="#2A2114" stroke-width="3"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#322E29" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#454039" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#322E29" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#454039" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The spire: fill, lit facet, crescent, seams, then the ink over the
         lot. The peak at (52, 40) is the top of the whole figure. -->
    <path d="M52 40 L62 58 L74 62 L80 80 L78 100 L66 116 L46 118 L30 112 L22 94 L28 74 L40 62 Z"
          fill="#454039"/>
    <path d="M52 40 L40 62 L28 74 L36 80 L48 60 Z" fill="#5E574E"/>
    <path d="M80 80 L78 100 L66 116 L52 117 L52 111 L63 110 L72 98 L74 80 Z" fill="#322E29"/>
    <path d="M36 72 L48 82 L40 96 M60 104 L72 94 M58 62 L66 72"
          fill="none" stroke="#D9541F" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M52 40 L62 58 L74 62 L80 80 L78 100 L66 116 L46 118 L30 112 L22 94 L28 74 L40 62 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M33 76 L45 82 M59 82 L71 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="90" rx="6.6" ry="7.6" fill="#B02E1F" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="90" rx="6.6" ry="7.6" fill="#B02E1F" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="91" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="91" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="87.4" r="1.6" fill="#F2A02A"/>
    <circle cx="64" cy="87.4" r="1.6" fill="#F2A02A"/>
    <path d="M44 105 Q52 100 60 105" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <path class="crack" d="M36 56 L48 72 L38 88 L50 102 L40 114"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Front arm and the slab as one part. -->
  <g class="armF" style="transform-origin:74px 96px">
    <path d="M74 96 L88 89" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M74 96 L88 89" stroke="#322E29" stroke-width="10" stroke-linecap="round"/>
    <circle cx="90" cy="88" r="7" fill="#454039" stroke="#2A2114" stroke-width="3"/>
    <path d="M90 88 L104 66" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M90 88 L104 66" stroke="#5E574E" stroke-width="5" stroke-linecap="round"/>
    <path d="M98 66 L110 44 L120 52 L108 74 Z"
          fill="#454039" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M104 54 L114 60" stroke="#D9541F" stroke-width="2.6" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:116px 56px">
    <path d="M114 44 L134 36 M118 58 L140 58 M114 72 L134 82"
          stroke="#B02E1F" stroke-width="6" stroke-linecap="round" opacity=".9"/>
    <path d="M114 44 L127 39 M118 58 L134 58 M114 72 L127 78"
          stroke="#F2A02A" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="132" cy="48" r="3" fill="#D9541F"/>
    <circle cx="134" cy="70" r="2.6" fill="#5E574E"/>
  </g>
</svg>
`;export{e as default};
