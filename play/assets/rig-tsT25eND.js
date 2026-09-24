const t=`<!-- Teneke (Tin) - Rusted Cupboard - Spoil - melee, a torn strip of itself
     attackSpeed 1.14 -> round(20/1.14) = 18 ticks = 0.90 s

     Archetype \`punch\`, shared with Pas above: the cheap end of the family
     trades blows, and the strip it holds is drawn into the front fist rather
     than swung, so the two read as one class at a glance and are told apart by
     the outline alone.

     Carries \`paslanma\`, the family's first verb: whoever strikes it takes a
     bite of rust back. That is why the rust run is drawn down the near face -
     the card says it, and the body has to as well.

     \`WEAPON teneke [113, 91]\` is the torn lip of the strip.

     Silhouette: the crushed can. A cylinder pinched to an hourglass at the
     waist, with a lip torn into teeth across the top. Straight sides and a
     serrated crown are what tell it from the Rust's blotch beside it, and the
     pinch is what tells it from the Swollen Can, which bulges the other way.

     Mass x 24..80, y 36..118. Materials 2 / fills 4: tin 5D554A 9A9289 C9C0B2
     * rust B0582C, one run. Brass eye F2C46A. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="punch" data-unit="teneke" style="--dur-atk:0.90s">

  <ellipse class="shadow" cx="52" cy="137" rx="26" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 94px">
    <path d="M30 94 L22 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 94 L22 100" stroke="#5D554A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="103" r="6.5" fill="#9A9289" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#5D554A" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#9A9289" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#5D554A" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#9A9289" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The torn lip first, so the can covers where it is cut. -->
    <path d="M28 46 L36 38 L44 46 L52 36 L60 46 L68 38 L76 46 L76 56 L28 56 Z"
          fill="#C9C0B2" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The can: fill, crescent, seams, rust run, gleam, then the ink. -->
    <path d="M28 52 L76 52 L78 76 L62 84 L78 92 L76 118 L28 118 L26 92 L42 84 L26 76 Z" fill="#9A9289"/>
    <path d="M78 92 L76 118 L52 118 L52 112 L70 112 L72 94 Z" fill="#5D554A"/>
    <path d="M30 62 L74 62 M30 106 L74 106" fill="none" stroke="#5D554A" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M68 60 Q72 74 68 88 Q66 102 70 114" fill="none" stroke="#B0582C" stroke-width="3.4" stroke-linecap="round"/>
    <path d="M34 66 Q31 76 34 86" fill="none" stroke="#C9C0B2" stroke-width="5" stroke-linecap="round"/>
    <path d="M28 52 L76 52 L78 76 L62 84 L78 92 L76 118 L28 118 L26 92 L42 84 L26 76 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 88 L44 90 M60 90 L72 88" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="100" rx="5.8" ry="6.67" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="100" rx="5.8" ry="6.67" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="101" rx="3.16" ry="4.22" fill="#2A2114"/>
    <ellipse cx="66.4" cy="101" rx="3.16" ry="4.22" fill="#2A2114"/>
    <circle cx="38" cy="97.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="97.4" r="1.6" fill="#FFFFFF"/>
    <path d="M45 112 Q52 116 59 112" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 58 L50 72 L40 86 L52 100 L42 116"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:78px 94px">
    <path d="M78 94 L94 92" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M78 94 L94 92" stroke="#9A9289" stroke-width="10" stroke-linecap="round"/>
    <!-- A torn strip of its own tin, held out like a blade. -->
    <path d="M96 84 L113 88 L110 94 L113 100 L96 100 Z"
          fill="#C9C0B2" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M100 90 L108 91" stroke="#B0582C" stroke-width="2.4" stroke-linecap="round"/>
  </g>
  <g class="fx" style="transform-origin:117px 92px">
    <path d="M117 80 L135 70 M121 92 L139 92 M117 104 L135 114"
          stroke="#9A9289" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M117 80 L129 75 M121 92 L133 92 M117 104 L129 109"
          stroke="#C9C0B2" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="133" cy="74" r="2.6" fill="#9A9289"/>
    <circle cx="135" cy="108" r="2.4" fill="#C9C0B2"/>
  </g>
</svg>
`;export{t as default};
