<template>
  <div id="myCol">
    <p style="padding:10px;">我的收藏</p>
    <div class="colList">
      <div class="colItem">
        <div class="colImg">
          <img src="../../assets/1.jpg">
          <div class="colIcon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="colBar">
          <div class="colPho">
            <img src="../../assets/99.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="colBar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="colItem">
        <div class="colImg">
          <img src="../../assets/1.jpg">
          <div class="colIcon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="colBar">
          <div class="colPho">
            <img src="../../assets/99.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="colBar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="colItem">
        <div class="colImg">
          <img src="../../assets/1.jpg">
          <div class="colIcon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="colBar">
          <div class="colPho">
            <img src="../../assets/99.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="colBar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="colItem">
        <div class="colImg">
          <img src="../../assets/1.jpg">
          <div class="colIcon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="colBar">
          <div class="colPho">
            <img src="../../assets/99.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="colBar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="colItem">
        <div class="colImg">
          <img src="../../assets/1.jpg">
          <div class="colIcon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="colBar">
          <div class="colPho">
            <img src="../../assets/99.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="colBar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
      <div class="colItem">
        <div class="colImg">
          <img src="../../assets/1.jpg">
          <div class="colIcon">
            <i class="iconfont icon-shoucang1"></i>
          </div>
        </div>
        <div class="colBar">
          <div class="colPho">
            <img src="../../assets/99.jpg">
            <a class="col-nick-name">昵称</a>
          </div>
          <div class="colBar-icon">
            <i class="iconfont icon-shoucang2"></i>
            <i class="iconfont icon-liuyan"></i>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  export default {
    data() {
      return {

      }
    },
    components: {

    }
  }
</script>

<style scoped lang='less'>
  #myCol {
    position: absolute;
    top: 0;
    left: 25%;
    width: 70%;
    .colList {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;
      width: 100%;
      .colItem {
        margin-bottom: 30px;
        width: 30%;
        height: 300px;
        .colBar {
          position: relative;
          display: flex;
          justify-content: space-between;
          margin-top: 5px;
          height: 15%;
          .colPho {
            height: 37px;
            .col-nick-name{
              position: absolute;
              top: 8px;
              left: 40px;
              height: 100%;
            }
            img{
              border-radius: 50%;
              height: 100%;
            }
          }
          .colBar-icon{
            line-height: 37px;
            i{
              margin-right: 5px;
              font-size: 25px;
            }
          }
        }
        .colImg {
          position: relative;
          height: 85%;
          .colIcon {
            position: absolute;
            top: 5px;
            right: 5px;
            i {
              font-size: 30px;
              color: #fff;
            }
          }
          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
</style>