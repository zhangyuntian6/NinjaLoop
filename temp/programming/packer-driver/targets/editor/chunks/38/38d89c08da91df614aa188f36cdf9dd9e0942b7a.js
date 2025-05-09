System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, clone, checkCondition, eventMsg, Message, Achievement, id, _crd, _achievements;

  function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

  function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

  function _reportPossibleCrUseOfclone(extras) {
    _reporterNs.report("clone", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcheckCondition(extras) {
    _reporterNs.report("checkCondition", "./functions/condition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfeventMsg(extras) {
    _reporterNs.report("eventMsg", "./Utils/EventMessage", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMessage(extras) {
    _reporterNs.report("Message", "./Defines", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      clone = _unresolved_2.clone;
    }, function (_unresolved_3) {
      checkCondition = _unresolved_3.checkCondition;
    }, function (_unresolved_4) {
      eventMsg = _unresolved_4.eventMsg;
    }, function (_unresolved_5) {
      Message = _unresolved_5.Message;
    }],
    execute: function () {
      id = 0;
      _crd = true;

      _cclegacy._RF.push({}, "2ebf1c3o/JMO46jyizTZPPt", "achievement", undefined);

      _achievements = /*#__PURE__*/_classPrivateFieldLooseKey("achievements");

      _export("Achievement", Achievement = class Achievement {
        constructor() {
          // 时机
          this.Opportunity = {
            START: "START",
            // 分配完成点数，点击开始新人生后
            TRAJECTORY: "TRAJECTORY",
            // 每一年的人生经历中
            SUMMARY: "SUMMARY",
            // 人生结束，点击人生总结后
            END: "END" // 游戏完成，点击重开 重开次数在这之后才会+1

          };
          Object.defineProperty(this, _achievements, {
            writable: true,
            value: void 0
          });
        }

        initial({
          achievements
        }) {
          _classPrivateFieldLooseBase(this, _achievements)[_achievements] = achievements;
        }

        count() {
          return Object.keys(_classPrivateFieldLooseBase(this, _achievements)[_achievements]).length;
        }

        list(property) {
          return Object.values(_classPrivateFieldLooseBase(this, _achievements)[_achievements]).map(({
            id,
            name,
            opportunity,
            description,
            hide,
            grade
          }) => ({
            id,
            name,
            opportunity,
            description,
            hide,
            grade,
            isAchieved: this.isAchieved(id, property)
          }));
        }

        get(achievementId) {
          const achievement = _classPrivateFieldLooseBase(this, _achievements)[_achievements][achievementId];

          if (!achievement) throw new Error(`[ERROR] No Achievement[${achievementId}]`);
          return (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
            error: Error()
          }), clone) : clone)(achievement);
        }

        check(achievementId, property) {
          const {
            condition
          } = this.get(achievementId);
          return (_crd && checkCondition === void 0 ? (_reportPossibleCrUseOfcheckCondition({
            error: Error()
          }), checkCondition) : checkCondition)(property, condition);
        }

        isAchieved(achievementId, property) {
          for (const [achieved] of property.get(property.TYPES.ACHV) || []) if (achieved == achievementId) return true;

          return false;
        }

        achieve(opportunity, property) {
          this.list(property).filter(({
            isAchieved
          }) => !isAchieved).filter(({
            opportunity: o
          }) => o == opportunity).filter(({
            id
          }) => this.check(id, property)).forEach(({
            id
          }) => {
            property.achieve(property.TYPES.ACHV, id);
            (_crd && eventMsg === void 0 ? (_reportPossibleCrUseOfeventMsg({
              error: Error()
            }), eventMsg) : eventMsg).emit((_crd && Message === void 0 ? (_reportPossibleCrUseOfMessage({
              error: Error()
            }), Message) : Message).Achievement, this.get(id));
          });
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=38d89c08da91df614aa188f36cdf9dd9e0942b7a.js.map