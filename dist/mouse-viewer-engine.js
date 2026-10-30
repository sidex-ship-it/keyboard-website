import * as THREE from './vendor/three.module.js';
import {OrbitControls} from './vendor/OrbitControls.js';
import {createMouse} from './mouse-model.js';
export class MouseViewer{
 constructor(host){
  this.host=host;this.scene=new THREE.Scene();this.scene.background=new THREE.Color('#e8e9e4');
  this.camera=new THREE.PerspectiveCamera(34,1,.001,10);this.camera.position.set(-.14,.15,-.17);
  this.renderer=new THREE.WebGLRenderer({antialias:true,alpha:false});this.renderer.setPixelRatio(Math.min(devicePixelRatio,2));this.renderer.setSize(900,650);this.renderer.shadowMap.enabled=true;this.renderer.shadowMap.type=THREE.PCFSoftShadowMap;this.renderer.outputColorSpace=THREE.SRGBColorSpace;this.renderer.toneMapping=THREE.ACESFilmicToneMapping;this.renderer.toneMappingExposure=1.3;
  const canvas=this.renderer.domElement;canvas.tabIndex=0;canvas.setAttribute('role','img');canvas.setAttribute('aria-label','Interactive 3D mouse. Drag or use arrow keys to rotate; plus and minus to zoom.');host.append(canvas);
  this.controls=new OrbitControls(this.camera,canvas);this.controls.target.set(0,.017,0);this.controls.enablePan=false;this.controls.minDistance=.10;this.controls.maxDistance=.5;this.controls.maxPolarAngle=Math.PI*.94;this.controls.addEventListener('change',()=>this.render());this.controls.update();
  this.scene.add(new THREE.HemisphereLight('#ffffff','#a5a79e',2.5));
  for(const [x,y,z,power] of [[.12,.22,-.06,3],[-.16,.12,.1,1.5]]){const l=new THREE.DirectionalLight('#ffffff',power);l.position.set(x,y,z);if(x>0){l.castShadow=true;l.shadow.mapSize.set(2048,2048);Object.assign(l.shadow.camera,{left:-.12,right:.12,top:.12,bottom:-.12,near:.01,far:1});l.shadow.bias=-.00015;}this.scene.add(l);}
  this.floor=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.ShadowMaterial({opacity:.15}));this.floor.rotation.x=-Math.PI/2;this.floor.position.y=-.001;this.floor.receiveShadow=true;this.scene.add(this.floor);
  canvas.addEventListener('keydown',e=>{if(['ArrowLeft','ArrowRight','ArrowUp','ArrowDown','+','-','='].includes(e.key)){e.preventDefault();if(e.key==='+'||e.key==='=')this.zoom(.85);else if(e.key==='-')this.zoom(1.17);else{const v=this.camera.position.clone().sub(this.controls.target);const s=new THREE.Spherical().setFromVector3(v);if(e.key==='ArrowLeft')s.theta-=.15;if(e.key==='ArrowRight')s.theta+=.15;if(e.key==='ArrowUp')s.phi=Math.max(.08,s.phi-.15);if(e.key==='ArrowDown')s.phi=Math.min(3,s.phi+.15);this.camera.position.copy(this.controls.target).add(v.setFromSpherical(s));this.controls.update();}}});
  canvas.addEventListener('webglcontextlost',e=>{e.preventDefault();document.querySelector('[data-mouse-view="photo"]').click();document.querySelector('#mouse-view-status').textContent='3D paused. Select 3D view to try again, or use product photos.';});
  new ResizeObserver(()=>this.resize()).observe(host);
 }
 setColor(slug){if(this.slug===slug)return;this.slug=slug;if(this.model){this.scene.remove(this.model);const materials=new Set();this.model.traverse(o=>{o.geometry?.dispose();if(o.material)materials.add(o.material);});materials.forEach(m=>m.dispose());}this.model=createMouse(slug);this.scene.add(this.model);this.render();}
 render(){this.renderer.render(this.scene,this.camera);}
 resize(){if(!this.host.clientWidth)return;const w=this.host.clientWidth,h=this.host.clientHeight;this.renderer.setSize(w,h,false);this.camera.aspect=w/h;this.camera.updateProjectionMatrix();this.render();}
 zoom(factor){const v=this.camera.position.clone().sub(this.controls.target);v.setLength(THREE.MathUtils.clamp(v.length()*factor,.10,.5));this.camera.position.copy(this.controls.target).add(v);this.controls.update();this.render();}
 view(name){const positions={angle:[-.14,.15,-.17],top:[0,.25,.0001],side:[-.25,.065,.01],bottom:[.02,-.24,.001]};this.floor.visible=name!=='bottom';this.camera.position.fromArray(positions[name]||positions.angle);this.controls.update();this.render();}
}
