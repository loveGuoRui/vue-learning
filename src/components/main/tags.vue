<template>
  <div class="tags-bg">
    <div class="search-bg"></div>
    <div class="tag-bg">
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
  </div>
</template>

<script>
export default {
  name: 'tags',
  data () {
    return {
     letters:['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','#'],
     tags:[ {class:'A',tag:[{name:"AngularJs",Id:'001',icon:''},{name:"Android",Id:'002',icon:''}]},{class:'V',tag:[{name:'Vue',id:'003',icon:''}]},{class:'V',tag:[{name:'Vue',id:'003',icon:''}]},{class:'V',tag:[{name:'Vue',id:'003',icon:''}]},{class:'V',tag:[{name:'Vue',id:'003',icon:''}]}]
    }
  },
  methods:{
      goAnchor(e){
        // document.getElementById(e).scrollIntoView()
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
    opacity: 100%
}
.letter-item{
    cursor: pointer;
    margin-top: 2px;
    font-size: 14px;
}
.tag-bg{
    padding: 30px 150px;
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

  
</style>
