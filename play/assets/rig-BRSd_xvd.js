const n=`<!-- Büyük Sofra · Tarif · "Masaya bir kanat eklendi. Bir ağız daha sığar."
     Uzatılmış sofra: iki bacaklı uzun tabla, ortasında sonradan eklenen açık
     renk kanat, üstünde kenardan taşan kase dizisi.
     24 px'te üç şey okunuyor — yatay kalın tabla, ortasındaki açık ekleme,
     ve tablanın üstünde sağa taşan kaseler.
     Ziyafet Sunucusu'yla karışmasın diye kapaklı tepsi yok: o tek bir kubbe,
     bu bir mobilya. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-recipe="buyuk_sofra">

  <!-- kaseler, tablanın arkasında dursun ki tabla önde okunsun -->
  <path d="M8 48 Q8 64 20 64 Q32 64 32 48 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>
  <path d="M11 48 Q20 40 29 48 Z" fill="#B83F28" stroke="#2A2114" stroke-width="2.6"/>
  <path d="M34 40 Q34 64 49 64 Q64 64 64 40 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>
  <path d="M38 40 Q49 30 60 40 Z" fill="#5A9237" stroke="#2A2114" stroke-width="2.8"/>
  <path d="M66 46 Q66 64 78 64 Q90 64 90 46 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>
  <path d="M69 46 Q78 37 87 46 Z" fill="#F9D783" stroke="#2A2114" stroke-width="2.6"/>
  <!-- kenardan taşan sonuncusu -->
  <path d="M94 52 Q94 64 104 64 Q114 64 114 52 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <path d="M97 52 Q104 45 111 52 Z" fill="#B83F28" stroke="#2A2114" stroke-width="2.4"/>

  <!-- tabla -->
  <path d="M8 64 L106 64 L106 80 L8 80 Z"
        fill="#96633A" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <!-- sonradan eklenen kanat: aynı tahta, daha yeni -->
  <path d="M44 64 L78 64 L78 80 L44 80 Z" fill="#B58A57"/>
  <path d="M44 66 L44 78 M78 66 L78 78" stroke="#6E4526" stroke-width="3.6"/>
  <ellipse cx="26" cy="70" rx="13" ry="3" fill="#FFF3DC" opacity=".26"/>

  <!-- bacaklar -->
  <path d="M20 80 L32 80 L30 108 L18 108 Z"
        fill="#54371F" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>
  <path d="M84 80 L96 80 L98 108 L86 108 Z"
        fill="#54371F" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>
  <path d="M28 93 L88 93" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
  <path d="M28 93 L88 93" stroke="#54371F" stroke-width="4" stroke-linecap="round"/>
</svg>
`;export{n as default};
