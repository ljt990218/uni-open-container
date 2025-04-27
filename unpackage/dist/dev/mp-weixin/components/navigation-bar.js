"use strict";
const common_vendor = require("../common/vendor.js");
const common_assets = require("../common/assets.js");
const _sfc_main = {
  name: "navigation-bar",
  data() {
    return {
      ios: false,
      leftWidth: "",
      safeAreaTop: "",
      statusBarHeight: "",
      navigationBarHeight: ""
    };
  },
  props: {
    extClass: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    background: {
      type: String,
      default: "#ffffff"
    },
    color: {
      type: String,
      default: "#000000"
    },
    back: {
      type: Boolean,
      default: true
    },
    loading: {
      type: Boolean,
      default: false
    },
    homeButton: {
      type: Boolean,
      default: false
    },
    displayStyle: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.initNavBar();
  },
  methods: {
    initNavBar() {
      const rect = common_vendor.index.getMenuButtonBoundingClientRect();
      common_vendor.index.__f__("log", "at components/navigation-bar.vue:129", "getMenuButtonBoundingClientRect", rect);
      common_vendor.index.getSystemInfo({
        success: (res) => {
          common_vendor.index.__f__("log", "at components/navigation-bar.vue:133", "getSystemInfo", res);
          const isAndroid = res.platform === "android";
          const statusBarHeight = res.statusBarHeight;
          this.ios = !isAndroid;
          this.navigationBarHeight = `${rect.height}px`;
          this.leftWidth = `width: ${res.safeArea.width - rect.left}px`;
          let wxHeight = 0;
          if (isAndroid) {
            wxHeight = 48 + statusBarHeight;
          } else {
            wxHeight = 44 + statusBarHeight;
          }
          common_vendor.index.__f__("log", "at components/navigation-bar.vue:148", "wxHeight", wxHeight);
          common_vendor.index.__f__("log", "at components/navigation-bar.vue:149", "rect.height + rect.top", rect.height + rect.top);
          common_vendor.index.__f__("log", "at components/navigation-bar.vue:150", "wxHeight - (rect.height + rect.top)", wxHeight - (rect.height + rect.top));
          common_vendor.index.__f__("log", "at components/navigation-bar.vue:152", "safeAreaTop", rect.height + rect.top + (wxHeight - (rect.height + rect.top)));
          this.safeAreaTop = `padding-top: ${rect.top}px; height: ${rect.height + rect.top + (wxHeight - (rect.height + rect.top))}px;`;
        }
      });
    },
    back() {
      let page = getCurrentPages();
      common_vendor.index.__f__("log", "at components/navigation-bar.vue:163", "page", page, page.length);
      if (page.length <= 1) {
        common_vendor.index.switchTab({
          url: "/pages/index/index"
        });
        return;
      }
      common_vendor.index.navigateBack({
        delta: 1
      });
    },
    home() {
      common_vendor.index.switchTab({
        url: "/pages/index/index"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: $options.back || $props.homeButton
  }, $options.back || $props.homeButton ? common_vendor.e({
    b: $options.back
  }, $options.back ? {
    c: common_assets._imports_0$1,
    d: common_vendor.o((...args) => $options.back && $options.back(...args))
  } : {}, {
    e: $props.homeButton
  }, $props.homeButton ? {
    f: common_vendor.o((...args) => $options.home && $options.home(...args))
  } : {}) : {}, {
    g: $data.leftWidth,
    h: $props.loading
  }, $props.loading ? {} : {}, {
    i: $props.title
  }, $props.title ? {
    j: common_vendor.t($props.title)
  } : {}, {
    k: common_vendor.n($data.ios ? "ios" : "android"),
    l: $data.navigationBarHeight,
    m: common_vendor.n($props.extClass),
    n: $props.color,
    o: $props.background,
    p: common_vendor.s($props.displayStyle),
    q: common_vendor.s($data.safeAreaTop)
  });
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createComponent(Component);
//# sourceMappingURL=../../.sourcemap/mp-weixin/components/navigation-bar.js.map
