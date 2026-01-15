<template>
  <div class="yarrow-display">
    <div class="yarrow-pile">
      <div class="pile-label">左堆（天）</div>
      <div class="pile-count">{{ leftPile }}</div>
      <div class="yarrow-sticks" :id="`leftSticks`">
        <div class="stick" v-for="i in Math.min(leftPile, 50)" :key="`left-${i}`"></div>
      </div>
    </div>
    <div class="yarrow-pile">
      <div class="pile-label">未分</div>
      <div class="pile-count">{{ centerCount }}</div>
      <div class="yarrow-sticks" :id="`centerSticks`">
        <div class="stick" v-for="i in Math.min(centerCount, 50)" :key="`center-${i}`"></div>
      </div>
    </div>
    <div class="yarrow-pile">
      <div class="pile-label">右堆（地）</div>
      <div class="pile-count">{{ rightPile }}</div>
      <div class="yarrow-sticks" :id="`rightSticks`">
        <div class="stick" v-for="i in Math.min(rightPile, 50)" :key="`right-${i}`"></div>
      </div>
    </div>
  </div>

  <div class="hand-section" v-if="showHandSection">
    <div class="hand-label">归奇明细</div>
    <div class="hand-sticks">
      <div class="finger-gap">
        <div>挂一</div>
        <div class="count">{{ guaYiVal }}</div>
      </div>
      <div class="finger-gap">
        <div>左余</div>
        <div class="count">{{ leftRemainder }}</div>
      </div>
      <div class="finger-gap">
        <div>右余</div>
        <div class="count">{{ rightRemainder }}</div>
      </div>
      <div class="finger-gap">
        <div>归奇</div>
        <div class="count">{{ totalRemainder }}</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps<{
  leftPile: number;
  rightPile: number;
  centerCount: number;
  guaYiVal: number;
  leftRemainder: number;
  rightRemainder: number;
  showHandSection: boolean;
}>();

const totalRemainder = computed(() => {
  return props.guaYiVal + props.leftRemainder + props.rightRemainder;
});
</script>

<style scoped>
.yarrow-display {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2vw;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  height: 12vh;
  align-content: center;
  flex-shrink: 0;
}

.yarrow-pile {
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
}

.pile-label {
  font-size: 1.5vh;
  color: var(--secondary-color);
  margin-bottom: 0.5vh;
}

.pile-count {
  font-size: 4vh;
  color: var(--accent-color);
  font-weight: bold;
  line-height: 1.2;
  height: 5vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.yarrow-sticks {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 2px;
  margin: 0.5vh auto;
  height: 2vh;
  min-width: 100%;
  overflow: hidden;
}

.stick {
  width: 3px;
  height: 2vh;
  background: linear-gradient(to bottom, #D4A574, #8B4513);
}

.hand-section {
  background: rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  padding: 1vh 1vw;
  margin: 0 auto;
  width: 100%;
  max-width: 800px;
  text-align: center;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-shrink: 0;
}

.hand-label {
  color: var(--secondary-color);
  font-size: 1.5vh;
  text-align: center;
  margin-bottom: 0.5vh;
}

.hand-sticks {
  display: flex;
  justify-content: center;
  gap: 2vw;
  height: 5vh;
  align-items: center;
}

.finger-gap {
  background: rgba(139, 69, 19, 0.3);
  padding: 0.5vh 1vw;
  border-radius: 6px;
  min-width: 4vw;
  text-align: center;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.finger-gap div:first-child {
  font-size: 1.2vh;
  color: var(--secondary-color);
}

.finger-gap .count {
  font-size: 2vh;
  color: var(--accent-color);
}

@media (max-width: 768px) {
  .yarrow-display {
    height: 10vh;
  }
  
  .pile-label {
    font-size: 1.2vh;
  }
  
  .pile-count {
    font-size: 3vh;
    height: 4vh;
  }
  
  .stick {
    height: 2vh;
  }
  
  .hand-section {
    height: 8vh;
  }
  
  .hand-label {
    font-size: 1.2vh;
  }
  
  .hand-sticks {
    height: 4vh;
  }
  
  .finger-gap {
    padding: 0.4vh 0.8vw;
    min-width: 6vw;
  }
  
  .finger-gap div:first-child {
    font-size: 1vh;
  }
  
  .finger-gap .count {
    font-size: 1.8vh;
  }
}
</style>
