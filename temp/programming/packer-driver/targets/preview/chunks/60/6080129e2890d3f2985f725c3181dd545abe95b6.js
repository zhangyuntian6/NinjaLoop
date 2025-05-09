System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, Prefab, instantiate, getGrade, getRate, lifeMgr, AchievementItem, StatisticsItem, UIPanel, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, AchievementPanel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfgetGrade(extras) {
    _reporterNs.report("getGrade", "../functions/addition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRate(extras) {
    _reporterNs.report("getRate", "../functions/addition", _context.meta, extras);
  }

  function _reportPossibleCrUseOflifeMgr(extras) {
    _reporterNs.report("lifeMgr", "../Life", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAchievementItem(extras) {
    _reporterNs.report("AchievementItem", "./AchievementItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIAchievementItemData(extras) {
    _reporterNs.report("IAchievementItemData", "./AchievementItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStatisticsItem(extras) {
    _reporterNs.report("StatisticsItem", "./StatisticsItem", _context.meta, extras);
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
      getGrade = _unresolved_2.getGrade;
      getRate = _unresolved_2.getRate;
    }, function (_unresolved_3) {
      lifeMgr = _unresolved_3.lifeMgr;
    }, function (_unresolved_4) {
      AchievementItem = _unresolved_4.AchievementItem;
    }, function (_unresolved_5) {
      StatisticsItem = _unresolved_5.StatisticsItem;
    }, function (_unresolved_6) {
      UIPanel = _unresolved_6.UIPanel;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7baefjqdLRKUrgY5285bpeS", "AchievementPanel", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AchievementPanel", AchievementPanel = (_dec = ccclass('AchievementPanel'), _dec2 = property({
        type: Node
      }), _dec3 = property({
        type: Prefab
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Prefab
      }), _dec(_class = (_class2 = class AchievementPanel extends (_crd && UIPanel === void 0 ? (_reportPossibleCrUseOfUIPanel({
        error: Error()
      }), UIPanel) : UIPanel) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "achievementItemsGroup", _descriptor, this);

          _initializerDefineProperty(this, "achievementItemPrfb", _descriptor2, this);

          _initializerDefineProperty(this, "statisticsItemsGroup", _descriptor3, this);

          _initializerDefineProperty(this, "statisticsItemPrfb", _descriptor4, this);

          this._contentUITrans = void 0;
          this._itemHeight = 150;
          this._spacingY = 20;
        }

        start() {
          // [3]
          this._contentUITrans = this.achievementItemsGroup._uiProps.uiTransformComp;
        } // update (deltaTime: number) {
        //     // [4]
        // }


        createAchievementItem(data) {
          var itemNode = instantiate(this.achievementItemPrfb);
          itemNode.setParent(this.achievementItemsGroup);
          var item = itemNode.getComponent(_crd && AchievementItem === void 0 ? (_reportPossibleCrUseOfAchievementItem({
            error: Error()
          }), AchievementItem) : AchievementItem);
          item.setData(data);
          var itemNum = this.achievementItemsGroup.children.length;
          var lines = Math.round(itemNum / 2);
          this._contentUITrans.height = lines * this._itemHeight + this._spacingY * (lines - 1);
        }

        createStatisticsItem(title, desc, grade) {
          var itemNode = instantiate(this.statisticsItemPrfb);
          itemNode.setParent(this.statisticsItemsGroup);
          var item = itemNode.getComponent(_crd && StatisticsItem === void 0 ? (_reportPossibleCrUseOfStatisticsItem({
            error: Error()
          }), StatisticsItem) : StatisticsItem);
          item.setData(title, desc, grade);
        }

        onShow() {
          this.achievementItemsGroup.removeAllChildren();
          this._contentUITrans = this.achievementItemsGroup._uiProps.uiTransformComp;
          var achievementsData = (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
            error: Error()
          }), lifeMgr) : lifeMgr).getAchievements();
          achievementsData.forEach(_ref => {
            var {
              name,
              description,
              hide,
              grade,
              isAchieved
            } = _ref;
            this.createAchievementItem({
              name,
              description,
              hide,
              grade,
              isAchieved
            });
          });
          this.generateStatisticsData();
        }

        generateStatisticsData() {
          this.statisticsItemsGroup.removeAllChildren();
          var {
            times,
            achievement,
            talentRate,
            eventRate
          } = (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
            error: Error()
          }), lifeMgr) : lifeMgr).getTotal();
          this.createStatisticsItem("\u5DF2\u91CD\u5F00" + times + "\u6B21", "" + this.formatRate('times', times), (_crd && getGrade === void 0 ? (_reportPossibleCrUseOfgetGrade({
            error: Error()
          }), getGrade) : getGrade)('times', times));
          this.createStatisticsItem("\u6210\u5C31\u8FBE\u6210" + achievement + "\u4E2A", "" + this.formatRate('achievement', achievement), (_crd && getGrade === void 0 ? (_reportPossibleCrUseOfgetGrade({
            error: Error()
          }), getGrade) : getGrade)('achievement', achievement));
          this.createStatisticsItem("\u4E8B\u4EF6\u6536\u96C6\u7387", Math.floor(eventRate * 100) + "%", (_crd && getGrade === void 0 ? (_reportPossibleCrUseOfgetGrade({
            error: Error()
          }), getGrade) : getGrade)('eventRate', eventRate));
          this.createStatisticsItem("\u5929\u8D4B\u6536\u96C6\u7387", Math.floor(talentRate * 100) + "%", (_crd && getGrade === void 0 ? (_reportPossibleCrUseOfgetGrade({
            error: Error()
          }), getGrade) : getGrade)('talentRate', talentRate));
        }

        formatRate(type, value) {
          var rate = (_crd && getRate === void 0 ? (_reportPossibleCrUseOfgetRate({
            error: Error()
          }), getRate) : getRate)(type, value);
          var color = Object.keys(rate)[0];

          switch (parseInt(color)) {
            case 0:
              color = '白色';
              break;

            case 1:
              color = '蓝色';
              break;

            case 2:
              color = '紫色';
              break;

            case 3:
              color = '橙色';
              break;

            default:
              break;
          }

          var r = Object.values(rate)[0];

          switch (parseInt(r)) {
            case 1:
              r = '不变';
              break;

            case 2:
              r = '翻倍';
              break;

            case 3:
              r = '三倍';
              break;

            case 4:
              r = '四倍';
              break;

            case 5:
              r = '五倍';
              break;

            case 6:
              r = '六倍';
              break;

            default:
              break;
          }

          return "\u62BD\u5230" + color + "\u6982\u7387" + r;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementItemsGroup", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "achievementItemPrfb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "statisticsItemsGroup", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "statisticsItemPrfb", [_dec5], {
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
//# sourceMappingURL=6080129e2890d3f2985f725c3181dd545abe95b6.js.map