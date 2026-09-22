const r=`<!-- Kabarma · Tarif · "Kimse bakmadı. Bir tane iki oldu."\r
     Hasır mayalama sepeti ve ağzından taşan hamur: tek bir kütle, ama tepesi\r
     ortadan derin çökük — yani iki tepe.\r
     24 px'te üç şey okunuyor — aşağı daralan halkalı sepet, sepetten geniş\r
     taşan iki tümsekli krem kütle, ve rimden sarkan bez.\r
     Çifte Mayalanma'yla karışmasın diye kubbe tek ve çentikli: orada iki ayrı\r
     yay var, burada bölünmekte olan tek bir hamur var. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"\r
     class="rig" data-recipe="kabarma">\r
\r
  <!-- hamur: tek gövde, ortası derin çökük, sepetten taşkın -->\r
  <path d="M14 64 Q8 32 34 25 Q55 20 60 52 Q65 20 86 25 Q112 32 106 64 Z"\r
        fill="#FFF1DA" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <ellipse cx="30" cy="42" rx="9" ry="5" fill="#FFFFFF" opacity=".6"\r
           transform="rotate(-32 30 42)"/>\r
  <!-- un serpintisi -->\r
  <circle cx="46" cy="34" r="2.4" fill="#F3E6CC"/>\r
  <circle cx="82" cy="40" r="2.6" fill="#F3E6CC"/>\r
  <circle cx="68" cy="56" r="2.2" fill="#F3E6CC"/>\r
\r
  <path d="M13 46 Q60 58 107 46 L106 60 Q60 70 14 60 Z" fill="#F3E6CC"/>\r
\r
  <!-- sepet ağzı -->\r
  <ellipse cx="60" cy="64" rx="42" ry="10"\r
           fill="#96633A" stroke="#2A2114" stroke-width="4"/>\r
\r
  <!-- sepet gövdesi, hasır halkalarıyla -->\r
  <path d="M18 64 Q24 100 60 105 Q96 100 102 64 Z"\r
        fill="#B58A57" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>\r
  <path d="M22 78 Q60 87 98 78" stroke="#8F4A2E" stroke-width="4.2" fill="none"/>\r
  <path d="M26 89 Q60 98 94 89" stroke="#8F4A2E" stroke-width="4.2" fill="none"/>\r
  <path d="M33 99 Q60 105 87 99" stroke="#8F4A2E" stroke-width="3.6" fill="none"/>\r
\r
  <!-- rimden sarkan bez -->\r
  <path d="M29 65 Q19 84 25 101 Q36 108 49 104 Q37 87 42 67 Z"\r
        fill="#EBD7B5" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>\r
  <path d="M26 82 Q33 87 39 85 M28 93 Q35 99 42 97"\r
        stroke="#63BCC0" stroke-width="3.2" fill="none" stroke-linecap="round"/>\r
</svg>\r
`;export{r as default};
