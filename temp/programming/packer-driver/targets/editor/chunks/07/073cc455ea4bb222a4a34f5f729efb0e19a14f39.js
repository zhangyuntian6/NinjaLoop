System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, _dec, _class, _crd, ccclass, property, UIPanel;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d4254NMR3hCDYP9uPC5N4jf", "UIPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UIPanel", UIPanel = (_dec = ccclass('UIPanel'), _dec(_class = class UIPanel extends Component {
        // update (deltaTime: number) {
        //     // [4]
        // }
        show(...args) {
          this.node.active = true;
          this.onShow(...args);
        }

        onShow(...args) {}

        hide() {
          this.node.active = false;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=073cc455ea4bb222a4a34f5f729efb0e19a14f39.js.map