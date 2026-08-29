const n=`<!-- Vatandaş · henüz komutan değil
     Altısının hiçbirinin olmadığı şey: şapkasız baş, işaretsiz yaka, boş yüz.
     \`player.commander === null\` iken gösterilen tek "yedinci" — bir komutan
     DEĞİL, komutansızlığın kendisi.
     Bu yüzden \`.fxWin\` / \`.fxLose\` YOK: altısının her birinin bir imzası var
     (altın, satır, hâle, alev, un), bunun hiçbiri yok — taşıyacak bir şeyi
     olmaması onun tek özelliği. \`.hat\` grubu saç: parça sözlüğü aynı kalsın,
     ama başlık olmasın (bkz. anim.css). -->
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120"
     class="rig" data-commander="vatandas">

  <path d="M47 96 L73 96 L73 108 Q86 111 88 120 L32 120 Q34 111 47 108 Z"
        fill="#E8A16C" stroke="#2A2114" stroke-width="4"/>
  <path d="M47 107 Q60 118 73 107 Q86 111 88 120 L32 120 Q34 111 47 107 Z"
        fill="#C9BFA8" stroke="#2A2114" stroke-width="4" stroke-linejoin="round"/>

  <g class="head" style="transform-origin:60px 96px">
    <ellipse cx="28" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <ellipse cx="92" cy="74" rx="7" ry="9" fill="#E8A16C" stroke="#2A2114" stroke-width="3.4"/>
    <circle cx="60" cy="70" r="32" fill="#E8A16C" stroke="#2A2114" stroke-width="4.5"/>
    <ellipse cx="45" cy="53" rx="11" ry="7" fill="#fff" opacity=".2" transform="rotate(-20 45 53)"/>

    <g class="faceIdle">
      <path d="M42 56 L54 56 M78 56 L66 56" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <circle cx="49" cy="69" r="3.4" fill="#2A2114"/>
      <circle cx="72" cy="68" r="3.4" fill="#2A2114"/>
      <path d="M52 90 L68 90" stroke="#2A2114" stroke-width="2.6" stroke-linecap="round"/>
    </g>

    <g class="faceWin" opacity="0">
      <path d="M41 51 Q48 46 55 50 M79 51 Q72 46 65 50" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <path d="M43 70 Q49 62 55 70 M66 70 Q72 62 78 70" stroke="#2A2114" stroke-width="3.4"
            fill="none" stroke-linecap="round"/>
      <path d="M50 88 Q60 98 70 88 Z" fill="#2A2114"/>
    </g>

    <g class="faceLose" opacity="0">
      <path d="M42 52 Q48 58 55 59 M78 52 Q72 58 65 59" stroke="#2A2114" stroke-width="2.8"
            fill="none" stroke-linecap="round"/>
      <path d="M44 70 L55 70 M65 70 L76 70" stroke="#2A2114" stroke-width="3.4"
            stroke-linecap="round"/>
      <path d="M52 94 Q60 88 68 93" stroke="#2A2114" stroke-width="2.6" fill="none"
            stroke-linecap="round"/>
    </g>
  </g>

  <!-- düz saç: başlığın olmadığı yerde aynı parça -->
  <g class="hat" style="transform-origin:60px 44px">
    <path d="M29 52 Q28 32 45 27 Q60 22 76 28 Q92 34 91 52 Q76 42 60 42 Q44 42 29 52 Z"
          fill="#5E4B36" stroke="#2A2114" stroke-width="3.8" stroke-linejoin="round"/>
    <path d="M40 38 Q52 32 66 33" stroke="#7A6247" stroke-width="2.6" fill="none"
          stroke-linecap="round"/>
  </g>
</svg>
`;export{n as default};
