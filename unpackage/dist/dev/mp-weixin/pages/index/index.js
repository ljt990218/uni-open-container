"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      type: "fade",
      duration: 300,
      closedElevation: 1,
      closedBorderRadius: 4,
      openElevation: 4,
      openBorderRadius: 0
    };
  },
  onLoad() {
  },
  methods: {
    goDetail() {
      common_vendor.index.navigateTo({
        url: "/pages/text/text"
      });
    },
    wow() {
      common_vendor.index.navigateTo({
        url: "/pages/wow/wow"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.o((...args) => $options.wow && $options.wow(...args)),
    c: $data.closedElevation,
    d: $data.openElevation,
    e: $data.closedBorderRadius,
    f: $data.openBorderRadius,
    g: $data.type,
    h: $data.duration,
    i: common_vendor.o((...args) => $options.goDetail && $options.goDetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
