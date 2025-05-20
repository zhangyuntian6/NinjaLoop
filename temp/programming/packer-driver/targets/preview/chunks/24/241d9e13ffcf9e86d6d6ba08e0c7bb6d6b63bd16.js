System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, weightRandom, Property, Event, talentMgr, Achievement, ConfigManager, LifeManager, _crd, lifeMgr;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfweightRandom(extras) {
    _reporterNs.report("weightRandom", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfProperty(extras) {
    _reporterNs.report("Property", "./property", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEvent(extras) {
    _reporterNs.report("Event", "./event", _context.meta, extras);
  }

  function _reportPossibleCrUseOfITalentData(extras) {
    _reporterNs.report("ITalentData", "./Talent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTalentManager(extras) {
    _reporterNs.report("TalentManager", "./Talent", _context.meta, extras);
  }

  function _reportPossibleCrUseOftalentMgr(extras) {
    _reporterNs.report("talentMgr", "./Talent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAchievement(extras) {
    _reporterNs.report("Achievement", "./achievement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIListAchievementData(extras) {
    _reporterNs.report("IListAchievementData", "./achievement", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConfigManager(extras) {
    _reporterNs.report("ConfigManager", "./Utils/ConfigManager", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      weightRandom = _unresolved_2.weightRandom;
    }, function (_unresolved_3) {
      Property = _unresolved_3.default;
    }, function (_unresolved_4) {
      Event = _unresolved_4.default;
    }, function (_unresolved_5) {
      talentMgr = _unresolved_5.talentMgr;
    }, function (_unresolved_6) {
      Achievement = _unresolved_6.Achievement;
    }, function (_unresolved_7) {
      ConfigManager = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "26af1qQIDFA4rL7IzI7FUF7", "Life", undefined);

      LifeManager = class LifeManager {
        constructor() {
          this._property = void 0;
          this._event = void 0;
          this._talent = void 0;
          this._achievement = void 0;
          this._triggerTalents = void 0;
          this._property = new (_crd && Property === void 0 ? (_reportPossibleCrUseOfProperty({
            error: Error()
          }), Property) : Property)();
          this._event = new (_crd && Event === void 0 ? (_reportPossibleCrUseOfEvent({
            error: Error()
          }), Event) : Event)();
          this._talent = _crd && talentMgr === void 0 ? (_reportPossibleCrUseOftalentMgr({
            error: Error()
          }), talentMgr) : talentMgr;
          this._achievement = new (_crd && Achievement === void 0 ? (_reportPossibleCrUseOfAchievement({
            error: Error()
          }), Achievement) : Achievement)();
        }

        initial() {
          var _this = this;

          return _asyncToGenerator(function* () {
            var [age, talents, events, achievements] = yield Promise.all([(_crd && ConfigManager === void 0 ? (_reportPossibleCrUseOfConfigManager({
              error: Error()
            }), ConfigManager) : ConfigManager).readJson('age'), (_crd && ConfigManager === void 0 ? (_reportPossibleCrUseOfConfigManager({
              error: Error()
            }), ConfigManager) : ConfigManager).readJson('talents'), (_crd && ConfigManager === void 0 ? (_reportPossibleCrUseOfConfigManager({
              error: Error()
            }), ConfigManager) : ConfigManager).readJson('events'), (_crd && ConfigManager === void 0 ? (_reportPossibleCrUseOfConfigManager({
              error: Error()
            }), ConfigManager) : ConfigManager).readJson('achievement')]);

            _this._property.initial({
              age
            });

            _this._talent.initial({
              talents
            });

            _this._event.initial({
              events
            });

            _this._achievement.initial({
              achievements
            });
          })();
        }

        restart(allocation) {
          this._triggerTalents = {};
          var contents = this.talentReplace(allocation.TLT);

          this._property.restart(allocation);

          this.doTalent();

          this._property.restartLastStep();

          this._achievement.achieve(this._achievement.Opportunity.START, this._property);

          return contents;
        }

        getTalentAllocationAddition(talents) {
          return this._talent.allocationAddition(talents);
        }

        getTalentCurrentTriggerCount(talentId) {
          return this._triggerTalents[talentId] || 0;
        }

        next() {
          var {
            age,
            event,
            talent
          } = this._property.ageNext();

          var talentContent = this.doTalent(talent);
          var eventContent = this.doEvent(this.random(event));

          var isEnd = this._property.isEnd();

          var content = [...talentContent, ...eventContent];

          this._achievement.achieve(this._achievement.Opportunity.TRAJECTORY, this._property);

          return {
            age,
            content,
            isEnd
          };
        }

        talentReplace(talents) {
          var result = this._talent.replace(talents);

          var contents = [];

          for (var id in result) {
            talents.push(result[id]);

            var source = this._talent.get(id);

            var target = this._talent.get(result[id]);

            contents.push({
              type: 'talentReplace',
              source,
              target
            });
          }

          return contents;
        }

        doTalent(talents) {
          if (talents) this._property.change(this._property.TYPES.TLT, talents);
          talents = this._property.get(this._property.TYPES.TLT).filter(talentId => this.getTalentCurrentTriggerCount(talentId) < this._talent.get(talentId).max_triggers);
          var contents = [];

          for (var talentId of talents) {
            var result = this._talent.do(talentId, this._property);

            if (!result) continue;
            this._triggerTalents[talentId] = this.getTalentCurrentTriggerCount(talentId) + 1;
            var {
              effect,
              name,
              description,
              grade
            } = result;
            contents.push({
              type: this._property.TYPES.TLT,
              name,
              grade,
              description
            });
            if (!effect) continue;

            this._property.effect(effect);
          }

          return contents;
        }

        doEvent(eventId) {
          if (eventId === null) {
            // Handle case where no event was selected
            return []; // Return empty array or a default "no event" content if needed
          }

          var {
            effect,
            next,
            description,
            postEvent
          } = this._event.do(eventId, this._property);

          this._property.change(this._property.TYPES.EVT, eventId);

          this._property.effect(effect);

          var content = {
            type: this._property.TYPES.EVT,
            description,
            postEvent
          };
          if (next) return [content, ...this.doEvent(next)];
          return [content];
        }

        random(events) {
          var validEvents = events.filter(_ref => {
            var [eventId] = _ref;
            return this._event.check(eventId, this._property);
          });

          if (validEvents.length === 0) {
            // If no valid events, choose a random event with ID starting with 'RDM'
            var allRandomEvents = this._event.getRandomEvents(); // Filter out RDM events that have NoRandom: 1


            var eligibleRandomEvents = allRandomEvents.filter(eventId => {
              var eventDetails = this._event.get(eventId);

              return !eventDetails.NoRandom;
            });

            if (eligibleRandomEvents.length > 0) {
              var randomIndex = Math.floor(Math.random() * eligibleRandomEvents.length);
              var randomEventId = eligibleRandomEvents[randomIndex]; // Return just the event ID string for the fallback case

              return randomEventId;
            } else {
              // No valid events and no eligible RDM events found.
              console.warn("No valid events and no eligible RDM events found.");
              return null; // Return null to indicate no event was selected
            }
          } else {
            // Otherwise, use weightRandom on the valid events
            return (_crd && weightRandom === void 0 ? (_reportPossibleCrUseOfweightRandom({
              error: Error()
            }), weightRandom) : weightRandom)(validEvents);
          }
        }

        talentRandom() {
          var times = this._property.get(this._property.TYPES.TMS);

          var achievement = this._property.get(this._property.TYPES.CACHV);

          return this._talent.talentRandom(this.getLastExtendTalent(), {
            times,
            achievement
          });
        }

        talentExtend(talentId) {
          this._property.set(this._property.TYPES.EXT, talentId);
        }

        getLastExtendTalent() {
          return this._property.get(this._property.TYPES.EXT);
        }

        getSummary() {
          this._achievement.achieve(this._achievement.Opportunity.SUMMARY, this._property);

          return {
            AGE: this._property.get(this._property.TYPES.HAGE),
            CHR: this._property.get(this._property.TYPES.HCHR),
            INT: this._property.get(this._property.TYPES.HINT),
            STR: this._property.get(this._property.TYPES.HSTR),
            MNY: this._property.get(this._property.TYPES.HMNY),
            SPR: this._property.get(this._property.TYPES.HSPR),
            SUM: this._property.get(this._property.TYPES.SUM)
          };
        }

        getLastRecord() {
          return this._property.getLastRecord();
        }

        exclusive(talents, exclusive) {
          return this._talent.exclusive(talents, exclusive);
        }

        getAchievements() {
          var ticks = {};

          this._property.get(this._property.TYPES.ACHV).forEach(_ref2 => {
            var [id, tick] = _ref2;
            return ticks[id] = tick;
          });

          return this._achievement.list(this._property).sort((_ref3, _ref4) => {
            var {
              id: a,
              grade: ag,
              hide: ah
            } = _ref3;
            var {
              id: b,
              grade: bg,
              hide: bh
            } = _ref4;
            a = ticks[a];
            b = ticks[b];
            if (a && b) return b - a;

            if (!a && !b) {
              if (ah && bh) return bg - ag;
              if (ah) return 1;
              if (bh) return -1;
              return bg - ag;
            }

            if (!a) return 1;
            if (!b) return -1;
          });
        }

        getTotal() {
          var TMS = this._property.get(this._property.TYPES.TMS);

          var CACHV = this._property.get(this._property.TYPES.CACHV);

          var CTLT = this._property.get(this._property.TYPES.CTLT);

          var CEVT = this._property.get(this._property.TYPES.CEVT);

          var totalTalent = this._talent.count();

          var totalEvent = this._event.count();

          return {
            times: TMS,
            achievement: CACHV,
            talentRate: CTLT / totalTalent,
            eventRate: CEVT / totalEvent
          };
        }

        get times() {
          var _this$_property;

          return ((_this$_property = this._property) == null ? void 0 : _this$_property.get(this._property.TYPES.TMS)) || 0;
        }

        set times(v) {
          var _this$_property2;

          ((_this$_property2 = this._property) == null ? void 0 : _this$_property2.set(this._property.TYPES.TMS, v)) || 0;

          this._achievement.achieve(this._achievement.Opportunity.END, this._property);
        }

      };

      _export("lifeMgr", lifeMgr = new LifeManager());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=241d9e13ffcf9e86d6d6ba08e0c7bb6d6b63bd16.js.map