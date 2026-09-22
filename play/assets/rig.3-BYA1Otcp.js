const r=`<!-- Börek 3★: fresh from the oven. Same size as 2★; the stage is one steam curl off the dome and nigella seeds on the crust. Arms, fists, legs and boots are the 1★ parts unchanged. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="punch" data-unit="borek" data-tier="3" style="--dur-atk:0.95s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="25" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear fist rests at x 18 so its ink stays inside the safe area (x ≥ 6). -->\r
  <g class="armB" style="transform-origin:30px 92px">\r
    <path d="M30 92 L20 95" stroke="#2A2114" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 92 L20 95" stroke="#C98A3C" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M24 99 L26 90" stroke="#F3E3C0" stroke-width="3" stroke-linecap="round"/>\r
    <circle cx="18" cy="97" r="10" fill="#C98A3C" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M13 91 L13 104 M18 90 L18 105" stroke="#F3E3C0" stroke-width="3" stroke-linecap="round"/>\r
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
    <!-- The slice: front face, its shaded right face, two laminations, then\r
         the browned top crust over the lot. -->\r
    <path d="M22 40 Q22 34 28 34 L76 34 Q82 34 82 40 L82 108 Q82 116 74 116 L30 116 Q22 116 22 108 Z"\r
          fill="#C98A3C" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M76 36 L82 40 L82 108 Q82 116 74 116 L74 110 Q77 110 77 106 L77 46 Z" fill="#A96E2A"/>\r
    <path d="M24 44 L80 44 M24 52 L80 52 M24 60 L80 60" stroke="#F3E3C0" stroke-width="5"/>\r
    <path d="M24 34 Q52 22 80 34 L82 40 L22 40 Z"\r
          fill="#A96E2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M30 32 Q40 27 50 26.5" fill="none" stroke="#F3E3C0" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M58 19 Q52 15 57 10" fill="none" stroke="#F3E3C0" stroke-width="2.5" stroke-linecap="round"/>\r
    <g fill="#2A2114"><ellipse cx="44" cy="28" rx="1.8" ry="1.2"/><ellipse cx="56" cy="26.5" rx="1.8" ry="1.2"/><ellipse cx="66" cy="29.5" rx="1.8" ry="1.2"/></g>\r
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
    <!-- The Brawler's red sash, worn at the hem. -->\r
    <path d="M23 109 Q52 114 81 109" fill="none" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M23 109 Q52 114 81 109" fill="none" stroke="#B83A2E" stroke-width="4.5" stroke-linecap="round"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#C98A3C" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 74 Q38 69 44 74 M60 74 Q66 69 72 74" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="97" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 96 Q52 104 60 96 Q59 107 52 108 Q45 107 44 96 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 102 Q52 104 55 102" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M34 44 L46 70 L36 86 L48 100 L38 112"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:74px 92px">\r
    <path d="M74 92 L98 89" stroke="#2A2114" stroke-width="16" stroke-linecap="round"/>\r
    <path d="M74 92 L98 89" stroke="#C98A3C" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M86 95 L90 85 M92 95.5 L96 85.5" stroke="#F3E3C0" stroke-width="3.4" stroke-linecap="round"/>\r
    <circle cx="108" cy="87" r="12" fill="#C98A3C" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M97 81 Q102 87 97 93" fill="none" stroke="#2A2114" stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M103 77 L103 96 M110 76 L110 97" stroke="#F3E3C0" stroke-width="3" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:120px 87px">\r
    <path d="M120 74 L136 66 M124 87 L142 87 M120 100 L136 108"\r
          stroke="#F7DFA6" stroke-width="5" stroke-linecap="round" opacity=".9"/>\r
    <path d="M120 74 L131 69 M124 87 L137 87 M120 100 L131 105"\r
          stroke="#fff" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="132" cy="78" r="2.6" fill="#F3E3C0"/>\r
    <circle cx="134" cy="98" r="2.2" fill="#F3E3C0"/>\r
  </g>\r
</svg>\r
`;export{r as default};
