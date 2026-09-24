const t=`<!-- Civi (Nail) - Rusted Cupboard - Spoil - melee, a loose nail driven
     attackSpeed 1.10 -> round(20/1.10) = 18 ticks = 0.90 s

     Archetype \`stab\`. The arm draws back and drives straight out, which is the
     one motion a nail has.

     \`WEAPON civi [119, 84]\` is the held nail's head - the far end of what it
     is drawn holding, and this body drives rather than cuts, so the head is
     what arrives.

     Silhouette: the wedge under the plate. A wide flat disc across the top and
     a mass that narrows all the way to the floor - the only Cupboard body that
     is widest at its crown, and the exact inverse of the Rust's waist and the
     Scale's stepped base. At 53 px it reads as a T, which nothing else on the
     board does.

     Mass x 18..86, y 44..118. Materials 2 / fills 4: iron 43403A 86807A
     B9B2A8 * rust B0582C, one run. Brass eye F2C46A. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="civi" style="--dur-atk:0.90s">

  <ellipse class="shadow" cx="52" cy="137" rx="22" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 86px">
    <path d="M30 86 L22 92" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 86 L22 92" stroke="#43403A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="95" r="6.5" fill="#86807A" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#43403A" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#86807A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#43403A" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#86807A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The head: a wide flat disc, struck flat and turned over at one edge. -->
    <path d="M18 44 L86 44 L82 60 L22 60 Z" fill="#B9B2A8" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M78 44 L86 44 L82 60 L74 60 Z" fill="#43403A"/>
    <path d="M24 50 L44 50" fill="none" stroke="#86807A" stroke-width="3" stroke-linecap="round"/>

    <!-- The shank: fill, crescent, facet, gleam, then the ink. -->
    <path d="M28 58 L76 58 L66 118 L38 118 Z" fill="#86807A"/>
    <path d="M76 58 L66 118 L52 118 L52 112 L62 112 L70 58 Z" fill="#43403A"/>
    <path d="M52 64 L52 110" fill="none" stroke="#43403A" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M36 68 L34 90" fill="none" stroke="#B9B2A8" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M60 96 Q64 104 60 112" fill="none" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M28 58 L76 58 L66 118 L38 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 68 L46 70 M58 70 L70 68" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="80" rx="5.8" ry="6.67" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="80" rx="5.8" ry="6.67" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="81" rx="3.16" ry="4.22" fill="#2A2114"/>
    <ellipse cx="64.4" cy="81" rx="3.16" ry="4.22" fill="#2A2114"/>
    <circle cx="40" cy="77.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="77.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 94 Q52 98 58 94" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 64 L50 78 L40 92 L52 106 L42 122"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:72px 86px">
    <path d="M72 86 L88 84" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>
    <path d="M72 86 L88 84" stroke="#86807A" stroke-width="9" stroke-linecap="round"/>
    <!-- A loose nail, held point-out. The head is the far end, so the head is
         the aim: this body drives rather than cuts. -->
    <path d="M92 80 L112 82 L112 86 L92 88 Z" fill="#B9B2A8" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M112 78 L119 79 L119 89 L112 90 Z" fill="#86807A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="fx" style="transform-origin:119px 84px">
    <path d="M119 72 L137 62 M123 84 L141 84 M119 96 L137 106"
          stroke="#86807A" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M119 72 L131 67 M123 84 L135 84 M119 96 L131 101"
          stroke="#B9B2A8" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="135" cy="66" r="2.6" fill="#86807A"/>
    <circle cx="137" cy="100" r="2.4" fill="#B9B2A8"/>
  </g>
</svg>
`;export{t as default};
