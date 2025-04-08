<script setup lang="ts">
defineOptions({
  name: 'AppFooter',
})
</script>

<template>
  <footer class="site-footer">
    <div class="container">
      <div class="footer-content">
        <div class="company-info">
          <h3 class="footer-title">영진화학</h3>
          <ul class="footer-details">
            <li>대표: 박명환</li>
            <li>주소: 경기도 김포시 대곶면 대곶로 202번길 215 (송마리 245-1)</li>
            <li>사업자등록번호: 136-10-60330</li>
            <li>전화번호: 031-997-0280</li>
            <li>이메일: yjin6038@hanmail.net</li>
          </ul>
        </div>
      </div>
      <div class="copyright">
        <p>&copy; {{ new Date().getFullYear() }} 영진화학. All Rights Reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer {
  background-color: #f0f4f8;
  padding: 50px 0 30px;
  border-top: 1px solid #e0e0e0;
  margin-top: 80px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.footer-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.footer-title {
  color: #0c4da2;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 15px;
}

.footer-details {
  list-style: none;
  padding: 0;
  margin: 0;
}

.footer-details li {
  color: #555;
  margin-bottom: 8px;
  font-size: 15px;
}

.copyright {
  text-align: center;
  color: #777;
  font-size: 14px;
  padding-top: 20px;
  border-top: 1px solid #e0e0e0;
}

@media (max-width: 768px) {
  .site-footer {
    padding: 40px 0 20px;
  }

  .footer-title {
    font-size: 20px;
  }

  .footer-details li {
    font-size: 14px;
  }
}
</style>
