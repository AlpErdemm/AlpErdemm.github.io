const t=`<!-- Duman (Smoke) · Burnt Oven · Spoil · ranged (range 3)
     attackSpeed 1.11 -> round(20/1.11) = 18 ticks = 0.90 s

     Archetype \`lob\`, and it is the first body on disk to wear one. The arm
     drops to +34, comes over the shoulder to -48, and the \`ammo\` ball climbs
     to (20, -30) before it goes out at 42% of the cycle. That is the highest
     hand-off of the seven and the only one that throws upward, which is what
     a chimney does with its smoke.

     \`MUZZLE duman { part: 'ammo', x: 106, y: 66 }\` reads the held ball
     itself rather than the arm, so the shot leaves the thing the eye was
     watching. \`SHOTS duman\` takes \`blob\`: \`playback.ts\` has drawn that form
     since the V3 cut and no live unit has carried it, so a soft ball of
     smoke costs no new art. The arc is 0.12, the steepest on the board,
     because \`lob\` is the archetype the arc belongs to.

     Silhouette: the wide billow with two wisps lifting off the crown. It is
     the broadest of the five and the only one wider than it is tall, which
     is what keeps it apart from the Soot's compact puff.

     No Origin, no Role, no team colour, no tier mark, and no
     \`data-expression="cute"\` group. Mass = the billow, x 16..90 (74 wide),
     y 42..116 (74 tall), ratio 1.00. Wisps to y 22. Eye y 82 = 54% of the
     mass. Materials 2 / fills 5: ash A9A29A C6C0B8 8A847B * ember F2A02A
     D9541F. One crescent (8A847B, lower right), one gleam (C6C0B8, upper
     left). Tint lines, one: the ball's lit chip. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="lob" data-unit="duman" style="--dur-atk:0.90s">

  <ellipse class="shadow" cx="52" cy="137" rx="30" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:28px 94px">
    <path d="M28 94 L20 102" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M28 94 L20 102" stroke="#6A645C" stroke-width="8" stroke-linecap="round"/>
    <circle cx="18" cy="105" r="6" fill="#A9A29A" stroke="#2A2114" stroke-width="3"/>
  </g>

  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 106 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 106 L41 124" stroke="#6A645C" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#A9A29A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 106 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 106 L65 124" stroke="#6A645C" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#A9A29A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="body">
    <!-- Two wisps lifting off the crown, drawn first so the billow covers
         their base. Both curl the same way and neither is the other's mirror:
         a matched pair either side of x 52 reads as a pair of ears at board
         scale rather than as smoke, which is what a first pass produced. -->
    <path d="M40 48 Q32 38 42 30" fill="none" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M40 48 Q32 38 42 30" fill="none" stroke="#C6C0B8" stroke-width="5" stroke-linecap="round"/>
    <path d="M58 46 Q72 36 62 22" fill="none" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M58 46 Q72 36 62 22" fill="none" stroke="#A9A29A" stroke-width="5" stroke-linecap="round"/>

    <!-- The billow: fill, crescent, gleam, then the ink over the lot. -->
    <path d="M52 44 Q68 40 74 54 Q88 56 86 70 Q94 82 84 92 Q86 106 72 110 Q62 120 50 114 Q36 120 28 108 Q16 102 20 88 Q12 76 22 66 Q22 50 38 48 Q44 40 52 44 Z"
          fill="#A9A29A"/>
    <path d="M84 92 Q86 106 72 110 Q62 120 50 114 L50 109 Q62 113 70 105 Q80 101 79 90 Z"
          fill="#8A847B"/>
    <path d="M28 62 Q22 70 23 80" fill="none" stroke="#C6C0B8" stroke-width="5" stroke-linecap="round"/>
    <path d="M52 44 Q68 40 74 54 Q88 56 86 70 Q94 82 84 92 Q86 106 72 110 Q62 120 50 114 Q36 120 28 108 Q16 102 20 88 Q12 76 22 66 Q22 50 38 48 Q44 40 52 44 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 68 L44 74 M60 74 L72 68" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="82" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="82" rx="6.6" ry="7.6" fill="#F2A02A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="83" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="83" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="79.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="79.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 97 Q52 92 60 97" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <path class="crack" d="M34 54 L46 68 L36 82 L48 96 L38 108"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <!-- Front arm and the held ball. The ball is its own \`.ammo\` group, which
       \`lob\` hides at the hand-off and brings back while nothing is visible. -->
  <g class="armF" style="transform-origin:72px 92px">
    <path d="M72 92 L88 80" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M72 92 L88 80" stroke="#6A645C" stroke-width="8" stroke-linecap="round"/>
    <circle cx="91" cy="77" r="6.5" fill="#A9A29A" stroke="#2A2114" stroke-width="3"/>

    <g class="ammo">
      <circle cx="106" cy="66" r="9" fill="#8A847B" stroke="#2A2114" stroke-width="2.6"/>
      <path d="M101 61 Q104 58 108 59" fill="none" stroke="#C6C0B8" stroke-width="2.6" stroke-linecap="round"/>
    </g>
  </g>

  <g class="fx" style="transform-origin:106px 66px">
    <path d="M106 66 C120 58 136 56 150 58" fill="none" stroke="#6A645C"
          stroke-width="7" stroke-linecap="round" opacity=".45"/>
    <path d="M106 66 C120 66 136 70 148 76" fill="none" stroke="#8A847B"
          stroke-width="6" stroke-linecap="round" opacity=".7"/>
    <circle cx="134" cy="62" r="3" fill="#A9A29A" opacity=".8"/>
    <circle cx="140" cy="74" r="2.6" fill="#6A645C" opacity=".7"/>
    <circle cx="126" cy="76" r="2.4" fill="#D9541F" opacity=".7"/>
  </g>
</svg>
`;export{t as default};
