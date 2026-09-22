const r=`<!-- Pas (Rust) - Rusted Cupboard - Spoil - melee, bare fists\r
     attackSpeed 1.18 -> round(20/1.18) = 17 ticks = 0.85 s\r
\r
     Archetype \`punch\`, the family's cheapest body and it carries nothing, so\r
     the two fists are the whole of what it has. Fastest cycle in the Cupboard.\r
\r
     \`WEAPON pas [114, 90]\` is the front knuckle, the Brawler convention.\r
\r
     Silhouette: the blotch. A lopsided round mass with two flakes lifting off\r
     the top and nothing straight anywhere on it - the one Cupboard body with\r
     no edge, which is what tells it from the Tin's crushed cylinder and the\r
     Burr's shard at 53 px. Widest at the waist rather than at the floor, so it\r
     is not the Ash's triangle either.\r
\r
     No Origin, no Role, no team colour, no tier mark, and no\r
     \`data-expression="cute"\` group. Mass x 16..90, y 30..118. Materials 2 /\r
     fills 4: rust 7A3B1C B0582C D98A4A * brass eye F2C46A. Pitting, three\r
     dots. One crescent (lower right), one gleam (upper left). -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="punch" data-unit="pas" style="--dur-atk:0.85s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 92px">\r
    <path d="M30 92 L22 98" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 92 L22 98" stroke="#7A3B1C" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="101" r="6.5" fill="#B0582C" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#7A3B1C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#B0582C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#7A3B1C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#B0582C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- Two flakes lifting off the top before the mass, so the blotch covers\r
         where they part from it. Neither mirrors the other: a curl that stays\r
         inside the outline changes nothing at 53 px. -->\r
    <path d="M40 48 Q34 34 46 30 Q44 40 52 44 Z" fill="#D98A4A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M64 50 Q74 38 80 46 Q70 48 66 56 Z" fill="#B0582C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
\r
    <!-- The blotch: fill, crescent, pitting, gleam, then the ink over the lot. -->\r
    <path d="M22 74 Q18 56 34 52 Q44 44 58 50 Q76 46 82 64 Q90 82 84 102 Q88 118 68 118 L36 118 Q16 118 20 100 Q16 86 22 74 Z" fill="#B0582C"/>\r
    <path d="M84 102 Q88 118 68 118 L52 118 L52 112 L68 112 Q80 112 78 100 Z" fill="#7A3B1C"/>\r
    <circle cx="30" cy="66" r="3.4" fill="#7A3B1C"/>\r
    <circle cx="74" cy="72" r="2.8" fill="#7A3B1C"/>\r
    <circle cx="62" cy="108" r="3" fill="#7A3B1C"/>\r
    <path d="M32 62 Q28 76 30 92" fill="none" stroke="#D98A4A" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M22 74 Q18 56 34 52 Q44 44 58 50 Q76 46 82 64 Q90 82 84 102 Q88 118 68 118 L36 118 Q16 118 20 100 Q16 86 22 74 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <path d="M32 72 L44 74 M60 74 L72 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="84" rx="6.6" ry="7.59" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="84" rx="6.6" ry="7.59" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M45 97 Q52 102 59 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 56 L50 70 L40 84 L52 98 L42 114"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:78px 92px">\r
    <path d="M78 92 L96 90" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M78 92 L96 90" stroke="#B0582C" stroke-width="12" stroke-linecap="round"/>\r
    <circle cx="104" cy="90" r="10" fill="#B0582C" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M100 82 Q104 90 100 98" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="106" cy="86" r="2.2" fill="#7A3B1C"/>\r
  </g>\r
  <g class="fx" style="transform-origin:117px 90px">\r
    <path d="M117 78 L135 68 M121 90 L139 90 M117 102 L135 112"\r
          stroke="#B0582C" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M117 78 L129 73 M121 90 L133 90 M117 102 L129 107"\r
          stroke="#D98A4A" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="133" cy="72" r="2.6" fill="#B0582C"/>\r
    <circle cx="135" cy="106" r="2.4" fill="#D98A4A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
