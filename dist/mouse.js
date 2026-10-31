const mouseVariants = [
{slug:'white',name:'White'}, {slug:'black',name:'Black'}, {slug:'navy',name:'Navy'}, {slug:'sage-green',name:'Sage green'}, {slug:'wine-red',name:'Wine red'}
];
function renderMouse(){
 const requested=new URLSearchParams(location.search).get('color');
 const variant=mouseVariants.find(v=>v.slug===requested)||mouseVariants[0];
 const img=document.querySelector('#mouse-image');
 img.src='/pictures/mouse-'+variant.slug+'.jpg';
 img.alt='montset mouse in '+variant.name+' — angled, top, side and rear views';
 document.querySelector('#mouse-color-name').textContent=variant.name;
 document.title='Mouse / '+variant.name+' — montset';
 document.querySelectorAll('[data-mouse-color]').forEach(a=>a.setAttribute('aria-current',String(a.dataset.mouseColor===variant.slug)));
 document.querySelector('#mouse-original').href=img.src;
 document.querySelector('#mouse-status').textContent='';
}
document.querySelectorAll('[data-mouse-color]').forEach(a=>a.addEventListener('click',e=>{
 if(e.button!==0||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey)return;
 e.preventDefault();history.pushState(null,'',a.href);renderMouse();
}));
addEventListener('popstate',renderMouse);
document.querySelector('#share-mouse').addEventListener('click',async()=>{
 const status=document.querySelector('#mouse-status');
 try{await navigator.clipboard.writeText(location.href);status.textContent='Mouse link copied.';}
 catch{status.textContent='Copy this link: '+location.href;}
});
const menu=document.querySelector('.menu-toggle');
menu?.addEventListener('click',()=>{const expanded=menu.getAttribute('aria-expanded')==='true';menu.setAttribute('aria-expanded',String(!expanded));document.querySelector('#mobile-nav').hidden=expanded;});
renderMouse();
