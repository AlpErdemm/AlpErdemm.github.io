const r=`<!-- Sirke · Küf 3 ✦ · Nişancı · menzil 3\r
     attackSpeed 1.11 → round(20/1.11) = 18 tick = 0.90 sn\r
\r
     Karakter sayfasına göre yeniden çizildi. Eski rig "silah: kendi ağzı —\r
     ekşiyi püskürtüyor" diyordu; sayfa BASINÇLI PÜSKÜRTÜCÜ istiyor — cam\r
     hazneli metal namlu, arkaya dolanan yeşil hortum — ve şişeyi zırhlıyor:\r
     omuzlarda küf kolonileri, gövdede küf çiçekli tabard.\r
\r
     ARKETİP \`spray\` OLARAK KALDI, ve bu sefer kalması doğru olan. Bu turdaki\r
     dört menzilli birimi (Simit, Mısır, Ayçiçeği, Çay) \`stab\`e taşıdım çünkü\r
     \`throw\` omuzlanmış bir namluyu savuruyordu. Burada öyle bir sorun yok:\r
     \`spray\` armF'i topu topu -9°/+11° kıpırdatıyor — bir püskürtücünün geri\r
     tepmesi kadar — ve \`body\`yi sıkıştırıp bırakıyor, ki basınçlı bir şişede\r
     tam olarak istenen şey o. Üstelik ammo pisti OLAN tek arketip: fıs 0.36'da\r
     ağızdan çıkıyor, 0.40'ta yok oluyor.\r
\r
     Bu yüzden \`.ammo\` grubu DURUYOR ve \`MUZZLE\` onu \`part: 'ammo'\` ile\r
     okuyor — Domates'in ketçap damlasıyla aynı kurgu. Diğer dördünde grubu\r
     silmek zorunda kalmıştım, çünkü \`stab\`in ammo pisti yok.\r
\r
     Menzilli boşluğun BEŞİNCİ tekrarı yine de vardı: \`range: 3\`, ama ne\r
     \`MUZZLE\` ne \`SHOTS\` satırı — atış göğsün ortasından çıkan krem bir\r
     noktaydı. \`SHOTS\` artık \`spray\` formunu kullanıyor; tabloda tanımlıydı ve\r
     Soğan'la Acı Sos çıkarıldığından beri hiçbir birim onu çağırmıyordu.\r
\r
     KÜF ORTAK TABAN: cam + tüylü küf. KAP: UZUN İNCE ŞİŞE, turşunun şişkin\r
     kavanozundan ve peynirin tekerinden en-boy ile ayrılıyor. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="spray" data-unit="sirke" style="--dur-atk:0.90s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="23" ry="5.2" fill="#000" opacity=".33"/>\r
\r
  <g class="armB" style="transform-origin:30px 98px">\r
    <path d="M30 98 L22 108" stroke="#1A2420" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M30 98 L22 108" stroke="#2E5F5C" stroke-width="8.5" stroke-linecap="round"/>\r
    <path d="M24 100 L31 103" stroke="#6A7A9A" stroke-width="2.4" stroke-linecap="round"/>\r
    <circle cx="20" cy="111" r="5.4" fill="#1E4A4A" stroke="#1A2420" stroke-width="2.6"/>\r
    <path d="M18 88 A12 12 0 0 1 42 88 Q30 93 18 88 Z"\r
          fill="#2E5F5C" stroke="#1A2420" stroke-width="3.2" stroke-linejoin="round"/>\r
    <circle cx="30" cy="83" r="3" fill="#3E8C7A" stroke="#1A2420" stroke-width="1.8"/>\r
  </g>\r
\r
  <g class="legB" style="transform-origin:44px 120px">\r
    <path d="M44 114 L41 128" stroke="#1A2420" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M44 114 L41 128" stroke="#1E4A4A" stroke-width="8.5" stroke-linecap="round"/>\r
    <path d="M35 128 Q30 132 33 136 L46 136 Q47 131 43 127 Z"\r
          fill="#182F30" stroke="#1A2420" stroke-width="2.8" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 120px">\r
    <path d="M62 114 L65 128" stroke="#1A2420" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M62 114 L65 128" stroke="#2E5F5C" stroke-width="8.5" stroke-linecap="round"/>\r
    <path d="M63 127 Q58 131 61 136 L75 136 Q77 132 72 128 Z"\r
          fill="#1E4A4A" stroke="#1A2420" stroke-width="2.8" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body" style="transform-origin:52px 122px">\r
    <path d="M42 17 L62 17 L60 33 L44 33 Z"\r
          fill="#A88A5A" stroke="#1A2420" stroke-width="3" stroke-linejoin="round"/>\r
    <circle cx="48" cy="22" r="1.6" fill="#7A6038"/>\r
    <circle cx="56" cy="26" r="1.4" fill="#7A6038"/>\r
    <circle cx="52" cy="20" r="1.2" fill="#7A6038"/>\r
\r
    <path d="M44 32 L60 32 L60 46 C70 54 74 68 74 84 L74 110\r
             C74 117 66 120 52 120 C38 120 30 117 30 110 L30 84\r
             C30 68 34 54 44 46 Z"\r
          fill="#D8E2DE" stroke="#1A2420" stroke-width="4" stroke-linejoin="round" opacity=".96"/>\r
    <path d="M34 62 L70 62 L70 110 C70 115 63 117 52 117 C41 117 34 115 34 110 Z"\r
          fill="#EDE7D8"/>\r
    <path d="M34 100 Q52 96 70 100 L70 110 C70 115 63 117 52 117 C41 117 34 115 34 110 Z"\r
          fill="#DCD3BC"/>\r
    <path d="M38 52 C34 62 33 76 33 92" stroke="#F4F8F6" stroke-width="4"\r
          fill="none" opacity=".65" stroke-linecap="round"/>\r
\r
    <g fill="#3E8C7A" stroke="#1A2420" stroke-width="1.8">\r
      <circle cx="37" cy="47" r="4"/><circle cx="43" cy="41" r="3.2"/>\r
      <circle cx="33" cy="55" r="3.4"/><circle cx="66" cy="47" r="4"/>\r
      <circle cx="61" cy="40" r="3"/><circle cx="71" cy="56" r="3.4"/>\r
      <circle cx="29" cy="66" r="3"/><circle cx="74" cy="66" r="2.8"/>\r
    </g>\r
    <g fill="#6FBFA8">\r
      <circle cx="38" cy="45" r="1.6"/><circle cx="65" cy="45" r="1.6"/>\r
      <circle cx="33" cy="53" r="1.4"/>\r
    </g>\r
\r
    <path d="M34 68 L47 75 L45 80 L33 74 Z" fill="#1A2420"/>\r
    <path d="M70 68 L57 75 L59 80 L71 74 Z" fill="#1A2420"/>\r
    <ellipse cx="43" cy="84" rx="6.5" ry="7.5" fill="#fff" stroke="#1A2420" stroke-width="2.3"/>\r
    <ellipse cx="61" cy="84" rx="6.5" ry="7.5" fill="#fff" stroke="#1A2420" stroke-width="2.3"/>\r
    <ellipse cx="44.3" cy="85" rx="3.6" ry="4.8" fill="#1A2420"/>\r
    <ellipse cx="62.3" cy="85" rx="3.6" ry="4.8" fill="#1A2420"/>\r
    <circle cx="42.6" cy="81.6" r="1.6" fill="#fff"/>\r
    <circle cx="60.6" cy="81.6" r="1.6" fill="#fff"/>\r
    <path d="M46 96 Q52 92 58 96" stroke="#1A2420" stroke-width="2.8" fill="none"\r
          stroke-linecap="round"/>\r
\r
    <path d="M38 104 L66 104 L64 128 Q52 134 40 128 Z"\r
          fill="#1E4A4A" stroke="#1A2420" stroke-width="3.2" stroke-linejoin="round"/>\r
    <path d="M41 107 L63 107" stroke="#5A4A8A" stroke-width="3.4"/>\r
    <circle cx="52" cy="117" r="6.4" fill="#2E5F5C" stroke="#1A2420" stroke-width="2.4"/>\r
    <circle cx="52" cy="113.4" r="2.4" fill="#8AA85A"/>\r
    <circle cx="48.6" cy="118" r="2.4" fill="#8AA85A"/>\r
    <circle cx="55.4" cy="118" r="2.4" fill="#8AA85A"/>\r
    <circle cx="52" cy="119.6" r="1.8" fill="#B8D46A"/>\r
\r
    <!-- Bottle caustic, suspended vinegar bubbles and glass rim light. -->\r
    <path d="M39 42 C34 60 35 91 39 107" fill="none" stroke="#FFFFFF" stroke-width="2.2"\r
          stroke-linecap="round" opacity=".7"/>\r
    <path d="M63 51 C69 65 69 93 66 108" fill="none" stroke="#83B8AD" stroke-width="1.6"\r
          stroke-linecap="round" opacity=".5"/>\r
    <g fill="none" stroke="#F7F1DE" stroke-width="1.3" opacity=".9">\r
      <circle cx="45" cy="88" r="2"/><circle cx="60" cy="101" r="1.5"/><circle cx="54" cy="72" r="1.2"/>\r
    </g>\r
\r
    <g data-expression="cute">\r
      <path d="M34 74 Q41 69 47 74 M57 74 Q63 69 70 74" fill="none" stroke="#EDE7D8" stroke-width="8" stroke-linecap="round"/>\r
      <path d="M34 74 Q41 69 47 74 M57 74 Q63 69 70 74" fill="none" stroke="#1A2420" stroke-width="2.8" stroke-linecap="round"/>\r
      <ellipse cx="34" cy="96" rx="3" ry="1.8" fill="#DB7D71" opacity=".58"/><ellipse cx="70" cy="96" rx="3" ry="1.8" fill="#DB7D71" opacity=".58"/>\r
      <path d="M45 95 Q52 103 59 95 Q58 105 52 106 Q46 105 45 95 Z" fill="#26322E" stroke="#1A2420" stroke-width="2.2"/>\r
      <path d="M49 101 Q52 103 55 101" fill="none" stroke="#E58D7D" stroke-width="1.7" stroke-linecap="round"/>\r
    </g>\r
\r
    <path class="crack" d="M36 44 L48 58 L38 72 L50 86 L40 100"\r
          stroke="#0E1614" stroke-width="2.8" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="armF" style="transform-origin:70px 96px">\r
    <path d="M76 102 C66 119 44 127 28 117 C18 109 20 97 29 94"\r
          fill="none" stroke="#1A2420" stroke-width="9" stroke-linecap="round"/>\r
    <path d="M76 102 C66 119 44 127 28 117 C18 109 20 97 29 94"\r
          fill="none" stroke="#3E8C7A" stroke-width="5.5" stroke-linecap="round"/>\r
    <path d="M76 102 C66 119 44 127 28 117" fill="none" stroke="#6FBFA8"\r
          stroke-width="1.8" stroke-linecap="round" opacity=".7"/>\r
\r
    <path d="M70 96 L82 99" stroke="#1A2420" stroke-width="12" stroke-linecap="round"/>\r
    <path d="M70 96 L82 99" stroke="#2E5F5C" stroke-width="8.5" stroke-linecap="round"/>\r
    <path d="M60 88 A13 13 0 0 1 86 88 Q73 93 60 88 Z"\r
          fill="#2E5F5C" stroke="#1A2420" stroke-width="3.2" stroke-linejoin="round"/>\r
    <circle cx="73" cy="83" r="3.2" fill="#3E8C7A" stroke="#1A2420" stroke-width="1.8"/>\r
\r
    <path d="M74 94 L114 87" stroke="#1A2420" stroke-width="17" stroke-linecap="round"/>\r
    <path d="M74 94 L114 87" stroke="#6A7A9A" stroke-width="12.5" stroke-linecap="round"/>\r
    <path d="M78 90 L110 84" stroke="#8F9EBA" stroke-width="3" stroke-linecap="round"\r
          opacity=".7"/>\r
    <path d="M88 82 L106 79 L108 91 L90 94 Z"\r
          fill="#B8D46A" stroke="#1A2420" stroke-width="2.8" stroke-linejoin="round"/>\r
    <circle cx="93" cy="87" r="2.2" fill="#3E8C7A"/>\r
    <circle cx="99" cy="85" r="1.8" fill="#3E8C7A"/>\r
    <circle cx="104" cy="87" r="1.6" fill="#2A6355"/>\r
    <path d="M82 96 L85 84" stroke="#1A2420" stroke-width="6.5" stroke-linecap="round"/>\r
    <path d="M82 96 L85 84" stroke="#8F9EBA" stroke-width="3.6" stroke-linecap="round"/>\r
    <path d="M110 80 L118 84 L118 92 L110 95 Z"\r
          fill="#6A7A9A" stroke="#1A2420" stroke-width="2.8" stroke-linejoin="round"/>\r
    <path d="M76 98 Q80 104 86 103" fill="none" stroke="#1A2420" stroke-width="6"\r
          stroke-linecap="round"/>\r
    <path d="M76 98 Q80 104 86 103" fill="none" stroke="#4A5A78" stroke-width="3.4"\r
          stroke-linecap="round"/>\r
    <circle cx="84" cy="97" r="5.4" fill="#1E4A4A" stroke="#1A2420" stroke-width="2.6"/>\r
\r
    <g class="ammo">\r
      <ellipse cx="118" cy="87" rx="4.6" ry="3.6" fill="#B8D46A" stroke="#1A2420"\r
               stroke-width="2.2"/>\r
      <circle cx="117" cy="86" r="1.4" fill="#EDF7C8"/>\r
    </g>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 87px">\r
    <path d="M118 87 C130 78 144 74 156 74" fill="none" stroke="#8AA85A"\r
          stroke-width="7" stroke-linecap="round" opacity=".45"/>\r
    <path d="M118 87 C132 87 146 89 158 92" fill="none" stroke="#B8D46A"\r
          stroke-width="6" stroke-linecap="round" opacity=".6"/>\r
    <path d="M118 87 C130 95 142 102 152 108" fill="none" stroke="#3E8C7A"\r
          stroke-width="5.5" stroke-linecap="round" opacity=".5"/>\r
    <circle cx="140" cy="80" r="3" fill="#B8D46A" opacity=".8"/>\r
    <circle cx="146" cy="95" r="2.6" fill="#8AA85A" opacity=".7"/>\r
    <circle cx="136" cy="100" r="2.4" fill="#6FBFA8" opacity=".7"/>\r
  </g>\r
</svg>\r
`;export{r as default};
