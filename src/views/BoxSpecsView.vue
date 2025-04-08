<script setup lang="ts">
import { defineComponent, ref } from 'vue'

const tabItems = [
  { id: 'ice-box-1', label: '아이스 박스 규격 1' },
  { id: 'ice-box-2', label: '아이스 박스 규격 2' },
  { id: 'ice-box-3', label: '아이스 박스 규격 3' },
  { id: 'styrofoam-cutting', label: '스티로폼 재단' },
  { id: 'img-sample', label: '이미지 샘플' },
]
const activeTab = ref(tabItems[0].id)

const changeTab = (tabId: string) => {
  activeTab.value = tabId
}

// 테이블 데이터를 객체 형태로 구조화
interface BoxSpec {
  name: string
  outer: string
  inner: string
  quantity: string
}

interface BoxSpecTable {
  title: string
  specs: BoxSpec[]
}

const boxSpecs: BoxSpecTable[] = [
  {
    title: '김치/다용도박스',
    specs: [
      { name: 'Y-다용도(소)', outer: '280*210*150', inner: '240*175*100', quantity: '20*' },
      { name: '계장원', outer: '340*270*210', inner: '300*230*150', quantity: '20*' },
      { name: 'Y-21', outer: '290*230*180', inner: '250*190*140', quantity: '24*' },
      { name: 'Y-22', outer: '320*260*200', inner: '270*210*130+30', quantity: '20*' },
      { name: 'Y-23', outer: '315*315*195', inner: '270*270*140', quantity: '20*' },
      { name: '미인', outer: '305*245*200', inner: '265*205*140', quantity: '20*' },
      { name: '김1호(3~4kg)', outer: '310*240*180', inner: '270*200*120', quantity: '24*' },
      { name: 'Y-2(엽케반죽)', outer: '250*250*180', inner: '210*210*130', quantity: '24*' },
      { name: 'Y-3 (방울토마토)', outer: '303*220*185', inner: '250*165*130', quantity: '24*' },
      { name: 'S-3', outer: '265*215*180', inner: '225*175*135', quantity: '24*' },
      { name: 'S-5', outer: '255*315*220', inner: '205*265*195', quantity: '20*' },
      { name: '김치2호(5kg)=맹개', outer: '260*260*250', inner: '220*220*200', quantity: '20*' },
      { name: '김치 2.5호(7kg)', outer: '335*310*250', inner: '290*260*190', quantity: '10*' },
      { name: '김치3호(10kg)', outer: '385*295*270', inner: '330*245*200', quantity: '12*' },
      { name: '김치4호(15kg)', outer: '415*305*365', inner: '365*255*290', quantity: '8*' },
      { name: '김치5호(20kg)', outer: '460*370*315', inner: '400*310*250', quantity: '10*' },
      { name: '김치6호', outer: '530*410*300', inner: '460*340*230', quantity: '8*' },
      { name: 'BOX 7호', outer: '360*300*205', inner: '310*250*140', quantity: '10' },
      { name: '다용도-1', outer: '380*310*260', inner: '330*260*170', quantity: '8*' },
      { name: '다용도-2', outer: '375*305*250', inner: '330*260*200', quantity: '8*' },
      { name: '다용도-3', outer: '400*305*300', inner: '345*245*230', quantity: '8*' },
      { name: '다용도-4', outer: '430*320*275', inner: '380*275*210', quantity: '8*' },
      { name: 'S-14', outer: '430*320*280', inner: '374*265*230', quantity: '8*' },
      { name: '다용도-6', outer: '370*310*230', inner: '320*265*170', quantity: '10*' },
      { name: '다용도-7', outer: '410*320*300', inner: '360*265*210', quantity: '10*' },
    ],
  },
  {
    title: '대형박스',
    specs: [
      { name: '30K-중박스', outer: '770*470*270', inner: '697*400*200', quantity: '4*' },
      { name: '30K-대박스', outer: '770*470*310', inner: '700*400*240', quantity: '4*' },
      { name: '육수박스', outer: '595*365*195', inner: '540*305*145', quantity: '12*' },
      { name: '샤벳트박스', outer: '605*325*450', inner: '550*265*360', quantity: '4*' },
      { name: '대형박스', outer: '715*485*395', inner: '655*428*265+83', quantity: '4*' },
      { name: '메디-300', outer: '470*470*485', inner: '400*400*400', quantity: '2*' },
      { name: '메디-500', outer: '570*420*550', inner: '490*340*430', quantity: '2*' },
    ],
  },
  {
    title: '블루베리박스',
    specs: [
      { name: 'Y-23', outer: '315*315*195', inner: '270*270*100/140', quantity: '20*' },
      { name: '블루베리 1kg', outer: '310*240*180', inner: '270*200*80/120', quantity: '24*' },
      { name: '블루베리 2kg', outer: '310*240*255', inner: '270*195*160/200', quantity: '16*' },
      { name: '블루베리 3kg', outer: '550*350*210', inner: '495*300*150', quantity: '10*' },
      { name: '블루베리 4kg', outer: '375*305*250', inner: '330*260*200', quantity: '8*' },
      { name: '블루베리 6kg', outer: '350*350*280', inner: '300*300*230', quantity: '8*' },
    ],
  },
]

// 아이스 박스 규격 2 테이블 데이터
const boxSpecs2: BoxSpecTable[] = [
  {
    title: '정육박스 (통형/칸없음)',
    specs: [
      { name: '갈비2kg', outer: '305*250*145', inner: '250*203*115', quantity: '28*' },
      { name: 'LA-2KG', outer: '330*270*170', inner: '285*225*128', quantity: '28*' },
    ],
  },
  {
    title: '정육박스 (칸있음/칸형)',
    specs: [
      { name: '갈비3kg (3칸)', outer: '445*240*155', inner: '175*120*55 (1칸)', quantity: '10*' },
      { name: '갈비4kg (4칸)', outer: '430*310*145', inner: '175*120*55 (1칸)', quantity: '10*' },
      { name: '갈비 5kg (5칸)', outer: '435*365*150', inner: '175*120*55 (1칸)', quantity: '10*' },
    ],
  },
  {
    title: '정육박스 (스킨/칸형)',
    specs: [
      { name: '스킨 3구 (3칸)', outer: '540*260*120', inner: '210*150*55 (1칸)', quantity: '16*' },
      { name: '스킨 4구 (4칸)', outer: '490*370*120', inner: '210*150*55 (1칸)', quantity: '16*' },
      {
        name: '스킨 3구-2 (3칸)',
        outer: '565*280*115',
        inner: '225*155*55 (1칸)',
        quantity: '16*',
      },
      {
        name: '스킨 4구-2 (4칸)',
        outer: '525*385*115',
        inner: '225*155*55 (1칸)',
        quantity: '12*',
      },
      { name: 'LA-2칸', outer: '530*360*150', inner: '290*225*60(1칸)', quantity: '10*' },
    ],
  },
  {
    title: '등바구니 박스 (턱있음/등채반용)',
    specs: [
      { name: '등바구니 2kg', outer: '425*300*150', inner: '375*245*90', quantity: '10*' },
      { name: '등바구니 3kg(소)', outer: '460*340*145', inner: '415*295*95', quantity: '10*' },
      { name: '등바구니 3kg', outer: '465*340*140', inner: '420*285*90', quantity: '10*' },
      { name: '등바구니 4kg', outer: '520*410*175', inner: '450*330*100', quantity: '5*' },
      { name: '등바구니 5kg', outer: '565*445*190', inner: '495*370*110', quantity: '5*' },
    ],
  },
  {
    title: '정육박스 (통형/칸없음)',
    specs: [
      { name: 'T-5', outer: '375*290*140', inner: '335*250*75+25', quantity: '12*' },
      { name: 'T5-1 (T5보다높음)', outer: '385*300*160', inner: '340*255*85+25', quantity: '12*' },
      { name: '종합 1호', outer: '450*350*145', inner: '400*300*75', quantity: '10*' },
      { name: '종합 2호', outer: '445*350*170', inner: '400*303*75 + 55', quantity: '10*' },
      { name: '종합 2호-1', outer: '465*365*170', inner: '427*320*75 + 50', quantity: '10*' },
      { name: '종합 3호', outer: '415*325*155', inner: '370*275*110', quantity: '10*' },
      { name: '종합 4호', outer: '490*435*170', inner: '440*385*120', quantity: '5*' },
      { name: '종합 5호', outer: '425*300*150', inner: '375*245*90', quantity: '10*' },
      { name: '종합 6호', outer: '360*290*155', inner: '320*255*120', quantity: '14*' },
    ],
  },
  {
    title: '기타 정육박스',
    specs: [
      { name: '사각 통형 박스 소', outer: '260*282*170', inner: '230*252*140', quantity: '16*' },
      { name: '사각 통형박스 대', outer: '470*260*170', inner: '440*230*140', quantity: '16*' },
      { name: '통형박스 소 (칸없음)', outer: '350*225*225', inner: '310*190*170', quantity: '16*' },
      {
        name: '통형박스 소 (세로칸없음)',
        outer: '350*225*225',
        inner: '310*190*170',
        quantity: '10*',
      },
      { name: '통형박스 대 (칸없음)', outer: '350*225*265', inner: '310*187*210', quantity: '10*' },
      {
        name: '통형박스 대 (세로칸없음)',
        outer: '350*225*265',
        inner: '310*187*210',
        quantity: '8*',
      },
    ],
  },
]

// 아이스 박스 규격 3 테이블 데이터
const boxSpecs3: BoxSpecTable[] = [
  {
    title: '송이/버섯 피자박스',
    specs: [
      { name: '송이 0.5kg', outer: '270*205*150', inner: '235*170*110', quantity: '32*' },
      { name: '송이 1kg', outer: '310*240*180', inner: '270*200*120', quantity: '24*' },
      { name: '송이 2kg', outer: '310*240*220', inner: '270*200*170', quantity: '20*' },
      { name: '송이 3kg', outer: '310*240*255', inner: '270*195*200', quantity: '16*' },
      { name: '양송이 2kg', outer: '380*250*190', inner: '330*200*120', quantity: '20*' },
      { name: '느타리버섯2kg(신)', outer: '420*290*150', inner: '380*250*110', quantity: '16*' },
      { name: '느타리버섯2kg', outer: '440*310*145', inner: '400*270*110', quantity: '14*' },
      { name: '느타리버섯3kg', outer: '440*310*200', inner: '400*270*110', quantity: '10*' },
      { name: '피자박스', outer: '430*340*200', inner: '380*290*120', quantity: '10*' },
      { name: '블루6kg (피자 대)', outer: '350*350*280', inner: '300*300*230', quantity: '8*' },
    ],
  },
  {
    title: '새우/ 바지락 박스',
    specs: [
      { name: '바지락 3K', outer: '385*285*195', inner: '340*240*150', quantity: '14*' },
      { name: '바지락 7K', outer: '360*315*280', inner: '310*260*220', quantity: '10*' },
      { name: '바지락 10K', outer: '450*370*280', inner: '395*315*225', quantity: '8*' },
      { name: '냉동새우박스', outer: '430*340*200', inner: '380*290*120', quantity: '10*' },
      { name: '회 3K', outer: '364*295*150', inner: '320*252*110', quantity: '16*' },
    ],
  },
  {
    title: '새우/어상자박스',
    specs: [
      { name: '대하 1K', outer: '305*205*95', inner: '280*180*65', quantity: '40*' },
      { name: '대하 2K', outer: '335*235*130', inner: '305*205*85', quantity: '32*' },
      { name: '망계반품', outer: '250*250*180', inner: '210*210*130', quantity: '24*' },
      { name: '망계박스', outer: '260*260*250', inner: '220*220*200', quantity: '16' },
      { name: '굴박스 (소)', outer: '260*260*260', inner: '220*220*210', quantity: '16*' },
      { name: '굴박스 (대)', outer: '300*300*275', inner: '250*250*225', quantity: '16*' },
      { name: '어상자 5K(신)', outer: '505*345*185', inner: '450*290*125', quantity: '12*' },
      { name: '어상자 7.5K', outer: '560*370*170', inner: '500*310*112', quantity: '12*' },
      { name: '어상자 10K', outer: '560*370*215', inner: '500*310*160', quantity: '10*' },
      { name: '어상자 12K', outer: '550*355*215', inner: '495*305*165', quantity: '10*' },
      { name: '어상자 15kg', outer: '555*370*280', inner: '495*310*225', quantity: '8*' },
      { name: '어상자 15k (신)', outer: '557*370*298', inner: '500*310*238', quantity: '8*' },
      { name: '어상자 18K', outer: '555*370*330', inner: '505*320*265', quantity: '6*' },
      { name: '어상자 20K', outer: '620*440*335', inner: '550*370*255', quantity: '3*' },
      { name: '어상자 30K', outer: '770*470*275', inner: '698*399*200', quantity: '4*' },
      { name: '30K-중박스', outer: '770*470*270', inner: '697*400*200', quantity: '4*' },
      { name: '30K-대박스', outer: '770*470*310', inner: '700*400*240', quantity: '4*' },
    ],
  },
]

// 스티로폼 재단 데이터
interface CornerBoxSpec {
  name: string
  size: string
  quantity: string
}

interface FoamPanelSpec {
  name: string
  description: string
}

// 코너/모서리 보호 데이터
const cornerBoxSpecs: CornerBoxSpec[] = [
  { name: '코너 소', size: '60*60*60(두께 15)', quantity: '600*' },
  { name: '샌추리코너 [코너 중]', size: '80*80*60(두께 20)', quantity: '360*' },
  { name: '코너 대', size: '175*95*95(두께25)', quantity: '96*' },
]

// 맞춤 평판 패널 데이터
const foamPanelSpecs: FoamPanelSpec[] = [
  { name: '평판', description: '1790*800*600 사이즈 (3X6 스티로폼 원단)' },
  { name: '평판 재단', description: '맞춤 사이즈로 재단 가능 (막대기/ 평판)' },
  { name: '도형 품파기 재단', description: '막대기 모형 품파기로 재단 가능' },
]

defineComponent({
  name: 'BoxSpecsView',
})
</script>

<template>
  <main class="box-specs-view">
    <!-- 박스규격 이미지 영역 -->
    <div class="box-specs-banner">
      <div class="banner-content">
        <h1 class="banner-title">영진화학 스티로폼 박스 규격표</h1>
        <p class="banner-description">
          * 자세한 사항이나 기타 규격 문의는 전화 주시면 친절히 안내 드립니다.
        </p>
        <p class="banner-tel">TEL : 031-997-0280</p>
      </div>
    </div>

    <div class="container">
      <!-- 박스규격 탭 메뉴 -->
      <div class="box-specs-tabs">
        <button
          v-for="tab in tabItems"
          :key="tab.id"
          :class="['tab-button', { active: activeTab === tab.id }]"
          @click="changeTab(tab.id)"
        >
          {{ tab.label }}
        </button>
      </div>

      <!-- 박스 콘텐츠 -->
      <div class="box-specs-content">
        <div v-if="activeTab === 'ice-box-1'" class="tab-content">
          <!-- 각 박스 유형 별로 테이블 렌더링 -->
          <div v-for="(tableData, index) in boxSpecs" :key="index" class="specs-table-container">
            <table class="specs-table">
              <thead>
                <tr>
                  <th rowspan="2">{{ tableData.title }}</th>
                  <th colspan="2">규격(mm)</th>
                  <th rowspan="2">한묶음 수량</th>
                </tr>
                <tr>
                  <th>외경(mm)</th>
                  <th>내경(mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(spec, specIndex) in tableData.specs" :key="specIndex">
                  <td>{{ spec.name }}</td>
                  <td>{{ spec.outer }}</td>
                  <td>{{ spec.inner }}</td>
                  <td>{{ spec.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else-if="activeTab === 'ice-box-2'" class="tab-content">
          <!-- 각 박스 유형 별로 테이블 렌더링 -->
          <div v-for="(tableData, index) in boxSpecs2" :key="index" class="specs-table-container">
            <table class="specs-table">
              <thead>
                <tr>
                  <th rowspan="2">{{ tableData.title }}</th>
                  <th colspan="2">규격(mm)</th>
                  <th rowspan="2">한묶음 수량</th>
                </tr>
                <tr>
                  <th>외경(mm)</th>
                  <th>내경(mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(spec, specIndex) in tableData.specs" :key="specIndex">
                  <td>{{ spec.name }}</td>
                  <td>{{ spec.outer }}</td>
                  <td>{{ spec.inner }}</td>
                  <td>{{ spec.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else-if="activeTab === 'ice-box-3'" class="tab-content">
          <!-- 각 박스 유형 별로 테이블 렌더링 -->
          <div v-for="(tableData, index) in boxSpecs3" :key="index" class="specs-table-container">
            <table class="specs-table">
              <thead>
                <tr>
                  <th rowspan="2">{{ tableData.title }}</th>
                  <th colspan="2">규격(mm)</th>
                  <th rowspan="2">한묶음 수량</th>
                </tr>
                <tr>
                  <th>외경(mm)</th>
                  <th>내경(mm)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(spec, specIndex) in tableData.specs" :key="specIndex">
                  <td>{{ spec.name }}</td>
                  <td>{{ spec.outer }}</td>
                  <td>{{ spec.inner }}</td>
                  <td>{{ spec.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else-if="activeTab === 'styrofoam-cutting'" class="tab-content">
          <!-- 각 박스 유형 별로 테이블 렌더링 -->
          <!-- 코너/모서리 보호 테이블 -->
          <div class="cutting-table-container">
            <table class="cutting-table">
              <thead>
                <tr>
                  <th>코너/ 모서리 보호</th>
                  <th>규격(mm)</th>
                  <th>한묶음 수량</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(spec, index) in cornerBoxSpecs" :key="index">
                  <td>{{ spec.name }}</td>
                  <td>{{ spec.size }}</td>
                  <td>{{ spec.quantity }}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <!-- 맞춤 평판/품파기 재단 테이블 -->
          <div class="cutting-table-container">
            <table class="cutting-table">
              <thead>
                <tr>
                  <th colspan="2">맞춤 평판/ 패드 제작 (건축용 및 제품 보호용)</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(spec, index) in foamPanelSpecs" :key="index">
                  <td>{{ spec.name }}</td>
                  <td>{{ spec.description }}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div v-else-if="activeTab === 'img-sample'" class="tab-content">
          <img src="@/assets/images/box-spec.jpeg" alt="샘플 이미지" />
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.box-specs-view {
  padding-top: 80px;
  min-height: 100vh;
}

.box-specs-banner {
  height: 250px;
  background-color: #0c4da2;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 40px;
}

.banner-content {
  text-align: center;
}

.banner-title {
  color: white;
  font-size: 40px;
  font-weight: bold;
  margin-bottom: 15px;
}

.banner-description {
  color: white;
  font-size: 16px;
  margin-bottom: 5px;
}

.banner-tel {
  color: white;
  font-size: 16px;
  font-weight: 500;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.box-specs-tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
}

.tab-button {
  padding: 15px 25px;
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
  position: relative;
  outline: none;
  color: #555;
}

.tab-button.active {
  color: #2e7d32;
  font-weight: bold;
}

.tab-button.active::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  width: 100%;
  height: 3px;
  background-color: #2e7d32;
}

.box-specs-content {
  min-height: 400px;
}

.tab-content h2 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.tab-content p {
  font-size: 16px;
  line-height: 1.6;
  color: #444;
}

.specs-table-container {
  overflow-x: auto;
  margin-bottom: 30px;
}

.specs-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  table-layout: fixed;
}

.specs-table th,
.specs-table td {
  border: 1px solid #ddd;
  padding: 8px 12px;
  text-align: center;
}

.specs-table th:nth-child(1),
.specs-table td:nth-child(1) {
  width: 25%;
}

.specs-table th:nth-child(2),
.specs-table td:nth-child(2) {
  width: 25%;
}

.specs-table th:nth-child(3),
.specs-table td:nth-child(3) {
  width: 25%;
}

.specs-table th:nth-child(4),
.specs-table td:nth-child(4) {
  width: 15%;
}

.specs-table th {
  background-color: #f0f4f8;
  font-weight: bold;
  color: #333;
}

.specs-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.specs-table tr:hover {
  background-color: #f0f0f0;
}

/* 스티로폼 재단 페이지 스타일 */
.cutting-table-container {
  overflow-x: auto;
  margin-bottom: 30px;
}

.cutting-table-container h3 {
  font-size: 20px;
  color: #333;
  margin-bottom: 15px;
  font-weight: 600;
}

.cutting-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
}

.cutting-table th,
.cutting-table td {
  border: 1px solid #ddd;
  padding: 12px 15px;
  text-align: center;
}

.cutting-table th {
  background-color: #f0f4f8;
  font-weight: bold;
  color: #333;
}

.cutting-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.cutting-table tr:hover {
  background-color: #f0f0f0;
}
</style>
