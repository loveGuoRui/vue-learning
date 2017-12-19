<template>
  <div class="tags-bg">
    <div class="search-bg"></div>
    <div class="tag-bg" id='tag-bg' @scroll='scroll()'>
        <div class="tag-box">
            <div class="tags-body" v-for="item in tags">
                <div class="tag-line" v-bind:id="item.class">{{item.class}}</div>
                <div class="tag-content">
                    <div class="tag-item" v-for="tag in item.tag">
                        {{tag.name}}
                    </div>
                </div>
            </div>
        </div>
        <div class="letter-slide">
            <div class="letter-item" v-for="item in letters" @click="goAnchor(item)">{{item}}</div>
        </div>
    </div>
    <div class="bottom-add" v-if="!isTop">
        <img src="../../../static/open.png" class="add-img" @click="top()"/>
        
    </div>
  </div>
</template>

<script>
import $ from 'jquery'
export default {
  name: 'tags',
  data () {
    return {
     isTop:true,
     letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
     tags:[ {class:'A',tag:[{name:"AngularJs",Id:'001',icon:''},{name:"Android",Id:'002',icon:''}]},{class:'B',tag:[{name:'Vue',id:'003',icon:''}]},{class:'C',tag:[{name:'Vue',id:'003',icon:''}]},{class:'D',tag:[{name:'Vue',id:'003',icon:''}]},{class:'E',tag:[{name:'Vue',id:'003',icon:''}]},{class:'F',tag:[{name:'Vue',id:'003',icon:''}]},{class:'G',tag:[{name:'Vue',id:'003',icon:''}]},{class:'H',tag:[{name:'Vue',id:'003',icon:''}]},{class:'I',tag:[{name:'Vue',id:'003',icon:''}]},{class:'J',tag:[{name:'Vue',id:'003',icon:''}]},{class:'K',tag:[{name:'Vue',id:'003',icon:''}]},{class:'L',tag:[{name:'Vue',id:'003',icon:''}]},{class:'M',tag:[{name:'Vue',id:'003',icon:''}]},{class:'N',tag:[{name:'Vue',id:'003',icon:''}]}]
    }
  },
  mounted(){

  },
  methods:{
      goAnchor(e){
         
        // document.getElementById(e).scrollIntoView()
      console.log(  this.$el.querySelector('#'+e).offsetTop)
    //   document.getElementById('tag-bg').scrollTop =  this.$el.querySelector('#'+e).offsetTop;

      $('#tag-bg').animate({
            scrollTop:  this.$el.querySelector('#'+e).offsetTop
        }, 800);
      },
      top(){
          $('#tag-bg').animate({
            scrollTop:  0
        }, 500);
      },
      scroll(){
            if(document.getElementById('tag-bg').scrollTop > 10){
                this.isTop=false
            }else{
                this.isTop=true
            }
      }
  }

}
</script>

<style scoped>
    .tags-bg{
        height: 100%;
        width: 100%;
        position: fixed
    }
.letter-slide{
    width: 10px;
    word-wrap: break-word;
    position: absolute;
    right: 25px;
    top: 100px;
    color: #63B8FF;
    opacity: 100%;
        text-align: center;
}   
.letter-item{
    cursor: pointer;
    margin-top: 2px;
    font-size: 14px;
}
.letter-item:hover{
     text-shadow: 0 0 10px #63B8FF;
}
.tag-bg{
    padding: 30px 150px;
        height: 100%;
    overflow: auto;
}
.tag-line{
    font-size: 25px;
    padding-left: 40px;
    border-bottom: 1px solid #DEDEDE;
    color: #ABABAB;
}
.tag-content{
    margin: 20px;
    height: 100px;
   
}
.tag-item{
    float: left;
     margin-left: 20px;
}
  .bottom-add{
      text-align: center;
      position: absolute;
      bottom: 10px;
      right: 10px;
      width: 100px;
      height: auto;
      margin: 50px 20px;
      z-index: 999;
      
  }
    .add-img{
      width: 50px;
      height: 50px;
      cursor: pointer;
  }

  
</style>
