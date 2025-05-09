System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Button, Sprite, Color, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, gradeColor, TalentItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfITalentInfo(extras) {
    _reporterNs.report("ITalentInfo", "../Talent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Button = _cc.Button;
      Sprite = _cc.Sprite;
      Color = _cc.Color;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3512a8fVOxJgIUDJCjLwZRo", "TalentItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Button', 'Sprite', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);
      gradeColor = [new Color().fromHEX('#464646'), new Color().fromHEX('#6495ed'), new Color().fromHEX('#e2a7ff'), new Color().fromHEX('#ffa07a')];

      _export("TalentItem", TalentItem = (_dec = ccclass('TalentItem'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Sprite
      }), _dec4 = property({
        type: Button
      }), _dec(_class = (_class2 = class TalentItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "nameLbl", _descriptor, this);

          _initializerDefineProperty(this, "frame", _descriptor2, this);

          _initializerDefineProperty(this, "ItemButton", _descriptor3, this);

          this.index = 0;
          this.onItemClick = null;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        setData(data) {
          this.nameLbl.string = data.name + ("(" + data.description + ")");
          this.ItemButton.normalColor = gradeColor[data.grade];
        }

        onButtonClick() {
          var _this$onItemClick;

          (_this$onItemClick = this.onItemClick) == null || _this$onItemClick.call(this, this.index);
        }

        setSelected(selected) {
          if (selected) {
            this.frame.color = Color.GREEN;
          } else {
            this.frame.color = Color.WHITE;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "nameLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "frame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "ItemButton", [_dec4], {
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
//# sourceMappingURL=ced600b077d4a7a06698cd5d9cbc42f12a88b2f5.js.map