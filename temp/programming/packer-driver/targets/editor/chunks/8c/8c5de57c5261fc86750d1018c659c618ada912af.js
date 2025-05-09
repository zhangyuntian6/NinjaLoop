System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, clone, checkCondition, Event, id, _crd, _events;

  function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

  function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

  function _reportPossibleCrUseOfclone(extras) {
    _reporterNs.report("clone", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcheckCondition(extras) {
    _reporterNs.report("checkCondition", "./functions/condition", _context.meta, extras);
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
    }],
    execute: function () {
      id = 0;
      _crd = true;

      _cclegacy._RF.push({}, "b1ad8S5yrpNyLB2b+dSbwqq", "event", undefined);

      _events = /*#__PURE__*/_classPrivateFieldLooseKey("events");
      Event = class Event {
        constructor() {
          Object.defineProperty(this, _events, {
            writable: true,
            value: void 0
          });
        }

        initial({
          events
        }) {
          _classPrivateFieldLooseBase(this, _events)[_events] = events;

          for (const id in events) {
            const event = events[id];
            if (!event.branch) continue;
            event.branch = event.branch.map(b => {
              b = b.split(':');
              b[1] = Number(b[1]);
              return b;
            });
          }
        }

        count() {
          return Object.keys(_classPrivateFieldLooseBase(this, _events)[_events]).length;
        }

        check(eventId, property) {
          const {
            include,
            exclude,
            NoRandom
          } = this.get(eventId);
          if (NoRandom) return false;
          if (exclude && (_crd && checkCondition === void 0 ? (_reportPossibleCrUseOfcheckCondition({
            error: Error()
          }), checkCondition) : checkCondition)(property, exclude)) return false;
          if (include) return (_crd && checkCondition === void 0 ? (_reportPossibleCrUseOfcheckCondition({
            error: Error()
          }), checkCondition) : checkCondition)(property, include);
          return true;
        }

        get(eventId) {
          const event = _classPrivateFieldLooseBase(this, _events)[_events][eventId];

          if (!event) throw new Error(`[ERROR] No Event[${eventId}]`);
          return (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
            error: Error()
          }), clone) : clone)(event);
        }

        information(eventId) {
          const {
            event: description
          } = this.get(eventId);
          return {
            description
          };
        }

        do(eventId, property) {
          const {
            effect,
            branch,
            event: description,
            postEvent
          } = this.get(eventId);
          if (branch) for (const [cond, next] of branch) if ((_crd && checkCondition === void 0 ? (_reportPossibleCrUseOfcheckCondition({
            error: Error()
          }), checkCondition) : checkCondition)(property, cond)) return {
            effect,
            next,
            description
          };
          return {
            effect,
            postEvent,
            description
          };
        }

      };

      _export("default", Event);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c5de57c5261fc86750d1018c659c618ada912af.js.map