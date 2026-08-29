const e=`<!-- Bostan Korkuluğu · SUMMON · yakın dövüş
     attackSpeed 0.87 → round(20/0.87) = 23 tick = 1.15 sn

     Karakter sayfasına göre yeniden çizildi — GÖRÜNÜŞÜ. Sayfanın künyesi
     ("Pazar / Destekçi · maliyet 4", iki ekonomi becerisi) bu gövdeyle
     örtüşmüyor ve örtüşemez: \`units.ts\` korkuluğu \`SUMMONS\` içinde tutuyor,
     \`FIGHTERS\` içinde değil — tezgâhta yok, havuzda yok, \`origin\` ve \`role\`
     alanları yok, ve \`effects.ts\`'te \`BOSTAN_SUMMON_DEF\`, yani Pazar'ın değil
     BOSTAN'ın çağırdığı gövde. Becerisi de yok: \`units.ts\`'te \`skill\` alanı
     yok, çünkü çağrılanlar büyü yapmıyor — mana barı yine de dolabilir
     (\`manaMax\` varsayılana düşer), ama \`combat.ts\`'nin \`cast\` olayı bu gövde
     için \`skill: ''\` taşır ve \`SHAPE_VISUALS\`'a hiçbir şekil bağlamaz. Sayfadaki
     iki yetenek de fiyat ve yenileme üzerine — sahada duran bir gövdenin
     dokunamayacağı sistemler.

     Bu yüzden buradan alınan şey yalnızca sanat yönü: çuval kafa, düğme
     gözler, dikişli ağız, ayçiçekli hasır şapka, karga, fener ve asa. Hiçbiri
     mekaniğe bir şey iddia etmiyor, ve korkuluk zaten korkuluk.

     BACAKLAR KALDI, sayfa direk çizse de. Menzil 1 ve sahada yürüyor; \`walk\`
     pisti legB/legF istiyor. Sırıklar samanla sarılı çizildi — direğin
     ikiye ayrılmış hâli, yürüyebilen versiyonu.

     ARKETİP \`swing\` KALDI: asa dik duruyor, ki \`swing\`in temasta eklediği
     +56° ile ucu tam hedefin hizasına geliyor (dinlenme -64°, temas -8°).

     SİLUET: kadronun TEK YEMEK OLMAYAN gövdesi, ve tek şapkalısı. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"
     class="rig" data-atk="swing" data-unit="korkuluk" style="--dur-atk:1.15s">

  <ellipse class="shadow" cx="52" cy="137" rx="26" ry="5.8" fill="#000" opacity=".34"/>

  <g class="armB" style="transform-origin:28px 72px">
    <path d="M28 72 L16 76" stroke="#2A2114" stroke-width="11" stroke-linecap="round"/>
    <path d="M28 72 L16 76" stroke="#6B4A2E" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M20 70 L24 76 M17 72 L20 78" stroke="#D9B87A" stroke-width="2.4"
          stroke-linecap="round"/>
    <path d="M13 90 L11 60 C11 56 15 55 18 58 L20 63"
          fill="none" stroke="#2A2114" stroke-width="7" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M13 90 L11 60 C11 56.5 14.5 56 17.5 58.6 L19.6 63"
          fill="none" stroke="#6B4A2E" stroke-width="4" stroke-linecap="round"
          stroke-linejoin="round"/>
    <path d="M20 64 L20 68" stroke="#4A5258" stroke-width="2.4" stroke-linecap="round"/>
    <path d="M13 70 L27 70 L26 86 Q20 90 14 86 Z"
          fill="#4A5258" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M15 73 L25 73 L24 83 L16 83 Z" fill="#FFD166"/>
    <path d="M16 75 L24 75 M16 79 L24 79" stroke="#E89A2A" stroke-width="1.6"/>
    <path d="M12 88 L28 88" stroke="#2A2114" stroke-width="3" stroke-linecap="round"/>
    <circle cx="14" cy="77" r="4.6" fill="#6B4A2E" stroke="#2A2114" stroke-width="2.4"/>
  </g>

  <g class="legB" style="transform-origin:44px 112px">
    <path d="M45 104 L41 128" stroke="#2A2114" stroke-width="11" stroke-linecap="round"/>
    <path d="M45 104 L41 128" stroke="#6B4A2E" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M38 112 L48 111 M37 120 L47 119" stroke="#C9A87A" stroke-width="2.6"
          stroke-linecap="round"/>
    <path d="M41 128 L33 134 M41 128 L38 136 M41 128 L46 134"
          stroke="#D9B87A" stroke-width="3" stroke-linecap="round"/>
  </g>
  <g class="legF" style="transform-origin:62px 112px">
    <path d="M61 104 L65 128" stroke="#2A2114" stroke-width="11" stroke-linecap="round"/>
    <path d="M61 104 L65 128" stroke="#7A5636" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M58 112 L68 113 M59 120 L69 121" stroke="#C9A87A" stroke-width="2.6"
          stroke-linecap="round"/>
    <path d="M65 128 L73 134 M65 128 L68 136 M65 128 L60 134"
          stroke="#D9B87A" stroke-width="3" stroke-linecap="round"/>
  </g>

  <g class="body" style="transform-origin:52px 116px">
    <path d="M52 112 L52 46" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M52 112 L52 46" stroke="#6B4A2E" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M22 72 L82 70" stroke="#2A2114" stroke-width="8" stroke-linecap="round"/>
    <path d="M22 72 L82 70" stroke="#6B4A2E" stroke-width="5" stroke-linecap="round"/>

    <path d="M30 68 L74 66 L79 100 L71 96 L64 106 L56 96 L48 106 L40 96 L29 102 Z"
          fill="#8A6E48" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>
    <path d="M32 76 L48 74 L49 88 L33 90 Z" fill="#4A6E8A" opacity=".9"/>
    <path d="M58 72 L74 70 L75 82 L59 84 Z" fill="#35516A" opacity=".8"/>
    <path d="M32 76 L48 74 M33 90 L49 88" stroke="#2A2114" stroke-width="1.6"
          stroke-dasharray="3 3"/>
    <path d="M31 94 Q52 100 77 94" stroke="#B8945E" stroke-width="5" fill="none"
          stroke-linecap="round"/>
    <path d="M36 97 L38 92 M46 99 L48 94 M58 99 L60 94 M68 97 L70 92"
          stroke="#8A6634" stroke-width="2.2" stroke-linecap="round"/>
    <g stroke="#D9B87A" stroke-width="2.8" stroke-linecap="round">
      <path d="M30 68 L21 78"/><path d="M74 66 L83 76"/>
      <path d="M36 102 L32 114"/><path d="M68 100 L72 112"/><path d="M52 104 L52 114"/>
    </g>

    <circle cx="44" cy="80" r="5" fill="#6B4A2E" stroke="#2A2114" stroke-width="2.2"/>
    <g fill="#E8B84A" stroke="#2A2114" stroke-width="1.6">
      <ellipse cx="44" cy="73.5" rx="2.3" ry="3.4"/><ellipse cx="50.5" cy="80" rx="3.4" ry="2.3"/>
      <ellipse cx="44" cy="86.5" rx="2.3" ry="3.4"/><ellipse cx="37.5" cy="80" rx="3.4" ry="2.3"/>
      <ellipse cx="48.6" cy="75.4" rx="3" ry="2.6"/><ellipse cx="48.6" cy="84.6" rx="3" ry="2.6"/>
      <ellipse cx="39.4" cy="84.6" rx="3" ry="2.6"/><ellipse cx="39.4" cy="75.4" rx="3" ry="2.6"/>
    </g>
    <circle cx="44" cy="80" r="3.8" fill="#8A6634" stroke="#2A2114" stroke-width="2"/>

    <path d="M36 56 Q52 64 68 56 L70 66 Q52 74 34 66 Z"
          fill="#4A6E8A" stroke="#2A2114" stroke-width="3" stroke-linejoin="round"/>
    <path d="M37 61 Q52 68 67 61" stroke="#35516A" stroke-width="2.2" fill="none"/>

    <path d="M35 40 C35 24 43 17 52 17 C61 17 69 24 69 40 C69 51 61 56 52 56
             C43 56 35 51 35 40 Z"
          fill="#C9A87A" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>
    <path d="M38 22 L66 22" stroke="#A8865A" stroke-width="3" stroke-linecap="round"/>
    <path d="M64 33 L67 37 M67 33 L64 37" stroke="#A8865A" stroke-width="1.8"
          stroke-linecap="round"/>
    <circle cx="44" cy="41" r="4.6" fill="#24242A" stroke="#2A2114" stroke-width="2"/>
    <circle cx="60" cy="41" r="4.6" fill="#24242A" stroke="#2A2114" stroke-width="2"/>
    <circle cx="42.6" cy="39.4" r="1.5" fill="#fff"/>
    <circle cx="58.6" cy="39.4" r="1.5" fill="#fff"/>
    <path d="M42 46 Q52 52 62 46" stroke="#2A2114" stroke-width="2.6" fill="none"
          stroke-linecap="round"/>
    <path d="M45 44 L45 50 M52 47 L52 53 M59 44 L59 50" stroke="#2A2114" stroke-width="2.2"
          stroke-linecap="round"/>

    <path d="M18 26 Q52 17 86 26 Q52 34 18 26 Z"
          fill="#B8945E" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>
    <path d="M40 26 C38 17 46 10 56 11 C61 15 59 22 61 26 Q52 30 40 26 Z"
          fill="#C9A87A" stroke="#2A2114" stroke-width="3.6" stroke-linejoin="round"/>
    <path d="M56 11 C61 10 64 14 62 18" fill="none" stroke="#2A2114" stroke-width="3.4"
          stroke-linecap="round"/>
    <path d="M56 11 C60.5 10.4 63.4 14 61.6 17.4" fill="none" stroke="#C9A87A"
          stroke-width="2" stroke-linecap="round"/>
    <path d="M40 26 Q52 22 61 26" stroke="#4A6E8A" stroke-width="4.4" fill="none"/>
    <path d="M44 17 L48 21 M52 13 L52 18" stroke="#A8865A" stroke-width="1.8"
          stroke-linecap="round"/>
    <g stroke="#D9B87A" stroke-width="2.4" stroke-linecap="round">
      <path d="M22 27 L15 32"/><path d="M30 30 L26 37"/><path d="M76 28 L84 32"/>
      <path d="M68 31 L72 38"/>
    </g>
    <circle cx="30" cy="24" r="5" fill="#6B4A2E" stroke="#2A2114" stroke-width="1.8"/>
    <g fill="#E8B84A" stroke="#2A2114" stroke-width="1.4">
      <ellipse cx="30" cy="17.5" rx="2.2" ry="3.2"/><ellipse cx="36.5" cy="24" rx="3.2" ry="2.2"/>
      <ellipse cx="30" cy="30.5" rx="2.2" ry="3.2"/><ellipse cx="23.5" cy="24" rx="3.2" ry="2.2"/>
      <ellipse cx="34.6" cy="19.4" rx="2.8" ry="2.4"/><ellipse cx="34.6" cy="28.6" rx="2.8" ry="2.4"/>
      <ellipse cx="25.4" cy="28.6" rx="2.8" ry="2.4"/><ellipse cx="25.4" cy="19.4" rx="2.8" ry="2.4"/>
    </g>
    <circle cx="30" cy="24" r="3.6" fill="#8A6634" stroke="#2A2114" stroke-width="1.6"/>

    <path d="M74 18 C80 14 86 16 86 22 C86 26 82 28 78 27 L74 24 Z"
          fill="#24242A" stroke="#2A2114" stroke-width="2.4" stroke-linejoin="round"/>
    <path d="M86 20 L92 21 L86 23 Z" fill="#E8B84A" stroke="#2A2114" stroke-width="1.4"
          stroke-linejoin="round"/>
    <circle cx="82" cy="20" r="1.2" fill="#E8E8E8"/>
    <path d="M74 24 L70 30 M76 26 L74 32" stroke="#24242A" stroke-width="2.4"
          stroke-linecap="round"/>

    <!-- Loose straw fibres, coarse weave and hand-stitching preserve the reference's handmade grit. -->
    <g stroke="#E3C27E" stroke-width="1.7" stroke-linecap="round" opacity=".85">
      <path d="M31 82 L22 86"/><path d="M37 102 L31 111"/><path d="M62 102 L66 112"/><path d="M74 79 L84 84"/>
    </g>
    <path d="M35 73 L42 79 L49 73 M58 74 L65 80 L72 73" fill="none" stroke="#C9AA72"
          stroke-width="1.4" stroke-dasharray="2 2"/>
    <circle cx="55" cy="95" r="1.5" fill="#E8B84A"/>

    <g data-expression="cute">
      <path d="M38 35 Q44 31 49 35 M55 35 Q60 31 66 35" fill="none" stroke="#2A2114" stroke-width="2.5" stroke-linecap="round"/>
      <ellipse cx="36" cy="48" rx="3" ry="1.8" fill="#D87362" opacity=".5"/><ellipse cx="68" cy="48" rx="3" ry="1.8" fill="#D87362" opacity=".5"/>
      <path d="M42 48 Q52 56 62 48" fill="none" stroke="#A8865A" stroke-width="7" stroke-linecap="round"/>
      <path d="M42 48 Q52 56 62 48" fill="none" stroke="#2A2114" stroke-width="2.5" stroke-linecap="round"/>
      <path d="M46 52 L48 54 M52 54 L52 56 M58 52 L56 54" stroke="#2A2114" stroke-width="1.5" stroke-linecap="round"/>
    </g>

    <path class="crack" d="M36 60 L48 72 L38 84 L50 96 L40 108"
          stroke="#1A1410" stroke-width="3" fill="none" stroke-linejoin="round"/>
  </g>

  <g class="armF" style="transform-origin:76px 72px">
    <path d="M76 72 L88 76" stroke="#2A2114" stroke-width="11" stroke-linecap="round"/>
    <path d="M76 72 L88 76" stroke="#7A5636" stroke-width="7.5" stroke-linecap="round"/>
    <path d="M80 70 L84 76 M85 72 L88 78" stroke="#D9B87A" stroke-width="2.4"
          stroke-linecap="round"/>

    <path d="M92 112 L98 26" stroke="#2A2114" stroke-width="9" stroke-linecap="round"/>
    <path d="M92 112 L98 26" stroke="#6B4A2E" stroke-width="5.5" stroke-linecap="round"/>
    <path d="M94 84 L97 40" stroke="#8A6634" stroke-width="1.8" stroke-linecap="round"
          opacity=".7"/>
    <g stroke="#D9B87A" stroke-width="2.6" stroke-linecap="round">
      <path d="M97 34 L104 28"/><path d="M97 34 L91 27"/><path d="M97.5 40 L104 38"/>
    </g>
    <path d="M96 52 L96 60" stroke="#A8865A" stroke-width="2" stroke-linecap="round"/>
    <ellipse cx="96" cy="64" rx="4.4" ry="5" fill="#E8DCC0" stroke="#2A2114" stroke-width="2.2"/>
    <path d="M92 68 L100 68 L98 78 Q96 81 94 78 Z"
          fill="#E8DCC0" stroke="#2A2114" stroke-width="2.2" stroke-linejoin="round"/>
    <circle cx="94.4" cy="63" r="1" fill="#8C1D2C"/>
    <circle cx="97.6" cy="63" r="1" fill="#8C1D2C"/>
    <circle cx="96" cy="72" r="1.6" fill="#4A6E8A"/>
    <circle cx="90" cy="77" r="5" fill="#6B4A2E" stroke="#2A2114" stroke-width="2.4"/>
  </g>

  <g class="fx" style="transform-origin:98px 74px">
    <path d="M84 34 Q124 74 88 114" fill="none" stroke="#8A6634" stroke-width="11"
          stroke-linecap="round" opacity=".38"/>
    <path d="M86 40 Q118 74 90 110" fill="none" stroke="#D9B87A" stroke-width="6"
          stroke-linecap="round" opacity=".85"/>
    <path d="M89 48 Q112 74 92 104" fill="none" stroke="#F2E2B8" stroke-width="2.4"
          stroke-linecap="round"/>
    <path d="M124 60 L130 56 M126 74 L133 74 M124 90 L130 94"
          stroke="#E8C88A" stroke-width="3" stroke-linecap="round" opacity=".8"/>
  </g>
</svg>
`;export{e as default};
