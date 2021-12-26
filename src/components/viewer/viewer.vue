<template>
  <div id="viewer">
    <el-button @click="show">点击打开弹窗</el-button>

    <el-dialog
      title="详情"
      :visible.sync="showDialog"
    >
      <viewer :images="srcList">
        <img v-for="(item) in srcList" :src=item :key="item" />
      </viewer>
      <!-- <img v-viewer v-for="(item) in srcList" :src=item :key="item" /> -->
      
    </el-dialog>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDialog: false,
      srcList: [
        require("../../../图片/121.png"),
        require("../../../图片/122.png"),
        require("../../../图片/123.png"),
        require("../../../图片/124.png"),
        require("../../../图片/125.png"),
      ],
      imagList: []
    }
  },
  methods: {
    show () {
      alert('给我变大')
      this.showDialog = true
    }
  }
}
</script>

<style scoped>
  img{
    width: 100px;
    height: 100px;
    margin-right: 10px;
  }
</style>
