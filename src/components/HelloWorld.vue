<template>
  <div class="hello">

    
    <!--下面是可以滑动的地方-->
    <div class="content-box" id="content-box">
      <div class="title" v-show="isShown" @click="tap()"></div>
      <span>window:{{window}}------el:{{el}}-------documents{{documents}}</span>
      <div class="item" id="test"></div>
    </div>
    
  </div>
  
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
       isShown: true,
       scroll:null,
       window:0,
       el:0,
       documents:0

    }
  },
  created () {
      // 添加滑动监听事件   无效的监听事件  我觉得他应该是监听的最外层div的滑动


  },
  computed:{

  },
   mounted: function () {
    console.log(document)
    console.log(window)
    
    // document.getElementById('content-box').onscroll = this.onscroll //监听content-box内的滑动事件
    // window.addEventListener('touchmove', this.handleScroll,false) 
    // this.$el.addEventListener('touchmove', this.onscroll,false)
    // document.addEventListener('touchmove', this.documents,false)

    // document.getElementById('content-box').addEventListener('touchmove', this.documents1,false)
    // document.getElementById('content-box').addEventListener('touchend', this.onscroll,false)
    console.log(this.$el.querySelector('#content-box'))
    this.$el.querySelector('#content-box').addEventListener('scroll', this.documents1,false)

    // this.$el.querySelector('content-box').addEventListener('scroll', this.handleScroll,false)

        

      },
   methods: {
    tap:function(){
        // window.location.hash = "#test";
        document.getElementById('content-box').scrollTop=0
    },
    handleScroll () {

      console.log('-------------------------`handleScroll----------------------')
      console.log(document.getElementById('content-box').scrollTop)
      this.window++

    },
    onscroll (e) {

      // console.log('-------------------------`onscroll----------------------')
      // console.log(document.getElementById('content-box').scrollTop)
      // this.el++
      e.preventDefault();
    },
    documents1(e){
      // console.log(e)
      
      
      console.log('-------------------------`documents----------------------')
      console.log(document.getElementById('content-box').scrollTop)
      this.documents++
    }
  }
}
</script>

<style scoped>
  .hello{
    /*overflow: scroll;
    height: 500px;*/
  }
.title{
  height: 200px;
    background: red;
}
.content{
  background: -moz-linear-gradient(top, #000000 0%, #ffffff 100%);
    background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#000000), color-stop(100%,#ffffff));
    background: -webkit-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: -o-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: -ms-linear-gradient(top, #000000 0%,#ffffff 100%);
    background: linear-gradient(to bottom, #000000 0%,#ffffff 100%);
    height: 1000px
}
.top{

}

.content-box{
    overflow: scroll;
    height: 500px;
}
.item{
  margin-top: 600px;
}
</style>
