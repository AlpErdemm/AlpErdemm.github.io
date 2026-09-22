const r=`<!-- Zeytin (Olive) · Market 2 · Assassin · melee\r
     attackSpeed 0.88 → round(20/0.88) = 23 ticks = 1.15 s\r
\r
     Archetype \`stab\`, kept on purpose (see the old header's reasoning, still\r
     true): a scale-pan hanging on a chain cannot point upward, so \`swing\`'s\r
     +56 at contact would send it past \`setAim\`'s AIM_MAX. With \`stab\` the\r
     forward pan rests near level and its cutting edge stays at (114, 88),\r
     which is \`WEAPON\` zeytin [114, 88], so unitRig.ts needs no change.\r
\r
     Redrawn for ticket 18 against docs/style-bible.md. Mass = one olive, an\r
     ellipse rx 31 ry 37 at (52, 78): x 21..83 (62 wide), y 41..115 (74 tall),\r
     ratio 1.19; the old body was 52 wide, under the §6 floor, and grew. The\r
     leaf sprig is the crown (y 22). The cast's darkest body: the olive's\r
     base is a dark green-grey rather than the old near-ink, so the §4.1\r
     outline still separates from it. The white eyes carry the face on the\r
     dark ground; eye y 84 = 58% of the mass. The scale pans stay the weapon,\r
     one in each hand: a steel rod from the fist, a ring, two 2-wide ink\r
     chains (minInk) and a shallow steel bowl. Materials 4 / fills 10: olive\r
     4F5A38 35402A 8A9663 · leaf 6B8A3C 4A6628 · leather 6E4A2A 4A3826 C9A66B\r
     · steel 8A8F98 C8CCD6 (leather and steel are the cast's shared values).\r
     The belt boss in leather light is the Market's coin, worn by all four\r
     Market rigs. One shade crescent (35402A, lower right), one gleam (8A9663,\r
     upper left). Tint lines, one: the forward pan's keyline. The striped\r
     headscarf and apron, the ledger, the sapling and the brass went: a fifth\r
     material, and at 40 px they were what kept the face from reading. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="zeytin" style="--dur-atk:1.15s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="26" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear pan's ink rests at x 6.5, inside the safe area. -->\r
  <g class="armB" style="transform-origin:30px 92px">\r
    <path d="M30 92 L20 96" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 92 L20 96" stroke="#4F5A38" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="18" cy="97" r="6" fill="#4F5A38" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M18 94 L12 84" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M18 94 L12 84" stroke="#8A8F98" stroke-width="4.6" stroke-linecap="round"/>\r
    <circle cx="11" cy="81" r="3.4" fill="none" stroke="#2A2114" stroke-width="2.6"/>\r
    <path d="M11 84 L8 90 M11 84 L28 90" stroke="#2A2114" stroke-width="2" stroke-linecap="round"/>\r
    <path d="M8 90 C12 99 24 99 28 90 Z"\r
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Legs and boots are the cast's shared construction (style bible §6):\r
       from y 104 to 126 off pivots x 44 / 62, soles flat on 136, boots 16 × 11. -->\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 104 L41 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 104 L41 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 126 Q26 131 29 136 L44 136 Q46 130 42 125 Z"\r
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 104 L65 126" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 104 L65 126" stroke="#4A3826" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 125 Q60 130 62 136 L77 136 Q79 131 74 126 Z"\r
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- The sprig behind the olive's top: stem, lit leaf left, shaded leaf right. -->\r
    <path d="M52 44 L52 32" stroke="#2A2114" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M52 34 C46 33 41 27 42 22 C48 23 52 28 52 34 Z"\r
          fill="#6B8A3C" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M52 36 C58 34 63 28 62 22 C56 24 52 29 52 36 Z"\r
          fill="#4A6628" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <ellipse cx="52" cy="78" rx="31" ry="37" fill="#4F5A38" stroke="#2A2114" stroke-width="4"/>\r
    <path d="M83 78 A31 37 0 0 1 52 115 A25 31 0 0 0 77 78 Z" fill="#35402A"/>\r
    <path d="M27 70 Q28 59 34 51" fill="none" stroke="#8A9663" stroke-width="5" stroke-linecap="round"/>\r
\r
    <!-- The cast face (style bible §5), eye y 84. -->\r
    <path d="M32 72 L44 74 M60 74 L72 72" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="84" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="85" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="81.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 97 Q52 102 60 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <!-- The belt at the hem, with the Market's coin as its boss. -->\r
    <path d="M26 104 Q52 113 78 104" fill="none" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M26 104 Q52 113 78 104" fill="none" stroke="#6E4A2A" stroke-width="4.5" stroke-linecap="round"/>\r
    <circle cx="52" cy="109" r="4" fill="#C9A66B" stroke="#2A2114" stroke-width="2.3"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#4F5A38" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 96 Q52 104 60 96 Q59 107 52 108 Q45 107 44 96 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 102 Q52 104 55 102" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M36 52 L48 68 L38 84 L50 98 L40 112"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front arm and the forward pan, one rotation: arm, fist, rod, ring,\r
       chains, bowl; the bowl's right edge is the cutting edge at (114, 88). -->\r
  <g class="armF" style="transform-origin:74px 92px">\r
    <path d="M74 92 L84 94" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M74 92 L84 94" stroke="#4F5A38" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="86" cy="95" r="6" fill="#4F5A38" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M86 92 L97 78" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M86 92 L97 78" stroke="#8A8F98" stroke-width="4.6" stroke-linecap="round"/>\r
    <circle cx="98" cy="75" r="3.4" fill="none" stroke="#2A2114" stroke-width="2.6"/>\r
    <path d="M98 78 L86 88 M98 78 L112 86" stroke="#2A2114" stroke-width="2" stroke-linecap="round"/>\r
    <path d="M84 88 C90 100 106 100 114 88 Z"\r
          fill="#8A8F98" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M89 91 C95 97 103 97 109 91" fill="none" stroke="#C8CCD6" stroke-width="2" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:108px 90px">\r
    <path d="M92 58 Q130 88 96 122" fill="none" stroke="#7A1E18" stroke-width="10"\r
          stroke-linecap="round" opacity=".4"/>\r
    <path d="M94 62 Q126 89 98 118" fill="none" stroke="#D93A2C" stroke-width="5.5"\r
          stroke-linecap="round" opacity=".85"/>\r
    <path d="M97 68 Q120 89 100 112" fill="none" stroke="#FFB07A" stroke-width="2.4"\r
          stroke-linecap="round"/>\r
    <circle cx="128" cy="72" r="3.4" fill="#C9A66B" stroke="#2A2114" stroke-width="1.6"/>\r
    <circle cx="133" cy="96" r="3" fill="#C9A66B" stroke="#2A2114" stroke-width="1.6"/>\r
    <circle cx="124" cy="112" r="2.6" fill="#C9A66B" stroke="#2A2114" stroke-width="1.4"/>\r
  </g>\r
</svg>\r
`;export{r as default};
