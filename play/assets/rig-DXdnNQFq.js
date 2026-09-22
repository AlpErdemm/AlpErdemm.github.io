const r=`<!-- Ambar Biti (Granary Weevil) - Crawling Crate - Spoil - melee, snout\r
     attackSpeed 1.00 -> round(20/1.00) = 20 ticks = 1.00 s\r
\r
     A narrow upright body with a long snout curving down off the front of\r
     the head, ridged the whole way. The snout is the entire silhouette\r
     argument: it is the only downward-pointing weapon in the family and the\r
     narrowest mass of the twelve, so the body reads as a tool rather than\r
     as an animal - which is what a cost 5 body with only 870 hit points\r
     wants to read as. It is the glass cannon and it is drawn thin.\r
\r
     Archetype \`stab\`. The snout drills: it retracts and drives forward, and\r
     \`WEAPON ambarbiti [117, 58]\` is its point.\r
\r
     The ridging is tint lines over 6B4A2A, and there are four of them on the\r
     snout rather than an even comb, for the reason the Caterpillar's tufts\r
     are uneven.\r
\r
     Mass = the body, x 30..74 (44 wide), y 46..118 (72 tall), ratio 1.64 -\r
     the narrowest body of the twelve. Eye y 66 = 28% of the mass. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="ambarbiti" style="--dur-atk:1.00s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="20" ry="5" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:32px 88px">\r
    <path d="M32 88 L21 95" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M32 88 L21 95" stroke="#4A311B" stroke-width="6" stroke-linecap="round"/>\r
    <circle cx="19" cy="96" r="5.5" fill="#6B4A2A" stroke="#241A10" stroke-width="3"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L40 122" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M44 108 L40 122" stroke="#4A311B" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M31 124 Q28 129 31 134 L43 134 Q45 128 42 123 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L66 122" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M62 108 L66 122" stroke="#4A311B" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 63 134 L75 134 Q77 129 74 124 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- Two short elbowed antennae off the snout base, swept back and\r
         unequal. -->\r
    <path d="M60 58 L68 50 L76 50" fill="none" stroke="#241A10" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M45 56 L38 47 L31 48" fill="none" stroke="#241A10" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round"/>\r
\r
    <!-- The narrow body: fill, crescent, gleam, ink. -->\r
    <path d="M52 56 Q68 58 72 76 Q76 96 70 110 Q62 119 52 118 Q42 119 34 110 Q28 96 32 76 Q36 58 52 56 Z"\r
          fill="#6B4A2A"/>\r
    <path d="M72 76 Q76 96 70 110 Q62 119 52 118 L52 112 Q62 112 67 103 Q71 92 68 78 Z"\r
          fill="#4A311B"/>\r
    <path d="M40 66 Q35 76 35 86" fill="none" stroke="#8F6A3E" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M52 56 Q68 58 72 76 Q76 96 70 110 Q62 119 52 118 Q42 119 34 110 Q28 96 32 76 Q36 58 52 56 Z"\r
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Elytra grooves, four, down the back and uneven. Tint only. -->\r
    <path d="M39 76 Q37 96 40 113" fill="none" stroke="#4A311B" stroke-width="2.8" stroke-linecap="round"/>\r
    <path d="M48 72 Q47 96 49 117" fill="none" stroke="#4A311B" stroke-width="2.8" stroke-linecap="round"/>\r
    <path d="M57 72 Q58 96 57 117" fill="none" stroke="#4A311B" stroke-width="2.8" stroke-linecap="round"/>\r
    <path d="M65 78 Q67 96 64 112" fill="none" stroke="#4A311B" stroke-width="2.8" stroke-linecap="round"/>\r
\r
    <path d="M38 56 L46 61 M58 61 L66 56" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>\r
    <ellipse cx="43" cy="66" rx="5.6" ry="6.6" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="61" cy="66" rx="5.6" ry="6.6" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="44.1" cy="67" rx="3" ry="4.2" fill="#241A10"/>\r
    <ellipse cx="62.1" cy="67" rx="3" ry="4.2" fill="#241A10"/>\r
    <circle cx="42" cy="63.8" r="1.4" fill="#FFFFFF"/>\r
    <circle cx="60" cy="63.8" r="1.4" fill="#FFFFFF"/>\r
\r
    <path class="crack" d="M38 68 L48 82 L38 94 L50 106 L40 116"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front limb and the snout as one part. The snout rests at 34 degrees\r
       above horizontal - flatter than the roster's 58..78 band, because a\r
       drill points at what it is going into and a weevil's is aimed at the\r
       grain in front of it rather than at the ceiling. -->\r
  <g class="armF" style="transform-origin:68px 84px">\r
    <path d="M68 84 L82 78" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M68 84 L82 78" stroke="#4A311B" stroke-width="6" stroke-linecap="round"/>\r
    <circle cx="84" cy="77" r="6" fill="#6B4A2A" stroke="#241A10" stroke-width="3"/>\r
    <path d="M86 74 Q100 68 112 60" fill="none" stroke="#241A10" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M86 74 Q100 68 111 61" fill="none" stroke="#6B4A2A" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M91 74 L93 79 M98 70 L100 75 M104 66 L106 71"\r
          stroke="#8F6A3E" stroke-width="2.4" stroke-linecap="round"/>\r
    <path d="M110 58 L117 55 L114 62 Z"\r
          fill="#4A311B" stroke="#241A10" stroke-width="2.8" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:117px 58px">\r
    <path d="M117 48 L133 42 M117 59 L135 58 M117 70 L133 76"\r
          stroke="#8F6A3E" stroke-width="4.6" stroke-linecap="round" opacity=".9"/>\r
    <circle cx="130" cy="50" r="2.4" fill="#A8C43A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
