<template>
    <div class="home">

        <div style="flex: 1"></div>
        <div style="text-align: center">
            <p class="title-fonts">
                <b><span style="font-size: 52px">디</span>퍼런트</b>
            </p>
            <br/>
            <p class="title-fonts" style="padding-left: 130px; margin-top: 15px;">
                <span style="font-size: 52px">사</span>람들
            </p>
        </div>

        <div style="flex: 1"></div>

        <div style="width: 270px; margin: auto;">
            <p class="text-warn">[주의]</p>
            <p class="text">이 검사는 성향을 알아가는 과정일 뿐<br/>너무 진지하게 생각하지 말아요~😜</p>
            <div class="start-button-wrapper">
                <router-link to="/test_before"><button class="start-button">검사 시작</button></router-link>
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

    .title-fonts {
        display: inline-block;
        font-size: 44px;
        font-weight: bold;
        margin: 0;
        color: #2ccbc3;
    }

    .text-warn {
        font-size: 24px;
        margin: 0;
        font-weight: bold;
        padding-left: 3px;
        padding-top: 10px;
        color: red;
    }

    .text {
        margin: 0;
        font-size: 17px;
        padding-top: 5px;
        padding-bottom: 50px;
        word-break: keep-all;
    }

    .start-button-wrapper {
        padding-left: 20px;
        padding-right: 20px;
        margin-left: 10px;
        margin-right: 10px;
    }

    .start-button {
        width: 100%;
        font-size: 34px;
        border: none;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: #2ccbc3;
    }
</style>

<script>
    export default {
        name: 'home',
        components: {}
    }
</script>
