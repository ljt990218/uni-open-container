<template>
  <view
    :class="['weui-navigation-bar', extClass]"
    :style="{
      color: color,
      background: background,
      ...displayStyle,
      ...safeAreaTop,
    }"
  >
    <view :class="['weui-navigation-bar__inner', ios ? 'ios' : 'android']" :style="{ height: navigationBarHeight }">
      <!-- 左侧按钮 -->
      <view class="weui-navigation-bar__left" :style="{ width: leftWidth }">
        <template v-if="back || homeButton">
          <!-- 返回上一页 -->
          <template v-if="back">
            <view class="weui-navigation-bar__buttons weui-navigation-bar__buttons_goback">
              <view
                @tap="back"
                class="weui-navigation-bar__btn_goback_wrapper"
                hover-class="weui-active"
                :hover-stay-time="100"
                aria-role="button"
                aria-label="返回"
              >
                <view class="weui-navigation-bar__button">
                  <image class="weui-navigation-bar__btn_goback" src="../assets/back.png"></image>
                </view>
              </view>
            </view>
          </template>
          <!-- 返回首页 -->
          <template v-if="homeButton">
            <view class="weui-navigation-bar__buttons weui-navigation-bar__buttons_home">
              <view
                @tap="home"
                class="weui-navigation-bar__btn_home_wrapper"
                hover-class="weui-active"
                aria-role="button"
                aria-label="首页"
              >
                <view class="weui-navigation-bar__button weui-navigation-bar__btn_home"></view>
              </view>
            </view>
          </template>
        </template>
        <template v-else>
          <slot name="left"></slot>
        </template>
      </view>

      <!-- 标题 -->
      <view class="weui-navigation-bar__center">
        <view v-if="loading" class="weui-navigation-bar__loading" aria-role="alert">
          <view class="weui-loading" aria-role="img" aria-label="加载中"></view>
        </view>
        <template v-if="title">
          <text>{{ title }}</text>
        </template>
        <template v-else>
          <slot name="center"></slot>
        </template>
      </view>

      <!-- 右侧留空 -->
      <view class="weui-navigation-bar__right">
        <slot name="right"></slot>
      </view>
    </view>
  </view>
</template>

<script>
export default {
  name: 'navigation-bar',

  data() {
    return {
      ios: false,
      leftWidth: '',
      safeAreaTop: '',
      statusBarHeight: '',
      navigationBarHeight: '',
    }
  },

  props: {
    extClass: {
      type: String,
      default: '',
    },
    title: {
      type: String,
      default: '',
    },
    background: {
      type: String,
      default: '#ffffff',
    },
    color: {
      type: String,
      default: '#000000',
    },
    back: {
      type: Boolean,
      default: true,
    },
    loading: {
      type: Boolean,
      default: false,
    },
    homeButton: {
      type: Boolean,
      default: false,
    },
    displayStyle: {
      type: String,
      default: '',
    },
  },

  mounted() {
    this.initNavBar()
  },

  methods: {
    initNavBar() {
      const rect = uni.getMenuButtonBoundingClientRect()
      console.log('getMenuButtonBoundingClientRect', rect)

      uni.getSystemInfo({
        success: (res) => {
          console.log('getSystemInfo', res)

          const isAndroid = res.platform === 'android'
          const statusBarHeight = res.statusBarHeight
          this.ios = !isAndroid
          this.navigationBarHeight = `${rect.height}px`
          this.leftWidth = `width: ${res.safeArea.width - rect.left}px`

          let wxHeight = 0
          if (isAndroid) {
            wxHeight = 48 + statusBarHeight
          } else {
            wxHeight = 44 + statusBarHeight
          }

          console.log('wxHeight', wxHeight)
          console.log('rect.height + rect.top', rect.height + rect.top)
          console.log('wxHeight - (rect.height + rect.top)', wxHeight - (rect.height + rect.top))

          console.log('safeAreaTop', rect.height + rect.top + (wxHeight - (rect.height + rect.top)))

          this.safeAreaTop = `padding-top: ${rect.top}px; height: ${
            rect.height + rect.top + (wxHeight - (rect.height + rect.top))
          }px;`
        },
      })
    },

    back() {
      let page = getCurrentPages()
      console.log('page', page, page.length)

      if (page.length <= 1) {
        uni.switchTab({
          url: '/pages/index/index',
        })
        return
      }

      uni.navigateBack({
        delta: 1,
      })
    },

    home() {
      uni.switchTab({
        url: '/pages/index/index',
      })
    },
  },
}
</script>

<style lang="scss">
.weui-navigation-bar {
  --weui-FG-0: rgba(0, 0, 0, 0.9);
  --height: 44px;
  --left: 16px;
}

.weui-navigation-bar .android {
  --height: 48px;
}

.weui-navigation-bar {
  overflow: hidden;
  color: var(--weui-FG-0);
  flex: none;
}

.weui-navigation-bar__inner {
  position: relative;
  top: 0;
  left: 0;
  // height: calc(var(--height) + env(safe-area-inset-top));
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  // padding-top: env(safe-area-inset-top);
  width: 100%;
  box-sizing: border-box;

  & > view {
    flex: 1;
  }
}

.weui-navigation-bar__left {
  position: relative;
  padding-left: var(--left);
  display: flex;
  flex-direction: row;
  /* align-items: flex-start; */
  align-items: center;
  height: 100%;
  box-sizing: border-box;
}

.weui-navigation-bar__btn_goback_wrapper {
  padding: 11px 18px 11px 16px;
  margin: -11px -18px -11px -16px;
}

.weui-navigation-bar__btn_goback_wrapper.weui-active {
  opacity: 0.5;
}

.weui-navigation-bar__btn_goback {
  font-size: 12px;
  width: 24px;
  height: 24px;
  /* -webkit-mask: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='24' viewBox='0 0 12 24'%3E  %3Cpath fill-opacity='.9' fill-rule='evenodd' d='M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z'/%3E%3C/svg%3E") no-repeat 50% 50%;
  mask: url("data:image/svg+xml;charset=utf8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='24' viewBox='0 0 12 24'%3E  %3Cpath fill-opacity='.9' fill-rule='evenodd' d='M10 19.438L8.955 20.5l-7.666-7.79a1.02 1.02 0 0 1 0-1.42L8.955 3.5 10 4.563 2.682 12 10 19.438z'/%3E%3C/svg%3E") no-repeat 50% 50%;
  -webkit-mask-size: cover;
  mask-size: cover;
  background-color: var(--weui-FG-0); */
}

.weui-navigation-bar__center {
  font-size: 17px;
  text-align: center;
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  height: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  text {
    width: 100%;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}

.weui-navigation-bar__right {
  // width: 94px;
}

.weui-navigation-bar__loading {
  margin-right: 4px;
  align-items: center;
}

.weui-loading {
  font-size: 16px;
  width: 16px;
  height: 16px;
  display: block;
  background: transparent
    url("data:image/svg+xml,%3C%3Fxml version='1.0' encoding='UTF-8'%3F%3E%3Csvg width='80px' height='80px' viewBox='0 0 80 80' version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3Ctitle%3Eloading%3C/title%3E%3Cdefs%3E%3ClinearGradient x1='94.0869141%25' y1='0%25' x2='94.0869141%25' y2='90.559082%25' id='linearGradient-1'%3E%3Cstop stop-color='%23606060' stop-opacity='0' offset='0%25'%3E%3C/stop%3E%3Cstop stop-color='%23606060' stop-opacity='0.3' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3ClinearGradient x1='100%25' y1='8.67370605%25' x2='100%25' y2='90.6286621%25' id='linearGradient-2'%3E%3Cstop stop-color='%23606060' offset='0%25'%3E%3C/stop%3E%3Cstop stop-color='%23606060' stop-opacity='0.3' offset='100%25'%3E%3C/stop%3E%3C/linearGradient%3E%3C/defs%3E%3Cg stroke='none' stroke-width='1' fill='none' fill-rule='evenodd' opacity='0.9'%3E%3Cg%3E%3Cpath d='M40,0 C62.09139,0 80,17.90861 80,40 C80,62.09139 62.09139,80 40,80 L40,73 C58.2253967,73 73,58.2253967 73,40 C73,21.7746033 58.2253967,7 40,7 L40,0 Z' fill='url(%23linearGradient-1)'%3E%3C/path%3E%3Cpath d='M40,0 L40,7 C21.7746033,7 7,21.7746033 7,40 C7,58.2253967 21.7746033,73 40,73 L40,80 C17.90861,80 0,62.09139 0,40 C0,17.90861 17.90861,0 40,0 Z' fill='url(%23linearGradient-2)'%3E%3C/path%3E%3Ccircle id='Oval' fill='%23606060' cx='40.5' cy='3.5' r='3.5'%3E%3C/circle%3E%3C/g%3E%3C/g%3E%3C/svg%3E%0A")
    no-repeat;
  background-size: 100%;
  margin-left: 0;
  animation: loading linear infinite 1s;
}

@keyframes loading {
  from {
    transform: rotate(0);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
