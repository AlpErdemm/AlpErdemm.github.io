const n=`<!-- Kispet · Eşya · "Sıkı bağlanır. Ağır da olur."
     Kırkpınar kispeti: kalın manda derisinden, yüksek belli, paçaları diz
     altında sıkılan pantolon. Tek insan-eşyası olduğu için silueti zaten
     benzersiz — iki bacak. 24 px'te belde çapraz bağcık, paçalarda iki koyu
     bilezik görünüyor; ikisi de olmasa sadece koyu bir V kalırdı. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="kispet">

  <!-- paçalar ve gövde -->
  <path d="M28 40 L92 40 L86 66 Q84 92 82 108 L63 108 Q61 88 60 74
           Q59 88 57 108 L38 108 Q36 92 34 66 Z"
        fill="#8A5A32" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M34 48 Q31 78 37 104" stroke="#C9973F" stroke-width="3" fill="none"/>
  <path d="M86 48 Q89 78 83 104" stroke="#C9973F" stroke-width="3" fill="none"/>
  <ellipse cx="45" cy="60" rx="7" ry="13" fill="#fff" opacity=".2"
           transform="rotate(-8 45 60)"/>

  <!-- paça bilezikleri -->
  <path d="M35 84 L58 84 L57 94 L36 94 Z"
        fill="#6B4223" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <path d="M63 84 L85 84 L84 94 L64 94 Z"
        fill="#6B4223" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>

  <!-- kemer -->
  <path d="M26 20 L94 20 L94 40 L26 40 Z"
        fill="#6B4223" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M42 24 L54 36 M54 24 L42 36 M66 24 L78 36 M78 24 L66 36"
        stroke="#E6D3A8" stroke-width="3.2" stroke-linecap="round"/>

  <!-- sarkan uçkur -->
  <path d="M60 40 Q54 50 60 60" stroke="#2A2114" stroke-width="7"
        fill="none" stroke-linecap="round"/>
  <path d="M60 40 Q54 50 60 60" stroke="#E6D3A8" stroke-width="3.6"
        fill="none" stroke-linecap="round"/>
</svg>
`;export{n as default};
