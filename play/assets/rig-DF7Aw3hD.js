const e=`<!-- Bamya (Okra) · Garden 3 · Assassin · melee, two pruning sickles
     attackSpeed 0.83 → round(20/0.83) = 24 ticks = 1.20 s

     Archetype \`swing\`, not \`stab\`: an Assassin's strip reaps, it does not
     poke. The sickles rest pointing UP because \`swing\` adds +56° at contact:
     a blade held at -47° comes level with the target's body. Same reasoning
     and same rest as the Chestnut; the two of them reap, the Dumpling stabs.
     The forward sickle's point is \`WEAPON\` bamya (110, 58).

     Redrawn for ticket 17 against docs/style-bible.md. Mass = the pod,
     x 22..82, y 32..108 with a 4 stroke: 64 × 80, ratio 1.25 — the roster's
     one hooded silhouette, kept. The hood is the pod's upper third; below
     the brim the pod is open and the pale inner flesh is the face plate,
     which is the material's light value as §11.1 asks. The plate is drawn
     2 wider than the pod on each side and the pod's own outline covers the
     overflow, so plate and pod share ONE ink edge instead of two parallel
     ones. Eye y 78 = 59% of the mass. Materials 3 / fills 8: okra 5E9E3E
     3A6B28 BFE09A · leather 6E4A2A 4A3826 (hafts, legs, boots) · steel
     8A8F98 C8CCD6. Shade = two 4-wide rib bands on the hood plus the cap
     ring, the Meatball's furrow construction; no separate gleam — the plate
     is already the light value, and a light stroke on the hood beside it
     read as a third rib. Tint lines, two: the blade glints. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="swing" data-unit="bamya" style="--dur-atk:1.20s">

  <ellipse class="shadow" cx="52" cy="137" rx="27" ry="6" fill="#2A2114" opacity=".32"/>

  <!-- Rear sickle. Blade ink stays inside x ≥ 6. -->
  <g class="armB" style="transform-origin:32px 96px">
    <path d="M32 96 L23 92" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M32 96 L23 92" stroke="#5E9E3E" stroke-width="8" stroke-linecap="round"/>
    <circle cx="21" cy="91" r="6" fill="#5E9E3E" stroke="#2A2114" stroke-width="3"/>
    <path d="M22 94 L16 84" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
    <path d="M22 94 L16 84" stroke="#6E4A2A" stroke-width="4.6" stroke-linecap="round"/>
    <path d="M20 85 C15 78 12 68 13 58 L8 60 C8 72 14 84 18 90 Z"
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M11 60 C11 71 15 81 19 87" stroke="#C8CCD6" stroke-width="1.8" fill="none" stroke-linecap="round"/>
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
    <!-- Pod fill, then the open front (flesh plate), then the hood's ribs,
         then the one outline over everything. -->
    <path d="M52 32 C68 44 82 68 82 92 C82 104 70 108 52 108 C34 108 22 104 22 92 C22 68 36 44 52 32 Z"
          fill="#5E9E3E"/>
    <path d="M27 62 Q52 48 77 62 C84 72 86 84 84 92 C84 104 70 108 52 108 C34 108 20 104 20 92 C18 84 20 72 27 62 Z"
          fill="#BFE09A"/>
    <path d="M47 38 C42 46 37 54 33 61 M57 38 C62 46 67 54 71 61"
          fill="none" stroke="#3A6B28" stroke-width="4" stroke-linecap="round"/>
    <path d="M27 62 Q52 48 77 62" fill="none" stroke="#2A2114" stroke-width="3" stroke-linecap="round"/>
    <path d="M52 32 C68 44 82 68 82 92 C82 104 70 108 52 108 C34 108 22 104 22 92 C22 68 36 44 52 32 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <!-- Cap and stem stub, the crown. -->
    <path d="M43 41 Q52 33 61 41" fill="none" stroke="#3A6B28" stroke-width="4" stroke-linecap="round"/>
    <path d="M52 34 L52 20" stroke="#2A2114" stroke-width="7" stroke-linecap="round"/>
    <path d="M52 34 L52 20" stroke="#3A6B28" stroke-width="3.5" stroke-linecap="round"/>

    <!-- The cast face (style bible §5), eye y 78. -->
    <path d="M32 66 L44 68 M60 68 L72 66" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="78" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="78" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="79" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="79" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="75.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="75.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 91 Q52 96 60 91" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <g data-expression="cute">
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#BFE09A" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 90 Q52 98 60 90 Q59 101 52 102 Q45 101 44 90 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 96 Q52 98 55 96" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M40 44 L50 58 L40 72 L52 86 L42 100"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Forward sickle; the point rests at (110, 58). -->
  <g class="armF" style="transform-origin:72px 96px">
    <path d="M72 96 L82 92" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 96 L82 92" stroke="#5E9E3E" stroke-width="8" stroke-linecap="round"/>
    <circle cx="84" cy="91" r="6" fill="#5E9E3E" stroke="#2A2114" stroke-width="3"/>
    <path d="M82 94 L92 84" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
    <path d="M82 94 L92 84" stroke="#6E4A2A" stroke-width="4.6" stroke-linecap="round"/>
    <path d="M91 85 C99 78 106 68 106 56 L114 59 C113 73 104 86 95 92 Z"
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M110 60 C110 72 102 83 94 89" stroke="#C8CCD6" stroke-width="2" fill="none" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:100px 78px">
    <path d="M82 42 Q126 76 86 116" fill="none" stroke="#3A6B28" stroke-width="11" stroke-linecap="round" opacity=".4"/>
    <path d="M84 46 Q122 77 88 112" fill="none" stroke="#BFE09A" stroke-width="6" stroke-linecap="round" opacity=".85"/>
    <path d="M87 52 Q116 77 90 106" fill="none" stroke="#FFFFFF" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M124 62 C128 58 133 59 132 64 C129 67 125 66 124 62 Z" fill="#5E9E3E"/>
    <path d="M126 92 C130 89 135 91 133 96 C129 97 126 95 126 92 Z" fill="#BFE09A"/>
  </g>
</svg>
`;export{e as default};
