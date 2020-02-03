<template>
    <div class="test">
        <div>
            <p style="font-weight: bold; font-size: 33px;">{{currentProb}}.</p><br>
            <div class="answer-button-root">
                <div class="answer-button-wrapper">
                    <button v-bind:class="{selected:currentButtonIdx===1}" v-on:click="currentButtonIdx = 1"
                            class="answer-button">{{answerLists[(currentProb-1) * 4]}}
                    </button>
                    <button v-bind:class="{selected:currentButtonIdx===2}" v-on:click="currentButtonIdx = 2"
                            class="answer-button">{{answerLists[((currentProb-1) *
                        4)+1]}}
                    </button>
                </div>
                <div style="display: flex; flex-direction: row">
                    <button v-bind:class="{selected:currentButtonIdx===3}" v-on:click="currentButtonIdx = 3"
                            class="answer-button">{{answerLists[((currentProb-1) *
                        4)+2]}}
                    </button>
                    <button v-bind:class="{selected:currentButtonIdx===4}" v-on:click="currentButtonIdx = 4"
                            class="answer-button">{{answerLists[((currentProb-1) *
                        4)+3]}}
                    </button>
                </div>
            </div>
            <div style="display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
padding-top: 40px">
                <button @click="selectAnswer" class="selected-button" style="width: 280px">
                    선택 완료
                </button>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
    p {
        display: inline-block;
        padding: 0;
        margin: 0;
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
        width: 140px;
        height: 140px;
        font-size: 23px;
        border: solid #2ccbc3;
        color: black;
        font-weight: bold;
        padding-top: 5px;
        padding-bottom: 5px;
        background-color: white;
    }

    .selected {
        background-color: #46928e
    }

    .selected-button-wrapper {
        display: flex;
        flex-direction: row
    }

    .selected-button {
        width: 100%;
        font-size: 30px;
        border: none;
        border-radius: 8px;
        color: white;
        font-weight: bold;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #2ccbc3;
    }
</style>

<script>
    const answerLists = ["차분하다", "단호하다", "조심스럽다", "표현한다", "앞장선다", "바로잡다", "흥을 추구한다", "만족한다", "기꺼이 한다", "활기차다", "대담하다", "정확하다", "따지고 든다", "의심한다", "우유부단하다", "예측할 수 없다", "공손하다", "사교적이다", "끈기 있다", "대담하다", "설득력 있다", "자립심이 크다", "논리적이다", "젠틀하다", "신중하다", "침착하다", "결단력 있다", "사람의 마음을 끈다", "인기 있다", "적극적이다", "완벽을 추구한다", "너그럽다", "화려하다", "평범하다", "태평하다", "단도직입적이다", "체계적이다", "낙관적이다", "끈질기다", "협조적이다", "가차없다", "겸손하다", "친근하다", "수다스럽다", "상냥하다", "관찰력 있다", "장난기 많다", "의지가 강하다", "매력적이다", "모험심이 강하다", "체계적이다", "신중하다", "자제심이 있다", "꾸준하다", "전투적이다.", "매력적이다", "열렬하다", "분석적이다", "동정심이 크다", "결심이 굳다", "명령한다", "충동적이다", "느리다", "비난한다", "한결같다", "강인하다", "활기 넘친다", "느긋하다", "영향력 있다", "친절하다", "독립적이다", "정돈됐다", "이상주의적이다", "인기 있다", "예의 바르다", "거침없다", "안달복달한다", "진지하다", "꾸물거린다", "감정적이다", "경쟁적이다", "즉흥적이다", "충실하다", "생각한다", "꼼꼼하다", "배려한다", "설득력 있다", "용감하다", "의존적이다", "변덕스럽다", "냉정하다", "강요한다", "관대하다", "규정을 따른다", "흥미를 쫓다", "정확하다"];
    const answerScore = ["B", "D", "A", "C", "A", "C", "D", "B", "C", "B", "A", "D", "A", "D", "C", "B", "D", "B", "C", "A", "B", "A", "D", "C", "C", "D", "B", "A", "B", "A", "D", "C", "D", "A", "C", "B", "C", "B", "D", "A", "A", "D", "C", "B", "D", "C", "A", "B", "B", "A", "D", "C", "C", "D", "B", "B", "D", "A", "C", "B", "A", "B", "C", "D", "B", "C", "D", "A", "C", "A", "B", "D", "D", "B", "C", "A", "A", "D", "C", "B", "A", "B", "C", "D", "D", "C", "B", "A", "D", "B", "A", "C", "D", "C", "A", "B"];

    export default {
        name: 'test',
        data: function () {
            return {
                currentProb: 1,
                currentButtonIdx: -1,
                scores: {'A': 0, 'B': 0, 'C': 0, 'D': 0},
                histories: [],
                isSelectAnswerIn: false,
                answerLists,
                answerScore
            }
        },
        methods: {
            selectAnswer: function () {
                if (this.isSelectAnswerIn) {
                    return;
                }
                if (this.currentButtonIdx <= 0) {
                    alert('선택된 항목이 없습니다.');
                    return;
                }

                this.isSelectAnswerIn = true;

                const idx = this.currentButtonIdx;
                const selected = String.fromCharCode('A'.charCodeAt(0) + idx - 1);//;answerScore[((this.currentProb - 1) * 4) + (idx - 1)];
                this.histories.push(selected);
                for (let answerIdx = 0; answerIdx < 4; answerIdx++) {
                    if (answerScore[((this.currentProb - 1) * 4) + answerIdx] === selected) {
                        this.scores[String.fromCharCode('A'.charCodeAt(0) + answerIdx)]++;
                        break;
                    }
                }

                if (this.currentProb === 24) {
                    let result = 'RED';
                    let maxIndex = 'A';
                    if (this.scores[maxIndex] < this.scores['B']) {
                        maxIndex = 'B';
                    }
                    if (this.scores[maxIndex] < this.scores['C']) {
                        maxIndex = 'C';
                    }
                    if (this.scores[maxIndex] < this.scores['D']) {
                        maxIndex = 'D';
                    }
                    switch (maxIndex) {
                        case 'A':
                            result = 'RED';
                            break;
                        case 'B':
                            result = 'YELLOW';
                            break;
                        case 'C':
                            result = 'GREEN';
                            break;
                        case 'D':
                            result = 'BLUE';
                            break;
                    }
                    this.$router.push({path: `/result?result=${result}`});
                } else
                    this.currentProb++;

                this.currentButtonIdx = -1;
                this.isSelectAnswerIn = false;
            }
        }
    }
</script>
