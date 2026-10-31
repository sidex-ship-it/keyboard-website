import * as THREE from './vendor/three.module.js';
import {RoundedBoxGeometry} from './vendor/RoundedBoxGeometry.js';
export const mouseFinishes={white:{shell:'#e7e7eb',line:'#1d2e5b'},black:{shell:'#28292c',line:'#a6a7ac'},navy:{shell:'#142e55',line:'#9dd9ec'},'sage-green':{shell:'#a7bd98',line:'#244d2c'},'wine-red':{shell:'#72242e',line:'#e4ba80'}};
// Dimensions are visual approximations from the supplied views, in centimetres.
function width(z){return 3.2*Math.sqrt(Math.max(.002,1-Math.pow(Math.abs(z/6.1),4)))*(1+.035*z/6);}
function height(x,z){const w=width(z);return .48+3.32*Math.max(.03,1-Math.pow((z-.25)/7.4,2))*Math.pow(Math.max(0,1-(x/w)**2),.48);}
function patch(z0,z1,u0,u1,lift=0){const pos=[],idx=[],nx=36,nz=64;for(let j=0;j<=nz;j++){const z=z0+(z1-z0)*j/nz;for(let i=0;i<=nx;i++){const x=width(z)*(u0+(u1-u0)*i/nx);pos.push(x,height(x,z)+lift,z);}}for(let j=0;j<nz;j++)for(let i=0;i<nx;i++){let a=j*(nx+1)+i;idx.push(a,a+nx+1,a+1,a+1,a+nx+1,a+nx+2);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();return g;}
export function createMouse(slug='white'){
const root=new THREE.Group();root.name='montset mouse / '+slug;root.scale.setScalar(.01);
const finish=mouseFinishes[slug]||mouseFinishes.white;
const shell=new THREE.MeshStandardMaterial({color:finish.shell,roughness:.43,metalness:.08});
const ink=new THREE.MeshStandardMaterial({color:finish.line,roughness:.5});
const rubber=new THREE.MeshStandardMaterial({color:'#17191c',roughness:.75});
const seam=new THREE.MeshStandardMaterial({color:'#14171c',roughness:.6});
const metal=new THREE.MeshStandardMaterial({color:'#bbc0c4',roughness:.32,metalness:.8});
function mesh(g,m,name){const o=new THREE.Mesh(g,m);o.name=name;o.castShadow=true;o.receiveShadow=true;root.add(o);return o;}
function line(points,r=.016,material=ink,name='Painted outline'){return mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points.map(p=>new THREE.Vector3(...p))),Math.max(16,points.length*3),r,6,false),material,name);}
function on(x,z,lift=.04){return [x,height(x,z)+lift,z];}
mesh(patch(-6.09,6.09,-1,1),shell,'Sculpted upper shell');
// Closed continuous lower wall and underside.
const ring=[];for(let j=0;j<=96;j++){let z=-6.09+12.18*j/96;ring.push([-width(z),z]);}for(let j=96;j>=0;j--){let z=-6.09+12.18*j/96;ring.push([width(z),z]);}
const shape=new THREE.Shape();ring.forEach(([x,z],i)=>i?shape.lineTo(x,z):shape.moveTo(x,z));shape.closePath();const baseG=new THREE.ExtrudeGeometry(shape,{depth:.28,bevelEnabled:true,bevelThickness:.07,bevelSize:.06,bevelSegments:3,steps:1});baseG.rotateX(Math.PI/2);baseG.translate(0,.48,0);mesh(baseG,seam,'Lower chassis');
for(const [u0,u1,name] of [[-.96,-.043,'Left main button'],[.043,.96,'Right main button']]){
 mesh(patch(-5.92,-1.35,u0,u1,.035),shell,name);
 const pts=[];for(let j=0;j<=28;j++){let z=-5.75+4.2*j/28;pts.push(on(width(z)*(u0+.045),z,.075));}for(let j=0;j<=12;j++){let u=u0+.045+(u1-u0-.09)*j/12;pts.push(on(width(-1.55)*u,-1.55,.075));}for(let j=28;j>=0;j--){let z=-5.75+4.2*j/28;pts.push(on(width(z)*(u1-.045),z,.075));}for(let j=12;j>=0;j--){let u=u0+.045+(u1-u0-.09)*j/12;pts.push(on(width(-5.75)*u,-5.75,.075));}line(pts);
}
line(Array.from({length:45},(_,i)=>{const x=-width(-1.22)+2*width(-1.22)*i/44;return on(x,-1.22,.025);}),.022,seam,'Palm and button seam');
line(Array.from({length:30},(_,i)=>on(0,-6+4.7*i/29,.05)),.025,seam,'Split button seam');
// Pinstripe follows both sides and the curved rear of the shell.
const contour=[];for(let j=0;j<=70;j++){let z=-1.05+7.03*j/70;contour.push(on(-width(z)*.94,z,.045));}for(let j=70;j>=0;j--){let z=-1.05+7.03*j/70;contour.push(on(width(z)*.94,z,.045));}line(contour,.018);
// Corner chevrons and the palm signature use raised, curved paint strokes.
for(const [cx,cz,sign] of [[-1.8,-4.75,1],[1.85,-2.1,-1],[0,4.55,1]])for(let k=0;k<2;k++){
 const s=cz>0?.4:.3,z=cz+k*.18;
 line([on(cx-s,z+.24*sign,.09),on(cx,z-.15*sign,.09),on(cx+s,z+.24*sign,.09)],.026);
}
const wheelZ=-3.75,wheelY=height(0,wheelZ)+.18;
const slot=mesh(new RoundedBoxGeometry(.63,.12,1.42,4,.12),seam,'Scroll wheel recess');slot.position.set(0,wheelY-.14,wheelZ);
const wheel=mesh(new THREE.CylinderGeometry(.64,.64,.43,48),rubber,'Rubber scroll wheel');wheel.rotation.z=Math.PI/2;wheel.position.set(0,wheelY,wheelZ);
for(const x of [-.225,.225]){const rim=mesh(new THREE.CylinderGeometry(.65,.65,.045,48),metal,'Wheel silver rim');rim.rotation.z=Math.PI/2;rim.position.set(x,wheelY,wheelZ);}
for(let a=0;a<40;a++){const t=a/40*Math.PI*2,rib=mesh(new THREE.BoxGeometry(.4,.025,.035),rubber,'Wheel tread');rib.position.set(0,wheelY+.645*Math.cos(t),wheelZ+.645*Math.sin(t));rib.rotation.x=t;}
for(const z of [-1.7,.05]){const b=mesh(new RoundedBoxGeometry(.22,.48,1.45,4,.1),rubber,'Side thumb button');b.position.set(-width(z)-.015,1.45,z);b.rotation.z=-.14;}
for(const z of [-4.5,4.2]){const foot=mesh(new RoundedBoxGeometry(3.3,.06,.9,4,.2),rubber,'Underside glide');foot.position.set(0,.1,z);}
const sensor=mesh(new THREE.CylinderGeometry(.32,.32,.06,32),rubber,'Optical sensor housing');sensor.position.set(0,.1,.3);
root.userData={design:'Reference-based visual model; dimensions and internals are approximate.',color:slug};return root;
}
