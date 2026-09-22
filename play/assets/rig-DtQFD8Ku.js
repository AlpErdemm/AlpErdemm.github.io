const r=`<!-- Curuk Patates (Rotten Potato) - Crawling Crate - Spoil - melee, eye\r
     attackSpeed 0.78 -> round(20/0.78) = 26 ticks = 1.30 s\r
     The Region's wall, Stop 40, and the carrier of Kaynasma.\r
\r
     The second of the two infested vegetables - see the Cabbage's header\r
     for why the landmarks are food and the ten are pests.\r
\r
     A lumpy tuber whose lower third has gone soft and spread, with long\r
     pale sprouts pushing out of its eyes. The collapse is the silhouette\r
     argument: every other body of the family stands on something, and this\r
     one is drawn sitting in its own spread, so the wall reads as a thing\r
     that is not going to move rather than as a big pest.\r
\r
     The sprouts are the second read and they are the verb. Kaynasma scales\r
     this body's bite with how many of its own are still standing, so what\r
     is drawn is a body that is still producing - five sprouts, all\r
     different lengths, none of them symmetrical with another.\r
\r
     Archetype \`crank\`, and with the Burnt Oven's Kurum and Sac this is the\r
     third rig on disk to wear it. There is no discrete release in a grind:\r
     \`RELEASE.crank\` is the shared \`fx\` flash at 33% and the arm rocks only\r
     6 degrees either side. That is the right reading for a body that does\r
     not strike so much as bear down. \`WEAPON curukpatates [118, 64]\` is the\r
     sprouting eye it grinds with.\r
\r
     Its palette is the family's rot browns rather than the Cabbage's green:\r
     5A4A3A 7A6650 3D3128, with the sprouts in the pale D9C89A. Two\r
     vegetables, two colours, so the Region's two bosses do not read as one\r
     body at two sizes.\r
\r
     Mass = the tuber, x 10..94 (84 wide), y 42..126 (84 tall), ratio 1.00 -\r
     tied with the Cabbage for the largest, and squarer. Eye y 80 = 45%. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="crank" data-unit="curukpatates" style="--dur-atk:1.30s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="33" ry="6.5" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:22px 92px">\r
    <path d="M22 92 L15 99" stroke="#241A10" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M22 92 L15 99" stroke="#3D3128" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="14" cy="100" r="6" fill="#5A4A3A" stroke="#241A10" stroke-width="3"/>\r
  </g>\r
\r
  <!-- Stubs rather than legs. The body has slumped onto them and they are\r
       drawn short so the walk cycle shuffles the mass instead of striding\r
       it - a wall does not march. -->\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 116 L41 125" stroke="#241A10" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M44 116 L41 125" stroke="#3D3128" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M29 127 Q25 131 29 134 L44 134 Q46 130 43 126 Z"\r
          fill="#5A4A3A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 116 L65 125" stroke="#241A10" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M62 116 L65 125" stroke="#3D3128" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M62 126 Q58 130 62 134 L77 134 Q79 131 76 127 Z"\r
          fill="#5A4A3A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The sprouts, drawn first so the tuber covers their roots. Five, all\r
         different lengths, and none mirrored - this is the verb on the rig,\r
         so a regular pattern would be the wrong statement. -->\r
    <path d="M32 62 Q24 48 16 43" fill="none" stroke="#241A10" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M32 62 Q24 48 17 44" fill="none" stroke="#D9C89A" stroke-width="3.2" stroke-linecap="round"/>\r
    <path d="M44 56 Q40 42 44 30" fill="none" stroke="#241A10" stroke-width="5.4" stroke-linecap="round"/>\r
    <path d="M44 56 Q40 42 44 31" fill="none" stroke="#D9C89A" stroke-width="2.8" stroke-linecap="round"/>\r
    <path d="M60 54 Q62 40 72 34" fill="none" stroke="#241A10" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M60 54 Q62 40 71 35" fill="none" stroke="#D9C89A" stroke-width="3.2" stroke-linecap="round"/>\r
    <path d="M76 64 Q88 56 94 46" fill="none" stroke="#241A10" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M76 64 Q88 56 93 47" fill="none" stroke="#D9C89A" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M22 78 Q14 74 11 67" fill="none" stroke="#241A10" stroke-width="4.6" stroke-linecap="round"/>\r
    <path d="M22 78 Q15 74 12 68" fill="none" stroke="#D9C89A" stroke-width="2.4" stroke-linecap="round"/>\r
\r
    <!-- The tuber. Deliberately lumpy rather than round, and widest below\r
         the middle, because the bottom is what has gone. -->\r
    <path d="M52 52 Q76 52 86 70 Q96 84 90 100 Q92 116 74 122 Q58 128 44 125 Q26 124 18 112 Q10 98 18 84 Q20 64 38 56 Q44 52 52 52 Z"\r
          fill="#5A4A3A"/>\r
    <path d="M90 100 Q92 116 74 122 Q58 128 44 125 L44 118 Q66 120 79 111 Q88 104 85 98 Z"\r
          fill="#3D3128"/>\r
    <path d="M30 70 Q22 82 22 94" fill="none" stroke="#7A6650" stroke-width="5.5" stroke-linecap="round"/>\r
    <path d="M52 52 Q76 52 86 70 Q96 84 90 100 Q92 116 74 122 Q58 128 44 125 Q26 124 18 112 Q10 98 18 84 Q20 64 38 56 Q44 52 52 52 Z"\r
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Soft patches. Three, unequal, and the largest sits low where the\r
         collapse is, so the eye is led down the body to the spread. -->\r
    <ellipse cx="38" cy="108" rx="11" ry="8" fill="#3D3128" opacity=".85"/>\r
    <ellipse cx="72" cy="94" rx="7" ry="5.5" fill="#3D3128" opacity=".85"/>\r
    <ellipse cx="62" cy="112" rx="5" ry="4" fill="#3D3128" opacity=".85"/>\r
\r
    <!-- The eyes of the tuber, three small ink pits, which is where the\r
         sprouts above come from. -->\r
    <circle cx="30" cy="80" r="2.6" fill="#241A10"/>\r
    <circle cx="80" cy="74" r="2.2" fill="#241A10"/>\r
    <circle cx="48" cy="118" r="2.4" fill="#241A10"/>\r
\r
    <path d="M34 68 L45 74 M59 74 L70 68" stroke="#241A10" stroke-width="3.6" stroke-linecap="round"/>\r
    <ellipse cx="40" cy="80" rx="7" ry="8" fill="#A8C43A" stroke="#241A10" stroke-width="2.4"/>\r
    <ellipse cx="64" cy="80" rx="7" ry="8" fill="#A8C43A" stroke="#241A10" stroke-width="2.4"/>\r
    <ellipse cx="41.4" cy="81" rx="3.8" ry="5" fill="#241A10"/>\r
    <ellipse cx="65.4" cy="81" rx="3.8" ry="5" fill="#241A10"/>\r
    <circle cx="39" cy="77.2" r="1.7" fill="#FFFFFF"/>\r
    <circle cx="63" cy="77.2" r="1.7" fill="#FFFFFF"/>\r
    <path d="M42 98 Q52 92 62 98" stroke="#241A10" stroke-width="3.2" fill="none" stroke-linecap="round"/>\r
\r
    <path class="crack" d="M32 66 L46 82 L34 96 L48 110 L36 122"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front limb and the grinding eye as one part. It rests at 46 degrees\r
       above horizontal, low for the roster's 58..78 band and low on purpose:\r
       a \`crank\` rocks rather than swings, and a weapon held high would\r
       promise an arc the archetype never draws. -->\r
  <g class="armF" style="transform-origin:82px 94px">\r
    <path d="M82 94 L94 86" stroke="#241A10" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M82 94 L94 86" stroke="#3D3128" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="96" cy="85" r="6.5" fill="#5A4A3A" stroke="#241A10" stroke-width="3"/>\r
    <path d="M97 83 L106 72" stroke="#241A10" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M97 83 L105 73" stroke="#5A4A3A" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M103 74 Q114 60 118 66 Q120 76 110 82 Q104 82 103 74 Z"\r
          fill="#7A6650" stroke="#241A10" stroke-width="3.4" stroke-linejoin="round"/>\r
    <circle cx="112" cy="71" r="2.8" fill="#241A10"/>\r
    <path d="M112 68 Q116 62 120 60" fill="none" stroke="#D9C89A" stroke-width="2.8" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 68px">\r
    <path d="M118 56 L136 48 M118 68 L140 68 M118 80 L136 88"\r
          stroke="#7A6650" stroke-width="5.2" stroke-linecap="round" opacity=".9"/>\r
    <path d="M118 56 L130 51 M118 68 L134 68 M118 80 L130 85"\r
          stroke="#D9C89A" stroke-width="2.4" stroke-linecap="round"/>\r
    <circle cx="132" cy="58" r="2.8" fill="#A8C43A"/>\r
    <circle cx="134" cy="79" r="2.4" fill="#A8C43A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
