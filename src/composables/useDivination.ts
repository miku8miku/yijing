import { ref, computed } from 'vue';
import { YaoType, getYaoType } from '@/data/hexagrams';

export interface YaoResult {
  value: number;
  type: YaoType;
}

export function useDivination() {
  const currentYao = ref<number>(1);
  const currentChange = ref<number>(1);
  const totalSticks = ref<number>(49);
  const leftPile = ref<number>(0);
  const rightPile = ref<number>(0);
  const guaYiVal = ref<number>(0);
  const leftRemainder = ref<number>(0);
  const rightRemainder = ref<number>(0);
  const changeResults = ref<number[]>([]);
  const yaoResults = ref<YaoResult[]>([]);

  const hexagramBinary = computed(() => {
    let binary = '';
    for (let i = yaoResults.value.length - 1; i >= 0; i--) {
      binary += yaoResults.value[i].type.isYang ? '1' : '0';
    }
    return binary;
  });

  const movingYaos = computed(() => {
    return yaoResults.value
      .map((yao, index) => yao.type.isMoving ? index : -1)
      .filter(index => index !== -1);
  });

  function fenEr(): { left: number; right: number } {
    const left = Math.floor(Math.random() * (totalSticks.value - 2)) + 1;
    const right = totalSticks.value - left;
    leftPile.value = left;
    rightPile.value = right;
    return { left, right };
  }

  function guaYi(): void {
    guaYiVal.value = 1;
    rightPile.value -= 1;
  }

  function dieSi(): number {
    leftRemainder.value = leftPile.value % 4 || 4;
    rightRemainder.value = rightPile.value % 4 || 4;
    const totalRemainder = guaYiVal.value + leftRemainder.value + rightRemainder.value;
    
    changeResults.value.push(totalRemainder);
    totalSticks.value = totalSticks.value - totalRemainder;
    
    return totalRemainder;
  }

  function nextChange(): void {
    currentChange.value++;
    resetForNewChange();
  }

  function resetForNewChange(): void {
    leftPile.value = 0;
    rightPile.value = 0;
    guaYiVal.value = 0;
    leftRemainder.value = 0;
    rightRemainder.value = 0;
  }

  function completeYao(): void {
    const yaoValue = totalSticks.value / 4;
    const yaoType = getYaoType(yaoValue);
    yaoResults.value.push({ value: yaoValue, type: yaoType });
  }

  function nextYao(): void {
    currentYao.value++;
    currentChange.value = 1;
    changeResults.value = [];
    totalSticks.value = 49;
    resetForNewChange();
  }

  function reset(): void {
    currentYao.value = 1;
    currentChange.value = 1;
    totalSticks.value = 49;
    leftPile.value = 0;
    rightPile.value = 0;
    guaYiVal.value = 0;
    leftRemainder.value = 0;
    rightRemainder.value = 0;
    changeResults.value = [];
    yaoResults.value = [];
  }

  return {
    currentYao,
    currentChange,
    totalSticks,
    leftPile,
    rightPile,
    guaYiVal,
    leftRemainder,
    rightRemainder,
    changeResults,
    yaoResults,
    hexagramBinary,
    movingYaos,
    fenEr,
    guaYi,
    dieSi,
    nextChange,
    resetForNewChange,
    completeYao,
    nextYao,
    reset
  };
}
