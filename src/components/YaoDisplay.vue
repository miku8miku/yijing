<template>
  <div class="yao-display">
    <div class="yao-row" v-for="yaoNum in 6" :key="yaoNum" :id="`yaoRow${7-yaoNum}`">
      <span class="yao-label">{{ yaoLabels[6-yaoNum] }}</span>
      <div class="yao-line" :class="{ 'yin-line': yaoResults[6-yaoNum]?.type.isYang === false }">
        <div class="yao-segment" :class="{ pending: !yaoResults[6-yaoNum] }"></div>
        <div class="yao-segment" :class="{ pending: !yaoResults[6-yaoNum] }"></div>
      </div>
      <span class="yao-value">
        {{ yaoResults[6-yaoNum]?.value || '-' }}
        <span class="yao-moving" v-if="yaoResults[6-yaoNum]?.type.isMoving">动</span>
      </span>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { YaoResult } from '@/composables/useDivination';

const props = defineProps<{
  yaoResults: YaoResult[];
}>();

const yaoLabels = ['初爻', '二爻', '三爻', '四爻', '五爻', '上爻'];

const displayResults = computed(() => {
  const arr = Array(6).fill(null);
  props.yaoResults.forEach((yao, index) => {
    arr[index] = yao;
  });
  return arr;
});
</script>

<style scoped>
.yao-display {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
  justify-content: center;
  gap: clamp(0.5vh, 0.8vh, 1vh);
  flex: 1;
  padding: clamp(0.8vh, 1vh, 1.5vh);
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  margin: 0;
  min-height: 0;
  height: auto;
  max-height: none;
  flex-shrink: 1;
  overflow-y: auto;
}

.yao-row {
  display: flex;
  align-items: center;
  gap: 1vw;
  height: 2.5vh;
}

.yao-label {
  width: 3vw;
  text-align: right;
  color: var(--secondary-color);
  font-size: 1.5vh;
}

.yao-line {
  display: flex;
  gap: 0;
}

.yao-line.yin-line {
  gap: 0.8vw;
}

.yao-segment {
  width: 6vw;
  height: 1.2vh;
  background: var(--accent-color);
  border-radius: 2px;
  transition: all 0.3s ease;
}

.yao-segment.pending {
  background: rgba(212, 165, 116, 0.3);
}

.yao-value {
  width: 3vw;
  font-size: 1.5vh;
  text-align: center;
  color: var(--accent-color);
  font-weight: bold;
}

.yao-moving {
  font-size: 1.2vh;
  color: #ff6b6b;
  margin-left: 0.3vw;
}

@media (max-width: 768px) {
  .yao-label {
    font-size: 1.2vh;
    width: 4vw;
  }
  
  .yao-segment {
    width: 10vw;
    height: 1vh;
  }
  
  .yao-value {
    font-size: 1.2vh;
    width: 4vw;
  }
  
  .yao-moving {
    font-size: 1vh;
  }
}
</style>
