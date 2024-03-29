;(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    274: function(t, e, n) {
      'use strict'
      n(11), n(26), n(275)
    },
    275: function(t, e, n) {},
    276: function(t, e, n) {},
    277: function(t, e, n) {
      'use strict'
      var c = n(4),
        r = n.n(c),
        o = n(10),
        l = n(6),
        d = n(15),
        f = Object(o.a)('tag'),
        m = f[0],
        h = f[1]
      function v(t, e, n, c) {
        var o,
          f,
          m = e.type,
          mark = e.mark,
          v = e.plain,
          x = e.color,
          k = e.round,
          y = e.size,
          style = (((o = {})[v ? 'color' : 'backgroundColor'] = x), o)
        e.textColor && (style.color = e.textColor)
        var S = {mark: mark, plain: v, round: k}
        return (
          y && (S[y] = y),
          t(
            'span',
            r()([
              {style: style, class: [h([S, m]), ((f = {}), (f[d.c] = v), f)]},
              Object(l.b)(c, !0)
            ]),
            [n.default && n.default()]
          )
        )
      }
      ;(v.props = {
        size: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String,
        type: {type: String, default: 'default'}
      }),
        (e.a = m(v))
    },
    278: function(t, e, n) {
      'use strict'
      var c = n(10),
        r = n(98),
        o = Object(c.a)('checkbox'),
        l = o[0],
        d = o[1]
      e.a = l({
        mixins: [
          Object(r.a)({bem: d, role: 'checkbox', parent: 'vanCheckbox'})
        ],
        computed: {
          checked: {
            get: function() {
              return this.parent
                ? -1 !== this.parent.value.indexOf(this.name)
                : this.value
            },
            set: function(t) {
              this.parent ? this.setParentValue(t) : this.$emit('input', t)
            }
          }
        },
        watch: {
          value: function(t) {
            this.$emit('change', t)
          }
        },
        methods: {
          toggle: function() {
            var t = this,
              e = !this.checked
            clearTimeout(this.toggleTask),
              (this.toggleTask = setTimeout(function() {
                t.checked = e
              }))
          },
          setParentValue: function(t) {
            var e = this.parent,
              n = e.value.slice()
            if (t) {
              if (e.max && n.length >= e.max) return
              ;-1 === n.indexOf(this.name) &&
                (n.push(this.name), e.$emit('input', n))
            } else {
              var c = n.indexOf(this.name)
              ;-1 !== c && (n.splice(c, 1), e.$emit('input', n))
            }
          }
        }
      })
    },
    279: function(t, e, n) {},
    323: function(t, e, n) {},
    324: function(t, e, n) {},
    325: function(t, e, n) {
      'use strict'
      var c = n(279)
      n.n(c).a
    },
    388: function(t, e, n) {
      'use strict'
      n.r(e)
      n(11)
      var c = n(10),
        r = n(21),
        o = Object(c.a)('checkbox-group'),
        l = o[0],
        d = o[1],
        f = l({
          mixins: [Object(r.b)('vanCheckbox')],
          props: {
            max: Number,
            disabled: Boolean,
            value: {
              type: Array,
              default: function() {
                return []
              }
            }
          },
          watch: {
            value: function(t) {
              this.$emit('change', t)
            }
          },
          render: function() {
            var t = arguments[0]
            return t('div', {class: d()}, [this.slots()])
          }
        }),
        m = (n(26), n(323), n(4)),
        h = n.n(m),
        v = n(6),
        x = n(57),
        k = n(5),
        y = Object(c.a)('submit-bar'),
        S = y[0],
        O = y[1],
        j = y[2]
      function B(t, e, n, c) {
        var r = e.tip,
          o = e.price,
          l = e.tipIcon
        return t(
          'div',
          h()([
            {class: O({'safe-area-inset-bottom': e.safeAreaInsetBottom})},
            Object(v.b)(c)
          ]),
          [
            n.top && n.top(),
            (function() {
              if (n.tip || r)
                return t('div', {class: O('tip')}, [
                  l && t(k.a, {class: O('tip-icon'), attrs: {name: l}}),
                  r && t('span', {class: O('tip-text')}, [r]),
                  n.tip && n.tip()
                ])
            })(),
            t('div', {class: O('bar')}, [
              n.default && n.default(),
              (function() {
                if ('number' == typeof o) {
                  var n = e.currency + ' ' + (o / 100).toFixed(e.decimalLength)
                  return t('div', {class: O('text')}, [
                    t('span', [e.label || j('label')]),
                    t('span', {class: O('price')}, [n]),
                    e.suffixLabel &&
                      t('span', {class: O('suffix-label')}, [e.suffixLabel])
                  ])
                }
              })(),
              t(x.a, {
                attrs: {
                  square: !0,
                  size: 'large',
                  type: e.buttonType,
                  loading: e.loading,
                  disabled: e.disabled,
                  text: e.loading ? '' : e.buttonText
                },
                class: O('button'),
                on: {
                  click: function() {
                    Object(v.a)(c, 'submit')
                  }
                }
              })
            ])
          ]
        )
      }
      B.props = {
        tip: String,
        label: String,
        price: Number,
        tipIcon: String,
        loading: Boolean,
        disabled: Boolean,
        buttonText: String,
        suffixLabel: String,
        safeAreaInsetBottom: Boolean,
        decimalLength: {type: Number, default: 2},
        currency: {type: String, default: '¥'},
        buttonType: {type: String, default: 'danger'}
      }
      var _ = S(B),
        w = (n(274), n(278)),
        T = (n(276), n(324), n(1)),
        z = n(277),
        C = n(123),
        L = Object(c.a)('card'),
        P = L[0],
        G = L[1]
      function $(t, e, n, c) {
        var r = e.thumb,
          o = n.num || Object(T.b)(e.num),
          l = n.price || Object(T.b)(e.price),
          d = n['origin-price'] || Object(T.b)(e.originPrice),
          f = o || l || d
        function m(t) {
          Object(v.a)(c, 'click-thumb', t)
        }
        function x() {
          if (n.tag || e.tag)
            return t('div', {class: G('tag')}, [
              n.tag
                ? n.tag()
                : t(z.a, {attrs: {mark: !0, type: 'danger'}}, [e.tag])
            ])
        }
        return t('div', h()([{class: G()}, Object(v.b)(c, !0)]), [
          t('div', {class: G('header')}, [
            (function() {
              if (n.thumb || r)
                return t(
                  'a',
                  {
                    attrs: {href: e.thumbLink},
                    class: G('thumb'),
                    on: {click: m}
                  },
                  [
                    n.thumb
                      ? n.thumb()
                      : t(C.a, {
                          attrs: {
                            src: r,
                            width: '100%',
                            height: '100%',
                            fit: 'contain',
                            'lazy-load': e.lazyLoad
                          }
                        }),
                    x()
                  ]
                )
            })(),
            t('div', {class: G('content', {centered: e.centered})}, [
              n.title
                ? n.title()
                : e.title
                ? t('div', {class: G('title')}, [e.title])
                : void 0,
              n.desc
                ? n.desc()
                : e.desc
                ? t('div', {class: [G('desc'), 'van-ellipsis']}, [e.desc])
                : void 0,
              n.tags && n.tags(),
              f &&
                t('div', {class: 'van-card__bottom'}, [
                  (function() {
                    if (l)
                      return t('div', {class: G('price')}, [
                        n.price ? n.price() : e.currency + ' ' + e.price
                      ])
                  })(),
                  (function() {
                    if (d) {
                      var slot = n['origin-price']
                      return t('div', {class: G('origin-price')}, [
                        slot ? slot() : e.currency + ' ' + e.originPrice
                      ])
                    }
                  })(),
                  (function() {
                    if (o)
                      return t('div', {class: G('num')}, [
                        n.num ? n.num() : 'x ' + e.num
                      ])
                  })(),
                  n.bottom && n.bottom()
                ])
            ])
          ]),
          (function() {
            if (n.footer) return t('div', {class: G('footer')}, [n.footer()])
          })()
        ])
      }
      $.props = {
        tag: String,
        desc: String,
        thumb: String,
        title: String,
        centered: Boolean,
        lazyLoad: Boolean,
        thumbLink: String,
        num: [Number, String],
        price: [Number, String],
        originPrice: [Number, String],
        currency: {type: String, default: '¥'}
      }
      var N = {
          layout: 'layout-with-footer',
          components: {
            'van-card': P($),
            'van-checkbox': w.a,
            'van-submit-bar': _,
            'van-checkbox-group': f
          },
          data: function() {
            return {
              checkedGoods: ['1', '2', '3'],
              goods: [
                {
                  id: '1',
                  title: '进口香蕉',
                  desc: '约250g，2根',
                  price: 200,
                  num: 1,
                  thumb:
                    'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                },
                {
                  id: '2',
                  title: '陕西蜜梨',
                  desc: '约600g',
                  price: 690,
                  num: 1,
                  thumb:
                    'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
                },
                {
                  id: '3',
                  title: '美国伽力果',
                  desc: '约680g/3个',
                  price: 2680,
                  num: 1,
                  thumb:
                    'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
                }
              ]
            }
          },
          computed: {
            submitBarText: function() {
              var t = this.checkedGoods.length
              return '结算' + (t ? '('.concat(t, ')') : '')
            },
            totalPrice: function() {
              var t = this
              return this.goods.reduce(function(e, n) {
                return e + (-1 !== t.checkedGoods.indexOf(n.id) ? n.price : 0)
              }, 0)
            }
          },
          methods: {
            formatPrice: function(t) {
              return (t / 100).toFixed(2)
            },
            onSubmit: function() {
              this.$toast('点击结算')
            }
          }
        },
        I = (n(325), n(19)),
        component = Object(I.a)(
          N,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {staticClass: 'cart'},
              [
                n(
                  'van-checkbox-group',
                  {
                    staticClass: 'card-goods',
                    model: {
                      value: t.checkedGoods,
                      callback: function(e) {
                        t.checkedGoods = e
                      },
                      expression: 'checkedGoods'
                    }
                  },
                  t._l(t.goods, function(e) {
                    return n(
                      'van-checkbox',
                      {
                        key: e.id,
                        staticClass: 'card-goods__item',
                        attrs: {name: e.id}
                      },
                      [
                        n('van-card', {
                          attrs: {
                            title: e.title,
                            desc: e.desc,
                            num: e.num,
                            price: t.formatPrice(e.price),
                            thumb: e.thumb
                          }
                        })
                      ],
                      1
                    )
                  }),
                  1
                ),
                t._v(' '),
                n('van-submit-bar', {
                  attrs: {
                    price: t.totalPrice,
                    disabled: !t.checkedGoods.length,
                    'button-text': t.submitBarText
                  },
                  on: {submit: t.onSubmit}
                })
              ],
              1
            )
          },
          [],
          !1,
          null,
          null,
          null
        )
      e.default = component.exports
    }
  }
])
