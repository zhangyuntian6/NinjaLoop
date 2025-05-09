System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, Label, instantiate, resources, Message, lifeMgr, eventMsg, DistributePropItem, UIPanel, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, DistributePropPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOflifeMgr(extras) {
    _reporterNs.report("lifeMgr", "../Life", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITalentInfo(extras) {
    _reporterNs.report("ITalentInfo", "../Talent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventMsg(extras) {
    _reporterNs.report("eventMsg", "../Utils/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDistributePropItem(extras) {
    _reporterNs.report("DistributePropItem", "./DistributePropItem", _context.meta, extras);
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
      Label = _cc.Label;
      instantiate = _cc.instantiate;
      resources = _cc.resources;
    }, function (_unresolved_2) {
      Message = _unresolved_2.Message;
    }, function (_unresolved_3) {
      lifeMgr = _unresolved_3.lifeMgr;
    }, function (_unresolved_4) {
      eventMsg = _unresolved_4.eventMsg;
    }, function (_unresolved_5) {
      DistributePropItem = _unresolved_5.DistributePropItem;
    }, function (_unresolved_6) {
      UIPanel = _unresolved_6.UIPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b4a3eoREDRPQZL9VkpDb8rf", "DistributePropPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Label', 'instantiate', 'resources']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DistributePropPanel", DistributePropPanel = (_dec = ccclass('DistributePropPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Label
      }), _dec(_class = (_class2 = class DistributePropPanel extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "propGroup", _descriptor, this);

          _initializerDefineProperty(this, "distributePropItemPrfb", _descriptor2, this);

          _initializerDefineProperty(this, "totalPointsLbl", _descriptor3, this);

          this.totalPoints = 20;
          this.distributePropItemsMap = new Map();
          this.distributePropKeys = [];
          this.propNameMap = {};
        }

        start() {// 移除start中的配置加载，因为init方法会处理
        }

        init(selectedTalentList) {
          // 确保配置加载完成后再初始化界面
          resources.load('defines', (err, jsonAsset) => {
            if (err) {
              console.error('Failed to load defines.json:', err);
              return;
            }

            var config = jsonAsset.json;
            this.distributePropKeys = config.DistributePropKeys;
            this.totalPoints = config.PropConfig.InitialPoints;
            this.propNameMap = config.PropNameMap; // 初始化界面

            this.propGroup.removeAllChildren();
            this.distributePropItemsMap.clear();
            this.distributePropKeys.forEach(key => {
              this.distributePropItemsMap.set(key, this.createPropItem(key, this.propNameMap[key]));
            }); // calculate total points

            this.totalPoints += (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
              error: Error()
            }), lifeMgr) : lifeMgr).getTalentAllocationAddition(selectedTalentList.map(_ref => {
              var {
                id
              } = _ref;
              return id;
            }));
            this.updateLeftPoints();
          });
        }

        createPropItem(key, name) {
          var itemNode = instantiate(this.distributePropItemPrfb);
          itemNode.setParent(this.propGroup);
          var item = itemNode.getComponent(_crd && DistributePropItem === void 0 ? (_reportPossibleCrUseOfDistributePropItem({
            error: Error()
          }), DistributePropItem) : DistributePropItem);
          item.setTitle(name);
          item.key = key;
          item.point = 0;
          item.onAddButtonClick = this.onItemAddButtonClick.bind(this);
          item.onReduceButtonClick = this.onItemReduceButtonClick.bind(this);
          return item;
        }

        getLeftPoints() {
          var usedPoints = Array.from(this.distributePropItemsMap.values()).reduce((pre, cur) => {
            return pre + cur.point;
          }, 0);
          return this.totalPoints - usedPoints;
        }

        onItemAddButtonClick(item) {
          if (this.getLeftPoints() > 0) {
            item.point += 1;
            this.updateLeftPoints();
          }
        }

        onItemReduceButtonClick(item) {
          if (item.point > 0) {
            item.point -= 1;
            this.updateLeftPoints();
          }
        }

        updateLeftPoints() {
          this.totalPointsLbl.string = this.getLeftPoints().toString();
        }

        onCheckButtonClicked() {
          resources.load('defines', (err, jsonAsset) => {
            if (err) {
              console.error('Failed to load defines.json:', err);
              return;
            }

            var config = jsonAsset.json;
            var propData = {
              SPR: config.PropConfig.InitialSPR
            };
            this.distributePropKeys.forEach(key => {
              propData[key] = this.distributePropItemsMap.get(key).point;
            });
            (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
              error: Error()
            }), eventMsg) : eventMsg).emit((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
              error: Error()
            }), Message) : Message).DistributePropEnd, propData);
          });
        }

        onRandomDistributeButtonClicked() {
          var t = this.totalPoints;
          var arr = [10, 10, 10, 10];

          while (t > 0) {
            var sub = Math.round(Math.random() * (Math.min(t, 10) - 1)) + 1;

            while (true) {
              var select = Math.floor(Math.random() * 4) % 4;
              if (arr[select] - sub < 0) continue;
              arr[select] -= sub;
              t -= sub;
              break;
            }
          }

          Array.from(this.distributePropItemsMap.keys()).forEach((key, index) => {
            var item = this.distributePropItemsMap.get(key);
            item.point = 10 - arr[index];
          });
          this.updateLeftPoints();
        }

        onShow(selectedTalentList) {
          this.init(selectedTalentList);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "propGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "distributePropItemPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "totalPointsLbl", [_dec4], {
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
//# sourceMappingURL=42e75369f5a6c05ae464e9af613c2f4a39f2e8be.js.map