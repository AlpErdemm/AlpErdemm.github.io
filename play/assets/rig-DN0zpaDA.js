const r=`<!-- Pide (Flatcake) · Dough 3 · Frontline · melee, shield\r
     attackSpeed 1.00 → 20 ticks = 1.00 s\r
\r
     Archetype \`stab\`: armF pulls back and lunges, and armF is the shield, so\r
     the attack is a shield bash. The contact point (120, 84) is the shield's\r
     right edge at mid height (\`WEAPON\` in \`unitRig.ts\`).\r
\r
     Redrawn for ticket 15 against docs/style-bible.md. Mass = one upright\r
     boat, pointed at the top like the bread, x 20..84 (64 wide), y 32..110\r
     (78 tall), ratio 1.22: a crust rim with the filling as the face plate,\r
     the same construction as simit's ring (the plate is the material's light\r
     tone inside an inner ink edge). The old split-crust frame, armour torso,\r
     sash, apron, medallion, mace and walnut shield all went. Eye y 78 = 59%\r
     of the mass. Materials 4 / fills 9: crust D0873B 9A5A24 EEB967 · topping\r
     B83A2C · leather 6E4A2A 4A3826 C9A66B · steel 8A8F98 C8CCD6 (the Dough\r
     batch's shared leather and steel). One shade crescent (9A5A24, lower\r
     right of the rim), one gleam (EEB967, upper left). Tint lines, one: the\r
     shield's inner keyline. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="pide" style="--dur-atk:1.00s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="27" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:28px 88px">\r
    <path d="M30 86 L20 100" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M30 86 L20 100" stroke="#D0873B" stroke-width="10" stroke-linecap="round"/>\r
    <circle cx="19" cy="103" r="6.5" fill="#9A5A24" stroke="#2A2114" stroke-width="3"/>\r
  </g>\r
\r
  <!-- Legs and boots are the batch's shared construction (style bible §6):\r
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
    <!-- The boat: rim, crescent, gleam, then the filling plate with its own\r
         ink edge so rim and plate separate at 40 px. -->\r
    <path d="M52 32 C70 40 84 60 84 78 C84 96 70 108 52 110 C34 108 20 96 20 78 C20 60 34 40 52 32 Z"\r
          fill="#D0873B" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M84 78 C84 96 70 108 52 110 L53 104 C66 102 78 93 78 78 Z" fill="#9A5A24"/>\r
    <path d="M27 62 Q30 50 40 42" fill="none" stroke="#EEB967" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M52 42 C66 48 76 62 76 78 C76 93 66 101 52 102 C38 101 28 93 28 78 C28 62 38 48 52 42 Z"\r
          fill="#EEB967" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
\r
    <!-- Toppings on the filling, kept off the face band. -->\r
    <g fill="#B83A2C">\r
      <ellipse cx="42" cy="51" rx="3" ry="2.2"/>\r
      <ellipse cx="61" cy="50" rx="3" ry="2.2"/>\r
      <ellipse cx="52" cy="58" rx="2.6" ry="2"/>\r
      <ellipse cx="36" cy="95" rx="2.6" ry="2"/>\r
      <ellipse cx="68" cy="95" rx="2.6" ry="2"/>\r
    </g>\r
\r
    <!-- The cast face (style bible §5), eye y 78. -->\r
    <path d="M32 66 L44 68 M60 68 L72 66" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="78" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="78" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="79" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="79" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="75.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="75.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 91 Q52 96 60 91" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#EEB967" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 90 Q52 98 60 90 Q59 101 52 102 Q45 101 44 90 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 96 Q52 98 55 96" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M37 44 L48 58 L39 72 L51 86 L41 100"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front arm and shield as one part. The shield is as large as the mass, so\r
       it takes the body stroke (4) rather than the detail stroke. -->\r
  <g class="armF" style="transform-origin:78px 88px">\r
    <path d="M74 86 L90 88" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M74 86 L90 88" stroke="#D0873B" stroke-width="10" stroke-linecap="round"/>\r
    <circle cx="91" cy="88" r="6.5" fill="#9A5A24" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M97 52 L115 52 Q120 52 120 57 L120 111 Q120 116 115 116 L97 116 Q92 116 92 111 L92 57 Q92 52 97 52 Z"\r
          fill="#C9A66B" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M98.5 56.5 L113.5 56.5 Q115.5 56.5 115.5 58.5 L115.5 109.5 Q115.5 111.5 113.5 111.5 L98.5 111.5 Q96.5 111.5 96.5 109.5 L96.5 58.5 Q96.5 56.5 98.5 56.5 Z"\r
          fill="none" stroke="#6E4A2A" stroke-width="2" stroke-linejoin="round"/>\r
    <circle cx="106" cy="84" r="7" fill="#8A8F98" stroke="#2A2114" stroke-width="3"/>\r
    <circle cx="106" cy="84" r="2.2" fill="#C8CCD6"/>\r
    <g fill="#8A8F98">\r
      <circle cx="100" cy="61" r="2"/><circle cx="112" cy="61" r="2"/>\r
      <circle cx="100" cy="107" r="2"/><circle cx="112" cy="107" r="2"/>\r
    </g>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:120px 84px">\r
    <ellipse cx="130" cy="84" rx="10" ry="29" fill="none" stroke="#F0B83E"\r
             stroke-width="6.5" opacity=".82"/>\r
    <ellipse cx="130" cy="84" rx="9" ry="27" fill="none" stroke="#FFF0B2"\r
             stroke-width="2.5" opacity=".96"/>\r
    <path d="M141 60 L146 55 M144 84 L150 84 M141 108 L146 113" stroke="#F8CD63"\r
          stroke-width="3.2" stroke-linecap="round"/>\r
    <circle cx="136" cy="66" r="2.6" fill="#FFF0B2"/>\r
    <circle cx="139" cy="101" r="2.3" fill="#F0B83E"/>\r
  </g>\r
</svg>\r
`;export{r as default};
