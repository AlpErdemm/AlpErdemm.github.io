const n=`<!-- Çırpma · Eşya · "Isınması hızlanır. Dayanıklılığı değil."
     Balon çırpma teli: altta ahşap sap, üstte beş telin kapattığı damla
     kafes. Kafesin içinin boş olması 24 px'te bile görülüyor, çünkü teller
     mürekkep konturun üstüne açık çelikle ikinci kez çiziliyor. Uzun ve dar
     silueti onu havan eliyle de bileği taşıyla da karıştırmıyor. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="cirpma">

  <!-- sap -->
  <path d="M60 114 L60 76" stroke="#2A2114" stroke-width="16"
        fill="none" stroke-linecap="round"/>
  <path d="M60 114 L60 76" stroke="#8A5A32" stroke-width="10.5"
        fill="none" stroke-linecap="round"/>
  <path d="M55 104 L65 104" stroke="#6B4223" stroke-width="3"/>
  <path d="M55 96 L65 96" stroke="#6B4223" stroke-width="3"/>

  <!-- bilezik -->
  <path d="M50 64 L70 64 L70 78 L50 78 Z"
        fill="#B9C2CC" stroke="#2A2114" stroke-width="3.4" stroke-linejoin="round"/>

  <!-- teller: önce kontur, sonra çelik -->
  <path d="M60 66 C34 60 26 34 60 16 M60 66 C86 60 94 34 60 16
           M60 66 C44 60 40 32 60 16 M60 66 C76 60 80 32 60 16
           M60 66 L60 16"
        stroke="#2A2114" stroke-width="7" fill="none" stroke-linecap="round"/>
  <path d="M60 66 C34 60 26 34 60 16 M60 66 C86 60 94 34 60 16
           M60 66 C44 60 40 32 60 16 M60 66 C76 60 80 32 60 16
           M60 66 L60 16"
        stroke="#D8DEE6" stroke-width="3.2" fill="none" stroke-linecap="round"/>
  <circle cx="60" cy="15" r="6.5" fill="#B9C2CC" stroke="#2A2114" stroke-width="3"/>

  <!-- savrulan krema -->
  <path d="M96 46 Q104 52 100 60 Q92 56 96 46 Z"
        fill="#F7F1E2" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
  <path d="M22 78 Q30 84 26 92 Q18 88 22 78 Z"
        fill="#F7F1E2" stroke="#2A2114" stroke-width="2.6" stroke-linejoin="round"/>
  <circle cx="98" cy="80" r="3.4" fill="#F0E6D2" stroke="#2A2114" stroke-width="2.2"/>
</svg>
`;export{n as default};
