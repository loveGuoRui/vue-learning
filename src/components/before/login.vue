<template>
  <div>
  <div class="login-bg">
    <div class="login-box" >
      <div v-bind:class="{ 'login-dot-big': show,'login-dot-small':!show}" class="pointer" @mouseover="over('login')" @click="toLogin()" >
        <div class="dot-font" style="top:50%;margin-top:-10px;    position: relative;">登陆</div>
      </div>
      <div v-bind:class="{ 'register-dot-big': !show,'register-dot-small':show}"  class="pointer"  @mouseover="over('reg')" >
        <div class="dot-font" style="top:50%;margin-top:-10px;    position: relative;">注册</div>
      </div>
    </div>
  </div>
  <!--<div class="login-top">
    <div class="login-box" v-show="login">
      <div class="login-content">
        <input class="email" placeholder="邮箱" v-model="email"/>
        <input class="passwd" placeholder="密码" v-model="passwd"/>
      </div>
    </div>
  </div>-->
  </div>
</template>

<script>
import router from '../../router/index';
export default {
  name: 'login',
  data () {
    return {
      show:true,
      login:true,
      email:'',
      passwd:''
    }
  },
  methods:{
    over:function(e){
      if(e=='login'){
          this.show=true;
      }else{
        this.show=false;
      }
        this.first=false;
    },
    toLogin:function(){
      this.login = true;
      router.replace('home')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .login-bg{
    padding: 200px 0;
    
  }
  .login-box{

    text-align: center;
    display: flex;
    width: 600px;
    height: 200px;
     margin: auto;
     color: #fff;
     /*background: red;*/
  }


.login-dot-big{
  margin: 0 auto;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: #63B8FF;
  animation: bigger 0.5s;
}


.login-dot-small{
  margin: 0 auto;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background: #63B8FF;
  animation: smaller 0.5s;
}


.register-dot-big{
  margin: 0 auto;
  border-radius: 50%;
  height: 200px;
  width: 200px;
  background: 	#4EEE94;
  animation: bigger 0.5s;
}
.register-dot-small{
  margin: 0 auto;
  border-radius: 50%;
  height: 100px;
  width: 100px;
  background: 	#4EEE94;
  animation: smaller 0.5s;
}

@keyframes bigger {
   
from {height: 100px;
  width: 100px;}
to {height: 200px;
  width: 200px;}
  }
  @keyframes smaller {
   
from {height: 200px;
  width: 200px;}
to {height: 100px;
  width: 100px;}
  }

.pointer{
 cursor: pointer;

}
  .dot-font{

    /*left:35%;*/
    
  }
  .login-top{
    position: absolute;
    top:200px;
    z-index: 999;
  }
  .login-content{
    margin: auto;
    height: 100px;
    width: 200px;
  }
</style>
