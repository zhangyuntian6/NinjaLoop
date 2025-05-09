System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, instantiate, Vec3, ScrollView, Button, Label, Color, PropNameMap, lifeMgr, eventMsg, LifeTrackItem, PropItem, UIPanel, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, showPropKeys, autoPlayColor, LifeTrackPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfPropNameMap(extras) {
    _reporterNs.report("PropNameMap", "../Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITrackData(extras) {
    _reporterNs.report("ITrackData", "../Life", _context.meta, extras);
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

  function _reportPossibleCrUseOfLifeTrackItem(extras) {
    _reporterNs.report("LifeTrackItem", "./LifeTrackItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPropItem(extras) {
    _reporterNs.report("PropItem", "./PropItem", _context.meta, extras);
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
      Vec3 = _cc.Vec3;
      ScrollView = _cc.ScrollView;
      Button = _cc.Button;
      Label = _cc.Label;
      Color = _cc.Color;
    }, function (_unresolved_2) {
      PropNameMap = _unresolved_2.PropNameMap;
    }, function (_unresolved_3) {
      lifeMgr = _unresolved_3.lifeMgr;
    }, function (_unresolved_4) {
      eventMsg = _unresolved_4.eventMsg;
    }, function (_unresolved_5) {
      LifeTrackItem = _unresolved_5.LifeTrackItem;
    }, function (_unresolved_6) {
      PropItem = _unresolved_6.PropItem;
    }, function (_unresolved_7) {
      UIPanel = _unresolved_7.UIPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5aab2jXtf9OHJM7FC+9+iKf", "LifeTrackPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'UITransform', 'Vec3', 'ScrollView', 'Button', 'Label', 'Color']);

      ({
        ccclass,
        property
      } = _decorator);
      showPropKeys = ['CHR', 'INT', 'STR', 'MNY', 'SPR'];
      autoPlayColor = new Color(53, 194, 115);

      _export("LifeTrackPanel", LifeTrackPanel = (_dec = ccclass('LifeTrackPanel'), _dec2 = property(ScrollView), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Prefab
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Prefab
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: Node
      }), _dec9 = property({
        type: Node
      }), _dec10 = property({
        type: Button
      }), _dec(_class = (_class2 = class LifeTrackPanel extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);

          _initializerDefineProperty(this, "lifeTrackGroup", _descriptor2, this);

          _initializerDefineProperty(this, "lifeTrackItemPrfb", _descriptor3, this);

          _initializerDefineProperty(this, "propGroup", _descriptor4, this);

          _initializerDefineProperty(this, "propItemPrfb", _descriptor5, this);

          _initializerDefineProperty(this, "nextYearButtonNode", _descriptor6, this);

          _initializerDefineProperty(this, "autoPlayButtonNode", _descriptor7, this);

          _initializerDefineProperty(this, "restartButtonNode", _descriptor8, this);

          _initializerDefineProperty(this, "changeSpeedButton", _descriptor9, this);

          this._autoPlayButtonLbl = void 0;
          this._autoPlayButton = void 0;
          this._changeSpeedButtonLbl = void 0;
          this._isEnd = false;
          this._isAutoPlay = false;
          this._triggerTime = 1000;
          // 1s
          this._timeScale = 1;
          this._timeScaleArray = [1, 2, 4, 8, 20];
          this._curTimeScaleIndex = 0;
          this._contentUITrans = void 0;
          this._spacing = 5;
          this._curMaxHeight = 0;
          this._propItemsMap = new Map();
        }

        get realTriggerTime() {
          return this._triggerTime / this._timeScale;
        }

        onLoad() {// this._contentUITrans = this.lifeTrackGroup._uiProps.uiTransformComp;
        }

        start() {}

        initPanel() {
          this._contentUITrans = this.lifeTrackGroup._uiProps.uiTransformComp;
          this._autoPlayButtonLbl = this.autoPlayButtonNode.getComponentInChildren(Label);
          this._autoPlayButton = this.autoPlayButtonNode.getComponent(Button);
          this._changeSpeedButtonLbl = this.changeSpeedButton.getComponentInChildren(Label);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        createLifeTrack(age, description) {
          var itemNode = instantiate(this.lifeTrackItemPrfb);
          itemNode.setParent(this.lifeTrackGroup);
          var item = itemNode.getComponent(_crd && LifeTrackItem === void 0 ? (_reportPossibleCrUseOfLifeTrackItem({
            error: Error()
          }), LifeTrackItem) : LifeTrackItem);
          item.setData(age, description);
          var itemHeight = item.getHeight();
          itemNode.setPosition(new Vec3(0, this._curMaxHeight, 0));
          item.setLineLength(itemHeight + this._spacing);
          this._curMaxHeight -= itemHeight + this._spacing;
          this._contentUITrans.height = -this._curMaxHeight;
        }

        createPropItem(name, value) {
          var itemNode = instantiate(this.propItemPrfb);
          itemNode.setParent(this.propGroup);
          var item = itemNode.getComponent(_crd && PropItem === void 0 ? (_reportPossibleCrUseOfPropItem({
            error: Error()
          }), PropItem) : PropItem);
          item.setData(name, value);
          return item;
        }

        onReplayButtonClicked() {
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).emit('Replay');
        }

        initProp() {
          this.propGroup.removeAllChildren();

          this._propItemsMap.clear();

          var property = (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
            error: Error()
          }), lifeMgr) : lifeMgr).getLastRecord();
          showPropKeys.forEach(key => {
            this._propItemsMap.set(key, this.createPropItem((_crd && PropNameMap === void 0 ? (_reportPossibleCrUseOfPropNameMap({
              error: Error()
            }), PropNameMap) : PropNameMap)[key], property[key]));
          });
        }

        updatePropData() {
          var property = (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
            error: Error()
          }), lifeMgr) : lifeMgr).getLastRecord();
          showPropKeys.forEach(key => {
            var item = this._propItemsMap.get(key);

            item == null || item.updateValue(property[key]);
          });
        }

        onShow(selectedTalentList, propData) {
          this._isEnd = false;
          this._isAutoPlay = false;
          this._curMaxHeight = 0; // bug:start不执行，先放这里

          this.initPanel();
          this.nextYearButtonNode.active = true;
          this.autoPlayButtonNode.active = true;
          this.restartButtonNode.active = false;
          this.setAutoPlayButtonState(false);
          this.lifeTrackGroup.removeAllChildren();
          var initData = {};
          Object.assign(initData, propData);
          var selectedTalentIds = selectedTalentList.map(talentInfo => talentInfo.id);
          initData.TLT = selectedTalentIds;
          var contents = (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
            error: Error()
          }), lifeMgr) : lifeMgr).restart(initData);
          this.initProp();
          this.triggerOneLifeTrack();
        }

        onNextYearButtonClicked() {
          this.triggerOneLifeTrack();
        }

        onAutoPlayButtonClicked() {
          if (this._isAutoPlay) {
            this._isAutoPlay = false;
          } else {
            this._isAutoPlay = true;
            this.triggerOneLifeTrack();
          }

          this.setAutoPlayButtonState(this._isAutoPlay);
        }

        setAutoPlayButtonState(isPlaying) {
          if (isPlaying) {
            this._autoPlayButton.normalColor = autoPlayColor;
            this.changeSpeedButton.node.active = true;
            this._changeSpeedButtonLbl.string = "X" + this._timeScale;
          } else {
            this._autoPlayButton.normalColor = Color.WHITE;
            this.changeSpeedButton.node.active = false;
          }
        }

        triggerOneLifeTrack() {
          if (!this._isEnd) {
            var track = (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
              error: Error()
            }), lifeMgr) : lifeMgr).next();
            this.showOneTrackItem(track);
            this.updatePropData();
            this.scrollView.scrollToBottom(0.5);
            this._isEnd = track.isEnd;

            if (this._isEnd) {
              this.onLifeEnd();
            } else {
              if (this._isAutoPlay) {
                setTimeout(() => {
                  this.triggerOneLifeTrack();
                }, this.realTriggerTime);
              }
            }
          }
        }

        showOneTrackItem(track) {
          var contentText = track.content.map(_ref => {
            var {
              type,
              description,
              grade,
              name,
              postEvent
            } = _ref;

            switch (type) {
              case 'TLT':
                return "\u5929\u8D4B\u3010" + name + "\u3011\u53D1\u52A8\uFF1A" + description;

              case 'EVT':
                return description + (postEvent ? "<br/>" + postEvent : '');
            }
          }).join('<br/>');
          this.createLifeTrack(track.age + "\u5C81 ", contentText);
        }

        onLifeEnd() {
          this.nextYearButtonNode.active = false;
          this.autoPlayButtonNode.active = false;
          this.restartButtonNode.active = true;
        }

        onChangeSpeedButtonClicked() {
          this._curTimeScaleIndex = ++this._curTimeScaleIndex % this._timeScaleArray.length;
          this._timeScale = this._timeScaleArray[this._curTimeScaleIndex];
          this._changeSpeedButtonLbl.string = "X" + this._timeScale;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lifeTrackGroup", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lifeTrackItemPrfb", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "propGroup", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "propItemPrfb", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "nextYearButtonNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "autoPlayButtonNode", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "restartButtonNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "changeSpeedButton", [_dec10], {
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
//# sourceMappingURL=4046993efb97bf9ddc623608d9fc39aab7489642.js.map