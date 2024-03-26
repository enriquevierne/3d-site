<script setup>
import { ref } from "vue";
</script>

<template>
  <div class="flex flex-wrap items-center justify-center gap-10">
    <div class="w-24 h-24 bg-gradient-to-br from-blue-600 to-amber-800">1</div>
    <div class="w-32 h-32 bg-gradient-to-br from-amber-600 to-green-800">2</div>
    <div class="w-12 h-12 bg-gradient-to-br from-green-600 to-orange-800">3</div>
    <div class="bg-gradient-to-br from-orange-600 to-teal-800 h-44 w-44">4</div>
    <div class="w-64 h-64 bg-gradient-to-br from-teal-600 to-violet-800">5</div>
    <div class="w-6 h-6 bg-gradient-to-br from-violet-600 to-blue-800">6</div>
  </div>
</template>
