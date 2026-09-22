const r=`<!-- Bal Kavanozu (Honey Jar) 2★ — the jar grows, the honey rises\r
     Rule: TIERS.md. Re-derived for ticket 20 from the redrawn 1★ (the tier\r
     glob is live, so a stale file would have put the old art back on a\r
     merged jar). The jar widens 64 → 70 (x 17..87; the height stays at the\r
     80 cap because a limbless mass cannot rise off the ground), the honey\r
     line rises 66 → 62, the lid thickens (y 40..56) and the knob grows —\r
     the crown item, and on the roster's one limbless figure the top of the\r
     silhouette is the one place "more" can read. Knob top y 28. Shadow\r
     rx 29 for the wider mass. The face is the 1★'s exactly, as the\r
     Strudel's and the Meatball's are across their tiers.\r
     It does not fight: \`data-atk="none"\`, no arms, no legs, at all three\r
     tiers. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="none" data-unit="balkavanozu" data-tier="2" style="--dur-atk:0s;--dur-idle:2.4s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#2A2114" opacity=".32"/>\r
\r
  <g class="body" style="transform-origin:52px 132px">\r
    <path d="M21 56 L83 56 Q87 56 87 62 L87 124 Q87 134 77 134 L27 134 Q17 134 17 124 L17 62 Q17 56 21 56 Z"\r
          fill="#C8CCD6"/>\r
    <path d="M17 64 Q34 59 52 63 Q70 67 87 62 L87 124 Q87 134 77 134 L27 134 Q17 134 17 124 Z" fill="#E8A93A"/>\r
    <path d="M87 84 L87 124 Q87 134 77 134 L52 134 L52 129 L75 129 Q82 129 82 122 L82 84 Z" fill="#C07A1E"/>\r
    <path d="M23 72 L23 100" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>\r
    <path d="M21 56 L83 56 Q87 56 87 62 L87 124 Q87 134 77 134 L27 134 Q17 134 17 124 L17 62 Q17 56 21 56 Z"\r
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
\r
    <!-- The crown: a thicker lid and a bigger knob. -->\r
    <path d="M15 56 L89 56 L89 46 Q89 40 83 40 L21 40 Q15 40 15 46 Z"\r
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M19 48 L85 48" stroke="#C9A66B" stroke-width="2.2" stroke-linecap="round"/>\r
    <rect x="43" y="28" width="18" height="14" rx="4" fill="#6E4A2A" stroke="#2A2114" stroke-width="3"/>\r
\r
    <path d="M83 58 Q89 68 86 76 Q82 78 81 72 Q80 64 83 58 Z"\r
          fill="#E8A93A" stroke="#2A2114" stroke-width="2.3" stroke-linejoin="round"/>\r
\r
    <!-- The cast face (style bible §5), eye y 88 — the 1★'s. -->\r
    <path d="M32 76 L44 78 M60 78 L72 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="39" cy="88" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="65" cy="88" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>\r
    <ellipse cx="40.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <ellipse cx="66.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>\r
    <circle cx="38" cy="85.4" r="1.6" fill="#FFFFFF"/>\r
    <circle cx="64" cy="85.4" r="1.6" fill="#FFFFFF"/>\r
    <path d="M44 101 Q52 106 60 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>\r
\r
    <path d="M52 114 L59 118 L59 126 L52 130 L45 126 L45 118 Z"\r
          fill="none" stroke="#C07A1E" stroke-width="2.4" stroke-linejoin="round"/>\r
\r
    <g data-expression="cute">\r
      <path d="M32 78 Q38 73 44 78 M60 78 Q66 73 72 78" fill="none" stroke="#E8A93A" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M32 78 Q38 73 44 78 M60 78 Q66 73 72 78" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="31" cy="101" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="101" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>\r
      <path d="M44 100 Q52 108 60 100 Q59 111 52 112 Q45 111 44 100 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>\r
      <path d="M49 106 Q52 108 55 106" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M28 66 L44 80 L32 96 L50 110 L38 126"\r
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
</svg>\r
`;export{r as default};
