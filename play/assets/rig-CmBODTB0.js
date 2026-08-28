const r=`<!-- Turşu · Küf 5 ✦ · Suikastçi · yakın dövüş\r
     attackSpeed 0.66 → round(20/0.66) = 30 tick = 1.50 sn\r
\r
     Karakter sayfasına göre yeniden çizildi, ve BAŞLIK DA YANLIŞTI: "Koku 5 ✦"\r
     diyordu, oysa köken \`units.ts\`'te \`kuf\`. Koku, Küf'ün eski adı; rig o\r
     yeniden adlandırmayı hiç görmemiş.\r
\r
     Silahı "kavanoz kapağı — kalkan gibi tutulur" idi ve gövde tombul bir\r
     turşuydu. Sayfa bambaşka bir şey istiyor: uzun, çökük, sıska bir şey —\r
     boynunda KIRIK KAVANOZ parçalarından bir kavuk, bir yanına yayılmış KÜF\r
     KOLONİLERİ, sürekli damlayan SALAMURA, ve iki KIRIK CAM BIÇAK.\r
\r
     ARKETİP \`swing\` DEĞİL \`stab\`. Sayfanın şeridi dört kare: hazırlık, ŞİMŞEK\r
     HAMLESİ, çift cam kesik, GEÇİP GİDER — ve altında "en hızlı saldırı,\r
     hedefin içinden geçer". Baskın hareket yay değil atılış, \`stab\`in 16\r
     piksellik ileri ötelemesi de tam olarak o.\r
\r
     Bıçaklar aşağı bakıyor (+28°), Mantı'yla aynı alçak gard ve aynı sebeple:\r
     \`stab\`in temas dönüşü küçük olduğu için \`setAim\` farkı kapatabiliyor.\r
     Kestane'nin \`swing\`i bunu yapamazdı — orada bıçak yukarı bakmak zorundaydı.\r
\r
     SİLUET: kadronun tek SISKA ve ÇÖKÜK gövdesi. Küf'ün diğer ikisi yuvarlak;\r
     40 px'te bunu ayıran şey ince uzuvlar ve boyundaki cam taç. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="stab" data-unit="tursu" style="--dur-atk:1.50s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="26" ry="5.8" fill="#000" opacity=".34"/>\r
\r
  <g class="armB" style="transform-origin:40px 84px">\r
    <path d="M40 84 L32 96 L26 104" fill="none" stroke="#24281C" stroke-width="10"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M40 84 L32 96 L26 104" fill="none" stroke="#4E5E28" stroke-width="6.4"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <circle cx="25" cy="106" r="4.8" fill="#4E5E28" stroke="#24281C" stroke-width="2.4"/>\r
    <path d="M25 107 L20 109 L18 106 L14 113 L9 115 L11 121 L17 120 L21 123 L25 117\r
             L28 113 Z"\r
          fill="#C6DED8" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M22 111 L17 113 L14 118" fill="none" stroke="#8FB4AE" stroke-width="1.6"\r
          stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:46px 116px">\r
    <path d="M46 102 L42 118 L40 130" fill="none" stroke="#24281C" stroke-width="10"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M46 102 L42 118 L40 130" fill="none" stroke="#4E5E28" stroke-width="6.4"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M40 130 L31 136 M40 130 L38 136 M40 130 L46 136" stroke="#24281C"\r
          stroke-width="4" stroke-linecap="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 116px">\r
    <path d="M62 102 L66 118 L68 130" fill="none" stroke="#24281C" stroke-width="10"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M62 102 L66 118 L68 130" fill="none" stroke="#5A6B2E" stroke-width="6.4"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M68 130 L60 136 M68 130 L68 136 M68 130 L77 136" stroke="#24281C"\r
          stroke-width="4" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="body" style="transform-origin:52px 120px">\r
    <path d="M45 66 C41 80 41 94 44 106 L66 106 C69 94 69 80 65 66 Z"\r
          fill="#4E5E28" stroke="#24281C" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M50 72 C48 84 48 94 50 104" stroke="#3E4A1E" stroke-width="3" fill="none"\r
          opacity=".7"/>\r
\r
    <path d="M56 10 C57 14 56 16 55 18" stroke="#5A6B2E" stroke-width="3.4" fill="none"\r
          stroke-linecap="round"/>\r
    <path d="M56 15 C65 17 70 29 70 43 C70 57 64 66 56 66 C48 66 42 57 42 43\r
             C42 29 47 17 56 15 Z"\r
          fill="#6B7A32" stroke="#24281C" stroke-width="4" stroke-linejoin="round"/>\r
    <path d="M49 24 C46 32 45 44 47 56" stroke="#8A9450" stroke-width="4" fill="none"\r
          stroke-linecap="round" opacity=".45"/>\r
    <ellipse cx="63" cy="30" rx="2.4" ry="3.2" fill="#3E4A1E" opacity=".6"/>\r
    <ellipse cx="66" cy="46" rx="2.2" ry="3" fill="#3E4A1E" opacity=".6"/>\r
    <ellipse cx="60" cy="58" rx="2.4" ry="2" fill="#3E4A1E" opacity=".5"/>\r
\r
    <path d="M43 30 L54 37 L52 42 L42 36 Z" fill="#1E2416"/>\r
    <path d="M69 30 L58 37 L60 42 L70 36 Z" fill="#1E2416"/>\r
    <ellipse cx="49" cy="43" rx="5.4" ry="5" fill="#D8E88A" stroke="#24281C" stroke-width="2.2"/>\r
    <ellipse cx="63" cy="43" rx="5.4" ry="5" fill="#D8E88A" stroke="#24281C" stroke-width="2.2"/>\r
    <ellipse cx="50" cy="43.6" rx="2.3" ry="3" fill="#1E2416"/>\r
    <ellipse cx="64" cy="43.6" rx="2.3" ry="3" fill="#1E2416"/>\r
    <path d="M47 55 Q56 61 65 55" stroke="#1E2416" stroke-width="3" fill="none"\r
          stroke-linecap="round"/>\r
    <path d="M50 57 L52 53 L54 57.5 L56 53 L58 57.5 L60 53 L62 56.5"\r
          fill="none" stroke="#E8F0D8" stroke-width="2.4" stroke-linejoin="round"/>\r
\r
    <path d="M49.2 69.4 L41.2 65.8 L50.2 64.7 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M49.3 66.4 L41.4 57.6 L52.9 62.6 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M51.0 63.9 L50.0 55.4 L56.3 62.1 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M53.8 62.3 L58.1 51.1 L59.5 62.9 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M57.2 62.1 L65.5 56.0 L61.9 64.9 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M60.3 63.3 L73.7 60.0 L63.0 67.6 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M62.2 65.2 L70.0 67.2 L62.6 70.0 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
    <path d="M63.0 68.0 L67.0 72.1 L60.7 72.4 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.4" stroke-linejoin="round"/>\r
\r
    <circle cx="44" cy="46" r="4.2" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="42.7" cy="44.7" r="1.8" fill="#9ED4D0"/>\r
    <circle cx="41" cy="54" r="3.4" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="40.0" cy="53.0" r="1.4" fill="#9ED4D0"/>\r
    <circle cx="46" cy="58" r="3.0" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="45.1" cy="57.1" r="1.3" fill="#9ED4D0"/>\r
    <circle cx="43" cy="80" r="4.4" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="41.7" cy="78.7" r="1.8" fill="#9ED4D0"/>\r
    <circle cx="40" cy="88" r="3.6" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="38.9" cy="86.9" r="1.5" fill="#9ED4D0"/>\r
    <circle cx="46" cy="92" r="3.0" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="45.1" cy="91.1" r="1.3" fill="#9ED4D0"/>\r
    <circle cx="44" cy="100" r="3.8" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="42.9" cy="98.9" r="1.6" fill="#9ED4D0"/>\r
    <circle cx="39" cy="96" r="2.8" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="38.2" cy="95.2" r="1.2" fill="#9ED4D0"/>\r
    <circle cx="49" cy="86" r="2.6" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="48.2" cy="85.2" r="1.1" fill="#9ED4D0"/>\r
    <circle cx="63" cy="92" r="3.2" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="62.0" cy="91.0" r="1.3" fill="#9ED4D0"/>\r
    <circle cx="66" cy="98" r="2.6" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="65.2" cy="97.2" r="1.1" fill="#9ED4D0"/>\r
    <circle cx="48" cy="30" r="3.0" fill="#4A8A8A" stroke="#24281C" stroke-width="1.6"/>\r
    <circle cx="47.1" cy="29.1" r="1.3" fill="#9ED4D0"/>\r
\r
    <path d="M45 108 C44 112 45 114 47 114 C49 114 50 112 49 108 Z" fill="#C8E4DC"\r
          stroke="#24281C" stroke-width="1.6"/>\r
    <path d="M64 110 C63 114 64 117 66 117 C68 117 69 114 68 110 Z" fill="#C8E4DC"\r
          stroke="#24281C" stroke-width="1.6"/>\r
    <path d="M38 66 C37 70 38 72 40 72 C42 72 42 70 41 66 Z" fill="#C8E4DC"\r
          stroke="#24281C" stroke-width="1.5"/>\r
\r
    <!-- Brine caustic, fermentation bubbles and cucumber skin bloom. -->\r
    <path d="M48 22 C44 37 45 54 48 63" fill="none" stroke="#DDF2B4" stroke-width="2"\r
          stroke-linecap="round" opacity=".65"/>\r
    <g fill="none" stroke="#C8D98A" stroke-width="1.4" opacity=".85">\r
      <circle cx="47" cy="77" r="2"/><circle cx="63" cy="91" r="1.6"/><circle cx="54" cy="101" r="1.2"/>\r
    </g>\r
    <g fill="#A5B667" opacity=".7"><ellipse cx="50" cy="30" rx="1.2" ry="1.8"/><ellipse cx="64" cy="51" rx="1" ry="1.5"/></g>\r
\r
    <g data-expression="cute">\r
      <path d="M42 36 Q48 31 53 36 M59 36 Q64 31 70 36" fill="none" stroke="#6B7A32" stroke-width="7" stroke-linecap="round"/>\r
      <path d="M42 36 Q48 31 53 36 M59 36 Q64 31 70 36" fill="none" stroke="#1E2416" stroke-width="2.6" stroke-linecap="round"/>\r
      <ellipse cx="43" cy="53" rx="2.7" ry="1.7" fill="#D88B69" opacity=".58"/><ellipse cx="69" cy="53" rx="2.7" ry="1.7" fill="#D88B69" opacity=".58"/>\r
      <path d="M49 53 Q56 60 63 53 Q62 62 56 63 Q50 62 49 53 Z" fill="#2B301C" stroke="#1E2416" stroke-width="2"/>\r
      <path d="M53 58 Q56 60 59 58" fill="none" stroke="#E59978" stroke-width="1.6" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M46 24 L58 38 L46 52 L60 66 L48 82"\r
          stroke="#0E120A" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:70px 84px">\r
    <path d="M70 84 L79 94 L84 100" fill="none" stroke="#24281C" stroke-width="11"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M70 84 L79 94 L84 100" fill="none" stroke="#5A6B2E" stroke-width="7"\r
          stroke-linecap="round" stroke-linejoin="round"/>\r
    <circle cx="86" cy="102" r="5.2" fill="#5A6B2E" stroke="#24281C" stroke-width="2.4"/>\r
    <path d="M87 100 L96 99 L100 95 L105 102 L112 101 L117 108 L109 111 L103 108\r
             L98 113 L91 108 L85 106 Z"\r
          fill="#DCEAE4" stroke="#24281C" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M92 103 L100 101 L106 106 L113 107" fill="none" stroke="#A8C6C0"\r
          stroke-width="1.7" stroke-linejoin="round"/>\r
    <path d="M95 104 L99 107 M104 103 L107 106" stroke="#F2FAF7" stroke-width="1.6"\r
          stroke-linecap="round"/>\r
    <path d="M110 111 C109 115 110 118 112 118 C114 118 114 115 113 111 Z"\r
          fill="#C8E4DC" stroke="#24281C" stroke-width="1.5"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:116px 100px">\r
    <path d="M96 76 Q132 96 100 124" fill="none" stroke="#7ABAB8" stroke-width="8"\r
          stroke-linecap="round" opacity=".55"/>\r
    <path d="M100 82 Q126 98 102 118" fill="none" stroke="#E8F8F4" stroke-width="3"\r
          stroke-linecap="round"/>\r
    <path d="M100 124 Q132 104 96 76" fill="none" stroke="#9ED4D0" stroke-width="3.4"\r
          stroke-linecap="round" opacity=".7"/>\r
    <circle cx="128" cy="86" r="3.2" fill="#4A8A8A"/>\r
    <circle cx="134" cy="102" r="2.6" fill="#7ABAB8"/>\r
    <circle cx="126" cy="116" r="3" fill="#4A8A8A"/>\r
  </g>\r
</svg>\r
`;export{r as default};
