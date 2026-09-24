const e=`<!-- Sismis Konserve (Swollen Can) - Rusted Cupboard - Spoil - the lesser boss
     attackSpeed 0.86 -> round(20/0.86) = 23 ticks = 1.15 s

     Archetype \`punch\`, and that is deliberate rather than convenient: the Stop
     x10 spike is the family at its own ceiling and nothing the player has not
     already seen a smaller version of, so it fights the way Pas and Teneke
     fight and simply survives far longer doing it.

     \`WEAPON sismiskonserve [112, 93]\` is the front knuckle, low and close -
     the Brawler convention, on the shortest arm in the family against the
     widest mass.

     Silhouette: the barrel that bulged. Narrow at the neck and widest at the
     middle, where the Tin is narrowest - which is the whole reason those two
     can stand on the same board: the family's cheapest body and its spike are
     the same object crushed and swollen. The lid is small, domed and lifted
     clear of its seam, so the top edge is separated from the mass. The pinched
     neck is also what tells it from the Soured Pickle at 53 px; those two were
     drawn too alike at first and were measured side by side at board size
     until they were not.

     Mass x 14..90, y 26..118. Materials 2 / fills 4: tin 5D554A 9A9289
     C9C0B2 * rust B0582C, three blooms - more rust than anything else in the
     family carries, because this is what the rust finally got into.
     Brass eye F2C46A, and the largest face in the Cupboard. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="punch" data-unit="sismiskonserve" style="--dur-atk:1.15s">

  <ellipse class="shadow" cx="52" cy="137" rx="33" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 92px">
    <path d="M30 92 L22 98" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 92 L22 98" stroke="#5D554A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="101" r="8" fill="#9A9289" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#5D554A" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#9A9289" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#5D554A" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#9A9289" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The lid, risen off the seam. Drawn first so the barrel covers where it
         has lifted, and the gap under it is the tell. -->
    <path d="M34 34 Q52 20 70 34 L68 45 Q52 35 36 45 Z"
          fill="#C9C0B2" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M37 50 Q52 44 67 50" fill="none" stroke="#2A2114" stroke-width="3" stroke-linecap="round"/>

    <!-- The barrel: fill, crescent, the bloom, the seam rings, gleam, ink. -->
    <path d="M38 50 Q12 82 30 118 L74 118 Q92 82 66 50 Z" fill="#9A9289"/>
    <path d="M74 52 Q90 84 74 118 L52 118 L52 110 L68 110 Q80 84 68 56 Z" fill="#5D554A"/>
    <path d="M28 68 Q52 60 76 68 M22 100 Q52 108 82 100" fill="none" stroke="#5D554A" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="70" cy="86" r="5" fill="#B0582C"/>
    <circle cx="62" cy="102" r="3.2" fill="#B0582C"/>
    <circle cx="26" cy="90" r="3" fill="#B0582C"/>
    <path d="M26 70 Q20 84 24 98" fill="none" stroke="#C9C0B2" stroke-width="5" stroke-linecap="round"/>
    <path d="M38 50 Q12 82 30 118 L74 118 Q92 82 66 50 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 72 L44 74 M60 74 L72 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="84" rx="7" ry="8.05" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="84" rx="7" ry="8.05" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="85" rx="3.82" ry="5.09" fill="#2A2114"/>
    <ellipse cx="66.4" cy="85" rx="3.82" ry="5.09" fill="#2A2114"/>
    <circle cx="38" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="81.4" r="1.6" fill="#FFFFFF"/>
    <path d="M42 100 Q52 106 62 100" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 58 L50 72 L40 86 L52 100 L42 116"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:80px 92px">
    <path d="M80 92 L96 92" stroke="#2A2114" stroke-width="17" stroke-linecap="round"/>
    <path d="M80 92 L96 92" stroke="#9A9289" stroke-width="13" stroke-linecap="round"/>
    <circle cx="103" cy="92" r="11" fill="#9A9289" stroke="#2A2114" stroke-width="3"/>
    <path d="M94 85 Q99 92 94 99" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="106" cy="88" r="2.6" fill="#B0582C"/>
  </g>
  <g class="fx" style="transform-origin:117px 92px">
    <path d="M117 80 L135 70 M121 92 L139 92 M117 104 L135 114"
          stroke="#9A9289" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M117 80 L129 75 M121 92 L133 92 M117 104 L129 109"
          stroke="#C9C0B2" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="133" cy="74" r="2.6" fill="#9A9289"/>
    <circle cx="135" cy="108" r="2.4" fill="#C9C0B2"/>
  </g>
</svg>
`;export{e as default};
