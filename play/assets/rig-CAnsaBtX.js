const r=`<!-- Bulasik (Dishes) - Bleached Sink - Spoil - melee, a plate turned\r
     attackSpeed 0.80 -> round(20/0.80) = 25 ticks = 1.25 s\r
\r
     Archetype \`crank\`, Mentese's: \`armF\` turns at a constant rate through its\r
     own face rather than swinging through an arc, and \`rigAnim.ts\` gives that\r
     one track a \`linear\` curve where every other attack track is eased.\r
\r
     \`WEAPON bulasik [117, 60]\` is the topmost plate's outer edge, at the top\r
     of its turn.\r
\r
     Silhouette: the leaning stack. Five plates, each narrower and each set\r
     further right than the one under it, with a mug off to the left at the\r
     crown - so the mass is stepped on both sides and centred over neither. At\r
     53 px it is the only body in the Sink whose outline is a staircase.\r
\r
     Mass x 16..92, y 26..118. Materials 2 / fills 4: porcelain A49C8C\r
     D9D3C6 F2EEE4 * brass eye F2C46A. One gleam (upper left). The face sits\r
     off centre because the stack does. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="crank" data-unit="bulasik" style="--dur-atk:1.25s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="32" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 84px">\r
    <path d="M30 84 L22 90" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 84 L22 90" stroke="#A49C8C" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="93" r="6.5" fill="#D9D3C6" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#A49C8C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#D9D3C6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#A49C8C" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#D9D3C6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- The stack: five plates, each a shade narrower than the one under it\r
         and each offset further right, so the whole pile leans. The lean is\r
         the silhouette - a level stack reads as a cylinder. -->\r
    <path d="M18 108 L88 104 L90 118 L20 118 Z" fill="#D9D3C6" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M22 94 L88 90 L89 104 L23 108 Z" fill="#D9D3C6" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M26 80 L86 75 L87 90 L27 94 Z" fill="#F2EEE4" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M30 66 L84 60 L85 75 L31 80 Z" fill="#D9D3C6" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M36 52 L82 45 L83 60 L37 66 Z" fill="#F2EEE4" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <path d="M52 108 L88 105 L90 118 L52 118 Z" fill="#A49C8C"/>\r
    <path d="M52 94 L88 91 L89 104 L52 107 Z" fill="#A49C8C" opacity=".5"/>\r
    <path d="M30 56 L30 70" fill="none" stroke="#F2EEE4" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M36 52 L82 45 L83 60 L37 66 Z" fill="none" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
\r
    <!-- A mug the pile is holding up, off to the left so the crown is not\r
         centred over the base. -->\r
    <path d="M26 30 L48 28 L50 46 L28 48 Z" fill="#F2EEE4" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M50 33 Q60 34 58 42 Q56 46 50 44" fill="none" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
\r
    <path d="M38 74 L50 76 M62 76 L74 74" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="45" cy="86" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="67" cy="86" rx="5.6" ry="6.44" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="46.4" cy="87" rx="3.05" ry="4.07" fill="#2A2114"/>\r
    <ellipse cx="68.4" cy="87" rx="3.05" ry="4.07" fill="#2A2114"/>\r
    <circle cx="44" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="66" cy="83.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M50 99 Q56 103 62 99" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 58 L50 72 L40 86 L52 100 L42 116"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:80px 84px">\r
    <path d="M80 84 L94 80" stroke="#2A2114" stroke-width="17" stroke-linecap="round"/>\r
    <path d="M80 84 L94 80" stroke="#D9D3C6" stroke-width="13" stroke-linecap="round"/>\r
    <!-- The topmost plate, off the stack and turning. -->\r
    <!-- The topmost plate off the stack, turned on its own rim. Its outer\r
         edge is the aim, and \`crank\` turns it through its own face. -->\r
    <path d="M92 74 L117 58 L112 72 L100 86 Z"\r
          fill="#F2EEE4" stroke="#2A2114" stroke-width="3.5" stroke-linejoin="round"/>\r
    <circle cx="105" cy="71" r="3" fill="#A49C8C"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:119px 70px">\r
    <path d="M119 58 L137 48 M123 70 L141 70 M119 82 L137 92"\r
          stroke="#D9D3C6" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 58 L131 53 M123 70 L135 70 M119 82 L131 87"\r
          stroke="#F2EEE4" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="135" cy="52" r="2.6" fill="#D9D3C6"/>\r
    <circle cx="137" cy="86" r="2.4" fill="#F2EEE4"/>\r
  </g>\r
</svg>\r
`;export{r as default};
