const e=`<!-- Buhar (Steam) - Bleached Sink - Spoil - range 3, a ball thrown over
     attackSpeed 0.90 -> round(20/0.90) = 22 ticks = 1.10 s

     Archetype \`lob\`, Duman's, Zifir's and Vida's: it carries an ammo track
     and the rig throws upward, so the ball of vapour in the hand is the thing
     that leaves - \`MUZZLE buhar { part: 'ammo', x: 106, y: 64 }\` - and
     \`SHOTS buhar\` gives it the steep arc the archetype belongs to.

     The family's longest reach at three hexes, and the body a wall cannot
     answer by standing still. Priced against Zifir, Orumcek and Vida, the
     three range-3 bodies of the families before it, to the digit.

     \`MUZZLE\`, not \`WEAPON\`: a shooter aims with its shot.

     Silhouette: the plume. Tallest mass in the Sink and the narrowest of the
     tall ones, scalloped down both sides so the outline never runs straight
     for long. It starts at the floor and leans right as it climbs, which no
     other body here does.

     Mass x 16..92, y 22..118. Materials 2 / fills 4: vapour 93AEB4 BFD2D6
     E9F2F4 * brass eye F2C46A. Two curls, one gleam (upper left). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="lob" data-unit="buhar" style="--dur-atk:1.10s">

  <ellipse class="shadow" cx="52" cy="137" rx="20" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 84px">
    <path d="M30 84 L22 90" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 84 L22 90" stroke="#93AEB4" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="93" r="6.5" fill="#BFD2D6" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#93AEB4" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#BFD2D6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#93AEB4" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#BFD2D6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The plume: fill, crescent, the curls inside it, a gleam, then the
         ink. Scalloped on both sides and tallest in the family, so it reads
         upward where every other body reads across. -->
    <path d="M32 118 Q22 98 32 84 Q18 70 32 58 Q26 42 44 38 Q46 24 60 32 Q78 30 76 46 Q90 58 80 72 Q92 90 78 104 Q80 118 66 118 Z" fill="#BFD2D6"/>
    <path d="M80 72 Q92 90 78 104 Q80 118 66 118 L52 118 L52 112 L68 112 Q76 104 72 94 Q80 84 72 72 Z" fill="#93AEB4"/>
    <path d="M42 56 Q52 62 62 56 M40 96 Q52 102 64 96" fill="none" stroke="#93AEB4" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M38 48 Q32 60 38 70" fill="none" stroke="#E9F2F4" stroke-width="5" stroke-linecap="round"/>
    <path d="M32 118 Q22 98 32 84 Q18 70 32 58 Q26 42 44 38 Q46 24 60 32 Q78 30 76 46 Q90 58 80 72 Q92 90 78 104 Q80 118 66 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 68 L46 70 M58 70 L70 68" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="80" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="80" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="81" rx="3.05" ry="4.07" fill="#2A2114"/>
    <ellipse cx="64.4" cy="81" rx="3.05" ry="4.07" fill="#2A2114"/>
    <circle cx="40" cy="77.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="77.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 93 Q52 97 58 93" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 52 L50 66 L40 80 L52 94 L42 110"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:74px 84px">
    <path d="M72 84 L88 78" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 84 L88 78" stroke="#BFD2D6" stroke-width="8" stroke-linecap="round"/>
    <circle cx="92" cy="76" r="6.5" fill="#BFD2D6" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <path d="M98 70 Q94 60 102 58 Q108 52 112 60 Q118 64 112 70 Q106 76 98 70 Z"
            fill="#E9F2F4" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    </g>
  </g>

  <g class="fx" style="transform-origin:110px 72px">
    <path d="M110 60 L128 50 M114 72 L132 72 M110 84 L128 94"
          stroke="#BFD2D6" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M110 60 L122 55 M114 72 L126 72 M110 84 L122 89"
          stroke="#E9F2F4" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="126" cy="54" r="2.6" fill="#BFD2D6"/>
    <circle cx="128" cy="88" r="2.4" fill="#E9F2F4"/>
  </g>
</svg>
`;export{e as default};
