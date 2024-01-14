<script setup>
import { ref } from "vue";
import data from "@/assets/data.json";

const copiedData = ref(null);

function copyToClipboard(value) {
  navigator.clipboard.writeText(value);
  copiedData.value = value;
}

function getFirstLetter(value) {
  if (value.charAt(0) === "(") {
    return true;
  }
  return false;
}
</script>

<template>
  <div v-if="!!copiedData" class="toast-result">
    Copied the text: {{ copiedData }}
  </div>
  <div
    v-for="(title, titleName) in data"
    :key="titleName"
    style="padding: 0 1rem"
  >
    <h2 style="margin: 2px">{{ titleName }}</h2>
    <div v-for="(subTitle, subTitleName) in title" :key="subTitleName">
      <h3 style="margin: 2px">{{ subTitleName }}</h3>
      <div v-for="(lineTitle, lineTitleName) in subTitle" :key="lineTitleName">
        <div
          v-for="(trueTitle, trueTitleName) in lineTitle"
          :key="trueTitleName"
          style="margin: 0 0 2px 1rem"
        >
          {{ trueTitleName }}
          <button
            type="button"
            @click="copyToClipboard(trueTitle)"
            :disabled="getFirstLetter(trueTitle)"
          >
            {{ trueTitle }}
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- <div>{{ data }}</div> -->
</template>

<style scoped>
.toast-result {
  position: fixed;
  top: 4rem;
  right: 2rem;
  background-color: rgb(255, 199, 150);
  padding: 10px;
  border: 1px solid #000;
}
</style>
