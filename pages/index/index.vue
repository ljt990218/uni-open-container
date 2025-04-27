<template>
  <scroll-view type="list" scroll-y class="scrollable" padding="{{[8, 8, 8, 8]}}" show-scrollbar="{{false}}">
    <view class="content">
      <open-container
        closed-color="white"
        middle-color=""
        open-color="white"
        :closed-elevation="closedElevation"
        :open-elevation="openElevation"
        :closed-border-radius="closedBorderRadius"
        :open-border-radius="openBorderRadius"
        :transition-type="type"
        :transition-duration="duration"
        @click="goDetail"
      >
        <image class="logo" src="/static/logo.png"></image>
      </open-container>

      <open-container
        class="float-button"
        closed-color="white"
        middle-color=""
        open-color="white"
        :closed-elevation="closedElevation"
        :open-elevation="openElevation"
        :closed-border-radius="closedBorderRadius"
        :open-border-radius="openBorderRadius"
        :transition-type="type"
        :transition-duration="duration"
        @click="goDetail"
      >
        <view class="center ball">+</view>
      </open-container>
    </view></scroll-view
  >
</template>

<script>
export default {
  data() {
    return {
      type: 'fade',
      duration: 300,
      closedElevation: 1,
      closedBorderRadius: 4,
      openElevation: 4,
      openBorderRadius: 0,
    }
  },
  onLoad() {},
  methods: {
    goDetail() {
      uni.navigateTo({
        url: '/pages/text/text',
      })
    },
  },
}
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.scrollable {
  height: 100vh;
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-left: auto;
  margin-right: auto;
}

.float-button {
  width: 56px;
  height: 56px;
  border-radius: 50%;
  overflow: hidden;
  position: absolute;
  right: 20px;
  bottom: 60px;
}

.ball {
  height: 56px;
  line-height: 56px;
  text-align: center;
  border-radius: 50%;
  background-color: plum;
  font-size: 24px;
}
</style>
