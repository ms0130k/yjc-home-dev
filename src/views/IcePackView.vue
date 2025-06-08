<template>
  <PageBanner title="아이스팩" />
  <PageTwoColumn>
    <template #right>
      <div class="facilities-container">
        <table class="facilities-table">
          <colgroup>
            <col style="width: 22%" />
            <col style="width: 11%" />
            <col style="width: 22%" />
            <col style="width: 20%" />
            <col style="width: 25%" />
          </colgroup>
          <thead>
            <tr>
              <th>종류</th>
              <th>사이즈(mm)</th>
              <th>1박스<br>인입수량</th>
              <th>1팔레트<br>수량</th>
              <th>비고</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td rowspan="2">물<br>아이스팩</td>
              <td>150*200</td>
              <td>60개</td>
              <td>3,000</td>
              <td>1팔레트 수량<br>50박스</td>
            </tr>
            <tr>
              <td>160*230</td>
              <td>44개</td>
              <td>2,200</td>
              <td>1팔레트 수량<br>50박스</td>
            </tr>
            <tr>
              <td rowspan="2">친환경(젤)<br>아이스팩</td>
              <td>150*200</td>
              <td>42개</td>
              <td>2,520</td>
              <td>1팔레트 수량<br>60박스</td>
            </tr>
            <tr>
              <td>160*230</td>
              <td>32개</td>
              <td>1,920</td>
              <td>1팔레트 수량<br>60박스</td>
            </tr>
          </tbody>
        </table>
        <div class="ice-pack-desc">
          <p>* 타사대비 30% 이상의 두꺼운 비닐을 사용합니다.</p>
          <p>* 비동결 제품만 출고 가능합니다.</p>
          <p>
            * 친환경(젤) 아이스팩은 보냉제[젤아이스팩] 대체품으로 물과 동일하게 버릴수 있는
            젤아이스팩이라고 생각해 주시면 됩니다.
          </p>
        </div>
        <img src="/images/ice-pack/ice-pack-1.png" alt="아이스팩" class="ice-pack-image" />
      </div>
    </template>
  </PageTwoColumn>
</template>

<script setup lang="ts">
import PageBanner from '@/components/common/PageBanner.vue'
import PageTwoColumn from '@/components/common/PageTwoColumn.vue'
</script>

<style scoped>
.facilities-container {
  max-width: 1250px;
  margin: 0 auto;
  padding: 0 24px 48px 24px;
}

.facilities-table {
  width: 100%;
  border-collapse: collapse;
  font-size: 1rem;
  background: #fafbfc;
}

.facilities-table th,
.facilities-table td {
  border: 1px solid #e0e6ef;
  padding: 12px 16px;
  text-align: center;
}

.facilities-table th {
  background: #f0f4f8;
  color: #222;
  font-weight: bold;
}

.facilities-table tr:nth-child(even) {
  background: #f7fafd;
}
.ice-pack-desc {
  padding: 15px 10px
}

.ice-pack-image {
  display: block;
  max-width: 850px;
  width: 90%;
  margin: 10px auto 0 auto;
  border-radius: 8px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.08);
}

@media (max-width: 768px) {
  .ice-pack-image {
    padding-left: 15px;
    padding-right: 15px;
    box-sizing: border-box;
  }
}
</style>
