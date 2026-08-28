const n=`<!-- Bal Kavanozu 3★ — petek doldu
     Kural: TIERS.md. Cam ve kapak 2★ ile birebir; ölçü değişmedi. Evre:
     kavanozun içinde petek tamamlanıyor — üç altıgen bir kümeye kapanıyor,
     kabarcık sayısı artıyor, kapağın altından sızan damla camın boyunca
     uzun bir iz bırakıyor. "Dövüşmez. Damlar." — 3★'da daha çok damlar.
     Petek altıgeni tahtanın hex'ine selam; bal altıgen depolanır. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="none" data-unit="balkavanozu" data-tier="3" style="--dur-atk:0s;--dur-idle:2.4s">

  <ellipse class="shadow" cx="52" cy="136" rx="30" ry="6.5" fill="#000" opacity=".33"/>

  <g class="body">
    <rect x="45" y="18" width="14" height="9" rx="3" fill="#B8873F" stroke="#2A2114" stroke-width="3"/>
    <rect x="24" y="26" width="56" height="17" rx="5" fill="#B8873F" stroke="#2A2114" stroke-width="4.2"/>
    <path d="M29 31 L75 31" stroke="#E0B063" stroke-width="2.6" opacity=".55" stroke-linecap="round"/>

    <path d="M27 43 L77 43 L81 122 Q81 133 66 133 L38 133 Q23 133 23 122 Z"
          fill="#F2E3B8" stroke="#2A2114" stroke-width="4.2" stroke-linejoin="round"/>

    <path d="M25.8 62 Q39 58 52 61 T78.2 62 L80.6 122 Q80.6 131 66 131 L38 131 Q23.4 131 23.4 122 Z"
          fill="#D9A441"/>
    <path d="M24.7 95 L79.3 95 L80.6 122 Q80.6 131 66 131 L38 131 Q23.4 131 23.4 122 Z"
          fill="#C08A2E" opacity=".55"/>

    <!-- evre: petek tamamlandı — üç altıgen bir küme -->
    <path d="M45.9 92 L45.9 100 L39 104 L32.1 100 L32.1 92 L39 88 Z"
          fill="#E8C77A" stroke="#8A6320" stroke-width="2.4" opacity=".85" stroke-linejoin="round"/>
    <path d="M59.7 92 L59.7 100 L52.8 104 L45.9 100 L45.9 92 L52.8 88 Z"
          fill="#E8C77A" stroke="#8A6320" stroke-width="2.4" opacity=".8" stroke-linejoin="round"/>
    <path d="M52.8 104 L52.8 112 L45.9 116 L39 112 L39 104 L45.9 100 Z"
          fill="#E8C77A" stroke="#8A6320" stroke-width="2.4" opacity=".75" stroke-linejoin="round"/>
    <path d="M68.6 106.8 L68.6 113.3 L63 116.5 L57.4 113.3 L57.4 106.8 L63 103.5 Z"
          fill="none" stroke="#8A6320" stroke-width="2" opacity=".45" stroke-linejoin="round"/>

    <!-- evre: kabarcık arttı -->
    <circle cx="65" cy="74" r="3.4" fill="#F7DE9C" opacity=".8"/>
    <circle cx="44" cy="80" r="2.6" fill="#F7DE9C" opacity=".65"/>
    <circle cx="57" cy="70" r="2" fill="#F7DE9C" opacity=".7"/>
    <circle cx="70" cy="86" r="2.2" fill="#F7DE9C" opacity=".55"/>
    <circle cx="34" cy="72" r="1.8" fill="#F7DE9C" opacity=".6"/>

    <!-- evre: damla artık camın boyunca akıyor -->
    <path d="M77 45 Q81.5 56 80.8 70 Q80.4 84 78.6 92 Q74.6 90 74.8 74 Q75 56 77 45 Z"
          fill="#E8B85A" opacity=".9"/>
    <path d="M78 96 C74.5 101 74.5 107 77.5 109 C80.5 107 80.5 101 78 96 Z"
          fill="#E8B85A" stroke="#B8873F" stroke-width="1.6" opacity=".95"/>

    <rect x="31" y="52" width="5" height="70" rx="2.5" fill="#fff" opacity=".38"/>

    <path d="M37 45 L45 43.5 M59 43.5 L67 45" stroke="#2A2114" stroke-width="2.6" stroke-linecap="round"/>
    <circle cx="42" cy="52" r="4.6" fill="#2A2114"/><circle cx="62" cy="52" r="4.6" fill="#2A2114"/>
    <circle cx="43.6" cy="50.2" r="2.1" fill="#fff"/><circle cx="63.6" cy="50.2" r="2.1" fill="#fff"/>
    <path d="M45 58 Q52 63 59 58" stroke="#2A2114" stroke-width="2.8" fill="none" stroke-linecap="round"/>

    <path class="crack" d="M30 54 L46 68 L34 84 L52 96 L40 114"
          stroke="#1A1410" stroke-width="3.2" fill="none" stroke-linejoin="round"/>
    <path class="crack" d="M52 96 L70 88 L76 106"
          stroke="#1A1410" stroke-width="2.6" fill="none" stroke-linejoin="round"/>
  </g>
</svg>
`;export{n as default};
