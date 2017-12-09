<template>
  <div class="main-bg">
    <div class="main-home">
        <!--新增书签和标签页面-->
       <div class="add-bg"> 
           <div class="add-box" > 
               <div class="add-label"></div>
               <div v-bind:class="{'add-input':!shadow,'add-input-high':shadow}" @mouseenter="enter" @mouseleave="leave">
                   <div class="add-head add-i" v-bind:class="{'add-i-none':!shadow,'add-i-shadow':shadow}">
                    </div> 
                    <div class="add-main add-i" v-bind:class="{'add-i-none':!shadow,'add-i-shadow':shadow}">
                        <input class='input-main'placeholder="粘贴网址" v-model="placeholder"/>
                    </div>
                    <div class="add-mid add-i" v-bind:class="{'add-i-none':!shadow,'add-i-shadow':shadow}">
                            <span class="add-font" style="float:right">添</span>
                    </div>
                    <div class="add-tail add-i" v-bind:class="{'add-i-none':!shadow,'add-i-shadow':shadow}">
                         <span  class="add-font"> 加</span>
                    </div>
                     
               </div>
               <div class="add-tips">
                 
               </div>
           </div>
       </div>
        <!--搜索页面-->
       
       <!--标签和书签页面-->
       <div class="tags-bg"> 
            <div class="search-bg"> 

            </div>
       </div>

    </div>
    
    <!--右下角按钮-->
    <!--<div class="bottom-add">
        <div  v-bind:class="{'add-item-open':showAdd,'add-item-close':!showAdd}">
        <img src="../../../static/book.png" class="add-img"/>
        <img src="../../../static/tag.png" class="add-img" />
        </div>
        <img src="../../../static/open.png" class="add-img" v-bind:class="{ 'img-transform': trandeg ,'img-normal':!trandeg}"@click="change()"/>
        
    </div>-->
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
        showAdd:false,
        trandeg:false,
        shadow:false,
        placeholder:'郭蕊。我爱你'
    }
  },
  methods:{
        change(){
            this.showAdd = !this.showAdd
            this.trandeg =!this.trandeg 
        },
        enter(){
            // console.log("enter")
            this.shadow = true;
        },
        leave(){
            // console.log("leave")
            this.shadow = false;

        }
  }
}
</script>

<style scoped>
  .main-bg{
    height: 100%;
    width: 100%;
    position: fixed;
    
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
  .add-item-open{
       animation: showadd 1s;
       height: 110px;
       overflow: hidden;
  }
.add-item-close{
       animation: closeadd 1s;
       height: 0px;
       overflow: hidden;
  }
  @keyframes showadd{
       from   { height: 0px;}
        to  { height: 110px;}
  }
    @keyframes closeadd{
       from   { height: 110px;}
        to  { height: 0px;}
  }
  
  
  .add-img{
      width: 50px;
      height: 50px;
      cursor: pointer;
  }
  .img-transform{
      transform: rotate(180deg);
      animation: transform 0.8s;
  }
  .img-normal{
     animation: normalimg 0.8s;
  }
  @keyframes transform{
      from{ transform: rotate(0deg);}
      to{transform: rotate(180deg);}
  }
  @keyframes normalimg{
      from{ transform: rotate(180deg);}
      to{transform: rotate(0deg);}
  }

  .add-box{
    position: fixed;
    top: 0px;
    left: 0px;
    right: 0px;
    bottom: 0px;
    margin: auto;
    width: 700px;
    height: 200px;
  }
  .add-input{
    margin: 45px;
    animation:add-input 0.5s
  }

  .add-input-high{
    margin: 35px;
    animation:add-input-high 0.5s
  }
    @keyframes add-input{
      from{ margin: 35px;}
      to{margin: 45px;}
  }
  @keyframes add-input-high{
      from{ margin: 45px;}
      to{margin: 35px;}
  }
  .add-i{
      height: 100px;
      float:left;
      background: #fff;
      /*text-align: center;*/
      /*#F2F2F2*/
      
  }
  .add-i-none{
      animation:add-i 0.5s;
      
  }
  .add-i-shadow{
      box-shadow:10px 10px 10px rgba(136, 136, 136, 0.5);
      animation:add-i-shadow 0.5s;
  }
  @keyframes add-i{
       from{  
       box-shadow:10px 10px 10px rgba(136, 136, 136, 0.5);}
      to{ box-shadow:0px 0px 0px rgba(136, 136, 136, 0.5);
        }
  }
@keyframes add-i-shadow{
    from{  box-shadow:0px 0px 0px rgba(136, 136, 136, 0.5);}
      to{ box-shadow:10px 10px 10px rgba(136, 136, 136, 0.5);}
}
  .add-head{
      width: 50px;
       border-radius:50px 0 0 50px;
border-top: 1px solid  #63B8FF;
    border-bottom: 1px solid  #63B8FF;
       
  }
.add-mid{
 width: 50px;
  border-top: 1px solid  #63B8FF;
    border-bottom: 1px solid  #63B8FF;
    background: #63B8FF;
    color: #fff;
    font-size: 25px;
      line-height: 102px;
    cursor: pointer;
  }
.add-tail{
      width: 50px;
       border-radius:0 50px 50px 0;
    border-top: 1px solid  #63B8FF;
    border-bottom: 1px solid  #63B8FF;
    background: #63B8FF;
      color: #fff;
      font-size: 25px;
      line-height: 102px;
    cursor: pointer;
      
  }
  .add-main{
      width: 450px;
      border-top: 1px solid  #63B8FF;
    border-bottom: 1px solid  #63B8FF;  
  }
  .input-main{
      border: 0px;
      height: 80px;
      margin: 10px;
      font-size: 30px;
      overflow: scroll;
       outline:none;    
  }
  .add-font{

  }
  /*.add-btn{
    height: 102px;
    width: 80px;
    border: 0px;
    background: #63B8FF;
    color: white;
    border-radius: 10px;
}*/
  
</style>
