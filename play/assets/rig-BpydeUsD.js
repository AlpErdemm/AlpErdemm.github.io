const e=`<!-- Lokum (Delight) · Treat 2 · Vanguard · melee, serving tray
     attackSpeed 1.11 → round(20/1.11) = 18 ticks = 0.90 s

     Archetype \`stab\`, kept for the Flatcake's reason: the third frame of the
     attack strip is a shove, and the thing going forward is the tray. An arm
     ending in a disc does not swing 98°, it pushes; \`stab\` moves it 16
     forward with a 6° turn. The tray's leading edge rests at (121, 78), which
     is \`WEAPON\` lokum, so unitRig.ts needs no change. The rear hand is empty,
     as the Flatcake's is: the old candy mace was a fifth material and, at
     40 px, a red dot on a red body.

     Redrawn for ticket 19 against docs/style-bible.md. Mass = one lokum cube,
     the Treat's one square: x 20..84 (64 wide), y 36..108 (72 tall), ratio
     1.13, corners r 10. There is no crown item. The powdered sugar is a cream
     cap over the top of the cube with a soft, wavy lower edge — a fill
     boundary, not a line — and the face sits on the rose below it. Eye y 76
     = 56% of the mass. The steel hem band is the Vanguard's armour, and the
     serving tray, as tall as the mass, takes the \`body\` stroke (style bible
     §11.1). Materials 4 / fills 8: lokum D9707A A9464F F0A3A8 · sugar F2E7D6
     · steel 8A8F98 C8CCD6 (tray, hem band — the cast's shared steel) ·
     leather 6E4A2A 4A3826 (legs, the cast's shared leather). One shade
     crescent (A9464F, lower right), one gleam (F0A3A8, upper left, under the
     sugar). Tint lines, two: the tray keyline and the hem band's keyline. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="lokum" style="--dur-atk:0.90s">

  <ellipse class="shadow" cx="52" cy="137" rx="27" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:28px 88px">
    <path d="M30 86 L20 100" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M30 86 L20 100" stroke="#D9707A" stroke-width="10" stroke-linecap="round"/>
    <circle cx="19" cy="103" r="6.5" fill="#D9707A" stroke="#2A2114" stroke-width="3"/>
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
    <!-- The cube: mass, crescent, gleam, the sugar cap, then the steel hem. -->
    <rect x="20" y="36" width="64" height="72" rx="10" ry="10"
          fill="#D9707A" stroke="#2A2114" stroke-width="4"/>
    <path d="M84 56 L84 98 Q84 108 74 108 L66 108 Q78 108 78 98 L78 56 Z" fill="#A9464F"/>
    <path d="M26 60 Q25 68 27 76" fill="none" stroke="#F0A3A8" stroke-width="5" stroke-linecap="round"/>
    <path d="M20 46 Q20 36 30 36 L74 36 Q84 36 84 46 L84 52 Q78 57 70 52 Q62 58 54 52
             Q46 58 38 52 Q30 57 20 52 Z" fill="#F2E7D6"/>
    <path d="M20 100 L84 100 Q84 108 76 108 L28 108 Q20 108 20 100 Z"
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M25 104 L79 104" stroke="#C8CCD6" stroke-width="2" stroke-linecap="round"/>

    <!-- The cast face (style bible §5), eye y 76. -->
    <path d="M32 64 L44 66 M60 66 L72 64" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="76" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="76" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="77" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="77" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="73.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="73.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 89 Q52 94 60 89" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <g data-expression="cute">
      <path d="M32 66 Q38 61 44 66 M60 66 Q66 61 72 66" fill="none" stroke="#D9707A" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 66 Q38 61 44 66 M60 66 Q66 61 72 66" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="89" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="89" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 88 Q52 96 60 88 Q59 99 52 100 Q45 99 44 88 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 94 Q52 96 55 94" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M30 44 L44 58 L32 72 L46 86 L34 100"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Tray arm. The hand is behind the tray; the tray's edge is at x 121. A
       lokum cube of its own kind rides in the middle. -->
  <g class="armF" style="transform-origin:78px 88px">
    <path d="M74 86 L90 88" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M74 86 L90 88" stroke="#D9707A" stroke-width="10" stroke-linecap="round"/>
    <circle cx="91" cy="88" r="6.5" fill="#D9707A" stroke="#2A2114" stroke-width="3"/>
    <ellipse cx="101" cy="78" rx="20" ry="31" fill="#8A8F98" stroke="#2A2114" stroke-width="4"/>
    <ellipse cx="101" cy="78" rx="15" ry="25" fill="none" stroke="#C8CCD6" stroke-width="2"/>
    <rect x="95" y="72" width="12" height="12" rx="3" ry="3"
          fill="#D9707A" stroke="#2A2114" stroke-width="2.3"/>
    <path d="M95.5 75 Q95.5 72.5 98 72.5 L104 72.5 Q106.5 72.5 106.5 75 L106.5 77 Q101 80 95.5 77 Z" fill="#F2E7D6"/>
  </g>

  <g class="fx" style="transform-origin:121px 78px">
    <ellipse cx="128" cy="78" rx="10" ry="30" fill="none" stroke="#8A8F98"
             stroke-width="7" opacity=".45"/>
    <ellipse cx="128" cy="78" rx="10" ry="30" fill="none" stroke="#FFFFFF"
             stroke-width="2.6" opacity=".9"/>
    <path d="M138 60 L145 54 M141 78 L149 78 M138 96 L145 102" stroke="#C8CCD6"
          stroke-width="3" stroke-linecap="round" opacity=".85"/>
    <path d="M143 66 L140 63 L145 62 Z" fill="#FFFFFF"/>
    <path d="M142 92 L146 90 L144 95 Z" fill="#FFFFFF"/>
  </g>
</svg>
`;export{e as default};
