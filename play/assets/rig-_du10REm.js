const r=`<!-- Orumcek (Spider) - Crawling Crate - Spoil - ranged 3, thrown web\r
     attackSpeed 0.90 -> round(20/0.90) = 22 ticks = 1.10 s\r
\r
     The family's one long shooter, and the only body in the twelve whose\r
     outline is wider than it is tall: a low flat cephalothorax carrying a\r
     big round abdomen, with four splayed legs reaching well past the mass\r
     on each side. Every other body here is a vertical; this one is a star,\r
     which is what a player picks out of a back row at a glance.\r
\r
     Archetype \`throw\`, and with the Burnt Oven's Cira this is only the\r
     second rig on disk to wear it - the archetype shipped authored and worn\r
     by nobody for a long time.\r
\r
     **\`MUZZLE orumcek\` is \`part: 'armF'\`, deliberately not \`ammo\`.** \`throw\`\r
     carries an ammo track and this rig does not use it: a spider does not\r
     wind up and let go of a web, it pays one out of the spinneret. So the\r
     muzzle is the spinneret at the abdomen's rear, the way Simit's is a\r
     barrel mouth, and there is no held round for the track to carry.\r
\r
     \`SHOTS orumcek\` is \`flakes\` rather than \`blob\`: silk leaves as several\r
     strands strung out off-axis, not as one round thing. Near-white, which\r
     makes it the one shot on the roster read by value rather than hue - and\r
     that is exactly what tells it from the Moth's pale dust at a distance.\r
\r
     Mass = thorax plus abdomen, x 14..90 (76 wide), y 58..114 (56 tall),\r
     ratio 0.74 - the only body of the twelve under 1.0. Eye y 76 = 32%. -->\r
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-26 -22 212 194"\r
     class="rig" data-atk="throw" data-unit="orumcek" style="--dur-atk:1.10s">\r
\r
  <ellipse class="shadow" cx="52" cy="137" rx="28" ry="6" fill="#241A10" opacity=".32"/>\r
\r
  <g class="armB" style="transform-origin:28px 84px">\r
    <path d="M28 84 L16 78 L10 88" fill="none" stroke="#241A10" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M28 84 L16 78 L10 88" fill="none" stroke="#4A311B" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Walking legs. Each is elbowed high and comes down outside the mass,\r
       which is the silhouette: a spider is a body slung under its own\r
       legs, not a body standing on them. -->\r
  <g class="legB" style="transform-origin:44px 114px">\r
    <path d="M44 104 L30 96 L22 112 L26 126" fill="none" stroke="#241A10" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M44 104 L30 96 L22 112 L26 126" fill="none" stroke="#4A311B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M19 126 Q16 130 19 134 L31 134 Q33 129 30 125 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
  <g class="legF" style="transform-origin:62px 114px">\r
    <path d="M62 104 L76 96 L84 112 L80 126" fill="none" stroke="#241A10" stroke-width="8.5" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M62 104 L76 96 L84 112 L80 126" fill="none" stroke="#4A311B" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M74 125 Q71 129 74 134 L86 134 Q88 130 85 126 Z"\r
          fill="#6B4A2A" stroke="#241A10" stroke-width="3" stroke-linejoin="round"/>\r
  </g>\r
\r
  <g class="body">\r
    <!-- Abdomen, behind and above: the big round half, drawn first. -->\r
    <ellipse cx="36" cy="82" rx="22" ry="20" fill="#4A311B"/>\r
    <path d="M58 82 Q58 98 42 102 Q36 103 33 102 L33 96 Q48 96 52 86 Q54 84 54 81 Z" fill="#241A10" opacity=".55"/>\r
    <path d="M26 68 Q20 76 20 84" fill="none" stroke="#6B4A2A" stroke-width="5" stroke-linecap="round"/>\r
    <ellipse cx="36" cy="82" rx="22" ry="20" fill="none" stroke="#241A10" stroke-width="4"/>\r
    <!-- Two pale bars across the abdomen: the pantry spider's mark, uneven\r
         so the pair does not read as a face from behind. -->\r
    <path d="M24 76 Q36 80 48 75" fill="none" stroke="#B8A377" stroke-width="3.4" stroke-linecap="round"/>\r
    <path d="M26 88 Q36 92 46 87" fill="none" stroke="#B8A377" stroke-width="2.8" stroke-linecap="round"/>\r
\r
    <!-- The spinneret, at the rear and low. This is what the shot leaves\r
         from, and it is drawn so a reader can see why the muzzle is here. -->\r
    <path d="M16 90 L11 95" stroke="#241A10" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M16 90 L12 94" stroke="#B8A377" stroke-width="3" stroke-linecap="round"/>\r
\r
    <!-- Cephalothorax, forward and lower. -->\r
    <ellipse cx="66" cy="86" rx="21" ry="17" fill="#6B4A2A"/>\r
    <path d="M87 86 Q87 99 72 102 Q66 103 63 102 L63 97 Q76 97 80 89 Q82 88 82 85 Z" fill="#4A311B"/>\r
    <path d="M56 76 Q51 81 51 87" fill="none" stroke="#8F6A3E" stroke-width="4.5" stroke-linecap="round"/>\r
    <ellipse cx="66" cy="86" rx="21" ry="17" fill="none" stroke="#241A10" stroke-width="4"/>\r
\r
    <!-- Four eyes, not two: the extra pair is small, set above and off to\r
         one side, and it is the one place this rig breaks the cast's face\r
         to say spider. Brows over the big pair only. -->\r
    <path d="M53 78 L61 82 M71 82 L79 78" stroke="#241A10" stroke-width="3.2" stroke-linecap="round"/>\r
    <ellipse cx="58" cy="88" rx="5.8" ry="6.8" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="74" cy="88" rx="5.8" ry="6.8" fill="#A8C43A" stroke="#241A10" stroke-width="2.2"/>\r
    <ellipse cx="59.1" cy="89" rx="3.1" ry="4.3" fill="#241A10"/>\r
    <ellipse cx="75.1" cy="89" rx="3.1" ry="4.3" fill="#241A10"/>\r
    <circle cx="57" cy="85.8" r="1.5" fill="#FFFFFF"/>\r
    <circle cx="73" cy="85.8" r="1.5" fill="#FFFFFF"/>\r
    <circle cx="64" cy="76" r="2.8" fill="#A8C43A" stroke="#241A10" stroke-width="2"/>\r
    <circle cx="71" cy="74" r="2.2" fill="#A8C43A" stroke="#241A10" stroke-width="2"/>\r
\r
    <path class="crack" d="M30 66 L44 80 L32 92 L46 104 L36 112"\r
          stroke="#241A10" stroke-width="3" fill="none" stroke-linejoin="round"/>\r
  </g>\r
\r
  <!-- Front leg, raised and reaching. There is no held object on this rig,\r
       so \`armF\` is the limb alone and the muzzle above is what fires. -->\r
  <g class="armF" style="transform-origin:80px 80px">\r
    <path d="M80 80 L96 70 L110 74" fill="none" stroke="#241A10" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M80 80 L96 70 L110 74" fill="none" stroke="#4A311B" stroke-width="4.5" stroke-linecap="round" stroke-linejoin="round"/>\r
    <path d="M110 74 L118 74" stroke="#241A10" stroke-width="6" stroke-linecap="round"/>\r
    <path d="M110 74 L117 74" stroke="#8F6A3E" stroke-width="3" stroke-linecap="round"/>\r
  </g>\r
\r
  <g class="fx" style="transform-origin:118px 74px">\r
    <path d="M118 62 L138 56 M118 74 L140 74 M118 86 L138 92"\r
          stroke="#E8E4DA" stroke-width="4.4" stroke-linecap="round" opacity=".9"/>\r
    <path d="M124 62 L128 74 L124 86" fill="none" stroke="#FFFFFF" stroke-width="2.2" stroke-linecap="round"/>\r
  </g>\r
</svg>\r
`;export{r as default};
