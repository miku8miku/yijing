<template>
  <header>
    <svg class="taiji" viewBox="0 0 100 100">
      <circle cx="50" cy="50" r="48" fill="none" stroke="#D4A574" stroke-width="2"/>
      <path d="M50 2 A48 48 0 0 1 50 98 A24 24 0 0 1 50 50 A24 24 0 0 0 50 2" fill="#f5f5dc"/>
      <path d="M50 98 A48 48 0 0 1 50 2 A24 24 0 0 1 50 50 A24 24 0 0 0 50 98" fill="#1a1a2e"/>
      <circle cx="50" cy="26" r="6" fill="#1a1a2e"/>
      <circle cx="50" cy="74" r="6" fill="#f5f5dc"/>
    </svg>
    <div class="header-content">
      <h1>大衍筮法</h1>
      <p class="subtitle">大衍之数五十，其用四十有九</p>
    </div>
  </header>
</template>

<script setup lang="ts">
</script>

<style scoped>
header {
  text-align: center;
  padding: 0.5vh 0;
  border-bottom: 1px solid rgba(212, 165, 116, 0.3);
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 15px;
}

.header-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

h1 {
  font-size: 2.5vh;
  color: var(--accent-color);
  text-shadow: 0 0 20px rgba(255, 215, 0, 0.3);
  letter-spacing: 0.2em;
  line-height: 1.2;
  margin: 0;
}

.subtitle {
  color: var(--secondary-color);
  font-size: 1.2vh;
  opacity: 0.8;
  line-height: 1.2;
  margin: 0;
}

.taiji {
  width: 4vh;
  height: 4vh;
  animation: rotate 20s linear infinite;
}

@keyframes rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

@media (max-width: 768px) {
  header {
    gap: 10px;
  }
  
  h1 {
    font-size: 2.2vh;
  }
  
  .subtitle {
    font-size: 1vh;
  }
  
  .taiji {
    width: 3vh;
    height: 3vh;
  }
}
</style>
