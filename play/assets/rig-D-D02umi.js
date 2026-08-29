const n=`<!-- Zeytinyağı · Eşya · "Kayar gider. Ama geç dolar."
     Uzun boyunlu, mantar tıpalı yağ şişesi ve dibinde bir zeytin. Tuzlukla
     aynı raftaki tek diğer kap olduğu için ayrım boyundan yapıldı: bu şişe
     ince ve uzun, tuzluk bodur ve deliklidir. Krem etiket koyu zeytin
     yeşilini bölüyor, yoksa 24 px'te düz bir sütun olarak okunurdu. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="zeytinyagi">

  <!-- mantar -->
  <path d="M50 6 L70 6 L70 22 L50 22 Z"
        fill="#C08A4E" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>
  <path d="M50 14 L70 14" stroke="#9A6C38" stroke-width="2.6"/>

  <!-- boyun -->
  <path d="M52 20 L68 20 L68 44 L52 44 Z"
        fill="#8FA23F" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

  <!-- gövde -->
  <path d="M52 42 Q52 54 42 62 Q32 70 32 86 L32 104 Q32 112 42 112
           L78 112 Q88 112 88 104 L88 86 Q88 70 78 62 Q68 54 68 42 Z"
        fill="#8FA23F" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <ellipse cx="44" cy="76" rx="6" ry="14" fill="#fff" opacity=".2"
           transform="rotate(-12 44 76)"/>

  <!-- etiket -->
  <path d="M38 76 L82 76 L82 100 L38 100 Z"
        fill="#F0E6D2" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>
  <circle cx="50" cy="88" r="6.5" fill="#3F6B37" stroke="#2A2114" stroke-width="2.6"/>
  <path d="M64 84 L76 84 M64 93 L73 93" stroke="#6B5C42"
        stroke-width="3" stroke-linecap="round"/>

  <!-- yanına düşmüş zeytin ve yaprağı -->
  <path d="M12 92 Q22 86 26 94 Q16 98 12 92 Z"
        fill="#5E8C4A" stroke="#2A2114" stroke-width="2.8" stroke-linejoin="round"/>
  <ellipse cx="18" cy="104" rx="9" ry="8" fill="#3F6B37"
           stroke="#2A2114" stroke-width="3.2"/>
  <ellipse cx="15" cy="101" rx="3" ry="2" fill="#fff" opacity=".2"
           transform="rotate(-30 15 101)"/>
</svg>
`;export{n as default};
