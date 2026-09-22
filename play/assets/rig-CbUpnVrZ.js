const t=`<!-- Akinti (Trickle) . Damp Cellar . Spoil . range 3, a bead thrown over
     attackSpeed 0.91 > round(20/0.91) = 22 ticks = 1.10 s

     Archetype \`lob\`, Duman's, Zifir's, Vida's and Buhar's: it carries an ammo
     track and the rig throws upward, so the bead of water in the hand is the
     thing that leaves . \`MUZZLE akinti { part: 'ammo', x: 106, y: 64 }\` . and
     \`SHOTS akinti\` gives it the steep arc the archetype belongs to.

     The family's longest reach at three hexes, and the body a wall cannot
     answer by standing still. Priced against Zifir, Orumcek, Vida and Buhar,
     the four range-3 bodies of the families before it, to the digit.

     \`MUZZLE\`, not \`WEAPON\`: a shooter aims with its shot.

     Silhouette: the leaning thread. Tallest mass in the Cellar and the
     narrowest of the tall ones, a smooth column that leans *left* as it
     climbs and finishes in one point . Buhar leans right and is scalloped,
     this is plain and leans the other way, which is what tells the two
     range-3 bodies apart on adjacent Regions.

     Mass x 20..80, y 22..118. Materials 2 / fills 4: water 3E5A50 6F8F86
     CDE2D8 * brass eye F2C46A. Two run lines, one gleam (upper left). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="lob" data-unit="akinti" style="--dur-atk:1.10s">

  <ellipse class="shadow" cx="52" cy="137" rx="18" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 84px">
    <path d="M30 84 L22 90" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 84 L22 90" stroke="#3E5A50" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="93" r="6.5" fill="#6F8F86" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#3E5A50" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#6F8F86" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#3E5A50" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#6F8F86" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The thread: fill, crescent, the run lines, a gleam, then the ink.
         One point at the crown, and the whole column set left of the feet. -->
    <path d="M36 118 L44 84 L34 60 L26 38 L28 22 L40 34 L52 56 L62 84 L68 118 Z" fill="#6F8F86"/>
    <path d="M62 84 L68 118 L52 118 L52 112 L62 112 L56 86 Z" fill="#3E5A50"/>
    <path d="M40 46 L48 62 M44 96 L58 96" fill="none" stroke="#3E5A50" stroke-width="2.8" stroke-linecap="round"/>
    <path d="M32 44 L38 62" fill="none" stroke="#CDE2D8" stroke-width="5" stroke-linecap="round"/>
    <path d="M36 118 L44 84 L34 60 L26 38 L28 22 L40 34 L52 56 L62 84 L68 118 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M34 74 L46 76 M58 76 L70 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="86" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="86" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="87" rx="3.05" ry="4.07" fill="#2A2114"/>
    <ellipse cx="64.4" cy="87" rx="3.05" ry="4.07" fill="#2A2114"/>
    <circle cx="40" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 99 Q52 103 58 99" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 58 L50 72 L40 86 L52 100 L42 116"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:70px 84px">
    <path d="M68 84 L84 78" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M68 84 L84 78" stroke="#6F8F86" stroke-width="8" stroke-linecap="round"/>
    <circle cx="88" cy="76" r="6.5" fill="#6F8F86" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <!-- A bead gathered off the run, thrown over the front line. -->
      <path d="M96 70 Q92 60 100 58 Q106 52 110 60 Q114 66 108 70 Q102 76 96 70 Z"
            fill="#CDE2D8" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    </g>
  </g>

  <g class="fx" style="transform-origin:110px 72px">
    <path d="M110 60 L128 50 M114 72 L132 72 M110 84 L128 94"
          stroke="#6F8F86" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M110 60 L122 55 M114 72 L126 72 M110 84 L122 89"
          stroke="#CDE2D8" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="126" cy="54" r="2.6" fill="#6F8F86"/>
    <circle cx="128" cy="88" r="2.4" fill="#CDE2D8"/>
  </g>
</svg>
`;export{t as default};
