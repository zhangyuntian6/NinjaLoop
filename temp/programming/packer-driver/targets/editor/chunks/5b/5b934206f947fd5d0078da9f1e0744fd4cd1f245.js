System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, Label, instantiate, Button, Message, eventMsg, TalentItem, UIPanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, SelectTalentPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "../Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITalentInfo(extras) {
    _reporterNs.report("ITalentInfo", "../Talent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventMsg(extras) {
    _reporterNs.report("eventMsg", "../Utils/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTalentItem(extras) {
    _reporterNs.report("TalentItem", "./TalentItem", _context.meta, extras);
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
      Button = _cc.Button;
    }, function (_unresolved_2) {
      Message = _unresolved_2.Message;
    }, function (_unresolved_3) {
      eventMsg = _unresolved_3.eventMsg;
    }, function (_unresolved_4) {
      TalentItem = _unresolved_4.TalentItem;
    }, function (_unresolved_5) {
      UIPanel = _unresolved_5.UIPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4d7b4gRL9Ga7bKz0sZBuMA", "SelectTalentPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'Label', 'instantiate', 'Button']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("SelectTalentPanel", SelectTalentPanel = (_dec = ccclass('SelectTalentPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Button
      }), _dec5 = property({
        type: Label
      }), _dec6 = property({
        type: Label
      }), _dec(_class = (_class2 = class SelectTalentPanel extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "talentItemGroup", _descriptor, this);

          _initializerDefineProperty(this, "talentItemPrfb", _descriptor2, this);

          _initializerDefineProperty(this, "checkButton", _descriptor3, this);

          _initializerDefineProperty(this, "checkButtonLbl", _descriptor4, this);

          _initializerDefineProperty(this, "tips", _descriptor5, this);

          this.talentItems = [];
          this.selectedTalentIndices = [];
          this._talentList = void 0;
          this._limitSelectedTalentNum = 3;
        }

        start() {}

        init(talentList) {
          this._talentList = talentList;
          this.talentItemGroup.removeAllChildren();
          this.selectedTalentIndices = [];
          this.talentItems = [];
          this.tips.string = `最多选择${this._limitSelectedTalentNum}个天赋`;
          talentList.forEach((talentInfo, index) => {
            const itemNode = instantiate(this.talentItemPrfb);
            itemNode.setParent(this.talentItemGroup);
            const item = itemNode.getComponent(_crd && TalentItem === void 0 ? (_reportPossibleCrUseOfTalentItem({
              error: Error()
            }), TalentItem) : TalentItem);
            item.index = index;
            item.setData(talentInfo);
            this.talentItems.push(item);
            item.onItemClick = this.onTalentItemClicked.bind(this);
          });
          this.updateCheckButtonState();
        }

        updateCheckButtonState() {
          if (this.selectedTalentIndices.length === this._limitSelectedTalentNum) {
            this.checkButtonLbl.string = "完成";
            this.checkButton.interactable = true;
          } else {
            const left = this._limitSelectedTalentNum - this.selectedTalentIndices.length;
            this.checkButtonLbl.string = `还差${left}个天赋`;
            this.checkButton.interactable = false;
          }
        }

        onTalentItemClicked(itemIndex) {
          const idx = this.selectedTalentIndices.indexOf(itemIndex);

          if (idx >= 0) {
            this.selectedTalentIndices.splice(idx, 1);
          } else {
            // 超过数量则替换掉上个选择的对象
            if (this.selectedTalentIndices.length === this._limitSelectedTalentNum) {
              this.selectedTalentIndices.splice(this._limitSelectedTalentNum - 1, 1);
            }

            this.selectedTalentIndices.push(itemIndex);
          }

          this.talentItems.forEach((item, index) => {
            if (this.selectedTalentIndices.indexOf(index) >= 0) {
              item.setSelected(true);
            } else {
              item.setSelected(false);
            }
          });
          this.updateCheckButtonState();
        }

        onCheckButtonClicked() {
          const selectedTalentList = [];
          this.selectedTalentIndices.forEach(idx => {
            selectedTalentList.push(this._talentList[idx]);
          });
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).emit((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).TalentSelectEnd, selectedTalentList);
        }

        onShow(talentList) {
          this.init(talentList);
        } // update (deltaTime: number) {
        //     // [4]
        // }


      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "talentItemGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "talentItemPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "checkButton", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "checkButtonLbl", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "tips", [_dec6], {
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
//# sourceMappingURL=5b934206f947fd5d0078da9f1e0744fd4cd1f245.js.map