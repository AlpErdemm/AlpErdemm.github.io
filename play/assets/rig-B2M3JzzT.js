const r=`<!-- Lehim (Solder) - Rusted Cupboard - Spoil - melee, a tinned iron\r
     attackSpeed 1.00 -> round(20/1.00) = 20 ticks = 1.00 s\r
\r
     Archetype \`stab\`. The iron goes in point-first and comes back; a solder\r
     joint is made by touching, not by swinging.\r
\r
     \`WEAPON lehim [118, 72]\` is the iron's tinned tip.\r
\r
     Silhouette: the drip. A soft round mass whose base is a fringe of four\r
     long runs rather than a line - the only body in the Cupboard with no flat\r
     bottom, and the only one on the board that appears to be still moving\r
     while it stands. The runs are drawn to the ankle rather than to the hem\r
     on purpose: at 53 px a shallow fringe and the Rust's blotch were the same\r
     round mass, and the depth of the fringe is what separates them. One run\r
     has got away over the near shoulder, so the top is asymmetric too.\r
\r
     Cooler than anything else in the family: pewter against ten bodies of\r
     tin, iron and rust. Three families of Spoil bodies have to stay tellable\r
     apart, and a hue nobody else in this one owns is the cheapest way to keep\r
     the dearest body of it legible in a crowd.\r
\r
     Mass x 18..88, y 40..124. Materials 2 / fills 4: pewter 575E63 9BA5AA\r
     CBD3D6 * rust B0582C, one run. Brass eye F2C46A. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="lehim" style="--dur-atk:1.00s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="28" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:30px 82px">\r
    <path d="M30 82 L22 88" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 82 L22 88" stroke="#575E63" stroke-width="8" stroke-linecap="round"/>\r
    <circle cx="19" cy="91" r="6.5" fill="#9BA5AA" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 108 L41 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M44 108 L41 124" stroke="#575E63" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M31 124 Q26 129 29 134 L44 134 Q46 128 42 123 Z"\r
          fill="#9BA5AA" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 108 L65 124" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M62 108 L65 124" stroke="#575E63" stroke-width="10" stroke-linecap="round"/>\r
    <path d="M63 123 Q60 128 62 134 L77 134 Q79 129 74 124 Z"\r
          fill="#9BA5AA" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="body">\r
    <!-- The run that got away, over the shoulder, before the mass. -->\r
    <path d="M70 46 Q84 44 86 56 Q80 58 76 52 Z" fill="#CBD3D6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
\r
    <!-- The mass: fill, crescent, two cooled seams, gleam, then the ink. The\r
         base is a fringe of drips rather than a line - that is the outline. -->\r
    <path d="M52 40 Q80 44 82 74 Q84 98 76 106 Q76 132 66 108 Q60 134 52 108 Q44 134 38 108 Q28 132 28 106 Q20 98 22 74 Q24 44 52 40 Z" fill="#9BA5AA"/>\r
    <path d="M82 74 Q84 98 76 106 Q76 132 66 108 Q60 130 56 112 L56 102 Q72 100 74 74 Z" fill="#575E63"/>\r
    <path d="M30 96 Q52 104 74 96 M28 82 Q52 90 76 82" fill="none" stroke="#575E63" stroke-width="2.4" stroke-linecap="round"/>\r
    <path d="M32 58 Q28 70 30 82" fill="none" stroke="#CBD3D6" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M66 52 Q70 62 66 70" fill="none" stroke="#B0582C" stroke-width="2.6" stroke-linecap="round"/>\r
    <path d="M52 40 Q80 44 82 74 Q84 98 76 106 Q76 132 66 108 Q60 134 52 108 Q44 134 38 108 Q28 132 28 106 Q20 98 22 74 Q24 44 52 40 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <path d="M32 62 L44 64 M60 64 L72 62" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="74" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="74" rx="6.2" ry="7.13" fill="#F2C46A" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="75" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="75" rx="3.38" ry="4.51" fill="#2A2114"/>\r
    <circle cx="38" cy="71.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="71.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M45 88 Q52 92 59 88" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
    <path class="crack" d="M38 52 L50 66 L40 80 L52 94 L42 110"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
  <g class="armF" style="transform-origin:78px 82px">\r
    <path d="M78 82 L92 78" stroke="#2A2114" stroke-width="13" stroke-linecap="round"/>\r
    <path d="M78 82 L92 78" stroke="#9BA5AA" stroke-width="9" stroke-linecap="round"/>\r
    <!-- An iron, tinned at the tip. The tip is the aim. -->\r
    <path d="M94 74 L110 70 L118 72 L110 78 L94 82 Z"\r
          fill="#CBD3D6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M110 70 L118 72 L110 78 Z" fill="#B0582C"/>\r
  </g>\r
  <g class="fx" style="transform-origin:119px 74px">\r
    <path d="M119 62 L137 52 M123 74 L141 74 M119 86 L137 96"\r
          stroke="#9BA5AA" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M119 62 L131 57 M123 74 L135 74 M119 86 L131 91"\r
          stroke="#CBD3D6" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="135" cy="56" r="2.6" fill="#9BA5AA"/>\r
    <circle cx="137" cy="90" r="2.4" fill="#CBD3D6"/>\r
  </g>\r
</svg>\r
`;export{r as default};
