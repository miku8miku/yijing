<template>
  <div class="container">
    <Header />

    <StepIndicator :active-step="activeStep" />

    <!-- 第一步：提问界面 -->
    <div class="main-content" v-if="currentView === 'question'">
      <h2 class="section-title">诚心问事</h2>
      <div class="content-scroll">
        <QuestionInput @start="startDivination" />
      </div>
    </div>

    <!-- 第二步～第七步：演算界面 -->
    <div class="main-content" v-if="currentView === 'divination'">
      <h2 class="section-title">
        第 <span>{{ yaoNumNames[currentYao - 1] }}</span> 爻 · 
        第 <span>{{ changeNames[currentChange - 1] }}</span> 变
      </h2>
      
      <ProgressBar :current-yao="currentYao" :current-change="currentChange" />

      <div class="content-scroll">
        <p class="instruction" v-html="stepInstruction"></p>

        <YarrowDisplay 
          :left-pile="leftPile"
          :right-pile="rightPile"
          :center-count="centerCount"
          :gua-yi-val="guaYiVal"
          :left-remainder="leftRemainder"
          :right-remainder="rightRemainder"
          :show-hand-section="guaYiVal > 0"
        />

        <ChangeInfo 
          v-if="showChangeInfo"
          :remainder-count="totalRemainder"
          :current-change="currentChange"
        />

        <YaoDisplay :yao-results="yaoResults" />
      </div>

      <div class="btn-container">
        <div class="btn-group">
          <button class="btn btn-primary" v-if="showBtnFenEr" @click="handleFenEr">
            分二（象两仪）
          </button>
          <button class="btn btn-primary" v-if="showBtnGuaYi" @click="handleGuaYi">
            挂一（象三才）
          </button>
          <button class="btn btn-primary" v-if="showBtnDieSi" @click="handleDieSi">
            揲四（象四时）
          </button>
          <button class="btn btn-accent" v-if="showBtnNextChange" @click="handleNextChange">
            下一变
          </button>
          <button class="btn btn-accent" v-if="showBtnNextYao" @click="handleNextYao">
            确定此爻，继续下一爻
          </button>
          <button class="btn btn-accent" v-if="showBtnShowResult" @click="handleShowResult">
            查看结果
          </button>
        </div>
      </div>
    </div>

    <!-- 第八步：结果界面 -->
    <div class="main-content" v-if="currentView === 'result'">
      <h2 class="section-title">卦象已成</h2>
      
      <div class="content-scroll">
        <div class="result-section">
          <div class="result-main">
            <div class="gua-symbol">{{ hexagram?.symbol }}</div>
            <div class="gua-name">{{ hexagram?.name }}</div>
          </div>
          <div class="result-left">
            <div class="column-title">本卦详解</div>
            <div class="gua-judgment">
              <h3>【卦辞】</h3>
              <p>{{ hexagram?.judgment }}</p>
            </div>
            <div class="gua-explanation">
              <h3>【解释】</h3>
              <p>{{ hexagram?.explanation }}</p>
            </div>
          </div>
          <div class="result-right">
            <div class="column-title">变化推演</div>
            <div id="yaoTextSection">
              <!-- 动爻详解会在此渲染 -->
            </div>
            <div class="bian-gua" v-if="showBianGua">
              <h3>【变卦】<span>{{ bianHexagram?.name }}</span></h3>
              <div class="gua-symbol" style="font-size: 1.5em;">{{ bianHexagram?.symbol }}</div>
              <div class="gua-judgment">
                <strong>【卦辞】</strong>
                <p>{{ bianHexagram?.judgment }}</p>
                <strong>【解释】</strong>
                <p>{{ bianHexagram?.explanation }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="btn-container">
        <div class="btn-group">
          <button class="btn btn-accent" @click="restart">重新起卦</button>
        </div>
      </div>
    </div>

    <footer>
      <p>大衍筮法 · 源自《周易·系辞传》</p>
      <p>「大衍之数五十，其用四十有九。分而为二以象两，挂一以象三，揲之以四以象四时，归奇于扐以象闰。」</p>
    </footer>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useDivination, YaoResult } from '@/composables/useDivination';
import { hexagramData, yaoNumNames, changeNames, getYaoType, Hexagram } from '@/data/hexagrams';
import Header from '@/components/Header.vue';
import StepIndicator from '@/components/StepIndicator.vue';
import ProgressBar from '@/components/ProgressBar.vue';
import QuestionInput from '@/components/QuestionInput.vue';
import YarrowDisplay from '@/components/YarrowDisplay.vue';
import ChangeInfo from '@/components/ChangeInfo.vue';
import YaoDisplay from '@/components/YaoDisplay.vue';

const {
  currentYao,
  currentChange,
  totalSticks,
  leftPile,
  rightPile,
  guaYiVal,
  leftRemainder,
  rightRemainder,
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
} = useDivination();

const currentView = ref<'question' | 'divination' | 'result'>('question');
const step = ref<number>(1);
const currentStep = ref<'fenEr' | 'guaYi' | 'dieSi'>('fenEr');
const changeResults = ref<number[]>([]);
const totalRemainder = ref<number>(0);
const showChangeInfo = ref<boolean>(false);
const hexagram = ref<Hexagram | undefined>();
const bianHexagram = ref<Hexagram | undefined>();
const showBianGua = ref<boolean>(false);

const centerCount = computed(() => {
  if (currentStep.value === 'fenEr') return totalSticks.value;
  if (currentStep.value === 'guaYi') return totalSticks.value - rightPile.value;
  return 0;
});

const activeStep = computed(() => currentYao.value + 1);

const stepInstruction = computed(() => {
  if (currentStep.value === 'fenEr') {
    return '点击"分二"将四十九根蓍草随意分成两堆';
  } else if (currentStep.value === 'guaYi') {
    return '已将蓍草分为左右两堆。<br>点击"挂一"从右堆取出一根夹于指间。';
  } else if (currentStep.value === 'dieSi') {
    return '已从右堆取出一根夹于小指间。<br>点击"揲四"将左右两堆各以四根为一组数之。';
  }
  return '';
});

const showBtnFenEr = computed(() => currentStep.value === 'fenEr');
const showBtnGuaYi = computed(() => currentStep.value === 'guaYi');
const showBtnDieSi = computed(() => currentStep.value === 'dieSi');
const showBtnNextChange = computed(() => currentChange.value < 3 && currentStep.value === 'dieSi' && totalRemainder.value > 0);
const showBtnNextYao = computed(() => currentChange.value === 3 && currentStep.value === 'dieSi' && currentYao.value < 6);
const showBtnShowResult = computed(() => currentYao.value === 6 && currentChange.value === 3 && currentStep.value === 'dieSi');

function startDivination(question: string) {
  currentView.value = 'divination';
  resetForNewChange();
  step.value = 2;
}

function handleFenEr() {
  const { left, right } = fenEr();
  currentStep.value = 'guaYi';
}

function handleGuaYi() {
  guaYi();
  currentStep.value = 'dieSi';
}

function handleDieSi() {
  const remainder = dieSi();
  totalRemainder.value = remainder;
  showChangeInfo.value = true;
  changeResults.value.push(remainder);

  if (currentChange.value < 3) {
    currentStep.value = 'fenEr';
  } else {
    const yaoValue = totalSticks.value / 4;
    const yaoType = getYaoType(yaoValue);
    yaoResults.value.push({ value: yaoValue, type: yaoType });
    showChangeInfo.value = false;
  }
}

function handleNextChange() {
  nextChange();
  currentStep.value = 'fenEr';
  resetForNewChange();
  showChangeInfo.value = false;
  totalRemainder.value = 0;
}

function handleNextYao() {
  nextYao();
  currentStep.value = 'fenEr';
  resetForNewChange();
  showChangeInfo.value = false;
  totalRemainder.value = 0;
  step.value = currentYao.value + 1;
}

function handleShowResult() {
  buildHexagram();
  currentView.value = 'result';
  step.value = 8;
}

function buildHexagram() {
  const binary = hexagramBinary.value;
  hexagram.value = hexagramData[binary];

  if (movingYaos.value.length > 0 && movingYaos.value.length < 6) {
    const bianBinary = buildBianBinary();
    bianHexagram.value = hexagramData[bianBinary];
    showBianGua.value = !!bianHexagram.value;
  }
}

function buildBianBinary(): string {
  let binary = '';
  for (let i = yaoResults.value.length - 1; i >= 0; i--) {
    if (yaoResults.value[i].type.isMoving) {
      binary += yaoResults.value[i].type.isYang ? '0' : '1';
    } else {
      binary += yaoResults.value[i].type.isYang ? '1' : '0';
    }
  }
  return binary;
}

function restart() {
  reset();
  currentView.value = 'question';
  currentStep.value = 'fenEr';
  changeResults.value = [];
  totalRemainder.value = 0;
  showChangeInfo.value = false;
  hexagram.value = undefined;
  bianHexagram.value = undefined;
  showBianGua.value = false;
  step.value = 1;
}
</script>

<style scoped>
.container {
  width: 100%;
  height: 100vh;
  max-width: 1600px;
  margin: 0 auto;
  padding: 1vh 2vw;
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.main-content {
  background: var(--card-bg);
  border-radius: 12px;
  padding: 1.5vh 2vw;
  border: 1px solid rgba(212, 165, 116, 0.3);
  backdrop-filter: blur(10px);
  flex: 1;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 0;
}

.section-title {
  text-align: center;
  font-size: 2.2vh;
  color: var(--accent-color);
  padding-bottom: 1vh;
  border-bottom: 1px solid rgba(212, 165, 116, 0.2);
  flex-shrink: 0;
}

.content-scroll {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: clamp(0.8vh, 1vh, 1.5vh) 0;
  min-height: 0;
  gap: clamp(0.8vh, 1vh, 1.2vh);
}

.content-scroll::-webkit-scrollbar {
  width: 5px;
}

.content-scroll::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.2);
}

.content-scroll::-webkit-scrollbar-thumb {
  background: rgba(212, 165, 116, 0.5);
  border-radius: 3px;
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

.btn-container {
  padding-top: 1vh;
  border-top: 1px solid rgba(212, 165, 116, 0.2);
  flex-shrink: 0;
  margin-top: auto;
}

.btn-group {
  display: flex;
  justify-content: center;
  gap: 1vw;
  flex-wrap: wrap;
}

.result-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto 1fr;
  gap: clamp(1vh, 1.5vh, 2vh) clamp(1.5vw, 2vw, 2.5vw);
  flex: 1;
  width: 100%;
  overflow: hidden;
  min-height: 0;
}

.result-main {
  grid-column: 1 / -1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: clamp(1.5vw, 2vw, 2.5vw);
  background: rgba(0,0,0,0.2);
  padding: clamp(0.8vh, 1.2vh, 1.5vh);
  border-radius: 10px;
  flex-shrink: 0;
  flex-wrap: wrap;
}

.gua-symbol {
  font-size: 6vh;
  line-height: 1;
  filter: drop-shadow(0 0 8px rgba(255, 215, 0, 0.3));
}

.gua-name {
  font-size: 4vh;
  color: var(--accent-color);
  font-weight: bold;
  text-shadow: 0 0 15px rgba(255, 215, 0, 0.3);
}

.result-left, .result-right {
  display: flex;
  flex-direction: column;
  gap: 1.5vh;
  overflow: visible;
  height: auto;
  min-height: 0;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 12px;
  padding: 1.5vh;
  border: 1px solid rgba(212, 165, 116, 0.1);
}

.column-title {
  text-align: center;
  font-size: 2vh;
  color: var(--secondary-color);
  border-bottom: 2px solid rgba(212, 165, 116, 0.3);
  padding-bottom: 0.8vh;
  margin-bottom: 0.5vh;
  font-weight: bold;
  letter-spacing: 0.1em;
  flex-shrink: 0;
}

.gua-judgment, .gua-explanation, .bian-gua {
  background: var(--card-bg);
  padding: 1.5vh;
  border-radius: 8px;
  text-align: left;
  flex-shrink: 1;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 0;
}

.result-left h3, .result-right h3 {
  color: var(--secondary-color);
  font-size: 2vh;
  margin-bottom: 0.5vh;
  text-align: center;
  flex-shrink: 0;
}

.result-left p, .result-right p {
  font-size: 1.6vh;
  line-height: 1.4;
  color: var(--text-color);
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 10;
  -webkit-box-orient: vertical;
}

.bian-gua {
  border-top: 1px solid rgba(212, 165, 116, 0.3);
  margin-top: 1vh;
  padding-top: 1.2vh;
}

.bian-gua h3 {
  margin-bottom: 0.5vh;
  font-size: 1.8vh;
}

.bian-gua .gua-symbol {
  font-size: 3vh;
  margin: 0.5vh 0;
}

footer {
  text-align: center;
  padding: 0.5vh;
  color: var(--secondary-color);
  opacity: 0.6;
  font-size: 1.2vh;
  flex-shrink: 0;
  line-height: 1.4;
}

@media (max-width: 768px) {
  .container {
    padding: 0.5vh 1vw;
  }

  .section-title {
    font-size: 2vh;
  }

  .instruction {
    font-size: 1.8vh;
    margin-bottom: 1.5vh;
    min-height: 10vh;
  }

  .result-section {
    display: flex;
    flex-direction: column;
    gap: clamp(0.8vh, 1.2vh, 1.5vh);
    overflow: visible;
    height: auto;
    min-height: 0;
  }

  .result-left, .result-right {
    flex: 0 0 auto;
    min-height: 0;
    gap: 0.8vh;
    overflow: visible;
  }

  .result-left h3, .result-right h3 {
    font-size: 1.8vh;
  }

  .result-left p, .result-right p {
    font-size: 1.4vh;
    -webkit-line-clamp: none;
  }

  .bian-gua h3 {
    font-size: 1.8vh;
  }

  .bian-gua .gua-symbol {
    font-size: 3vh;
  }
}
</style>
