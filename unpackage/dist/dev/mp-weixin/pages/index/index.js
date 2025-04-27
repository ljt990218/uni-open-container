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
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_assets._imports_0,
    b: $data.closedElevation,
    c: $data.openElevation,
    d: $data.closedBorderRadius,
    e: $data.openBorderRadius,
    f: $data.type,
    g: $data.duration,
    h: common_vendor.o((...args) => $options.goDetail && $options.goDetail(...args)),
    i: $data.closedElevation,
    j: $data.openElevation,
    k: $data.closedBorderRadius,
    l: $data.openBorderRadius,
    m: $data.type,
    n: $data.duration,
    o: common_vendor.o((...args) => $options.goDetail && $options.goDetail(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map
