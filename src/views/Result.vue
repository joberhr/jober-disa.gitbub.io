<template>
    <div class="result">
        <div>
            <p style="font-size: 34px; padding-bottom: 10px; font-weight: bold;">[결과]</p>
            <p style="font-size: 24px; margin-bottom: 3px;">당신은</p>
            <p v-bind:class="{red:result==='RED', yellow:result==='YELLOW', green:result==='GREEN', blue:result==='BLUE'}"
               style="font-size: 40px; font-weight: bold; margin-bottom: 3px;">{{result}}</p>
            <p style="font-size: 24px; margin-bottom: 3px;">에 가까워요!</p>
            <br/>
            <br/>


            <div class="parag" v-if="result === 'RED'">
                <p><span
                        v-bind:class="{red:result==='RED', yellow:result==='YELLOW', green:result==='GREEN', blue:result==='BLUE'}">{{result}} </span>는
                    불처럼 열정적인</p>
                <p>성향을 지니고 있으며,</p>
                <p><span class="yellow">YELLOW </span>색의 사람들과 자연적으로</p>
                <p>잘 어울리는 경향이 있어요.</p>
            </div>
            <div class="parag" v-if="result === 'YELLOW'">
                <p><span
                        v-bind:class="{red:result==='RED', yellow:result==='YELLOW', green:result==='GREEN', blue:result==='BLUE'}">{{result}} </span>는
                    어려운 상황에서도 답을 찾는</p>
                <p>창의적인 성향을 지니고 있으며,</p>
                <p><span class="red">RED </span>색의 사람들과 자연적으로</p>
                <p>잘 어울리는 경향이 있어요.</p>
            </div>
            <div class="parag" v-if="result === 'GREEN'">
                <p><span
                        v-bind:class="{red:result==='RED', yellow:result==='YELLOW', green:result==='GREEN', blue:result==='BLUE'}">{{result}} </span>는
                    맡은 일을 책임감있게 끝내는</p>
                <p>안정적인 성향을 지니고 있으며,</p>
                <p><span class="blue">BLUE </span>색의 사람들과 자연적으로</p>
                <p>잘 어울리는 경향이 있어요.</p>
            </div>
            <div class="parag" v-if="result === 'BLUE'">
                <p><span
                        v-bind:class="{red:result==='RED', yellow:result==='YELLOW', green:result==='GREEN', blue:result==='BLUE'}">{{result}} </span>는
                    성실하고 체계적인 성향을</p>
                <p>지니고 있으며,</p>
                <p><span class="green">GREEN </span>색의 사람들과 자연적으로</p>
                <p>잘 어울리는 경향이 있어요.</p>
            </div>

            <div style="display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
padding-top: 40px">
                <router-link to="/another">
                    <button class="answer-button" style="width: 215px">
                        다른 색 특징 보기
                    </button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    p {
        display: block;
        text-align: center;
        padding: 0;
        margin: 0;
    }

    .red {
        color: red;
        font-weight: bold;
    }

    .yellow {
        color: yellow;
        font-weight: bold;
    }

    .blue {
        color: blue;
        font-weight: bold;
    }

    .green {
        color: green;
        font-weight: bold;
    }

    .parag > p {
        padding-top: 5px;
        padding-bottom: 5px;
        text-align: center;
    }

    .answer-button-root {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .answer-button-wrapper {
        display: flex;
        flex-direction: row
    }

    .answer-button {
        width: 100%;
        font-size: 25px;
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
    // const answerLists = ["차분하다", "단호하다", "조심스럽다", "표현한다", "앞장선다", "바로잡다", "홍올 좇다", "만족한다", "기꺼이 한다", "활기차다", "대담하다", "정확하다", "따지고 든다", "의심한다", "우유부단하다", "예측할 수 없다", "공손하다", "사교적이다", "끈기 있다", "대담하다", "설득력 있다", "자립심이 크다", "논리적이다", "젠틀하다", "신중하다", "침착하다", "결단력 있다", "사람의 마음을 끈다", "인기 있다", "적극적이다", "완벽을 추구한다", "너그럽다", "화려하다", "평범하다", "태평하다", "단도직입적이다", "체계적이다", "낙관적이다", "끈질기다", "협조적이다", "가차없다", "겸손하다", "친근하다", "수다스럽다", "상냥하다", "관찰력 있다", "장난기 많다", "의지가 강하다", "매력적이다", "모험심이 강하다", "체계적이다", "신중하다", "자제심이 있다", "꾸준하다", "공격 (적극)적이다", "매력적이다", "열렬하다", "분석적이다", "동정심이 크다", "결심이 굳다", "명령한다", "충동적이다", "느리다", "비난한다", "한결같다", "강인하다", "활기 넘친다", "느긋하다", "영향력 있다", "친절하다", "독립적이다", "정돈됐다", "이상주의적이다", "인기 있다", "예의 바르다", "거침없다", "안달복달한다", "진지하다", "꾸물거린다", "감정적이다", "경쟁적이다", "즉흥적이다", "충실하다", "생각한다", "꼼꼼하다", "배려한다", "설득력 있다", "용감하다", "의존적이다", "변덕스럽다", "냉정하다", "강요한다", "관대하다", "규정을 따른다", "흥미를 쫓다", "정확하다"];
    // const answerScore = ["B", "D", "A", "C", "A", "C", "D", "B", "C", "B", "A", "D", "A", "D", "C", "B", "D", "B", "C", "A", "B", "A", "D", "C", "C", "D", "B", "A", "B", "A", "D", "C", "D", "A", "C", "B", "C", "B", "D", "A", "A", "D", "C", "B", "D", "C", "A", "B", "B", "A", "D", "C", "C", "D", "B", "B", "D", "A", "C", "B", "A", "B", "C", "D", "B", "C", "D", "A", "C", "A", "B", "D", "D", "B", "C", "A", "A", "D", "C", "B", "A", "B", "C", "D", "D", "C", "B", "A", "D", "B", "A", "C", "D", "C", "A", "B"];

    export default {
        name: 'test',
        data: function () {
            return {
                result: this.$route.query.result
            }
        },
        methods: {}
    }
</script>
