<template>
  <div ref="threeJs" class="w-full min-h-100vh overflow-hidden" id="threeJs"></div>
</template>

<script setup>
import { nextTick } from 'vue'

// 创建场景对象Scene
const scene = new THREE.Scene()
// 创建网格模型
// const geometry = new THREE.SphereGeometry(60, 40, 40) //创建一个球体几何对象(半径60 经纬度细分数40，40)
// const geometry = new THREE.BoxGeometry(100, 100, 100) //创建一个立方体几何对象(参数：长、宽、高)
// const geometry = new THREE.CylinderGeometry(50, 50, 100, 25) //创建一个圆柱(参数：圆柱面顶部、底部直径50, 50  高度100  圆周分段数25)
// const geometry = new THREE.OctahedronGeometry(100) //创建一个正八面体
// const geometry = new THREE.DodecahedronGeometry(100) //创建一个正十二面体
// const geometry = new THREE.IcosahedronGeometry(100) //创建一个正二十面体
// const geometry = new THREE.TetrahedronGeometry(100) //创建一个正四面体
// --------------------------------------------绘制多个模型--------------------
// 立方体网格模型
const geometry1 = new THREE.BoxGeometry(100, 100, 100)
const material1 = new THREE.MeshLambertMaterial({
  color: 0x0000ff,
}) //材质对象Material
const mesh1 = new THREE.Mesh(geometry1, material1) //网格模型对象Mesh
scene.add(mesh1) //网格模型添加到场景中

// 球体网格模型
const geometry2 = new THREE.SphereGeometry(60, 40, 40)
const material2 = new THREE.MeshLambertMaterial({
  color: 0xff00ff,
})
const mesh2 = new THREE.Mesh(geometry2, material2) //网格模型对象Mesh
mesh2.translateY(120) //球体网格模型沿Y轴正方向平移120
scene.add(mesh2) //网格模型添加到场景中

// 圆柱网格模型
const geometry3 = new THREE.CylinderGeometry(50, 50, 100, 25)
const material3 = new THREE.MeshLambertMaterial({
  color: 0xffff00,
})
const mesh3 = new THREE.Mesh(geometry3, material3) //网格模型对象Mesh
mesh3.position.set(120, 0, 0) //设置mesh3模型对象的xyz坐标为120,0,0
scene.add(mesh3)

// ------------------辅助三维坐标系-------------------
// 辅助坐标系  参数250表示坐标系大小，可以根据场景大小去设置
const axisHelper = new THREE.AxisHelper(250)
scene.add(axisHelper)
// -----------------------光源设置----------------------
// 点光源
const point = new THREE.PointLight(0xffffff)
point.position.set(400, 200, 300) //点光源位置
scene.add(point) //点光源添加到场景中
// 环境光
const ambient = new THREE.AmbientLight(0x444444)
scene.add(ambient)

// ----------------------相机设置-------------------------
const width = window.innerWidth //窗口宽度
// const width = 1200 //窗口宽度
const height = window.innerHeight //窗口高度
const k = width / height //窗口宽高比
const s = 200 //三维场景显示范围控制系数，系数越大，显示的范围越大
// 创建相机对象
const camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000)
camera.position.set(200, 300, 200) //设置相机位置
camera.lookAt(scene.position) //设置相机方向（指向的场景对象）

// ------------------------创建渲染器对象-----------------------
const renderer = new THREE.WebGLRenderer()
renderer.setSize(width, height) //设置渲染区域尺寸
renderer.setClearColor(0xb9d3ff, 1) //设置背景颜色
const threeJs = ref()
const render = () => {
  renderer.render(scene, camera) //执行渲染操作
  requestAnimationFrame(render) //请求再次执行渲染函数render
}
nextTick(() => {
  threeJs.value.appendChild(renderer.domElement) //body元素中插入canvas对象
  // 指向渲染操作    指定场景、相机作为参数
  //   renderer.render(scene, camera)
  render()
})
const controls = new THREE.OrbitControls(camera, renderer.domElement) //创建控件对象
// 已经通过requestAnimationFrame(render);周期性执行render函数，没必要再通过监听鼠标事件执行render函数
// controls.addEventListener('change', render) //监听鼠标、键盘事件
</script>

<style scoped lang="scss"></style>
