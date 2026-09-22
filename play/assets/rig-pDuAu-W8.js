const r=`<!-- Hamambocegi (Cockroach) - Crawling Crate - Spoil - melee, foreleg spur\r
     attackSpeed 0.82 -> round(20/0.82) = 24 ticks = 1.20 s\r
\r
     A wide flat oval shell with a separate pronotum plate over the front of\r
     it and two very long antennae sweeping back. The plate is the silhouette\r
     decision: an oval alone is the Mite scaled up, and the two bodies would\r
     collapse into one another in a back row. A shield across the shoulders\r
     makes this one read as armoured, which is what a cost 4 body with 970\r
     hit points should read as.\r
\r
     The antennae are drawn longer than anything else on the roster reaches\r
     sideways, because length is the second half of the read - the shell says\r
     armour, the antennae say it is fast.\r
\r
     Archetype \`swing\`: the foreleg comes across in a wide arc and \`.fx\`\r
     flashes at contact. \`WEAPON hamambocegi [118, 70]\` is the spur at the\r
     leg's end.\r
\r
     Mass = the shell, x 16..88 (72 wide), y 58..118 (60 tall), ratio 0.83.\r
     Eye y 76 = 30% of the mass, up under the plate's lip. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="hamambocegi" style="--dur-atk:1.20s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:26px 92px">\r
    <path d="M26 92 L16 86 L11 96" fill="none" stroke="#241A10" stroke-width="9" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M26 92 L16 86 L11 96" fill="none" stroke="#4A311B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L34 118 L36 126" fill="none" stroke="#241A10" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M44 108 L34 118 L36 126" fill="none" stroke="#4A311B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M28 126 Q25 130 28 134 L40 134 Q42 129 39 125 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L72 118 L70 126" fill="none" stroke="#241A10" stroke-width="10" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M62 108 L72 118 L70 126" fill="none" stroke="#4A311B" stroke-width="6" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M65 125 Q62 130 65 134 L77 134 Q79 129 76 125 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The antennae. Unequal, one higher and one flicked, because a\r
         matched pair at this length reads as a wishbone. -->\r
    <path d="M44 62 Q28 48 15 45" fill="none" stroke="#241A10" stroke-width="3.6" stroke-linecap="round"/>\r
    <path d="M62 62 Q78 46 92 44" fill="none" stroke="#241A10" stroke-width="3.6" stroke-linecap="round"/>\r
\r
    <!-- The shell: fill, crescent, gleam, ink. -->\r
    <path d="M52 62 Q76 64 85 82 Q92 100 78 112 Q66 120 52 119 Q38 120 26 112 Q12 100 19 82 Q28 64 52 62 Z"\r
          fill="#6B4A2A"/>\r
    <path d="M85 82 Q92 100 78 112 Q66 120 52 119 L52 112 Q68 112 76 103 Q84 94 80 82 Z"\r
          fill="#4A311B"/>\r
    <path d="M30 76 Q23 86 23 96" fill="none" stroke="#8F6A3E" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M52 62 Q76 64 85 82 Q92 100 78 112 Q66 120 52 119 Q38 120 26 112 Q12 100 19 82 Q28 64 52 62 Z"\r
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- The wing seam down the back, ink, so the shell reads as two covers\r
         folded shut rather than as one dome. -->\r
    <path d="M52 92 L52 119" fill="none" stroke="#241A10" stroke-width="3" stroke-linecap="round"/>\r
\r
    <!-- The pronotum plate, over the shoulders and darker. -->\r
    <path d="M52 60 Q72 62 76 76 Q78 86 64 88 Q52 90 40 88 Q26 86 28 76 Q32 62 52 60 Z"\r
          fill="#8F6A3E" stroke="#241A10" stroke-width="3.6" stroke-linejoin="round"/>\r
    <path d="M38 68 Q34 74 34 80" fill="none" stroke="#B8A377" stroke-width="4" stroke-linecap="round"/>\r
\r
    <path d="M38 67 L47 72 M57 72 L66 67" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>\r
    <ellipse cx="43" cy="78" rx="6" ry="7" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="61" cy="78" rx="6" ry="7" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="44.2" cy="79" rx="3.2" ry="4.4" fill="#241A10"/>\r
    <ellipse cx="62.2" cy="79" rx="3.2" ry="4.4" fill="#241A10"/>\r
    <circle cx="42" cy="75.6" r="1.5" fill="#FFFFFF"/>\r
    <circle cx="60" cy="75.6" r="1.5" fill="#FFFFFF"/>\r
\r
    <path class="crack" d="M32 74 L46 88 L34 100 L48 112 L38 118"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front leg and its spur as one part, so one rotation carries the whole\r
       arc. The spur rests at 60 degrees above horizontal, inside the\r
       roster's 58..78 band. -->\r
  <g class="armF" style="transform-origin:76px 90px">\r
    <path d="M76 90 L90 84" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M76 90 L90 84" stroke="#4A311B" stroke-width="7" stroke-linecap="round"/>\r
    <circle cx="92" cy="83" r="6.5" fill="#6B4A2A" stroke="#241A10" stroke-width="3"/>\r
    <path d="M94 80 L110 70" stroke="#241A10" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M94 80 L109 71" stroke="#8F6A3E" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M106 74 L118 66 L116 74 L108 80 Z"\r
          fill="#4A311B" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M100 76 L106 73" stroke="#B8A377" stroke-width="2.6" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 72px">\r
    <path d="M118 60 L136 54 M118 72 L138 72 M118 84 L136 90"\r
          stroke="#8F6A3E" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M124 60 L128 72 L124 84" fill="none" stroke="#B8A377" stroke-width="2.4" stroke-linecap="round"/>\r
  </g>\r
</svg>\r
`;export{r as default};
