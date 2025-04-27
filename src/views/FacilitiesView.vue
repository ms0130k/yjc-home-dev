<template>
  <div>
    <div class="box-specs-banner">
      <div class="banner-content">
        <h1 class="banner-title">주요 설비 현황</h1>
        <p class="banner-description">
          * 자세한 사항이나 기타 설비 문의는 전화 주시면 친절히 안내 드립니다.
        </p>
        <p class="banner-tel">TEL : 031-997-0280</p>
      </div>
    </div>
    <div class="facilities-container">
      <h2 class="facilities-title">주요 설비 현황</h2>
      <table class="facilities-table">
        <thead>
          <tr>
            <th>설비명</th>
            <th>규격</th>
            <th>보유 수</th>
            <th>비고</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td rowspan="5">성형기</td>
            <td>500GF Type</td>
            <td>4대</td>
            <td></td>
          </tr>
          <tr>
            <td>1360H Type</td>
            <td>8대</td>
            <td></td>
          </tr>
          <tr>
            <td>1700H Type</td>
            <td>5대</td>
            <td></td>
          </tr>
          <tr>
            <td>1900H Type</td>
            <td>2대</td>
            <td></td>
          </tr>
          <tr>
            <td>2000H Type</td>
            <td>2대</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="2">콤프레샤</td>
            <td>100HP</td>
            <td>2대</td>
            <td></td>
          </tr>
          <tr>
            <td>75HP</td>
            <td>3대</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">발포기</td>
            <td>1200P</td>
            <td>1대</td>
            <td></td>
          </tr>
          <tr>
            <td>1400P</td>
            <td>1대</td>
            <td></td>
          </tr>
          <tr>
            <td>1800P</td>
            <td>1대</td>
            <td></td>
          </tr>
          <tr>
            <td rowspan="3">싸이로 (SILO)</td>
            <td>EPS SILO</td>
            <td>3기</td>
            <td></td>
          </tr>
          <tr>
            <td>2종 원료 SILO</td>
            <td>6기</td>
            <td></td>
          </tr>
          <tr>
            <td>EPP SILO</td>
            <td>4기</td>
            <td></td>
          </tr>
          <tr>
            <td>가스보일러</td>
            <td>노통연관식 9톤</td>
            <td>1대</td>
            <td></td>
          </tr>
          <tr>
            <td>펠릿보일러</td>
            <td>수입산보령산 3톤</td>
            <td>1대</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style scoped>
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

.facilities-container {
  max-width: 900px;
  margin: 0 auto;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  padding: 32px 24px 48px 24px;
}

.facilities-title {
  text-align: center;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 32px;
  color: #222;
  border-bottom: 2px solid #e0e6ef;
  padding-bottom: 12px;
  letter-spacing: 1px;
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

@media (max-width: 768px) {
  .box-specs-banner {
    height: 180px;
  }
  .banner-title {
    font-size: 1.5rem;
  }
  .facilities-container {
    padding: 16px 4px 24px 4px;
  }
  .facilities-title {
    font-size: 1.2rem;
    margin-bottom: 18px;
    padding-bottom: 6px;
  }
  .facilities-table th,
  .facilities-table td {
    padding: 6px 4px;
    font-size: 0.9rem;
  }
}
</style>
