<template>
    <div class="test_before">
        <div style="flex: 1;"></div>
        <div class="description_text" style="max-height: 60px">※본 검사는 총 24문항입니다※</div>
        <div class="description_text">다음의 단어 4개 중 자신을<br/>가장 잘 묘사한 단어를<br/>선택하세요!</div>
        <div class="description_text">(중복되는 단어가 나올 수 있습니다.)</div>


        <div style="width: 270px; margin: auto;">
            <div class="start-button-wrapper">
                <router-link to="/test">
                    <button class="start-button">다음으로</button>
                </router-link>
            </div>
        </div>

        <div style="flex: 1"></div>
    </div>
</template>

<style>
    .test_before {
        display: flex;
        flex-direction: column;
        height: 100%;
    }

    .description_text {
        flex: 1;
        text-align: center;
        word-break: keep-all;
        margin-left: 10px;
        margin-right: 10px;
        font-size: 18px;
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
        name: 'test_before',
        components: {}
    }
</script>
