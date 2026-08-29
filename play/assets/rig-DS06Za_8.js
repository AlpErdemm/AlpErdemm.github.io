const n=`<!-- Kaymak · Eşya · "Ağırlaşır. Yerinden oynamaz."
     Tabağa konmuş bir rulo kaymak, üstünde bal. Yatık kalın silindir ve
     sol ucundaki sarmal, 24 px'te bu eşyayı diğer yuvarlaklardan ayıran
     şey: kapak dik durur, tepsi yassıdır, bu ise yan yatmış bir ağırlıktır.
     Bal çizgisi de rengi kremin dışına taşıyan tek şey. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="kaymak">

  <!-- tabak -->
  <path d="M14 90 Q60 80 106 90 Q104 104 60 108 Q16 104 14 90 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M26 92 Q60 86 94 92" stroke="#B9C2CC" stroke-width="3" fill="none"/>

  <!-- rulo -->
  <path d="M36 58 L86 58 Q98 58 98 76 Q98 94 86 94 L36 94 Z"
        fill="#F7F1E2" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <circle cx="36" cy="76" r="18" fill="#F7F1E2" stroke="#2A2114" stroke-width="3.6"/>
  <path d="M36 63 A13 13 0 1 1 23 76" stroke="#D6CDB6" stroke-width="3.2" fill="none"/>
  <path d="M36 70 A6 6 0 1 1 30 76" stroke="#D6CDB6" stroke-width="3" fill="none"/>
  <ellipse cx="70" cy="66" rx="14" ry="4" fill="#fff" opacity=".2"/>

  <!-- bal -->
  <path d="M50 58 Q62 48 74 54 Q84 58 92 52" stroke="#2A2114" stroke-width="9"
        fill="none" stroke-linecap="round"/>
  <path d="M50 58 Q62 48 74 54 Q84 58 92 52" stroke="#E9B14A" stroke-width="5"
        fill="none" stroke-linecap="round"/>
  <path d="M92 52 Q96 62 92 70 Q88 62 92 52 Z"
        fill="#E9B14A" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
</svg>
`;export{n as default};
