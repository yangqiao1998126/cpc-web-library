webpackJsonp([38],{"8X8G":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("4YfN"),s=i.n(n),o=i("bSIt"),h=i("BSu/"),r=i("PTN3"),a=i("qTBi"),l={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{group:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:s()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initObj(),this.initLight(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={spotLight:new THREE.SpotLight("rgb(255, 255, 255)",1.5,800,Math.PI/180*30,.3,0)},this.lightBox.spotLight.position.set(400,400,400),this.lightBox.spotLight.castShadow=!1,this.scene.add(this.lightBox.spotLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e4),this.camera.position.x=400,this.camera.position.y=-600,this.camera.position.z=400,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){this.objBox.group=new THREE.Group;for(var t=new THREE.BoxBufferGeometry(50,50,50),e=[0,64,128,192,255],i=[-200,-100,0,100,200],n=0;n<i.length;n+=1)for(var s=0;s<i.length;s+=1)for(var o=0;o<i.length;o+=1){var h=new THREE.MeshStandardMaterial({color:"rgb("+e[n]+", "+e[s]+", "+e[o]+")",roughness:0,metalness:0}),r=new THREE.Mesh(t,h);r.castShadow=!0,r.receiveShadow=!0,r.position.set(i[n],i[s],i[o]),this.objBox.group.add(r)}this.scene.add(this.objBox.group)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},spotLightHelper:{helper:new THREE.SpotLightHelper(this.lightBox.spotLight)}}},initStats:function(){this.stats=new h.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new r.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},initGui:function(){var t=this;this.gui=new a.a({name:"spotLight Controller"}),this.guiParam={showHelper:!1,castShadow:this.lightBox.spotLight.castShadow,color:this.lightBox.spotLight.color.getHex(),intensity:this.lightBox.spotLight.intensity,distance:this.lightBox.spotLight.distance,angle:180*this.lightBox.spotLight.angle/Math.PI,penumbra:this.lightBox.spotLight.penumbra,decay:this.lightBox.spotLight.decay,positionY:this.lightBox.spotLight.position.y};var e=this.gui.addFolder("Light setting");e.add(this.guiParam,"showHelper").onChange(function(e){e?t.scene.add(t.helperBox.spotLightHelper.helper):t.scene.remove(t.helperBox.spotLightHelper.helper)}),e.add(this.guiParam,"castShadow").onChange(function(e){t.lightBox.spotLight.castShadow=e}),e.addColor(this.guiParam,"color",-500,500).onChange(function(e){t.lightBox.spotLight.color.setHex(e),t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"intensity",0,10).onChange(function(e){t.lightBox.spotLight.intensity=e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"distance",0,1e3,1).onChange(function(e){t.lightBox.spotLight.distance=e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"angle",0,60,1).onChange(function(e){t.lightBox.spotLight.angle=Math.PI/180*e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"penumbra",0,1,.1).onChange(function(e){t.lightBox.spotLight.penumbra=e,t.helperBox.spotLightHelper.helper.update()}),e.add(this.guiParam,"decay",0,5,.1).onChange(function(e){t.lightBox.spotLight.decay=e,t.helperBox.spotLightHelper.helper.update()}),e.open();var i=this.gui.addFolder("Light position");i.add(this.guiParam,"positionY",-500,500,1).onChange(function(e){t.lightBox.spotLight.position.y=e,t.helperBox.spotLightHelper.helper.update()}),i.open()},animation:function(){var t=.001*Date.now();this.lightBox.spotLight.position.x=400*-Math.cos(t),this.lightBox.spotLight.position.z=400*Math.sin(t),this.helperBox.spotLightHelper.helper.update()},updateRenderer:function(){var t=this.clock.getDelta();this.orbitControls.update(t),this.animation(),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(t){t.geometry.dispose(),t.material.dispose()},clearCache:function(){var t=this;this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.objBox.group.children.forEach(function(e){t.clearObjCache(e)}),this.scene.dispose(),this.helperBox.spotLightHelper.helper.dispose(),this.gui.destroy()}},Object(o.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("light/spotLight.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"three-display three-init"},[e("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var d=i("C7Lr")(l,p,!1,function(t){i("G3Hn")},"data-v-d497a7ca",null);e.default=d.exports},G3Hn:function(t,e){}});