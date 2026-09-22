const r=`<!-- Kir (Grime) - Bleached Sink - Spoil - melee, a wiped edge\r
     attackSpeed 1.15 -> round(20/1.15) = 17 ticks = 0.85 s\r
\r
     Archetype \`punch\`: the two fists again, because grime carries nothing\r
     either. Same cycle as the Foam and a heavier body under it.\r
\r
     \`WEAPON kir [113, 91]\` is the smeared edge it pushes with.\r
\r
     Silhouette: the low smear. Flat across the top and wider than it is tall,\r
     with three drips of different lengths off the bottom edge - the only body\r
     in the Sink whose outline is broken downward rather than upward, which is\r
     what tells it from the Foam beside it at 53 px.\r
\r
     Mass x 12..94, y 64..130. Materials 2 / fills 4: grime 3E372C 6E6455\r
     968A76 * brass eye F2C46A. Three streaks, one gleam (upper left). -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="punch" data-unit="kir" style="--dur-atk:0.85s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="32" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 94px">\r
    <path d="M30 94 L22 100" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 94 L22 100" stroke="#3E372C" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="103" r="6.5" fill="#6E6455" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#3E372C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#6E6455" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#3E372C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#6E6455" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- The smear: fill, crescent, the streaks it was pushed in, a gleam,\r
         then the ink. Flat along the top, which is what a cloth leaves. -->\r
    <path d="M14 100 Q10 76 32 70 L74 66 Q92 68 92 90 Q94 118 72 118 L32 118 Q12 118 14 100 Z" fill="#6E6455"/>\r
    <path d="M92 90 Q94 118 72 118 L52 118 L52 112 L72 112 Q86 112 86 90 Z" fill="#3E372C"/>\r
    <path d="M22 84 L44 80 M60 78 L86 76 M26 104 L50 100" fill="none" stroke="#3E372C" stroke-width="3.2" stroke-linecap="round"/>\r
    <path d="M26 78 Q22 88 26 96" fill="none" stroke="#968A76" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M14 100 Q10 76 32 70 L74 66 Q92 68 92 90 Q94 118 72 118 L32 118 Q12 118 14 100 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- Three drips off the lower edge, none of them level with another. -->\r
    <path d="M36 118 L34 128 M58 118 L60 126 M78 118 L76 130" fill="none" stroke="#3E372C" stroke-width="5" stroke-linecap="round"/>\r
\r
    <path d="M34 80 L46 82 M58 82 L70 80" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="41" cy="92" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="63" cy="92" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="42.4" cy="93" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <ellipse cx="64.4" cy="93" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <circle cx="40" cy="89.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="62" cy="89.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M46 105 Q52 109 58 105" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 62 L50 76 L40 90 L52 104 L42 120"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:80px 94px">\r
    <path d="M80 94 L97 92" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M80 94 L97 92" stroke="#6E6455" stroke-width="12" stroke-linecap="round"/>\r
    <circle cx="105" cy="92" r="10" fill="#6E6455" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M101 84 Q105 92 101 100" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="107" cy="88" r="2.2" fill="#3E372C"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 92px">\r
    <path d="M118 80 L136 70 M122 92 L140 92 M118 104 L136 114"\r
          stroke="#6E6455" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M118 80 L130 75 M122 92 L134 92 M118 104 L130 109"\r
          stroke="#968A76" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="134" cy="74" r="2.6" fill="#6E6455"/>\r
    <circle cx="136" cy="108" r="2.4" fill="#968A76"/>\r
  </g>\r
</svg>\r
`;export{r as default};
