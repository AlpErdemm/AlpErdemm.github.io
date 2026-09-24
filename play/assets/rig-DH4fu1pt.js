const e=`<!-- Mısır (Popcorn) · Hearth 3 · Marksman · range 3
     attackSpeed 1.11 → round(20/1.11) = 18 ticks = 0.90 s

     Archetype \`stab\`, the Bagel's reasoning: a shouldered barrel recoils, it
     does not throw. There is no \`ammo\` group; \`MUZZLE\` misir fires from
     \`armF\` at (118, 86), the bell of the blunderbuss, so the shot leaves the
     mouth of the gun rather than a held round.

     Redrawn for ticket 16 against docs/style-bible.md. Mass = the cob with
     its two husk leaves: x 17..87 (70 wide), y 30..104 (74 tall), ratio 1.06;
     the tassel is the crown (y 12). The cob itself is 48 wide (x 28..76), the
     Flatcake's plate width, so the brows' outer ends sit inside it with 4 to
     spare. The old rig's pauldrons, collar, apron, kernel bin and thirty
     kernel bumps went: at 40 px the cob is yellow, the husks are green and
     the tassel is the top, and that is the whole silhouette. Nine kernel
     bumps in the corn's light value stay above the brows, the smallest marks
     that still read as texture (§11.3, r ≥ 2.4). Eye y 76 = 62% of the mass.
     Materials 4 / fills 10: corn E0B33A A87C22 F2D46A · husk 6B7A32 4B5A22 ·
     leather 6E4A2A 4A3826 C9A66B · steel 8A8F98 C8CCD6 (leather and steel are
     the Dough batch's shared values; the tassel wears the leather light). The
     shade is one crescent (A87C22, lower right) plus the right husk in the
     husk shade; one gleam (F2D46A, upper left). Tint lines, one: the barrel
     glint.

     \`cooked\` (the Hearth's second state, \`UnitRig.cook\`) chars the top of the
     cob and pops three kernels white; the face and husks stay, because the
     layer draws over \`body\` and anything placed on the face erases it. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="misir" style="--dur-atk:0.90s">

  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 94px">
    <path d="M30 94 L24 104" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 94 L24 104" stroke="#E0B33A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="23" cy="107" r="6" fill="#E0B33A" stroke="#2A2114" stroke-width="3"/>
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
    <!-- Husks behind the cob, the lit one left and the shaded one right; the
         tassel behind the cob's top. -->
    <path d="M34 98 C20 92 14 72 17 50 C25 62 31 76 36 90 Z"
          fill="#6B7A32" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
    <path d="M70 98 C84 92 90 72 87 50 C79 62 73 76 68 90 Z"
          fill="#4B5A22" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
    <path d="M44 34 C42 22 46 14 52 12 C58 14 62 22 60 34 Z"
          fill="#C9A66B" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The cob, its crescent, the gleam, then the kernel bumps above the brows. -->
    <path d="M52 30 C36 30 28 44 28 62 L28 92 C28 101 38 104 52 104 C66 104 76 101 76 92 L76 62 C76 44 68 30 52 30 Z"
          fill="#E0B33A" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
    <path d="M76 66 L76 92 C76 101 66 104 52 104 L52 99 C63 99 71 97 71 90 L71 66 Z" fill="#A87C22"/>
    <path d="M32 54 Q34 42 42 35" fill="none" stroke="#F2D46A" stroke-width="5" stroke-linecap="round"/>
    <g fill="#F2D46A">
      <ellipse cx="44" cy="39" rx="4" ry="3.2"/><ellipse cx="53" cy="37" rx="4" ry="3.2"/><ellipse cx="61" cy="40" rx="4" ry="3.2"/>
      <ellipse cx="47" cy="47" rx="4" ry="3.2"/><ellipse cx="57" cy="47" rx="4" ry="3.2"/><ellipse cx="66" cy="49" rx="4" ry="3.2"/>
      <ellipse cx="36" cy="56" rx="4" ry="3.2"/><ellipse cx="52" cy="55" rx="4" ry="3.2"/><ellipse cx="68" cy="57" rx="3.6" ry="3"/>
    </g>

    <!-- The cast face (style bible §5), eye y 76. -->
    <path d="M32 64 L44 66 M60 66 L72 64" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="76" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="76" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="77" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="77" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="73.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="73.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 89 Q52 94 60 89" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- The gunner's belt, at the hem. -->
    <path d="M29 99 Q52 105 75 99" fill="none" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
    <path d="M29 99 Q52 105 75 99" fill="none" stroke="#6E4A2A" stroke-width="4.5" stroke-linecap="round"/>

    <g class="cooked" style="transform-origin:52px 50px">
      <path d="M52 30 C36 30 28 44 28 58 Q52 64 76 58 C76 44 68 30 52 30 Z"
            fill="#4A3826" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
      <circle cx="40" cy="38" r="5" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
      <circle cx="54" cy="31" r="5.5" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
      <circle cx="66" cy="42" r="4.5" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M30 62 C27 68 28 74 31 78 M74 62 C77 68 76 74 73 78"
            fill="none" stroke="#E4632A" stroke-width="3" stroke-linecap="round"/>
    </g>

    <g data-expression="cute">
      <path d="M32 66 Q38 61 44 66 M60 66 Q66 61 72 66" fill="none" stroke="#E0B33A" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 66 Q38 61 44 66 M60 66 Q66 61 72 66" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="89" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="89" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 88 Q52 96 60 88 Q59 99 52 100 Q45 99 44 88 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 94 Q52 96 55 94" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M38 40 L48 56 L38 70 L50 86 L40 100"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- The blunderbuss: leather stock, steel barrel, bell mouth at (118, 86). -->
  <g class="armF" style="transform-origin:76px 92px">
    <path d="M66 105 L90 96" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M66 105 L90 96" stroke="#6E4A2A" stroke-width="8" stroke-linecap="round"/>
    <path d="M88 96 L116 87" stroke="#2A2114" stroke-width="10" stroke-linecap="round"/>
    <path d="M88 96 L116 87" stroke="#8A8F98" stroke-width="6" stroke-linecap="round"/>
    <path d="M93 93 L108 88.5" stroke="#C8CCD6" stroke-width="2.2" stroke-linecap="round"/>
    <ellipse cx="117" cy="86" rx="3.5" ry="8" fill="#8A8F98" stroke="#2A2114" stroke-width="3"/>
    <path d="M76 92 L86 98" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M76 92 L86 98" stroke="#E0B33A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="88" cy="99" r="6" fill="#E0B33A" stroke="#2A2114" stroke-width="3"/>
    <circle cx="70" cy="104" r="6" fill="#E0B33A" stroke="#2A2114" stroke-width="3"/>
  </g>

  <g class="fx" style="transform-origin:118px 86px">
    <path d="M118 86 L134 78 M118 86 L138 86 M118 86 L134 95 M118 86 L128 72 M118 86 L128 100"
          stroke="#E4632A" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <ellipse cx="120" cy="86" rx="6" ry="10" fill="#FFD9A0" opacity=".95"/>
    <ellipse cx="131" cy="80" rx="3" ry="2.3" fill="#F2D46A"/>
    <ellipse cx="137" cy="88" rx="2.8" ry="2.1" fill="#F2D46A"/>
    <ellipse cx="130" cy="95" rx="2.6" ry="2" fill="#F2D46A"/>
  </g>
</svg>
`;export{e as default};
