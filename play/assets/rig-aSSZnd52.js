const e=`<!-- Kirec (Limescale) - Bleached Sink - Spoil - range 2, a chip flicked
     attackSpeed 1.07 -> round(20/1.07) = 19 ticks = 0.95 s

     Archetype \`throw\`, Cira's, Orumcek's and Tel's. It carries an ammo track,
     so the flake the hand is drawn holding is the thing that leaves -
     \`MUZZLE kirec { part: 'ammo', x: 110, y: 72 }\` - and \`SHOTS kirec\` puts
     \`flakes\` in the air rather than one pellet, because lime comes off in
     pieces.

     The family's reach at two hexes, and the first body of it the player
     cannot simply walk into.

     \`MUZZLE\`, not \`WEAPON\`: a shooter aims with its shot.

     Silhouette: the ragged crown. A plain column - the straightest sides in
     the Sink - under six teeth cut to six different heights, so all of its
     wide reading is above the shoulders. The Wire in Region 3 is narrow with
     one hook; this is narrow with a saw.

     Mass x 28..76, y 22..118. Materials 2 / fills 4: lime 9A9484 C9C4B4
     EDEAE0 * brass eye F2C46A. Three scaling rings, one gleam (upper left). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="throw" data-unit="kirec" style="--dur-atk:0.95s">

  <ellipse class="shadow" cx="52" cy="137" rx="20" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 90px">
    <path d="M30 90 L22 96" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 90 L22 96" stroke="#9A9484" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="99" r="6.5" fill="#C9C4B4" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#9A9484" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#C9C4B4" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#9A9484" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#C9C4B4" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The crown of ridges, before the column, so the column covers where
         they are seated. Six teeth at six heights: a level crown would read
         as a lid. -->
    <path d="M32 48 L38 28 L44 44 L50 24 L56 42 L62 30 L68 48 Z"
          fill="#EDEAE0" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The column: fill, crescent, the scaling rings, a gleam, then the ink. -->
    <path d="M34 46 L68 46 L74 118 L30 118 Z" fill="#C9C4B4"/>
    <path d="M68 46 L74 118 L52 118 L52 112 L68 112 L62 46 Z" fill="#9A9484"/>
    <path d="M32 60 Q52 68 70 60 M31 76 Q52 84 72 76 M30 104 Q52 112 74 104"
          fill="none" stroke="#9A9484" stroke-width="3" stroke-linecap="round"/>
    <path d="M38 54 L36 72" fill="none" stroke="#EDEAE0" stroke-width="4" stroke-linecap="round"/>
    <path d="M34 46 L68 46 L74 118 L30 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 78 L46 80 M58 80 L70 78" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="90" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="90" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="91" rx="3.05" ry="4.07" fill="#2A2114"/>
    <ellipse cx="64.4" cy="91" rx="3.05" ry="4.07" fill="#2A2114"/>
    <circle cx="40" cy="87.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="87.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 103 Q52 107 58 103" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 60 L50 74 L40 88 L52 102 L42 118"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:74px 90px">
    <path d="M72 90 L88 84" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 90 L88 84" stroke="#C9C4B4" stroke-width="8" stroke-linecap="round"/>
    <circle cx="92" cy="82" r="6.5" fill="#C9C4B4" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <path d="M98 78 L112 70 L108 80 L114 78 L104 86 Z"
            fill="#EDEAE0" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    </g>
  </g>

  <g class="fx" style="transform-origin:112px 80px">
    <path d="M112 68 L130 58 M116 80 L134 80 M112 92 L130 102"
          stroke="#C9C4B4" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M112 68 L124 63 M116 80 L128 80 M112 92 L124 97"
          stroke="#EDEAE0" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="128" cy="62" r="2.6" fill="#C9C4B4"/>
    <circle cx="130" cy="96" r="2.4" fill="#EDEAE0"/>
  </g>
</svg>
`;export{e as default};
