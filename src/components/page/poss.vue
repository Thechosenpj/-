<template>
  <div class="poss" ref="html2canvas">
    <div>
      <el-row>
        <el-col :span="7" class="poss-order" id="order-list">
          <el-tabs>
            <el-tab-pane label="点餐">
              <el-table :data="tableData" border show-summary style="width: 100%">
                <el-table-column prop="goodsName" label="商品名称"></el-table-column>
                <el-table-column prop="count" label="数量" width="50"></el-table-column>
                <el-table-column prop="price" label="金额" width="70"></el-table-column>
                <el-table-column  label="操作" width="100" fixed="right">
                  <template scope="">
                    <el-button type="text" size="small">删除</el-button>
                    <el-button type="text" size="small">增加</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="挂单">挂单</el-tab-pane>
            <el-tab-pane label="外卖">外卖</el-tab-pane>
          </el-tabs>
          <div class="div-btn">
            <el-button type="warning" >挂单</el-button>
            <el-button type="danger" >删除</el-button>
            <el-button type="success" >结账</el-button>
          </div>
        </el-col>
        <el-col :span="17">
          <div class="often-goods">
            <div class="title">常见商品</div>
            <div class="often-goods-list">
              <ul>
                <li v-for="item in oftenGoods" :key="item.goodsId">
                  <span>{{ item.goodsName }}</span>
                  <span class="o-price">￥{{ item.price }}</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="goods-type">
            <el-tabs>
              <el-tab-pane label="汉堡">
                <div>
                  <ul class='cookList'>
                    <li v-for="item in type0Goods" :key="item.goodsId">
                      <span class="foodImg"><img :src="item.goodsImg" width="100%"></span>
                      <span class="foodName">{{ item.goodsName }}</span>
                      <span class="foodPrice">￥{{item.price}}元</span>
                    </li>
                  </ul>
                </div>
              </el-tab-pane>
              <el-tab-pane label="小食">小食</el-tab-pane>
              <el-tab-pane label="饮料">饮料</el-tab-pane>
              <el-tab-pane label="套餐">套餐</el-tab-pane>
            </el-tabs>
          </div>


            <el-table :data="tableList" style="width:100%">
              <el-table-column label="" type="index" >
                <template slot="header">
                  <el-dropdown
                    trigger="click"
                    placement="bottom-start"
                    szie="small"
                    @command="show"
                  >
                    <!-- <span>#</span> -->
                    <button>11111</button>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item icon="el-icon-zoom-in">设置</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>

              <el-table-column
                v-for="key in list"
                :key="key.prop"
                :prop="key.prop"
                :label="key.label"
              >
                <template slot="header">
                  <el-dropdown
                    trigger="click"
                    placement="bottom-start"
                    @command='show'
                  >
                    <span>{{key.label}}</span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>设置</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>
<!-- 
              <el-table-column label="可口可乐" prop="goodsName">
                <template slot="header" type='index'>
                  <el-dropdown
                    trigger="click"
                    placement="bottom-start"
                  >
                    <span>可口可乐</span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>设置</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column>

              <el-table-column label="对对对" prop="count">
                <template slot="header" type='index'>
                  <el-dropdown
                    trigger="click"
                    placement="bottom-start"
                  >
                    <span>对对对</span>
                    <el-dropdown-menu slot="dropdown">
                      <el-dropdown-item>设置</el-dropdown-item>
                    </el-dropdown-menu>
                  </el-dropdown>
                </template>
              </el-table-column> -->


            </el-table>

        </el-col>
      </el-row>
    </div>
    <div class="htmlCanvas">
      <el-button type="danger" @click="Hcanvas">截图</el-button>
    </div>
    <el-dialog :visible.sync="canvasImag" style="width:100%;height:100%">
      <img :src="imgUrl">
    </el-dialog>
    <!-- <div class="jietu" v-if="canvasImag">
      <img :src="imgUrl">
    </div> -->
  </div>
</template>

<script>
import axios from 'axios'
import html2canvas from 'html2canvas'
export default {
  name:'poss',
  data() {
    return {
      imgUrl:"",
      srcList:[],
      canvasImag:false,
      showDialog: false,
      tableList:[
        {goodsName:'www',price:'eee',count:'12121',sss:'ppp'},
        {goodsName:'qqq',price:'eee',count:'12121',sss:'ppp'},
        {goodsName:'eee',price:'eee',count:'12121',sss:'ppp'/*  */},
      ],
      list:[
        {label:"可口可乐",prop:'goodsName'},
        {label:"香辣鸡腿堡",prop:'price'},
        {label:"爱心薯条",prop:'count'},
        {label:"可口可乐",prop:'sss'},
      ],
      tableData:[{
          goodsName: '可口可乐',
          price: 8,
          count:1
        }, {

          goodsName: '香辣鸡腿堡',
          price: 15,
          count:1
        }, {

          goodsName: '爱心薯条',
          price: 8,
          count:1
        }, {

          goodsName: '甜筒',
          price: 8,
          count:1
      }],
      oftenGoods:[
          {
              goodsId:1,
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
              goodsName:'香脆鸡柳',
              price:17
          }
      ],
      type0Goods:[
          {
              goodsId:1,
              goodsImg: require("../../../图片/121.png"),
              goodsName:'香辣鸡腿堡',
              price:18
          }, {
              goodsId:2,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'田园鸡腿堡',
              price:15
          }, {
              goodsId:3,
              goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'和风汉堡',
              price:15
          }, {
              goodsId:4,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'快乐全家桶',
              price:80
          }, {
              goodsId:5,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'脆皮炸鸡腿',
              price:10
          }, {
              goodsId:6,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos004.jpg",
              goodsName:'魔法鸡块',
              price:20
          }, {
              goodsId:7,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos001.jpg",
              goodsName:'可乐大杯',
              price:10
          }, {
              goodsId:8,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos003.jpg",
              goodsName:'雪顶咖啡',
              price:18
          }, {
              goodsId:9,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'大块鸡米花',
              price:15
          }, {
              goodsId:20,
               goodsImg:"http://7xjyw1.com1.z0.glb.clouddn.com/pos002.jpg",
              goodsName:'香脆鸡柳',
              price:17
          }

      ],
    }
    
  },
  created() {
    axios.get('api/DemoApi/oftenGoods.php')
    .then((res) => {
      console.log(res)
    })
    .catch((err) => {
      console.log("err",err)
    })
  },
  mounted(){
    var orderHeight=document.body.clientHeight;
    console.log('12',orderHeight)
    document.getElementById("order-list").style.height=orderHeight+'px';
  },
  methods:{
    Hcanvas () {
      alert('截图')
      // html2canvas(document.body).then(function(canvas) {
      //     document.body.appendChild(canvas);
      // });
      window.pageYOffset = 0;
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
      html2canvas(this.$refs.html2canvas, {
        // width: 200,
        // height: 200,
        backgroundColor: null,
        useCORS: true // 解决文件跨域问题
      }).then(canvas => {
        const url = canvas.toDataURL('image/png') // 生成的图片
        // 可以上传后端或者直接显示
        console.log('12', url)
        // this.srcList.push(url)
        this.canvasImag = true
        this.imgUrl = url
      })   
    },
    show() {
      alert('微众银行')
      // this.showDialog = true
      this.$router.push("/viewer")

    }
  }
}
</script>

<style scoped lang="less">
  .poss-order{
    background-color: #F9FAFC;
    border: 1px solid #C0CCDA;
    height: 100%;
  }
  .div-btn{
    text-align: center;
    margin: 20px 0 0 0;
  }
  .title{
       height: 20px;
       border-bottom:1px solid #D3DCE6;
       background-color: #F9FAFC;
       padding:10px;
   }
   .often-goods-list ul li{
      list-style: none;
      float:left;
      border:1px solid #E5E9F2;
      padding:10px;
      margin:5px;
      background-color:#fff;
   }
   .often-goods-list>ul {
    //  overflow: hidden;
    display: block;
    content: "";
    clear: both;
   }
  .o-price{
      color:#58B7FF; 
   }
  .goods-type {
    display: block;
    content: "";
    clear: both;
  }
  .cookList li{
       list-style: none;
       width:23%;
       border:1px solid #E5E9F2;
       height: auot;
       overflow: hidden;
       background-color:#fff;
       padding: 2px;
       float:left;
       margin: 2px;

   }
   .cookList li span{
      display: block;
      float:left;
   }
   .foodImg{
      width: 40%;
   }
   .foodName{
      font-size: 18px;
      padding-left: 10px;
      color:brown;

   }
   .foodPrice{
      font-size: 16px;
      padding-left: 10px;
      padding-top:10px;
   }
   .htmlCanvas{
     position: fixed;
     right: 2px;
     bottom: 10px;
   }
   .jietu{
    position: absolute;
    left: 50%;
    top: 50%;
   }
</style>
