const e=`<!-- Bit (Aphid) - Crawling Crate - Spoil - melee, proboscis
     attackSpeed 1.20 -> round(20/1.20) = 17 ticks = 0.85 s

     The family's quantity floor, so this is the smallest mass on the board
     and it is drawn to be exactly that: a pear the size of a thumbnail on
     two long spring legs, with nothing above the shoulders but a beak. At
     0.42 px per unit a player reads it as "the little one" before they read
     anything else, which is the only job a cost 2 swarm body has.

     Archetype \`stab\`. The proboscis retracts and drives forward; \`WEAPON bit
     [112, 84]\` is its tip, so \`setAim\` can put it into a body a row below.

     The Crawling Crate palette, and it owes nothing to the Burnt Oven's
     char and ember: chitin 6B4A2A 8F6A3E 4A311B, pale D9C89A B8A377, and
     the family's accent A8C43A on the eye - an acid green where Region 1
     put ember orange. One crescent (4A311B, lower right), one gleam
     (B8A377, upper left). Ink 241A10 throughout.

     No Origin, no Role and no team colour, and no \`data-expression="cute"\`
     group: the body stands on the far side of the counter and placement
     should not soften it. The Burnt Oven's twelve set that precedent.

     Mass = the pear, x 30..76 (46 wide), y 56..112 (56 tall), ratio 1.22.
     Eye y 78 = 39% of the mass, high on purpose - a small head reads as
     young, and this is the body the player is meant to underestimate. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="bit" style="--dur-atk:0.85s">

  <ellipse class="shadow" cx="52" cy="137" rx="21" ry="5" fill="#241A10" opacity=".32"/>

  <g class="armB" style="transform-origin:34px 84px">
    <path d="M34 84 L24 92" stroke="#241A10" stroke-width="9" stroke-linecap="round"/>
    <path d="M34 84 L24 92" stroke="#4A311B" stroke-width="5.5" stroke-linecap="round"/>
  </g>

  <!-- The long back legs. A spring aphid stands on them and this silhouette
       is most of what tells the body from the Mite's fringed disc: one is
       legs plus a beak, the other is neither. Soles land at 134 so the pen
       allowance keeps the ink inside the band. -->
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 104 L38 122" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>
    <path d="M44 104 L38 122" stroke="#4A311B" stroke-width="6" stroke-linecap="round"/>
    <path d="M30 124 Q27 129 30 134 L42 134 Q44 128 41 123 Z"
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 104 L68 122" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>
    <path d="M62 104 L68 122" stroke="#4A311B" stroke-width="6" stroke-linecap="round"/>
    <path d="M64 123 Q61 128 64 134 L76 134 Q78 129 75 124 Z"
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- Two cornicles off the rear, the aphid's own tell. Different lengths
         and both left of centre, because a symmetric pair at this size reads
         as ears. -->
    <path d="M34 62 L26 52" stroke="#241A10" stroke-width="6" stroke-linecap="round"/>
    <path d="M34 62 L26 52" stroke="#8F6A3E" stroke-width="3" stroke-linecap="round"/>
    <path d="M40 58 L36 46" stroke="#241A10" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 58 L36 46" stroke="#8F6A3E" stroke-width="2.4" stroke-linecap="round"/>

    <!-- The pear: fill, crescent, gleam, then the ink outline over the lot. -->
    <path d="M53 56 Q68 58 73 72 Q78 88 70 100 Q62 112 52 111 Q41 112 34 100 Q27 88 32 72 Q38 58 53 56 Z"
          fill="#8F6A3E"/>
    <path d="M73 72 Q78 88 70 100 Q62 112 52 111 L52 105 Q62 106 67 97 Q72 86 68 74 Z"
          fill="#4A311B"/>
    <path d="M39 68 Q35 76 35 84" fill="none" stroke="#B8A377" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M53 56 Q68 58 73 72 Q78 88 70 100 Q62 112 52 111 Q41 112 34 100 Q27 88 32 72 Q38 58 53 56 Z"
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>

    <!-- The face. Angry brows, inner end down 5. Eye fill is the family's
         acid green, the one place the palette is allowed onto the face. -->
    <path d="M36 66 L46 71 M58 71 L68 66" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>
    <ellipse cx="42" cy="78" rx="6" ry="7" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>
    <ellipse cx="62" cy="78" rx="6" ry="7" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>
    <ellipse cx="43.2" cy="79" rx="3.2" ry="4.4" fill="#241A10"/>
    <ellipse cx="63.2" cy="79" rx="3.2" ry="4.4" fill="#241A10"/>
    <circle cx="41" cy="75.6" r="1.5" fill="#FFFFFF"/>
    <circle cx="61" cy="75.6" r="1.5" fill="#FFFFFF"/>

    <path class="crack" d="M38 62 L48 76 L38 88 L50 100 L40 110"
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Front limb and the proboscis as one part, so a single rotation carries
       the whole thrust. It rests at 24 degrees below horizontal rather than
       up in the roster's 58..78 band, because a sucking mouthpart points at
       what it is draining and an aphid's is the only weapon here that never
       leaves the body it is in. -->
  <g class="armF" style="transform-origin:68px 84px">
    <path d="M68 84 L80 88" stroke="#241A10" stroke-width="9" stroke-linecap="round"/>
    <path d="M68 84 L80 88" stroke="#4A311B" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M80 87 L110 84" stroke="#241A10" stroke-width="7" stroke-linecap="round"/>
    <path d="M80 87 L108 84.4" stroke="#B8A377" stroke-width="3.4" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:112px 84px">
    <path d="M112 84 L128 78 M112 86 L130 88 M112 88 L126 96"
          stroke="#B8A377" stroke-width="4" stroke-linecap="round" opacity=".9"/>
    <circle cx="126" cy="82" r="2.4" fill="#A8C43A"/>
  </g>
</svg>
`;export{e as default};
