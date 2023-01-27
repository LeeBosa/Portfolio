// GSAP ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// PC/모바일 구분
var device;

function deviceCheck() {
  // 디바이스 종류
  var pcDevice = "win16|win32|win64|mac|macintel";

  // 디바이스 구분
  if(navigator.platform) {
    if(pcDevice.indexOf(navigator.platform.toLowerCase()) < 0) { // 모바일
      device = "Mobile";
    }
    else { // PC
      device = "PC";
    }
  }
}
deviceCheck();

// 파라미터
const parameters = {};
parameters.count = 5000;
parameters.size = 0.01;
parameters.radius = 30;
parameters.branches = 3;
parameters.spin = 1;
parameters.randomness = 0.2;
parameters.randomnessPower = 3;
parameters.insideColor = "#CCD1FE";
parameters.outsideColor = "#9FAAE5";

// 장면 생성
var scene = new THREE.Scene();

// 은하수 생성
const generateGalaxy = () => {
  // Geometry
  const geometry = new THREE.BufferGeometry();
  const positions = new Float32Array(parameters.count * 3);

  const colors = new Float32Array(parameters.count * 3);
  const colorInside = new THREE.Color(parameters.insideColor);
  const colorOutside = new THREE.Color(parameters.outsideColor);

  for (let i = 0; i < parameters.count; i++) {
    const i3 = i * 3;
    const radius = Math.random() * parameters.radius;
    const spinAngle = radius * parameters.spin;
    const branchAngle =
      ((i % parameters.branches) / parameters.branches) * Math.PI * 2;

    const randomX =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomY =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;
    const randomZ =
      Math.pow(Math.random(), parameters.randomnessPower) *
      (Math.random() < 0.5 ? 1 : -1) *
      parameters.randomness *
      radius;

    positions[i3] = Math.cos(branchAngle + spinAngle) * radius + randomX;
    positions[i3 + 1] = randomY;
    positions[i3 + 2] = Math.sin(branchAngle + spinAngle) * radius + randomZ;

    const mixedColor = colorInside.clone();
    mixedColor.lerp(colorOutside, radius / parameters.radius);
    colors[i3] = mixedColor.r;
    colors[i3 + 1] = mixedColor.g;
    colors[i3 + 2] = mixedColor.b;
  }
  geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
  geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3));

  // Material
  const material = new THREE.PointsMaterial({
    size: parameters.size,
    sizeAttenuation: true,
    depthWrite: false,
    blending: THREE.AdditiveBlending,
    vertexColors: true,
  });

  // Points
  const points = new THREE.Points(geometry, material);
  scene.add(points);

  return;
};
generateGalaxy();

// 리사이징
const sizes = { width: window.innerWidth, height: window.innerHeight };

window.addEventListener("resize", () => {
  // 업데이트 - 크기
  sizes.width = window.innerWidth;
  sizes.height = window.innerHeight;

  // 업데이트 - 카메라
  camera.aspect = sizes.width / sizes.height;
  camera.updateProjectionMatrix();

  // 업데이트 - 렌더링
  renderer.setSize(sizes.width, sizes.height);
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

  // 업데이트 - ScrollTrigger
  if(device == "PC") {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load, resize"
    });
    ScrollTrigger.refresh();
  }
  else {
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load"
    });
  }
});

// 카메라
var camera = new THREE.PerspectiveCamera(50, sizes.width / sizes.height, 0.1, 100);

// 컨트롤
var canvas = document.getElementById("canvas");
var controls = new THREE.OrbitControls(camera, canvas);
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5; // 0.5 / 0
controls.enabled = false;

// 렌더링 설정
var renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true // 투명도
});
renderer.setSize(sizes.width, sizes.height);
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

// 렌더링
var check;
var render = () => {
  if(check == true){
    // OrbitControls
    controls.update();

    // Render
    renderer.render(scene, camera);
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    window.requestAnimationFrame(render); // 한 틱에 60초
  }
  else{
    return;
  }
};
render();

// Locomotive Scroll
var locoScroll = new LocomotiveScroll({
  el: document.querySelector("[data-scroll-container]"),
  smooth: true,
  tablet: {
    breakpoint: 0,
    smooth: false,
  },
  mobile: {
    breakpoint: 0,
    smooth: false,
  }
});
locoScroll.on("scroll", ScrollTrigger.update);

ScrollTrigger.scrollerProxy("[data-scroll-container]", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  }, 
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },
  pinType: document.querySelector("[data-scroll-container]").style.transform ? "transform" : "fixed"
});

function locoInit() {
  if(device == "PC") {
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update()); // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.refresh(); // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.defaults({scroller: "[data-scroll-container]"});
  }
  else {
    locoScroll.destroy();
    ScrollTrigger.defaults({scroller: ""});
  }
  return;
}
locoInit();

// 로딩 완료 시
window.addEventListener("load", () => {
  // 업데이트 - ScrollTrigger AutoRefresh 방지
  blockRefresh();
});

function blockRefresh() {
  var indexBody = document.getElementById("indexBody");
  if(device == "PC") {
    indexBody.style.width = "calc(100% + 18px)";
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load, resize"
    });
    ScrollTrigger.refresh();
  }
  else {
    indexBody.style.width = "100%"
    ScrollTrigger.config({
      autoRefreshEvents: "visibilitychange, DOMContentLoaded, load"
    });
  }
  return;
}
blockRefresh();

// VISION 타임라인
var master1 = gsap.timeline({
  scrollTrigger:{
    trigger:'.index_scroll', // 트리거 객체
    pin:true, // 고정/비고정
    scrub:0, // 모션 바운스
    start:'top top', // 트리거가 시작하는 위치 / top top : 트리거 객체가 화면의 맨위일 때 트리거 시작 / top 50% : 트리거 객체가 화면의 50% 위치일 때 트리거 시작
    end:'+=200%', // 트리거가 끝나는 위치 / bottom bottom : 트리거 객체가 화면의 맨아래일 때 트리거 종료 / bottom 50% : 트리거 객체가 화면의 50% 위치일 때 트리거 종료
    onEnter: function(){
      check = false;
      if(window.innerWidth > 1080){
        $("input[id=index_nav_1]").prop("checked",true);
        indexNavCheck();
      }
    },
    onEnterBack: function(){
      check = false;
      if(window.innerWidth > 1080){
        $("input[id=index_nav_1]").prop("checked",true);
        indexNavCheck();
      }
    }
  }
});
master1
.add(t1())
.add(t2(),"<")
.add(t3(),"<");

// INTRO 타임라인
var master2 = gsap.timeline({
  scrollTrigger:{
    trigger:'.index_intro',
    pin:true,
    scrub:0,
    start:'top top',
    end:'+=750%',
    onEnter: function(){
      check = true;
      render();
      if(window.innerWidth > 1080){
        $("input[id=index_nav_2]").prop("checked",true);
        indexNavCheck();
        $(".scroll_animation").show();
      }
    },
    onEnterBack: function(){
      check = true;
      render();
      if(window.innerWidth > 1080){
        $("input[id=index_nav_2]").prop("checked",true);
        indexNavCheck();
        $(".scroll_animation").show();
      }
    },
    onLeave: function(){
      check = false;
    },
    onLeaveBack: function(){
      check = false;
    }
  }
});
master2
.add(t4())
.add(t5(),"<")
.add(t6(),"<");

// PORTFOLIO 타임라인
var master3 = gsap.timeline({
  scrollTrigger:{
    trigger:'.index_portfolio',
    scrub:0,
    start:'top bottom',
    onEnter: function(){
      check = false;
      if(device == "PC") {
        $("input[id=index_nav_3]").prop("checked",true);
        ScrollTrigger.refresh();
        indexNavCheck();
        $(".scroll_animation").hide();
      }
    },
    onEnterBack: function(){
      check = false;
      if(device == "PC") {
        $("input[id=index_nav_3]").prop("checked",true);
        ScrollTrigger.refresh();
        indexNavCheck();
        $(".scroll_animation").hide();
      }
    }
  }
});
master3;

// 제목
function t1(){ // duration:12
  var windowWidth = window.innerWidth;
  var t1 = gsap.timeline();

  if(windowWidth > 1080){ // PC
    t1
    .fromTo(".index_scroll_vision span",{scale:3},{scale:1,duration:4})
    .fromTo({},{},{duration:4})
    .fromTo(".index_scroll_vision span",{opacity:1,scale:1},{opacity:0,scale:3,duration:4});
  }
  else if(windowWidth <= 1080 && windowWidth > 720){ // TABLET
    t1
    .fromTo(".index_scroll_vision span",{scale:3},{scale:1.5,duration:4})
    .fromTo({},{},{duration:4})
    .fromTo(".index_scroll_vision span",{opacity:1,scale:1.5},{opacity:0,scale:3,duration:4});
  }
  else{ // MOBILE
    t1
    .fromTo(".index_scroll_vision span",{scale:3},{scale:2,duration:4})
    .fromTo({},{},{duration:4})
    .fromTo(".index_scroll_vision span",{opacity:1,scale:2},{opacity:0,scale:3,duration:4});
  }
  return t1;
}

// 소제목
function t2(){
  var t2 = gsap.timeline();
  t2
  .fromTo(".index_scroll_vision p",{opacity:0,scale:1,y:20},{opacity:1,scale:1,y:0,duration:4})
  .fromTo({},{},{duration:4})
  .fromTo(".index_scroll_vision p",{opacity:1,y:0},{opacity:0,y:20,duration:4});
  return t2;
}

// 배경 투명도
function t3(){
	var t3 = gsap.timeline();
    t3
    .fromTo(".banner_wrap",{opacity:1},{opacity:0.5,duration:4})
    .fromTo({},{},{duration:8});
    return t3;
}

// 3D OBJECT 카메라 포지션
function t4(){ // duration:40
  var t4 = gsap.timeline();
  t4
  .fromTo(camera.position,{x:0,y:0,z:-8},{x:0,y:0.2,z:8,duration:8})
  .fromTo({},{},{duration:4})
  .fromTo(camera.position,{x:0,y:0.2,z:8},{x:-2,y:2.2,z:8,duration:6})
  .fromTo({},{},{duration:4})
  .fromTo(camera.position,{x:-2,y:2.2,z:8},{x:2,y:-2.2,z:8,duration:6})
  .fromTo({},{},{duration:4})
  .fromTo(camera.position,{x:2,y:-2.2,z:8},{x:0,y:0.2,z:-8,duration:8});
  return t4;
}

// 전체 배경 투명도
function t5(){
  var t5 = gsap.timeline();
  t5
  .fromTo("#canvas",{opacity:0,scale:0.5},{opacity:1,scale:1,duration:1})
  .fromTo({},{},{duration:37})
  .fromTo("#canvas",{opacity:1,scale:1},{opacity:0,scale:0.5,duration:2});
  return t5;
}

// 텍스트 줌인/줌아웃
function t6(){
  var t6 = gsap.timeline();
  t6
  .fromTo(".index_intro_txt_1",{opacity:0,scale:0.5},{opacity:1,scale:1,duration:8})
  .fromTo({},{},{duration:4})
  .fromTo(".index_intro_txt_1",{opacity:1,scale:1},{opacity:0,scale:0.5,duration:3})
  .fromTo(".index_intro_txt_2",{opacity:0,scale:0.5},{opacity:1,scale:1,duration:3})
  .fromTo({},{},{duration:4})
  .fromTo(".index_intro_txt_2",{opacity:1,scale:1},{opacity:0,scale:0.5,duration:3})
  .fromTo(".index_intro_txt_3",{opacity:0,scale:0.5},{opacity:1,scale:1,duration:3})
  .fromTo({},{},{duration:4})
  .fromTo(".index_intro_txt_3",{opacity:1,scale:1},{opacity:0,scale:0.5,duration:6})
  .fromTo({},{},{duration:2});
  return t6;
}

// 네비게이션 클릭 시 큐브 애니메이션 활성화
function indexNavCheck(){
  $("input[name=index_nav]").next("label").find(".scene").removeClass("scene-hover");
  $("input[name=index_nav]:checked").next("label").find(".scene").addClass("scene-hover");
  return;
}
indexNavCheck();

// 네비게이션 클릭 시 스크롤 이동
function indexNavMove(){
  var indexPortfolio = document.getElementById("indexPortfolio");

  if($("input[id=index_nav_1]").is(":checked")){
    locoScroll.scrollTo(0);
  }
  else if($("input[id=index_nav_2]").is(":checked")){
    locoScroll.scrollTo(window.innerHeight * 3.5);
  }
  else if($("input[id=index_nav_3]").is(":checked")){
    locoScroll.scrollTo(indexPortfolio,{"offset":-window.innerHeight*0.1});
  }
  return;
}

$("input[name=index_nav]").on("click",function(){
  indexNavMove();
  scrollTrigger.refresh();
  indexNavCheck();
});