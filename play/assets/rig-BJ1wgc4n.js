const i=`<!-- Tuz · Eşya · "Keskinleşir. İnceleşir."
     Tuzluk: bombeli delikli kapak, kalın camdan bodur gövde, dibinde tuz.
     24 px'te üç şey okunuyor — kapaktaki delik dizisi, kapak ile gövde
     arasındaki koyu bilezik, ve yana dökülmüş iri kristaller.
     Zeytinyağı şişesiyle karışmasın diye bilerek bodur ve geniş çizildi:
     onun uzun bir boynu var, bunun hiç yok. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="tuz">

  <!-- cam gövde -->
  <path d="M40 52 L80 52 L80 94 Q80 106 66 106 L54 106 Q40 106 40 94 Z"
        fill="#DCE4EA" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <!-- içindeki tuz, camın içinde durduğu için çizgisiz -->
  <path d="M44 70 L76 70 L76 94 Q76 102 66 102 L54 102 Q44 102 44 94 Z"
        fill="#F7F1E2"/>
  <ellipse cx="49" cy="66" rx="5" ry="11" fill="#fff" opacity=".2"
           transform="rotate(-10 49 66)"/>

  <!-- kapak -->
  <path d="M36 46 Q36 22 60 20 Q84 22 84 46 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>
  <circle cx="52" cy="34" r="2.6" fill="#2A2114" opacity=".65"/>
  <circle cx="60" cy="30" r="2.6" fill="#2A2114" opacity=".65"/>
  <circle cx="68" cy="34" r="2.6" fill="#2A2114" opacity=".65"/>
  <circle cx="56" cy="41" r="2.3" fill="#2A2114" opacity=".65"/>
  <circle cx="65" cy="41" r="2.3" fill="#2A2114" opacity=".65"/>
  <path d="M34 44 L86 44 L86 53 L34 53 Z"
        fill="#B9C2CC" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>

  <!-- dökülen kristaller: küp, çünkü tuz küp kırılır -->
  <path d="M90 90 L99 87 L102 96 L93 99 Z"
        fill="#F7F1E2" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M17 97 L26 94 L29 103 L20 106 Z"
        fill="#F7F1E2" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M99 74 L106 72 L108 79 L101 81 Z"
        fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M27 82 L33 80 L35 87 L29 89 Z"
        fill="#F0E6D2" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>
</svg>
`;export{i as default};
