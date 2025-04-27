<template>
  <NavigationBar title="详情" :homeButton="true" :back="true" />
  <scroll-view type="list" scroll-y class="scrollable" padding="{{[8, 8, 8, 8]}}" show-scrollbar="{{false}}">
    <view class="detail">
      <view class="img-wrap center">
        <image mode="aspectFit" class="img" src="../../static/logo.png" @click="wow" />
      </view>
      <view class="article">
        <view class="title">
          <text>Title</text>
        </view>
        <view>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Vulputate dignissim suspendisse in est. Ut ornare lectus sit amet. Eget nunc lobortis mattis
          aliquam faucibus purus in. Hendrerit gravida rutrum quisque non tellus orci ac auctor. Mattis aliquam faucibus
          purus in massa. Tellus rutrum tellus pellentesque eu tincidunt tortor. Nunc eget lorem dolor sed. Nulla at
          volutpat diam ut venenatis tellus in metus. Tellus cras adipiscing enim eu turpis. Pretium fusce id velit ut
          tortor. Adipiscing enim eu turpis egestas pretium. Quis varius quam quisque id. Blandit aliquam etiam erat
          velit scelerisque. In nisl nisi scelerisque eu. Semper risus in hendrerit gravida rutrum quisque. Suspendisse
          in est ante in nibh mauris cursus mattis molestie. Adipiscing elit duis tristique sollicitudin nibh sit amet
          commodo nulla. Pretium viverra suspendisse potenti nullam ac tortor vitae.\n \n Lorem ipsum dolor sit amet,
          consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate
          dignissim suspendisse in est. Ut ornare lectus sit amet. Eget nunc lobortis mattis aliquam faucibus purus in.
          Hendrerit gravida rutrum quisque non tellus orci ac auctor. Mattis aliquam faucibus purus in massa. Tellus
          rutrum tellus pellentesque eu tincidunt tortor. Nunc eget lorem dolor sed. Nulla at volutpat diam ut venenatis
          tellus in metus. Tellus cras adipiscing enim eu turpis. Pretium fusce id velit ut tortor. Adipiscing enim eu
          turpis egestas pretium. Quis varius quam quisque id. Blandit aliquam etiam erat velit scelerisque. In nisl
          nisi scelerisque eu. Semper risus in hendrerit gravida rutrum quisque. Suspendisse in est ante in nibh mauris
          cursus mattis molestie. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Pretium
          viverra suspendisse potenti nullam ac tortor vitae;
        </view>
      </view>
    </view></scroll-view
  >
</template>

<script>
import NavigationBar from '../../components/navigation-bar.vue'
export default {
  components: {
    NavigationBar,
  },

  data() {
    return {}
  },

  methods: {},
}
</script>

<style>
page {
  height: 100vh;
  display: flex;
  flex-direction: column;
}

.scrollable {
  flex: 1;
  overflow: hidden;
  box-sizing: border-box;
}
.detail {
  margin-top: 20px;
}
</style>
