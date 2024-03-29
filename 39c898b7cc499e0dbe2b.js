;(window.webpackJsonp = window.webpackJsonp || []).push([
  [7],
  {
    274: function(n, t, e) {
      'use strict'
      e(11), e(26), e(275)
    },
    275: function(n, t, e) {},
    278: function(n, t, e) {
      'use strict'
      var o = e(10),
        v = e(98),
        c = Object(o.a)('checkbox'),
        l = c[0],
        _ = c[1]
      t.a = l({
        mixins: [
          Object(v.a)({bem: _, role: 'checkbox', parent: 'vanCheckbox'})
        ],
        computed: {
          checked: {
            get: function() {
              return this.parent
                ? -1 !== this.parent.value.indexOf(this.name)
                : this.value
            },
            set: function(n) {
              this.parent ? this.setParentValue(n) : this.$emit('input', n)
            }
          }
        },
        watch: {
          value: function(n) {
            this.$emit('change', n)
          }
        },
        methods: {
          toggle: function() {
            var n = this,
              t = !this.checked
            clearTimeout(this.toggleTask),
              (this.toggleTask = setTimeout(function() {
                n.checked = t
              }))
          },
          setParentValue: function(n) {
            var t = this.parent,
              e = t.value.slice()
            if (n) {
              if (t.max && e.length >= t.max) return
              ;-1 === e.indexOf(this.name) &&
                (e.push(this.name), t.$emit('input', e))
            } else {
              var o = e.indexOf(this.name)
              ;-1 !== o && (e.splice(o, 1), t.$emit('input', e))
            }
          }
        }
      })
    },
    286: function(n, t, e) {},
    287: function(n, t, e) {},
    330: function(n, t, e) {
      'use strict'
      var o = e(286)
      e.n(o).a
    },
    331: function(n, t, e) {
      'use strict'
      var o = e(287)
      e.n(o).a
    },
    389: function(n, t, e) {
      'use strict'
      e.r(t)
      e(274)
      var o = e(278),
        v =
          (e(152),
          {
            name: 'agreement',
            components: {'van-nav-bar': e(122).a},
            props: {show: {type: Boolean, default: !1}},
            data: function() {
              return {}
            },
            methods: {
              onClickLeft: function() {
                this.$emit('close')
              }
            }
          }),
        c = (e(330), e(19)),
        l = Object(c.a)(
          v,
          function() {
            var n = this,
              t = n.$createElement,
              e = n._self._c || t
            return e(
              'div',
              {staticClass: 'agreement'},
              [
                e(
                  'van-popup',
                  {
                    attrs: {position: 'bottom'},
                    model: {
                      value: n.show,
                      callback: function(t) {
                        n.show = t
                      },
                      expression: 'show'
                    }
                  },
                  [
                    e('van-nav-bar', {
                      attrs: {
                        title: '用户服务协议',
                        'left-text': '返回',
                        'left-arrow': '',
                        fixed: ''
                      },
                      on: {'click-left': n.onClickLeft}
                    }),
                    n._v(' '),
                    e('div', {staticClass: 'content-wrapper pd-cell'}, [
                      e('p', [
                        n._v('\n        本网站（'),
                        e('span', {staticStyle: {color: 'rgb(24, 144, 255)'}}, [
                          e('a', {attrs: {href: 'http://www.deepexi.com/'}}, [
                            n._v('deepexi.com')
                          ])
                        ]),
                        n._v(
                          '，以下简称“DEEPEXI”）系北京滴普科技有限公司（以下简称“滴普”）运营，用户（以下简称“您”）可自愿选择滴普提供的产品或服务。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        请您认真阅读本服务条款，一旦您完成注册或选择DEEPEXI的产品或服务，表示您已充分阅读、理解并接受本服务条款全部内容。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('1、总则')])]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        1.1 滴普向您提供DEEPEXI所展示的产品或服务，并将不断更新、提升产品或服务内容。产品或服务以DEEPEXI公布的相关产品或服务介绍的页面展示以及实际提供为准。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        1.2 滴普有权随时对本服务条款及相应的规则内容进行单方面的变更或调整，并有权以消息推送、网页公告等方式予以公布，而无需另行单独通知您；若您在本服务条款内容及相应的服务规则变更后仍继续使用滴普提供的产品或服务的，表示您接受修改后的内容；若您不同意修改后的服务条款，您应立即停止使用滴普提供的相关产品或服务。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('2、账户')])]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('2.1 账户注册')])]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.1.1 凡具备完全民事权利能力和完全民事行为能力的自然人、法人或其他组织，均可注册DEEPEXI账户，成为DEEPEXI用户。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.1.2 在您按照注册页面提示的填写信息、阅读并同意本服务条款且完成全部注册程序后，您将获得相应地DEEPEXI账户，并受本服务条款约束。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.1.3 请您务必妥善保管您的DEEPEXI账户及密码。您的DEEPEXI账户是您在DEEPEXI进行一切活动的唯一身份识别依据，凡通过您的账户及密码登录，在该账户下的一切操作及从事的行为，均视为您本人或经授权的行为，由此产生的全部后果及责任将由您承担。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.1.4 您了解并同意，为保证账户和交易安全，DEEPEXI有权随时要求您完善DEEPEXI账户信息或（和）进行实名认证。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('2.2 账户信息')])]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.2.1您保证向DEEPEXI提供的注册信息真实、准确、完整，若因您提供的注册信息不真实、不准确、不完整，导致您不能享受滴普提供的产品或服务，或给您造成损失的，滴普及DEEPEXI对此不承担任何责任，您将自行承担因此产生的全部直接或间接损失及不利后果。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.2.2 您了解并同意，一旦您注册DEEPEXI账户，即视为你同意滴普或DEEPEXI向您提供的通讯地址推送滴普的相关产品或服务信息。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.2.3 滴普对您的账户信息负有保密义务，未经您同意，滴普不得将您的账户信息披露、泄露给第三方。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('2.3 账户注销')])]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.3.1 滴普及DEEPEXI保留在您违反国家相关法律法规规定或违反本服务条款的情况下，中止或终止为您提供部分或全部服务、直至注销DEEPEXI账户的权利。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        2.3.2 若您在DEEPEXI从事侵犯他人合法权益，或从事任何损害/影响或可能损害/影响滴普/DEEPEXI合法权益或良好商誉的行为，滴普有权对您的账户全部或部分功能进行限制，并通知您限期纠正，情节严重的，滴普有权注销您的账户，并停止向您提供产品或服务。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        e('strong', [n._v('3')]),
                        n._v('、'),
                        e('strong', [n._v('DEEPEXI产品或服务')])
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        3.1 滴普通过DEEPEXI及时发布产品或服务相关信息及介绍，并不断更新、升级产品或服务，具体产品或服务相关信息请以DEEPEXI发布信息为准。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        3.2 滴普考虑用户需求及公司经营决策等因素，提供部分产品或服务无偿供用户使用，具体以DEEPEXI发布的信息为准。但滴普有权对上述产品或服务以及无偿服务期限等作出解释、调整。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        3.3 如果您通过DEEPEXI获取或使用来自第三方的任何产品或服务，您还可能受限于该等第三方的相关条款和条件，滴普/DEEPEXI对此不承担任何责任和义务，本服务条款不影响您与该第三方的法律关系。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('4、您的权利和义务')])]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.1 您有权决定是否选择并享受滴普提供的产品或服务，有权在接受滴普提供的产品或服务时获得滴普提供的相关技术支持、咨询等服务。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.2 您须尊重滴普及其他第三方的知识产权和其他合法权利，否则，您将对您的侵权行为承担相应的法律责任。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.3 您理解并同意，对于滴普提供的产品或服务，您仅享有使用权，无权转让、许可或授权第三方使用，不得通过反向编译、反向工程或以其他任何形式从事损害滴普合法权益的行为。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.4 您使用滴普提供的产品或服务时将遵从国家相关法律法规、行业惯例以及社会公共道德，不得利用DEEPEXI或（和）滴普提供的产品或服务从事任何违法或不正当行为，包括但不限于：\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.4.1 反对宪法所确定的基本原则的，违反法律、法规、政策的任何内容（信息）或行为；\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.4.2 危害国家安全，泄露国家秘密，颠覆国家政权，破坏国家统一的；\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v('4.4.3 煽动民族仇恨、民族歧视、破坏民族团结的；')
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.4.4 宣传封建迷信和/或淫秽、色情、赌博、暴力、恐怖主义或教唆犯罪的信息；\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        4.4.5侵害他人合法权益的信息和/或其他有损于社会秩序、社会治安、公共道德的信息或内容。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        e('strong', [n._v('5、滴普的责任范围及责任限制')])
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        5.1 滴普仅对滴普提供的产品或服务按照本服务条款或协议约定承担相应的责任，对于DEEPEXI之合作单位提供的产品或服务，由该合作单位自行承担全部法律责任。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        5.2 除本服务条款或滴普与您就某一具体产品或服务另有约定外，在任何情况下，您同意滴普承担的赔偿责任总额不超过向您收取的当次服务费用总额。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        5.3 滴普仅按现有技术提供相应的安全措施保障滴普掌握的信息安全，不丢失，不被滥用和泄露。这些安全措施包括但不限于备份数据和对用户密码加密。尽管有这些安全措施，但滴普不能保证这些信息的绝对安全。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        5.4 您理解并同意，系统可能因下列状况无法正常运作，使您无法使用滴普提供的产品或服务时，滴普不承担损害赔偿责任，该状况包括但不限于：\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v('5.4.1电信设备出现故障不能进行数据传输的；')
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        5.4.2因台风、地震、海啸、洪水、停电、战争、恐怖袭击等不可抗力之因素，造成滴普系统障碍不能执行业务的；\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        5.4.3由于黑客攻击、电信部门技术调整或故障、网站升级等原因而造成的服务中断或者延迟；\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        5.4.4滴普需要定期或不定期地对提供网络服务的平台或相关的设备进行检修或者维护的；\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '5.4.5 其他由于非滴普过错或过失导致的系统无法正常运行。'
                        )
                      ]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('6、商标及知识产权的保护')])]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        6.1 除第三方产品或服务外，DEEPEXI所有内容，包括但不限于滴普提供的软件产品、图片、资料、架构、页面设计，均由滴普依法拥有其知识产权。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        6.2 非经滴普同意，任何个人或单位不得擅自使用、修改、复制、公开传播DEEPEXI上的程序或内容。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [e('strong', [n._v('7、其他条款')])]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        7.1 本服务条款之效力、解释、变更、执行与争议解决均适用中华人民共和国法律。因本服务条款产生之争议，均提交北京市朝阳区人民法院解决。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        7.2\n        DEEPEXI公示的各项规则系本服务条款的组成或补充，如有不同理解或不一致，以本服务条款为准。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        7.3 本服务条款的标题仅为行文和方便阅读而设，不具有法律或合同效力。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        7.4 任何单位或个人认为DEEPEXI提供的产品、服务或内容可能涉嫌侵犯其合法权益，应及时向滴普提出书面权利通知，并提供身份证明、权属证明、具体链接（URL）及详细侵权情况证明。滴普在收到上述法律文件后，将会依法尽快移除相关涉嫌侵权的内容。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        7.5\n        DEEPEXI以链接形式推荐其他网站内容时，并非代表滴普/DEEPEXI对相关内容负责以及持有倾向性看法，滴普/DEEPEXI亦不保证从其他网站获取的任何内容、产品、服务或其他材料的真实性、合法性，对于任何因使用或信赖从此类网站或资源上获取的内容、产品、服务或其他材料而造成（或声称造成）的任何直接或间接损失，滴普/DEEPEXI均不承担责任。\n      '
                        )
                      ]),
                      n._v(' '),
                      e('p', [
                        n._v(
                          '\n        7.6 如有任何疑问，您可通过在线客服、社区、微信群、以及拨打客服咨询电话等方式随时与我们取得联系进行相关问题的咨询。\n      '
                        )
                      ])
                    ])
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
        ).exports,
        _ = {
          layout: 'layout-with-footer',
          components: {'van-checkbox': o.a, agreement: l},
          data: function() {
            return {
              showLogin: !1,
              phone: '',
              password: '',
              checked: !1,
              isLoading: !1,
              showAgreement: !1
            }
          },
          methods: {
            login: function() {
              ;(this.showLogin = !0), (this.phone = ''), (this.password = '')
            },
            submit: function() {
              this.showLogin = !1
            }
          }
        },
        r =
          (e(331),
          Object(c.a)(
            _,
            function() {
              var n = this,
                t = n.$createElement,
                e = n._self._c || t
              return e(
                'div',
                {staticClass: 'my'},
                [
                  e('img', {
                    staticClass: 'my-poster',
                    attrs: {
                      src:
                        'https://img.yzcdn.cn/public_files/2017/10/23/8690bb321356070e0b8c4404d087f8fd.png'
                    }
                  }),
                  n._v(' '),
                  e(
                    'van-cell-group',
                    {staticClass: 'user-group'},
                    [
                      e('van-cell', {
                        attrs: {
                          icon: 'records',
                          title: '全部订单',
                          'is-link': ''
                        },
                        on: {
                          click: function(t) {
                            return n.$router.push('/order-list')
                          }
                        }
                      })
                    ],
                    1
                  ),
                  n._v(' '),
                  e(
                    'van-cell-group',
                    [
                      e('van-cell', {
                        attrs: {
                          icon: 'exchange',
                          title: '我的积分',
                          'is-link': ''
                        }
                      }),
                      n._v(' '),
                      e('van-cell', {
                        attrs: {
                          icon: 'gold-coin',
                          title: '我的优惠券',
                          'is-link': ''
                        }
                      }),
                      n._v(' '),
                      e('van-cell', {
                        attrs: {
                          icon: 'gift',
                          title: '我收到的礼物',
                          'is-link': ''
                        }
                      }),
                      n._v(' '),
                      e('van-cell', {
                        attrs: {icon: 'user-circle-o', title: '登录'},
                        on: {click: n.login}
                      })
                    ],
                    1
                  ),
                  n._v(' '),
                  e(
                    'van-popup',
                    {
                      attrs: {position: 'bottom'},
                      model: {
                        value: n.showLogin,
                        callback: function(t) {
                          n.showLogin = t
                        },
                        expression: 'showLogin'
                      }
                    },
                    [
                      e(
                        'div',
                        {staticClass: 'login'},
                        [
                          e('div', {staticClass: 'title'}, [n._v('用户登录')]),
                          n._v(' '),
                          e('van-field', {
                            staticClass: 'login-input',
                            attrs: {placeholder: '请输入手机号'},
                            model: {
                              value: n.phone,
                              callback: function(t) {
                                n.phone = t
                              },
                              expression: 'phone'
                            }
                          }),
                          n._v(' '),
                          e('van-field', {
                            staticClass: 'login-input',
                            attrs: {
                              type: 'password',
                              placeholder: '请输入密码'
                            },
                            model: {
                              value: n.password,
                              callback: function(t) {
                                n.password = t
                              },
                              expression: 'password'
                            }
                          }),
                          n._v(' '),
                          e(
                            'p',
                            [
                              e(
                                'van-checkbox',
                                {
                                  staticStyle: {'justify-content': 'center'},
                                  model: {
                                    value: n.checked,
                                    callback: function(t) {
                                      n.checked = t
                                    },
                                    expression: 'checked'
                                  }
                                },
                                [
                                  e('span', {staticClass: 'gray'}, [
                                    n._v('登录即表示同意')
                                  ]),
                                  n._v(' '),
                                  e(
                                    'span',
                                    {
                                      staticClass: 'blue',
                                      on: {
                                        click: function(t) {
                                          t.stopPropagation(),
                                            (n.showAgreement = !0)
                                        }
                                      }
                                    },
                                    [n._v('滴普科技服务协议')]
                                  )
                                ]
                              )
                            ],
                            1
                          ),
                          n._v(' '),
                          e(
                            'van-button',
                            {
                              staticClass: 'login-btn',
                              attrs: {
                                type: 'primary',
                                disabled: !n.checked,
                                loading: n.isLoading
                              },
                              on: {click: n.submit}
                            },
                            [n._v('登 录')]
                          )
                        ],
                        1
                      )
                    ]
                  ),
                  n._v(' '),
                  e('agreement', {
                    attrs: {show: n.showAgreement},
                    on: {
                      close: function(t) {
                        n.showAgreement = !1
                      }
                    }
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
          ))
      t.default = r.exports
    }
  }
])
