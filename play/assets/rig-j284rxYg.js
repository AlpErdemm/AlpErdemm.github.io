const r=`<!-- Keskin Bıçaklar · Tarif · "Bakımlı durur. Bir kere keser."
     Duvara asılı bıçak rayı: kalın ahşap ray, altında aşağı bakan üç paralel
     bıçak, raya değen koyu saplar.
     24 px'te üç şey okunuyor — yatay ray, altındaki üç dikey ağız, ve rayın
     hemen altındaki koyu sap dizisi.
     Bileği taşıyla karışmasın diye bilerek dik çizildi: o bir X, bu bir tarak.
     Satır İtişi de tek bir çapraz ağızdır; burada tek bıçak yok, takım var. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-recipe="keskin_bicaklar">

  <!-- ray -->
  <path d="M12 22 L108 22 L108 40 L12 40 Z"
        fill="#96633A" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M14 35 L106 35" stroke="#6E4526" stroke-width="3.4"/>
  <ellipse cx="38" cy="27" rx="16" ry="3.5" fill="#FFF3DC" opacity=".3"/>

  <!-- saplar, rayın altında -->
  <path d="M27 40 L39 40 L39 57 L27 57 Z"
        fill="#54371F" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <path d="M54 40 L66 40 L66 57 L54 57 Z"
        fill="#54371F" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <path d="M81 40 L93 40 L93 57 L81 57 Z"
        fill="#54371F" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <circle cx="33" cy="49" r="2.2" fill="#B58A57"/>
  <circle cx="60" cy="49" r="2.2" fill="#B58A57"/>
  <circle cx="87" cy="49" r="2.2" fill="#B58A57"/>

  <!-- ağızlar: üç dikey, boyları farklı ki sıra ritim tutsun -->
  <path d="M25 57 L41 57 L41 84 Q41 95 33 101 Q25 95 25 84 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>
  <path d="M51 57 L69 57 L69 92 Q69 103 60 109 Q51 103 51 92 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>
  <path d="M80 57 L94 57 L94 80 Q94 90 87 96 Q80 90 80 80 Z"
        fill="#E9EEF6" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>

  <!-- sırt gölgesi: ağzın parlak tarafı solda kalsın -->
  <path d="M37 62 L37 86" stroke="#C8CCD6" stroke-width="4" stroke-linecap="round"/>
  <path d="M65 62 L65 93" stroke="#C8CCD6" stroke-width="4" stroke-linecap="round"/>
  <path d="M90 62 L90 82" stroke="#C8CCD6" stroke-width="4" stroke-linecap="round"/>
  <path d="M29 64 L29 88" stroke="#FFFFFF" stroke-width="2.6" opacity=".55" stroke-linecap="round"/>
  <path d="M55 64 L55 95" stroke="#FFFFFF" stroke-width="2.6" opacity=".55" stroke-linecap="round"/>
</svg>
`;export{r as default};
