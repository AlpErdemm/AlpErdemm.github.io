const r=`<!-- Akar (Flour Mite) - Crawling Crate - Spoil - melee, foreclaw\r
     attackSpeed 1.14 -> round(20/1.14) = 18 ticks = 0.90 s\r
\r
     A flat round disc fringed with bristles all the way round, dusted pale\r
     with the flour it lives in. That fringe is the whole silhouette\r
     decision: the Aphid beside it in the price band is a pear on long legs\r
     and this is a circle with a halo, so the two cheapest bodies of the\r
     family cannot be confused at board size even though they share a\r
     palette and a price.\r
\r
     Archetype \`stab\`, on a short foreclaw. \`WEAPON akar [110, 88]\` is the\r
     claw's point.\r
\r
     The dusting is why this body carries more of the pale D9C89A than\r
     anything else in the family: it is the one that lives inside the flour\r
     rather than on the crate.\r
\r
     Mass = the disc, x 24..80 (56 wide), y 60..114 (54 tall), ratio 0.96 -\r
     the roundest body in the twelve. Eye y 84 = 44% of the mass. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="akar" style="--dur-atk:0.90s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="24" ry="5.5" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 92px">\r
    <path d="M30 92 L20 99" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M30 92 L20 99" stroke="#B8A377" stroke-width="6" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L40 122" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M44 108 L40 122" stroke="#B8A377" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M31 124 Q28 129 31 134 L43 134 Q45 128 42 123 Z"\r
          fill="#D9C89A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L66 122" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M62 108 L66 122" stroke="#B8A377" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 63 134 L75 134 Q77 129 74 124 Z"\r
          fill="#D9C89A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The bristle halo, drawn first so the disc covers every root. Ten\r
         strokes at uneven lengths: an even fringe reads as a gear. -->\r
    <path d="M30 72 L21 63 M26 86 L15 84 M28 100 L18 107 M40 64 L35 53 M54 60 L54 49 M68 64 L74 54 M76 76 L87 70 M79 90 L90 92 M75 103 L84 111 M64 111 L68 121"\r
          stroke="#241A10" stroke-width="3.6" stroke-linecap="round"/>\r
\r
    <!-- The disc: fill, crescent, gleam, ink. -->\r
    <ellipse cx="52" cy="87" rx="28" ry="27" fill="#D9C89A"/>\r
    <path d="M80 87 Q80 106 64 112 Q56 115 52 114 L52 108 Q66 108 72 98 Q76 92 75 87 Z"\r
          fill="#B8A377"/>\r
    <path d="M34 72 Q28 79 28 88" fill="none" stroke="#EFE3C0" stroke-width="5" stroke-linecap="round"/>\r
    <ellipse cx="52" cy="87" rx="28" ry="27" fill="none" stroke="#241A10" stroke-width="4"/>\r
\r
    <!-- Four flour specks on the shell, all off-centre and unequal. -->\r
    <circle cx="38" cy="96" r="2.6" fill="#EFE3C0"/>\r
    <circle cx="46" cy="104" r="1.8" fill="#EFE3C0"/>\r
    <circle cx="63" cy="70" r="2.2" fill="#EFE3C0"/>\r
\r
    <path d="M36 72 L46 77 M58 77 L68 72" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>\r
    <ellipse cx="42" cy="84" rx="6.2" ry="7.2" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="62" cy="84" rx="6.2" ry="7.2" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="43.2" cy="85" rx="3.3" ry="4.5" fill="#241A10"/>\r
    <ellipse cx="63.2" cy="85" rx="3.3" ry="4.5" fill="#241A10"/>\r
    <circle cx="41" cy="81.6" r="1.5" fill="#FFFFFF"/>\r
    <circle cx="61" cy="81.6" r="1.5" fill="#FFFFFF"/>\r
    <path d="M44 99 Q52 95 60 99" stroke="#241A10" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <path class="crack" d="M34 70 L46 84 L36 96 L48 108 L38 116"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:72px 92px">\r
    <path d="M72 92 L84 90" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M72 92 L84 90" stroke="#B8A377" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M84 90 L100 87" stroke="#241A10" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M84 90 L100 87" stroke="#6B4A2A" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M98 84 L110 86 L100 92 Z"\r
          fill="#8F6A3E" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:110px 88px">\r
    <path d="M110 88 L126 82 M110 90 L128 92 M110 92 L124 100"\r
          stroke="#EFE3C0" stroke-width="4.2" stroke-linecap="round" opacity=".9"/>\r
    <circle cx="124" cy="86" r="2.4" fill="#D9C89A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
