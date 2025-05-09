System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, instantiate, eventMsg, TagItem, UIPanel, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, fallLength, RADIUS, oneRadian, StartMenuPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfeventMsg(extras) {
    _reporterNs.report("eventMsg", "../Utils/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTagItem(extras) {
    _reporterNs.report("TagItem", "./TagItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIPanel(extras) {
    _reporterNs.report("UIPanel", "./UIPanel", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
    }, function (_unresolved_2) {
      eventMsg = _unresolved_2.eventMsg;
    }, function (_unresolved_3) {
      TagItem = _unresolved_3.TagItem;
    }, function (_unresolved_4) {
      UIPanel = _unresolved_4.UIPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ff68dOP4v5KTacY3/xxvNmR", "StartMenuPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'Vec3', 'Label', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);
      fallLength = 400;
      RADIUS = 200;
      oneRadian = Math.PI / 180;

      _export("StartMenuPanel", StartMenuPanel = (_dec = ccclass('StartMenuPanel'), _dec2 = property({
        type: Prefab
      }), _dec3 = property({
        type: Node
      }), _dec(_class = (_class2 = class StartMenuPanel extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "tagLabelPrfb", _descriptor, this);

          _initializerDefineProperty(this, "tagCloud", _descriptor2, this);

          this._tagItems = [];
          this._angleX = 0;
          this._angleY = 0;
          this._isAutoRotY = true;
        }

        onStartButtonClicked() {
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).emit('StartGame');
        }

        onShow(tagList) {
          this.createTagCloud(tagList);
        }

        createTagCloud(tagList) {
          this._tagItems = [];
          this.tagCloud.removeAllChildren();
          var tagLength = tagList.length;

          for (var i = 0; i < tagLength; i++) {
            var k = (2 * (i + 1) - 1) / tagLength - 1;
            var a = Math.acos(k);
            var b = a * Math.sqrt(tagLength * Math.PI); // var a = Math.random()*2*Math.PI;
            // var b = Math.random()*2*Math.PI;

            var x = RADIUS * Math.sin(a) * Math.cos(b);
            var y = RADIUS * Math.sin(a) * Math.sin(b);
            var z = RADIUS * Math.cos(a);
            var labelNode = instantiate(this.tagLabelPrfb);
            labelNode.setParent(this.tagCloud);
            labelNode.setPosition(x, y, z);
            var tagItem = labelNode.getComponent(_crd && TagItem === void 0 ? (_reportPossibleCrUseOfTagItem({
              error: Error()
            }), TagItem) : TagItem);

            this._tagItems.push(tagItem);

            tagItem.setTagName(tagList[i]);
            tagItem.refresh(fallLength, RADIUS);
          }
        }

        rotateX() {
          var cos = Math.cos(this._angleX);
          var sin = Math.sin(this._angleX);

          this._tagItems.forEach(tagItem => {
            var pos = tagItem.node.position;
            var y1 = pos.y * cos - pos.z * sin;
            var z1 = pos.z * cos + pos.y * sin;
            tagItem.node.setPosition(pos.x, y1, z1);
          });
        }

        rotateY() {
          var cos = Math.cos(this._angleY);
          var sin = Math.sin(this._angleY);

          this._tagItems.forEach(tagItem => {
            var pos = tagItem.node.position;
            var x1 = pos.x * cos - pos.z * sin;
            var z1 = pos.z * cos + pos.x * sin;
            tagItem.node.setPosition(x1, pos.y, z1);
          });
        }

        rotateItems() {
          this.rotateX();
          this.rotateY();

          this._tagItems.forEach(tagItem => {
            tagItem.refresh(fallLength, RADIUS);
          });
        }

        update(deltaTime) {
          // [4]
          if (this._isAutoRotY) {
            this._angleY = deltaTime * oneRadian * 5;
            this.rotateItems();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "tagLabelPrfb", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tagCloud", [_dec3], {
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
//# sourceMappingURL=90544767d7c83df4c4711916e216604920262602.js.map