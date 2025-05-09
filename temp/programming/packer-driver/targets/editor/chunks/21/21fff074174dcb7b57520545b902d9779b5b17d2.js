System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RichText, UITransform, Size, Label, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, LifeTrackItem;

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
      Node = _cc.Node;
      RichText = _cc.RichText;
      UITransform = _cc.UITransform;
      Size = _cc.Size;
      Label = _cc.Label;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "13c8150xT9OHoVDT5Oz5bA9", "LifeTrackItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RichText', 'UITransform', 'Size', 'Label']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LifeTrackItem", LifeTrackItem = (_dec = ccclass('LifeTrackItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: RichText
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec(_class = (_class2 = class LifeTrackItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "agaLabel", _descriptor, this);

          _initializerDefineProperty(this, "descriptionText", _descriptor2, this);

          _initializerDefineProperty(this, "descriptionBG", _descriptor3, this);

          _initializerDefineProperty(this, "lineNode", _descriptor4, this);
        }

        start() {// [3]
        }

        setData(age, description) {
          this.agaLabel.string = age;
          this.descriptionText.string = description;
          const height = this.getHeight();
          const descriptionBGTrans = this.descriptionBG.getComponent(UITransform);
          const size = descriptionBGTrans.contentSize;
          descriptionBGTrans.contentSize = new Size(size.width, height);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        getHeight() {
          const size = this.descriptionText.getComponent(UITransform).contentSize;
          return size.height;
        }

        setLineLength(length) {
          const lineNodeTrans = this.lineNode.getComponent(UITransform);
          const size = lineNodeTrans.contentSize;
          lineNodeTrans.contentSize = new Size(size.width, length);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "agaLabel", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "descriptionText", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "descriptionBG", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lineNode", [_dec5], {
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
//# sourceMappingURL=21fff074174dcb7b57520545b902d9779b5b17d2.js.map