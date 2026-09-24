const e=`<!-- Ayçiçeği (Sunbloom) · Garden 5 · Marksman · ranged (range 4)
     attackSpeed 0.83 → round(20/0.83) = 24 ticks = 1.20 s

     Archetype \`stab\`, not \`throw\`: the bow arm has to stay planted and
     \`throw\` would swing it from -56° to +38°. \`stab\` pushes the bow arm 16
     forward — the jump at release — while the shared \`ATTACK_COMMON\` track
     draws the string: armB rocks +16° back at 24% and -14° forward at 36%,
     which is exactly a pull and a release, and is the only reason the draw
     hand lives in \`armB\`. The armB pivot (58, 86) is the far shoulder behind
     the mass, not the roster's (24, 88): the nock is right of centre and an
     arm from the left shoulder could not reach it. Bow, string and arrow are
     one piece in \`armF\`; the arrowhead is \`MUZZLE\` aycicegi (120, 80).

     Redrawn for ticket 17 against docs/style-bible.md. There is no stem and
     no separate head: the flower head is the whole mass, as the Bagel's ring
     is. Mass = seed disc r 24 at (52, 70) plus twelve 11-long petals, tips on
     r 35: x 17..87, y 35..105, 72 × 72 (ratio 1.0, the Bagel's row). Eye y 74
     = 56% of the mass. The disc is the face plate; five seed bumps sit above
     the brows, the Popcorn's kernel construction. Materials 4 / fills 9:
     petal E9B92E C08A18 F5DC6E · leather 6E4A2A 4A3826 C9A66B (disc, seeds,
     bow, arrow, legs) · leaf 4E7A32 78A54C (arms, hands, leaves, fletching)
     · steel 8A8F98 (arrowhead). Shade = the three lower-right petals in the
     petal shade; light = the one upper-left petal in the petal light. Tint
     lines, two: the leaf vein and the white bowstring. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="aycicegi" style="--dur-atk:1.20s">

  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6" fill="#2A2114" opacity=".32"/>

  <!-- Draw hand: rests on the nock at (78, 80). -->
  <g class="armB" style="transform-origin:58px 86px">
    <path d="M58 90 L67 85 L75 81" fill="none" stroke="#2A2114" stroke-width="12"
          stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M58 90 L67 85 L75 81" fill="none" stroke="#4E7A32" stroke-width="8"
          stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="77" cy="80" r="6" fill="#4E7A32" stroke="#2A2114" stroke-width="3"/>
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
    <!-- Two leaves at the hips, behind the head: the Garden's green. -->
    <path d="M30 96 C20 92 12 98 10 108 C20 108 28 104 32 100 Z"
          fill="#4E7A32" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M74 96 C84 92 92 98 94 108 C84 108 76 104 72 100 Z"
          fill="#4E7A32" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M14 106 Q22 100 30 98" fill="none" stroke="#78A54C" stroke-width="2" stroke-linecap="round"/>

    <!-- Twelve petals, bases under the disc's rim, tips on r 35. The petal
         stroke is \`detail\` 3: at 11 long a 4 stroke inks a petal solid. -->
    <g stroke="#2A2114" stroke-width="3" stroke-linejoin="round">
      <path d="M52.4 47.0 Q55.2 39.2 61.1 36.2 Q64.6 41.7 63.2 49.9 Z" fill="#E9B92E"/>
      <path d="M63.8 50.3 Q70.2 44.9 76.7 45.3 Q77.1 51.8 71.7 58.2 Z" fill="#E9B92E"/>
      <path d="M72.1 58.8 Q80.3 57.4 85.8 60.9 Q82.8 66.8 75.0 69.6 Z" fill="#E9B92E"/>
      <path d="M75.0 70.4 Q82.8 73.2 85.8 79.1 Q80.3 82.6 72.1 81.2 Z" fill="#C08A18"/>
      <path d="M71.7 81.8 Q77.1 88.2 76.7 94.7 Q70.2 95.1 63.8 89.7 Z" fill="#C08A18"/>
      <path d="M63.2 90.1 Q64.6 98.3 61.1 103.8 Q55.2 100.8 52.4 93.0 Z" fill="#C08A18"/>
      <path d="M51.6 93.0 Q48.8 100.8 42.9 103.8 Q39.4 98.3 40.8 90.1 Z" fill="#E9B92E"/>
      <path d="M40.2 89.7 Q33.8 95.1 27.3 94.7 Q26.9 88.2 32.3 81.8 Z" fill="#E9B92E"/>
      <path d="M31.9 81.2 Q23.7 82.6 18.2 79.1 Q21.2 73.2 29.0 70.4 Z" fill="#E9B92E"/>
      <path d="M29.0 69.6 Q21.2 66.8 18.2 60.9 Q23.7 57.4 31.9 58.8 Z" fill="#E9B92E"/>
      <path d="M32.3 58.2 Q26.9 51.8 27.3 45.3 Q33.8 44.9 40.2 50.3 Z" fill="#F5DC6E"/>
      <path d="M40.8 49.9 Q39.4 41.7 42.9 36.2 Q48.8 39.2 51.6 47.0 Z" fill="#E9B92E"/>
    </g>

    <!-- The seed disc is the face plate; five seeds above the brows. -->
    <circle cx="52" cy="70" r="24" fill="#6E4A2A" stroke="#2A2114" stroke-width="4"/>
    <g fill="#4A3826">
      <circle cx="40" cy="58" r="2.6"/><circle cx="45.5" cy="54.3" r="2.6"/>
      <circle cx="52" cy="53" r="2.6"/><circle cx="58.5" cy="54.3" r="2.6"/>
      <circle cx="64" cy="58" r="2.6"/>
    </g>

    <!-- The cast face (style bible §5), eye y 74. -->
    <path d="M32 62 L44 64 M60 64 L72 62" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="74" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="74" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="75" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="75" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="71.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="71.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 87 Q52 92 60 87" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <g data-expression="cute">
      <path d="M32 64 Q38 59 44 64 M60 64 Q66 59 72 64" fill="none" stroke="#6E4A2A" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 64 Q38 59 44 64 M60 64 Q66 59 72 64" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="87" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="87" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 86 Q52 94 60 86 Q59 97 52 98 Q45 97 44 86 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 92 Q52 94 55 92" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M36 52 L46 62 L36 72 L48 84 L40 94"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Bow arm, bow, string and nocked arrow as one part. -->
  <g class="armF" style="transform-origin:72px 92px">
    <path d="M72 92 L98 90" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M72 92 L98 90" stroke="#4E7A32" stroke-width="10" stroke-linecap="round"/>

    <path d="M96 42 C110 60 110 104 96 120" fill="none" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M96 42 C110 60 110 104 96 120" fill="none" stroke="#6E4A2A" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M96 42 L78 80 L96 120" fill="none" stroke="#FFFFFF" stroke-width="2" stroke-linejoin="round"/>

    <path d="M78 80 L112 80" stroke="#2A2114" stroke-width="6" stroke-linecap="round"/>
    <path d="M78 80 L112 80" stroke="#C9A66B" stroke-width="4" stroke-linecap="round"/>
    <path d="M80 77 L86 74 L86 79 Z M80 83 L86 86 L86 81 Z" fill="#4E7A32"/>
    <path d="M108 74.5 L120 80 L108 85.5 Z" fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <circle cx="102" cy="90" r="6.5" fill="#4E7A32" stroke="#2A2114" stroke-width="3"/>
  </g>

  <g class="fx" style="transform-origin:120px 80px">
    <path d="M118 80 L146 80" stroke="#E9B92E" stroke-width="9" stroke-linecap="round" opacity=".5"/>
    <path d="M120 80 L142 80" stroke="#F5DC6E" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="130" cy="72" rx="2.8" ry="2.1" fill="#E9B92E"/>
    <ellipse cx="136" cy="88" rx="2.6" ry="2" fill="#F5DC6E"/>
  </g>
</svg>
`;export{e as default};
