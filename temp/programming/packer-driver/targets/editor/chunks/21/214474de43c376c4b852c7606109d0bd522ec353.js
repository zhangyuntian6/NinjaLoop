System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, UIOpacity, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TagItem;

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
      Label = _cc.Label;
      UIOpacity = _cc.UIOpacity;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30215PPV8RECbcWcSvYkUZZ", "TagItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TagItem", TagItem = (_dec = ccclass('TagItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: UIOpacity
      }), _dec(_class = (_class2 = class TagItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "tagName", _descriptor, this);

          _initializerDefineProperty(this, "uiOpacity", _descriptor2, this);
        }

        start() {// [3]
        }

        setFontSize(size) {
          this.tagName.fontSize = size;
        }

        setOpacity(op) {
          this.uiOpacity.opacity = op;
        }

        setTagName(name) {
          this.tagName.string = name;
        }

        refresh(fallLength, radius) {
          const pos = this.node.position;
          const scale = fallLength / (fallLength - pos.z);
          const alpha = (pos.z + radius) / (radius * 2);
          this.tagName.fontSize = 15 * scale;
          this.uiOpacity.opacity = (alpha + 0.5) * 255;
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tagName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "uiOpacity", [_dec3], {
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
//# sourceMappingURL=214474de43c376c4b852c7606109d0bd522ec353.js.map