const t=`<!-- Mantar (Mushroom) . Damp Cellar . Spoil . range 2, a cap flicked
     attackSpeed 1.06 > round(20/1.06) = 19 ticks = 0.95 s

     Archetype \`throw\`, Cira's, Orumcek's, Tel's and Kirec's. It carries an
     ammo track, so the piece of cap the hand is drawn holding is the thing
     that leaves . \`MUZZLE mantar { part: 'ammo', x: 110, y: 72 }\` . and
     \`SHOTS mantar\` puts \`flakes\` in the air rather than one pellet, because a
     mushroom breaks into pieces.

     The family's reach at two hexes, and the first body of it the player
     cannot simply walk into.

     \`MUZZLE\`, not \`WEAPON\`: a shooter aims with its shot.

     Silhouette: the brim. One wide low dome overhanging a narrow straight
     stalk on both sides . the only overhang in the Cellar, and the reading
     that tells it at once from the Seep's kinked column beside it.

     Mass x 16..88, y 30..118. Materials 2 / fills 4: cap 7A6244 B39A72
     E4D8BC * brass eye F2C46A. Three gill lines under the brim, one gleam
     (upper left). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="throw" data-unit="mantar" style="--dur-atk:0.95s">

  <ellipse class="shadow" cx="52" cy="137" rx="18" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 90px">
    <path d="M30 90 L22 96" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 90 L22 96" stroke="#7A6244" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="99" r="6.5" fill="#B39A72" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#7A6244" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#B39A72" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#7A6244" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#B39A72" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The stalk first, then the cap over the top of it, so the brim covers
         where the two meet. -->
    <path d="M38 58 L66 58 L70 118 L34 118 Z" fill="#B39A72"/>
    <path d="M66 58 L70 118 L52 118 L52 112 L64 112 L60 58 Z" fill="#7A6244"/>
    <path d="M38 58 L66 58 L70 118 L34 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <!-- The cap: a shallow dome wider than anything under it, with a lip that
         turns down on both sides. -->
    <path d="M16 56 Q18 30 52 30 Q86 30 88 56 Q80 64 66 60 Q52 56 38 60 Q24 64 16 56 Z" fill="#B39A72"/>
    <path d="M88 56 Q80 64 66 60 Q58 58 52 57 L52 51 Q62 51 70 54 Q80 56 82 52 Q82 38 62 33 Q86 34 88 56 Z" fill="#7A6244"/>
    <path d="M28 52 Q30 44 38 40 M50 48 Q52 40 54 36 M72 52 Q72 44 66 39" fill="none" stroke="#7A6244" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M28 38 Q34 33 44 33" fill="none" stroke="#E4D8BC" stroke-width="5" stroke-linecap="round"/>
    <path d="M16 56 Q18 30 52 30 Q86 30 88 56 Q80 64 66 60 Q52 56 38 60 Q24 64 16 56 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 78 L46 80 M58 80 L70 78" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="90" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="90" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="91" rx="3.05" ry="4.07" fill="#2A2114"/>
    <ellipse cx="64.4" cy="91" rx="3.05" ry="4.07" fill="#2A2114"/>
    <circle cx="40" cy="87.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="87.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 103 Q52 107 58 103" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 62 L50 76 L40 90 L52 104 L42 120"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:74px 90px">
    <path d="M72 90 L88 84" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 90 L88 84" stroke="#B39A72" stroke-width="8" stroke-linecap="round"/>
    <circle cx="92" cy="82" r="6.5" fill="#B39A72" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <!-- A piece torn off the cap, flat and flicked at the body in front. -->
      <path d="M96 76 Q104 62 116 68 Q108 74 112 78 Q104 82 96 76 Z"
            fill="#E4D8BC" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    </g>
  </g>

  <g class="fx" style="transform-origin:112px 80px">
    <path d="M112 68 L130 58 M116 80 L134 80 M112 92 L130 102"
          stroke="#B39A72" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M112 68 L124 63 M116 80 L128 80 M112 92 L124 97"
          stroke="#E4D8BC" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="128" cy="62" r="2.6" fill="#B39A72"/>
    <circle cx="130" cy="96" r="2.4" fill="#E4D8BC"/>
  </g>
</svg>
`;export{t as default};
