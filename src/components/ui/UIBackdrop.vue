<script setup></script>
<template>
  <div class="animation-container">
    <div class="question" id="question1">?</div>
    <div class="question" id="question2">?</div>
    <div class="question" id="question3">?</div>
    <div id="plate">
      <div id="oval-outer">
        <div id="oval-inner"></div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.animation-container {
  position: absolute;
  /* display:inline; */
  pointer-events: none;
  margin: 0 auto;
  width: 500px;
  height: 500px;
  z-index: 1;
  .question {
    font-family: Cookie;
    height: 75px;
    width: 75px;
    font-size: 4em;
    text-align: center;
    display: inline-block;
    /* overflow: hidden; */
    &#question1 {
      left: 100px;
      top: 450px;
      color: rgb(255, 0, 0, 15%);
    }
    &#question2 {
      left: 130px;
      top: 400px;
      color: rgb(0, 0, 255, 15%);
    }
    &#question3 {
      left: 145px;
      top: 550px;
      color: rgb(0, 255, 0, 15%);
    }
  }
  #plate {
    width: 500px;
    z-index: 1;
    #oval-outer {
      background-color: rgba(139, 131, 46, 0.55);
      border-radius: 50%;
      height: 200px;
      #oval-inner {
        position: relative;
        background-color: rgb(46, 139, 87, 20%);
        border-radius: 50%;
        width: 350px;
        height: 100px;
        left: 75px;
        top: 50px;
      }
    }
  }
}
</style>
