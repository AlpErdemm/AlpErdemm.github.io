const e=`<!-- Bal Kavanozu (Honey Jar) 2★ — the jar grows, the honey rises
     Rule: TIERS.md. Re-derived for ticket 20 from the redrawn 1★ (the tier
     glob is live, so a stale file would have put the old art back on a
     merged jar). The jar widens 64 → 70 (x 17..87; the height stays at the
     80 cap because a limbless mass cannot rise off the ground), the honey
     line rises 66 → 62, the lid thickens (y 40..56) and the knob grows —
     the crown item, and on the roster's one limbless figure the top of the
     silhouette is the one place "more" can read. Knob top y 28. Shadow
     rx 29 for the wider mass. The face is the 1★'s exactly, as the
     Strudel's and the Meatball's are across their tiers.
     It does not fight: \`data-atk="none"\`, no arms, no legs, at all three
     tiers. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="none" data-unit="balkavanozu" data-tier="2" style="--dur-atk:0s;--dur-idle:2.4s">

  <ellipse class="shadow" cx="52" cy="137" rx="29" ry="6" fill="#2A2114" opacity=".32"/>

  <g class="body" style="transform-origin:52px 132px">
    <path d="M21 56 L83 56 Q87 56 87 62 L87 124 Q87 134 77 134 L27 134 Q17 134 17 124 L17 62 Q17 56 21 56 Z"
          fill="#C8CCD6"/>
    <path d="M17 64 Q34 59 52 63 Q70 67 87 62 L87 124 Q87 134 77 134 L27 134 Q17 134 17 124 Z" fill="#E8A93A"/>
    <path d="M87 84 L87 124 Q87 134 77 134 L52 134 L52 129 L75 129 Q82 129 82 122 L82 84 Z" fill="#C07A1E"/>
    <path d="M23 72 L23 100" fill="none" stroke="#FFFFFF" stroke-width="4" stroke-linecap="round"/>
    <path d="M21 56 L83 56 Q87 56 87 62 L87 124 Q87 134 77 134 L27 134 Q17 134 17 124 L17 62 Q17 56 21 56 Z"
          fill="none" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

    <!-- The crown: a thicker lid and a bigger knob. -->
    <path d="M15 56 L89 56 L89 46 Q89 40 83 40 L21 40 Q15 40 15 46 Z"
          fill="#6E4A2A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M19 48 L85 48" stroke="#C9A66B" stroke-width="2.2" stroke-linecap="round"/>
    <rect x="43" y="28" width="18" height="14" rx="4" fill="#6E4A2A" stroke="#2A2114" stroke-width="3"/>

    <path d="M83 58 Q89 68 86 76 Q82 78 81 72 Q80 64 83 58 Z"
          fill="#E8A93A" stroke="#2A2114" stroke-width="2.3" stroke-linejoin="round"/>

    <!-- The cast face (style bible §5), eye y 88 — the 1★'s. -->
    <path d="M32 76 L44 78 M60 78 L72 76" stroke="#2A2114" stroke-width="3.4" stroke-linecap="round"/>
    <ellipse cx="39" cy="88" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="65" cy="88" rx="6.6" ry="7.6" fill="#FFFFFF" stroke="#2A2114" stroke-width="2.3"/>
    <ellipse cx="40.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <ellipse cx="66.4" cy="89" rx="3.6" ry="4.8" fill="#2A2114"/>
    <circle cx="38" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <circle cx="64" cy="85.4" r="1.6" fill="#FFFFFF"/>
    <path d="M44 101 Q52 106 60 101" stroke="#2A2114" stroke-width="3" fill="none" stroke-linecap="round"/>

    <path d="M52 114 L59 118 L59 126 L52 130 L45 126 L45 118 Z"
          fill="none" stroke="#C07A1E" stroke-width="2.4" stroke-linejoin="round"/>

    <g data-expression="cute">
      <path d="M32 78 Q38 73 44 78 M60 78 Q66 73 72 78" fill="none" stroke="#E8A93A" stroke-width="7" stroke-linecap="round"/>
      <path d="M32 78 Q38 73 44 78 M60 78 Q66 73 72 78" fill="none" stroke="#2A2114" stroke-width="2.8" stroke-linecap="round"/>
      <ellipse cx="31" cy="101" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/><ellipse cx="73" cy="101" rx="3.2" ry="1.9" fill="#E48A76" opacity=".68"/>
      <path d="M44 100 Q52 108 60 100 Q59 111 52 112 Q45 111 44 100 Z" fill="#3B211C" stroke="#2A2114" stroke-width="2.3"/>
      <path d="M49 106 Q52 108 55 106" fill="none" stroke="#ED8A74" stroke-width="1.8" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M28 66 L44 80 L32 96 L50 110 L38 126"
          stroke="#2A2114" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>
</svg>
`;export{e as default};
