<template>
  <PageBanner title="연혁" />
  <PageTwoColumn>
    <template #right>
      <div class="container">
        <ul class="history-list">
          <li><span class="date">1991.08</span> 영진화학 설립<br>탁상 T/B식 수동라인 설비 </li>
          <li><span class="date">1993.08</span> 성형기 자동화 설비 (소형기)</li>
          <li><span class="date">1994.05</span> 성형기 자동화 설비 (대형기)</li>
          <li>
            <span class="date">1996.03</span>
            <span>성형기 롱타입 자동화 설비<br>업소용 ICE BOX<br>문양 거푸집등 대형물 제조 라인 구축<br>1360H/ 1700H 기종 설비</span>
          </li>
          <li>
            <span class="date">2003.07</span>
            <span>영진화학 제2공장 준공<br>평판용 성형기 자동화설비<br>건축용 단열재 및 포장용 PAD 장비 설비<br>대우 일렉트로닉스 협력업체 지정 (인천공장)<br>냉장고 및 쇼케이스 포장재 납품<br>특수모형 스티로폼 절단기 설치</span>
          </li>
          <li><span class="date">2004.11</span>
            <span>3X12 / 3X8 평판 성형기 설비<br>토목용 / EPS 패널/ 보온판/ 평판 성형기 설비 증설</span>
          </li>
          <li><span class="date">2004.02</span>
            <span>폐스티로폼 감용기 설치 (재활용기계)<br>잉코트 판매 및 수출</span>
          </li>
          <li><span class="date">2013</span><span>경기도 김포시 대곶면 송마리 245-1 신축공장으로 이전</span></li>
          <li>
            <span class="date">2020</span>
            <span>자동화 설비 증설</span>
          </li>
          <li>
            <span class="date">2021</span>
            <span>10톤 LPG 가스 보일러 설비</span>
          </li>
          <li>
            <span class="date">2022</span>
            <span>1900H 대형 성형기 증설</span>
          </li>
        </ul>
      </div>
    </template>
  </PageTwoColumn>
</template>

<script setup lang="ts">
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}
.history-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
.history-list li {
  position: relative;
  padding-left: 120px;
  margin-bottom: 20px;
  line-height: 1.6;
}
.history-list .date {
  position: absolute;
  left: 0;
  color: #0c4da2;
  font-weight: 600;
}
</style>
