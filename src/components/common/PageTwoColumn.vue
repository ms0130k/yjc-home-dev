<script setup lang="ts">
interface Props {
  leftWidth?: string
  rightWidth?: string
}
withDefaults(defineProps<Props>(), {
  leftWidth: '280px',
  rightWidth: '1fr',
})
</script>

<template>
  <div class="two-column-layout">
    <aside class="left" :style="{ flexBasis: leftWidth }">
      <slot name="left">
        <!-- 기본 안내 배너 -->
        <div class="side-banner">
          <div class="side-title">안내 사항</div>
          <div class="side-description">
            주요 설비 현황 및 기타 문의는<br />
            아래 연락처로 문의해 주세요.
          </div>
          <div class="side-contact">
            <div class="side-tel-label">TEL</div>
            <div class="side-tel">031-997-0280</div>
          </div>
        </div>
      </slot>
    </aside>
    <section class="right" :style="{ flexBasis: rightWidth }">
      <slot name="right" />
    </section>
  </div>
</template>

<style scoped>
.two-column-layout {
  display: flex;
  gap: 32px;
  max-width: 1250px;
  margin: 0 auto 40px auto;
  align-items: flex-start;
}
.left {
  min-width: 220px;
  max-width: 320px;
  flex-shrink: 0;
}
.right {
  flex: 1 1 0;
  min-width: 0;
}
.side-banner {
  background: #f7fafd;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  padding: 32px 18px 24px 18px;
  margin-bottom: 24px;
  text-align: center;
}
.side-title {
  font-size: 1.2rem;
  font-weight: bold;
  color: #0c4da2;
  margin-bottom: 12px;
}
.side-description {
  font-size: 1rem;
  color: #333;
  margin-bottom: 18px;
}
.side-contact {
  margin-top: 12px;
  background: #fff;
  border-radius: 6px;
  padding: 10px 0;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
}
.side-tel-label {
  font-size: 0.95rem;
  color: #0c4da2;
  font-weight: bold;
}
.side-tel {
  font-size: 1.1rem;
  color: #222;
  font-weight: bold;
  margin-top: 2px;
}
@media (max-width: 900px) {
  .two-column-layout {
    flex-direction: column;
    gap: 24px;
  }
  .left,
  .right {
    max-width: 100%;
    min-width: 0;
  }
  .left {
    display: none;
  }
}
</style>
