System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, sys, Message, lifeMgr, AchievementHint, AchievementPanel, DistributePropPanel, LifeTrackPanel, SelectTalentPanel, StartMenuPanel, ConfigManager, eventMsg, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _crd, ccclass, property, GameManager;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "./Defines", _context.meta, extras);
  }

  function _reportPossibleCrUseOflifeMgr(extras) {
    _reporterNs.report("lifeMgr", "./Life", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITalentInfo(extras) {
    _reporterNs.report("ITalentInfo", "./Talent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAchievementHint(extras) {
    _reporterNs.report("AchievementHint", "./UI/AchievementHint", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAchievementPanel(extras) {
    _reporterNs.report("AchievementPanel", "./UI/AchievementPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDistributePropPanel(extras) {
    _reporterNs.report("DistributePropPanel", "./UI/DistributePropPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLifeTrackPanel(extras) {
    _reporterNs.report("LifeTrackPanel", "./UI/LifeTrackPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSelectTalentPanel(extras) {
    _reporterNs.report("SelectTalentPanel", "./UI/SelectTalentPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStartMenuPanel(extras) {
    _reporterNs.report("StartMenuPanel", "./UI/StartMenuPanel", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfigManager(extras) {
    _reporterNs.report("ConfigManager", "./Utils/ConfigManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventMsg(extras) {
    _reporterNs.report("eventMsg", "./Utils/EventMessage", _context.meta, extras);
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
      Node = _cc.Node;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      Message = _unresolved_2.Message;
    }, function (_unresolved_3) {
      lifeMgr = _unresolved_3.lifeMgr;
    }, function (_unresolved_4) {
      AchievementHint = _unresolved_4.AchievementHint;
    }, function (_unresolved_5) {
      AchievementPanel = _unresolved_5.AchievementPanel;
    }, function (_unresolved_6) {
      DistributePropPanel = _unresolved_6.DistributePropPanel;
    }, function (_unresolved_7) {
      LifeTrackPanel = _unresolved_7.LifeTrackPanel;
    }, function (_unresolved_8) {
      SelectTalentPanel = _unresolved_8.SelectTalentPanel;
    }, function (_unresolved_9) {
      StartMenuPanel = _unresolved_9.StartMenuPanel;
    }, function (_unresolved_10) {
      ConfigManager = _unresolved_10.default;
    }, function (_unresolved_11) {
      eventMsg = _unresolved_11.eventMsg;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f8c8q9ZkpDqKjGhsV04tDD", "GameManager", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("GameManager", GameManager = (_dec = ccclass('GameManager'), _dec2 = property({
        type: _crd && AchievementHint === void 0 ? (_reportPossibleCrUseOfAchievementHint({
          error: Error()
        }), AchievementHint) : AchievementHint
      }), _dec3 = property({
        type: Node
      }), _dec4 = property({
        type: Node
      }), _dec5 = property({
        type: Node
      }), _dec6 = property({
        type: Node
      }), _dec7 = property({
        type: Node
      }), _dec8 = property({
        type: _crd && StartMenuPanel === void 0 ? (_reportPossibleCrUseOfStartMenuPanel({
          error: Error()
        }), StartMenuPanel) : StartMenuPanel
      }), _dec9 = property({
        type: _crd && AchievementPanel === void 0 ? (_reportPossibleCrUseOfAchievementPanel({
          error: Error()
        }), AchievementPanel) : AchievementPanel
      }), _dec10 = property({
        type: _crd && SelectTalentPanel === void 0 ? (_reportPossibleCrUseOfSelectTalentPanel({
          error: Error()
        }), SelectTalentPanel) : SelectTalentPanel
      }), _dec11 = property({
        type: _crd && DistributePropPanel === void 0 ? (_reportPossibleCrUseOfDistributePropPanel({
          error: Error()
        }), DistributePropPanel) : DistributePropPanel
      }), _dec12 = property({
        type: _crd && LifeTrackPanel === void 0 ? (_reportPossibleCrUseOfLifeTrackPanel({
          error: Error()
        }), LifeTrackPanel) : LifeTrackPanel
      }), _dec(_class = (_class2 = class GameManager extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "achievementHint", _descriptor, this);

          _initializerDefineProperty(this, "saveButtonNode", _descriptor2, this);

          _initializerDefineProperty(this, "loadButtonNode", _descriptor3, this);

          _initializerDefineProperty(this, "homeButtonNode", _descriptor4, this);

          _initializerDefineProperty(this, "githubButtonNode", _descriptor5, this);

          _initializerDefineProperty(this, "achievementButtonNode", _descriptor6, this);

          _initializerDefineProperty(this, "startMenuPanel", _descriptor7, this);

          _initializerDefineProperty(this, "achievementPanel", _descriptor8, this);

          _initializerDefineProperty(this, "selectTalentPanel", _descriptor9, this);

          _initializerDefineProperty(this, "distributePropPanel", _descriptor10, this);

          _initializerDefineProperty(this, "lifeTrackPanel", _descriptor11, this);

          this._selectedTalentList = void 0;
        }

        start() {
          this.init();
        }

        async init() {
          const [, happyLife, specialthanks] = await Promise.all([(_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
            error: Error()
          }), lifeMgr) : lifeMgr).initial(), (_crd && ConfigManager === void 0 ? (_reportPossibleCrUseOfConfigManager({
            error: Error()
          }), ConfigManager) : ConfigManager).readJson('happy_life'), (_crd && ConfigManager === void 0 ? (_reportPossibleCrUseOfConfigManager({
            error: Error()
          }), ConfigManager) : ConfigManager).readJson('specialthanks')]);
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).on((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).StartMenu, () => {
            this.startMenuPanel.show(happyLife);
            this.selectTalentPanel.hide();
            this.distributePropPanel.hide();
            this.lifeTrackPanel.hide();
            this.loadButtonNode.active = true;
            this.saveButtonNode.active = true;
            this.homeButtonNode.active = false;
            this.githubButtonNode.active = true;
            this.achievementButtonNode.active = true;
          });
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).on((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).StartGame, () => {
            this.startMenuPanel.hide();
            this.loadButtonNode.active = false;
            this.saveButtonNode.active = false;
            this.homeButtonNode.active = true;
            this.githubButtonNode.active = false;
            this.achievementButtonNode.active = false;
            this.openSelectTalentPanel();
          });
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).on((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).TalentSelectEnd, selectedTalentList => {
            this._selectedTalentList = selectedTalentList;
            this.selectTalentPanel.hide();
            this.distributePropPanel.show(selectedTalentList);
          });
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).on((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).DistributePropEnd, propData => {
            this.distributePropPanel.hide();
            this.lifeTrackPanel.show(this._selectedTalentList, propData);
          });
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).on((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).Replay, () => {
            this.lifeTrackPanel.hide();
            (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
              error: Error()
            }), lifeMgr) : lifeMgr).times++;
            this.openSelectTalentPanel();
          }); // achievement

          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).on((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).Achievement, ({
            name
          }) => {
            this.achievementHint.show(name);
          }); // start

          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).emit((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).StartMenu);
        }

        openSelectTalentPanel() {
          const talentList = (_crd && lifeMgr === void 0 ? (_reportPossibleCrUseOflifeMgr({
            error: Error()
          }), lifeMgr) : lifeMgr).talentRandom();
          this.selectTalentPanel.show(talentList);
        } // update (deltaTime: number) {
        //     // [4]
        // }


        save() {
          if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
            const data = {};
            Object.keys(localStorage).filter(v => v.substr(0, 4) != 'goog').forEach(key => data[key] = localStorage[key]);
            let blob = new Blob([JSON.stringify(data)], {
              type: 'application/json'
            }); // @ts-ignore

            const slice = blob.slice || blob.webkitSlice || blob.mozSlice;
            blob = slice.call(blob, 0, blob.size, 'application/octet-stream');
            const a = document.createElementNS('http://www.w3.org/1999/xhtml', 'a');
            a.href = URL.createObjectURL(blob);
            a.download = `Remake_save_${new Date().toISOString().replace(':', '.')}.json`;
            document.body.appendChild(a);
            a.click();
            document.body.removeChild(a);
            URL.revokeObjectURL(a.href);
          }
        }

        load() {
          if (sys.platform === sys.Platform.MOBILE_BROWSER || sys.platform === sys.Platform.DESKTOP_BROWSER) {
            const file = document.createElement('input');
            file.type = 'file';
            file.name = 'file';
            file.accept = "application/json"; // @ts-ignore

            file.style = "display: none;";
            file.append('body');
            file.click();
            file.addEventListener('change', e => {
              // @ts-ignore
              const file = e.target.files[0];
              if (!file) return;
              const reader = new FileReader();

              reader.onload = () => {
                const data = JSON.parse(reader.result);

                for (const key in data) {
                  localStorage[key] = data[key];
                }

                this.achievementHint.show('加载存档成功');
              };

              reader.readAsText(file);
            });
          }
        }

        onHomeButtonClicked() {
          (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
            error: Error()
          }), eventMsg) : eventMsg).emit((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
            error: Error()
          }), Message) : Message).StartMenu);
        }

        onGithubButtonClicked() {
          sys.openURL("https://github.com/gameall3d/LifeRestart_Cocos");
        }

        onOpenAchievementButtonClicked() {
          this.achievementPanel.show();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "achievementHint", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "saveButtonNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "loadButtonNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "homeButtonNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "githubButtonNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "achievementButtonNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "startMenuPanel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "achievementPanel", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "selectTalentPanel", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "distributePropPanel", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: null
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lifeTrackPanel", [_dec12], {
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
//# sourceMappingURL=0ad6471ca1ab2532da47858e185e484bf5f0d889.js.map