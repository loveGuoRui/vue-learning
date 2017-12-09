<template>
  <div>
    {{isShown}}--------
    <div class="container form-body hd-scroll" id="try">
      <div class="loan-row" id="show1" v-show="isShown==1">
        <div class="loan-row-first">查看：</div>
        <div class="loan-row-second">
          <span>第</span>
          <input v-model="totalTerm" type='number'>
          <span>期</span>
        </div>
        <div class="loan-row-third">
          <img src="static/FinancialCal/open.png" alt="" @click="hide()">
        </div>
      </div>
      <div class="hide-img-top">
        <div class="hide-img" v-show="isShown==2" @click="hideAgin()">
          <img src="static/FinancialCal/down.png" alt="">
        </div>
      </div>
      <div class="loan-row2" v-for="item in calResultList" v-bind:key="item.Periods" :id="'anchor-' + item.Periods">
        <div class="loan-row-item1">
          <div class="text">{{repayTypeName}}</div>
          <span class="number">第{{item.Periods}}期</span>
        </div>
        <div class="loan-row-text">
          <div class="text">还款本金</div>
          <div class="number">{{item.ShouPayAmt }}元</div>
        </div>
        <div class="loan-row-text">
          <div class="text">还款利息</div>
          <div class="number">{{item.Interest }}元</div>
        </div>
        <div class="loan-row-text">
          <div class="text">还款总额</div>
          <div class="number">{{totalAmt }}元</div>
        </div>
        <div class="loan-row-text">
          <div class="text">贷款余额</div>
          <div class="number">{{item.Balance }}元</div>
        </div>
      </div>
      <div class="tip-ft">温馨提示</div>
      <div class="tip-ft2">计算结果仅供参考</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'test',
  data () {
    return {
       calResultList: [1,2,3,4,5,6,7,8,9,10,11,12,13],
      repayType: '',
      loanTime: '',
      totalAmt: '',
      totalTerm: '',
      isShown: 1,
      scrollTop: '',
      repayTypeName: '',
      postData: ''
    }
  },
   created () {
      // 添加滑动监听事件   无效的监听事件  我觉得他应该是监听的最外层div的滑动


  },
   mounted: function () {
    console.log(document)
    console.log(window)
    
   
    // document.getElementById('content-box').onscroll = this.handleScroll //监听content-box内的滑动事件
    // window.addEventListener('scroll', this.handleScroll,false) 
 this.$el.querySelector('#try').addEventListener('scroll', this.handleScroll,false)
        

      },
   methods: {
    tap:function(){
        // window.location.hash = "#test";
        document.getElementById('content-box').scrollTop=0
    },
    handleScroll () {

      console.log('-------------------------`12----------------------')
      // console.log(document.getElementById('content-box').scrollTop)
      // this.top=document.getElementById('content-box').scrollTop
        this.isShown = this.isShown +1
        console.log(this.isShown)

    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
    position: absolute;
    top: 44px;
    left:0;
    right:0;
    bottom: 0;
}
.LoanCalResult{
  font-family: 'PingFangSC-Light';
  font-size: 0.14rem;
  color: #333;
}
.loan-row{
  background: #fff;
  height: 0.5rem;
  line-height: 0.5rem;
}
.loan-row-first{
  margin-left: 0.15rem;
  width: 15%;
  display: inline-block;
}
.loan-row-second{
  width: 45%;
  display: inline-block;
}
.loan-row-second input{
  width: 30%;
  text-align: center;
  background: #ECECEC;
  border-radius: 0.05rem;
  padding: 0.07rem;
}

.btn-row{
  border-radius: 0.05rem;
  background-color: #1577e4;
  color: #FFFFFF;
  font-size: 0.12rem;
  height: 0.28rem;
  margin-right: 0.07rem;
}
.loan-row2{
  display: block;
  background: #fff;
  margin-top: 8px;
  border: 0.01rem solid #f5f5f5;
}
.loan-row-item1{
  border-bottom: 0.01rem solid #f5f5f5;
  height: 0.44rem;
  line-height: 0.44rem;
  padding: 0 0.15rem;
}
.loan-row-item1 .text{
  width: 27%;
  display: inline-block;
}
.loan-row-text{
  margin: 0.1rem 0.15rem;
}
.loan-row-text .text{
  display: inline-block;
  width: 25%;
}
.loan-row-text .number{
  display: inline-block;
  float: right;
  padding-right: 0.3rem;
}
.loan-row-item1 .number{
  float: right;
  padding-right: 0.3rem;
}
.loan-row-third{
  display: inline-block;
  float: right;
  padding-right: 0.15rem;
}
.tip-ft{
  margin:0.25rem 0 0.1rem 0.15rem;
  color:#ff532b;
  font-size: 0.14rem;
}
.tip-ft2{
  color:#999;
  margin:0 0.4rem;
  font-size: 0.12rem;
  margin-bottom: 0.4rem;
}
.hide-img{
  position: relative;
  left: 92%;
  line-height: 0.44rem;
  top: 50%;
  margin: -0.2rem 0;
}
.hide-img-top{
  width: 100%;
  height: 0.44rem;
  position: fixed;
  line-height: 0.44rem;
  z-index: 49;
}
.form-body{
  background: #f5f5f5;
}
img{
  vertical-align: inherit;
}
.hd-scroll{
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}
</style>
