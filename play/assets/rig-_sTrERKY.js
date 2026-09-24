const e=`<!-- Lif (Scourer) - Bleached Sink - Spoil - melee, a second pad swung
     attackSpeed 1.10 -> round(20/1.10) = 18 ticks = 0.90 s

     Archetype \`swing\`: the arm draws a wide arc and the \`fx\` flares at
     contact.

     \`WEAPON lif [120, 52]\` is the held pad's far corner. It rests high, which
     \`swing\`'s +56 at contact brings level with the body it is coming down on.

     Silhouette: the block. Four straight corners, no curve on it anywhere,
     and a lean to the right from the top edge being higher than the bottom -
     the only squared mass in the Sink, which is what tells it from the
     Sponge's rounded one at 53 px even though both are blocks.

     Mass x 16..92, y 42..120. Materials 2 / fills 4: pad 34573D 5E9A63
     8FC894 * brass eye F2C46A. Mesh, three strokes one way and two the
     other. One gleam (upper left). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="swing" data-unit="lif" style="--dur-atk:0.90s">

  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 88px">
    <path d="M30 88 L22 94" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 88 L22 94" stroke="#34573D" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="97" r="6.5" fill="#5E9A63" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#34573D" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#5E9A63" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#34573D" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#5E9A63" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The pad: fill, crescent, the mesh, a gleam, then the ink. Four
         straight corners and no curve anywhere - the one squared outline in
         the Sink. -->
    <path d="M18 50 L86 44 L90 112 L22 118 Z" fill="#5E9A63"/>
    <path d="M86 44 L90 112 L52 115 L52 109 L84 106 L80 46 Z" fill="#34573D"/>
    <path d="M22 62 L88 57 M22 76 L89 71 M23 104 L90 99 M36 48 L38 116 M68 46 L72 114"
          fill="none" stroke="#34573D" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M28 56 L26 76" fill="none" stroke="#8FC894" stroke-width="4.5" stroke-linecap="round"/>
    <path d="M18 50 L86 44 L90 112 L22 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 74 L46 76 M58 76 L70 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="86" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="86" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="87" rx="3.38" ry="4.51" fill="#2A2114"/>
    <ellipse cx="64.4" cy="87" rx="3.38" ry="4.51" fill="#2A2114"/>
    <circle cx="40" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 99 Q52 103 58 99" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 58 L50 72 L40 86 L52 100 L42 116"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:82px 88px">
    <path d="M82 88 L98 84" stroke="#2A2114" stroke-width="18" stroke-linecap="round"/>
    <path d="M82 88 L98 84" stroke="#5E9A63" stroke-width="14" stroke-linecap="round"/>
    <!-- A second scouring pad, held up and brought down. -->
    <!-- A second pad, held corner out. Its far corner is the aim, resting
         high so \`swing\`'s contact brings it down level. -->
    <path d="M96 72 L120 52 L112 74 L102 84 Z"
          fill="#8FC894" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M102 70 L114 60 M104 78 L116 66" fill="none" stroke="#34573D" stroke-width="2.4" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:120px 66px">
    <path d="M120 54 L138 44 M124 66 L142 66 M120 78 L138 88"
          stroke="#5E9A63" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M120 54 L132 49 M124 66 L136 66 M120 78 L132 83"
          stroke="#8FC894" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="136" cy="48" r="2.6" fill="#5E9A63"/>
    <circle cx="138" cy="82" r="2.4" fill="#8FC894"/>
  </g>
</svg>
`;export{e as default};
