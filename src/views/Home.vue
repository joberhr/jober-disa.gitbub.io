<template>
  <div class="home">
    <div style="flex: 1"></div>
    <h2 class="title">Jober DISA 테스트</h2>

    <div style="flex: 1"></div>

    <div style="width: 320px; margin: auto;">
      <p class="text-warn">주의</p>
      <p class="text">이 검사는 성향을 알아가는 과정일 뿐입니다. 너무 진지하게 생각하지 마세요.</p>
      <div class="start-button-wrapper">
        <router-link to="/test_before"><button class="start-button">검사 시작</button></router-link>
        <a
          href="/another"
          class="another"
        >성격 유형 보기</a>
      </div>
    </div>

    <div style="flex: 1"></div>
  </div>
</template>

<style>
.home {
  display: flex;
  flex-direction: column;
  height: 100%;
}

.title {
  text-align: center;
  font-size: 26px;
  font-weight: bold;
  margin: 0;
  color: #2ccbc3;
}

.text-warn {
  font-size: 20px;
  margin: 0;
  font-weight: bold;
  padding-left: 3px;
  padding-top: 10px;
  color: red;
}

.text {
  margin: 0;
  font-size: 16px;
  line-height: 1.6;
  padding-top: 5px;
  padding-bottom: 50px;
  word-break: keep-all;
}

.start-button-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.start-button {
  flex: 1;
  width: 200px;
  font-size: 26px;
  border: none;
  border-radius: 8px;
  color: white;
  font-weight: bold;
  padding-top: 5px;
  padding-bottom: 5px;
  background-color: #2ccbc3;
}

.another {
  margin-top: 8px;
  color: #555555;
}
</style>

<script>
export default {
  name: 'home',
  components: {},
};
</script>
