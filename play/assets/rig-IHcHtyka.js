const e=`<!-- Vida (Screw) - Rusted Cupboard - Spoil - range 3, one worked loose
     attackSpeed 0.90 -> round(20/0.90) = 22 ticks = 1.10 s

     Archetype \`lob\`, Duman's and Zifir's: it carries an ammo track and the
     rig throws upward, so the screw in the fist is the thing that leaves -
     \`MUZZLE vida { part: 'ammo', x: 106, y: 64 }\` - and \`SHOTS vida\` gives it
     the steep arc the archetype belongs to.

     The family's longest reach at three hexes, and the body a wall cannot
     answer by standing still. Priced against Zifir and Orumcek, the two
     range-3 bodies of the families before it, to the digit.

     \`MUZZLE\`, not \`WEAPON\`: a shooter aims with its shot.

     Silhouette: the notched head over a point. The head is cut through by its
     own slot, so the crown reads as two blocks with a gap between them rather
     than as one plate - which is what tells it from the Nail at 53 px. The two
     were drawn too alike at first and were measured side by side at board size
     until they were not. Under it the shank runs past its own base to a point,
     so this body ends below its feet where every other body in the family ends
     on them. The thread is four strokes running one way across it, the only
     diagonal repeat in the family.

     Mass x 26..78, y 40..118. Materials 2 / fills 4: iron 4E4740 8C857C
     BFB7AA * rust B0582C, one run. Brass eye F2C46A. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="lob" data-unit="vida" style="--dur-atk:1.10s">

  <ellipse class="shadow" cx="52" cy="137" rx="20" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 84px">
    <path d="M30 84 L22 90" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 84 L22 90" stroke="#4E4740" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="93" r="6.5" fill="#8C857C" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#4E4740" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#8C857C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#4E4740" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#8C857C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The slotted head, before the shank, so the shank covers its underside. -->
    <path d="M32 34 L48 34 L48 48 L57 48 L57 34 L73 34 L70 58 L35 58 Z" fill="#BFB7AA" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M48 40 L57 40" fill="none" stroke="#2A2114" stroke-width="5" stroke-linecap="round"/>
    <path d="M63 34 L73 34 L70 58 L62 58 Z" fill="#4E4740"/>

    <!-- The shank: fill, crescent, the thread over it, then the ink. -->
    <path d="M33 56 L71 56 L59 110 L52 124 L45 110 Z" fill="#8C857C"/>
    <path d="M72 56 L58 118 L52 118 L52 112 L54 112 L66 56 Z" fill="#4E4740"/>
    <path d="M33 64 L70 70 M35 78 L67 84 M38 92 L63 98 M43 104 L58 108"
          fill="none" stroke="#4E4740" stroke-width="3" stroke-linecap="round"/>
    <path d="M38 62 L36 82" fill="none" stroke="#BFB7AA" stroke-width="4" stroke-linecap="round"/>
    <path d="M62 92 Q66 100 62 108" fill="none" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M33 56 L71 56 L59 110 L52 124 L45 110 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M36 64 L48 66 M56 66 L68 64" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="43" cy="76" rx="5.4" ry="6.21" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="61" cy="76" rx="5.4" ry="6.21" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="44.4" cy="77" rx="2.94" ry="3.93" fill="#2A2114"/>
    <ellipse cx="62.4" cy="77" rx="2.94" ry="3.93" fill="#2A2114"/>
    <circle cx="42" cy="73.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="60" cy="73.4" r="1.6" fill="#FFFFFF"/>
    <path d="M47 90 Q52 93 57 90" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 62 L50 76 L40 90 L52 104 L42 120"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:74px 84px">
    <path d="M74 84 L88 78" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M74 84 L88 78" stroke="#8C857C" stroke-width="8" stroke-linecap="round"/>
    <circle cx="92" cy="76" r="6.5" fill="#8C857C" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <path d="M96 78 L108 62" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
      <path d="M96 78 L108 62" stroke="#BFB7AA" stroke-width="5" stroke-linecap="round"/>
      <path d="M100 74 L106 78 M104 68 L110 72" fill="none" stroke="#4E4740" stroke-width="2.4" stroke-linecap="round"/>
    </g>
  </g>
  <g class="fx" style="transform-origin:110px 70px">
    <path d="M110 58 L128 48 M114 70 L132 70 M110 82 L128 92"
          stroke="#8C857C" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M110 58 L122 53 M114 70 L126 70 M110 82 L122 87"
          stroke="#BFB7AA" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="126" cy="52" r="2.6" fill="#8C857C"/>
    <circle cx="128" cy="86" r="2.4" fill="#BFB7AA"/>
  </g>
</svg>
`;export{e as default};
