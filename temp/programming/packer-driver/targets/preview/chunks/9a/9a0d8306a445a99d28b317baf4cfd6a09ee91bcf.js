System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Widget, tween, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AchievementHint;

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
      Widget = _cc.Widget;
      tween = _cc.tween;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a7684CddlxIA6F0uCsqK1Kh", "AchievementHint", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Label', 'Widget', 'tween', 'Vec2', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AchievementHint", AchievementHint = (_dec = ccclass('AchievementHint'), _dec2 = property({
        type: Label
      }), _dec3 = property({
        type: Widget
      }), _dec(_class = (_class2 = class AchievementHint extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "contentLbl", _descriptor, this);

          _initializerDefineProperty(this, "widget", _descriptor2, this);

          this._isShowing = false;
          this._timer = null;
        }

        start() {// [3]
        } // update (deltaTime: number) {
        //     // [4]
        // }


        show(content, time) {
          if (time === void 0) {
            time = 1;
          }

          if (!this._isShowing) {
            this._isShowing;
            this.node.active = true;
            this.contentLbl.string = content;
            this.widget.top = -100;
            tween(this.widget).to(0.5, {
              top: 0
            }).start(); //tween(this.node).to(0.5, {position: new Vec3(0, 560, 0)});

            this._timer = setTimeout(() => {
              this.node.active = false;
              this._isShowing = false;
            }, time * 1000);
          } else {
            this.contentLbl.string = content;
            clearTimeout(this._timer);
            this._timer = setTimeout(() => {
              this.node.active = false;
              this._isShowing = false;
            }, time * 1000);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "contentLbl", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "widget", [_dec3], {
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
//# sourceMappingURL=9a0d8306a445a99d28b317baf4cfd6a09ee91bcf.js.map