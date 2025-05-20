System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, clone, weightRandom, checkCondition, extractMaxTriggers, getRate, TalentManager, _crd, talentMgr;

  function _reportPossibleCrUseOfclone(extras) {
    _reporterNs.report("clone", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfweightRandom(extras) {
    _reporterNs.report("weightRandom", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcheckCondition(extras) {
    _reporterNs.report("checkCondition", "./functions/condition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfextractMaxTriggers(extras) {
    _reporterNs.report("extractMaxTriggers", "./functions/condition", _context.meta, extras);
  }

  function _reportPossibleCrUseOfgetRate(extras) {
    _reporterNs.report("getRate", "./functions/addition", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      clone = _unresolved_2.clone;
      weightRandom = _unresolved_2.weightRandom;
    }, function (_unresolved_3) {
      checkCondition = _unresolved_3.checkCondition;
      extractMaxTriggers = _unresolved_3.extractMaxTriggers;
    }, function (_unresolved_4) {
      getRate = _unresolved_4.getRate;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6f0e92mPVdNDZxh7eJwr3t+", "Talent", undefined);

      _export("TalentManager", TalentManager = class TalentManager {
        constructor() {
          this._talents = void 0;
        }

        initial(_ref) {
          var {
            talents
          } = _ref;
          this._talents = talents;

          for (var id in talents) {
            var talent = talents[id];
            talent.id = Number(id);
            talent.grade = Number(talent.grade);
            talent.max_triggers = (_crd && extractMaxTriggers === void 0 ? (_reportPossibleCrUseOfextractMaxTriggers({
              error: Error()
            }), extractMaxTriggers) : extractMaxTriggers)(talent.condition);

            if (talent.replacement) {
              for (var key in talent.replacement) {
                var obj = {};

                for (var value of talent.replacement[key]) {
                  value = ("" + value).split('*');
                  obj[value[0] || 0] = Number(value[1]) || 1;
                }

                talent.replacement[key] = obj;
              }
            }
          }
        }

        count() {
          return Object.keys(this._talents).length;
        }

        check(talentId, property) {
          var {
            condition
          } = this.get(talentId);
          return (_crd && checkCondition === void 0 ? (_reportPossibleCrUseOfcheckCondition({
            error: Error()
          }), checkCondition) : checkCondition)(property, condition);
        }

        get(talentId) {
          var talent = this._talents[talentId];
          if (!talent) throw new Error("[ERROR] No Talent[" + talentId + "]");
          return (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
            error: Error()
          }), clone) : clone)(talent);
        }

        information(talentId) {
          var {
            grade,
            name,
            description
          } = this.get(talentId);
          return {
            grade,
            name,
            description
          };
        }

        exclusive(talents, exclusiveId) {
          var {
            exclusive
          } = this.get(exclusiveId);
          if (!exclusive) return null;

          for (var talent of talents) {
            for (var e of exclusive) {
              if (talent == e) return talent;
            }
          }

          return null;
        }

        talentRandom(include, _temp) {
          var {
            times = 0,
            achievement = 0
          } = _temp === void 0 ? {} : _temp;
          var rate = {
            1: 100,
            2: 10,
            3: 1
          };
          var rateAddition = {
            1: 1,
            2: 1,
            3: 1
          };
          var timesRate = (_crd && getRate === void 0 ? (_reportPossibleCrUseOfgetRate({
            error: Error()
          }), getRate) : getRate)('times', times);
          var achievementRate = (_crd && getRate === void 0 ? (_reportPossibleCrUseOfgetRate({
            error: Error()
          }), getRate) : getRate)('achievement', achievement);

          for (var grade in timesRate) rateAddition[grade] += timesRate[grade] - 1;

          for (var _grade in achievementRate) rateAddition[_grade] += achievementRate[_grade] - 1;

          for (var _grade2 in rateAddition) rate[_grade2] *= rateAddition[_grade2];

          var randomGrade = () => {
            var randomNumber = Math.floor(Math.random() * 1000);
            if ((randomNumber -= rate[3]) < 0) return 3;
            if ((randomNumber -= rate[2]) < 0) return 2;
            if ((randomNumber -= rate[1]) < 0) return 1;
            return 0;
          };

          var talentList = {};

          for (var talentId in this._talents) {
            var {
              id,
              grade: _grade3,
              name,
              description
            } = this._talents[talentId];

            if (id == include) {
              include = {
                grade: _grade3,
                name,
                description,
                id
              };
              continue;
            }

            if (!talentList[_grade3]) talentList[_grade3] = [{
              grade: _grade3,
              name,
              description,
              id
            }];else talentList[_grade3].push({
              grade: _grade3,
              name,
              description,
              id
            });
          }

          return new Array(3).fill(1).map((v, i) => {
            if (!i && include) return include;
            var grade = randomGrade(); // 检查 talentList[grade] 是否为 undefined

            while (!talentList[grade] || talentList[grade].length === 0) {
              grade--;

              if (grade < 0) {
                // 如果所有等级都没有可用的天赋，抛出错误或者返回默认值
                throw new Error('No available talents for random selection.');
              }
            }

            var length = talentList[grade].length;
            var random = Math.floor(Math.random() * length) % length;
            return talentList[grade].splice(random, 1)[0];
          });
        }

        allocationAddition(talents) {
          if (Array.isArray(talents)) {
            var addition = 0;

            for (var talent of talents) addition += this.allocationAddition(talent);

            return addition;
          }

          return Number(this.get(talents).status) || 0;
        }

        do(talentId, property) {
          var {
            effect,
            condition,
            grade,
            name,
            description
          } = this.get(talentId);
          if (condition && !(_crd && checkCondition === void 0 ? (_reportPossibleCrUseOfcheckCondition({
            error: Error()
          }), checkCondition) : checkCondition)(property, condition)) return null;
          return {
            effect,
            grade,
            name,
            description
          };
        }

        replace(talents) {
          var getReplaceList = (talent, talents) => {
            var {
              replacement
            } = this.get(talent);
            if (!replacement) return null;
            var list = [];

            if (replacement.grade) {
              this.forEach(_ref2 => {
                var {
                  id,
                  grade
                } = _ref2;
                if (!replacement.grade[grade]) return;
                if (this.exclusive(talents, id)) return;
                list.push([id, replacement.grade[grade]]);
              });
            }

            if (replacement.talent) {
              for (var talentId in replacement.talent) {
                var id = Number(talentId);
                if (this.exclusive(talents, id)) continue;
                list.push([id, replacement.talent[id]]);
              }
            }

            return list;
          };

          var replace = (talent, talents) => {
            var replaceList = getReplaceList(talent, talents);
            if (!replaceList) return talent;
            var rand = (_crd && weightRandom === void 0 ? (_reportPossibleCrUseOfweightRandom({
              error: Error()
            }), weightRandom) : weightRandom)(replaceList);
            return replace(rand, talents.concat(rand));
          };

          var newTalents = (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
            error: Error()
          }), clone) : clone)(talents);
          var result = {};

          for (var talent of talents) {
            var replaceId = replace(talent, newTalents);

            if (replaceId != talent) {
              result[talent] = replaceId;
              newTalents.push(replaceId);
            }
          }

          return result;
        }

        forEach(callback) {
          if (typeof callback != 'function') return;

          for (var id in this._talents) callback((_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
            error: Error()
          }), clone) : clone)(this._talents[id]), id);
        }

      });

      _export("talentMgr", talentMgr = new TalentManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2f812892af89012f273e150e393d502502e5b8d1.js.map