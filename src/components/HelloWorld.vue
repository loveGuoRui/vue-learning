<template>
  <div class="hello">

    
    <!--下面是可以滑动的地方-->
    <div class="content-box" id="content-box">
      <div class="title" v-show="isShown" @click="tap()"></div>
      <span>window:{{window}}------el:{{el}}-------documents{{documents}}</span>
      <div class="item" id="test"></div>
      <input v-model="rate" @keyup="matchRate($event)" @keydown="matchPrevent($event)"/>
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
       documents:0,
       rate:0.0

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
    // console.log(this.$el.querySelector('#content-box'))
    // this.$el.querySelector('#content-box').addEventListener('scroll', this.documents1,false)

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
    },
    matchRate(){
      //  var reg = /^[0-9]\d{0,14}\.\d{1,2}|0\.\d{1,2}|[0-9]\d{0,14}|\d$/
      //  var str = this.rate;
      //  var matchs = str.match(reg);
      //  if(matchs!=null &&matchs.input.charAt(matchs.input.length - 1)!='.'){
      //   if(matchs[0].length!= str.length){
      //     this.rate=matchs[0]
      //   }
      //  }
      // if(matchs==null){
      //   this.rate=''
      // }
    },
    matchPrevent(e){
      console.log(e)
      console.log(this.rate)
      if(60<=e.keyCode&&e.keyCode<=90){
        e.preventDefault();
      }
      if(e.keyCode==190){
         if(this.rate==null||this.rate==""){
          e.preventDefault()
          return;
        }
        console.log(this.rate.indexOf("."))
        if(this.rate.charAt(this.rate.length - 1) =='.'){
            e.preventDefault()
        }
       
        if(this.rate.indexOf(".")>-1){
            e.preventDefault()
        }
      }
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
