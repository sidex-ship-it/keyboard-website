// Character now uses the reference Z-84 layout in every renderer.
(()=>{const rows=[
 {y:28,labels:['Esc','F1','F2','F3','F4','F5','F6','F7','F8','F9','F10','F11','F12','PrtSc','Pause','Del'],widths:Array(16).fill(49)},
 {y:82,labels:['~ Ё','1 !','2 @','3 #','4 $','5 %','6 ^','7 &','8 *','9 (','0 )','− _','= +','Backspace','Home'],widths:[...Array(13).fill(49),102,49]},
 {y:132,labels:['Tab','Q Й','W Ц','E У','R К','T Е','Y Н','U Г','I Ш','O Щ','P З','[ Х','] Ъ','\\','End'],widths:[74,...Array(12).fill(49),77,49]},
 {y:182,labels:['CapsLock','A Ф','S Ы','D В','F А','G П','H Р','J О','K Л','L Д','; Ж','’ Э','Enter','PgUp'],widths:[88,...Array(11).fill(49),116,49]},
 {y:232,labels:['Shift','Z Я','X Ч','C С','V М','B И','N Т','M Ь',', Б','. Ю','/ ?','Shift','↑','PgDn'],widths:[112,...Array(10).fill(49),92,49,49]},
 {y:282,labels:['Ctrl','Win','Alt','SPACE','Alt','Fn','Ctrl','←','↓','→'],widths:[61,61,61,295,61,61,61,49,49,49]}
];const keys=[];rows.forEach((r,row)=>{let x=28;r.labels.forEach((label,i)=>{const w=r.widths[i];keys.push({label,row,x,y:r.y,w,h:row===0?43:44});x+=w+4;});});globalThis.CHARACTER_MODEL=Object.freeze({name:'Character',layoutName:'Z-84',keyCount:84,keys:Object.freeze(keys)});})();
