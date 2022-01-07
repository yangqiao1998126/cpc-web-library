webpackJsonp([46],{"6+HS":function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=i("4YfN"),n=i.n(r),s=i("bSIt"),h=i("BSu/"),o=i("PTN3"),a=i("qTBi"),l={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{group:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:n()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={hemisphereLight:new THREE.HemisphereLight("rgb(255, 255, 255)","rgb(0, 0, 0)",2.5)},this.scene.add(this.lightBox.hemisphereLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=650,this.camera.position.y=30,this.camera.position.z=650,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){this.objBox.group=new THREE.Group;for(var e=new THREE.BoxBufferGeometry(50,50,50),t=[0,64,128,192,255],i=[-200,-100,0,100,200],r=0;r<i.length;r+=1)for(var n=0;n<i.length;n+=1)for(var s=0;s<i.length;s+=1){var h=new THREE.MeshPhongMaterial({color:"rgb("+t[r]+", "+t[n]+", "+t[s]+")"}),o=new THREE.Mesh(e,h);o.castShadow=!0,o.receiveShadow=!0,o.position.set(i[r],i[n],i[s]),this.objBox.group.add(o)}this.scene.add(this.objBox.group)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},hemisphereLightHelper:{helper:new THREE.HemisphereLightHelper(this.lightBox.hemisphereLight,200)}},this.scene.add(this.helperBox.gridHelper.helper),this.scene.add(this.helperBox.hemisphereLightHelper.helper)},initStats:function(){this.stats=new h.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new o.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},initGui:function(){var e=this;this.gui=new a.a,this.guiParam={autoCamera:this.orbitControls.autoRotate,skyColor:this.lightBox.hemisphereLight.color.getHex(),groundColor:this.lightBox.hemisphereLight.groundColor.getHex(),intensity:this.lightBox.hemisphereLight.intensity},this.gui.add(this.guiParam,"autoCamera").onChange(function(t){e.orbitControls.autoRotate=t}),this.gui.addColor(this.guiParam,"skyColor",-500,500).onChange(function(t){e.lightBox.hemisphereLight.color.setHex(t),e.helperBox.hemisphereLightHelper.helper.update()}),this.gui.addColor(this.guiParam,"groundColor",-500,500).onChange(function(t){e.lightBox.hemisphereLight.groundColor.setHex(t),e.helperBox.hemisphereLightHelper.helper.update()}),this.gui.add(this.guiParam,"intensity",0,10).onChange(function(t){e.lightBox.hemisphereLight.intensity=t,e.helperBox.hemisphereLightHelper.helper.update()})},animation:function(){},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){var e=this;this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.objBox.group.children.forEach(function(t){e.clearObjCache(t)}),this.scene.dispose(),this.gui.destroy()}},Object(s.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("light/hemisphereLight.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var c=i("C7Lr")(l,d,!1,function(e){i("zU90")},"data-v-9765947e",null);t.default=c.exports},zU90:function(e,t){}});