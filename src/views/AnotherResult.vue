<template>
    <div class="result">
        <p style="font-size: 21px; padding-bottom: 10px; font-weight: bold; margin-bottom: 20px">[색깔별 유형보기]</p>


        <div class="tabs">
            <a v-on:click="activetab=0" v-bind:class="[ activetab === 0 ? 'active' : '' ]"><span
                    style="color: red">Red</span></a>
            <a v-on:click="activetab=1" v-bind:class="[ activetab === 1 ? 'active' : '' ]"><span style="color: yellow">Yellow</span></a>
            <a v-on:click="activetab=2" v-bind:class="[ activetab === 2 ? 'active' : '' ]"><span style="color: green">Green</span></a>
            <a v-on:click="activetab=3" v-bind:class="[ activetab === 3 ? 'active' : '' ]"><span style="color: blue">Blue</span></a>
        </div>

        <div class="content">
            <div v-if="activetab === 0" class="tabcontent">
                <span style="font-size: 17px">독립적, 주도적, 문제 해결사</span><br/><br/>
                <span style="word-break: keep-all; font-size: 14px">레드의 성향을 가진 사람들은 대체로 추진력이 과감하고 유능한 사람들이 많아요.<br/><br/>
                그리고 변화에 유연하고 위기상황에 대처를 잘해요.<br/><br/>
                레드의 성향을 가진 사람들은 기운찬 목소리를 갖고 있고, 말과 행동이 빠른 편이에요.<br/><br/>
                    레드의 유명인사로는 버락 오바마, 힐러리 클린턴, 테레사 수녀 같은 사람들이 있어요.<br/></span>
            </div>
            <div v-if="activetab === 1" class="tabcontent">
                <span style="font-size: 17px; word-break: keep-all">극적, 외향적, 인생을 즐길 줄 아는 자</span><br/><br/>

                <span style="word-break: keep-all; font-size: 14px">옐로우의 성향을 가진 사람들은 대체로 주인공 본능을 가지고 주목받고 싶어하는 사람들이 많아요.<br/><br/>
                그리고 창의적이며 신제품과 트렌드에 많은 관심을 가지고 있어요.<br/><br/>
                옐로우의 성향을 가진 사람들은 여유있는 자세를 가지고 있고, 대체로 유머러스해요.<br/><br/>
                옐로우의 유명인사로는 조지 W.부시, 짐 캐리 같은 사람들이 있어요.</span>
            </div>
            <div v-if="activetab === 2" class="tabcontent">
                <span style="font-size: 17px; word-break: keep-all">안정적, 협조적, 다정함</span><br/><br/>

                <span style="word-break: keep-all; font-size: 14px">그린 성향을 가진 사람들은 대체로 모나지 않고 주위에서 평이 좋아요. 언제나 묵묵하게 맡은 일을 잘 끝내고, 경청을 잘하는 편이에요.<br/><br/>
                그린 성향을 가진 사람들은 느긋한 자세를 갖고 있고, 남들이 보기에 약간 수줍어 보일 수 있어요.<br/><br/>
                그린인 유명인사로는 미셸 오바마, 휴잭맨, 니콜 키드먼 같은 사람들이 있어요.</span>
            </div>
            <div v-if="activetab === 3" class="tabcontent">
                <span style="font-size: 17px; word-break: keep-all">분석적, 논리적, 완벽주의자</span><br/><br/>

                <span style="word-break: keep-all; font-size: 14px">블루의 성향을 가진 사람들은 대체로 논리적이고 객관적인 사람들이 많아요. 품질을 우선시 생각하고 메뉴얼을 중요시 생각합니다.<br/><br/>
                블루 성향의 사람들은 말이 느리고 몸짓이 적은 편이에요.<br/><br/>
                블루의 유명인사로는 알베르트 아인슈타인, 빌 게이츠 같은 사람들이 있어요.</span>
            </div>
        </div>

    </div>
</template>

<style lang="scss" scoped>
    .tabs {
        overflow: hidden;
        display: flex;
    }

    .tabs ul {
        list-style-type: none;
        margin-left: 20px;
    }

    .tabs a {
        flex: 1;
        text-align: center;
        cursor: pointer;
        padding-top: 12px;
        padding-bottom: 12px;
        /*padding: 12px 24px;*/
        transition: background-color 0.2s;
        border: 1px solid #2ccbc3;
        border-right: none;
        font-weight: bold;
    }

    .tabs a:last-child {
        border-right: 1px solid #2ccbc3;
    }

    /* Change background color of tabs on hover */
    .tabs a:hover {
        background-color: #aaa;
        color: #fff;
    }

    /* Styling for active tab */
    .tabs a.active {
        background-color: #fff;
        color: #484848;
        border-bottom: none;
        cursor: default;
    }

    /* Style the tab content */
    .tabcontent {
        padding: 30px;
        border-left: 1px solid #2ccbc3;
        border-right: 1px solid #2ccbc3;
        border-bottom: 1px solid #2ccbc3;
    }
</style>

<style lang="scss" scoped>
    pre {
        width: 100%;
        max-width: 100%;
    }

    p {
        display: block;
        text-align: center;
        padding: 0;
        margin: 0;
    }
</style>

<script>

    export default {
        name: 'test',
        components: {},
        data: function () {
            return {
                activetab: 0
            }
        },
        methods: {}
    }
</script>
