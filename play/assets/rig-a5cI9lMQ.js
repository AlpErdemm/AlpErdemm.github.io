const n=`<!-- Kapak · Eşya · "Kapalı durur. Nadiren açılır."
     Tencere kapağı, yandan: alçak çelik kubbe, geniş oturma kenarı ve
     tepesinde ahşap topuz. Topuz sadece süs değil, silueti belirleyen şey —
     tepsi yassı bir oval, bu ise ovalin üstünde bir çıkıntı taşıyor.
     Buhar yok: bu kapak kapalı duruyor, notu da onu söylüyor. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="kapak">

  <!-- oturma kenarı -->
  <ellipse cx="60" cy="82" rx="50" ry="11" fill="#8E97A1"
           stroke="#2A2114" stroke-width="4"/>

  <!-- kubbe -->
  <path d="M14 82 Q18 40 60 40 Q102 40 106 82 Z"
        fill="#B9C2CC" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M24 76 Q28 52 48 46" stroke="#E9EEF6" stroke-width="4.5"
        fill="none" stroke-linecap="round"/>
  <ellipse cx="44" cy="58" rx="13" ry="6" fill="#fff" opacity=".2"
           transform="rotate(-26 44 58)"/>
  <path d="M18 78 Q60 70 102 78" stroke="#8E97A1" stroke-width="3" fill="none"/>

  <!-- topuz -->
  <path d="M54 26 L66 26 L66 42 L54 42 Z"
        fill="#6B4223" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <ellipse cx="60" cy="22" rx="13" ry="10" fill="#8A5A32"
           stroke="#2A2114" stroke-width="3.8"/>
  <ellipse cx="55" cy="19" rx="4.5" ry="2.6" fill="#fff" opacity=".2"
           transform="rotate(-20 55 19)"/>

  <!-- kenardaki perçinler -->
  <circle cx="26" cy="86" r="3" fill="#2A2114" opacity=".6"/>
  <circle cx="60" cy="90" r="3" fill="#2A2114" opacity=".6"/>
  <circle cx="94" cy="86" r="3" fill="#2A2114" opacity=".6"/>
</svg>
`;export{n as default};
