<template>
  <div class="tags-bg">
    <div class="search-bg"></div>
    <div class="tag-bg">
        <div class="tag-box">
            <div class="tag-item">
                
            </div>
        </div>
        <div class="letter-slide">
            <div class="letter-item" v-for="(item, index) in letters" v-bind="index">{{item}}</div>
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
     tags:[ {class:'A',tag:[{name:"AngularJs",Id:'001',icon:''}]}]
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
  
</style>
