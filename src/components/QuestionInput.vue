<template>
  <div class="question-section">
    <div class="instruction">
      <div>请静心凝神，在心中默想您要占问之事。</div>
      <div><span class="highlight-text">一卦只问一事，心诚则灵。</span></div>
    </div>
    <input 
      v-model="question" 
      type="text" 
      class="question-input" 
      placeholder="请输入您要占问的事情（可选）"
    >
    <div class="btn-container" style="margin-top: 2vh;">
      <button class="btn btn-accent" @click="handleStart">开始起卦</button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const question = ref<string>('');

const emit = defineEmits<{
  start: [question: string];
}>();

function handleStart() {
  emit('start', question.value);
}
</script>

<style scoped>
.question-section {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
}

.instruction {
  color: var(--secondary-color);
  font-size: 2.2vh;
  margin-bottom: 2vh;
  line-height: 1.6;
  text-align: center;
  width: 100%;
  min-height: 8vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  gap: 0.5vh;
}

.highlight-text {
  color: var(--accent-color);
  font-weight: bold;
  font-size: 1.1em;
  display: inline;
}

.question-input {
  width: 80%;
  max-width: 600px;
  padding: 1.5vh 1vw;
  font-size: 2vh;
  background: rgba(0, 0, 0, 0.3);
  border: 1px solid var(--secondary-color);
  border-radius: 8px;
  color: var(--text-color);
  font-family: inherit;
  margin: 0 auto;
}

.btn-container {
  display: flex;
  justify-content: center;
  gap: 1vw;
  flex-wrap: wrap;
}

@media (max-width: 768px) {
  .instruction {
    font-size: 1.8vh;
    margin-bottom: 1.5vh;
    min-height: 10vh;
  }
  
  .question-input {
    font-size: 1.8vh;
    padding: 1.2vh 1vw;
  }
}
</style>
