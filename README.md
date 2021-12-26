# -记录vue项目插件的使用。
v-viewer插件 用于点击图片图片就放大功能。

写法参考：

https://mirari.cc/2017/08/27/Vue%E5%9B%BE%E7%89%87%E6%B5%8F%E8%A7%88%E7%BB%84%E4%BB%B6v-viewer%EF%BC%8C%E6%94%AF%E6%8C%81%E6%97%8B%E8%BD%AC%E3%80%81%E7%BC%A9%E6%94%BE%E3%80%81%E7%BF%BB%E8%BD%AC%E7%AD%89%E6%93%8D%E4%BD%9C/

1.安装 可以cdn引入，也可以脚手架环境下安装。

npm install v-viewer

安装好之后可以在引入（注意一定要引入样式表）

import Viewer from 'v-viewer' 

import 'viewerjs/dist/viewer.css'

Vue.use(Viewer); => 使用默认的一些属性

配置：

```javascript
Viewer.setDefaults({
    "inline": false, //是否采用inline模式 这个模式很奇怪 进去就展示。
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
```

| backdrop         | Boolean  String                | true   | 启用 modal，为 false 的时候不支持点击背景关闭                |      |
| ---------------- | :----------------------------- | ------ | ------------------------------------------------------------ | ---- |
| button           | Boolean                        | true   | 是否显示右上角的关闭按钮                                     |      |
| navbar           | Boolean  Number                | true   | 是否显示底部导航栏0 或 false：不显示1 或 true：显示2：当屏幕宽度大于 768px 时显示3：当屏幕宽度大于 992px 时显示4：当屏幕宽度大于 1200px 时显示 |      |
| title            | Boolean Number Function  Array | true   | 是否显示标题内容，默认显示 alt 属性内容和尺寸<b0 或 false：不显示 1 或 true 或 function 或 array：显示2：当屏幕宽度大于 768px 时显示3：当屏幕宽度大于 992px 时显示4：当屏幕宽度大于 1200px 时显示function：在函数体内返回标题内容 array：第一个参数表示可见性(0-4)，第二个参数表示 |      |
| toolbar          | Boolean Object Number          | true   | 工具栏是否显示和布局 0: 或 false：不显示 1: 或 true：显示 2：当屏幕宽度大于 768px 时显示 3：当屏幕宽度大于 992px 时显示 4：当屏幕宽度大于 1200px 时显示 object：请看下面 Object 类型详解 |      |
| className        | String                         |        | 添加到查看器的要元素的自定义类名                             |      |
| container        | Element String                 | 'body' | 将查看器置于 modal 模式的容器 只有在 inline 为 false 时才可以使用 |      |
| filter           | Function                       | null   | 过滤图像以便查看（图像是可见的，应返回 true）                |      |
| fullscreen       | Boolean                        | true   | 播放时是否全屏                                               |      |
| initialViewIndex | Number                         | 0      | 定义用于查看的图像的初始索引                                 |      |
| inline           | Boolean                        | false  | 是否启用 inline 模式                                         |      |
| interval         | Number                         | 5000   | 播放间隔，单位为毫秒                                         |      |
| keyboard         | Boolean                        | true   | 是否启用键盘支持                                             |      |
| loading          | Boolean                        | true   | 加载图片时是否显示 loading 图标                              |      |
| loop             | Boolean                        | true   | 是否可以循环查看图片                                         |      |
| minWidth         | Number                         | 200    | 定义图片查看器的最小的宽度                                   |      |
| minHeight        | Number                         | 100    | 定义图片查看器的最小的高度                                   |      |
| movable          | Boolean                        | true   | 是否可以拖动图片                                             |      |
| zoomable         | Boolean                        | true   | 是否可以缩放图片                                             |      |
| rotatable        | Boolean                        | true   | 是否可以旋转图片                                             |      |
| scalable         | Boolean                        | true   | 是否可以翻转图片                                             |      |
| toggleOnDblclick | Boolean                        | true   | 当你放大或缩小图片时，是否可以双击还原                       |      |
| tooltip          | Boolean                        | true   | 放大或缩小时，是否显示百分比的文字提示                       |      |
| transition       | Boolean                        | true   | 是否使用 CSS3 过度                                           |      |
| zIndex           | Number                         | 2015   | 在 modal 模式下定义查看器的 z-index 值                       |      |
| zIndexInline     | Number                         | 0      | 在 inline 模式下定义查看器的 z-index 值                      |      |
| zoomRatio        | Number                         | 0.1    | 鼠标滚动时的缩放比例                                         |      |
| minZoomRatio     | Number                         | 0.01   | 最小缩放比例                                                 |      |
| maxZoomRatio     | Number                         | 100    | 最大缩放比例                                                 |      |
| url              | String Function                | 'src'  | 原始图像 URL字符串：应该是图像元素的属性之一函数：应该返回一个有效的图像 URL |      |
| ready            | Function                       | null   | 当打开图片查看器时被触发，只会触发一次                       |      |
| show             | Function                       | null   | 当打开图片查看器时被触发，每次都触发                         |      |
| shown            | Function                       | null   | 当打开图片查看器完成时被触发，每次都会触发，在 show 之后     |      |
| hide             | Function                       | null   | 当关闭图片查看器时被触发，每次都会触发                       |      |
| hidden           | Function                       | null   | 当关闭图片查看器完成时被触发，每次都会触发，在 hide 之后     |      |
| view             | Function                       | null   | 当显示图片时被触发，每次都会触发，在 shown 之后              |      |
| viewed           | Function                       | null   | 当显示图片完成时被触发，每次都会触发，在 view 之后           |      |
| zoom             | Function                       | null   | 当图片缩放时被触发                                           |      |
| zoomed           | Function                       | null   | 当图片缩放完成时被触发，在 zoom 之后                         |      |
|                  |                                |        |                                                              |      |

- ### toolbar Object 类型详解

{ key: Number|Boolean }：显示或隐藏对应 key 的按钮，为 Number 的时候为可见性

{ key: String }：自定义按钮的大小

{ key: Function }：自定义按钮点击的处理

{ key: { show: Boolean|Number, size: String, click: Function } }：自定义按钮的每个属性

size 的取值范围：small、medium、default、large

key 值列表说明：

| key 值名称     | 说明                 |
| -------------- | -------------------- |
| zoomIn         | 放大图片的按钮       |
| zoomOut        | 缩小图片的按钮       |
| reset          | 重置图片大小的按钮   |
| reset          | 重置图片大小的按钮   |
| prev           | 查看上一张图片的按钮 |
| next           | 查看下一张图片的按钮 |
| play           | 播放图片的按钮       |
| rotateLeft     | 向左旋转图片的按钮   |
| rotateRight    | 向右旋转图片的按钮   |
| flipHorizontal | 图片左右翻转的按钮   |
| flipVertical   | 图片上下翻转的按钮   |

更多查看https://blog.csdn.net/liang_wf/article/details/102561670