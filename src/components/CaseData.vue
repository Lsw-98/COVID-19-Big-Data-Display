<template>
  <div class="case">
    <div class="container">
      <div class="title">
        <span> 截至{{ formatDate(caseInfo.modifyTime) }} 全国数据统计</span>
      </div>
    </div>
    <div class="num">
      <ul class="count">
        <li>
          <div class="create-item">
            <div class="create-count">
              <b
                >较昨日<em style="color: rgb(247, 76, 49)">{{
                  isZore(caseInfo.currentConfirmedIncr)
                }}</em></b
              >
            </div>
            <strong style="color: rgb(247, 76, 49)">{{
              caseInfo.currentConfirmedCount
            }}</strong>
            <span>现存确诊</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b
                >较昨日<em style="color: rgb(247, 130, 7)">{{
                  isZore(caseInfo.confirmedIncr)
                }}</em></b
              >
            </div>
            <strong style="color: rgb(247, 130, 7)">{{
              caseInfo.confirmedCount
            }}</strong>
            <span>累计确诊</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b
                >较昨日<em style="color: rgb(162, 90, 78)">{{
                  isZore(caseInfo.suspectedIncr)
                }}</em></b
              >
            </div>
            <strong style="color: rgb(162, 90, 78)">{{
              caseInfo.suspectedCount
            }}</strong>
            <span>累计境外输入确诊</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b
                >较昨日<em style="color: rgb(147, 33, 44)">{{
                  isZore(caseInfo.curedIncr)
                }}</em></b
              >
            </div>
            <strong style="color: rgb(147, 33, 44)">{{
              caseInfo.curedCount
            }}</strong>
            <span>累计治愈</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b
                >较昨日<em style="color: rgb(93, 112, 146)">{{
                  isZore(caseInfo.deadIncr)
                }}</em></b
              >
            </div>
            <strong style="color: rgb(93, 112, 146)">{{
              caseInfo.deadCount
            }}</strong>
            <span>累计死亡</span>
          </div>
        </li>
        <li>
          <div class="create-item">
            <div class="create-count">
              <b
                >较昨日<em style="color: rgb(40, 183, 163)">{{
                  isZore(caseInfo.seriousIncr)
                }}</em></b
              >
            </div>
            <strong style="color: rgb(40, 183, 163)">{{
              caseInfo.seriousCount
            }}</strong>
            <span>现存无症状确诊</span>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "CaseData",
  data() {
    return {};
  },
  props: {
    caseInfo: {
      type: Object,
      default: function () {
        return {};
      },
    },
  },
  methods: {
    // 时间戳转时间格式
    formatDate(date) {
      let NewDate = new Date(date);
      let year = NewDate.getFullYear() + "-";
      let month =
        (NewDate.getMonth() + 1 < 10
          ? "0" + (NewDate.getMonth() + 1)
          : NewDate.getMonth() + 1) + "-";
      let day =
        (NewDate.getDate() < 10 ? "0" + NewDate.getDate() : NewDate.getDate()) +
        "   ";
      let hours =
        (NewDate.getHours() < 10
          ? "0" + NewDate.getHours()
          : NewDate.getHours()) + ":";
      let minutes =
        NewDate.getMinutes() < 10
          ? "0" + NewDate.getMinutes()
          : NewDate.getMinutes();
      return year + month + day + hours + minutes;
    },
    isZore(num) {
      return num >= 0 ? "+" + num : num;
    },
  },
  computed: {},
};
</script>

<style scoped>
.case {
  padding: 0.16rem;
  background: #fff;
}
.container {
  margin: -0.16rem 0 0;
  font-size: 0.12rem;
}
.title {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.08rem 0 0.07rem;
  line-height: 0.24rem;
}
.title span {
  color: #666;
}
.title em {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 0.24rem;
  margin-right: -0.16rem;
  padding: 0 0.08rem;
  color: #666;
  font-style: normal;
  background-color: #f7f7f7;
  border-radius: 0.12rem 0 0 0.12rem;
}
.title em img {
  width: 0.123rem;
  height: 0.123rem;
  margin-right: 0.037rem;
}
.num {
  position: relative;
  text-align: center;
  background: #fff;
}
.num::after {
  position: absolute;
  top: -0.01rem;
  left: -0.01rem;
  display: block;
  width: 200%;
  height: 200%;
  border: 0.01rem solid #ebebeb;
  border-radius: 0.08rem;
  box-shadow: 0 0.04rem 0.12rem 0 rgba(0, 0, 0, 0.05);
  transform: scale(0.5);
  transform-origin: 0 0;
  content: "";
}
.num ul {
  flex-flow: wrap;
  position: relative;
  display: flex;
  margin: 0;
  padding: 0.08rem 0 0.12rem;
}
.num ul li {
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 33.3333333%;
  margin: 10px 0;
}
.num ul li .create-item {
  position: relative;
  text-align: center;
}
.num ul li .create-item .create-count {
  display: flex;
  align-items: center;
  height: 0.12rem;
  margin-bottom: 0.02rem;
  color: #666;
  font-weight: 400;
  font-size: 0.09rem;
}
.num ul li .create-item .create-count em {
  font-weight: 400;
  font-style: normal;
}
.num ul li strong {
  margin-bottom: 0.01rem;
  font-weight: 700;
  font-size: 0.2rem;
  line-height: 0.25rem;
}
.num ul li span {
  display: block;
  color: #333;
  font-weight: 700;
  font-size: 0.11rem;
  line-height: 0.15rem;
}
</style>