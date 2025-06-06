System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, sys, max, min, sum, clone, listRandom, Property, id, _crd, _ageData, _data;

  function _classPrivateFieldLooseBase(receiver, privateKey) { if (!Object.prototype.hasOwnProperty.call(receiver, privateKey)) { throw new TypeError("attempted to use private field on non-instance"); } return receiver; }

  function _classPrivateFieldLooseKey(name) { return "__private_" + id++ + "_" + name; }

  function _reportPossibleCrUseOfmax(extras) {
    _reporterNs.report("max", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfmin(extras) {
    _reporterNs.report("min", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsum(extras) {
    _reporterNs.report("sum", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOfclone(extras) {
    _reporterNs.report("clone", "./functions/util", _context.meta, extras);
  }

  function _reportPossibleCrUseOflistRandom(extras) {
    _reporterNs.report("listRandom", "./functions/util", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      max = _unresolved_2.max;
      min = _unresolved_2.min;
      sum = _unresolved_2.sum;
      clone = _unresolved_2.clone;
      listRandom = _unresolved_2.listRandom;
    }],
    execute: function () {
      id = 0;
      _crd = true;

      _cclegacy._RF.push({}, "146017WEUlI/LkSWRI1dalX", "property", undefined);

      __checkObsolete__(['sys']);

      _ageData = /*#__PURE__*/_classPrivateFieldLooseKey("ageData");
      _data = /*#__PURE__*/_classPrivateFieldLooseKey("data");
      Property = class Property {
        constructor() {
          this.TYPES = {
            // 本局
            AGE: "AGE",
            // 年龄 age AGE
            CHR: "CHR",
            // 颜值 charm CHR
            INT: "INT",
            // 智力 intelligence INT
            STR: "STR",
            // 体质 strength STR
            MNY: "MNY",
            // 家境 money MNY
            SPR: "SPR",
            // 快乐 spirit SPR
            LIF: "LIF",
            // 生命 life LIFE
            TLT: "TLT",
            // 天赋 talent TLT
            EVT: "EVT",
            // 事件 event EVT
            TMS: "TMS",
            // 次数 times TMS
            // Auto calc
            LAGE: "LAGE",
            // 最低年龄 Low Age
            HAGE: "HAGE",
            // 最高年龄 High Age
            LCHR: "LCHR",
            // 最低颜值 Low Charm
            HCHR: "HCHR",
            // 最高颜值 High Charm
            LINT: "LINT",
            // 最低智力 Low Intelligence
            HINT: "HINT",
            // 最高智力 High Intelligence
            LSTR: "LSTR",
            // 最低体质 Low Strength
            HSTR: "HSTR",
            // 最高体质 High Strength
            LMNY: "LMNY",
            // 最低家境 Low Money
            HMNY: "HMNY",
            // 最高家境 High Money
            LSPR: "LSPR",
            // 最低快乐 Low Spirit
            HSPR: "HSPR",
            // 最高快乐 High Spirit
            SUM: "SUM",
            // 总评 summary SUM
            EXT: "EXT",
            // 继承天赋
            // 总计
            // Achievement Total
            ATLT: "ATLT",
            // 拥有过的天赋 Achieve Talent
            AEVT: "AEVT",
            // 触发过的事件 Achieve Event
            ACHV: "ACHV",
            // 达成的成就 Achievement
            CTLT: "RTLT",
            // 天赋选择数 Count Talent
            CEVT: "REVT",
            // 事件收集数 Count Event
            CACHV: "CACHV",
            // 成就达成数 Count Achievement
            // SPECIAL
            RDM: 'RDM' // 随机属性 random RDM

          };
          // 特殊类型
          this.SPECIAL = {
            RDM: [// 随机属性 random RDM
            this.TYPES.CHR, this.TYPES.INT, this.TYPES.STR, this.TYPES.MNY, this.TYPES.SPR]
          };
          Object.defineProperty(this, _ageData, {
            writable: true,
            value: void 0
          });
          Object.defineProperty(this, _data, {
            writable: true,
            value: {}
          });
        }

        initial({
          age
        }) {
          _classPrivateFieldLooseBase(this, _ageData)[_ageData] = age;

          for (const a in age) {
            var _event, _talent;

            let {
              event,
              talent
            } = age[a];
            if (!Array.isArray(event)) event = ((_event = event) == null ? void 0 : _event.split(',')) || [];
            event = event.map(v => {
              const value = `${v}`.split('*').map(n => Number(n));
              if (value.length == 1) value.push(1);
              return value;
            });
            if (!Array.isArray(talent)) talent = ((_talent = talent) == null ? void 0 : _talent.split(',')) || [];
            talent = talent.map(v => Number(v));
            age[a] = {
              event,
              talent
            };
          }
        }

        restart(data) {
          _classPrivateFieldLooseBase(this, _data)[_data] = {
            [this.TYPES.AGE]: -1,
            [this.TYPES.CHR]: 0,
            [this.TYPES.INT]: 0,
            [this.TYPES.STR]: 0,
            [this.TYPES.MNY]: 0,
            [this.TYPES.SPR]: 0,
            [this.TYPES.LIF]: 1,
            [this.TYPES.TLT]: [],
            [this.TYPES.EVT]: [],
            [this.TYPES.LAGE]: Infinity,
            [this.TYPES.LCHR]: Infinity,
            [this.TYPES.LINT]: Infinity,
            [this.TYPES.LSTR]: Infinity,
            [this.TYPES.LSPR]: Infinity,
            [this.TYPES.LMNY]: Infinity,
            [this.TYPES.HAGE]: -Infinity,
            [this.TYPES.HCHR]: -Infinity,
            [this.TYPES.HINT]: -Infinity,
            [this.TYPES.HSTR]: -Infinity,
            [this.TYPES.HMNY]: -Infinity,
            [this.TYPES.HSPR]: -Infinity
          };

          for (const key in data) this.change(key, data[key]);
        }

        restartLastStep() {
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.LAGE] = this.get(this.TYPES.AGE);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.LCHR] = this.get(this.TYPES.CHR);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.LINT] = this.get(this.TYPES.INT);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.LSTR] = this.get(this.TYPES.STR);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.LSPR] = this.get(this.TYPES.SPR);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.LMNY] = this.get(this.TYPES.MNY);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.HAGE] = this.get(this.TYPES.AGE);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.HCHR] = this.get(this.TYPES.CHR);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.HINT] = this.get(this.TYPES.INT);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.HSTR] = this.get(this.TYPES.STR);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.HMNY] = this.get(this.TYPES.MNY);
          _classPrivateFieldLooseBase(this, _data)[_data][this.TYPES.HSPR] = this.get(this.TYPES.SPR);
        }

        get(prop) {
          switch (prop) {
            case this.TYPES.AGE:
            case this.TYPES.CHR:
            case this.TYPES.INT:
            case this.TYPES.STR:
            case this.TYPES.MNY:
            case this.TYPES.SPR:
            case this.TYPES.LIF:
            case this.TYPES.TLT:
            case this.TYPES.EVT:
              return (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
                error: Error()
              }), clone) : clone)(_classPrivateFieldLooseBase(this, _data)[_data][prop]);

            case this.TYPES.LAGE:
            case this.TYPES.LCHR:
            case this.TYPES.LINT:
            case this.TYPES.LSTR:
            case this.TYPES.LMNY:
            case this.TYPES.LSPR:
              return (_crd && min === void 0 ? (_reportPossibleCrUseOfmin({
                error: Error()
              }), min) : min)(_classPrivateFieldLooseBase(this, _data)[_data][prop], this.get(this.fallback(prop)));

            case this.TYPES.HAGE:
            case this.TYPES.HCHR:
            case this.TYPES.HINT:
            case this.TYPES.HSTR:
            case this.TYPES.HMNY:
            case this.TYPES.HSPR:
              return (_crd && max === void 0 ? (_reportPossibleCrUseOfmax({
                error: Error()
              }), max) : max)(_classPrivateFieldLooseBase(this, _data)[_data][prop], this.get(this.fallback(prop)));

            case this.TYPES.SUM:
              const HAGE = this.get(this.TYPES.HAGE);
              const HCHR = this.get(this.TYPES.HCHR);
              const HINT = this.get(this.TYPES.HINT);
              const HSTR = this.get(this.TYPES.HSTR);
              const HMNY = this.get(this.TYPES.HMNY);
              const HSPR = this.get(this.TYPES.HSPR);
              return Math.floor((_crd && sum === void 0 ? (_reportPossibleCrUseOfsum({
                error: Error()
              }), sum) : sum)(HCHR, HINT, HSTR, HMNY, HSPR) * 2 + HAGE / 2);

            case this.TYPES.TMS:
              return this.lsget('times') || 0;

            case this.TYPES.EXT:
              return this.lsget('extendTalent') || null;

            case this.TYPES.ATLT:
            case this.TYPES.AEVT:
            case this.TYPES.ACHV:
              return this.lsget(prop) || [];

            case this.TYPES.CTLT:
            case this.TYPES.CEVT:
            case this.TYPES.CACHV:
              return this.get(this.fallback(prop)).length;

            default:
              return 0;
          }
        }

        fallback(prop) {
          switch (prop) {
            case this.TYPES.LAGE:
            case this.TYPES.HAGE:
              return this.TYPES.AGE;

            case this.TYPES.LCHR:
            case this.TYPES.HCHR:
              return this.TYPES.CHR;

            case this.TYPES.LINT:
            case this.TYPES.HINT:
              return this.TYPES.INT;

            case this.TYPES.LSTR:
            case this.TYPES.HSTR:
              return this.TYPES.STR;

            case this.TYPES.LMNY:
            case this.TYPES.HMNY:
              return this.TYPES.MNY;

            case this.TYPES.LSPR:
            case this.TYPES.HSPR:
              return this.TYPES.SPR;

            case this.TYPES.CTLT:
              return this.TYPES.ATLT;

            case this.TYPES.CEVT:
              return this.TYPES.AEVT;

            case this.TYPES.CACHV:
              return this.TYPES.ACHV;

            default:
              return;
          }
        }

        set(prop, value) {
          switch (prop) {
            case this.TYPES.AGE:
            case this.TYPES.CHR:
            case this.TYPES.INT:
            case this.TYPES.STR:
            case this.TYPES.MNY:
            case this.TYPES.SPR:
            case this.TYPES.LIF:
            case this.TYPES.TLT:
            case this.TYPES.EVT:
              this.hl(prop, _classPrivateFieldLooseBase(this, _data)[_data][prop] = (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
                error: Error()
              }), clone) : clone)(value));
              this.achieve(prop, value);
              return;

            case this.TYPES.TMS:
              this.lsset('times', parseInt(value) || 0);
              return;

            case this.TYPES.EXT:
              this.lsset('extendTalent', value);
              return;

            default:
              return;
          }
        }

        getLastRecord() {
          return (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
            error: Error()
          }), clone) : clone)({
            [this.TYPES.AGE]: this.get(this.TYPES.AGE),
            [this.TYPES.CHR]: this.get(this.TYPES.CHR),
            [this.TYPES.INT]: this.get(this.TYPES.INT),
            [this.TYPES.STR]: this.get(this.TYPES.STR),
            [this.TYPES.MNY]: this.get(this.TYPES.MNY),
            [this.TYPES.SPR]: this.get(this.TYPES.SPR)
          });
        }

        change(prop, value) {
          if (Array.isArray(value)) {
            for (const v of value) this.change(prop, Number(v));

            return;
          }

          switch (prop) {
            case this.TYPES.AGE:
            case this.TYPES.CHR:
            case this.TYPES.INT:
            case this.TYPES.STR:
            case this.TYPES.MNY:
            case this.TYPES.SPR:
            case this.TYPES.LIF:
              this.hl(prop, _classPrivateFieldLooseBase(this, _data)[_data][prop] += Number(value));
              return;

            case this.TYPES.TLT:
            case this.TYPES.EVT:
              const v = _classPrivateFieldLooseBase(this, _data)[_data][prop];

              if (value < 0) {
                const index = v.indexOf(value);
                if (index != -1) v.splice(index, 1);
              }

              if (!v.includes(value)) v.push(value);
              this.achieve(prop, value);
              return;

            case this.TYPES.TMS:
              this.set(prop, this.get(prop) + parseInt(value));
              return;

            default:
              return;
          }
        }

        hookSpecial(prop) {
          switch (prop) {
            case this.TYPES.RDM:
              return (_crd && listRandom === void 0 ? (_reportPossibleCrUseOflistRandom({
                error: Error()
              }), listRandom) : listRandom)(this.SPECIAL.RDM);

            default:
              return prop;
          }
        }

        effect(effects) {
          for (let prop in effects) this.change(this.hookSpecial(prop), Number(effects[prop]));
        }

        isEnd() {
          return this.get(this.TYPES.LIF) < 1;
        }

        ageNext() {
          this.change(this.TYPES.AGE, 1);
          const age = this.get(this.TYPES.AGE);
          const {
            event,
            talent
          } = this.getAgeData(age);
          return {
            age,
            event,
            talent
          };
        }

        getAgeData(age) {
          return (_crd && clone === void 0 ? (_reportPossibleCrUseOfclone({
            error: Error()
          }), clone) : clone)(_classPrivateFieldLooseBase(this, _ageData)[_ageData][age]);
        }

        hl(prop, value) {
          let keys;

          switch (prop) {
            case this.TYPES.AGE:
              keys = [this.TYPES.LAGE, this.TYPES.HAGE];
              break;

            case this.TYPES.CHR:
              keys = [this.TYPES.LCHR, this.TYPES.HCHR];
              break;

            case this.TYPES.INT:
              keys = [this.TYPES.LINT, this.TYPES.HINT];
              break;

            case this.TYPES.STR:
              keys = [this.TYPES.LSTR, this.TYPES.HSTR];
              break;

            case this.TYPES.MNY:
              keys = [this.TYPES.LMNY, this.TYPES.HMNY];
              break;

            case this.TYPES.SPR:
              keys = [this.TYPES.LSPR, this.TYPES.HSPR];
              break;

            default:
              return;
          }

          const [l, h] = keys;
          _classPrivateFieldLooseBase(this, _data)[_data][l] = (_crd && min === void 0 ? (_reportPossibleCrUseOfmin({
            error: Error()
          }), min) : min)(_classPrivateFieldLooseBase(this, _data)[_data][l], value);
          _classPrivateFieldLooseBase(this, _data)[_data][h] = (_crd && max === void 0 ? (_reportPossibleCrUseOfmax({
            error: Error()
          }), max) : max)(_classPrivateFieldLooseBase(this, _data)[_data][h], value);
        }

        achieve(prop, newData) {
          let key;

          switch (prop) {
            case this.TYPES.ACHV:
              const lastData = this.lsget(prop);
              this.lsset(prop, (lastData || []).concat([[newData, Date.now()]]));
              return;

            case this.TYPES.TLT:
              key = this.TYPES.ATLT;
              break;

            case this.TYPES.EVT:
              key = this.TYPES.AEVT;
              break;

            default:
              return;
          }

          const lastData = this.lsget(key) || [];
          this.lsset(key, Array.from(new Set(lastData.concat(newData || []).flat())));
        }

        lsget(key) {
          const data = sys.localStorage.getItem(key);
          if (data === null) return;
          return JSON.parse(data);
        }

        lsset(key, value) {
          sys.localStorage.setItem(key, JSON.stringify(value));
        }

      };

      _export("default", Property);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8a2d729ab4582dff6585341b8817a5ae18ddd365.js.map