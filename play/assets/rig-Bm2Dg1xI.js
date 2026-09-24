const e=`<!-- Karpuz (Melon) · Market 4 · Vanguard · melee, salt over the neighbours
     attackSpeed 0.83 → round(20/0.83) = 24 ticks = 1.20 s

     Archetype \`swing\`: the slice-axe draws the roster's widest arc, which is
     why this viewBox's right motion margin is the wide one (README). The axe
     keeps its old geometry exactly (haft M84 122 L109 14, rind corner at
     (113, 12), which is \`WEAPON\` karpuz [113, 12]) so unitRig.ts needs no
     change.

     Redrawn for ticket 18 against docs/style-bible.md. Mass = one round
     melon, r 36 at (52, 78): x 16..88 (72 wide), y 42..114 (72 tall), ratio
     1.0; the stem curl is the crown (y 22). The old rig said "watermelon"
     with five alpha'd rind stripes and a scar, and at 0.42 px per unit that
     was a green smear. This one says it the way a market stall does, cut
     open: a red plate r 24 set into the rind (48 wide, the Flatcake's plate
     width, so the brows fit with 2.6 to spare), a 4-wide cream band, an
     8-wide rind rim whose plate edge takes \`detail\` ink (§11.1, rim under 12),
     and five ink seeds at 2 × 2.8, the smallest mark that still shows on the
     Board (§11.3). The rind's stripes survive as five 5-wide bands of the
     rind shade crossing the rim above the face: fill bands, the Meatball's
     furrow construction, not tint lines. Eye y 84 = 58% of the mass.
     Materials 3 / fills 8: rind 4A8C3C 2F6B27 8FCF72 · flesh E24B3B F3E6C6 ·
     leather 6E4A2A 4A3826 C9A66B (the cast's shared values: legs, boots,
     belt, haft). The belt boss in leather light is the Market's coin, worn
     by all four Market rigs. One shade crescent (2F6B27, lower right, showing
     on the rim), one gleam (8FCF72, upper left). Tint lines, none. The slice
     pauldrons, thigh plates and green legs went: an Origin is told by its
     body, not its boots (§11.4). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="swing" data-unit="karpuz" style="--dur-atk:1.20s">

  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6" fill="#2A2114" opacity=".32"/>

  <!-- Rear hand rests at x 17 so its ink stays inside the safe area (x ≥ 6). -->
  <g class="armB" style="transform-origin:20px 88px">
    <path d="M20 88 L17 104" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M20 88 L17 104" stroke="#4A8C3C" stroke-width="12" stroke-linecap="round"/>
    <circle cx="17" cy="107" r="7" fill="#4A8C3C" stroke="#2A2114" stroke-width="3"/>
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
    <!-- Stem first so the melon covers its root; then the melon, its crescent,
         the gleam, the rind stripes on the rim, and the cut face on top. -->
    <path d="M52 44 C50 34 44 26 38 26 C33 26 33 33 39 33"
          fill="none" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M52 44 C50 34 44 26 38 26 C33 26 33 33 39 33"
          fill="none" stroke="#2F6B27" stroke-width="5" stroke-linecap="round"/>
    <circle cx="52" cy="78" r="36" fill="#4A8C3C" stroke="#2A2114" stroke-width="4"/>
    <path d="M88 78 A36 36 0 0 1 52 114 A30 30 0 0 0 82 78 Z" fill="#2F6B27"/>
    <path d="M22 68 Q24 58 30 51" fill="none" stroke="#8FCF72" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 42 L52 52 M70 46.8 L66 54.8 M34 46.8 L38 54.8 M83.2 60 L75.2 65 M20.8 60 L28.8 65"
          stroke="#2F6B27" stroke-width="5"/>
    <circle cx="52" cy="79" r="28" fill="#F3E6C6" stroke="#2A2114" stroke-width="3"/>
    <circle cx="52" cy="79" r="24" fill="#E24B3B"/>
    <g fill="#2A2114">
      <ellipse cx="44" cy="61" rx="2" ry="2.8"/><ellipse cx="60" cy="61" rx="2" ry="2.8"/>
      <ellipse cx="52" cy="66" rx="2" ry="2.8"/>
      <ellipse cx="36" cy="95" rx="2" ry="2.8"/><ellipse cx="68" cy="95" rx="2" ry="2.8"/>
    </g>

    <!-- The cast face (style bible §5), eye y 84. -->
    <path d="M32 72 L44 74 M60 74 L72 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 97 Q52 102 60 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- The belt at the hem, with the Market's coin as its boss. -->
    <path d="M27 103 Q52 112 77 103" fill="none" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
    <path d="M27 103 Q52 112 77 103" fill="none" stroke="#6E4A2A" stroke-width="4.5" stroke-linecap="round"/>
    <circle cx="52" cy="108" r="4" fill="#C9A66B" stroke="#2A2114" stroke-width="2.3"/>

    <g data-expression="cute">
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#E24B3B" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 96 Q52 104 60 96 Q59 107 52 108 Q45 107 44 96 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 102 Q52 104 55 102" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M34 54 L46 70 L36 86 L48 100 L38 110"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Front arm and axe, one rotation. Arm, then haft, then the slice blade
       on the haft's right side, then the hand over the haft. -->
  <g class="armF" style="transform-origin:86px 86px">
    <path d="M86 86 L88 106" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M86 86 L88 106" stroke="#4A8C3C" stroke-width="12" stroke-linecap="round"/>
    <path d="M84 122 L109 14" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M84 122 L109 14" stroke="#6E4A2A" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M113 12 A36 36 0 0 1 100 69 Z"
          fill="#4A8C3C" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
    <path d="M111.7 18 A29.8 29.8 0 0 1 101.3 63 Z" fill="#F3E6C6"/>
    <path d="M110.4 24 A24 24 0 0 1 102.7 57 Z" fill="#E24B3B"/>
    <g fill="#2A2114">
      <ellipse cx="110.5" cy="32" rx="2" ry="2.8"/><ellipse cx="109" cy="42" rx="2" ry="2.8"/>
      <ellipse cx="105.5" cy="52" rx="2" ry="2.8"/>
    </g>
    <circle cx="87" cy="110" r="7" fill="#4A8C3C" stroke="#2A2114" stroke-width="3"/>
  </g>

  <g class="fx" style="transform-origin:52px 78px">
    <path d="M100 22 A 66 66 0 0 1 100 142" fill="none" stroke="#4FBFA0"
          stroke-width="14" opacity=".28" stroke-linecap="round"/>
    <path d="M100 22 A 66 66 0 0 1 100 142" fill="none" stroke="#9BF0D4"
          stroke-width="4" stroke-linecap="round"/>
  </g>
</svg>
`;export{e as default};
