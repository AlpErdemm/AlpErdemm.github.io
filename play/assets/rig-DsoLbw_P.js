const r=`<!-- Kurtlu Lahana (Wormy Cabbage) - Crawling Crate - Spoil - melee, leaf\r
     attackSpeed 0.86 -> round(20/0.86) = 23 ticks = 1.15 s\r
     The Region's lesser boss, Stop 30.\r
\r
     **A vegetable, not a pest, and that is deliberate.** The Region's ten\r
     ordinary bodies are what got into the crate; the two that stand at the\r
     landmarks are what they got into - exactly as the Burnt Oven's ten are\r
     fire and smoke while Kavruk and Yanik Somun are the food the fire\r
     ruined. A reader who notices the inconsistency should find the reason\r
     here rather than fix it.\r
\r
     So this is the first body of the family drawn green throughout, and the\r
     read at board size is a big leafy ball with its outer leaves flared\r
     open and holes eaten through them. The holes are the tell: without them\r
     it is a cabbage, with them it is a cabbage something lives in.\r
\r
     Archetype \`swing\`: an outer leaf comes across in a wide arc. \`WEAPON\r
     kurtlulahana [120, 52]\` is the torn edge at the top of that swing -\r
     the highest weapon point in the family, because this body is the\r
     tallest thing the player has met from it by Stop 30.\r
\r
     Kavruk is a statline and so is this: the most hit points and the\r
     heaviest blow the Crawling Crate owns, and nothing the player has not\r
     already seen a smaller version of. The wall is the other one.\r
\r
     Mass = the head, x 12..92 (80 wide), y 36..120 (84 tall), ratio 1.05 -\r
     the largest mass of the twelve. Eye y 74 = 45% of the mass. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="kurtlulahana" style="--dur-atk:1.15s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="32" ry="6.5" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:24px 88px">\r
    <path d="M24 88 L16 95" stroke="#241A10" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M24 88 L16 95" stroke="#3F5222" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="14" cy="96" r="6" fill="#5E7A34" stroke="#241A10" stroke-width="3"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 110 L39 123" stroke="#241A10" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 110 L39 123" stroke="#3F5222" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M29 125 Q25 130 29 134 L43 134 Q45 129 42 124 Z"\r
          fill="#5E7A34" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 110 L67 123" stroke="#241A10" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 110 L67 123" stroke="#3F5222" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 124 Q59 129 63 134 L77 134 Q79 130 76 125 Z"\r
          fill="#5E7A34" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The flared outer leaves, drawn first so the head covers their bases.\r
         Three, at three sizes, all leaning off-centre. -->\r
    <path d="M30 70 Q16 58 14 44 Q27 45 36 58 Z"\r
          fill="#3F5222" stroke="#241A10" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M52 56 Q48 40 56 28 Q66 38 64 56 Z"\r
          fill="#3F5222" stroke="#241A10" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M74 70 Q88 60 92 46 Q78 48 68 60 Z"\r
          fill="#3F5222" stroke="#241A10" stroke-width="3.4" stroke-linejoin="round"/>\r
\r
    <!-- The head: fill, crescent, gleam, ink. -->\r
    <path d="M52 50 Q78 52 87 74 Q94 96 80 112 Q68 122 52 120 Q36 122 24 112 Q10 96 17 74 Q26 52 52 50 Z"\r
          fill="#5E7A34"/>\r
    <path d="M87 74 Q94 96 80 112 Q68 122 52 120 L52 113 Q70 113 79 102 Q88 90 82 74 Z"\r
          fill="#3F5222"/>\r
    <path d="M30 66 Q22 78 21 90" fill="none" stroke="#7FA046" stroke-width="5.5" stroke-linecap="round"/>\r
    <path d="M52 50 Q78 52 87 74 Q94 96 80 112 Q68 122 52 120 Q36 122 24 112 Q10 96 17 74 Q26 52 52 50 Z"\r
          fill="none" stroke="#241A10" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Leaf veins, three, fanning from the crown and unevenly spaced. -->\r
    <path d="M52 52 Q40 74 34 106" fill="none" stroke="#7FA046" stroke-width="3.2" stroke-linecap="round"/>\r
    <path d="M56 52 Q58 78 56 118" fill="none" stroke="#7FA046" stroke-width="3.2" stroke-linecap="round"/>\r
    <path d="M62 54 Q74 76 76 104" fill="none" stroke="#7FA046" stroke-width="3.2" stroke-linecap="round"/>\r
\r
    <!-- The holes. Three, all different sizes, off the centre line: this is\r
         what makes the body a boss of a pest family rather than a cabbage. -->\r
    <ellipse cx="34" cy="94" rx="6" ry="5" fill="#241A10" opacity=".8"/>\r
    <ellipse cx="70" cy="100" rx="4.4" ry="3.8" fill="#241A10" opacity=".8"/>\r
    <ellipse cx="62" cy="64" rx="3.4" ry="3" fill="#241A10" opacity=".8"/>\r
\r
    <path d="M34 62 L45 68 M59 68 L70 62" stroke="#241A10" stroke-width="3.6" stroke-linecap="round"/>\r
    <ellipse cx="40" cy="74" rx="7" ry="8" fill="#A8C43A" stroke="#241A10" stroke-width="2.4"/>\r
    <ellipse cx="64" cy="74" rx="7" ry="8" fill="#A8C43A" stroke="#241A10" stroke-width="2.4"/>\r
    <ellipse cx="41.4" cy="75" rx="3.8" ry="5" fill="#241A10"/>\r
    <ellipse cx="65.4" cy="75" rx="3.8" ry="5" fill="#241A10"/>\r
    <circle cx="39" cy="71.2" r="1.7" fill="#FFFFFF"/>\r
    <circle cx="63" cy="71.2" r="1.7" fill="#FFFFFF"/>\r
    <path d="M42 90 Q52 84 62 90" stroke="#241A10" stroke-width="3.2" fill="none" stroke-linecap="round"/>\r
\r
    <path class="crack" d="M32 62 L46 78 L34 92 L48 106 L36 118"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front limb and the torn outer leaf as one part. The leaf rests at 66\r
       degrees above horizontal, inside the roster's 58..78 band. -->\r
  <g class="armF" style="transform-origin:80px 90px">\r
    <path d="M80 90 L94 82" stroke="#241A10" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M80 90 L94 82" stroke="#3F5222" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="96" cy="81" r="6.5" fill="#5E7A34" stroke="#241A10" stroke-width="3"/>\r
    <path d="M97 78 L106 64" stroke="#241A10" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M97 78 L105 65" stroke="#5E7A34" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M101 66 Q112 48 120 50 Q118 64 110 74 Q104 76 101 66 Z"\r
          fill="#7FA046" stroke="#241A10" stroke-width="3.4" stroke-linejoin="round"/>\r
    <path d="M106 66 Q110 60 114 56" fill="none" stroke="#3F5222" stroke-width="2.8" stroke-linecap="round"/>\r
    <ellipse cx="112" cy="62" rx="3" ry="2.6" fill="#241A10" opacity=".8"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:120px 54px">\r
    <path d="M120 42 L138 36 M120 54 L140 54 M120 66 L138 72"\r
          stroke="#7FA046" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M126 42 L130 54 L126 66" fill="none" stroke="#A8C43A" stroke-width="2.4" stroke-linecap="round"/>\r
  </g>\r
</svg>\r
`;export{r as default};
