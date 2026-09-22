const r=`<!-- Karinca (Ant) - Crawling Crate - Spoil - melee, mandibles\r
     attackSpeed 1.10 -> round(20/1.10) = 18 ticks = 0.90 s\r
\r
     Three lobes and two waists, which is the one shape in the family that\r
     is built out of gaps rather than out of a single mass. Head, thorax and\r
     gaster are drawn as separate rounds joined by two thin petioles, so at\r
     board size the body reads as a chain even when the individual lobes are\r
     too small to tell apart - and nothing else in the twelve is a chain.\r
\r
     Archetype \`stab\`, on mandibles held high. \`WEAPON karinca [116, 62]\` is\r
     the outer tip of the upper jaw, so the strike comes down onto a body\r
     rather than across at one.\r
\r
     The chitin fills at their darkest here, 6B4A2A over 4A311B, because\r
     this is the hard one in the cost 3 band and the Moth beside it is\r
     mostly dust.\r
\r
     Mass = head to gaster, x 20..82 (62 wide), y 44..116 (72 tall), ratio\r
     1.16. Eye y 60 = 22% of the mass, high because the head lobe is small\r
     and sits at the top of the chain. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="karinca" style="--dur-atk:0.90s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="24" ry="5.5" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 88px">\r
    <path d="M30 88 L19 96" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M30 88 L19 96" stroke="#4A311B" stroke-width="6" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 106 L38 122" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M44 106 L38 122" stroke="#4A311B" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M30 124 Q27 129 30 134 L42 134 Q44 128 41 123 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 106 L68 122" stroke="#241A10" stroke-width="11" stroke-linecap="round"/>\r
    <path d="M62 106 L68 122" stroke="#4A311B" stroke-width="7" stroke-linecap="round"/>\r
    <path d="M64 123 Q61 128 64 134 L76 134 Q78 129 75 124 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- Antennae, elbowed the way an ant's are and at different angles. -->\r
    <path d="M42 52 L34 42 L24 40" fill="none" stroke="#241A10" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M62 52 L71 44 L79 45" fill="none" stroke="#241A10" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round"/>\r
\r
    <!-- Gaster, the big rear lobe. Drawn first so the waist overlaps it. -->\r
    <ellipse cx="42" cy="98" rx="21" ry="18" fill="#6B4A2A"/>\r
    <path d="M63 98 Q63 112 48 116 Q42 117 39 116 L39 110 Q52 110 57 102 Q60 100 59 97 Z"\r
          fill="#4A311B"/>\r
    <ellipse cx="42" cy="98" rx="21" ry="18" fill="none" stroke="#241A10" stroke-width="4"/>\r
\r
    <!-- The two petioles: the gaps that make the chain read. -->\r
    <path d="M60 92 L68 86" stroke="#241A10" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M60 92 L68 86" stroke="#4A311B" stroke-width="5" stroke-linecap="round"/>\r
\r
    <!-- Thorax. -->\r
    <ellipse cx="60" cy="78" rx="15" ry="13" fill="#6B4A2A"/>\r
    <path d="M75 78 Q75 88 64 91 Q60 92 58 91 L58 86 Q68 86 71 80 Q72 79 72 77 Z" fill="#4A311B"/>\r
    <path d="M50 70 Q45 75 45 80" fill="none" stroke="#8F6A3E" stroke-width="4.5" stroke-linecap="round"/>\r
    <ellipse cx="60" cy="78" rx="15" ry="13" fill="none" stroke="#241A10" stroke-width="4"/>\r
\r
    <path d="M52 66 L57 62" stroke="#241A10" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M52 66 L57 62" stroke="#4A311B" stroke-width="4.5" stroke-linecap="round"/>\r
\r
    <!-- Head lobe, forward and highest. -->\r
    <ellipse cx="52" cy="57" rx="17" ry="15" fill="#6B4A2A"/>\r
    <path d="M69 57 Q69 68 57 71 Q52 72 50 71 L50 66 Q62 66 65 59 Q66 58 66 56 Z" fill="#4A311B"/>\r
    <path d="M42 48 Q37 53 37 59" fill="none" stroke="#8F6A3E" stroke-width="4.5" stroke-linecap="round"/>\r
    <ellipse cx="52" cy="57" rx="17" ry="15" fill="none" stroke="#241A10" stroke-width="4"/>\r
\r
    <path d="M39 49 L47 53 M57 53 L65 49" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>\r
    <ellipse cx="44" cy="60" rx="5.6" ry="6.6" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="60" cy="60" rx="5.6" ry="6.6" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="45.1" cy="61" rx="3" ry="4.2" fill="#241A10"/>\r
    <ellipse cx="61.1" cy="61" rx="3" ry="4.2" fill="#241A10"/>\r
    <circle cx="43" cy="57.8" r="1.5" fill="#FFFFFF"/>\r
    <circle cx="59" cy="57.8" r="1.5" fill="#FFFFFF"/>\r
\r
    <path class="crack" d="M34 58 L46 74 L34 88 L46 102 L36 114"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front limb and the mandibles as one part. The upper jaw rests at 62\r
       degrees above horizontal, inside the roster's 58..78 band. -->\r
  <g class="armF" style="transform-origin:72px 84px">\r
    <path d="M72 84 L86 78" stroke="#241A10" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M72 84 L86 78" stroke="#4A311B" stroke-width="6" stroke-linecap="round"/>\r
    <circle cx="88" cy="77" r="6" fill="#6B4A2A" stroke="#241A10" stroke-width="3"/>\r
    <path d="M90 74 Q104 66 114 60" fill="none" stroke="#241A10" stroke-width="7.5" stroke-linecap="round"/>\r
    <path d="M90 74 Q104 66 113 61" fill="none" stroke="#8F6A3E" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M90 82 Q102 82 110 78" fill="none" stroke="#241A10" stroke-width="6.5" stroke-linecap="round"/>\r
    <path d="M90 82 Q102 82 109 78.5" fill="none" stroke="#8F6A3E" stroke-width="3.4" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:116px 66px">\r
    <path d="M116 56 L132 48 M117 67 L135 66 M116 78 L132 84"\r
          stroke="#8F6A3E" stroke-width="4.6" stroke-linecap="round" opacity=".9"/>\r
    <circle cx="130" cy="58" r="2.6" fill="#A8C43A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
