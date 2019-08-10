;(window.webpackJsonp = window.webpackJsonp || []).push([
  [6],
  {
    390: function(e, n, t) {
      'use strict'
      t.r(n)
      t(81)
      var o = {
          layout: 'login',
          name: 'login',
          components: {},
          data: function() {
            return {
              loading: !1,
              form: {username: '', password: ''},
              rules: {
                username: [
                  {required: !0, message: '请输入账号', trigger: 'blur'}
                ],
                password: [
                  {required: !0, message: '请输入密码', trigger: 'blur'}
                ]
              }
            }
          },
          methods: {
            login: function() {
              var e = this
              this.$store
                .dispatch('login', this.form)
                .then(function() {
                  ;(e.loading = !1), e.$router.replace('/')
                })
                .catch(function(n) {
                  ;(e.loading = !1), console.log(n)
                })
            }
          }
        },
        r = t(19),
        component = Object(r.a)(
          o,
          function() {
            var e = this.$createElement
            return (this._self._c || e)('div', {staticClass: 'login'})
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
