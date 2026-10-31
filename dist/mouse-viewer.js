const host=document.querySelector('#mouse-3d');
const photo=document.querySelector('#mouse-image');
const modeButtons=document.querySelectorAll('[data-mouse-view]');
const status=document.querySelector('#mouse-view-status');
let viewer=null,loading=null,active=false;
function color(){const v=new URLSearchParams(location.search).get('color');return ['white','black','navy','sage-green','wine-red'].includes(v)?v:'white';}
function download(){document.querySelector('#download-mouse-model').href='/models/montset-mouse-'+color()+'.glb';}
function modes(){modeButtons.forEach(b=>b.setAttribute('aria-pressed',String((b.dataset.mouseView==='model')===active)));host.hidden=!active;photo.hidden=active;document.querySelector('#mouse-3d-tools').hidden=!active;}
async function showModel(){status.textContent='Loading 3D model…';try{loading??=import('./mouse-viewer-engine.js?v=framing-2');const {MouseViewer}=await loading;if(!viewer)viewer=new MouseViewer(host);viewer.setColor(color());active=true;modes();viewer.resize();status.textContent='Drag to rotate · scroll or pinch to zoom · arrow keys to rotate.';}catch(e){active=false;modes();status.textContent='3D is unavailable on this device. Product photos and the downloadable model are still available.';}}
modeButtons.forEach(b=>b.addEventListener('click',()=>{if(b.dataset.mouseView==='model')showModel();else{active=false;modes();status.textContent='';}}));
document.querySelectorAll('[data-mouse-color]').forEach(a=>a.addEventListener('click',()=>{queueMicrotask(()=>{viewer?.setColor(color());download();});}));
addEventListener('popstate',()=>{viewer?.setColor(color());download();});
document.querySelectorAll('[data-mouse-angle]').forEach(b=>b.addEventListener('click',()=>viewer?.view(b.dataset.mouseAngle)));
document.querySelector('#mouse-zoom-in').addEventListener('click',()=>viewer?.zoom(.8));
document.querySelector('#mouse-zoom-out').addEventListener('click',()=>viewer?.zoom(1.25));
document.querySelector('#mouse-expand').addEventListener('click',()=>{const expanded=document.querySelector('.mouse-product').classList.toggle('mouse-expanded');document.querySelector('#mouse-expand').textContent=expanded?'Standard size':'Larger view';document.querySelector('#mouse-expand').setAttribute('aria-pressed',String(expanded));viewer?.resize();});
download();
