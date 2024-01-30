<template>
    <div class="col-1">
      <ul>
        <li>Parent: </li>
        <li>bool: {{bool}} </li>
        <li> text: {{text}} </li>
      </ul>
      <div class="col-2">
        <ul class="second-list">
         <li>Child:</li>
         <li>bool: {{bool}}</li>
         <li>text: {{text}}</li>
        </ul>
        <hr>
        <div class="input-changers">
          <button type="button" id="boolean-changer" @click="changeBoolean" data-testid="state">change bool</button>
          <input v-model="text" id="text-changer" data-test="dynamic-field"/>
        </div>
      </div>
    </div>
</template>

<script setup>
  import { defineModel, ref } from 'vue';
  const text = defineModel("text", { default: "Mike" });
  const bool = defineModel("bool", { default: true});

  const changeBoolean = () => {
    bool.value = !bool.value
    console.log(bool.value)
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  ul li {
    list-style-type: none;
  }

  .second-list {
    padding-bottom: 8px;
  }
  .col-1  {
    position: relative;
    width: 60vw;
    height: 300px;
    margin: 40vh auto;
    border: none;
    padding-left: 18px;
    padding-top: 10px;
    background: #BDB76B;
  }

  .col-2  {
    position: absolute;
    width: 55vw;
    border: none;
    left:20px;
    top: 120px;
    height: 165px;
    padding-top: 10px;
    padding-left: 10px;
    background: LightGray;
  }

  .input-changers {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
  }

  #boolean-changer {
     margin-bottom: 10px;
     width: 100px;
     background: blue;
     color: white;
     border-radius: 5px;
     padding: 3px 2px;
  }

  #text-changer {
    width: 170px;
  }
</style>