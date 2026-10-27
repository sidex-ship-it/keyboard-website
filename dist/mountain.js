// Shared reference-based geometry and artwork for the Mountain / 02 concept.
const mountainVariants=[{name:'Forest green',hex:'#3e4938'},{name:'Burgundy',hex:'#64232e'},{name:'Black',hex:'#292c2b'}];
const mountainCream='#f2e5cf';
function mountainLayout(){
 const keys=[],add=(label,x,y,w=45,row=0)=>keys.push({label,x,y,w,h:43,row,accent:['Esc','Mic','Enter','Shift'].includes(label)});
 let x=26;['Esc',...Array.from({length:12},(_,i)=>'F'+(i+1)),'Mic'].forEach((l,i)=>{add(l,x,27, i===13?55:50,0);x+=i===13?60:55;});
 const rows=[['~ Ё','1 !','2 @','3 #','4 $','5 %','6 ^','7 &','8 *','9 (','0 )','− _','= +','←'],['Tab','Q Й','W Ц','E У','R К','T Е','Y Н','U Г','I Ш','O Щ','P З','[ Х','] Ъ','\\'],['Caps','A Ф','S Ы','D В','F А','G П','H Р','J О','K Л','L Д','; Ж','’ Э','Enter'],['Shift','Z Я','X Ч','C С','V М','B И','N Т','M Ь',', Б','. Ю','/ ?','Shift'],['Ctrl','Win','Alt','SPACE','Alt','Fn','Ctrl','←','↓','→']];
 rows.forEach((row,r)=>{let x=26;const widths=r===0?[45,45,45,45,45,45,45,45,45,45,45,45,45,105]:r===1?[70,...Array(12).fill(45),80]:r===2?[83,...Array(11).fill(45),122]:r===3?[108,...Array(10).fill(45),97]:[57,57,57,313,45,45,45,45,45,45];row.forEach((l,i)=>{add(l,x,78+r*49,widths[i],r+1);x+=widths[i]+5;});});
 ['Del','PgUp','PgDn','End'].forEach((l,i)=>add(l,811,78+i*49,52,i+1));add('↑',755,225,45,4);
 // Leave room for the dedicated navigation column and the circular screen.
 for(const k of keys)if(k.y>70&&k.label!=='↑'&&k.x<810){k.x=26+(k.x-26)*.96;k.w*=.96;}
 return keys;
}
function mountainArtPath(w,h){return `M ${w*.03} ${h*.91} L ${w*.15} ${h*.74} L ${w*.24} ${h*.79} L ${w*.43} ${h*.27} L ${w*.49} ${h*.36} L ${w*.55} ${h*.16} L ${w*.69} ${h*.62} L ${w*.78} ${h*.59} L ${w*.97} ${h*.91} Z`;}
function mountainBoard(v=0,id='mountain'){
 const c=mountainVariants[v]||mountainVariants[0];
 return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 900 378" role="presentation"><defs><linearGradient id="${id}cap" x2="0" y2="1"><stop stop-color="#fff" stop-opacity=".35"/><stop offset="1" stop-color="#000" stop-opacity=".2"/></linearGradient></defs><rect x="5" y="15" width="890" height="350" rx="9" fill="${c.hex}"/><rect x="5" y="345" width="890" height="20" rx="7" fill="#000" opacity=".2"/><rect x="20" y="21" width="858" height="313" rx="5" fill="#181c17"/>${mountainLayout().map(k=>{const bg=k.accent?c.hex:mountainCream,ink=k.accent?mountainCream:c.hex;const [en,ru]=k.label.split(' ');return `<g transform="translate(${k.x} ${k.y})"><rect y="3" width="${k.w}" height="${k.h}" rx="5" fill="#000"/><rect width="${k.w}" height="${k.h}" rx="5" fill="${bg}"/><rect width="${k.w}" height="${k.h}" rx="5" fill="url(#${id}cap)"/>${k.label==='SPACE'||k.label==='Shift'||k.label==='Enter'?`<path d="${mountainArtPath(k.w,k.h)}" fill="${ink}"/><path d="M${k.w*.43} ${k.h*.27}l${k.w*.04} ${k.h*.25}l${k.w*.08} ${-k.h*.36}l${k.w*.06} ${k.h*.37}l${-k.w*.08} ${-k.h*.11}l${-k.w*.04} ${k.h*.12}Z" fill="${bg}"/>`:''}${k.label==='SPACE'?'':`<text x="8" y="15" font-family="Arial,sans-serif" font-size="${en.length>4?9:11}" fill="${ink}">${en.replaceAll('&','&amp;')}</text>${ru?`<text x="${k.w-8}" y="32" text-anchor="end" font-size="10" font-family="Arial,sans-serif" fill="${ink}">${ru.replaceAll('&','&amp;')}</text>`:''}`}</g>`;}).join('')}<circle cx="837" cy="49" r="28" fill="#111610" stroke="${c.hex}" stroke-width="4"/><circle cx="837" cy="49" r="22" fill="none" stroke="#247b28" stroke-width="3"/><text x="837" y="54" text-anchor="middle" fill="#eef8e8" font-family="Arial" font-size="13" font-weight="bold">85%</text></svg>`;
}
globalThis.mountainDesign={variants:mountainVariants,cream:mountainCream,layout:mountainLayout,art:mountainArtPath,board:mountainBoard};
