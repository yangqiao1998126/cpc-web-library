webpackJsonp([40],{qXyN:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=i("4YfN"),n=i.n(s),o=i("bSIt"),r=i("BSu/"),a=i("PTN3"),h={data:function(){return{tips:"",renderer:"",scene:"",camera:"",stats:"",helperBox:"",lightBox:"",objBox:{stage:"",text:""},clock:"",orbitControls:"",animationFrame:""}},methods:n()({init:function(){this.initRender(),this.initScene(),this.initCamera(),this.initClock(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={ambientLight:new THREE.AmbientLight("rgb(255, 255, 255)"),spotLight:new THREE.SpotLight("rgb(255, 255, 255)",1.5)},this.lightBox.spotLight.position.set(220,200,200),this.lightBox.spotLight.castShadow=!0,this.lightBox.spotLight.angle=Math.PI/3,this.scene.add(this.lightBox.spotLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=50,this.camera.position.y=50,this.camera.position.z=100,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){var e=this,t=new THREE.BoxGeometry(200,5,50,4,4),i=new THREE.MeshLambertMaterial({color:"rgb(45, 0, 50)"});this.objBox.stage=new THREE.Mesh(t,i),this.objBox.stage.castShadow=!0,this.objBox.stage.receiveShadow=!0,this.objBox.stage.position.set(0,0,0),this.scene.add(this.objBox.stage),(new THREE.FontLoader).load("/static/plugins/helvetiker_regular.typeface.json",function(s){t=new THREE.TextGeometry("cpc-comic",{font:s,size:10,height:3,curveSegments:20,bevelEnabled:!0,bevelThickness:0,bevelSize:0,bevelSegments:0}),(i=new THREE.MeshLambertMaterial).emissiveIntensity=10,e.objBox.text=new THREE.Mesh(t,i),e.objBox.text.castShadow=!0,e.objBox.text.receiveShadow=!0,e.objBox.text.position.set(-30,5,0),e.scene.add(e.objBox.text)})},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},spotLightHelper:{helper:new THREE.SpotLightHelper(this.lightBox.spotLight)}}},initStats:function(){this.stats=new r.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new a.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},animation:function(e){},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.clear(!0,!0,!0),this.renderer.domElement=null,this.scene.dispose(),this.clearObjCache(this.objBox.stage),this.clearObjCache(this.objBox.text)}},Object(o.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("geometry/textGeometry.vue")},beforeMount:function(){},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.helperBox=null,this.objBox=null,this.clock=null,this.orbitControls=null,cancelAnimationFrame(this.animationFrame)}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var c=i("C7Lr")(h,l,!1,function(e){i("t9Ao")},"data-v-b77a9000",null);t.default=c.exports},t9Ao:function(e,t){}});