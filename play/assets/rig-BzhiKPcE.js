const e=`<!-- Tarhana (Cracker) · Mold 2 · Brawler · melee, bare fists
     attackSpeed 1.25 → round(20/1.25) = 16 ticks = 0.80 s

     Class rule (V3, README "Silahsız gövdeler"): a Brawler carries no weapon,
     the hands are the weapon. Archetype \`punch\`: both arms strike, the rear
     one crossing at 58%. The front fist is the Strudel's, set 4 closer and a
     touch lower — the cheapest, shortest body on the roster — so its knuckle
     rests at \`WEAPON\` tarhana [116, 89], unchanged.

     Redrawn for ticket 20 against docs/style-bible.md. Mass = the cloth
     sack the tarhana dried in, x 22..82 (60 wide), y 46..116 (70 tall),
     ratio 1.17 — the smallest box §6 allows, which is the Cracker's whole
     silhouette beside the Mold's two tall bodies and its square one. The
     gathered neck and its rope tie are the crown (ears to y 28). The old
     rig's woven seams, grain flecks and chilli dots were texture that was
     one beige at 40 px; what says "dried and cracked" now is two crack
     lines in the cloth shade. No gleam: the cloth is cream (§11.3). The
     fist wraps are the cast's leather light, since a cream wrap on cream
     cloth would not separate. Eye y 86 = 57% of the mass. Materials 3 /
     fills 7: cloth D8C79A B08C4E · leather 6E4A2A 4A3826 C9A66B · mold
     3E8C7A 9ED4C4. One crescent (B08C4E, lower right). Tint lines, two:
     the cracks. The Mold's tell is one colony on the right shoulder. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="punch" data-unit="tarhana" style="--dur-atk:0.80s">

  <ellipse class="shadow" cx="52" cy="137" rx="25" ry="6" fill="#2A2114" opacity=".32"/>

  <!-- Rear fist rests at x 18 so its ink stays inside the safe area (x ≥ 6). -->
  <g class="armB" style="transform-origin:30px 92px">
    <path d="M30 92 L20 95" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 92 L20 95" stroke="#D8C79A" stroke-width="8" stroke-linecap="round"/>
    <path d="M24 99 L26 90" stroke="#C9A66B" stroke-width="3" stroke-linecap="round"/>
    <circle cx="18" cy="97" r="10" fill="#D8C79A" stroke="#2A2114" stroke-width="3"/>
    <path d="M13 91 L13 104 M18 90 L18 105" stroke="#C9A66B" stroke-width="3" stroke-linecap="round"/>
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
    <!-- The sack's ears first, so the body covers their base. -->
    <path d="M44 48 Q38 36 46 28 Q54 34 52 46 Z M52 46 Q52 34 60 28 Q66 36 60 48 Z"
          fill="#D8C79A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The sack: fill, crescent, cracks, then the outline over the lot. -->
    <path d="M52 46 C36 46 24 58 22 78 C20 98 30 116 52 116 C74 116 84 98 82 78 C80 58 68 46 52 46 Z"
          fill="#D8C79A"/>
    <path d="M82 78 C84 98 74 116 52 116 L52 111 C70 111 79 97 77 78 C76 66 71 57 64 51 L70 48 C78 55 81 66 82 78 Z"
          fill="#B08C4E"/>
    <path d="M30 66 L38 72 L34 80 M64 104 L70 98" fill="none" stroke="#B08C4E" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M52 46 C36 46 24 58 22 78 C20 98 30 116 52 116 C74 116 84 98 82 78 C80 58 68 46 52 46 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <!-- The rope tie at the neck. -->
    <path d="M38 50 Q52 44 66 50" fill="none" stroke="#2A2114" stroke-width="7" stroke-linecap="round"/>
    <path d="M38 50 Q52 44 66 50" fill="none" stroke="#C9A66B" stroke-width="4" stroke-linecap="round"/>

    <!-- One Mold colony on the right shoulder: the Origin's tell, kept to one
         so the sack does not turn into the Stilton. -->
    <circle cx="72" cy="60" r="5" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>
    <circle cx="77" cy="67" r="3.2" fill="#3E8C7A" stroke="#2A2114" stroke-width="2.3"/>
    <circle cx="70.5" cy="58.5" r="1.8" fill="#9ED4C4"/>

    <!-- The cast face (style bible §5), eye y 86. -->
    <path d="M32 74 L44 76 M60 76 L72 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="86" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="86" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="87" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="83.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 99 Q52 104 60 99" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <g data-expression="cute">
      <path d="M32 76 Q38 71 44 76 M60 76 Q66 71 72 76" fill="none" stroke="#D8C79A" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 76 Q38 71 44 76 M60 76 Q66 71 72 76" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="99" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="99" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 98 Q52 106 60 98 Q59 109 52 110 Q45 109 44 98 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 104 Q52 106 55 104" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M34 56 L46 70 L36 86 L48 100 L38 112"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:74px 92px">
    <path d="M74 92 L94 89" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M74 92 L94 89" stroke="#D8C79A" stroke-width="12" stroke-linecap="round"/>
    <path d="M84 95 L88 85 M90 95.5 L94 85.5" stroke="#C9A66B" stroke-width="3.4" stroke-linecap="round"/>
    <circle cx="104" cy="89" r="12" fill="#D8C79A" stroke="#2A2114" stroke-width="3"/>
    <path d="M93 83 Q98 89 93 95" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M99 79 L99 98 M106 78 L106 99" stroke="#C9A66B" stroke-width="3" stroke-linecap="round"/>
  </g>

  <g class="fx" style="transform-origin:116px 89px">
    <path d="M116 76 L132 68 M120 89 L138 89 M116 102 L132 110"
          stroke="#C9A66B" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M116 76 L127 71 M120 89 L133 89 M116 102 L127 107"
          stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="128" cy="80" r="2.6" fill="#3E8C7A"/>
    <circle cx="130" cy="100" r="2.2" fill="#3E8C7A"/>
  </g>
</svg>
`;export{e as default};
