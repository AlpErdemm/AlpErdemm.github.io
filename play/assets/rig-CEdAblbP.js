const e=`<!-- Kestane (Chestnut) · Hearth 2 · Assassin · melee, twin ember blades
     attackSpeed 0.88 → round(20/0.88) = 23 ticks = 1.15 s

     Archetype \`swing\`, not \`stab\`: the blades rest pointing up at -45° so
     \`swing\`'s +56° at contact lands them level with the target; a blade that
     rested down would swing into the ground and \`setAim\` would have to turn
     99° to fix it (AIM_MAX 95). The forward blade's point is \`WEAPON\` kestane
     [114, 58] and its geometry is unchanged from the previous rig.

     Redrawn for ticket 16 against docs/style-bible.md. Mass = one chestnut,
     x 19..85 (66 wide), y 40..114 (74 tall), ratio 1.12; the spiked burr is
     the crown, worn as a cap (spike tips y 14). The old rig's ember scarf,
     ember pouch, belt buckle and the polarised dark-shell / light-inside
     split went: the Board is no longer the brown that swallowed a brown
     chestnut, and one mahogany with a wide gleam is what a chestnut is. The
     face sits on the shell the way the Meatball's sits on meat and the
     Eggplant's on purple; there is no pale plate, because a plate wide enough
     for the brows (48) at the eye band would have been the whole lower body.
     Eye y 84 = 59% of the mass. Materials 4 / fills 9: shell 8A4520 5A2A12
     C97B48 · leather 6E4A2A 4A3826 C9A66B (burr and belt) · steel 8A8F98
     C8CCD6 (blades) · chestnut flesh E3C89A, seen only in \`cooked\`. One
     crescent (5A2A12, lower right), one gleam (C97B48, upper left). Tint
     lines, two: the blade glints.

     \`cooked\` (the Hearth's second state, \`UnitRig.cook\`) splits the shell on
     the upper right and shows the flesh, which is the unit's own line: wait
     for the shell to crack. The face is untouched; the layer draws over
     \`body\` and anything placed on the face erases it. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="swing" data-unit="kestane" style="--dur-atk:1.15s">

  <ellipse class="shadow" cx="52" cy="137" rx="28" ry="6" fill="#2A2114" opacity=".32"/>

  <!-- Rear arm and the reverse-grip blade; its point stops at x 8 (ink to 6.5). -->
  <g class="armB" style="transform-origin:32px 98px">
    <path d="M32 98 L24 106" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M32 98 L24 106" stroke="#8A4520" stroke-width="8" stroke-linecap="round"/>
    <circle cx="22" cy="108" r="6" fill="#8A4520" stroke="#2A2114" stroke-width="3"/>
    <path d="M22 105 C17 93 11 82 8 69 L17 66 C20 81 26 94 29 103 Z"
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M12 72 C15 85 20 95 25 103" fill="none" stroke="#C8CCD6" stroke-width="2.2" stroke-linecap="round"/>
  </g>

  <!-- Legs and boots are the cast's shared construction (style bible §6):
       from y 104 to 126 off pivots x 44 / 62, soles flat on 136, boots 16 × 11. -->
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 104 L41 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 104 L41 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 126 Q26 131 29 136 L44 136 Q46 130 42 125 Z"
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 104 L65 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 104 L65 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 125 Q60 130 62 136 L77 136 Q79 131 74 126 Z"
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- The burr's spikes first, so the cap covers their bases. -->
    <g fill="#C9A66B" stroke="#2A2114" stroke-width="3" stroke-linejoin="round">
      <path d="M31 52 L19 48 L32 44 Z"/>
      <path d="M34 44 L23 34 L37 38 Z"/>
      <path d="M41 36 L36 22 L45 32 Z"/>
      <path d="M47 28 L48 14 L54 27 Z"/>
      <path d="M57 27 L62 14 L64 29 Z"/>
      <path d="M66 33 L74 24 L69 37 Z"/>
      <path d="M71 40 L82 34 L73 45 Z"/>
      <path d="M73 48 L85 48 L73 53 Z"/>
    </g>

    <!-- The chestnut: mass, crescent, gleam, then the cap over its point. -->
    <path d="M52 40 C36 42 22 58 20 78 C18 96 22 114 52 114 C82 114 86 96 84 78 C82 58 68 42 52 40 Z"
          fill="#8A4520" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
    <path d="M84 78 C86 96 82 114 52 114 L52 109 C77 109 81 94 79 78 Z" fill="#5A2A12"/>
    <path d="M27 76 Q30 60 42 50" fill="none" stroke="#C97B48" stroke-width="5" stroke-linecap="round"/>
    <path d="M28 54 Q30 26 52 24 Q74 26 76 54 Q52 46 28 54 Z"
          fill="#C9A66B" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The cast face (style bible §5), eye y 84. -->
    <path d="M32 72 L44 74 M60 74 L72 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 97 Q52 102 60 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- The knife belt, at the hem. -->
    <path d="M26 106 Q52 112 78 106" fill="none" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
    <path d="M26 106 Q52 112 78 106" fill="none" stroke="#6E4A2A" stroke-width="4.5" stroke-linecap="round"/>

    <g class="cooked" style="transform-origin:52px 68px">
      <path d="M60 52 C68 50 75 56 78 64 C73 68 66 69 60 66 C57 62 57 56 60 52 Z"
            fill="#E3C89A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
      <path d="M62 55 L66 58 L63 62 L68 65" fill="none" stroke="#5A2A12" stroke-width="2.2" stroke-linejoin="round"/>
      <path d="M81 56 C85 60 84 66 81 70" fill="none" stroke="#E4632A" stroke-width="3" stroke-linecap="round"/>
      <circle cx="79" cy="50" r="2.4" fill="#E4632A"/>
    </g>

    <g data-expression="cute">
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#8A4520" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 96 Q52 104 60 96 Q59 107 52 108 Q45 107 44 96 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 102 Q52 104 55 102" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M36 56 L46 70 L36 86 L48 100 L38 110"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Forward arm and the dominant blade; point at (114, 58). -->
  <g class="armF" style="transform-origin:72px 98px">
    <path d="M72 98 L82 104" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 98 L82 104" stroke="#8A4520" stroke-width="8" stroke-linecap="round"/>
    <circle cx="84" cy="105" r="6" fill="#8A4520" stroke="#2A2114" stroke-width="3"/>
    <path d="M84 104 C94 96 104 78 109 56 L118 60 C113 82 103 100 90 110 Z"
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M111 60 C106 80 97 97 88 107" fill="none" stroke="#C8CCD6" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M86 104 L92 100" stroke="#6E4A2A" stroke-width="3" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:100px 80px">
    <path d="M84 48 Q122 79 88 114" fill="none" stroke="#E4632A" stroke-width="7"
          stroke-linecap="round" opacity=".9"/>
    <path d="M87 54 Q116 79 90 108" fill="none" stroke="#FFD9A0" stroke-width="2.6"
          stroke-linecap="round"/>
    <ellipse cx="124" cy="70" rx="3" ry="2.3" fill="#FFD9A0"/>
    <ellipse cx="126" cy="90" rx="2.6" ry="2" fill="#E4632A"/>
  </g>
</svg>
`;export{e as default};
