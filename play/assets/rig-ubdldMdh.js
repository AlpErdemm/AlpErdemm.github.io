const t=`<!-- Çıra (Kindling) · Burnt Oven · Spoil · ranged (range 2)
     attackSpeed 1.05 -> round(20/1.05) = 19 ticks = 0.95 s

     Archetype \`throw\`, shared with Kör and used the other way round: Kör has
     no \`.ammo\` group, so its overhand arc lands a fist; this one holds a lit
     splinter and the same track hands it off. \`MUZZLE cira\` reads that
     \`.ammo\` group rather than the arm, so the shot leaves the thing the eye
     was already watching, and \`SHOTS cira\` takes \`flakes\` for the reason Nar
     does: kindling does not leave a hand as one object.

     Silhouette: the bound faggot. A trapezoid narrow at the shoulder and wide
     at the floor, with five split staves fanning out above it past both sides
     of the mass. Nothing else on the family has a fringe that leaves its own
     outline, and the fan is what makes it legible next to the Ash heap, which
     is the other body that widens downward. Only warm-brown body in the
     family too: everything else here is what fire leaves behind, and this is
     the one thing that has not burned yet.

     No Origin, no Role, no team colour, no tier mark, and no
     \`data-expression="cute"\` group. Mass = the bound faggot, x 22..84 (62
     wide), y 44..118 (74 tall), ratio 1.19. Staves to y 30 and the lit one to
     y 18. Eye y 86 = 57% of the mass. Materials 2 / fills 5: resin 8C5230
     B87A46 5E3420 * ember F2A02A D9541F. One crescent (5E3420, lower right),
     one gleam (B87A46, upper left). Tint lines, two: the cord that binds
     it, low on the bundle so it cannot be read as a second mouth. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="throw" data-unit="cira" style="--dur-atk:0.95s">

  <ellipse class="shadow" cx="52" cy="137" rx="26" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 92px">
    <path d="M30 92 L22 98" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 92 L22 98" stroke="#5E3420" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="101" r="6.5" fill="#8C5230" stroke="#2A2114" stroke-width="3"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#5E3420" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#8C5230" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#5E3420" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#8C5230" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The fan first, so the bundle covers where the staves are bound. Five
         of them, none of them a mirror of another, all leaving the mass: a
         fringe that stays inside the outline changes nothing at 53 px. -->
    <path d="M40 50 L24 32" stroke="#2A2114" stroke-width="10" stroke-linecap="round"/>
    <path d="M40 50 L24 32" stroke="#8C5230" stroke-width="6" stroke-linecap="round"/>
    <path d="M46 48 L41 30" stroke="#2A2114" stroke-width="10" stroke-linecap="round"/>
    <path d="M46 48 L41 30" stroke="#B87A46" stroke-width="6" stroke-linecap="round"/>
    <path d="M54 48 L59 32" stroke="#2A2114" stroke-width="10" stroke-linecap="round"/>
    <path d="M54 48 L59 32" stroke="#8C5230" stroke-width="6" stroke-linecap="round"/>
    <path d="M62 50 L78 36" stroke="#2A2114" stroke-width="10" stroke-linecap="round"/>
    <path d="M62 50 L78 36" stroke="#5E3420" stroke-width="6" stroke-linecap="round"/>
    <!-- One stave has caught. Flat licks, no glow, no bloom. -->
    <path d="M38 40 Q34 30 42 18 Q44 30 50 26 Q54 36 46 42 Z"
          fill="#F2A02A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M46 42 Q48 30 58 22 Q60 34 64 30 Q68 40 58 44 Z"
          fill="#D9541F" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The bundle: fill, crescent, cord, gleam, then the ink over the lot. -->
    <path d="M36 44 L68 44 L82 108 Q84 118 70 118 L34 118 Q20 118 22 108 Z"
          fill="#8C5230"/>
    <path d="M82 108 Q84 118 70 118 L52 118 L52 112 L68 112 Q78 112 76 106 Z"
          fill="#5E3420"/>
    <path d="M27 108 L78 108 M28 114 L78 114" fill="none" stroke="#5E3420"
          stroke-width="2.2" stroke-linecap="round"/>
    <path d="M33 56 Q30 70 30 84" fill="none" stroke="#B87A46" stroke-width="5" stroke-linecap="round"/>
    <path d="M36 44 L68 44 L82 108 Q84 118 70 118 L34 118 Q20 118 22 108 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 74 L44 76 M60 76 L72 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="86" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="86" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <path d="M45 99 Q52 104 59 99" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <path class="crack" d="M38 52 L50 66 L40 80 L52 94 L42 110"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Front arm and the splinter in the fist. \`.ammo\` is its own group, which
       \`throw\` hides at the hand-off and brings back while nothing is seen. -->
  <g class="armF" style="transform-origin:74px 92px">
    <path d="M74 92 L90 86" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M74 92 L90 86" stroke="#5E3420" stroke-width="8" stroke-linecap="round"/>
    <circle cx="93" cy="84" r="6.5" fill="#8C5230" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <path d="M99 88 L115 60" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
      <path d="M99 88 L115 60" stroke="#B87A46" stroke-width="4.5" stroke-linecap="round"/>
      <path d="M108 70 Q104 62 110 54 Q112 62 116 58 Q120 66 112 72 Z"
            fill="#F2A02A" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
    </g>
  </g>

  <g class="fx" style="transform-origin:108px 70px">
    <path d="M108 70 L128 58 M112 78 L134 74 M110 86 L130 90"
          stroke="#D9541F" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M108 70 L121 62 M112 78 L127 76 M110 86 L124 88"
          stroke="#F2A02A" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="132" cy="62" r="2.6" fill="#B02E1F"/>
    <circle cx="134" cy="84" r="2.4" fill="#F2A02A"/>
  </g>
</svg>
`;export{t as default};
