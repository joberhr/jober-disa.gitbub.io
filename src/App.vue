<template>
  <div id="app">
    <div class="header">
      <router-link
        to="/"
        class="home"
      >
        홈으로
      </router-link>
      <div class="logo-null"></div>
      <img
        class="logo"
        src="./assets/logo.png"
      />
    </div>
    <div class="contents">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss" scoped>
#app {
  font-family: "Nanum Gothic", sans-serif;
}

html, body, #app {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}

#app {
  display: flex;
  flex-direction: column;
}

.header {
  width: 100%;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
}

.home {
  // text-decoration: none;
  margin: 8px;
  color: #555555;
}

.logo {
  width: 70px;
  height: 21px;
  padding: 10px;
}

.contents {
  padding: 10px;
}

.logo-null, .contents {
  flex: 1;
}
</style>
