System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, clone, checkCondition, Event, id, _crd, _events, _randomEvents;

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
      _randomEvents = /*#__PURE__*/_classPrivateFieldLooseKey("randomEvents");
      Event = class Event {
        constructor() {
          Object.defineProperty(this, _events, {
            writable: true,
            value: void 0
          });
          Object.defineProperty(this, _randomEvents, {
            writable: true,
            value: []
          });
        }

        // Added field
        initial({
          events
        }) {
          _classPrivateFieldLooseBase(this, _events)[_events] = events;
          _classPrivateFieldLooseBase(this, _randomEvents)[_randomEvents] = []; // Clear previous data if initial is called again

          for (const id in events) {
            const event = events[id];

            if (id.startsWith('RDM')) {
              // Added logic to populate #randomEvents
              _classPrivateFieldLooseBase(this, _randomEvents)[_randomEvents].push(id);
            }

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

        getRandomEvents() {
          // Added method
          return _classPrivateFieldLooseBase(this, _randomEvents)[_randomEvents];
        }

        random(events) {
          const validEvents = events.filter(([eventId]) => this._event.check(eventId, this._property));

          if (validEvents.length === 0) {
            // If no valid events, choose a random event with ID starting with 'RDM'
            const allRandomEvents = this._event.getRandomEvents(); // Filter out RDM events that have NoRandom: 1


            const eligibleRandomEvents = allRandomEvents.filter(eventId => {
              const eventDetails = this._event.get(eventId);

              return !eventDetails.NoRandom;
            });

            if (eligibleRandomEvents.length > 0) {
              const randomIndex = Math.floor(Math.random() * eligibleRandomEvents.length);
              const randomEventId = eligibleRandomEvents[randomIndex]; // Return just the event ID string for the fallback case

              return randomEventId;
            } else {
              // No valid events and no eligible RDM events found.
              console.warn("No valid events and no eligible RDM events found.");
              return null; // Return null to indicate no event was selected
            }
          } else {
            // Otherwise, use weightRandom on the valid events
            return weightRandom(validEvents);
          }
        }

      };

      _export("default", Event);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8c5de57c5261fc86750d1018c659c618ada912af.js.map