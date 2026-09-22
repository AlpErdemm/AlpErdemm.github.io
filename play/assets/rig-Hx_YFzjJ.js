const r=`<!-- Salyangoz (Snail) - Crawling Crate - Spoil - melee, foot shove\r
     attackSpeed 0.80 -> round(20/0.80) = 25 ticks = 1.25 s\r
\r
     A coiled shell over a broad low foot, with two eye stalks instead of a\r
     face on the body. It is the only spiral in the family and the only body\r
     whose eyes are off the mass, which together make it unmistakable at any\r
     size - and it is the heavy the board generator leads its formations\r
     with, so unmistakable is what it has to be.\r
\r
     Archetype \`punch\`: the foot shoves, alternating, and the whole animal\r
     comes with it. \`punch\` is the two-limbed archetype and the second limb\r
     landing at 58% is what sells weight on a body with no arms at all.\r
\r
     \`WEAPON salyangoz [115, 80]\` is the foot's leading edge, where it\r
     shoves.\r
\r
     Cold enters the family here as the shell's own band, drawn in the pale\r
     D9C89A over chitin: the Burnt Oven gave exactly one body a colour of\r
     its own for the same reason, so that a wall of one family still has a\r
     shape a player can call for.\r
\r
     Mass = shell plus foot, x 16..88 (72 wide), y 50..124 (74 tall), ratio\r
     1.03. The stalk eyes sit at y 54 = 5% of the mass, which is as far from\r
     the roster's 40..55% as anything gets and is the point. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="punch" data-unit="salyangoz" style="--dur-atk:1.25s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="31" ry="6" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:26px 100px">\r
    <path d="M26 100 L17 105" stroke="#241A10" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M26 100 L17 105" stroke="#B8A377" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="15" cy="106" r="6" fill="#D9C89A" stroke="#241A10" stroke-width="3"/>\r
  </g>\r
\r
  <!-- No legs as such. The foot's two lobes take the leg slots, so the walk\r
       cycle rolls the body along rather than stepping it. -->\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 114 L40 124" stroke="#241A10" stroke-width="15" stroke-linecap="round"/>\r
    <path d="M44 114 L40 124" stroke="#B8A377" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M30 126 Q26 130 30 134 L44 134 Q46 129 43 125 Z"\r
          fill="#D9C89A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 114 L66 124" stroke="#241A10" stroke-width="15" stroke-linecap="round"/>\r
    <path d="M62 114 L66 124" stroke="#B8A377" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M62 125 Q58 130 62 134 L76 134 Q78 129 75 125 Z"\r
          fill="#D9C89A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The two eye stalks, drawn before the shell so their roots sit under\r
         it. Different lengths and splayed, because a matched pair reads as\r
         a snail toy rather than as a snail. -->\r
    <path d="M64 88 Q62 70 58 56" fill="none" stroke="#241A10" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M64 88 Q62 70 58 57" fill="none" stroke="#B8A377" stroke-width="3.2" stroke-linecap="round"/>\r
    <path d="M72 88 Q76 74 82 64" fill="none" stroke="#241A10" stroke-width="5.4" stroke-linecap="round"/>\r
    <path d="M72 88 Q76 74 81 65" fill="none" stroke="#B8A377" stroke-width="3" stroke-linecap="round"/>\r
    <ellipse cx="57" cy="54" rx="6.4" ry="6.8" fill="#A8C43A" stroke="#241A10" stroke-width="2.6"/>\r
    <ellipse cx="83" cy="62" rx="5.6" ry="6" fill="#A8C43A" stroke="#241A10" stroke-width="2.6"/>\r
    <ellipse cx="58" cy="55" rx="3" ry="3.6" fill="#241A10"/>\r
    <ellipse cx="84" cy="63" rx="2.7" ry="3.2" fill="#241A10"/>\r
    <circle cx="55.4" cy="51.6" r="1.5" fill="#FFFFFF"/>\r
    <circle cx="81.4" cy="59.6" r="1.4" fill="#FFFFFF"/>\r
\r
    <!-- The foot: the low broad mass everything sits on. -->\r
    <path d="M22 106 Q40 98 62 100 Q84 102 88 112 Q86 124 62 124 Q38 124 24 118 Q16 113 22 106 Z"\r
          fill="#D9C89A"/>\r
    <path d="M88 112 Q86 124 62 124 Q48 124 40 122 L40 117 Q64 118 76 114 Q84 112 84 108 Z"\r
          fill="#B8A377"/>\r
    <path d="M22 106 Q40 98 62 100 Q84 102 88 112 Q86 124 62 124 Q38 124 24 118 Q16 113 22 106 Z"\r
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- The shell: a true spiral, wound inward, in three ink arcs over a\r
         flat fill. No gradient anywhere - \`Graphics.svg()\` will not draw\r
         one, and this is the body most tempted by a sheen. -->\r
    <ellipse cx="46" cy="82" rx="30" ry="28" fill="#8F6A3E"/>\r
    <path d="M76 82 Q76 102 58 108 Q50 110 45 109 L45 103 Q62 102 69 93 Q74 88 73 81 Z"\r
          fill="#6B4A2A"/>\r
    <path d="M30 64 Q22 74 22 84" fill="none" stroke="#B8A377" stroke-width="5" stroke-linecap="round"/>\r
    <ellipse cx="46" cy="82" rx="30" ry="28" fill="none" stroke="#241A10" stroke-width="4"/>\r
    <path d="M62 82 Q62 98 46 98 Q31 98 31 82 Q31 69 44 69 Q55 69 55 80 Q55 88 47 88"\r
          fill="none" stroke="#241A10" stroke-width="3.4" stroke-linecap="round"/>\r
    <!-- One pale band following the outer whorl: the shell's own colour, and\r
         the only cool note the family carries. -->\r
    <path d="M22 72 Q40 62 62 70" fill="none" stroke="#D9C89A" stroke-width="3.6" stroke-linecap="round"/>\r
\r
    <path class="crack" d="M30 66 L46 80 L32 92 L48 104 L36 116"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- The leading edge of the foot, which is what this body hits with. Bare\r
       by the roster's rule for bodies that fight with their own material,\r
       with a mucus bead at the tip so the shove has a point of contact. -->\r
  <g class="armF" style="transform-origin:82px 100px">\r
    <path d="M82 100 L98 96" stroke="#241A10" stroke-width="13" stroke-linecap="round"/>\r
    <path d="M82 100 L98 96" stroke="#B8A377" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M95 91 L99 102" stroke="#8F6A3E" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M98 90 Q112 88 115 96 Q112 104 100 102 Q94 96 98 90 Z"\r
          fill="#D9C89A" stroke="#241A10" stroke-width="3.4" stroke-linejoin="round"/>\r
    <circle cx="108" cy="94" r="2.6" fill="#EFE3C0"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:115px 92px">\r
    <path d="M115 82 L131 76 M116 93 L134 93 M115 102 L131 108"\r
          stroke="#B8A377" stroke-width="4.8" stroke-linecap="round" opacity=".9"/>\r
    <circle cx="128" cy="85" r="2.6" fill="#EFE3C0"/>\r
  </g>\r
</svg>\r
`;export{r as default};
