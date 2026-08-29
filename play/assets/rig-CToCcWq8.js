const n=`<!-- Pul Biber · Eşya · "Hızlanır. Ve incelir."
     Tek bir kuru kırmızı biber, çerçeveyi çaprazlama kesen hilal gövdesiyle,
     ve etrafına serpilmiş pullar. Hilal 24 px'te tek başına yetiyor: başka
     hiçbir eşyanın silueti bu kadar uzun ve kavisli değil. Sapı yeşil,
     çünkü kırmızının içinde tek ayırt edici nokta o. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="pulbiber">

  <!-- sap -->
  <path d="M84 40 L101 22" stroke="#2A2114" stroke-width="11"
        fill="none" stroke-linecap="round"/>
  <path d="M84 40 L101 22" stroke="#5E8C4A" stroke-width="6"
        fill="none" stroke-linecap="round"/>

  <!-- biber -->
  <path d="M30 98 C22 84 32 58 56 42 C74 30 89 33 91 42
           C93 53 76 66 60 78 C46 88 36 95 30 98 Z"
        fill="#C4413A" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
  <path d="M40 86 C46 72 62 58 80 48" stroke="#D9564B" stroke-width="4.5"
        fill="none" stroke-linecap="round"/>
  <ellipse cx="70" cy="52" rx="10" ry="4" fill="#fff" opacity=".2"
           transform="rotate(-32 70 52)"/>

  <!-- yeşil kalyks, sapın biberi tuttuğu yer -->
  <path d="M80 34 Q92 34 92 46 Q84 48 80 42 Z"
        fill="#4E7A3E" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>

  <!-- pullar -->
  <path d="M74 92 L84 88 L86 96 L76 100 Z"
        fill="#C4413A" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M92 74 L100 71 L102 79 L94 82 Z"
        fill="#9B2F2A" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M52 100 L60 98 L62 106 L54 108 Z"
        fill="#9B2F2A" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M96 96 L104 94 L106 101 L98 103 Z"
        fill="#C4413A" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>
  <path d="M18 88 L25 86 L27 93 L20 95 Z"
        fill="#9B2F2A" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>
</svg>
`;export{n as default};
