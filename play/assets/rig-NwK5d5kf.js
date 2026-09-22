const r=`<!-- Büyük Sofra · Tarif · "Masaya bir kanat eklendi. Bir ağız daha sığar."\r
     Uzatılmış sofra: iki bacaklı uzun tabla, ortasında sonradan eklenen açık\r
     renk kanat, üstünde kenardan taşan kase dizisi.\r
     24 px'te üç şey okunuyor — yatay kalın tabla, ortasındaki açık ekleme,\r
     ve tablanın üstünde sağa taşan kaseler.\r
     Ziyafet Sunucusu'yla karışmasın diye kapaklı tepsi yok: o tek bir kubbe,\r
     bu bir mobilya. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-recipe="buyuk_sofra">\r
\r
  <!-- kaseler, tablanın arkasında dursun ki tabla önde okunsun -->\r
  <path d="M8 48 Q8 64 20 64 Q32 64 32 48 Z"\r
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
  <path d="M11 48 Q20 40 29 48 Z" fill="#B83F28" stroke="#2A2114" stroke-width="2.6"/>\r
  <path d="M34 40 Q34 64 49 64 Q64 64 64 40 Z"\r
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>\r
  <path d="M38 40 Q49 30 60 40 Z" fill="#5A9237" stroke="#2A2114" stroke-width="2.8"/>\r
  <path d="M66 46 Q66 64 78 64 Q90 64 90 46 Z"\r
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
  <path d="M69 46 Q78 37 87 46 Z" fill="#F9D783" stroke="#2A2114" stroke-width="2.6"/>\r
  <!-- kenardan taşan sonuncusu -->\r
  <path d="M94 52 Q94 64 104 64 Q114 64 114 52 Z"\r
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>\r
  <path d="M97 52 Q104 45 111 52 Z" fill="#B83F28" stroke="#2A2114" stroke-width="2.4"/>\r
\r
  <!-- tabla -->\r
  <path d="M8 64 L106 64 L106 80 L8 80 Z"\r
        fill="#96633A" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <!-- sonradan eklenen kanat: aynı tahta, daha yeni -->\r
  <path d="M44 64 L78 64 L78 80 L44 80 Z" fill="#B58A57"/>\r
  <path d="M44 66 L44 78 M78 66 L78 78" stroke="#6E4526" stroke-width="3.6"/>\r
  <ellipse cx="26" cy="70" rx="13" ry="3" fill="#FFF3DC" opacity=".26"/>\r
\r
  <!-- bacaklar -->\r
  <path d="M20 80 L32 80 L30 108 L18 108 Z"\r
        fill="#54371F" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>\r
  <path d="M84 80 L96 80 L98 108 L86 108 Z"\r
        fill="#54371F" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>\r
  <path d="M28 93 L88 93" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>\r
  <path d="M28 93 L88 93" stroke="#54371F" stroke-width="4" stroke-linecap="round"/>\r
</svg>\r
`;export{r as default};
