System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, EventEmitter, _crd, eventMsg;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4e324KiHd1Mj78n/Hffy+JF", "EventMessage", undefined);

      _export("EventEmitter", EventEmitter = class EventEmitter {
        constructor() {
          this._listenerMap = new Map();
        }

        emit(name, ...args) {
          const funcList = this._listenerMap.get(name);

          if (funcList) {
            funcList.forEach(func => {
              func(...args);
            });
          }
        }

        on(name, func) {
          let funcList = this._listenerMap.get(name);

          if (!funcList) {
            funcList = [];

            this._listenerMap.set(name, funcList);
          }

          funcList.push(func);
        }

        off(name, func) {
          const funcList = this._listenerMap.get(name);

          if (funcList) {
            const idx = funcList.indexOf(func);

            if (idx >= 0) {
              funcList.splice(idx, 1);
            }
          }
        }

      });

      _export("eventMsg", eventMsg = new EventEmitter());

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b21defac92d8bf19d7976fe2776dcb68995f8079.js.map