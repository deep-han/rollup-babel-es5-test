;(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    280: function(t, e, n) {
      'use strict'
      n(11), n(281)
    },
    281: function(t, e, n) {},
    282: function(t, e, n) {
      'use strict'
      n(11), n(283)
    },
    283: function(t, e, n) {},
    284: function(t, e, n) {
      'use strict'
      var o = n(3),
        c = n(10),
        r = Object(c.a)('swipe-item'),
        h = r[0],
        f = r[1]
      e.a = h({
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
            e = this.$parent,
            n = e.vertical,
            c = e.computedWidth,
            r = e.computedHeight,
            style = {
              width: c + 'px',
              height: n ? r + 'px' : '100%',
              transform:
                'translate' + (n ? 'Y' : 'X') + '(' + this.offset + 'px)'
            }
          return t(
            'div',
            {class: f(), style: style, on: Object(o.a)({}, this.$listeners)},
            [this.slots()]
          )
        }
      })
    },
    305: function(t, e, n) {},
    306: function(t, e, n) {
      'use strict'
      var o = n(10),
        c = n(12),
        r = n(70),
        h = n(43),
        f = n(97)
      function l(t, e, n) {
        return Math.min(Math.max(t, e), n)
      }
      var d = Object(o.a)('swipe'),
        v = d[0],
        m = d[1]
      e.a = v({
        mixins: [
          r.a,
          Object(h.a)(function(t, e) {
            t(window, 'resize', this.onResize, !0),
              e ? this.initialize() : this.clear()
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
              e = this.vertical ? 'height' : 'width',
              n = this.vertical ? 'width' : 'height'
            return (
              ((t = {})[e] = this.trackSize + 'px'),
              (t[n] = this[n] ? this[n] + 'px' : ''),
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
            var e = this.active,
              n = this.count
            return t ? (this.loop ? l(e + t, -1, n) : l(e + t, 0, n - 1)) : e
          },
          getTargetOffset: function(t, e) {
            var n = t * this.size
            this.loop || (n = Math.min(n, -this.minOffset))
            var o = Math.round(e - n)
            return this.loop || (o = l(o, this.minOffset, 0)), o
          },
          move: function(t) {
            var e = t.pace,
              n = void 0 === e ? 0 : e,
              o = t.offset,
              c = void 0 === o ? 0 : o,
              r = t.emitChange,
              h = this.loop,
              f = this.count,
              l = this.active,
              d = this.swipes,
              v = this.trackSize,
              m = this.minOffset
            if (!(f <= 1)) {
              var w = this.getTargetActive(n),
                y = this.getTargetOffset(w, c)
              if (h) {
                if (d[0]) {
                  var z = y < m
                  d[0].offset = z ? v : 0
                }
                if (d[f - 1]) {
                  var j = y > 0
                  d[f - 1].offset = j ? -v : 0
                }
              }
              ;(this.active = w),
                (this.offset = y),
                r && w !== l && this.$emit('change', this.activeIndicator)
            }
          },
          swipeTo: function(t, e) {
            var n = this
            void 0 === e && (e = {}),
              (this.swiping = !0),
              this.resetTouchStatus(),
              this.correctPosition(),
              Object(f.a)(function() {
                n.move({pace: (t % n.count) - n.active, emitChange: !0}),
                  e.immediate
                    ? Object(f.a)(function() {
                        n.swiping = !1
                      })
                    : (n.swiping = !1)
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
              e = this.autoplay
            e &&
              this.count > 1 &&
              (this.clear(),
              (this.timer = setTimeout(function() {
                ;(t.swiping = !0),
                  t.resetTouchStatus(),
                  t.correctPosition(),
                  Object(f.a)(function() {
                    ;(t.swiping = !1),
                      t.move({pace: 1, emitChange: !0}),
                      t.autoPlay()
                  })
              }, e)))
          },
          renderIndicator: function() {
            var t = this,
              e = this.$createElement,
              n = this.count,
              o = this.activeIndicator,
              slot = this.slots('indicator')
            return (
              slot ||
              (this.showIndicators && n > 1
                ? e(
                    'div',
                    {class: m('indicators', {vertical: this.vertical})},
                    [
                      Array.apply(void 0, Array(n)).map(function(n, c) {
                        return e('i', {
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
    386: function(t, e, n) {
      'use strict'
      var o = n(305)
      n.n(o).a
    },
    392: function(t, e, n) {
      'use strict'
      n.r(e)
      n(280)
      var o = n(284),
        c =
          (n(282),
          {
            layout: 'layout-with-footer',
            components: {'van-swipe': n(306).a, 'van-swipe-item': o.a},
            data: function() {
              return {
                images: [
                  'https://img.yzcdn.cn/2.jpg',
                  'https://img.yzcdn.cn/2.jpg'
                ],
                goods: [
                  {
                    id: '001',
                    name: '进口香蕉',
                    price: '2',
                    img:
                      'https://img.yzcdn.cn/public_files/2017/10/24/2f9a36046449dafb8608e99990b3c205.jpeg'
                  },
                  {
                    id: '002',
                    name: '陕西蜜梨',
                    price: '6.9',
                    img:
                      'https://img.yzcdn.cn/public_files/2017/10/24/f6aabd6ac5521195e01e8e89ee9fc63f.jpeg'
                  },
                  {
                    id: '003',
                    name: '美国伽力果',
                    price: '26.8',
                    img:
                      'https://img.yzcdn.cn/public_files/2017/10/24/320454216bbe9e25c7651e1fa51b31fd.jpeg'
                  },
                  {
                    id: '004',
                    name: '智利进口车厘子精选',
                    price: '388',
                    img:
                      '//img11.360buyimg.com/n7/jfs/t23839/6/2329458134/547797/e0c3ca7d/5b7cb504Ne746d2e6.jpg'
                  },
                  {
                    id: '005',
                    name: '番石榴红心 红心芭乐',
                    price: '29.8',
                    img:
                      '//img12.360buyimg.com/n7/jfs/t26923/229/2278521880/129730/fb691af5/5bfea71aN28106a4b.jpg'
                  },
                  {
                    id: '006',
                    name: '云南哀牢山冰糖橙',
                    price: '52.9',
                    img:
                      '//img11.360buyimg.com/n7/jfs/t26266/170/2255460292/191195/143b9753/5bfcfcacNfbb9cfd6.jpg'
                  }
                ]
              }
            },
            methods: {
              goDetail: function(t) {
                this.$router.push({path: '/goods-detail', query: {id: t.id}})
              }
            }
          }),
        r = (n(386), n(19)),
        component = Object(r.a)(
          c,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {staticClass: 'index'},
              [
                n(
                  'van-swipe',
                  {attrs: {autoplay: 3e3, 'indicator-color': 'white'}},
                  t._l(t.images, function(image, t) {
                    return n('van-swipe-item', {key: t}, [
                      n('img', {staticClass: 'banner', attrs: {src: image}})
                    ])
                  }),
                  1
                ),
                t._v(' '),
                n(
                  'van-row',
                  {staticClass: 'goods'},
                  [
                    n('van-cell', {attrs: {title: '热销商品', icon: 'fire-o'}}),
                    t._v(' '),
                    n(
                      'van-row',
                      t._l(t.goods, function(e, o) {
                        return n('van-col', {key: o, attrs: {span: '12'}}, [
                          n(
                            'div',
                            {
                              staticClass: 'block',
                              on: {
                                click: function(n) {
                                  return t.goDetail(e)
                                }
                              }
                            },
                            [
                              n('img', {
                                staticClass: 'good-img',
                                attrs: {src: e.img}
                              }),
                              t._v(' '),
                              n('p', {staticClass: 'name'}, [
                                t._v(t._s(e.name))
                              ]),
                              t._v(' '),
                              n('p', {staticClass: 'price'}, [
                                t._v(t._s(t._f('price')(e.price)))
                              ])
                            ]
                          )
                        ])
                      }),
                      1
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
      e.default = component.exports
    }
  }
])
