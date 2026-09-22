const r=`<!-- Kalın Kabuk · Tarif · "Fırında sertleşti. Artık zırh."\r
     Ekmekten kalkan: aşağı sivrilen kalkan silueti, çepeçevre kalın koyu\r
     kabuk kuşağı, ortasında üç krem fırın çizisi.\r
     24 px'te üç şey okunuyor — sivri uçlu kalkan gövdesi, onu saran koyu\r
     kabuk bandı, ve üstündeki üç eğik çizi.\r
     Çifte Mayalanma'nın yumuşak hamur kubbesiyle karışmasın diye silueti\r
     kavisli değil sivri: o yukarı kabarır, bu aşağı iner. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-recipe="kalin_kabuk">\r
\r
  <!-- kabuk: dış gövde -->\r
  <path d="M24 20 L96 20 L96 60 Q96 92 60 108 Q24 92 24 60 Z"\r
        fill="#8F4A2E" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <!-- pişmiş yüz: kabuğun içindeki daha açık alan -->\r
  <path d="M35 31 L85 31 L85 60 Q85 85 60 96 Q35 85 35 60 Z"\r
        fill="#B58A57"/>\r
  <ellipse cx="47" cy="44" rx="13" ry="5" fill="#FFF3DC" opacity=".26"\r
           transform="rotate(-24 47 44)"/>\r
\r
  <!-- fırın çizileri: kesildiği yerden iç krem görünüyor -->\r
  <path d="M45 44 L58 57" stroke="#FFF1DA" stroke-width="6.5" stroke-linecap="round"/>\r
  <path d="M59 40 L73 54" stroke="#FFF1DA" stroke-width="6.5" stroke-linecap="round"/>\r
  <path d="M47 63 L60 76" stroke="#FFF1DA" stroke-width="6" stroke-linecap="round"/>\r
\r
  <!-- kırılmış kabuk parçaları, ağırlığı söylesin -->\r
  <path d="M12 92 L21 89 L24 98 L15 101 Z"\r
        fill="#B58A57" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>\r
  <path d="M100 82 L108 80 L110 88 L102 90 Z"\r
        fill="#B58A57" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>\r
</svg>\r
`;export{r as default};
