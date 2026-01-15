<template>
  <div class="progress-bar">
    <div class="progress-fill" :style="{ width: progress + '%' }"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  currentYao: number;
  currentChange: number;
}>();

const progress = computed(() => {
  const totalSteps = 18;
  const currentStep = (props.currentYao - 1) * 3 + props.currentChange;
  return (currentStep / totalSteps) * 100;
});
</script>

<style scoped>
.progress-bar {
  width: 100%;
  height: 0.5vh;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 3px;
  margin: 0.8vh 0;
  overflow: hidden;
  flex-shrink: 0;
}

.progress-fill {
  height: 100%;
  background: linear-gradient(90deg, var(--primary-color), var(--accent-color));
  border-radius: 2px;
  transition: width 0.5s ease;
}
</style>
