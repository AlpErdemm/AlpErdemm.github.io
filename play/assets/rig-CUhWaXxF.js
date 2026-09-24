const i=`<!-- İkinci Tabak · Tarif · "Kötü geçti. Bir tabak daha."
     Kötü turdan sonra konan ikinci tabak: çapraz duran iki tabak, üsttekinde
     bir lokma kalmış, öndekine yenisi konmuş.
     24 px'te üç şey okunuyor — çaprazlama üst üste binen iki daire, her
     birinin içindeki koyu çukur halkası, ve öndeki tabağın üstündeki iki
     yuvarlak lokma.
     Kaymak'la karışmasın diye tabak iki tane ve porsiyon parçalı: orada tek
     tabağı boydan boya dolduran kalın bir rulo var. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-recipe="ikinci_tabak">

  <!-- arkadaki tabak -->
  <ellipse cx="44" cy="42" rx="34" ry="16"
           fill="#E9EEF6" stroke="#2A2114" stroke-width="4"/>
  <ellipse cx="44" cy="42" rx="20" ry="8" fill="#C8CCD6"/>
  <circle cx="44" cy="40" r="6" fill="#B58A57" stroke="#2A2114" stroke-width="3"/>
  <ellipse cx="28" cy="36" rx="9" ry="3" fill="#FFFFFF" opacity=".45"/>

  <!-- öndeki tabak -->
  <ellipse cx="76" cy="82" rx="38" ry="18"
           fill="#E9EEF6" stroke="#2A2114" stroke-width="4"/>
  <ellipse cx="76" cy="82" rx="23" ry="9" fill="#C8CCD6"/>
  <ellipse cx="54" cy="76" rx="10" ry="3.4" fill="#FFFFFF" opacity=".45"/>

  <!-- yeni porsiyon: iki lokma -->
  <circle cx="68" cy="78" r="9.5" fill="#B58A57" stroke="#2A2114" stroke-width="3.4"/>
  <circle cx="86" cy="80" r="8.5" fill="#B58A57" stroke="#2A2114" stroke-width="3.4"/>
  <path d="M63 74 Q68 71 73 74" stroke="#FFF3DC" stroke-width="2.8" fill="none" stroke-linecap="round"/>

  <!-- bal damlası: tarifin geri ödediği şey -->
  <path d="M100 18 Q109 34 100 42 Q91 34 100 18 Z"
        fill="#F9D783" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
</svg>
`;export{i as default};
