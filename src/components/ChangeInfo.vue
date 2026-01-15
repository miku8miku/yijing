<template>
  <div class="change-info">
    <div class="change-number">本变归奇：<span>{{ remainderCount }}</span> 根</div>
    <div class="change-detail">{{ changeDetail }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  remainderCount: number;
  currentChange: number;
}>();

const changeDetail = computed(() => {
  if (props.currentChange === 1) {
    return `第一变归奇数为 ${props.remainderCount}（应为5或9）`;
  } else {
    const changeNames = ['', '一', '二', '三'];
    return `第${changeNames[props.currentChange]}变归奇数为 ${props.remainderCount}（应为4或8）`;
  }
});
</script>

<style scoped>
.change-info {
  text-align: center;
  padding: 0.5vh;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  margin: 0;
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

.change-number {
  font-size: 1.8vh;
  color: var(--accent-color);
  display: block;
}

.change-detail {
  font-size: 1.2vh;
  color: var(--secondary-color);
  display: block;
}

@media (max-width: 768px) {
  .change-info {
    height: 5vh;
  }
  
  .change-number {
    font-size: 1.6vh;
  }
  
  .change-detail {
    font-size: 1vh;
  }
}
</style>
