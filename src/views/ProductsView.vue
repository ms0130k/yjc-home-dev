<script setup lang="ts">
import { defineComponent, ref } from 'vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
import PageBanner from '@/components/common/PageBanner.vue'

const tabItems = [
  { id: 'kimchi-box', label: '김치/가공식품\n보냉박스' },
  { id: 'mushroom-box', label: '송이/식품\n보냉박스' },
  { id: 'meat-box', label: '축산물\n보냉박스' },
  { id: 'fish-box', label: '어상자/식품\n보냉박스' },
  { id: 'multipurpose-box', label: '다용도\n보냉박스' },
  { id: 'electronics-protection', label: '전자제품\n파손방지' },
  { id: 'damage-prevention', label: '파손방지\n스티로폼' },
  { id: 'packaging-pad', label: '각종 목재 유리\n포장PAD' },
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

interface BoxSpecWithImage {
  name: string
  outer: string
  inner: string
  quantity: string
  image: string
  note?: string
}

interface BoxSpecTable {
  title: string
  specs: BoxSpec[]
}

// 김치 박스 이미지 데이터
const kimchiBoxWithImages: BoxSpecWithImage[] = [
  {
    name: 'BOX 1호 = 송이1kg (김치 3kg)',
    outer: '310*240*180',
    inner: '270*200*80/120',
    quantity: '24*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '망계반죽 (Y-2)',
    outer: '250*250*180',
    inner: '210*210*13',
    quantity: '24*',
    image: '/images/box/box-sample.png',
  },
  {
    name: 'BOX 2호 ( 김치5kg)',
    outer: '260*260*250',
    inner: '220*220*200',
    quantity: '20*',
    image: '/images/box/box-sample.png',
  },
  {
    name: 'BOX 2.5호 ( 김치7kg)',
    outer: '335*310*250',
    inner: '290*260*190',
    quantity: '10*',
    image: '/images/box/box-sample.png',
  },
  {
    name: 'BOX 3호 ( 김치10kg)',
    outer: '385*295*270',
    inner: '330*245*200',
    quantity: '12*',
    image: '/images/box/box-sample.png',
  },
  {
    name: 'BOX 4호 ( 김치15kg)',
    outer: '415*305*365',
    inner: '365*255*290',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: 'BOX 5호 ( 김치20kg)',
    outer: '460*370*315',
    inner: '400*310*250',
    quantity: '10*',
    image: '/images/box/box-sample.png',
  },
  {
    name: 'BOX 6호 = 블루베리 10kg',
    outer: '530*410*300',
    inner: '460*340*230',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: 'BOX 7호',
    outer: '360*300*205',
    inner: '310*250*140',
    quantity: '16*',
    image: '/images/box/box-sample.png',
  },
]

// 송이/버섯 보냉박스 이미지 데이터
const mushroomBoxWithImages: BoxSpecWithImage[] = [
  {
    name: '송이 0.5kg',
    outer: '270*205*150',
    inner: '235*170*70/110',
    quantity: '32*',
    image: '/images/box/box-sample.png',
    note: '냉매받침(간지) 분리가능',
  },
  {
    name: '송이1kg =BOX1호',
    outer: '310*240*180',
    inner: '270*200*80/120',
    quantity: '24*',
    image: '/images/box/box-sample.png',
    note: '냉매받침(간지) 분리가능',
  },
  {
    name: '송이 2kg',
    outer: '310*240*220',
    inner: '270*200*130/170',
    quantity: '20*',
    image: '/images/box/box-sample.png',
    note: '냉매받침(간지) 분리가능',
  },
  {
    name: '송이 3kg',
    outer: '310*240*255',
    inner: '270*195*160/200',
    quantity: '16*',
    image: '/images/box/box-sample.png',
    note: '냉매받침(간지) 분리가능',
  },
  {
    name: '양송이2kg',
    outer: '380*250*190',
    inner: '330*200*80/120',
    quantity: '20*',
    image: '/images/box/box-sample.png',
    note: '냉매받침(간지) 분리가능',
  },
  {
    name: '느타리 버섯 2kg',
    outer: '440*310*145',
    inner: '400*270*110',
    quantity: '14*',
    image: '/images/box/box-sample.png',
    note: '냉매받침(간지) 분리가능',
  },
  {
    name: '느타리 버섯 3kg',
    outer: '440*310*200',
    inner: '400*270*110',
    quantity: '10*',
    image: '/images/box/box-sample.png',
    note: '냉매받침(간지) 분리가능',
  },
  {
    name: '피자박스',
    outer: '430*340*200',
    inner: '380*290*120',
    quantity: '10*',
    image: '/images/box/box-sample.png',
    note: '',
  },
  {
    name: '블루베리 6kg',
    outer: '350*350*280',
    inner: '300*300*230',
    quantity: '8*',
    image: '/images/box/box-sample.png',
    note: '',
  },
]

// 축산물 보냉박스 이미지 데이터
const meatBoxWithImages: BoxSpecWithImage[] = [
  {
    name: '갈비2kg',
    outer: '305*250*145',
    inner: '250*203*80',
    quantity: '32*',
    image: '/images/box/box-sample.png',
    note: '분리간 없음',
  },
  {
    name: '갈비3kg',
    outer: '445*240*155',
    inner: '175*120*55',
    quantity: '14*',
    image: '/images/box/box-sample.png',
    note: '1*3칸',
  },
  {
    name: '갈비4kg',
    outer: '430*310*145',
    inner: '175*120*55',
    quantity: '16*',
    image: '/images/box/box-sample.png',
    note: '1*4칸',
  },
  {
    name: '갈비5kg',
    outer: '435*365*150',
    inner: '175*120*55',
    quantity: '10*',
    image: '/images/box/box-sample.png',
    note: '1*5칸',
  },
  {
    name: '등바구니 2kg (소)',
    outer: '425*300*150',
    inner: '375*245*90',
    quantity: '14*',
    image: '/images/box/box-sample.png',
    note: '',
  },
  {
    name: '등바구니 2kg (대)',
    outer: '430*325*160',
    inner: '375*265*75/55',
    quantity: '14*',
    image: '/images/box/box-sample.png',
    note: '',
  },
  {
    name: '등바구니 3kg',
    outer: '465*340*140',
    inner: '420*285*90',
    quantity: '12*',
    image: '/images/box/box-sample.png',
    note: '',
  },
  {
    name: '등바구니 4kg',
    outer: '520*410*175',
    inner: '450*330*100',
    quantity: '6*',
    image: '/images/box/box-sample.png',
    note: '',
  },
  {
    name: '등바구니 5kg',
    outer: '565*445*190',
    inner: '495*370*110',
    quantity: '6*',
    image: '/images/box/box-sample.png',
    note: '',
  },
  {
    name: '삼보3kg (소)',
    outer: '375*285*140',
    inner: '340*245*75',
    quantity: '16*',
    image: '/images/box/box-sample.png',
    note: '',
  },
  {
    name: '삼보3kg (대)',
    outer: '380*290*140',
    inner: '340*245*65',
    quantity: '16*',
    image: '/images/box/box-sample.png',
    note: '',
  },
]

// 어상자/식품 보냉박스 이미지 데이터
const fishBoxWithImages: BoxSpecWithImage[] = [
  {
    name: '어상자 5kg',
    outer: '542*350*150',
    inner: '490*295*100',
    quantity: '12*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '어상자 10kg',
    outer: '550*350*210',
    inner: '495*300*100/150',
    quantity: '6*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '어상자 15kg',
    outer: '555*370*280',
    inner: '495*310*225',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '어상자 18kg',
    outer: '555*370*330',
    inner: '505*320*200/65',
    quantity: '4*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '어상자 20kg',
    outer: '620*440*335',
    inner: '550*370*255',
    quantity: '3*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '대하 1kg',
    outer: '305*205*95',
    inner: '280*180*65',
    quantity: '40*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '대하 2kg',
    outer: '340*240*130',
    inner: '305*205*95',
    quantity: '28*',
    image: '/images/box/box-sample.png',
  },
]

// 다용도 보냉박스 이미지 데이터
const multipurposeBoxWithImages: BoxSpecWithImage[] = [
  {
    name: '다용도-1',
    outer: '380*310*260',
    inner: '330*260*170',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '다용도-2',
    outer: '375*305*250',
    inner: '330*260*200',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '다용도-3',
    outer: '400*305*300',
    inner: '345*245*230',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '다용도-4',
    outer: '430*320*275',
    inner: '380*275*210',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '다용도-5',
    outer: '245*245*180',
    inner: '210*210*130',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '다용도-6',
    outer: '370*310*230',
    inner: '320*265*170',
    quantity: '14*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '다용도-7',
    outer: '410*320*300',
    inner: '360*265*210',
    quantity: '8*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '계장원',
    outer: '340*270*210',
    inner: '300*230*150',
    quantity: '20*',
    image: '/images/box/box-sample.png',
  },
  {
    name: '미인',
    outer: '305*245*200',
    inner: '265*205*140',
    quantity: '20*',
    image: '/images/box/box-sample.png',
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
  <PageBanner
    title="설비 현황"
    description="* 자세한 사항이나 기타 설비 문의는 전화 주시면 친절히 안내 드립니다."
  />
  <PageTwoColumn>
    <template #right>
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

        <div class="box-specs-content">
          <div v-if="activeTab === 'kimchi-box'" class="tab-content">
            <!-- 이미지가 있는 김치박스 테이블 -->
            <div class="specs-table-container">
              <table class="specs-table">
                <thead>
                  <tr>
                    <th rowspan="2"class="product-name-width">품명</th>
                    <th rowspan="2" class="hide-on-mobile">사진</th>
                    <th colspan="2">규격</th>
                    <th rowspan="2" class="quantity-width">한묶음<br />수량</th>
                  </tr>
                  <tr>
                    <th>외경(mm)</th>
                    <th>내경(mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(spec, index) in kimchiBoxWithImages" :key="index">
                    <td>{{ spec.name }}</td>
                    <td class="hide-on-mobile">
                      <img :src="spec.image" alt="박스 이미지" class="box-image" />
                    </td>
                    <td>{{ spec.outer }}</td>
                    <td>{{ spec.inner }}</td>
                    <td>
                      {{ spec.quantity }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeTab === 'mushroom-box'" class="tab-content">
            <!-- 이미지가 있는 송이/버섯 보냉박스 테이블 -->
            <div class="specs-table-container">
              <table class="specs-table">
                <thead>
                  <tr>
                    <th rowspan="2"class="product-name-width">품명</th>
                    <th rowspan="2" class="hide-on-mobile">사진</th>
                    <th colspan="2">규격</th>
                    <th rowspan="2" class="quantity-width">한묶음<br />수량</th>
                    <th rowspan="2" class="hide-on-mobile">비고</th>
                  </tr>
                  <tr>
                    <th>외경(mm)</th>
                    <th>내경(mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(spec, index) in mushroomBoxWithImages" :key="index">
                    <td>{{ spec.name }}</td>
                    <td class="hide-on-mobile">
                      <img :src="spec.image" alt="박스 이미지" class="box-image" />
                    </td>
                    <td>{{ spec.outer }}</td>
                    <td>{{ spec.inner }}</td>
                    <td>
                      {{ spec.quantity }}
                    </td>
                    <td class="hide-on-mobile">{{ spec.note }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeTab === 'meat-box'" class="tab-content">
            <!-- 축산물 보냉박스 테이블 -->
            <div class="specs-table-container">
              <table class="specs-table">
                <thead>
                  <tr>
                    <th rowspan="2"class="product-name-width">품명</th>
                    <th rowspan="2" class="hide-on-mobile">사진</th>
                    <th colspan="2">규격</th>
                    <th rowspan="2" class="quantity-width">한묶음<br />수량</th>
                    <th rowspan="2" class="hide-on-mobile">비고</th>
                  </tr>
                  <tr>
                    <th>외경(mm)</th>
                    <th>내경(mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(spec, index) in meatBoxWithImages" :key="index">
                    <td>{{ spec.name }}</td>
                    <td class="hide-on-mobile">
                      <img :src="spec.image" alt="박스 이미지" class="box-image" />
                    </td>
                    <td>{{ spec.outer }}</td>
                    <td>{{ spec.inner }}</td>
                    <td>
                      {{ spec.quantity }}
                    </td>
                    <td class="hide-on-mobile">{{ spec.note }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeTab === 'fish-box'" class="tab-content">
            <!-- 어상자/식품 보냉박스 테이블 -->
            <div class="specs-table-container">
              <table class="specs-table">
                <thead>
                  <tr>
                    <th rowspan="2"class="product-name-width">품명</th>
                    <th rowspan="2" class="hide-on-mobile">사진</th>
                    <th colspan="2">규격</th>
                    <th rowspan="2" class="quantity-width">한묶음<br />수량</th>
                  </tr>
                  <tr>
                    <th>외경(mm)</th>
                    <th>내경(mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(spec, index) in fishBoxWithImages" :key="index">
                    <td>{{ spec.name }}</td>
                    <td class="hide-on-mobile">
                      <img :src="spec.image" alt="박스 이미지" class="box-image" />
                    </td>
                    <td>{{ spec.outer }}</td>
                    <td>{{ spec.inner }}</td>
                    <td>
                      {{ spec.quantity }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeTab === 'multipurpose-box'" class="tab-content">
            <!-- 다용도 보냉박스 테이블 -->
            <div class="specs-table-container">
              <table class="specs-table">
                <thead>
                  <tr>
                    <th rowspan="2"class="product-name-width">품명</th>
                    <th rowspan="2" class="hide-on-mobile">사진</th>
                    <th colspan="2">규격</th>
                    <th rowspan="2" class="quantity-width">한묶음<br />수량</th>
                  </tr>
                  <tr>
                    <th>외경(mm)</th>
                    <th>내경(mm)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(spec, index) in multipurposeBoxWithImages" :key="index">
                    <td>{{ spec.name }}</td>
                    <td class="hide-on-mobile">
                      <img :src="spec.image" alt="박스 이미지" class="box-image" />
                    </td>
                    <td>{{ spec.outer }}</td>
                    <td>{{ spec.inner }}</td>
                    <td>
                      {{ spec.quantity }}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div v-else-if="activeTab === 'electronics-protection'" class="tab-content">
            <div class="electronics-protection-content">
              <div class="electronics-images">
                <div class="electronics-image-container">
                  <img
                    src="/images/break/전자제품1.jpeg"
                    alt="전자제품 파손방지 이미지1"
                    class="electronics-image"
                  />
                </div>
                <div class="electronics-image-container">
                  <img
                    src="/images/break/전자제품2.jpeg"
                    alt="전자제품 파손방지 이미지2"
                    class="electronics-image"
                  />
                </div>
              </div>

              <div class="electronics-description">
                <h3>전자제품 파손방지</h3>
                <p>금형제작/제품생산</p>
                <p>TV/공기청정기/청소기등</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'damage-prevention'" class="tab-content">
            <div class="damage-prevention-content">
              <div class="damage-prevention-images">
                <div class="damage-prevention-image-container">
                  <img
                    src="/images/break/스티로폼1.jpeg"
                    alt="파손방지 스티로폼 이미지1"
                    class="damage-prevention-image"
                  />
                </div>
                <div class="damage-prevention-image-container">
                  <img
                    src="/images/break/스티로폼2.jpeg"
                    alt="파손방지 스티로폼 이미지2"
                    class="damage-prevention-image"
                  />
                </div>
                <div class="damage-prevention-image-container">
                  <img
                    src="/images/break/스티로폼3.jpeg"
                    alt="파손방지 스티로폼 이미지3"
                    class="damage-prevention-image"
                  />
                </div>
              </div>

              <div class="damage-prevention-description">
                <h3>각종 유리병 파손방지</h3>
                <p>금형제작 /제품생산</p>
                <p>캔들/ 이유식/와인/ 오일병 파손방지</p>
              </div>
            </div>
          </div>

          <div v-else-if="activeTab === 'packaging-pad'" class="tab-content">
            <div class="packaging-pad-content">
              <div class="packaging-pad-images">
                <div class="packaging-pad-image-container">
                  <img
                    src="/images/break/목재유리1.jpeg"
                    alt="목재 유리 포장PAD 이미지1"
                    class="packaging-pad-image"
                  />
                </div>
                <div class="packaging-pad-image-container">
                  <img
                    src="/images/break/목재유리2.jpeg"
                    alt="목재 유리 포장PAD 이미지2"
                    class="packaging-pad-image"
                  />
                </div>
                <div class="packaging-pad-image-container">
                  <img
                    src="/images/break/목재유리3.jpeg"
                    alt="목재 유리 포장PAD 이미지3"
                    class="packaging-pad-image"
                  />
                </div>
              </div>

              <div class="packaging-pad-description">
                <h3>각종 목재 유리 포장PAD</h3>
                <p>목재/유리/거울 등 맞춤 사이즈 제작 가능</p>
                <p>운송 중 파손 방지를 위한 최적의 포장 솔루션</p>
                <p>문의: 054-975-5300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </template>
  </PageTwoColumn>
</template>

<style scoped>
/* 공통 레이아웃 */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

/* 탭 메뉴 */
.box-specs-tabs {
  display: flex;
  border-bottom: 1px solid #ddd;
  margin-bottom: 30px;
  overflow-x: auto;
  -webkit-overflow-scrolling: touch;
  white-space: nowrap;
  padding-bottom: 5px;
}

.tab-button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 70px;
  padding: 15px 25px;
  font-size: 16px;
  background: none;
  border: none;
  color: #555;
  cursor: pointer;
  position: relative;
  outline: none;
  white-space: pre-line;
  text-align: center;
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

/* 테이블 공통 */
.specs-table-container,
.cutting-table-container {
  overflow-x: auto;
  margin-bottom: 30px;
}

.specs-table,
.cutting-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 14px;
  table-layout: fixed;
}

.specs-table th,
.specs-table td,
.cutting-table th,
.cutting-table td {
  border: 1px solid #ddd;
  text-align: center;
  vertical-align: middle;
}

.specs-table th,
.cutting-table th {
  background-color: #f0f4f8;
  font-weight: bold;
  color: #333;
}

.specs-table td,
.cutting-table td {
  padding: 8px 12px;
}

.cutting-table td {
  padding: 12px 15px;
}

.specs-table tr:nth-child(even),
.cutting-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.specs-table tr:hover,
.cutting-table tr:hover {
  background-color: #f0f0f0;
}

.box-image {
  width: 120px;
  height: auto;
  object-fit: contain;
}

/* 설명 박스 공통 */
.electronics-description,
.damage-prevention-description,
.packaging-pad-description {
  text-align: center;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border-radius: 10px;
}

.electronics-description h3,
.damage-prevention-description h3,
.packaging-pad-description h3 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 15px;
}

.electronics-description p,
.damage-prevention-description p,
.packaging-pad-description p {
  font-size: 18px;
  line-height: 1.5;
  margin-bottom: 8px;
}

/* 이미지 레이아웃 공통 */
.electronics-images,
.damage-prevention-images,
.packaging-pad-images {
  display: flex;
  justify-content: center;
  gap: 30px;
  margin: 30px 0;
  flex-wrap: wrap;
}

.electronics-image-container,
.damage-prevention-image-container,
.packaging-pad-image-container {
  width: 350px;
  height: 350px;
  overflow: hidden;
}

.electronics-image,
.damage-prevention-image,
.packaging-pad-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.quantity-width {
  width: 11% !important;
}

/* 반응형 */
@media (max-width: 968px) {
  .box-specs-tabs {
    padding-bottom: 10px;
  }

  .tab-button {
    padding: 10px 15px;
    min-height: 60px;
    min-width: 120px;
  }

  .electronics-image-container,
  .damage-prevention-image-container,
  .packaging-pad-image-container {
    width: 100%;
    height: 300px;
  }

  .electronics-images,
  .damage-prevention-images,
  .packaging-pad-images {
    flex-direction: column;
    gap: 20px;
  }

  .hide-on-mobile {
    display: none !important;
  }
  .quantity-width {
    width: 11% !important;
  }
  .product-name-width {
    width: 24% !important;
  }
}
</style>
