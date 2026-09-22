const r=`<!-- Mantı (Dumpling) · Dough 4 · Assassin · melee, twin knives\r
     attackSpeed 0.69 → round(20/0.69) = 29 ticks = 1.45 s\r
\r
     Archetype \`stab\`: armF pulls back and lunges. The forward blade's tip is\r
     authored at (119, 116) for \`WEAPON\` aiming (\`unitRig.ts\`); the rear knife\r
     is armB's and is reverse-gripped so it points down and away.\r
\r
     Redrawn for ticket 15 against docs/style-bible.md. Mass = one pinched\r
     dumpling, x 19..85 (66 wide), y 34..112 (78 tall), ratio 1.18, with the\r
     gathered top as the crown item (y 22). The old rig's two dough "ears",\r
     yogurt crown, V-scarf, apron and two mascot pouches all went: at 40 px\r
     they were one brown texture. Eye y 78 = 56% of the mass. Materials 4 /\r
     fills 9: dough EAD4A8 C9A86E F7EBCB · cloth 8E2F2A B94A3A · leather\r
     6E4A2A 4A3826 C9A66B · steel 8A8F98 C8CCD6. Leather and steel are the\r
     Dough batch's shared values (simit, pide, borek use the same). One shade\r
     crescent (C9A86E, lower right), one gleam (F7EBCB, upper left). Tint\r
     lines, three: the pleats running from the pinch. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="manti" style="--dur-atk:1.45s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="28" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <!-- Rear arm and reverse-grip knife. The blade points down-left so the left\r
       silhouette stays open; its tip stops at x 8 (ink to 6.5). -->\r
  <g class="armB" style="transform-origin:29px 91px">\r
    <path d="M31 88 Q24 92 19 102" fill="none" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M31 88 Q24 92 19 102" fill="none" stroke="#EAD4A8" stroke-width="10" stroke-linecap="round"/>\r
    <circle cx="18" cy="104" r="6.5" fill="#EAD4A8" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M15 109 L13 113" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M15 109 L13 113" stroke="#8E2F2A" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M9 111.5 L17.5 113.5 L13 128 L8 126.5 Z"\r
          fill="#C8CCD6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
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
    <!-- Kerchief tails fly out behind the body, so they are drawn first. -->\r
    <path d="M26 100 Q14 96 8 104 Q14 108 24 106 Z"\r
          fill="#8E2F2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M26 104 Q16 110 10 118 Q19 116 26 110 Z"\r
          fill="#8E2F2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
\r
    <!-- The dumpling: mass, crescent, gleam, then the pinched top over it. -->\r
    <path d="M52 34 C74 34 86 54 85 78 C84 98 72 112 52 112 C32 112 20 98 19 78 C18 54 30 34 52 34 Z"\r
          fill="#EAD4A8" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M85 78 C84 98 72 112 52 112 L54 106 C70 106 79 94 79 78 Z" fill="#C9A86E"/>\r
    <path d="M27 56 Q31 44 40 40" fill="none" stroke="#F7EBCB" stroke-width="5" stroke-linecap="round"/>\r
    <path d="M42 40 Q46 26 52 22 Q58 26 62 40 Z"\r
          fill="#EAD4A8" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M46 40 Q44 50 40 58 M52 40 L52 56 M58 40 Q60 50 64 58"\r
          fill="none" stroke="#C9A86E" stroke-width="2.2" stroke-linecap="round"/>\r
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
    <!-- Knife belt with a steel buckle; the kerchief's knot sits on its left. -->\r
    <path d="M22 104 Q52 112 82 104" fill="none" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M22 104 Q52 112 82 104" fill="none" stroke="#6E4A2A" stroke-width="5" stroke-linecap="round"/>\r
    <rect x="47" y="104" width="10" height="8" rx="1.5" fill="#8A8F98" stroke="#2A2114" stroke-width="2.5"/>\r
    <circle cx="26" cy="104" r="4.5" fill="#B94A3A" stroke="#2A2114" stroke-width="3"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#EAD4A8" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 68 Q38 63 44 68 M60 68 Q66 63 72 68" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="91" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 90 Q52 98 60 90 Q59 101 52 102 Q45 101 44 90 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 96 Q52 98 55 96" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M34 48 L47 62 L38 76 L50 88 L42 102"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Forward arm and the dominant blade; tip exactly at (119, 116). -->\r
  <g class="armF" style="transform-origin:75px 91px">\r
    <path d="M74 88 Q84 92 92 102" fill="none" stroke="#2A2114" stroke-width="14" stroke-linecap="round"/>\r
    <path d="M74 88 Q84 92 92 102" fill="none" stroke="#EAD4A8" stroke-width="10" stroke-linecap="round"/>\r
    <circle cx="93" cy="103" r="6.5" fill="#EAD4A8" stroke="#2A2114" stroke-width="3"/>\r
    <path d="M97 106 L102 109" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
    <path d="M97 106 L102 109" stroke="#8E2F2A" stroke-width="4.5" stroke-linecap="round"/>\r
    <path d="M100 105.5 L117 111.5 L119 116 L112 119.5 L99 113.5 Z"\r
          fill="#C8CCD6" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:119px 116px">\r
    <path d="M119 116 Q134 101 143 84" fill="none" stroke="#E36B2B" stroke-width="6"\r
          stroke-linecap="round" opacity=".9"/>\r
    <path d="M120 115 Q132 103 139 91" fill="none" stroke="#FFE19A" stroke-width="2.6"\r
          stroke-linecap="round"/>\r
    <path d="M128 105 L136 101 M132 96 L140 92" stroke="#B33125" stroke-width="3"\r
          stroke-linecap="round"/>\r
    <circle cx="137" cy="111" r="2.6" fill="#A83227"/><circle cx="142" cy="101" r="2.1" fill="#D94A2E"/>\r
  </g>\r
</svg>\r
`;export{r as default};
