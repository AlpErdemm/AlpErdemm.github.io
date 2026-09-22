const r=`<!-- Köfte (Meatball) · Hearth 4 · Brawler · melee, bare fists\r
     attackSpeed 1.11 → round(20/1.11) = 18 ticks = 0.90 s\r
\r
     Class rule (V3, README "Silahsız gövdeler"): a Brawler carries no weapon,\r
     the hands are the weapon. Arms, fists, legs and boots are the Strudel's\r
     construction (style bible §6, §11.1) so the two Brawlers throw the same\r
     punch; the wrist wrap here is a band of skewer iron, the Hearth's own\r
     material, where the Strudel's is a strip of cloth. Archetype \`punch\`; the\r
     front fist's leading edge rests at x 120 (\`WEAPON\` kofte [119, 87]).\r
\r
     Redrawn for ticket 16 against docs/style-bible.md. Mass = one hand-pressed\r
     ball, x 18..86 (68 wide), y 41..111 (70 tall), ratio 1.03. Three furrows\r
     across the top are the whole identity, the roster's one fingerprinted\r
     body, and they are 4-wide bands of the meat's shade value, not tint lines:\r
     the Strudel's laminations' construction. Eye y 84 = 61% of the mass, the\r
     Strudel's row. Materials 3 / fills 6: meat 8D4A32 5E2C1E B06A52 · steel\r
     8A8F98 · leather 6E4A2A 4A3826 (the Dough batch's shared values). One\r
     shade crescent (5E2C1E, lower right), one gleam (B06A52, upper left).\r
     Tint lines, none.\r
\r
     \`cooked\` (the Hearth's second state, \`UnitRig.cook\`) chars the furrows to\r
     ink and rims the ball in shade: the grooves are where a grilled ball\r
     blackens first. It leaves the face alone, because the layer draws over\r
     \`body\` and anything placed on the face erases it. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="punch" data-unit="kofte" style="--dur-atk:0.90s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear fist rests at x 18 so its ink stays inside the safe area (x ≥ 6). -->\r
  <g class="armB" style="transform-origin:30px 92px">\r
    <path d="M30 92 L20 95" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 92 L20 95" stroke="#8D4A32" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M24 99 L26 90" stroke="#8A8F98" stroke-width="3" stroke-linecap="round"/>\r
    <circle cx="18" cy="97" r="10" fill="#8D4A32" stroke="#2A2114" stroke-width="3"/>\r
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
    <!-- The ball, its crescent, the gleam, then the three pressed furrows. -->\r
    <ellipse cx="52" cy="76" rx="34" ry="35" fill="#8D4A32" stroke="#2A2114" stroke-width="4"/>\r
    <path d="M86 76 C86 95 71 111 52 111 L52 105 C67 105 80 92 80 76 Z" fill="#5E2C1E"/>\r
    <path d="M24 70 Q25 62 29 57" fill="none" stroke="#B06A52" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M38 45 Q52 49 66 45 M30 54 Q52 58 74 54 M30 63 Q52 67 74 63"\r
          fill="none" stroke="#5E2C1E" stroke-width="4" stroke-linecap="round"/>\r
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
    <g class="cooked" style="transform-origin:52px 76px">\r
      <path d="M38 45 Q52 49 66 45 M30 54 Q52 58 74 54 M30 63 Q52 67 74 63"\r
            fill="none" stroke="#2A2114" stroke-width="4.5" stroke-linecap="round"/>\r
      <path d="M23 66 C20 76 20 88 25 98 M81 66 C84 76 84 88 79 98"\r
            fill="none" stroke="#5E2C1E" stroke-width="5" stroke-linecap="round"/>\r
      <circle cx="30" cy="54" r="2.6" fill="#E4632A"/>\r
      <circle cx="74" cy="63" r="2.4" fill="#E4632A"/>\r
    </g>\r
\r
    <g data-expression="cute">\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#8D4A32" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 96 Q52 104 60 96 Q59 107 52 108 Q45 107 44 96 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 102 Q52 104 55 102" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M34 54 L46 70 L36 86 L48 100 L38 108"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:74px 92px">\r
    <path d="M74 92 L98 89" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M74 92 L98 89" stroke="#8D4A32" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M88 95 L92 85" stroke="#8A8F98" stroke-width="3.4" stroke-linecap="round"/>\r
    <circle cx="108" cy="87" r="12" fill="#8D4A32" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M97 81 Q102 87 97 93" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:120px 87px">\r
    <path d="M120 74 L136 66 M124 87 L142 87 M120 100 L136 108"\r
          stroke="#E4632A" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M120 74 L131 69 M124 87 L137 87 M120 100 L131 105"\r
          stroke="#FFD9A0" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="132" cy="78" r="2.6" fill="#E4632A"/>\r
    <circle cx="134" cy="98" r="2.2" fill="#FFD9A0"/>\r
  </g>\r
</svg>\r
`;export{r as default};
