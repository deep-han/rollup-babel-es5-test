;(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    276: function(t, n, e) {},
    277: function(t, n, e) {
      'use strict'
      var o = e(4),
        c = e.n(o),
        r = e(10),
        h = e(6),
        l = e(15),
        d = Object(r.a)('tag'),
        f = d[0],
        v = d[1]
      function m(t, n, e, o) {
        var r,
          d,
          f = n.type,
          mark = n.mark,
          m = n.plain,
          w = n.color,
          y = n.round,
          C = n.size,
          style = (((r = {})[m ? 'color' : 'backgroundColor'] = w), r)
        n.textColor && (style.color = n.textColor)
        var k = {mark: mark, plain: m, round: y}
        return (
          C && (k[C] = C),
          t(
            'span',
            c()([
              {style: style, class: [v([k, f]), ((d = {}), (d[l.c] = m), d)]},
              Object(h.b)(o, !0)
            ]),
            [e.default && e.default()]
          )
        )
      }
      ;(m.props = {
        size: String,
        mark: Boolean,
        color: String,
        plain: Boolean,
        round: Boolean,
        textColor: String,
        type: {type: String, default: 'default'}
      }),
        (n.a = f(m))
    },
    280: function(t, n, e) {
      'use strict'
      e(11), e(281)
    },
    281: function(t, n, e) {},
    282: function(t, n, e) {
      'use strict'
      e(11), e(283)
    },
    283: function(t, n, e) {},
    284: function(t, n, e) {
      'use strict'
      var o = e(3),
        c = e(10),
        r = Object(c.a)('swipe-item'),
        h = r[0],
        l = r[1]
      n.a = h({
        data: function() {
          return {offset: 0}
        },
        beforeCreate: function() {
          this.$parent.swipes.push(this)
        },
        destroyed: function() {
          this.$parent.swipes.splice(this.$parent.swipes.indexOf(this), 1)
        },
        render: function() {
          var t = arguments[0],
            n = this.$parent,
            e = n.vertical,
            c = n.computedWidth,
            r = n.computedHeight,
            style = {
              width: c + 'px',
              height: e ? r + 'px' : '100%',
              transform:
                'translate' + (e ? 'Y' : 'X') + '(' + this.offset + 'px)'
            }
          return t(
            'div',
            {class: l(), style: style, on: Object(o.a)({}, this.$listeners)},
            [this.slots()]
          )
        }
      })
    },
    285: function(t, n, e) {},
    306: function(t, n, e) {
      'use strict'
      var o = e(10),
        c = e(12),
        r = e(70),
        h = e(43),
        l = e(97)
      function d(t, n, e) {
        return Math.min(Math.max(t, n), e)
      }
      var f = Object(o.a)('swipe'),
        v = f[0],
        m = f[1]
      n.a = v({
        mixins: [
          r.a,
          Object(h.a)(function(t, n) {
            t(window, 'resize', this.onResize, !0),
              n ? this.initialize() : this.clear()
          })
        ],
        props: {
          width: Number,
          height: Number,
          autoplay: Number,
          vertical: Boolean,
          indicatorColor: String,
          loop: {type: Boolean, default: !0},
          duration: {type: Number, default: 500},
          touchable: {type: Boolean, default: !0},
          initialSwipe: {type: Number, default: 0},
          showIndicators: {type: Boolean, default: !0}
        },
        data: function() {
          return {
            computedWidth: 0,
            computedHeight: 0,
            offset: 0,
            active: 0,
            deltaX: 0,
            deltaY: 0,
            swipes: [],
            swiping: !1
          }
        },
        watch: {
          swipes: function() {
            this.initialize()
          },
          initialSwipe: function() {
            this.initialize()
          },
          autoplay: function(t) {
            t ? this.autoPlay() : this.clear()
          }
        },
        computed: {
          count: function() {
            return this.swipes.length
          },
          delta: function() {
            return this.vertical ? this.deltaY : this.deltaX
          },
          size: function() {
            return this[this.vertical ? 'computedHeight' : 'computedWidth']
          },
          trackSize: function() {
            return this.count * this.size
          },
          activeIndicator: function() {
            return (this.active + this.count) % this.count
          },
          isCorrectDirection: function() {
            var t = this.vertical ? 'vertical' : 'horizontal'
            return this.direction === t
          },
          trackStyle: function() {
            var t,
              n = this.vertical ? 'height' : 'width',
              e = this.vertical ? 'width' : 'height'
            return (
              ((t = {})[n] = this.trackSize + 'px'),
              (t[e] = this[e] ? this[e] + 'px' : ''),
              (t.transitionDuration =
                (this.swiping ? 0 : this.duration) + 'ms'),
              (t.transform =
                'translate' +
                (this.vertical ? 'Y' : 'X') +
                '(' +
                this.offset +
                'px)'),
              t
            )
          },
          indicatorStyle: function() {
            return {backgroundColor: this.indicatorColor}
          },
          minOffset: function() {
            var rect = this.$el.getBoundingClientRect()
            return (
              (this.vertical ? rect.height : rect.width) -
              this.size * this.count
            )
          }
        },
        methods: {
          initialize: function(t) {
            if (
              (void 0 === t && (t = this.initialSwipe),
              clearTimeout(this.timer),
              this.$el)
            ) {
              var rect = this.$el.getBoundingClientRect()
              ;(this.computedWidth = this.width || rect.width),
                (this.computedHeight = this.height || rect.height)
            }
            ;(this.swiping = !0),
              (this.active = t),
              (this.offset = this.count > 1 ? -this.size * this.active : 0),
              this.swipes.forEach(function(t) {
                t.offset = 0
              }),
              this.autoPlay()
          },
          onResize: function() {
            this.initialize(this.activeIndicator)
          },
          onTouchStart: function(t) {
            this.touchable &&
              (this.clear(),
              (this.swiping = !0),
              this.touchStart(t),
              this.correctPosition())
          },
          onTouchMove: function(t) {
            this.touchable &&
              this.swiping &&
              (this.touchMove(t),
              this.isCorrectDirection &&
                (Object(c.c)(t, !0), this.move({offset: this.delta})))
          },
          onTouchEnd: function() {
            if (this.touchable && this.swiping) {
              if (this.delta && this.isCorrectDirection) {
                var t = this.vertical ? this.offsetY : this.offsetX
                this.move({
                  pace: t > 0 ? (this.delta > 0 ? -1 : 1) : 0,
                  emitChange: !0
                })
              }
              ;(this.swiping = !1), this.autoPlay()
            }
          },
          getTargetActive: function(t) {
            var n = this.active,
              e = this.count
            return t ? (this.loop ? d(n + t, -1, e) : d(n + t, 0, e - 1)) : n
          },
          getTargetOffset: function(t, n) {
            var e = t * this.size
            this.loop || (e = Math.min(e, -this.minOffset))
            var o = Math.round(n - e)
            return this.loop || (o = d(o, this.minOffset, 0)), o
          },
          move: function(t) {
            var n = t.pace,
              e = void 0 === n ? 0 : n,
              o = t.offset,
              c = void 0 === o ? 0 : o,
              r = t.emitChange,
              h = this.loop,
              l = this.count,
              d = this.active,
              f = this.swipes,
              v = this.trackSize,
              m = this.minOffset
            if (!(l <= 1)) {
              var w = this.getTargetActive(e),
                y = this.getTargetOffset(w, c)
              if (h) {
                if (f[0]) {
                  var C = y < m
                  f[0].offset = C ? v : 0
                }
                if (f[l - 1]) {
                  var k = y > 0
                  f[l - 1].offset = k ? -v : 0
                }
              }
              ;(this.active = w),
                (this.offset = y),
                r && w !== d && this.$emit('change', this.activeIndicator)
            }
          },
          swipeTo: function(t, n) {
            var e = this
            void 0 === n && (n = {}),
              (this.swiping = !0),
              this.resetTouchStatus(),
              this.correctPosition(),
              Object(l.a)(function() {
                e.move({pace: (t % e.count) - e.active, emitChange: !0}),
                  n.immediate
                    ? Object(l.a)(function() {
                        e.swiping = !1
                      })
                    : (e.swiping = !1)
              })
          },
          correctPosition: function() {
            this.active <= -1 && this.move({pace: this.count}),
              this.active >= this.count && this.move({pace: -this.count})
          },
          clear: function() {
            clearTimeout(this.timer)
          },
          autoPlay: function() {
            var t = this,
              n = this.autoplay
            n &&
              this.count > 1 &&
              (this.clear(),
              (this.timer = setTimeout(function() {
                ;(t.swiping = !0),
                  t.resetTouchStatus(),
                  t.correctPosition(),
                  Object(l.a)(function() {
                    ;(t.swiping = !1),
                      t.move({pace: 1, emitChange: !0}),
                      t.autoPlay()
                  })
              }, n)))
          },
          renderIndicator: function() {
            var t = this,
              n = this.$createElement,
              e = this.count,
              o = this.activeIndicator,
              slot = this.slots('indicator')
            return (
              slot ||
              (this.showIndicators && e > 1
                ? n(
                    'div',
                    {class: m('indicators', {vertical: this.vertical})},
                    [
                      Array.apply(void 0, Array(e)).map(function(e, c) {
                        return n('i', {
                          class: m('indicator', {active: c === o}),
                          style: c === o ? t.indicatorStyle : null
                        })
                      })
                    ]
                  )
                : void 0)
            )
          }
        },
        render: function() {
          var t = arguments[0]
          return t('div', {class: m()}, [
            t(
              'div',
              {
                ref: 'track',
                style: this.trackStyle,
                class: m('track'),
                on: {
                  touchstart: this.onTouchStart,
                  touchmove: this.onTouchMove,
                  touchend: this.onTouchEnd,
                  touchcancel: this.onTouchEnd
                }
              },
              [this.slots()]
            ),
            this.renderIndicator()
          ])
        }
      })
    },
    326: function(t, n, e) {},
    327: function(t, n, e) {},
    328: function(t, n, e) {},
    329: function(t, n, e) {
      'use strict'
      var o = e(285)
      e.n(o).a
    },
    387: function(t, n, e) {
      'use strict'
      e.r(n)
      e(11), e(26), e(326)
      var o = e(3),
        c = e(10),
        r = e(27),
        h = e(21),
        l = e(5),
        d = Object(c.a)('goods-action-icon'),
        f = d[0],
        v = d[1],
        m = f({
          mixins: [Object(h.a)('vanGoodsAction')],
          props: Object(o.a)({}, r.c, {
            text: String,
            icon: String,
            info: [Number, String],
            iconClass: null
          }),
          methods: {
            onClick: function(t) {
              this.$emit('click', t), Object(r.b)(this.$router, this)
            }
          },
          render: function() {
            var t = arguments[0]
            return t(
              'div',
              {
                attrs: {role: 'button', tabindex: '0'},
                class: v(),
                on: {click: this.onClick}
              },
              [
                this.slots('icon')
                  ? t('div', {class: v('icon')}, [this.slots('icon')])
                  : t(l.a, {
                      class: [v('icon'), this.iconClass],
                      attrs: {tag: 'div', info: this.info, name: this.icon}
                    }),
                this.slots() || this.text
              ]
            )
          }
        }),
        w = (e(327), e(57)),
        y = Object(c.a)('goods-action-button'),
        C = y[0],
        k = y[1],
        _ = C({
          mixins: [Object(h.a)('vanGoodsAction')],
          props: Object(o.a)({}, r.c, {
            type: String,
            text: String,
            loading: Boolean,
            disabled: Boolean
          }),
          computed: {
            isFirst: function() {
              var t = this.parent && this.parent.children[this.index - 1]
              return !t || t.$options.name !== this.$options.name
            },
            isLast: function() {
              var t = this.parent && this.parent.children[this.index + 1]
              return !t || t.$options.name !== this.$options.name
            }
          },
          methods: {
            onClick: function(t) {
              this.$emit('click', t), Object(r.b)(this.$router, this)
            }
          },
          render: function() {
            var t = arguments[0]
            return t(
              w.a,
              {
                class: k([{first: this.isFirst, last: this.isLast}, this.type]),
                attrs: {
                  square: !0,
                  size: 'large',
                  type: this.type,
                  loading: this.loading,
                  disabled: this.disabled
                },
                on: {click: this.onClick}
              },
              [this.slots() || this.text]
            )
          }
        }),
        O = (e(328), Object(c.a)('goods-action')),
        x = O[0],
        S = O[1],
        j = x({
          mixins: [Object(h.b)('vanGoodsAction')],
          props: {safeAreaInsetBottom: Boolean},
          render: function() {
            var t = arguments[0]
            return t(
              'div',
              {class: S({'safe-area-inset-bottom': this.safeAreaInsetBottom})},
              [this.slots()]
            )
          }
        }),
        z = (e(280), e(284)),
        $ = (e(282), e(306)),
        T =
          (e(276),
          {
            components: {
              'van-tag': e(277).a,
              'van-swipe': $.a,
              'van-swipe-item': z.a,
              'van-goods-action': j,
              'van-goods-action-button': _,
              'van-goods-action-icon': m
            },
            data: function() {
              return {
                goods: {
                  title: '美国伽力果（约680g/3个）',
                  price: 26.8,
                  express: '免运费',
                  remain: 19,
                  thumb: [
                    'https://img.yzcdn.cn/public_files/2017/10/24/e5a5a02309a41f9f5def56684808d9ae.jpeg',
                    'https://img.yzcdn.cn/public_files/2017/10/24/1791ba14088f9c2be8c610d0a6cc0f93.jpeg'
                  ]
                }
              }
            },
            methods: {
              onClickCart: function() {
                this.$router.push('cart')
              },
              sorry: function() {
                this.$toast('暂无后续逻辑~')
              }
            }
          }),
        B = (e(329), e(19)),
        component = Object(B.a)(
          T,
          function() {
            var t = this,
              n = t.$createElement,
              e = t._self._c || n
            return e(
              'div',
              {staticClass: 'goods-detail'},
              [
                e(
                  'van-swipe',
                  {staticClass: 'swipe', attrs: {autoplay: 3e3}},
                  t._l(t.goods.thumb, function(t) {
                    return e('van-swipe-item', {key: t}, [
                      e('img', {attrs: {src: t}})
                    ])
                  }),
                  1
                ),
                t._v(' '),
                e(
                  'van-cell-group',
                  [
                    e('van-cell', [
                      e('div', {staticClass: 'title'}, [
                        t._v(t._s(t.goods.title))
                      ]),
                      t._v(' '),
                      e('div', {staticClass: 'price'}, [
                        t._v(t._s(t._f('price')(t.goods.price)))
                      ])
                    ]),
                    t._v(' '),
                    e(
                      'van-cell',
                      {staticClass: 'express'},
                      [
                        e('van-col', {attrs: {span: '10'}}, [
                          t._v('运费：' + t._s(t.goods.express))
                        ]),
                        t._v(' '),
                        e('van-col', {attrs: {span: '14'}}, [
                          t._v('剩余：' + t._s(t.goods.remain))
                        ])
                      ],
                      1
                    )
                  ],
                  1
                ),
                t._v(' '),
                e(
                  'van-cell-group',
                  {staticClass: 'cell-group'},
                  [
                    e(
                      'van-cell',
                      {
                        attrs: {value: '进入店铺', icon: 'shop', 'is-link': ''},
                        on: {click: t.sorry}
                      },
                      [
                        e(
                          'template',
                          {slot: 'title'},
                          [
                            e('span', {staticClass: 'van-cell-text'}, [
                              t._v('有赞的店')
                            ]),
                            t._v(' '),
                            e(
                              'van-tag',
                              {staticClass: 'tag', attrs: {type: 'danger'}},
                              [t._v('官方')]
                            )
                          ],
                          1
                        )
                      ],
                      2
                    ),
                    t._v(' '),
                    e('van-cell', {
                      attrs: {
                        title: '线下门店',
                        icon: 'location',
                        'is-link': ''
                      },
                      on: {click: t.sorry}
                    })
                  ],
                  1
                ),
                t._v(' '),
                e(
                  'van-cell-group',
                  {staticClass: 'cell-group'},
                  [
                    e('van-cell', {
                      attrs: {title: '查看商品详情', 'is-link': ''},
                      on: {click: t.sorry}
                    })
                  ],
                  1
                ),
                t._v(' '),
                e(
                  'van-goods-action',
                  [
                    e(
                      'van-goods-action-icon',
                      {attrs: {icon: 'chat'}, on: {click: t.sorry}},
                      [t._v('\n      客服\n    ')]
                    ),
                    t._v(' '),
                    e(
                      'van-goods-action-icon',
                      {attrs: {icon: 'cart'}, on: {click: t.onClickCart}},
                      [t._v('\n      购物车\n    ')]
                    ),
                    t._v(' '),
                    e(
                      'van-goods-action-button',
                      {attrs: {type: 'warning'}, on: {click: t.sorry}},
                      [t._v('\n      加入购物车\n    ')]
                    ),
                    t._v(' '),
                    e(
                      'van-goods-action-button',
                      {attrs: {type: 'danger'}, on: {click: t.sorry}},
                      [t._v('\n      立即购买\n    ')]
                    )
                  ],
                  1
                )
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
      n.default = component.exports
    }
  }
])
