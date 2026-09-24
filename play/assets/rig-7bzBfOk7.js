const e=`<!-- Tirtil (Caterpillar) - Crawling Crate - Spoil - melee, head capsule
     attackSpeed 0.85 -> round(20/0.85) = 24 ticks = 1.20 s

     A long horizontal tube of equal segments with a row of tufts along the
     top and the head low and forward. Held horizontal rather than reared
     up, which is the whole point of the silhouette: the Grub in the cost 2
     band is the same soft material stood vertically, and one horizontal
     body against one vertical body is a difference a player reads instantly
     even though the two share a palette and a texture.

     Archetype \`punch\`. Both halves of the head work in turn, which is
     \`punch\`'s two-armed reading and the same argument the Grub's header
     makes - a chewing body does not wind up, it alternates.

     \`WEAPON tirtil [114, 96]\` is the bite, low and forward.

     Green enters the family here for the first time, as the tufts only:
     5E7A34 over the chitin. It is the bridge to the two vegetable bosses,
     who are the only bodies drawn green throughout.

     Mass = the tube, x 18..86 (68 wide), y 62..118 (56 tall), ratio 0.82.
     Eye y 86 = 43% of the mass. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="punch" data-unit="tirtil" style="--dur-atk:1.20s">

  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#241A10" opacity=".32"/>

  <g class="armB" style="transform-origin:28px 94px">
    <path d="M28 94 L17 101" stroke="#241A10" stroke-width="12" stroke-linecap="round"/>
    <path d="M28 94 L17 101" stroke="#8F6A3E" stroke-width="8" stroke-linecap="round"/>
    <circle cx="15" cy="102" r="6.5" fill="#B8A377" stroke="#241A10" stroke-width="3"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 112 L40 124" stroke="#241A10" stroke-width="13" stroke-linecap="round"/>
    <path d="M44 112 L40 124" stroke="#8F6A3E" stroke-width="9" stroke-linecap="round"/>
    <path d="M31 126 Q28 130 31 134 L43 134 Q45 129 42 125 Z"
          fill="#B8A377" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 112 L66 124" stroke="#241A10" stroke-width="13" stroke-linecap="round"/>
    <path d="M62 112 L66 124" stroke="#8F6A3E" stroke-width="9" stroke-linecap="round"/>
    <path d="M63 125 Q60 129 63 134 L75 134 Q77 130 74 126 Z"
          fill="#B8A377" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The tufts, drawn first so the tube covers their roots. Five, at
         three different heights, leaning back. An even comb reads as a
         crest and that belongs to nothing in this family. -->
    <path d="M28 76 L22 64 M40 70 L36 56 M54 68 L52 54 M68 71 L70 58 M79 78 L84 68"
          stroke="#241A10" stroke-width="5" stroke-linecap="round"/>
    <path d="M28 76 L23 66 M40 70 L36.6 58 M54 68 L52.4 56 M68 71 L69.4 60 M79 78 L83 70"
          stroke="#5E7A34" stroke-width="2.6" stroke-linecap="round"/>

    <!-- The tube: fill, crescent, gleam, ink. -->
    <path d="M32 74 Q52 68 72 74 Q86 80 86 92 Q86 108 70 114 Q52 119 34 114 Q18 108 18 92 Q18 80 32 74 Z"
          fill="#8F6A3E"/>
    <path d="M86 92 Q86 108 70 114 Q58 118 50 117 L50 111 Q68 110 76 101 Q82 96 81 90 Z"
          fill="#6B4A2A"/>
    <path d="M30 82 Q25 89 25 96" fill="none" stroke="#B8A377" stroke-width="5" stroke-linecap="round"/>
    <path d="M32 74 Q52 68 72 74 Q86 80 86 92 Q86 108 70 114 Q52 119 34 114 Q18 108 18 92 Q18 80 32 74 Z"
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>

    <!-- Segment seams, four, uneven and in ink because on this body the
         segmentation is the texture rather than a shading note. -->
    <path d="M30 79 Q28 94 32 111" fill="none" stroke="#241A10" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M45 71 Q43 94 46 117" fill="none" stroke="#241A10" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M60 70 Q59 94 61 116" fill="none" stroke="#241A10" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M74 75 Q75 94 73 113" fill="none" stroke="#241A10" stroke-width="2.8" stroke-linecap="round"/>

    <!-- The head capsule, forward and low, darker than the body. -->
    <ellipse cx="76" cy="94" rx="15" ry="16" fill="#6B4A2A" stroke="#241A10" stroke-width="3.6"/>

    <path d="M64 86 L71 90 M81 90 L88 86" stroke="#241A10" stroke-width="3" stroke-linecap="round"/>
    <ellipse cx="69" cy="96" rx="5.4" ry="6.4" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>
    <ellipse cx="83" cy="96" rx="5.4" ry="6.4" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>
    <ellipse cx="70" cy="97" rx="2.9" ry="4" fill="#241A10"/>
    <ellipse cx="84" cy="97" rx="2.9" ry="4" fill="#241A10"/>
    <circle cx="68" cy="93.8" r="1.4" fill="#FFFFFF"/>
    <circle cx="82" cy="93.8" r="1.4" fill="#FFFFFF"/>

    <path class="crack" d="M28 80 L42 92 L30 102 L44 112 L34 118"
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- The forward half of the bite. Bare, per the roster's rule for bodies
       that fight with what they are made of, with a chitin cuff at 100 so
       it does not read as unfinished. -->
  <g class="armF" style="transform-origin:84px 98px">
    <path d="M84 98 L98 100" stroke="#241A10" stroke-width="12" stroke-linecap="round"/>
    <path d="M84 98 L98 100" stroke="#8F6A3E" stroke-width="8" stroke-linecap="round"/>
    <path d="M95 94 L99 105" stroke="#6B4A2A" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="103" cy="98" r="9" fill="#6B4A2A" stroke="#241A10" stroke-width="3.4"/>
    <path d="M109 94 L112 98 L109 102" fill="none" stroke="#241A10" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/>
  </g>

  <g class="fx" style="transform-origin:114px 98px">
    <path d="M114 88 L130 82 M115 99 L133 99 M114 108 L130 114"
          stroke="#B8A377" stroke-width="4.6" stroke-linecap="round" opacity=".9"/>
    <circle cx="128" cy="92" r="2.6" fill="#5E7A34"/>
  </g>
</svg>
`;export{e as default};
