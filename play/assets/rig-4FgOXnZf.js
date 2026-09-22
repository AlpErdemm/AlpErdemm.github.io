const t=`<!-- Rutubet (Humidity) . Damp Cellar . Spoil . melee, a fold turned
     attackSpeed 0.81 > round(20/0.81) = 25 ticks = 1.25 s

     Archetype \`crank\`, Mentese's and Bulasik's: \`armF\` turns at a constant
     rate through its own face rather than swinging through an arc, and
     \`rigAnim.ts\` gives that one track a \`linear\` curve where every other
     attack track is eased.

     \`WEAPON rutubet [117, 60]\` is the topmost fold's outer edge, at the top
     of its turn.

     Silhouette: the leaning pile of folds. Four broad horizontal folds, each
     set a little further *left* than the one below it. Region 4's stack of
     plates leans right and is five thin slabs; this is four thick ones
     leaning the other way, which is the reading that separates the two
     stacked bodies of two adjacent Regions.

     Mass x 12..92, y 34..118. Materials 2 / fills 4: humidity 44514A 7C8C7E
     B8C8B6 * brass eye F2C46A. One gleam (upper left). The face sits off
     centre because the pile does. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="crank" data-unit="rutubet" style="--dur-atk:1.25s">

  <ellipse class="shadow" cx="52" cy="137" rx="32" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 84px">
    <path d="M30 84 L22 90" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 84 L22 90" stroke="#44514A" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="93" r="6.5" fill="#7C8C7E" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#44514A" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#7C8C7E" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#44514A" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#7C8C7E" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The pile: four folds, each thicker than a plate and each offset
         further left, so the whole thing leans away from the stack of dishes
         one Region back. -->
    <path d="M26 98 L92 96 L90 118 L24 118 Z" fill="#7C8C7E" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M20 76 L88 74 L90 96 L26 98 Z" fill="#B8C8B6" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M16 56 L84 54 L86 74 L20 76 Z" fill="#7C8C7E" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M12 36 L78 34 L82 54 L16 56 Z" fill="#B8C8B6" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <path d="M52 98 L92 96 L90 118 L52 118 Z" fill="#44514A"/>
    <path d="M52 76 L88 74 L90 96 L52 98 Z" fill="#44514A" opacity=".5"/>
    <path d="M22 40 L22 52" fill="none" stroke="#B8C8B6" stroke-width="4" stroke-linecap="round"/>
    <path d="M12 36 L78 34 L82 54 L16 56 Z" fill="none" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>

    <path d="M34 76 L46 78 M58 78 L70 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="41" cy="88" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="63" cy="88" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="42.4" cy="89" rx="3.05" ry="4.07" fill="#2A2114"/>
    <ellipse cx="64.4" cy="89" rx="3.05" ry="4.07" fill="#2A2114"/>
    <circle cx="40" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="62" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M46 101 Q52 105 58 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 60 L50 74 L40 88 L52 102 L42 118"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:80px 84px">
    <path d="M80 84 L94 80" stroke="#2A2114" stroke-width="17" stroke-linecap="round"/>
    <path d="M80 84 L94 80" stroke="#7C8C7E" stroke-width="13" stroke-linecap="round"/>
    <!-- The topmost fold, lifted off the pile and turning on its own edge. Its outer edge is the aim, and \`crank\` turns it through its
         own face. -->
    <path d="M92 74 L117 58 L112 72 L100 86 Z"
          fill="#B8C8B6" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>
    <circle cx="105" cy="71" r="3" fill="#44514A"/>
  </g>

  <g class="fx" style="transform-origin:119px 70px">
    <path d="M119 58 L137 48 M123 70 L141 70 M119 82 L137 92"
          stroke="#7C8C7E" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M119 58 L131 53 M123 70 L135 70 M119 82 L131 87"
          stroke="#B8C8B6" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="135" cy="52" r="2.6" fill="#7C8C7E"/>
    <circle cx="137" cy="86" r="2.4" fill="#B8C8B6"/>
  </g>
</svg>
`;export{t as default};
