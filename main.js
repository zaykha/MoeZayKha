import './style.css';
import * as THREE from 'three';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import * as TWEEN from '@tweenjs/tween.js';
import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@8/swiper-bundle.esm.browser.min.js'
import {RectAreaLightHelper} from 'three/examples/jsm/helpers/RectAreaLightHelper';

document.getElementById("hideAll").style.display = "block";
window.onload = function() 
{ document.getElementById("hideAll").style.display = "none"; }

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1,1000);
// const camera = new THREE.OrthographicCamera( window.innerWidth / - 2, window.innerWidth / 2, window.innerHeight / 2, window.innerHeight / - 2, 1, 1000 );
const renderer= new THREE.WebGLRenderer({
    canvas: document.querySelector('#bg'),
});
renderer.setPixelRatio( window.devicePixelRatio);
renderer.setSize( window.innerWidth, window.innerHeight);

const controls = new OrbitControls(camera, renderer.domElement);
controls.target = new THREE.Vector3(-8.7, 4.4, 4.4);
renderer.render(scene, camera);

function addStar(){
    const geometry = new THREE.SphereGeometry(0.25,24,24);
    const material = new THREE.MeshStandardMaterial({color: 0xb7cdf7})
    const star = new THREE.Mesh ( geometry, material);

    const [x,y,z] =Array(3).fill().map(()=> THREE.MathUtils.randFloatSpread(100));
    star.position.set(x,y,z);
    scene.add(star)
}
Array(300).fill().forEach(addStar);

const spaceTexture = new THREE.TextureLoader().load('galaxy2.jpg');
scene.background = spaceTexture;

(function() {
  // https://dashboard.emailjs.com/admin/account
  emailjs.init('hanLzw9pqdz5PNq5a');
})();

function sendEmail() {
  document.getElementById('contact-form').addEventListener('submit', function(event) {
      // event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('contact_service', 'contact_form', this)
          .then(function() {
              console.log('SUCCESS!');
          }, function(error) {
              console.log('FAILED...', error);
          });
  });
}
sendEmail();
// ----------------------------------loading-------------------------------------------
let mixer;
const loadingManager = new THREE.LoadingManager();

const progressBar = document.getElementById('progress-bar');
loadingManager.onProgress = function(url, loaded, total){
    progressBar.value = (loaded/total)*100;
}

const progressBarContainer = document.querySelector('.progress-bar-container');
loadingManager.onLoad = function(){
    progressBarContainer.style.display = 'none';
}

const loader = new GLTFLoader(loadingManager);
loader.load(
    'MZKwebsite.glb', (gltf)=>{
        const Model = gltf.scene;
        scene.add(Model);
        mixer = new THREE.AnimationMixer(Model);
        let clips = gltf.animations;
        // jsanidesign = THREE.AnimationClip.findByName(clips, 'JSEng.001Action')
        // console.log(Model.position);

        clips.forEach(function(clip){
            const action = mixer.clipAction(clip);

            action.play();
        })         
    },
    ( xhr ) => {
        // called while loading is progressing
       console.log(`${( xhr.loaded / xhr.total * 100 )}% loaded`);
        // console.log(  );
    },
    ( error ) => {
        // called when loading has errors
        console.error( 'An error happened', error );
    },
)
// --------------------------------DOM Reference------------------------
const Home= document.getElementById('home');
const design= document.getElementById('design');
const engineering= document.getElementById('engineering');
const corporate= document.getElementById('corporate');
const portfolio= document.getElementById('portfolio');
const contactus = document.getElementById('contactus');
const career = document.getElementById('career');

// const Homesection= document.getElementById('');
const designsection= document.getElementById('designsection');
const engineeringsection= document.getElementById('engineeringsection');
const corporatesection= document.getElementById('corporatesection');
const portfoliosection= document.getElementById('portfoliosection');
const toggleicon= document.getElementById('toggleicon');
const contactussection = document.getElementById('contactussection');
const mobileprev = document.getElementById('mobileprev')
const mobilenext = document.getElementById('mobilenext')
const careersection = document.getElementById('careersection')



const homeicon = document.getElementById('homeicon');
const designicon = document.getElementById('designicon');
const engineeringicon = document.getElementById('engineeringicon');
const corporateicon = document.getElementById('corporateicon');
const portfolioicon = document.getElementById('portfolioicon');
const contactusicon = document.getElementById('contactusicon');
const careericon = document.getElementById('careericon');

const homeiconmobile = document.getElementById('homeiconmobile');
const gificonhome = document.getElementById('gificonhome');

const designiconmobile = document.getElementById('designiconmobile');
const gificoncv = document.getElementById('gificoncv');

const engineeringiconmobile = document.getElementById('engineeringiconmobile');
const gificonskills = document.getElementById('gificonskills');

const corporateiconmobile = document.getElementById('corporateiconmobile');
const gificonEBI = document.getElementById('gificonEBI');

const portfolioiconmobile = document.getElementById('portfolioiconmobile');
const gificonportfolio = document.getElementById('gificonportfolio');

const contactusiconmobile = document.getElementById('contactusiconmobile');
const gificonSS = document.getElementById('gificonSS');

const careericonmobile = document.getElementById('careericonmobile');
const gificoncontact = document.getElementById('gificoncontact');


const Oneat = document.getElementById('Oneat');
const oneat = document.getElementById('oneat');

const BJCS = document.getElementById('BJCS');
const bjcs = document.getElementById('bjcs');

const Dnata = document.getElementById('Dnata');
const dnata = document.getElementById('dnata');

const JBB = document.getElementById('JBB');
const jbb = document.getElementById('jbb');

const Interpan = document.getElementById('Interpan');
const interpan = document.getElementById('interpan');

const KT = document.getElementById('KT');
const kt = document.getElementById('kt');

const Sagawa = document.getElementById('Sagawa');
const sagawa = document.getElementById('sagawa');

const swiperdoc = document.getElementById('swiper');
const outercvdiv = document.getElementById('outercvdiv');
const textalignment = document.getElementById('textalignment');
const cvwrapper= document.getElementById('cvwrapper');
const workxp= document.getElementById('workxp');
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const slide = document.querySelector(".cvcard");

const Oneatdiv = document.getElementById('Oneatdiv');
const BJCSdiv = document.getElementById('BJCSdiv');
const Dnatadiv = document.getElementById('Dnatadiv');
const JBBdiv = document.getElementById('JBBdiv');
const Interpandiv = document.getElementById('Interpandiv');
const KTdiv = document.getElementById('KTdiv');
const Sagawadiv = document.getElementById('Sagawadiv');

const Tech= document.getElementById('Tech');
const Bizz= document.getElementById('Bizz');
const Arts= document.getElementById('Arts');
const skilldisplay= document.getElementById('skilldisplay');
const skilltitle= document.getElementById('skilltitle');

const Techbtn= document.getElementById('Techbtn');
const Bizzbtn= document.getElementById('Bizzbtn');
const Artsbtn= document.getElementById('Artsbtn');
const margin80= document.getElementById('margin80');


const certzoom= document.getElementById('certzoom');
const imgpopup= document.getElementById('imgpopup');

// ----------------------------------Screen adjustment-----------------------------------
function media(x) {
    if (x.matches) { 
        // camera.position.setX(8.15548149947991);
        // camera.position.setY(7.9926503201927055);
        // camera.position.setZ(8.589577576676497);
        camera.position.set( 3.0230252927405474, 2.939971201224241, 2.974592596256046);
        controls.target.set(-2.8475333129158833, 1.992119604119649, -2.6641477161850067);
      } else {
         
      
      camera.position.setX(1.8657201411138535);
      camera.position.setY(1.4935185925537058);
      camera.position.setZ(2.66097357050962);
      
      controls.target.set(-3.7169063104491844, -0.14855073501722424,-0.6087966729655833) 
        
      
    }
  }
  var x = window.matchMedia("(max-width: 1024px)")
media(x) ;


const ambientLight = new THREE.AmbientLight(0xffffff,0.3);
scene.add(ambientLight);
// const light = new THREE.HemisphereLight( 0xffffbb, 0xffffbb, 1 );
// light.position.set(0,25,0);
// scene.add( light );
const color = 0xA020F0;
const color2 = 0x00FFFF;
const color3 =0xFFFFFF;
    const intensity = 10;
    const width = 0.5;
    const height = 11;
const light = new THREE.RectAreaLight(color, 11, 1.5, width, height);
    light.position.set(0, 1.5, -1);
    light.rotation.x = THREE.Math.degToRad(-90);
    
const light1 = new THREE.RectAreaLight(color2, 11, 0.5, 11);
    light1.position.set(-1, 1.5, -4);
    light1.rotation.x = THREE.Math.degToRad(-90);

const light2 = new THREE.RectAreaLight(color3, 3, 1, 1);
    light2.position.set(0, 1.8, 0);
    light2.rotation.x = THREE.Math.degToRad(-90);

const light3 = new THREE.RectAreaLight(color3, 5, 0.2, 0.2);
    light3.position.set(-0.5, 0.7, 0.01);
    light3.rotation.x = THREE.Math.degToRad(-90);
const light4 = new THREE.RectAreaLight(color3, 4, 0.2, 0.2);
    light4.position.set(0.6, 0.36, 0.5);
    light4.rotation.x = THREE.Math.degToRad(90);
const light5 = new THREE.RectAreaLight(color3, 4, 0.2, 0.2);
    light5.position.set(-0.68, 0.36, 0.56);
    light5.rotation.x = THREE.Math.degToRad(90);
const light6 = new THREE.RectAreaLight(color2, 1, 1, 1);
    light6.position.set(-0.6, 1.8, -0.1);
    light6.rotation.x = THREE.Math.degToRad(-90);
    // const helper = new RectAreaLightHelper( light6);
    // light6.add( helper )
    

    scene.add(light, light1, light2, light3, light4, light5, light6);

// const lightHelper = new THREE.PointLightHelper(light6)
// const gridHelper = new THREE.GridHelper(200,50);
// scene.add(lightHelper, gridHelper);
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// ------------------------------Routing for Web (1024px)---------------------------
const nav =document.getElementById('navflex');
const sectionarray =[designsection, engineeringsection, corporatesection, portfoliosection, contactussection, careersection]
const activeiconarray = [gificonhome, gificoncv, gificonskills, gificonEBI, gificonportfolio, gificonSS, gificoncontact]
function activeicon(n){
  n.style.outline='6px solid yellow';
  n.style.borderRadius='50%';
}
function filteractiveicon(p){
  p.map((x)=>{
    if(x.style.outline='6px solid yellow'){
      x.style.outline='none';
      x.style.borderRadius='10%';
    }
  })
}

function filterer(x){
   
    x.map((y)=>{
        if(y.style.animationName=='moveright'){
            y.style.animation='moveleft 3s forwards'
        } 
    })
}

function filterermobile(x){
   
    x.map((y)=>{
        if(y.style.animationName=='dropdown'){
            y.style.animation='backupmore 3s forwards'
        } 
    })
}

    Home.addEventListener('click', function() {
      
        new TWEEN.Tween(camera.position)
    .to({
      x:1.8657201411138535,y:1.4935185925537058,z:2.66097357050962 },1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

    new TWEEN.Tween(controls.target)
    .to({ 
       x:-3.7169063104491844,y:-0.14855073501722424,z:-0.6087966729655833},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();
    });

    homeicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
    .to({x:1.8657201411138535,y:1.4935185925537058,z:2.66097357050962 },1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

    new TWEEN.Tween(controls.target)
    .to({ x:-3.7169063104491844,y:-0.14855073501722424,z:-0.6087966729655833},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

        filterer(sectionarray);
        nav.style.animation = 'moverightfornav 3s forwards';
        toggleicon.style.animation = 'moveleft 3s forwards';

        activeicon(gificonhome);
    });
    homeiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
    .to({x: 2.245283037186975, y: 2.651320100700064, z: 2.54536487813899},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

    new TWEEN.Tween(controls.target)
    .to({ x: -5.153252283464849, y: 0.5745845805548225, z: -5.689631167038444},1000).easing(TWEEN.Easing.Quadratic.Out)
    .start();

        filterermobile(sectionarray);

    });

    design.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.2902927614590909, y: 0.9619112082046571, z: -0.37407924668938547},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -3.7488991606326936, y: -0.019425884611936596, z: -0.6641730068910666},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      designsection.style.animation = 'moveright 3s forwards';
      if(nav.style.animationName=='moveleft'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    filteractiveicon(activeiconarray);
    activeicon(gificoncv);
    });
    designicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.2902927614590909, y: 0.9619112082046571, z: -0.37407924668938547 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({  x: -3.7488991606326936, y: -0.019425884611936596, z: -0.6641730068910666},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterer(sectionarray);
      designsection.style.animation = 'moveright 2s forwards';
      filteractiveicon(activeiconarray);
    activeicon(gificoncv);
    });
    designiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.29653563936200733, y: 0.9291892973224034, z: -0.28632078167634223},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({x: -2.8228853456474674, y: 1.4256323448827652, z: -2.8122337979797063},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterermobile(sectionarray);
      designsection.style.animation = 'dropdown 2s forwards';

    });

    function filtererappear(x,z){
   
      x.map((y)=>{
          if(y.style.display=='block'){
              y.style.animation='disappear 1s forwards';
              y.style.display='none';
              y.style.opacity='0';
              
              
          } 
      })

      z.map((a)=>{
        if(a.style.border='1px solid rgb(172,255, 0)'){
          a.style.border='1px solid rgba(255, 255, 255, 0.3)'
          a.style.textShadow='none';
          a.style.color='yellow';
        }
      })
  }
  const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'vertical',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

    function CVappear (b){
      textalignment.style.width= 'auto';
      outercvdiv.style.display='block';
      b.style.display='block';
      b.style.animation='appear 2s';
      b.style.opacity = '100%';
      b.style.zIndex='6';
      swiperdoc.style.top='3rem';
      workxp.style.display='none';
    } 

    function CVparent (c){
      c.style.color='green';
      c.style.border='1px solid rgb(172,255, 0)';
      c.style.textShadow='0.5px 0.5px 0.5px yellow';

    }
    const CVarray = [Oneatdiv, BJCSdiv, Dnatadiv, JBBdiv, Interpandiv, KTdiv, Sagawadiv]
    const CVparentarr = [Oneat, BJCS, Dnata, JBB, Interpan, KT, Sagawa]
    Oneat.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Oneatdiv);
      CVparent(Oneat);
    });
    oneat.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Oneatdiv);
      // CVparent(Oneat);
    });
    BJCS.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(BJCSdiv);
      CVparent(BJCS);
    })
    bjcs.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(BJCSdiv);
      // CVparent(bjcs);
    })
    Dnata.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Dnatadiv);
      CVparent(Dnata);
    })
    dnata.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Dnatadiv);
      // CVparent(dnata);
    })
    jbb.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(JBBdiv);
      // CVparent(jbb);
    })
    JBB.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(JBBdiv);
      CVparent(JBB);
    })
    Interpan.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Interpandiv);
      CVparent(Interpan);
    })
    interpan.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Interpandiv);
      // CVparent(interpan);
    })
    KT.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(KTdiv);
      CVparent(KT);
    })
    kt.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(KTdiv);
      // CVparent(kt);
    })
    Sagawa.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Sagawadiv);
      CVparent(Sagawa);
    })
    sagawa.addEventListener('click', function() {
      filtererappear(CVarray,CVparentarr);
      CVappear(Sagawadiv);
      // CVparent(sagawa);
    })

   const skilldisplayarr =[Tech, Bizz, Arts];
   const skillbtnarr = [Techbtn, Bizzbtn, Artsbtn] 
   engineering.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.3770444383937166, y: 1.2798507946275264, z: 0.11017145589707791 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -3.6317596060389983, y: 1.2749812822443247, z: 0.056998958031140634},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards'; nav.style.animation= 'moveleft 3s forwards';
      engineeringsection.style.animation = 'moveright 3s forwards';
   
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    filteractiveicon(activeiconarray);
    activeicon(gificonskills);
    });
    function filtererskillappear(d,z){
   
      d.map((f)=>{
          if(f.style.display=='block'){
             f.style.animation='disappear 1s forwards';
              f.style.display='none';
              f.style.opacity='0';              
          } 
      })
      z.map((a)=>{
        if(a.style.color='rgb(205,255, 0)'){
          a.style.color='rgb(172, 169, 0);';
          a.style.fontSize='2rem';
        }

      })
  }
    function skillappear (b){
      skilldisplay.style.display= 'block';
      b.style.display='block';
      b.style.animation='appear 2s';
      b.style.opacity = '100%';
      b.style.zIndex='6';
      skilltitle.style.display='none';
      margin80.style.top='5vh';
    } 

    function skillbtnactive(j){
      j.style.color='green';
      j.style.fontSize='2rem';
      j.style.textShadow='1px 1px 1px yellow';
    }
    Techbtn.addEventListener('click', function(){
      filtererskillappear(skilldisplayarr,skillbtnarr);
      skillappear(Tech);
      skillbtnactive(Techbtn);
    })
    Bizzbtn.addEventListener('click', function(){
      filtererskillappear(skilldisplayarr,skillbtnarr);
      skillappear(Bizz);
      skillbtnactive(Bizzbtn);
    })
    Artsbtn.addEventListener('click', function(){
      filtererskillappear(skilldisplayarr,skillbtnarr);
      skillappear(Arts);
      skillbtnactive(Artsbtn);
    })

    certzoom.addEventListener('click', function(){
      imgpopup.style.display='block';
    })
    
    imgpopup.addEventListener('click', function(){
      imgpopup.style.display='none';
    })

    engineeringicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -0.3770444383937166, y: 1.2798507946275264, z: 0.11017145589707791 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x: -3.6317596060389983, y: 1.2749812822443247, z: 0.056998958031140634},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      engineeringsection.style.animation = 'moveright 2s forwards';
      filteractiveicon(activeiconarray);
      activeicon(gificonskills);
    });
    engineeringiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -0.08003414175494417, y: 1.6734134659507176, z: -0.17488807271056256},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: -3.010387295269596, y: 1.470477769999485, z: -0.2236068605613211},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      engineeringsection.style.animation = 'dropdown 2s forwards';

    });

    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawChart);

    function drawChart() {
      var data = google.visualization.arrayToDataTable([
      ['Task', 'Hours per Day'],
      ['Marketing Services', 10],
      ['Commercial Tech', 6],
      ['Airport Services', 4],
      ['Futures trading', 4]
    ]);

    var options = { 'width':500, 'height':400};
    var chart = new google.visualization.PieChart(document.getElementById('piechart'));
    chart.draw(data, options);
  }
    corporate.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.40273215727976264, y: 0.8630821307561408, z: -0.5543521621716916 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -0.44797742114527406, y: 0.7697220507622689, z: -1.4991421131936602},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      corporatesection.style.animation = 'moveright 3s forwards';

      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    filteractiveicon(activeiconarray);
    activeicon(gificonEBI);
    });
    corporateicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.40273215727976264, y: 0.8630821307561408, z: -0.5543521621716916 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -0.44797742114527406, y: 0.7697220507622689, z: -1.4991421131936602},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterer(sectionarray);
      corporatesection.style.animation = 'moveright 2s forwards';
      filteractiveicon(activeiconarray);
      activeicon(gificonEBI);
    });
    corporateiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.24792986761535457, y: 1.1128008938846679, z: -0.1351727777042857},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({x: -0.15983667397475823, y: 1.145348997595008, z: -3.071446986880469},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      filterermobile(sectionarray);
      corporatesection.style.animation = 'dropdown 2s forwards';

    });

    portfolio.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.23336961201897644, y: 0.6547204944557304, z: 0.0713300436858463 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -0.7429086064943, y: 0.6117055886667023, z: 0.023370974162065156},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      portfoliosection.style.animation = 'moveright 3s forwards';
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    filteractiveicon(activeiconarray);
    activeicon(gificonportfolio);
    });
    portfolioicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -0.23336961201897644, y: 0.6547204944557304, z: 0.0713300436858463 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x: -0.7429086064943, y: 0.6117055886667023, z: 0.023370974162065156},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      portfoliosection.style.animation = 'moveright 2s forwards';
      filteractiveicon(activeiconarray);
      activeicon(gificonportfolio);
    });  
    portfolioiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -0.23686830473012455, y: 0.7047768679681863, z: 0.2761021527418035},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: -3.0946029890454256, y: 0.9625790878791635, z: -2.505748961451268},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      portfoliosection.style.animation = 'dropdown 2s forwards';

    });  

    contactus.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: -0.36928712640238687, y: 0.4982440235922387, z: 0.5946230613675185},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -0.39382685371321574, y: 0.49879123456509883, z: 0.6038348267135418},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      contactussection.style.animation = 'moveright 3s forwards';
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    filteractiveicon(activeiconarray);
    activeicon(gificonSS);
    });
    contactusicon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -0.36928712640238687, y: 0.4982440235922387, z: 0.5946230613675185 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x: -0.39382685371321574, y: 0.49879123456509883, z: 0.6038348267135418},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      contactussection.style.animation = 'moveright 2s forwards';
      filteractiveicon(activeiconarray);
      activeicon(gificonSS);
    }); 
    contactusiconmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: -0.40879038009790625, y: 0.5530325128008731, z: 0.5278328019952607},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: -4.1844260577815975, y: 0.18960640487674507, z: 0.6923041526045425},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      contactussection.style.animation = 'dropdown 2s forwards';

    });

    career.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
      .to({x: 0.6656646841600906, y: 0.6549583621736152, z: 0.8508129496965244 },1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();

      new TWEEN.Tween(controls.target)
      .to({ x: -1.3192882450818835, y: -1.0116399272442167, z: -1.1155847519569326},1000).easing(TWEEN.Easing.Quadratic.Out)
      .start();
      nav.style.animation= 'moveleft 3s forwards';
      careersection.style.animation = 'moveright 3s forwards';
      if(nav.style.animation='moveleft 3s forwards'){
        toggleicon.style.animation = 'moverightfortoggle 3s forwards';
    }
    filteractiveicon(activeiconarray);
    activeicon(gificoncontact);
    });
    careericon.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: 0.6656646841600906, y: 0.6549583621736152, z: 0.8508129496965244 },1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({ x: -1.3192882450818835, y: -1.0116399272442167, z: -1.1155847519569326},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterer(sectionarray);
      careersection.style.animation = 'moveright 2s forwards';
      filteractiveicon(activeiconarray);
      activeicon(gificoncontact);
    }); 
    careericonmobile.addEventListener('click', function() {
        new TWEEN.Tween(camera.position)
        .to({x: 0.5469893310933359, y: 0.5361876472782612, z: 0.7878330278126424},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();
  
        new TWEEN.Tween(controls.target)
        .to({x: 0.5318387932809859, y: 0.8218399497695639, z: -3.631144221788547},1000).easing(TWEEN.Easing.Quadratic.Out)
        .start();

      filterermobile(sectionarray);
      careersection.style.animation = 'dropdown 2s forwards';

    });

const clock = new THREE.Clock();
window.addEventListener( 'resize', onWindowResize, false );
function onWindowResize() {
				
    camera.aspect = window.innerWidth/ window.innerHeight;

    camera.updateProjectionMatrix();
    renderer.setSize( window.innerWidth, window.innerHeight );

}
function animate(time){
    if(mixer)
   
    mixer.update(clock.getDelta());
    renderer.render (scene, camera);
     requestAnimationFrame(animate);
    controls.update();
    TWEEN.update(time);
    // console.log(camera.position);
    // console.log(controls.target);
    
}

animate();
document.onreadystatechange = function () {
  var state = document.readyState
  if (state == 'interactive') {
       document.getElementById('contents').style.visibility="hidden";
  } else if (state == 'complete') {
      setTimeout(function(){
         document.getElementById('interactive');
         document.getElementById('load').style.visibility="hidden";
         document.getElementById('contents').style.visibility="visible";
      },1000);
  }
}
