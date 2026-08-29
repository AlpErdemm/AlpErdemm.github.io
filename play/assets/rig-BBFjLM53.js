const n=`<!-- Limon · Eşya · "Uyanır. Erken ve sık."
     Bütün bir limon, yaprağı ve önünde kesilmiş yarısı. İki parça olması
     bilinçli: 24 px'te tek bir sarı oval "yumurta" gibi okunuyor, dilimli
     kesit ise limonu tereddütsüz limon yapıyor. Uçlardaki iki meme ucu da
     siluete sadece bu meyvede olan iki çıkıntıyı veriyor. -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-item="limon">

  <!-- yaprak -->
  <path d="M56 44 Q50 22 72 12 Q82 32 62 44 Z"
        fill="#5E8C4A" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <path d="M60 42 Q66 28 71 17" stroke="#3F6B37" stroke-width="2.6" fill="none"/>

  <!-- uçlar, gövdenin altına giriyor -->
  <path d="M76 52 L90 48 L86 62 Z"
        fill="#E8C33C" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>
  <path d="M20 70 L8 68 L14 82 Z"
        fill="#E8C33C" stroke="#2A2114" stroke-width="3.2" stroke-linejoin="round"/>

  <!-- bütün limon -->
  <ellipse cx="48" cy="64" rx="31" ry="23" fill="#E8C33C"
           stroke="#2A2114" stroke-width="4" transform="rotate(-12 48 64)"/>
  <ellipse cx="36" cy="53" rx="11" ry="5" fill="#fff" opacity=".2"
           transform="rotate(-24 36 53)"/>

  <!-- kesilmiş yarısı -->
  <circle cx="86" cy="88" r="21" fill="#E8C33C" stroke="#2A2114" stroke-width="3.8"/>
  <circle cx="86" cy="88" r="16" fill="#F7F1E2"/>
  <circle cx="86" cy="88" r="13.5" fill="#F2D95C"/>
  <path d="M86 88 L86 74.5 M86 88 L97.5 81 M86 88 L97.5 95
           M86 88 L86 101.5 M86 88 L74.5 95 M86 88 L74.5 81"
        stroke="#F7F1E2" stroke-width="3" stroke-linecap="round"/>
</svg>
`;export{n as default};
