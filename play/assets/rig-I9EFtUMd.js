const e=`<!-- Lehim (Solder) - Rusted Cupboard - Spoil - melee, a tinned iron
     attackSpeed 1.00 -> round(20/1.00) = 20 ticks = 1.00 s

     Archetype \`stab\`. The iron goes in point-first and comes back; a solder
     joint is made by touching, not by swinging.

     \`WEAPON lehim [118, 72]\` is the iron's tinned tip.

     Silhouette: the drip. A soft round mass whose base is a fringe of four
     long runs rather than a line - the only body in the Cupboard with no flat
     bottom, and the only one on the board that appears to be still moving
     while it stands. The runs are drawn to the ankle rather than to the hem
     on purpose: at 53 px a shallow fringe and the Rust's blotch were the same
     round mass, and the depth of the fringe is what separates them. One run
     has got away over the near shoulder, so the top is asymmetric too.

     Cooler than anything else in the family: pewter against ten bodies of
     tin, iron and rust. Three families of Spoil bodies have to stay tellable
     apart, and a hue nobody else in this one owns is the cheapest way to keep
     the dearest body of it legible in a crowd.

     Mass x 18..88, y 40..124. Materials 2 / fills 4: pewter 575E63 9BA5AA
     CBD3D6 * rust B0582C, one run. Brass eye F2C46A. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="stab" data-unit="lehim" style="--dur-atk:1.00s">

  <ellipse class="shadow" cx="52" cy="137" rx="28" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="armB" style="transform-origin:30px 82px">
    <path d="M30 82 L22 88" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>
    <path d="M30 82 L22 88" stroke="#575E63" stroke-width="8" stroke-linecap="round"/>
    <circle cx="19" cy="91" r="6.5" fill="#9BA5AA" stroke="#2A2114" stroke-width="3"/>
  </g>
  <g class="legB" style="transform-origin:44px 114px">
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M44 108 L41 124" stroke="#575E63" stroke-width="10" stroke-linecap="round"/>
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"
          fill="#9BA5AA" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 114px">
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>
    <path d="M62 108 L65 124" stroke="#575E63" stroke-width="10" stroke-linecap="round"/>
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"
          fill="#9BA5AA" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
  </g>
  <g class="body">
    <!-- The run that got away, over the shoulder, before the mass. -->
    <path d="M70 46 Q84 44 86 56 Q80 58 76 52 Z" fill="#CBD3D6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

    <!-- The mass: fill, crescent, two cooled seams, gleam, then the ink. The
         base is a fringe of drips rather than a line - that is the outline. -->
    <path d="M52 40 Q80 44 82 74 Q84 98 76 106 Q76 132 66 108 Q60 134 52 108 Q44 134 38 108 Q28 132 28 106 Q20 98 22 74 Q24 44 52 40 Z" fill="#9BA5AA"/>
    <path d="M82 74 Q84 98 76 106 Q76 132 66 108 Q60 130 56 112 L56 102 Q72 100 74 74 Z" fill="#575E63"/>
    <path d="M30 96 Q52 104 74 96 M28 82 Q52 90 76 82" fill="none" stroke="#575E63" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M32 58 Q28 70 30 82" fill="none" stroke="#CBD3D6" stroke-width="5" stroke-linecap="round"/>
    <path d="M66 52 Q70 62 66 70" fill="none" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>
    <path d="M52 40 Q80 44 82 74 Q84 98 76 106 Q76 132 66 108 Q60 134 52 108 Q44 134 38 108 Q28 132 28 106 Q20 98 22 74 Q24 44 52 40 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <path d="M32 62 L44 64 M60 64 L72 62" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="74" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="74" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="75" rx="3.38" ry="4.51" fill="#2A2114"/>
    <ellipse cx="66.4" cy="75" rx="3.38" ry="4.51" fill="#2A2114"/>
    <circle cx="38" cy="71.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="71.4" r="1.6" fill="#FFFFFF"/>
    <path d="M45 88 Q52 92 59 88" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>
    <path class="crack" d="M38 52 L50 66 L40 80 L52 94 L42 110"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
  <g class="armF" style="transform-origin:78px 82px">
    <path d="M78 82 L92 78" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>
    <path d="M78 82 L92 78" stroke="#9BA5AA" stroke-width="9" stroke-linecap="round"/>
    <!-- An iron, tinned at the tip. The tip is the aim. -->
    <path d="M94 74 L110 70 L118 72 L110 78 L94 82 Z"
          fill="#CBD3D6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M110 70 L118 72 L110 78 Z" fill="#B0582C"/>
  </g>
  <g class="fx" style="transform-origin:119px 74px">
    <path d="M119 62 L137 52 M123 74 L141 74 M119 86 L137 96"
          stroke="#9BA5AA" stroke-width="5" stroke-linecap="round" opacity=".9"/>
    <path d="M119 62 L131 57 M123 74 L135 74 M119 86 L131 91"
          stroke="#CBD3D6" stroke-width="2.2" stroke-linecap="round"/>
    <circle cx="135" cy="56" r="2.6" fill="#9BA5AA"/>
    <circle cx="137" cy="90" r="2.4" fill="#CBD3D6"/>
  </g>
</svg>
`;export{e as default};
