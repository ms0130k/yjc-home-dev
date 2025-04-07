<script setup lang="ts">
// 필요한 컴포넌트나 라이브러리를 여기에 임포트
</script>

<template>
  <main>
    <div class="container">
      <div class="content">
        <h1 class="title">영진 화학!</h1>
        <div class="card">
          <p class="welcome-text">영진 화학에 오신 것을 환영합니다.</p>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.container {
  padding: 2rem;
  text-align: center;
}

.content {
  max-width: 800px;
  margin: 0 auto;
}

.title {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 2rem 0;
  color: #2c3e50;
}

.card {
  background-color: white;
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.welcome-text {
  font-size: 1.5rem;
  line-height: 1.6;
  margin: 1rem 0;
}
</style>
