System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, EditBox, Label, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, DistributePropItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      EditBox = _cc.EditBox;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "97386ft0aBMH5dxsVX1kPDt", "DistributePropItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'EditBox', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DistributePropItem", DistributePropItem = (_dec = ccclass('DistributePropItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: EditBox
      }), _dec(_class = (_class2 = class DistributePropItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "titleLbl", _descriptor, this);

          _initializerDefineProperty(this, "pointEditBox", _descriptor2, this);

          this.onAddButtonClick = void 0;
          this.onReduceButtonClick = void 0;
          this.key = void 0;
          this._point = 0;
        }

        get point() {
          return this._point;
        }

        set point(value) {
          this._point = value;
          this.pointEditBox.string = this._point.toString();
        }

        setTitle(title) {
          this.titleLbl.string = title;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        onAddButtonClicked() {
          var _this$onAddButtonClic;

          (_this$onAddButtonClic = this.onAddButtonClick) == null || _this$onAddButtonClic.call(this, this);
        }

        onReduceButtonClicked() {
          var _this$onReduceButtonC;

          (_this$onReduceButtonC = this.onReduceButtonClick) == null || _this$onReduceButtonC.call(this, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "titleLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pointEditBox", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=632ca17fbbff55265e9c9029c2a19cfb72269e55.js.map