webpackJsonp([65],{YeZa:function(e,t){},gVVL:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=i("4YfN"),s=i.n(n),r=i("bSIt"),a=i("BSu/"),o=i("PTN3"),h={data:function(){return{tips:"",renderer:"",scene:"",camera:"",stats:"",helperBox:"",clock:"",orbitControls:"",animationFrame:""}},methods:s()({init:function(){this.initRender(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.updateRenderer()},initRender:function(){this.renderer.setSize(window.innerWidth,window.innerHeight),this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initLight:function(){},initCamera:function(){this.camera.position.x=400,this.camera.position.y=400,this.camera.position.z=400,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){},initHelper:function(){this.scene.add(this.helperBox.axesHelper.helper),this.scene.add(this.helperBox.gridHelper.helper)},initStats:function(){this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="0px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new o.a(this.camera,this.renderer.domElement)},animation:function(){},updateRenderer:function(){this.orbitControls.update(this.clock.getDelta()),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.context=null,this.renderer.domElement=null,this.scene.dispose()}},Object(r.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("camera/dragCamera.vue")},beforeMount:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.scene=new THREE.Scene,this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.stats=new a.a,this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")}},this.clock=new THREE.Clock},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.helperBox=null,this.clock=null,this.orbitControls=null,cancelAnimationFrame(this.animationFrame)}},l={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var c=i("C7Lr")(h,l,!1,function(e){i("YeZa")},"data-v-33f15bd7",null);t.default=c.exports}});