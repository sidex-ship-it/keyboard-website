// Shared reference-based geometry and artwork for the Mountain / 02 concept.
const mountainVariants=[{name:'Forest green',hex:'#3e4938'},{name:'Wine red',hex:'#421722'},{name:'Black',hex:'#292c2b'}];
const mountainCream='#f2e5cf';
function mountainLayout(){
 const keys=[],add=(label,x,y,w=45,row=0)=>keys.push({label,x,y,w,h:43,row,accent:['Esc','Mic','Enter'].includes(label)||(label==='Shift'&&x>500)});
 let x=26;['Esc',...Array.from({length:12},(_,i)=>'F'+(i+1)),'Mic'].forEach((l,i)=>{add(l,x,27, i===13?55:50,0);x+=i===13?60:55;});
 const rows=[['~ Ё','1 !','2 @','3 #','4 $','5 %','6 ^','7 &','8 *','9 (','0 )','− _','= +','←'],['Tab','Q Й','W Ц','E У','R К','T Е','Y Н','U Г','I Ш','O Щ','P З','[ Х','] Ъ','\\'],['Caps','A Ф','S Ы','D В','F А','G П','H Р','J О','K Л','L Д','; Ж','’ Э','Enter'],['Shift','Z Я','X Ч','C С','V М','B И','N Т','M Ь',', Б','. Ю','/ ?','Shift'],['Ctrl','Win','Alt','SPACE','Alt','Fn','Ctrl','←','↓','→']];
 rows.forEach((row,r)=>{let x=26;const widths=r===0?[45,45,45,45,45,45,45,45,45,45,45,45,45,125]:r===1?[70,...Array(12).fill(45),100]:r===2?[83,...Array(11).fill(45),137]:r===3?[108,...Array(10).fill(45),97]:[57,57,57,313,55,55,55,45,45,45];row.forEach((l,i)=>{add(l,x,78+r*49,widths[i],r+1);x+=widths[i]+5;});});
 ['Del','PgUp','PgDn','End'].forEach((l,i)=>add(l,811,78+i*49,52,i+1));add('↑',755,225,45,4);
 // Leave room for the dedicated navigation column and the circular screen.
 return keys;
}
function mountainArtPath(w,h){return `M ${w*.03} ${h*.91} L ${w*.15} ${h*.74} L ${w*.24} ${h*.79} L ${w*.43} ${h*.27} L ${w*.49} ${h*.36} L ${w*.55} ${h*.16} L ${w*.69} ${h*.62} L ${w*.78} ${h*.59} L ${w*.97} ${h*.91} Z`;}
function mountainIllustration(v=0,id='mountain'){
 const c=mountainVariants[v]||mountainVariants[0];
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 378" role="presentation"><defs><linearGradient id="${id}cap" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient></defs><rect x="5" y="15" width="890" height="350" rx="9" fill="${c.hex}"/><rect x="5" y="345" width="890" height="20" rx="7" fill="#000" opacity=".2"/><rect x="20" y="21" width="858" height="313" rx="5" fill="#181c17"/>${mountainLayout().map(k=>{const bg=k.accent?c.hex:mountainCream,ink=k.accent?mountainCream:c.hex;const [en,ru]=k.label.split(' ');return `<g transform="translate(${k.x} ${k.y})"><rect y="3" width="${k.w}" height="${k.h}" rx="5" fill="#000"/><rect width="${k.w}" height="${k.h}" rx="5" fill="${bg}"/><rect width="${k.w}" height="${k.h}" rx="5" fill="url(#${id}cap)"/>${k.label==='SPACE'||k.label==='Shift'||k.label==='Enter'?`<path d="${mountainArtPath(k.w,k.h)}" fill="${ink}"/><path d="M${k.w*.43} ${k.h*.27}l${k.w*.04} ${k.h*.25}l${k.w*.08} ${-k.h*.36}l${k.w*.06} ${k.h*.37}l${-k.w*.08} ${-k.h*.11}l${-k.w*.04} ${k.h*.12}Z" fill="${bg}"/>`:''}${k.label==='SPACE'?'':`<text x="8" y="15" font-family="Arial,sans-serif" font-size="${en.length>4?9:11}" fill="${ink}">${en.replaceAll('&','&amp;')}</text>${ru?`<text x="${k.w-8}" y="32" text-anchor="end" font-size="10" font-family="Arial,sans-serif" fill="${ink}">${ru.replaceAll('&','&amp;')}</text>`:''}`}</g>`;}).join('')}<circle cx="837" cy="49" r="28" fill="#111610" stroke="${c.hex}" stroke-width="4"/><circle cx="837" cy="49" r="22" fill="none" stroke="#247b28" stroke-width="3"/><text x="837" y="54" text-anchor="middle" fill="#eef8e8" font-family="Arial" font-size="13" font-weight="bold">85%</text></svg>`;
}
globalThis.mountainDesign={variants:mountainVariants,cream:mountainCream,layout:mountainLayout,art:mountainArtPath,board:mountainBoard};

function mountainBoard(v=2,id='matterhorn'){
 const index=Number.isInteger(v)&&v>=0&&v<3?v:2,photo=new URL('pictures/matterhorn-case-reference.jpg',document.baseURI).href,full=id==='config';
 // Every color uses the exact same supplied carved-case photo and composition.
 // Only dark neutral surfaces are tinted; cream caps, backdrop and green display remain intact.
 let defs='',effect='';
 if(index!==2){
  const [r,g,b]=index===0?[1.15,1.35,1.04]:[1.40,.52,.76];
  const row=n=>`${.2126*n} ${.7152*n} ${.0722*n} 0 0`;
  defs=`<defs><filter id="${id}-finish" color-interpolation-filters="sRGB"><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -.8504 -2.8608 -.2888 0 2.2" result="dark"/><feColorMatrix in="SourceGraphic" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 4 -8 4 0 1" result="neutral"/><feComposite in="dark" in2="neutral" operator="in" result="surface"/><feColorMatrix in="surface" type="matrix" values="${row(r)} ${row(g)} ${row(b)} 0 0 0 1 0" result="finish"/><feMerge><feMergeNode in="SourceGraphic"/><feMergeNode in="finish"/></feMerge></filter></defs>`;
  effect=` filter="url(#${id}-finish)"`;
 }
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 ${full?600:456}" role="presentation">${defs}<svg width="900" height="${full?600:456}" viewBox="0 0 1280 ${full?853:588}" overflow="hidden"><image href="${photo}" width="1280" height="853"${effect}/></svg></svg>`;
}

// Angular, snow-cut Matterhorn artwork, shared by every rendered colorway.
function paintMatterhorn(c,W,H,ink,bg,label){
 c.save();c.scale(W,H);c.fillStyle=ink;
 if(label==='SPACE'){
 c.fill(new Path2D('M.025 .91 L.09 .84 L.13 .76 L.17 .81 L.22 .71 L.27 .79 L.33 .64 L.38 .68 L.46 .35 L.50 .31 L.55 .12 L.58 .18 L.62 .40 L.68 .63 L.72 .67 L.76 .59 L.80 .70 L.85 .77 L.89 .72 L.94 .85 L.985 .91 Z'));
 c.fillStyle=bg;
 for(const path of ['M.55 .12 L.52 .34 L.48 .43 L.50 .45 L.45 .62 L.51 .56 L.48 .69 L.58 .53 L.55 .50 L.59 .43 L.56 .38 L.58 .31 Z','M.58 .18 L.62 .40 L.60 .43 L.64 .58 L.60 .51 L.57 .46 L.60 .40 Z','M.38 .68 L.33 .64 L.29 .77 L.34 .73 L.33 .78 L.39 .75 L.42 .68 Z','M.13 .76 L.10 .84 L.15 .81 L.17 .83 Z','M.76 .59 L.73 .71 L.76 .68 L.80 .75 Z','M.48 .72 L.41 .83 L.52 .78 L.55 .82 L.62 .80 L.56 .76 L.55 .69 L.52 .74 Z'])c.fill(new Path2D(path));
 }else if(label==='Enter'||label==='Shift-right'){
 c.fill(new Path2D('M.44 .96 L.59 .77 L.68 .55 L.76 .51 L.88 .12 L.91 .17 L.98 .44 L.98 .97 Z'));c.fillStyle=bg;
 for(const path of ['M.88 .12 L.83 .43 L.77 .61 L.82 .58 L.76 .76 L.84 .70 L.82 .78 L.89 .62 L.86 .60 L.90 .47 L.87 .43 L.91 .29 Z','M.92 .39 L.94 .66 L.98 .73 L.96 .53 Z','M.68 .55 L.61 .78 L.69 .72 L.66 .84 L.73 .76 Z'])c.fill(new Path2D(path));
 }else{c.fill(new Path2D('M.02 .96 L.17 .83 L.27 .86 L.42 .66 L.48 .71 L.58 .57 L.67 .72 L.77 .78 L.84 .73 L.98 .96 Z'));c.fillStyle=bg;c.fill(new Path2D('M.58 .57 L.51 .75 L.56 .72 L.54 .80 L.62 .73 L.60 .69 L.64 .73 Z'));}
 c.restore();
}
globalThis.mountainDesign.paint=paintMatterhorn;
