const t=`<!-- Kurtcuk (Grub) - Crawling Crate - Spoil - melee, mouthparts
     attackSpeed 1.05 -> round(20/1.05) = 19 ticks = 0.95 s

     A pale C-curved larva stood on end, segmented the whole way down, with
     a dark head capsule and no legs worth the name - the two stumps below
     are prolegs and are drawn short deliberately. Against the Aphid's pear
     and the Mite's fringed disc this is the tall soft one, which is the
     third distinct outline in a single price band.

     Archetype \`punch\`: both ends of the mouth work, and \`punch\` is the one
     archetype where \`.armB\` throws its own blow at 58% rather than
     counter-swinging. That is the right reading for a grub, which does not
     wind up and strike, it chews with two halves in turn.

     \`WEAPON kurtcuk [113, 92]\` is the mouthparts at full reach.

     This body carries the family's first skill, Kemirme, and the rig says
     so with nothing but the head: the capsule is the darkest shape on the
     body and the only hard thing on it, because the verb is armour coming
     off and the thing taking it off has to look capable of that.

     Mass = the curve, x 26..78 (52 wide), y 40..118 (78 tall), ratio 1.50 -
     the tallest-for-its-width body of the twelve. Eye y 62 = 28% of the
     mass, because the head is the top of a body that is mostly abdomen. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="punch" data-unit="kurtcuk" style="--dur-atk:0.95s">

  <ellipse class="shadow" cx="52" cy="137" rx="22" ry="5.5" fill="#241A10" opacity=".32"/>

  <g class="armB" style="transform-origin:32px 82px">
    <path d="M32 82 L22 88" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>
    <path d="M32 82 L22 88" stroke="#B8A377" stroke-width="7" stroke-linecap="round"/>
    <circle cx="20" cy="89" r="6" fill="#D9C89A" stroke="#241A10" stroke-width="3"/>
  </g>

  <!-- Prolegs, not legs: short, blunt and soft-ended, so the silhouette
       keeps sitting on the ground rather than standing over it. -->
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 112 L40 124" stroke="#241A10" stroke-width="13" stroke-linecap="round"/>
    <path d="M44 112 L40 124" stroke="#B8A377" stroke-width="9" stroke-linecap="round"/>
    <path d="M31 126 Q28 130 31 134 L43 134 Q45 129 42 125 Z"
          fill="#D9C89A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 112 L66 124" stroke="#241A10" stroke-width="13" stroke-linecap="round"/>
    <path d="M62 112 L66 124" stroke="#B8A377" stroke-width="9" stroke-linecap="round"/>
    <path d="M63 125 Q60 129 63 134 L75 134 Q77 130 74 126 Z"
          fill="#D9C89A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The grub: fill, crescent, gleam, ink. The curve leans right, which
         is the direction the rig faces, so the body reads as reaching. -->
    <path d="M52 40 Q70 42 74 58 Q77 74 68 84 Q76 96 72 108 Q66 118 52 117 Q37 118 31 108 Q26 96 34 84 Q26 72 30 56 Q35 41 52 40 Z"
          fill="#D9C89A"/>
    <path d="M72 108 Q66 118 52 117 L52 111 Q64 112 68 102 Q70 94 66 88 L70 84 Q77 96 72 108 Z"
          fill="#B8A377"/>
    <path d="M38 52 Q33 60 33 68" fill="none" stroke="#EFE3C0" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 40 Q70 42 74 58 Q77 74 68 84 Q76 96 72 108 Q66 118 52 117 Q37 118 31 108 Q26 96 34 84 Q26 72 30 56 Q35 41 52 40 Z"
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>

    <!-- Segment rings, five of them and unevenly spaced: an even ladder
         reads as a spring. Tint lines only, no ink. -->
    <path d="M32 72 Q52 78 73 71" fill="none" stroke="#B8A377" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M34 86 Q52 92 70 85" fill="none" stroke="#B8A377" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M31 98 Q52 104 72 97" fill="none" stroke="#B8A377" stroke-width="3.2" stroke-linecap="round"/>
    <path d="M32 109 Q52 114 71 108" fill="none" stroke="#B8A377" stroke-width="3.2" stroke-linecap="round"/>

    <!-- The head capsule: the hardest, darkest shape on a soft body, and
         the rig's whole statement about the skill it carries. -->
    <path d="M52 42 Q68 44 70 56 Q71 66 60 69 Q52 71 44 69 Q33 66 34 56 Q36 44 52 42 Z"
          fill="#6B4A2A" stroke="#241A10" stroke-width="3.6" stroke-linejoin="round"/>

    <path d="M38 50 L47 55 M57 55 L66 50" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>
    <ellipse cx="43" cy="62" rx="5.8" ry="6.8" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>
    <ellipse cx="61" cy="62" rx="5.8" ry="6.8" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>
    <ellipse cx="44.2" cy="63" rx="3.1" ry="4.3" fill="#241A10"/>
    <ellipse cx="62.2" cy="63" rx="3.1" ry="4.3" fill="#241A10"/>
    <circle cx="42" cy="59.8" r="1.5" fill="#FFFFFF"/>
    <circle cx="60" cy="59.8" r="1.5" fill="#FFFFFF"/>

    <path class="crack" d="M36 60 L48 74 L36 86 L48 100 L38 114"
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Front half of the mouth. A \`punch\` rig carries no weapon by the
       roster's own rule for bare-handed bodies; here the mouthparts are the
       hands, and the wristband that keeps a bare limb from reading as
       unfinished is the chitin cuff at 86. -->
  <g class="armF" style="transform-origin:72px 82px">
    <path d="M72 82 L86 86" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>
    <path d="M72 82 L86 86" stroke="#B8A377" stroke-width="7" stroke-linecap="round"/>
    <path d="M83 82 L89 90" stroke="#6B4A2A" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M88 82 Q102 84 104 92 Q100 99 90 96 Q84 92 88 82 Z"
          fill="#6B4A2A" stroke="#241A10" stroke-width="3.4" stroke-linejoin="round"/>
    <path d="M100 86 L111 90 M100 94 L110 95" stroke="#241A10" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M100 86 L109 89.4 M100 94 L108 94.8" stroke="#8F6A3E" stroke-width="2.2" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:112px 90px">
    <path d="M112 80 L128 74 M113 91 L131 91 M112 100 L128 106"
          stroke="#B8A377" stroke-width="4.6" stroke-linecap="round" opacity=".9"/>
    <circle cx="126" cy="84" r="2.6" fill="#A8C43A"/>
  </g>
</svg>
`;export{t as default};
