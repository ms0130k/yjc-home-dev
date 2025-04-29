<template>
  <PageBanner title="연혁" />
  <PageTwoColumn>
    <template #right>
      <div class="container">
        <div class="history-section">
          <div class="year-group">
            <h2 class="year-title">2015년 부터 ~ 현재까지</h2>
            <ul class="history-list">
              <li><span class="date">2022.07</span> 중간소음방지 특허 및 디자인등록 5건</li>
              <li><span class="date">2022.03</span> 2022년 대한민국 CEO 리더십 대상(중앙일보)</li>
              <li><span class="date">2020.10</span> ISO14001-환경 경영시스템 인증</li>
              <li><span class="date">2020.10</span> ISO45001-안전보건 경영시스템 인증</li>
              <li><span class="date">2019.01</span> 기업사회공헌 (CSR) 우수기업 및 표창</li>
              <li>
                <span class="date">2018.12</span> 중소기업인 일자리 창출모범유공자 표창(경기도지사)
              </li>
              <li>
                <span class="date">2018.10</span> 사회공헌활동 우수기업 (화성시 자원봉사센터장)
              </li>
              <li><span class="date">2017.02</span> 중간소음방지용 바닥매널 특허 & 디자인 등록</li>
              <li><span class="date">2015.12</span> 2015년올해의 CEO대상(한국경제신문)</li>
            </ul>
          </div>

          <div class="year-group">
            <h2 class="year-title">2008년 부터 ~ 2014년</h2>
            <ul class="history-list">
              <li><span class="date">2014.12</span> 2014년 올해의 CEO대상(한국경제신문)</li>
              <li>
                <span class="date">2014.07</span> 2014년 대한민국경영대상-기술혁신대상(동아일보)
              </li>
              <li>
                <span class="date">2014.03</span> 2014년 대한민국혁신대상-스티로폼부문
                수상(한국일보)
              </li>
              <li>
                <span class="date">2013.06</span> 관계사 - (주)경인이엠에스 설립 (충북 청주시)
              </li>
              <li><span class="date">2013.10</span> 경기도유망중소기업지정(경기도)</li>
              <li>
                <span class="date">2012.12</span> 위험성평가 시범사업 인정서
                획득(중부지방고용노동청)
              </li>
              <li>
                <span class="date">2012.07</span> 일자리우수기업선정(경기도), 자본금 증자
                1,288.5백만
              </li>
            </ul>
          </div>

          <div class="year-group">
            <h2 class="year-title">2005년 부터 ~ 2007년</h2>
            <ul class="history-list">
              <li><span class="date">2010.02</span> Main-Biz인증</li>
              <li><span class="date">2009.12</span> 연구개발전담부서 설립인증</li>
              <li><span class="date">2007.11</span> 자본금 증자 10억3천8십만원</li>
              <li><span class="date">2007.02</span> ISO9001 인증:한국표준협회</li>
              <li>
                <span class="date">2005.12</span> 생산시설 확장으로 공장매입 이전 (화성 향남 모리
                381-5)
              </li>
              <li>
                <span class="date">2005.01</span> 법인전환(인천수지 → (주)인천이엠에스), 납입자본금
                8억원
              </li>
            </ul>
          </div>

          <div class="year-group">
            <h2 class="year-title">1995년 부터 ~ 2004년</h2>
            <ul class="history-list"></ul>
          </div>
        </div>
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

.history-section {
  padding: 40px 0;
}

.year-group {
  margin-bottom: 60px;
}

.year-title {
  background-color: #0c4da2;
  color: white;
  padding: 12px 30px;
  border-radius: 30px;
  display: inline-block;
  margin-bottom: 30px;
  font-size: 1.2rem;
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
