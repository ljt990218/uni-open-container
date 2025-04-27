"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const NavigationBar = () => "../../components/navigation-bar.js";
const _sfc_main = {
  components: {
    NavigationBar
  },
  data() {
    return {};
  },
  methods: {}
};
if (!Array) {
  const _component_NavigationBar = common_vendor.resolveComponent("NavigationBar");
  _component_NavigationBar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "详情",
      homeButton: true,
      back: true
    }),
    b: common_assets._imports_0,
    c: common_vendor.o((...args) => _ctx.wow && _ctx.wow(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/text/text.js.map
