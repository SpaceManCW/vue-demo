<template>
  <div class="persondata">
    <div class="head">
      <div class="photo">
        <img src="../../assets/photo2.jpg" alt="头像" />
      </div>
      <div class="nickname">
        <span class="s1">菠菜uu</span>
        <br />
        <a-tag color="rgb(250, 113, 113)">
          LV 1
        </a-tag>
      </div>
    </div>
    <div class="detail">
      <div class="header">
        <div class="line"></div>
        <div class="title">详细信息</div>
      </div>
      <hr class="bline" />
      <div class="tab">
        <table>
          <tr>
            <td>用户名</td>
            <td>
              <a-input class="in" />
              <a-button class="ok" shape="round" type="primary" size="small">
                确认
              </a-button>
              <a-button class="no" shape="round" type="primary" size="small">
                取消
              </a-button>
            </td>
            <a-button class="btn" type="link">
              编辑
            </a-button>
          </tr>
          <tr>
            <td>用 户 ID</td>
            <td>18846792529</td>
            <a-button type="link">编辑</a-button>
          </tr>
          <tr>
            <td>性 别</td>
            <td>女</td>
            <a-button type="link">编辑</a-button>
          </tr>
          <tr>
            <td>年 龄</td>
            <td>21</td>
            <a-button type="link">编辑</a-button>
          </tr>
          <tr>
            <td>邮 箱</td>
            <td>12345678@qq.com</td>
            <a-button type="link">编辑</a-button>
          </tr>
          <tr>
            <td>个人简介</td>
            <td>啦啦啦啦</td>
            <a-button type="link">编辑</a-button>
          </tr>
          <tr>
            <td>所在地区</td>
            <td>北京市</td>
            <a-button type="link">编辑</a-button>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({});
</script>

<style scoped>
.persondata {
  background-color: #ececec;
  padding: 20px;
}
.persondata .head {
  padding: 25px;
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  background-color: white;
  display: flex;
}
.persondata .head .photo {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  overflow: hidden;
}
.persondata .head .photo img {
  width: 100%;
  height: 100%;
}
.persondata .head .nickname {
  flex-grow: 1;
  height: 100%;
  padding: 30px;
}
.persondata .head .nickname .s1 {
  line-height: 5px;
  font-size: 20px;
}
.persondata .detail {
  width: 100%;
  background-color: white;
}
.persondata .detail .header {
  display: flex;
  padding: 5px 10px;
  width: 100%;
  height: 35px;
}
.persondata .detail .header .line {
  width: 4px;
  height: 22px;
  background-color: #fa7171;
  margin-right: 5px;
}
.persondata .detail .header .title {
  width: 100%;
  font-weight: 400;
  font-size: 16px;
}
.persondata .detail .bline {
  background-color: #d4d4d4;
  height: 1px;
  border: none;
  margin: 0 10px 0;
}
.persondata .detail .tab {
  padding: 10px 30px;
}
.persondata .detail .tab table tr {
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
}
.persondata .detail .tab table tr td {
  width: 550px;
}
.persondata .detail .tab table tr td .in {
  width: 200px;
}
.persondata .detail .tab table tr td .ok {
  margin: 0 5px;
}
.persondata .detail .tab table tr td .no {
  margin: 0 5px;
}
</style>
