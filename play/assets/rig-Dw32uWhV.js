const e=`<!-- Capak (Burr) - Rusted Cupboard - Spoil - melee, a second burr held
     attackSpeed 1.05 -> round(20/1.05) = 19 ticks = 0.95 s

     Archetype \`stab\`: the roster's most-worn archetype and the right one for a
     point. The arm draws back and drives straight out, which is what a
     splinter of cut metal does and what the two \`punch\` bodies above it do
     not.

     \`WEAPON capak [116, 86]\` is the held burr's outer point, level at rest.

     Silhouette: the shard. A narrow leaning wedge, notched twice down the near
     side, with three barbs breaking the outline - one of them off the far
     side, so the body is not symmetric at any height. Nothing else in the
     Cupboard has a barb, and nothing else on the roster leans.

     Mass x 8..96, y 36..118 (the barbs are the wide reading; the shard itself
     is x 24..82). Materials 2 / fills 4: steel 4A4A44 8E9088 C4C6BC * rust
     B0582C, one mark. Brass eye F2C46A. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="capak" style="--dur-atk:0.95s">

  <ellipse class="shadow" cx="52" cy="137" rx="24" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 94px">
    <path d="M30 94 L22 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 94 L22 100" stroke="#4A4A44" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="103" r="6.5" fill="#8E9088" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#4A4A44" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#8E9088" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#4A4A44" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#8E9088" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- Three barbs off the near edge, before the shard, so it covers their
         roots. They are the only thing on this body that leaves the outline. -->
    <path d="M78 66 L92 58 L80 74 Z" fill="#C4C6BC" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M82 88 L96 86 L82 96 Z" fill="#8E9088" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M24 70 L10 62 L26 78 Z" fill="#8E9088" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The shard: fill, crescent, facet lines, gleam, then the ink. -->
    <path d="M48 36 L64 44 L72 70 L82 86 L70 98 L78 118 L30 118 L24 94 L34 78 L28 56 Z" fill="#8E9088"/>
    <path d="M70 98 L78 118 L52 118 L52 112 L68 112 Z" fill="#4A4A44"/>
    <path d="M52 44 L60 72 L52 96" fill="none" stroke="#4A4A44" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M36 58 L32 78 L38 96" fill="none" stroke="#C4C6BC" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M62 104 L70 106" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M48 36 L64 44 L72 70 L82 86 L70 98 L78 118 L30 118 L24 94 L34 78 L28 56 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 76 L46 78 M58 78 L70 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="88" rx="5.8" ry="6.67" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="88" rx="5.8" ry="6.67" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="89" rx="3.16" ry="4.22" fill="#2A2114"/>
    <ellipse cx="64.4" cy="89" rx="3.16" ry="4.22" fill="#2A2114"/>
    <circle cx="40" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 100 L58 100" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 52 L50 66 L40 80 L52 94 L42 110"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:76px 94px">
    <path d="M76 94 L92 90" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>
    <path d="M76 94 L92 90" stroke="#8E9088" stroke-width="9" stroke-linecap="round"/>
    <!-- A second burr, held. Its point is the aim. -->
    <path d="M94 84 L116 86 L100 96 L94 94 Z"
          fill="#C4C6BC" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="fx" style="transform-origin:119px 88px">
    <path d="M119 76 L137 66 M123 88 L141 88 M119 100 L137 110"
          stroke="#8E9088" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M119 76 L131 71 M123 88 L135 88 M119 100 L131 105"
          stroke="#C4C6BC" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="135" cy="70" r="2.6" fill="#8E9088"/>
    <circle cx="137" cy="104" r="2.4" fill="#C4C6BC"/>
  </g>
</svg>
`;export{e as default};
