const e=`<!-- Nemli Cuval (Damp Sack) . Damp Cellar . Spoil . the Stop 90 spike
     attackSpeed 0.85 > round(20/0.85) = 24 ticks = 1.20 s

     Archetype \`stab\`, the Seep's and the Mildew's: a landmark reuses an
     archetype, because a boss that needed its own keyframes would be the only
     body on the board whose timing the player could not read off a smaller
     one.

     \`WEAPON nemlicuval [112, 93]\` is the swollen belly it leads with, low and
     close.

     **A statline and not a verb** (ADR-0022): the sack is the family at its
     own ceiling. The verb is the barrel's, ten Stops later.

     Silhouette: the tied sack. A very wide sagging belly gathered into one
     narrow throat with two ears of cloth standing above the tie . the only
     body here that is pinched at the top, and it may not be confused with the
     barrel at Stop 100, which is pinched at *both* ends and bound with iron.

     Mass x 10..96, y 26..118. Materials 2 / fills 4: sackcloth 6B5A3E
     A8916A DCCBA6 * brass eye F2C46A. The tie in the dark, two weave lines,
     one gleam (upper left), one crescent (lower right). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="nemlicuval" style="--dur-atk:1.20s">

  <ellipse class="shadow" cx="52" cy="137" rx="38" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 101px">
    <path d="M30 101 L22 107" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 101 L22 107" stroke="#6B5A3E" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="110" r="6.5" fill="#A8916A" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#6B5A3E" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#A8916A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#6B5A3E" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#A8916A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The two ears above the tie, then the belly, so the throat covers the
         join. -->
    <path d="M38 44 Q30 28 42 26 Q48 34 50 44 Z" fill="#DCCBA6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M54 44 Q62 26 72 30 Q66 38 66 44 Z" fill="#DCCBA6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The belly: fill, crescent, the weave, a gleam, then the ink. -->
    <path d="M40 48 L64 48 Q84 58 90 82 Q98 104 84 114 Q68 120 52 118 Q36 120 20 114 Q6 104 14 82 Q20 58 40 48 Z" fill="#A8916A"/>
    <path d="M90 82 Q98 104 84 114 Q68 120 52 118 L52 112 Q68 114 82 108 Q92 100 84 82 Q78 62 62 52 Q84 58 90 82 Z" fill="#6B5A3E"/>
    <path d="M18 92 Q52 100 86 92 M24 106 Q52 112 80 106" fill="none" stroke="#6B5A3E" stroke-width="3" stroke-linecap="round"/>
    <path d="M26 70 Q22 82 26 94" fill="none" stroke="#DCCBA6" stroke-width="5" stroke-linecap="round"/>
    <path d="M40 48 L64 48 Q84 58 90 82 Q98 104 84 114 Q68 120 52 118 Q36 120 20 114 Q6 104 14 82 Q20 58 40 48 Z" fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <!-- The tie: the one place the cloth is gathered, drawn over the belly. -->
    <path d="M38 48 L66 48" stroke="#6B5A3E" stroke-width="7" stroke-linecap="round"/>
    <path d="M38 48 L66 48" stroke="#2A2114" stroke-width="3" stroke-linecap="round"/>

    <path d="M34 80 L46 82 M58 82 L70 80" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="92" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="92" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="93" rx="3.38" ry="4.51" fill="#2A2114"/>
    <ellipse cx="64.4" cy="93" rx="3.38" ry="4.51" fill="#2A2114"/>
    <circle cx="40" cy="89.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="89.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 105 Q52 109 58 105" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 64 L50 78 L40 92 L52 106 L42 122"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:72px 101px">
    <path d="M72 101 L88 97" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>
    <path d="M72 101 L88 97" stroke="#A8916A" stroke-width="12" stroke-linecap="round"/>
    <!-- A second sack, swung out low ahead of the first. Its tip is the aim. -->
    <path d="M112 93 Q96 87 90 95 Q96 103 112 97 Z"
          fill="#DCCBA6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>

  <g class="fx" style="transform-origin:115px 95px">
    <path d="M115 83 L133 73 M119 95 L137 95 M115 107 L133 117"
          stroke="#A8916A" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M115 83 L127 78 M119 95 L131 95 M115 107 L127 112"
          stroke="#DCCBA6" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="131" cy="77" r="2.6" fill="#A8916A"/>
    <circle cx="133" cy="111" r="2.4" fill="#DCCBA6"/>
  </g>
</svg>
`;export{e as default};
