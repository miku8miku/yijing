<template>
  <div class="step-indicator">
    <div 
      v-for="step in 8" 
      :key="step"
      class="step-dot"
      :class="{ 
        active: step === activeStep,
        completed: step < activeStep
      }"
      :data-step="step"
    >
      {{ stepLabels[step - 1] }}
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  activeStep: number;
}>();

const stepLabels = ['问', '一', '二', '三', '四', '五', '六', '卦'];
</script>

<style scoped>
.step-indicator {
  display: flex;
  justify-content: center;
  gap: 1vw;
  padding: 1vh 0;
  flex-shrink: 0;
}

.step-dot {
  width: 3vh;
  height: 3vh;
  border-radius: 50%;
  background: var(--card-bg);
  border: 1px solid var(--secondary-color);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2vh;
  transition: all 0.3s ease;
}

.step-dot.active {
  background: var(--accent-color);
  color: #1a1a2e;
  transform: scale(1.1);
  box-shadow: 0 0 10px rgba(255, 215, 0, 0.5);
}

.step-dot.completed {
  background: var(--primary-color);
  border-color: var(--accent-color);
}

@media (max-width: 768px) {
  .step-dot {
    width: 2.5vh;
    height: 2.5vh;
    font-size: 1vh;
  }
}
</style>
