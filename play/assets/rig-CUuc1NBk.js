const r=`<!-- Kestane · Ocak 2 ✦ · Suikastçi · yakın dövüş\r
     attackSpeed 0.88 → round(20/0.88) = 23 tick = 1.15 sn\r
\r
     Karakter sayfasına göre yeniden çizildi. Eski rig "silah: çatlak\r
     kabuğunun sivri ucu" diyordu ve elinde kahverengi tek bir çizgi vardı;\r
     sayfa bir suikastçi istiyor: dikenli kabuk başlık, yüzün altını kapatan\r
     közlü atkı, kalçada köz kesesi, ve İKİ eğri köz bıçağı.\r
\r
     ARKETİP \`stab\` DEĞİL \`swing\`, ve sayfanın saldırı şeridi bunu söylüyor:\r
     üçüncü karede bıçağın arkasında kocaman turuncu bir hilal var, saplama\r
     değil savurma. Mantı da Suikastçi ve \`stab\`de kalıyor — iki suikastçinin\r
     aynı hareketi oynaması gerekmiyor, biri saplıyor biri savuruyor.\r
\r
     BIÇAKLAR DİNLENİRKEN YUKARI BAKIYOR, sayfanın aşağı sarkan gardının\r
     aksine, ve bu geometri zorunluluğu: \`swing\` kolu temas anında +56°\r
     döndürüyor, yani dinlenme açısı ne ise vuruş anındaki açı onun 56 fazlası.\r
     Aşağı bakan bir bıçak (+30°) temasta +86°'ye, yani yere bakardı ve \`setAim\`\r
     bunu düzeltmek için 99° dönmek zorunda kalırdı — AIM_MAX 95. -45°'de\r
     dinlenen bıçak temasta +11°'ye geliyor: hedefin gövdesiyle aynı hizada.\r
\r
     SİLUET: dikenli taç. Ocak'ın diğer ikisi düz koçan (mısır) ve çubuk\r
     (şiş); 53 px'te bunu ayıran şey dışa fırlayan on diken.\r
\r
     ———\r
\r
     OKUNURLUK GEÇİŞİ. Tahta ART_H'de 53.11 px çiziyor ve tezgâh #62492F,\r
     yani parlaklık 0.076. Ölçüldü: bu birimin gövde kütlesi 0.089'daydı —\r
     tahtayla arasındaki kontrast 1.11:1, kadronun en kötüsü. Kahverengi bir\r
     kestane kahverengi bir kesme tahtasının üstünde kayboluyordu.\r
\r
     ÇÖZÜM DAHA FAZLA DETAY DEĞİL, İKİ KUTUP. Tahtanın yuttuğu bant\r
     L 0.031–0.121; içine düşen her şey ne renk olursa olsun tahta gibi okunur.\r
     Eski dosyada on rengin yedisi o bandın içindeydi. Şimdi hiçbiri değil:\r
     kabuk ve uzuvlar karanlık kutba, iç (gövde) aydınlık kutba çekildi.\r
     "Biraz açalım" en pahalı içgüdü — uzuvları 0.041'den 0.082'ye açmak\r
     onları bandın ORTASINA taşıdı ve ölçüm düzelmedi.\r
\r
     KENAR IŞIĞI. 53 px'te 2.6 birimlik bir kontur ~1.08 piksel; koyu kontur\r
     koyu tahtayla buluşunca siluetin kenarını yalnızca kenar yumuşatma\r
     taşıyor. Kabuk yayına ve içe eklenen iki açık fırça darbesi bunu\r
     doğrudan çözüyor. Işık sol üstte — tezgâhın kendi \`bevelLight\`'ıyla aynı.\r
\r
     SEVİMLİLİK GEÇİŞİ — ve bunun bir tasarım tavizi olduğunu yazmak lazım:\r
     közlü atkı ARTIK YÜZÜN ALTINI KAPATMIYOR. Üst kenarının ortadaki\r
     çöküşü derinleştirildi (kontrol noktası 88 → 100), atkı boyna indi ve\r
     ağız göründü. Maskeli suikastçi okuması bir miktar gitti; karşılığında\r
     birim gülümsüyor. Kaşlar köşeli kamalardan (iç uçları aşağıda = asık\r
     surat) yumuşak yaylara döndü, göz bebekleri büyüdü, ikinci bir parlama\r
     ve yanaklara allık eklendi. 53 px'te sevimliliği taşıyan şey GÖZLER;\r
     ağız o boyutta yalnızca küçük bir eğri, ve olması gereken de bu.\r
\r
     Bedeli ölçüldü: bandın içinde kalan oran %22.0'dan %23.0'a çıktı,\r
     yani bir puan. Orijinal %32.1'di. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="swing" data-unit="kestane" style="--dur-atk:1.15s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="24" ry="5.4" fill="#000" opacity=".33"/>\r
\r
  <g class="armB" style="transform-origin:32px 98px">\r
    <path d="M32 98 L24 106" stroke="#241C18" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M32 98 L24 106" stroke="#332215" stroke-width="8.5" stroke-linecap="round"/>\r
    <path d="M26 99 L33 103" stroke="#B98F52" stroke-width="2.2" stroke-linecap="round"/>\r
    <circle cx="22" cy="108" r="5.4" fill="#3A2A1E" stroke="#241C18" stroke-width="2.6"/>\r
    <path d="M22 105 C17 93 11 82 8 69 L17 66 C20 81 26 94 29 103 Z"\r
          fill="#2A2E33" stroke="#241C18" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M11 72 C14 85 19 95 24 103" stroke="#8A9198" stroke-width="2.2"\r
          fill="none" stroke-linecap="round"/>\r
    <path d="M15 69 C18 83 23 94 27 102" stroke="#E8621F" stroke-width="2.6"\r
          fill="none" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 116px">\r
    <path d="M44 110 L41 128" stroke="#241C18" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M44 110 L41 128" stroke="#332215" stroke-width="8.5" stroke-linecap="round"/>\r
    <path d="M36 118 L47 117" stroke="#B98F52" stroke-width="2.4" stroke-linecap="round"/>\r
    <path d="M35 128 Q30 132 33 136 L46 136 Q48 131 43 127 Z"\r
          fill="#2E2118" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 116px">\r
    <path d="M62 110 L65 128" stroke="#241C18" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M62 110 L65 128" stroke="#3A2718" stroke-width="8.5" stroke-linecap="round"/>\r
    <path d="M59 117 L70 118" stroke="#B98F52" stroke-width="2.4" stroke-linecap="round"/>\r
    <path d="M63 127 Q58 131 61 136 L74 136 Q77 132 72 128 Z"\r
          fill="#3A2A1E" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body" style="transform-origin:52px 122px">\r
    <path d="M32 82 Q16 76 8 62 Q16 60 24 70 Q29 76 34 78 Z"\r
          fill="#241C18" stroke="#14100E" stroke-width="2.6" stroke-linejoin="round"/>\r
\r
    <path d="M20.1 70.3 L7.4 68.3 L19.0 62.8 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M19.1 58.9 L8.0 52.6 L20.7 51.5 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M22.2 47.8 L13.8 38.2 L26.2 41.4 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M28.8 38.5 L24.3 26.5 L34.8 33.8 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M38.3 32.0 L38.1 19.2 L45.5 29.7 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M49.4 29.1 L53.6 17.0 L56.9 29.4 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M60.8 30.2 L68.9 20.3 L67.8 33.0 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M71.1 35.1 L82.1 28.6 L76.7 40.2 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M79.2 43.3 L91.7 40.9 L82.7 50.0 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M83.9 53.7 L96.6 55.7 L85.0 61.2 Z"\r
          fill="#3A2014" stroke="#241C18" stroke-width="2.6" stroke-linejoin="round"/>\r
    <path d="M19.2 70.8 A34 34 0 1 1 84.8 70.8 L75.2 68.2 A24 24 0 1 0 28.8 68.2 Z"\r
          fill="#3E2212" stroke="#241C18" stroke-width="3.6" stroke-linejoin="round"/>\r
    <path d="M18.13 67.84 A34 34 0 0 1 54.96 36.93" fill="none" stroke="#E8C48E"\r
          stroke-width="2.6" stroke-linecap="round" opacity=".85"/>\r
    <path d="M27.4 68.6 A25.5 25.5 0 1 1 76.6 68.6" fill="none" stroke="#E8C48E"\r
          stroke-width="4.5"/>\r
\r
    <circle cx="52" cy="68" r="22" fill="#C0743A" stroke="#241C18" stroke-width="4"/>\r
    <ellipse cx="43" cy="57" rx="9" ry="6.2" fill="#F0B87A" opacity=".75"/>\r
    <path d="M30.33 64.18 A22 22 0 0 1 55.82 46.33" fill="none" stroke="#F5CE9A"\r
          stroke-width="2.2" stroke-linecap="round" opacity=".7"/>\r
    <path d="M44 79.6 Q52 86.4 60 79.6" fill="none" stroke="#14100E"\r
          stroke-width="2.9" stroke-linecap="round"/>\r
    <ellipse cx="34.5" cy="76" rx="5" ry="3.1" fill="#E8734A" opacity=".45"/>\r
    <ellipse cx="69.5" cy="76" rx="5" ry="3.1" fill="#E8734A" opacity=".45"/>\r
\r
    <path d="M35 60.5 Q43 54.5 50.5 59" fill="none" stroke="#14100E"\r
          stroke-width="3.4" stroke-linecap="round"/>\r
    <path d="M53.5 59 Q61 54.5 69 60.5" fill="none" stroke="#14100E"\r
          stroke-width="3.4" stroke-linecap="round"/>\r
    <ellipse cx="43" cy="70" rx="6" ry="7" fill="#fff" stroke="#14100E" stroke-width="2.2"/>\r
    <ellipse cx="61" cy="70" rx="6" ry="7" fill="#fff" stroke="#14100E" stroke-width="2.2"/>\r
    <ellipse cx="44.3" cy="71.2" rx="4.1" ry="5.3" fill="#14100E"/>\r
    <ellipse cx="62.3" cy="71.2" rx="4.1" ry="5.3" fill="#14100E"/>\r
    <circle cx="42.4" cy="67.6" r="1.8" fill="#fff"/>\r
    <circle cx="46.2" cy="74.2" r="1.0" fill="#fff" opacity=".8"/>\r
    <circle cx="60.4" cy="67.6" r="1.8" fill="#fff"/>\r
    <circle cx="64.2" cy="74.2" r="1.0" fill="#fff" opacity=".8"/>\r
\r
    <path d="M31 78 Q52 100 73 78 L75 92 Q52 101 29 92 Z"\r
          fill="#241C18" stroke="#14100E" stroke-width="3" stroke-linejoin="round"/>\r
    <path d="M38 84 L42 89 M50 87 L54 92 M62 85 L66 90" stroke="#E8621F"\r
          stroke-width="2.2" stroke-linecap="round"/>\r
    <path d="M40 85 L43 88" stroke="#FFC060" stroke-width="1.2" stroke-linecap="round"/>\r
\r
    <path d="M37 92 L67 92 L69 114 Q52 120 35 114 Z"\r
          fill="#382517" stroke="#241C18" stroke-width="3.2" stroke-linejoin="round"/>\r
    <path d="M52 98 L52 108 M52 100 L49 98 M52 100 L55 98 M52 104 L49 102 M52 104 L55 102"\r
          stroke="#B33A18" stroke-width="1.7" fill="none" stroke-linecap="round"/>\r
    <path d="M34 104 Q52 110 70 104" stroke="#96683A" stroke-width="5.5" fill="none"\r
          stroke-linecap="round"/>\r
    <circle cx="52" cy="107" r="4" fill="#B98F52" stroke="#241C18" stroke-width="2.2"/>\r
\r
    <path d="M20 100 L32 100 L31 112 Q26 116 21 112 Z"\r
          fill="#241C18" stroke="#14100E" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M23 103 L29 103 L28.5 109 Q26 111 23.5 109 Z" fill="#E8621F"/>\r
    <path d="M24.5 105 L27.5 105" stroke="#FFC060" stroke-width="1.6" stroke-linecap="round"/>\r
    <path d="M22 100 Q26 96 30 100" stroke="#96683A" stroke-width="2.4" fill="none"/>\r
\r
    <!-- İKİNCİ HÂL: kabuk çatlamış kestane. \`rigLoader\`'ın \`cooked\` parçası —\r
         motorda \`opacity 0\` başlar, \`trait:ocak\` olayında beş tikte açılır ve\r
         bir daha kapanmaz (\`UnitRig.cook\`). Kartlarda görünmez.\r
\r
         Kestane için dönüşüm ZATEN yazılıydı: birimin kendi lafı "kabuğu\r
         çatlayana kadar bekle" — sekiz saniyedir beklenen şey bu. O yüzden\r
         kavrulma burada bir renk değişimi değil bir YARIK: sağ üst kenarda\r
         kabuk açılıyor ve altından iç görünüyor.\r
\r
         GÖZLERE DOKUNULMUYOR (cx 43/61, cy 70, y 63..77): yarık y 44..64\r
         bandında duruyor. Bu katman \`body\`'nin üstüne çiziliyor, yani buraya\r
         konan her şey altındakini siler. -->\r
    <g class="cooked" style="transform-origin:52px 68px">\r
      <path d="M52 46 C60 44 68 48 72 56 C68 60 60 62 53 60 C50 55 50 49 52 46 Z"\r
            fill="#F0D9A8" stroke="#14100E" stroke-width="2.8" stroke-linejoin="round"/>\r
      <path d="M53 49 C58 48 63 51 66 55" stroke="#fff" stroke-width="2"\r
            fill="none" stroke-linecap="round" opacity=".65"/>\r
      <path d="M52 46 L57 51 L53 55 L59 59 L53 60" stroke="#A9642F" stroke-width="2.2"\r
            fill="none" stroke-linejoin="round"/>\r
\r
      <path d="M30 52 C26 60 26 68 30 76" stroke="#14100E" stroke-width="3.4"\r
            fill="none" stroke-linecap="round" opacity=".85"/>\r
      <path d="M40 88 Q52 93 64 88" stroke="#14100E" stroke-width="3"\r
            fill="none" stroke-linecap="round" opacity=".8"/>\r
      <ellipse cx="36" cy="60" rx="4.5" ry="3.4" fill="#14100E" opacity=".7"/>\r
      <ellipse cx="66" cy="80" rx="3.6" ry="2.8" fill="#14100E" opacity=".7"/>\r
\r
      <path d="M49.4 29.1 L53.6 17.0 L56.9 29.4 Z" fill="#1A120E" opacity=".85"/>\r
      <path d="M60.8 30.2 L68.9 20.3 L67.8 33.0 Z" fill="#1A120E" opacity=".85"/>\r
      <path d="M38.3 32.0 L38.1 19.2 L45.5 29.7 Z" fill="#1A120E" opacity=".8"/>\r
      <path d="M71.1 35.1 L82.1 28.6 L76.7 40.2 Z" fill="#1A120E" opacity=".8"/>\r
      <path d="M28.8 38.5 L24.3 26.5 L34.8 33.8 Z" fill="#1A120E" opacity=".75"/>\r
\r
      <path d="M74 52 C78 58 77 64 74 68" stroke="#E8621F" stroke-width="3"\r
            fill="none" stroke-linecap="round"/>\r
      <path d="M73 54 C76 59 75 63 73 66" stroke="#FFC060" stroke-width="1.3"\r
            fill="none" stroke-linecap="round"/>\r
      <circle cx="70" cy="49" r="2.2" fill="#E8621F"/>\r
      <circle cx="76" cy="62" r="1.8" fill="#FFC060"/>\r
    </g>\r
\r
    <!-- Ember seams and hammered shell nicks sell the roasted armored chestnut. -->\r
    <path d="M34 49 L40 55 L37 62 M66 48 L61 56 L65 63" fill="none" stroke="#F07A2B"\r
          stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M29 72 L35 70 M70 68 L77 65 M42 39 L46 37" stroke="#8C4C2A"\r
          stroke-width="1.6" stroke-linecap="round" opacity=".85"/>\r
    <circle cx="38" cy="58" r="1.3" fill="#FFD07A"/><circle cx="63" cy="57" r="1.1" fill="#FFD07A"/>\r
\r
    <g data-expression="cute">\r
      <circle cx="40" cy="66" r="1.05" fill="#fff" opacity=".9"/><circle cx="58" cy="66" r="1.05" fill="#fff" opacity=".9"/>\r
      <ellipse cx="34.5" cy="76" rx="5.2" ry="3.2" fill="#F07B58" opacity=".52"/><ellipse cx="69.5" cy="76" rx="5.2" ry="3.2" fill="#F07B58" opacity=".52"/>\r
    </g>\r
\r
    <path class="crack" d="M36 56 L46 68 L36 80 L48 92 L38 104"\r
          stroke="#0E0A08" stroke-width="2.8" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:72px 98px">\r
    <path d="M72 98 L82 104" stroke="#241C18" stroke-width="13" stroke-linecap="round"/>\r
    <path d="M72 98 L82 104" stroke="#3A2718" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M74 100 L81 97 M78 104 L85 101" stroke="#B98F52" stroke-width="2.4"\r
          stroke-linecap="round"/>\r
    <circle cx="84" cy="105" r="5.8" fill="#3A2A1E" stroke="#241C18" stroke-width="2.6"/>\r
    <path d="M84 104 C94 96 104 78 109 56 L118 60 C113 82 103 100 90 110 Z"\r
          fill="#2A2E33" stroke="#241C18" stroke-width="3.2" stroke-linejoin="round"/>\r
    <path d="M110 60 C105 80 96 97 87 107" stroke="#8A9198" stroke-width="2.6"\r
          fill="none" stroke-linecap="round"/>\r
    <path d="M114 61 C109 81 100 98 91 108" stroke="#E8621F" stroke-width="3.2"\r
          fill="none" stroke-linecap="round"/>\r
    <path d="M113.5 65 C109 82 101 96 93 105" stroke="#FFC060" stroke-width="1.4"\r
          fill="none" stroke-linecap="round"/>\r
    <path d="M86 104 L92 100" stroke="#B98F52" stroke-width="3" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:100px 80px">\r
    <path d="M82 44 Q126 78 86 118" fill="none" stroke="#B33A18" stroke-width="11"\r
          stroke-linecap="round" opacity=".45"/>\r
    <path d="M84 48 Q122 79 88 114" fill="none" stroke="#E8621F" stroke-width="6"\r
          stroke-linecap="round" opacity=".85"/>\r
    <path d="M87 54 Q116 79 90 108" fill="none" stroke="#FFC060" stroke-width="2.4"\r
          stroke-linecap="round"/>\r
    <ellipse cx="124" cy="70" rx="3" ry="2.3" fill="#FFC060"/>\r
    <ellipse cx="126" cy="90" rx="2.6" ry="2" fill="#E8621F"/>\r
  </g>\r
</svg>\r
`;export{r as default};
