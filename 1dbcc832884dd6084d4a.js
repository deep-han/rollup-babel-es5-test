;(window.webpackJsonp = window.webpackJsonp || []).push([
  [8],
  {
    304: function(t, e, n) {},
    332: function(t, e, n) {
      'use strict'
      ;(function(t) {
        n(333),
          n(342),
          n(351),
          n(353),
          n(354),
          n(357),
          n(359),
          n(360),
          n(362),
          n(365),
          n(366),
          n(368)
        var r = n(369),
          o = n.n(r),
          l = n(371),
          d = n.n(l),
          c = n(375),
          f = n.n(c),
          h = n(377),
          v = n.n(h),
          m = n(378),
          _ = n.n(m),
          y = n(379),
          A = n.n(y),
          P = n(380),
          C = n.n(P),
          x = n(384),
          S = n.n(x),
          w = '~',
          E = ',',
          L = 'q=',
          $ = new RegExp(L + '.*' + E)
        function U(t) {
          var e =
              arguments.length > 1 && void 0 !== arguments[1]
                ? arguments[1]
                : w,
            n =
              arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : E
          return Object.keys(t)
            .map(function(n) {
              return ''
                .concat(n)
                .concat(e)
                .concat(encodeURIComponent(t[n]))
            })
            .join(n)
        }
        function R(t, e, n) {
          var r = L + U(e) + E,
            o = function(t) {
              return t.indexOf('?') > -1 ? '&' : '?'
            }
          if ($.test(t)) return t.replace($, r)
          if (-1 === t.indexOf('#')) return t + o(t) + r
          var l = t.split('#'),
            d = C()(l, 2),
            path = d[0],
            c = d[1]
          return 'history' === n ? path + o(path) + r + '#' + c : t + o(c) + r
        }
        function k(t) {
          var e = t.match($)
          return e
            ? (function(t) {
                var e =
                    arguments.length > 1 && void 0 !== arguments[1]
                      ? arguments[1]
                      : w,
                  n =
                    arguments.length > 2 && void 0 !== arguments[2]
                      ? arguments[2]
                      : E
                return t
                  .split(n)
                  .map(function(param) {
                    return param.split(e)
                  })
                  .reduce(function(t, e) {
                    var n = C()(e, 2),
                      r = n[0],
                      o = n[1]
                    return (t[r] = decodeURIComponent(o)), t
                  }, {})
              })(e[0].replace(L, '').slice(0, -1))
            : null
        }
        var O,
          script = {
            name: 'data-list',
            components: {InfiniteLoading: _.a},
            inheritAttrs: !1,
            props: {
              url: String,
              query: {
                type: Object,
                default: function() {
                  return {}
                }
              },
              dataPath: {type: String, default: 'payload.content'},
              totalPagesPath: {type: String, default: 'payload.totalPages'},
              size: {type: Number, default: 10},
              hasPagination: {type: Boolean, default: !0},
              noPaginationSize: {type: Number, default: 999},
              saveQuery: {type: Boolean, default: !0}
            },
            data: function() {
              return {
                list: [],
                nextPage: 1,
                identifier: 0,
                prevPage: 1,
                distance: -100,
                canPrev: !1,
                directionUp: 'top',
                directionDown: 'bottom',
                storeQuery: null,
                scrollParent: null
              }
            },
            computed: {
              routerMode: function() {
                return this.$router ? this.$router.mode : 'hash'
              },
              getList: function() {
                return S()(this._getList, 200)
              }
            },
            watch: {
              url: function() {
                this.reset()
              }
            },
            mounted: function() {
              if (this.saveQuery) {
                var t = k(location.href)
                t &&
                  ((this.storeQuery = t),
                  (this.nextPage = t.page),
                  (this.prevPage = t.page))
              }
              ;(this.scrollParent = this.$refs.infiniteLoading.getScrollParent()),
                this.scrollParent.addEventListener(
                  'scroll',
                  this.updatePrevDistance
                )
            },
            destroyed: function() {
              this.scrollParent.removeEventListener(
                'scroll',
                this.updatePrevDistance
              )
            },
            methods: {
              _getList:
                ((O = v()(
                  o.a.mark(function t(e, n) {
                    var r, l, c, h, v, m, _, data, y, P, C, x
                    return o.a.wrap(
                      function(t) {
                        for (;;)
                          switch ((t.prev = t.next)) {
                            case 0:
                              if (
                                ((r = n === this.directionDown),
                                (l = this.url),
                                (c = !r && 1 == this.prevPage),
                                l && !c)
                              ) {
                                t.next = 7
                                break
                              }
                              return (
                                e.complete(),
                                console.warn('url 为空, 不发送请求'),
                                t.abrupt('return')
                              )
                            case 7:
                              return (
                                r || this.prevPage--,
                                (h = f()(
                                  {},
                                  this.storeQuery,
                                  {
                                    page: r ? this.nextPage : this.prevPage,
                                    size: this.hasPagination
                                      ? this.size
                                      : this.noPaginationSize
                                  },
                                  this.query
                                )),
                                (h = Object.keys(h)
                                  .filter(function(t) {
                                    return (
                                      -1 === ['', void 0, null].indexOf(h[t])
                                    )
                                  })
                                  .reduce(function(t, e) {
                                    return (t[e] = h[e].toString().trim()), t
                                  }, {})),
                                (v =
                                  (l.indexOf('?') > -1 ? '&' : '?') +
                                  U(h, '=', '&')),
                                this.$emit('loading'),
                                (t.prev = 12),
                                (t.next = 15),
                                this.$axios.get(l + v)
                              )
                            case 15:
                              ;(m = t.sent),
                                (_ = m.data),
                                (data = A()(_, this.dataPath, []) || []),
                                r
                                  ? ((y = this.list).push.apply(y, d()(data)),
                                    this.nextPage++)
                                  : (P = this.list).unshift.apply(P, d()(data)),
                                this.list.length && e.loaded(),
                                this.$emit('loaded', d()(this.list), _),
                                (C = A()(_, this.totalPagesPath, 0)),
                                r &&
                                  this.nextPage > C &&
                                  (e.complete(),
                                  1 != C && this.updatePrevDistance()),
                                (t.next = 29)
                              break
                            case 25:
                              ;(t.prev = 25),
                                (t.t0 = t.catch(12)),
                                e.error(),
                                this.$emit('error', t.t0)
                            case 29:
                              this.saveQuery &&
                                ((x = R(location.href, h, this.routerMode)),
                                history.replaceState(
                                  history.state,
                                  'data-list loaded',
                                  x
                                ))
                            case 30:
                            case 'end':
                              return t.stop()
                          }
                      },
                      t,
                      this,
                      [[12, 25]]
                    )
                  })
                )),
                function(t, e) {
                  return O.apply(this, arguments)
                }),
              updatePrevDistance: function() {
                ;(this.distance = 0),
                  1 != this.prevPage && (this.canPrev = !0),
                  this.scrollParent.removeEventListener(
                    'scroll',
                    this.updatePrevDistance
                  )
              },
              reset: function() {
                if (
                  ((this.list = []),
                  (this.nextPage = 1),
                  (this.prevPage = 1),
                  this.saveQuery)
                ) {
                  var t = (function(t) {
                    if ($.test(t)) {
                      var e = RegExp('[?&]' + $.source)
                      return t.replace(e, '')
                    }
                    return t
                  })(location.href)
                  history.replaceState(history.state, '', t)
                }
                this.identifier += 1
              }
            }
          }
        var D = function(template, style, script, t, e, n, r, o, l, d) {
            'boolean' != typeof r && ((l = o), (o = r), (r = !1))
            var c,
              f = 'function' == typeof script ? script.options : script
            if (
              (template &&
                template.render &&
                ((f.render = template.render),
                (f.staticRenderFns = template.staticRenderFns),
                (f._compiled = !0),
                e && (f.functional = !0)),
              t && (f._scopeId = t),
              n
                ? ((c = function(t) {
                    ;(t =
                      t ||
                      (this.$vnode && this.$vnode.ssrContext) ||
                      (this.parent &&
                        this.parent.$vnode &&
                        this.parent.$vnode.ssrContext)) ||
                      'undefined' == typeof __VUE_SSR_CONTEXT__ ||
                      (t = __VUE_SSR_CONTEXT__),
                      style && style.call(this, l(t)),
                      t &&
                        t._registeredComponents &&
                        t._registeredComponents.add(n)
                  }),
                  (f._ssrRegister = c))
                : style &&
                  (c = r
                    ? function() {
                        style.call(this, d(this.$root.$options.shadowRoot))
                      }
                    : function(t) {
                        style.call(this, o(t))
                      }),
              c)
            )
              if (f.functional) {
                var h = f.render
                f.render = function(t, e) {
                  return c.call(e), h(t, e)
                }
              } else {
                var v = f.beforeCreate
                f.beforeCreate = v ? [].concat(v, c) : [c]
              }
            return script
          },
          I =
            'undefined' != typeof navigator &&
            /msie [6-9]\\b/.test(navigator.userAgent.toLowerCase())
        var B = document.head || document.getElementsByTagName('head')[0],
          N = {}
        var T = function(t) {
            return function(t, style) {
              return (function(t, e) {
                var n = I ? e.media || 'default' : t,
                  style = N[n] || (N[n] = {ids: new Set(), styles: []})
                if (!style.ids.has(t)) {
                  style.ids.add(t)
                  var code = e.source
                  if (
                    (e.map &&
                      ((code += '\n/*# sourceURL=' + e.map.sources[0] + ' */'),
                      (code +=
                        '\n/*# sourceMappingURL=data:application/json;base64,' +
                        btoa(
                          unescape(encodeURIComponent(JSON.stringify(e.map)))
                        ) +
                        ' */')),
                    style.element ||
                      ((style.element = document.createElement('style')),
                      (style.element.type = 'text/css'),
                      e.media && style.element.setAttribute('media', e.media),
                      B.appendChild(style.element)),
                    'styleSheet' in style.element)
                  )
                    style.styles.push(code),
                      (style.element.styleSheet.cssText = style.styles
                        .filter(Boolean)
                        .join('\n'))
                  else {
                    var r = style.ids.size - 1,
                      o = document.createTextNode(code),
                      l = style.element.childNodes
                    l[r] && style.element.removeChild(l[r]),
                      l.length
                        ? style.element.insertBefore(o, l[r])
                        : style.element.appendChild(o)
                  }
                }
              })(t, style)
            }
          },
          j = script,
          z = function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {staticClass: 'data-list'},
              [
                t.canPrev
                  ? n(
                      'infinite-loading',
                      t._b(
                        {
                          ref: 'infiniteLoading',
                          attrs: {
                            distance: t.distance,
                            identifier: t.identifier,
                            direction: 'top'
                          },
                          on: {
                            infinite: function(e) {
                              return t.getList(e, t.directionUp)
                            }
                          }
                        },
                        'infinite-loading',
                        t.$attrs,
                        !1
                      ),
                      [
                        n(
                          'div',
                          {
                            staticClass: 'loaded-tip',
                            attrs: {slot: 'no-more'},
                            slot: 'no-more'
                          },
                          [t._t('no-more', [t._v('已经到达顶部了')])],
                          2
                        ),
                        t._v(' '),
                        n(
                          'div',
                          {
                            staticClass: 'loaded-tip',
                            attrs: {slot: 'no-results'},
                            slot: 'no-results'
                          },
                          [t._t('no-results', [t._v('暂时没有数据')])],
                          2
                        ),
                        t._v(' '),
                        n(
                          'div',
                          {attrs: {slot: 'error'}, slot: 'error'},
                          [t._t('error', [t._v('网络异常，请刷新重试')])],
                          2
                        )
                      ]
                    )
                  : t._e(),
                t._v(' '),
                t._t('default', [t._v('\n    自定义列表内容\n  ')], {
                  list: t.list
                }),
                t._v(' '),
                n(
                  'infinite-loading',
                  t._b(
                    {
                      ref: 'infiniteLoading',
                      attrs: {identifier: t.identifier, direction: 'bottom'},
                      on: {
                        infinite: function(e) {
                          return t.getList(e, t.directionDown)
                        }
                      }
                    },
                    'infinite-loading',
                    t.$attrs,
                    !1
                  ),
                  [
                    t._t('no-more', [t._v('没有更多了')], {slot: 'no-more'}),
                    t._v(' '),
                    t._t('no-results', [t._v('暂时没有数据')], {
                      slot: 'no-results'
                    }),
                    t._v(' '),
                    t._t('error', [t._v('网络异常，请刷新重试')], {
                      slot: 'error'
                    })
                  ],
                  2
                )
              ],
              2
            )
          }
        z._withStripped = !0
        var Q = D(
          {render: z, staticRenderFns: []},
          function(t) {
            t &&
              t('data-v-1796e8b6_0', {
                source:
                  '@keyframes tipHidden {\nfrom {\n    opacity: 1;\n    height: 50px;\n}\nto {\n    opacity: 0;\n    height: 0;\n}\n}\n.data-list .loaded-tip {\n  height: 0;\n  opacity: 0;\n  animation: tipHidden 3s;\n}\n',
                map: {
                  version: 3,
                  sources: ['data-list.vue'],
                  names: [],
                  mappings:
                    'AAAA;AACE;IACE,UAAU;IACV,YAAY;AACd;AACA;IACE,UAAU;IACV,SAAS;AACX;AACF;AACA;EACE,SAAS;EACT,UAAU;EACV,uBAAuB;AACzB',
                  file: 'data-list.vue',
                  sourcesContent: [
                    '@keyframes tipHidden {\n  from {\n    opacity: 1;\n    height: 50px;\n  }\n  to {\n    opacity: 0;\n    height: 0;\n  }\n}\n.data-list .loaded-tip {\n  height: 0;\n  opacity: 0;\n  animation: tipHidden 3s;\n}\n'
                  ]
                },
                media: void 0
              })
          },
          j,
          void 0,
          !1,
          void 0,
          T,
          void 0
        )
        var V = {
            install: function t(e) {
              t.installed || ((t.installed = !0), e.component('DataList', Q))
            }
          },
          F = null
        'undefined' != typeof window
          ? (F = window.Vue)
          : void 0 !== t && (F = t.Vue),
          F && F.use(V),
          (e.a = Q)
      }.call(this, n(29)))
    },
    385: function(t, e, n) {
      'use strict'
      var r = n(304)
      n.n(r).a
    },
    391: function(t, e, n) {
      'use strict'
      n.r(e)
      var r = {
          components: {DataList: n(332).a},
          data: function() {
            return {
              url:
                'https://easy-mock.com/mock/5c63e5758d3685565177d822/optimus-mobile/list'
            }
          }
        },
        o = (n(385), n(19)),
        component = Object(o.a)(
          r,
          function() {
            var t = this,
              e = t.$createElement,
              n = t._self._c || e
            return n(
              'div',
              {staticClass: 'order-list'},
              [
                n('data-list', {
                  ref: 'dataList',
                  attrs: {url: t.url},
                  scopedSlots: t._u([
                    {
                      key: 'default',
                      fn: function(e) {
                        return n(
                          'ul',
                          {},
                          t._l(e.list, function(e, r) {
                            return n('li', {key: r, staticClass: 'order'}, [
                              n('img', {attrs: {src: e.productPhoto}}),
                              t._v(' '),
                              n('span', {staticClass: 'title'}, [
                                t._v(t._s(e.name))
                              ]),
                              t._v(' '),
                              n('span', [
                                t._v(
                                  t._s(t._f('price')(e.sellCount * e.sellPrice))
                                )
                              ])
                            ])
                          }),
                          0
                        )
                      }
                    }
                  ])
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
