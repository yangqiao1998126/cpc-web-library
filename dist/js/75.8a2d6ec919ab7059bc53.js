webpackJsonp([75],{"9bly":function(e,t){},bX91:function(e,t,i){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=i("4YfN"),n=i.n(o),s=i("bSIt"),a=i("BSu/"),h=i("PTN3"),r=i("qTBi"),c={data:function(){return{renderer:"",scene:"",camera:"",stats:"",lightBox:"",helperBox:"",objBox:{stage:"",box:"",sphere:"",torusKnot:"",icosahedron:""},clock:"",orbitControls:"",animationFrame:"",gui:"",guiParam:""}},methods:n()({init:function(){this.initRender(),this.initScene(),this.initClock(),this.initCamera(),this.initLight(),this.initObj(),this.initHelper(),this.initStats(),this.initOrbitControls(),this.initGui(),this.updateRenderer()},initRender:function(){this.renderer=new THREE.WebGLRenderer({antialias:!0}),this.renderer.setSize(window.innerWidth,window.innerHeight),this.renderer.shadowMap.enabled=!0,this.renderer.shadowMap.type=THREE.PCFSoftShadowMap,this.$refs["three-canvas"].appendChild(this.renderer.domElement),this.renderer.setClearColor("rgb(15, 1, 25)")},initScene:function(){this.scene=new THREE.Scene,this.scene.fog=new THREE.Fog,this.scene.fog.color.setHex("rgb(55, 55, 55)"),this.scene.fog.near=1,this.scene.fog.far=400},initClock:function(){this.clock=new THREE.Clock},initLight:function(){this.lightBox={pointLight:new THREE.PointLight("rgb(255, 150, 255)",2,300,.5)},this.lightBox.pointLight.castShadow=!0,this.lightBox.pointLight.position.set(0,50,0),this.scene.add(this.lightBox.pointLight)},initCamera:function(){this.camera=new THREE.PerspectiveCamera(45,window.innerWidth/window.innerHeight,1,1e3),this.camera.position.x=200,this.camera.position.y=50,this.camera.position.z=200,this.camera.up.x=0,this.camera.up.y=1,this.camera.up.z=0,this.camera.lookAt(new THREE.Vector3(0,0,0))},initObj:function(){var e=new THREE.BoxGeometry(1500,10,1500,4,4),t=new THREE.MeshStandardMaterial({color:"rgb(200, 200, 200)",roughness:.7,metalness:0});this.objBox.stage=new THREE.Mesh(e,t),this.objBox.stage.castShadow=!0,this.objBox.stage.receiveShadow=!0,this.objBox.stage.position.set(0,5,0),this.scene.add(this.objBox.stage),e=new THREE.SphereGeometry(25,16,40,12),(t=new THREE.LineDashedMaterial({color:"rgb(230, 230, 230)",linewidth:1,scale:1,dashSize:3,gapSize:1})).transparent=!0,this.objBox.sphere=new THREE.Line(e,t).computeLineDistances(),this.objBox.sphere.castShadow=!0,this.objBox.sphere.receiveShadow=!0,this.objBox.sphere.position.set(0,35,150),this.scene.add(this.objBox.sphere),e=new THREE.BoxGeometry(50,50,50,16,16),this.objBox.box=new THREE.Line(e,t).computeLineDistances(),this.objBox.box.castShadow=!0,this.objBox.box.receiveShadow=!0,this.objBox.box.position.set(150,35,0),this.scene.add(this.objBox.box),e=new THREE.TorusKnotGeometry(16,4,128,16,3,2),this.objBox.torusKnot=new THREE.Line(e,t).computeLineDistances(),this.objBox.torusKnot.castShadow=!0,this.objBox.torusKnot.receiveShadow=!0,this.objBox.torusKnot.position.set(-150,35,0),this.scene.add(this.objBox.torusKnot),e=new THREE.IcosahedronGeometry(25,4),this.objBox.icosahedron=new THREE.Line(e,t).computeLineDistances(),this.objBox.icosahedron.castShadow=!0,this.objBox.icosahedron.receiveShadow=!0,this.objBox.icosahedron.position.set(0,35,-150),this.scene.add(this.objBox.icosahedron)},initHelper:function(){this.helperBox={axesHelper:{helper:new THREE.AxesHelper(1e4)},gridHelper:{helper:new THREE.GridHelper(1500,30,"white","rgb(150, 150, 150)")},pointLightHelper:{helper:new THREE.PointLightHelper(this.lightBox.pointLight,20)}},this.scene.add(this.helperBox.pointLightHelper.helper)},initStats:function(){this.stats=new a.a,this.stats.setMode(0),this.stats.domElement.id="three-stats",this.stats.domElement.style.position="absolute",this.stats.domElement.style.left="unset",this.stats.domElement.style.right="300px",this.stats.domElement.style.top="0px",document.body.appendChild(this.stats.domElement)},initOrbitControls:function(){this.orbitControls=new h.a(this.camera,this.renderer.domElement),this.orbitControls.autoRotate=!0},initGui:function(){var e=this;this.gui=new r.a,this.guiParam={showFog:!0,fogColor:this.scene.fog.color.getHex(),fogNear:this.scene.fog.near,fogFar:this.scene.fog.far,castShadow:this.lightBox.pointLight.castShadow,lightColor:this.lightBox.pointLight.color.getHex(),intensity:this.lightBox.pointLight.intensity,distance:this.lightBox.pointLight.distance,decay:this.lightBox.pointLight.decay,positionX:this.lightBox.pointLight.position.x,positionZ:this.lightBox.pointLight.position.z,materialColor:this.objBox.box.material.color.getHex(),opacity:this.objBox.box.material.opacity,scale:this.objBox.box.material.scale,dashSize:this.objBox.box.material.dashSize,gapSize:this.objBox.box.material.gapSize};var t=this.gui.addFolder("fog setting");t.add(this.guiParam,"showFog").onChange(function(t){t?(e.scene.fog=new THREE.Fog,e.scene.fog.color.setHex("rgb(55, 55, 55)"),e.scene.fog.near=1,e.scene.fog.far=400):e.scene.fog=null}),t.addColor(this.guiParam,"fogColor").onChange(function(t){e.scene.fog.color.setHex(t)}),t.add(this.guiParam,"fogNear",1,500,1).onChange(function(t){e.scene.fog.near=t}),t.add(this.guiParam,"fogFar",300,1500,1).onChange(function(t){e.scene.fog.far=t}),t.open();var i=this.gui.addFolder("Light setting");i.add(this.guiParam,"castShadow").onChange(function(t){e.lightBox.pointLight.castShadow=t}),i.addColor(this.guiParam,"lightColor",-500,500,1).onChange(function(t){e.lightBox.pointLight.color.setHex(t),e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"intensity",0,10,.1).onChange(function(t){e.lightBox.pointLight.intensity=t,e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"distance",0,600,1).onChange(function(t){e.lightBox.pointLight.distance=t,e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"decay",0,5).onChange(function(t){e.lightBox.pointLight.decay=t,e.helperBox.pointLightHelper.helper.update()}),i.add(this.guiParam,"positionX",-500,500,1).onChange(function(t){e.lightBox.pointLight.position.x=t}),i.add(this.guiParam,"positionZ",-500,500,1).onChange(function(t){e.lightBox.pointLight.position.x=t}),i.open();var o=this.gui.addFolder("material Setting");o.addColor(this.guiParam,"materialColor").onChange(function(t){e.objBox.box.material.color.setHex(t)}),o.add(this.guiParam,"opacity",0,1,.1).onChange(function(t){e.objBox.box.material.opacity=t}),o.add(this.guiParam,"scale",0,1,.1).onChange(function(t){e.objBox.box.material.scale=t}),o.add(this.guiParam,"dashSize",0,10,.1).onChange(function(t){e.objBox.box.material.dashSize=t}),o.add(this.guiParam,"gapSize",0,10,.1).onChange(function(t){e.objBox.box.material.gapSize=t}),o.open()},animation:function(){var e=.001*new Date;this.lightBox.pointLight.position.y=30*Math.sin(e)+60},updateRenderer:function(){var e=this.clock.getDelta();this.orbitControls.update(e),this.animation(),this.renderer.render(this.scene,this.camera),this.stats.update(),this.animationFrame=requestAnimationFrame(this.updateRenderer)},clearObjCache:function(e){e.geometry.dispose(),e.material.dispose()},clearCache:function(){this.renderer.clear(!0,!0,!0),this.renderer.dispose(),this.renderer.forceContextLoss(),this.renderer.domElement=null,this.clearObjCache(this.objBox.stage),this.clearObjCache(this.objBox.box),this.clearObjCache(this.objBox.sphere),this.clearObjCache(this.objBox.icosahedron),this.scene.dispose(),this.gui.destroy()}},Object(s.b)(["resetThreeTipsFun","resetThreeLinkFun"])),created:function(){this.resetThreeTipsFun("    旋转相机：鼠标左键\n    缩放场景：鼠标滚轮\n    移动相机：鼠标右键 "),this.resetThreeLinkFun("material/lineDashedMaterial.vue")},mounted:function(){this.init()},beforeDestroy:function(){document.body.removeChild(document.getElementById("three-stats")),this.clearCache(),this.renderer=null,this.scene=null,this.camera=null,this.stats=null,this.lightBox=null,this.helperBox=null,this.clock=null,this.gui=null,cancelAnimationFrame(this.animationFrame)}},d={render:function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"three-display three-init"},[t("div",{ref:"three-canvas",staticClass:"three-canvas",attrs:{id:"three-canvas"}})])},staticRenderFns:[]};var l=i("C7Lr")(c,d,!1,function(e){i("9bly")},"data-v-05c6cd17",null);t.default=l.exports}});