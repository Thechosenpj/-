import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import element from './element-ui/index'
import "viewerjs/dist/viewer.css"
import Viewer from "v-viewer"
Vue.use(element)
Vue.use(Viewer)
Viewer.setDefaults({
    "inline": true, //是否采用inline模式 这个模式很奇怪 进去就展示。
    "button": true, // 是否显示右上角关闭按钮
    "navbar": true,// 是否展示下方的小图导航
    "title": false,// 是否显示图片名字
    "toolbar": true, // 是否显示工具栏
    "tooltip": true, // 是否显示缩放的百分比
    "movable": true,  // 图片是否要移动
    "zoomable": true, // 是否要缩放
    "rotatable": true, // 是否要旋转
    "scalable": true,//是否要反转
    "transition": true,//是否用css3过渡
    "fullscreen": true,//播放是否要全屏
    "keyboard": true,
});


Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
