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
            금형 제작 및 제품 구매, 기타 문의는<br />
            아래 연락처로 문의해 주세요.
          </div>
          <div class="side-contact">
            <div class="side-tel-label">TEL</div>
            <div class="side-tel">031-997-0280</div>
          </div>
          <div class="side-contact">
            <div class="side-tel-label">FAX</div>
            <div class="side-tel">031-997-0280</div>
          </div>
          <a
            class="side-kakao-contact"
            href="https://pf.kakao.com/_DVzmxj"
            target="_blank"
            rel="noopener noreferrer"
            title="카카오톡 문의하기"
          >
            <span class="kakao-icon">
              <svg
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="18" cy="18" r="18" fill="#ffe812" />
                <path
                  d="M11.25 18c0-3.315 3.36-6 7.5-6s7.5 2.685 7.5 6-3.36 6-7.5 6c-.555 0-1.095-.045-1.62-.135l-3.255 1.2c-.285.105-.57-.165-.48-.45l.705-2.04C12.015 21.54 11.25 19.83 11.25 18Z"
                  fill="#191600"
                />
              </svg>
            </span>
            <span class="kakao-label">KAKAO 문의하기</span>
          </a>
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
.side-kakao-contact {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 16px;
  background: #ffe812;
  border-radius: 14px;
  font-weight: bold;
  color: #191600;
  text-decoration: none;
  font-size: 1.25rem;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.03);
  transition:
    background 0.2s,
    box-shadow 0.2s;
  border: none;
  width: 100%;
  min-height: 54px;
  padding: 0 15px 0 0;
}
.side-kakao-contact:hover {
  background: #ffeb3b;
  box-shadow: 2px 2px 8px rgba(0, 0, 0, 0.2);
}
.kakao-icon {
  display: flex;
  align-items: center;
  justify-content: center;
}
.kakao-icon svg {
  width: 65px;
  height: 65px;
}
.kakao-label {
  font-size: 1.15rem;
  font-weight: bold;
  letter-spacing: 1px;
}
@media (max-width: 900px) {
  .two-column-layout {
    flex-direction: column;
    gap: 24px;
    margin: 0 auto 24px auto;
  }
  .left,
  .right {
    max-width: 100%;
    min-width: 0;
  }
  .left {
    display: none;
  }
  .right {
    margin: 0 auto;
    width: 100%;
  }
}
</style>
