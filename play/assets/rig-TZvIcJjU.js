const e=`<!-- Bal Kavanozu (Honey Jar) · economy · non-combatant
     data-atk="none": it does not attack, only idles. No arms, no legs; the
     skeleton is shadow · body · crack, and \`rigAnim\`'s \`none\` archetype and
     the jar specs (tests/visual/jar-*.spec.ts) rely on exactly that.

     Redrawn for ticket 20 against docs/style-bible.md. Mass = the jar,
     x 20..84 (64 wide), y 58..134 (76 tall), ratio 1.19; a limbless body
     sits on the ground, so the mass ends two units above the soles' line at
     y 134 (its ink stops at the band's edge, 136, with no waiver), and the body pivot is at its base (52 132) rather than
     the cast's 118: a jar that topples turns on its foot. The lid and knob
     are the crown (knob top y 34). The honey fills to y 66 so the face plate
     is on the honey, the material's own value, and the glass shows as the
     cast's steel light C8CCD6 in the shoulder band and a white gleam down
     the left wall. Eye y 88: inside §6's absolute band (74–90) but 38% of
     the mass, not 55–65% — for a body that stands on its own base the two
     rules cannot both hold, and the absolute band is the one that keeps
     the face at the cast's screen height, which is what "one cast" asks.
     Recorded as an exception in ticket 20. The old rig's brass lid, hex-coin
     badge, bubbles and speculars were six alpha'd marks and a fifth
     material; the comb is now one hexagon in the honey shade below the
     mouth, and the drip under the lid is the jar's one line: it drips.
     Materials 3 / fills 5: honey E8A93A C07A1E · steel/glass C8CCD6 ·
     leather 6E4A2A C9A66B (lid). One crescent (C07A1E, lower right), one
     gleam (white, upper left). Tint lines, two: the lid band and the comb. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="none" data-unit="balkavanozu" style="--dur-atk:0s;--dur-idle:2.4s">

  <ellipse class="shadow" cx="52" cy="137" rx="27" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="body" style="transform-origin:52px 132px">
    <!-- The jar: glass, honey with its meniscus, crescent, gleam, then the
         outline over the lot. -->
    <path d="M24 58 L80 58 Q84 58 84 64 L84 124 Q84 134 74 134 L30 134 Q20 134 20 124 L20 64 Q20 58 24 58 Z"
          fill="#C8CCD6"/>
    <path d="M20 68 Q36 63 52 67 Q68 71 84 66 L84 124 Q84 134 74 134 L30 134 Q20 134 20 124 Z" fill="#E8A93A"/>
    <path d="M84 84 L84 124 Q84 134 74 134 L52 134 L52 129 L72 129 Q79 129 79 122 L79 84 Z" fill="#C07A1E"/>
    <path d="M26 74 L26 100" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
    <path d="M24 58 L80 58 Q84 58 84 64 L84 124 Q84 134 74 134 L30 134 Q20 134 20 124 L20 64 Q20 58 24 58 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <!-- The lid and its knob: the crown. -->
    <path d="M18 58 L86 58 L86 50 Q86 44 80 44 L24 44 Q18 44 18 50 Z"
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M22 51 L82 51" stroke="#C9A66B" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="44" y="34" width="16" height="12" rx="4" fill="#6E4A2A" stroke="#2A2114" stroke-width="3"/>

    <!-- The drip under the lid: the jar's one line. -->
    <path d="M80 60 Q86 70 83 78 Q79 80 78 74 Q77 66 80 60 Z"
          fill="#E8A93A" stroke="#2A2114" stroke-width="2.3" stroke-linejoin="round"/>

    <!-- The cast face (style bible §5), eye y 88. -->
    <path d="M32 76 L44 78 M60 78 L72 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="88" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="88" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 101 Q52 106 60 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <!-- One comb cell below the mouth, in the honey shade. -->
    <path d="M52 114 L59 118 L59 126 L52 130 L45 126 L45 118 Z"
          fill="none" stroke="#C07A1E" stroke-width="2.4" stroke-linejoin="round"/>

    <g data-expression="cute">
      <path d="M32 78 Q38 73 44 78 M60 78 Q66 73 72 78" fill="none" stroke="#E8A93A" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 78 Q38 73 44 78 M60 78 Q66 73 72 78" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="101" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="101" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 100 Q52 108 60 100 Q59 111 52 112 Q45 111 44 100 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 106 Q52 108 55 106" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M30 66 L44 80 L34 96 L50 110 L40 126"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
</svg>
`;export{e as default};
