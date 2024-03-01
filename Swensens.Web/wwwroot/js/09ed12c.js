(window.webpackJsonp = window.webpackJsonp || []).push([
    [61, 14, 15, 28], {
        1212: function(t, e, a) {
            var r = a(1233);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            (0, a(32).default)("7c4df18a", r, !0, {
                sourceMap: !1
            })
        },
        1218: function(t, e, a) {
            var r = a(1250);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            (0, a(32).default)("76cb1594", r, !0, {
                sourceMap: !1
            })
        },
        1232: function(t, e, a) {
            "use strict";
            a(1212)
        },
        1233: function(t, e, a) {
            var r = a(31)(!1);
            r.push([t.i, '.card-reward[data-v-6f2804e6]  .image{position:relative;background-position:50%;background-size:cover;border-radius:10px 10px 0 0;box-shadow:0 1px 2px rgba(0,0,0,.05)}.card-reward[data-v-6f2804e6]  .image:after{content:"";display:block;width:100%;padding-bottom:66.667%}.card-reward[data-v-6f2804e6]  .image img{border-radius:inherit}.card-reward[data-v-6f2804e6]  .image .ant-tag{position:absolute;top:16px;left:16px;z-index:2}.card-reward[data-v-6f2804e6]  .amount{color:#e21c23;font-size:20px;font-weight:500;display:flex;align-items:center;margin-top:16px}.card-reward[data-v-6f2804e6]  .amount img{display:block;width:24px;height:auto;flex-shrink:0;margin-right:4px}@media (max-width:576px){.card-reward[data-v-6f2804e6]  .image .ant-tag{top:12px;left:12px}.card-reward[data-v-6f2804e6]  .amount{font-size:14px;margin-top:8px}.card-reward[data-v-6f2804e6]  .amount img{width:16px}}', ""]), t.exports = r
        },
        1238: function(t, e, a) {
            var r = a(1267);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            (0, a(32).default)("ae9ee15e", r, !0, {
                sourceMap: !1
            })
        },
        1244: function(t, e, a) {
            "use strict";
            a.r(e);
            var r = {
                    data: function() {
                        return {}
                    },
                    props: {
                        item: {
                            type: Object,
                            default: {}
                        }
                    },
                    components: {},
                    computed: {
                        getImage: function() {
                            var t = this.item.image;
                            return void 0 === t ? "" : t
                        },
                        getName: function() {
                            var t = this.item.title;
                            return void 0 === t ? "" : t
                        }
                    },
                    methods: {}
                },
                i = (a(1232), a(16)),
                o = Object(i.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "card-item card-reward"
                    }, [a("a", {
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, [a("div", {
                        staticClass: "image",
                        style: t.getImage && {
                            backgroundImage: "url(" + t.getImage + ")"
                        }
                    }), t._v(" "), a("div", {
                        staticClass: "detail"
                    }, [a("h3", {
                        staticClass: "heading"
                    }, [t._v(t._s(t.getName))])])])])
                }), [], !1, null, "6f2804e6", null);
            e.default = o.exports
        },
        1249: function(t, e, a) {
            "use strict";
            a(1218)
        },
        1250: function(t, e, a) {
            var r = a(31)(!1);
            r.push([t.i, '.card-reward[data-v-e0f77310]  .image{position:relative;background-position:50%;background-size:cover;border-radius:10px 10px 0 0;box-shadow:0 1px 2px rgba(0,0,0,.05)}.card-reward[data-v-e0f77310]  .image:after{content:"";display:block;width:100%;padding-bottom:66.667%}.card-reward[data-v-e0f77310]  .image img{border-radius:inherit}.card-reward[data-v-e0f77310]  .image .ant-tag{position:absolute;top:16px;left:16px;z-index:2}.card-reward[data-v-e0f77310]  .amount{color:#e21c23;font-size:20px;font-weight:500;display:flex;align-items:center;margin-top:16px}.card-reward[data-v-e0f77310]  .amount .price{color:#23d374}.card-reward[data-v-e0f77310]  .amount .amount-wrap{display:flex;align-items:center}.card-reward[data-v-e0f77310]  .amount img{display:block;width:24px;height:auto;flex-shrink:0;margin-right:4px}.card-reward[data-v-e0f77310]  .use-type{pointer-events:none}@media (max-width:576px){.card-reward[data-v-e0f77310]  .image .ant-tag{top:12px;left:12px}.card-reward[data-v-e0f77310]  .amount{font-size:14px;margin-top:8px}.card-reward[data-v-e0f77310]  .amount img{width:16px}}', ""]), t.exports = r
        },
        1256: function(t, e, a) {
            "use strict";
            a.r(e);
            a(49);
            var r = {
                    data: function() {
                        return {}
                    },
                    props: {
                        item: {
                            type: Object,
                            default: {}
                        }
                    },
                    components: {},
                    computed: {
                        getID: function() {
                            var t = this.item.shopProductID;
                            return void 0 === t ? "" : t
                        },
                        getImage: function() {
                            var t = this.item.image;
                            return void 0 === t ? "" : t
                        },
                        getName: function() {
                            var t = this.item.shopProductTitle;
                            return void 0 === t ? "" : t
                        },
                        getExpireDate: function() {
                            var t = this.item.dateActiveEnd,
                                e = void 0 === t ? "" : t,
                                a = this.$moment(e);
                            return "th" === this.$i18n.locale ? a.add(543, "year").format("DD MMM YYYY") : a.format("DD MMM YYYY")
                        },
                        getPrice: function() {
                            var t = this.item.shopProductUnitPrice,
                                e = (t = void 0 === t ? {} : t).creditCode,
                                a = void 0 === e ? "" : e,
                                r = t.price,
                                i = void 0 === r ? 0 : r;
                            return '<div class="amount-wrap '.concat("EX_MONEY" === a ? "price" : "point", '"><img src="/images/icon-').concat("EX_MONEY" === a ? "cash-baht" : "reward", '.svg" alt="" class="icon"><span>').concat(i.toLocaleString(), "</span></div>")
                        },
                        getType: function() {
                            var t = this.item.shopProductType;
                            return void 0 === t ? "Coupon" : t
                        },
                        getUseTypeColor: function() {
                            var t = this.item.shopProductUseType,
                                e = void 0 === t ? [] : t;
                            if (!e.length) return "";
                            var a = e[0].type;
                            return "OFFLINE" === (void 0 === a ? "" : a) ? "#FD4B47" : "#966152"
                        },
                        getUseTypeLabel: function() {
                            var t = this.item.shopProductUseType,
                                e = void 0 === t ? [] : t;
                            if (!e.length || e.length > 1) return "";
                            var a = e[0].label;
                            return void 0 === a ? "" : a
                        }
                    },
                    methods: {}
                },
                i = (a(1249), a(16)),
                o = Object(i.a)(r, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "card-item card-reward"
                    }, [a("NuxtLink", {
                        attrs: {
                            to: t.localePath({
                                name: "privilege-reward-id-from",
                                params: {
                                    id: t.getID,
                                    from: "reward"
                                }
                            })
                        }
                    }, [a("div", {
                        staticClass: "image",
                        style: t.getImage && {
                            backgroundImage: "url(" + t.getImage + ")"
                        }
                    }, ["Coupon" === t.getType && t.getUseTypeLabel ? [a("a-tag", {
                        staticClass: "use-type",
                        attrs: {
                            color: t.getUseTypeColor
                        }
                    }, [t._v("\n          " + t._s(t.getUseTypeLabel) + "\n        ")])] : t._e()], 2), t._v(" "), a("div", {
                        staticClass: "detail"
                    }, [a("h3", {
                        staticClass: "heading"
                    }, [t._v(t._s(t.getName))]), t._v(" "), a("div", {
                        staticClass: "meta"
                    }, [a("p", {
                        staticClass: "date"
                    }, [t._v(t._s(t.$t("valid_until")) + " " + t._s(t.getExpireDate))])]), t._v(" "), a("div", {
                        staticClass: "amount",
                        domProps: {
                            innerHTML: t._s(t.getPrice)
                        }
                    })])])], 1)
                }), [], !1, null, "e0f77310", null);
            e.default = o.exports
        },
        1266: function(t, e, a) {
            "use strict";
            a(1238)
        },
        1267: function(t, e, a) {
            var r = a(31)(!1);
            r.push([t.i, ".card-row .card-col[data-v-7a566ef0]{width:25%;margin-bottom:24px}.card-row .card-item[data-v-7a566ef0]{box-shadow:0 2px 15px rgba(0,0,0,.05)}@media (max-width:820px){.card-row[data-v-7a566ef0]{margin-left:-12px;margin-right:-12px}.card-row .card-col[data-v-7a566ef0]{width:50%;padding-left:12px;padding-right:12px}}@media (max-width:576px){.card-row[data-v-7a566ef0]{margin-left:-8px;margin-right:-8px}.card-row .card-col[data-v-7a566ef0]{padding-left:8px;padding-right:8px;margin-bottom:16px}}", ""]), t.exports = r
        },
        1294: function(t, e, a) {
            "use strict";
            a.r(e);
            var r = a(1328),
                i = {
                    data: function() {
                        return {}
                    },
                    props: {
                        items: {
                            type: Array,
                            default: function() {
                                return []
                            }
                        }
                    },
                    components: {
                        CardProduct: r.default
                    },
                    methods: {}
                },
                o = (a(1266), a(16)),
                n = Object(o.a)(i, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "card-row"
                    }, t._l(t.items, (function(e, r) {
                        return e.isAvailableAtStore ? a("div", {
                            key: r,
                            staticClass: "card-col"
                        }, [a("CardProduct", {
                            attrs: {
                                item: e
                            }
                        })], 1) : t._e()
                    })), 0)
                }), [], !1, null, "7a566ef0", null);
            e.default = n.exports
        },
        1343: function(t, e, a) {
            var r = a(1488);
            "string" == typeof r && (r = [
                [t.i, r, ""]
            ]), r.locals && (t.exports = r.locals);
            (0, a(32).default)("a5877e6a", r, !0, {
                sourceMap: !1
            })
        },
        1487: function(t, e, a) {
            "use strict";
            a(1343)
        },
        1488: function(t, e, a) {
            var r = a(31)(!1);
            r.push([t.i, ".page-banner[data-v-493672e2]{position:relative;margin-bottom:40px}@media (max-width:820px){.page-banner[data-v-493672e2]{margin-top:30px}}.banner-wrap .banner-image img[data-v-493672e2]{display:block;width:100%;max-width:100%;height:auto}.page-body[data-v-493672e2]{padding:64px 0 80px}@media (max-width:820px){.page-body[data-v-493672e2]{padding-top:32px;padding-bottom:40px}}.banner-carousel[data-v-493672e2] {padding-bottom:0;overflow:hidden}.banner-carousel[data-v-493672e2]  .banner-item{display:block!important}.banner-carousel[data-v-493672e2]  .banner-item img{width:100%}.banner-carousel[data-v-493672e2]  .slick-slider{margin-left:-12px;margin-right:-12px}.banner-carousel[data-v-493672e2]  .slick-slide>div{display:block}.banner-carousel[data-v-493672e2]  .slick-arrow{width:40px;height:40px;border-radius:50%;background-position:50%;background-size:contain;background-repeat:no-repeat;z-index:5}.banner-carousel[data-v-493672e2]  .slick-arrow:before{display:none}.banner-carousel[data-v-493672e2]  .slick-prev{left:22px;background-image:url(/images/slide-prev.svg)}.banner-carousel[data-v-493672e2]  .slick-next{right:22px;background-image:url(/images/slide-next.svg)}.banner-carousel[data-v-493672e2]  .slick-dots{bottom:24px;display:flex!important;justify-content:center}.banner-carousel[data-v-493672e2]  .slick-dots li{margin:0 3px;width:auto;height:auto;display:block}.banner-carousel[data-v-493672e2]  .slick-dots li button{margin:0;padding:0;width:18px;height:6px;border-radius:10px;background-color:hsla(0,0%,100%,.12)}.banner-carousel[data-v-493672e2]  .slick-dots li button:before{display:none}.banner-carousel[data-v-493672e2]  .slick-dots li button:hover{background-color:hsla(0,0%,100%,.2)}.banner-carousel[data-v-493672e2]  .slick-dots li.slick-active button{background-color:#fff}.page-bottom[data-v-493672e2]{background-position:50%;background-repeat:no-repeat;background-size:cover;padding-top:70px}@media (max-width:819px){.page-bottom[data-v-493672e2]{padding-top:40px}.page-bottom .column-image[data-v-493672e2]{order:1}.page-bottom .column-content[data-v-493672e2]{order:0;width:100%}.page-bottom .app-screen[data-v-493672e2]{max-width:90%}.page-bottom .app-download[data-v-493672e2]{text-align:center;margin-bottom:40px}.page-bottom .app-download .download-list[data-v-493672e2]{max-width:450px;margin-left:auto;margin-right:auto}.page-bottom .app-download .heading[data-v-493672e2]{font-size:32px}}.app-screen img[data-v-493672e2]{display:block;width:100%;height:auto}.app-download .heading[data-v-493672e2]{font-size:40px;margin:0 0 24px}.download-list .download-item img[data-v-493672e2]{display:block;width:100%;height:auto}.section-product-grid+.section-product-grid[data-v-493672e2]{margin-top:32px}.section-product-grid .action[data-v-493672e2]{text-align:center;margin-top:16px}.section-product-grid .action .see-more[data-v-493672e2]{color:#3b3b3b;font-weight:500;border-color:#3b3b3b;min-width:110px}.section-product-grid .action .see-more[data-v-493672e2]:hover{color:#000;border-color:#000}.menu-tabs .ant-menu[data-v-493672e2]{justify-content:flex-start;margin-left:-16px;margin-right:-16px}.menu-tabs .ant-menu .ant-menu-item[data-v-493672e2]{width:auto;margin:0;overflow:visible}.menu-tabs .menu-mobile[data-v-493672e2]{display:none}@media (max-width:820px){.menu-tabs .menu-desktop[data-v-493672e2]{display:none}.menu-tabs .menu-mobile[data-v-493672e2]{display:flex}}@media (min-width:820px){.menu-tabs .menu-desktop[data-v-493672e2]{display:flex;flex-wrap:wrap}.menu-tabs .menu-desktop .ant-menu-item[data-v-493672e2]{width:auto;margin:0;overflow:visible}}", ""]), t.exports = r
        },
        1648: function(t, e, a) {
            "use strict";
            a.r(e);
            a(78), a(158), a(36), a(57), a(95), a(25);
            var r = a(7),
                i = a(333),
                o = a(18),
                n = a(34),
                s = a(1294),
                d = a(1256),
                c = a(1244);

            function l(t, e) {
                var a = Object.keys(t);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(t);
                    e && (r = r.filter((function(e) {
                        return Object.getOwnPropertyDescriptor(t, e).enumerable
                    }))), a.push.apply(a, r)
                }
                return a
            }

            function u(t) {
                for (var e = 1; e < arguments.length; e++) {
                    var a = null != arguments[e] ? arguments[e] : {};
                    e % 2 ? l(Object(a), !0).forEach((function(e) {
                        Object(o.a)(t, e, a[e])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(a)) : l(Object(a)).forEach((function(e) {
                        Object.defineProperty(t, e, Object.getOwnPropertyDescriptor(a, e))
                    }))
                }
                return t
            }
            var p = {
                    layout: "default",
                    data: function() {
                        return {
                            currentLang: (this.$i18n.locale || "th").toLowerCase(),
                            errorModalData: {
                                title: "",
                                message: "",
                                button: ""
                            },
                            errorModalVisible: !1,
                            errorData: {
                                403: {
                                    th: {
                                        title: "บัญชีของท่านมีการใช้งานจากอุปกรณ์อื่น",
                                        message: "ระบบตรวจพบว่าบัญชีของท่านมีการเข้าใช้งานจากอุปกรณ์อื่น หากท่านไม่ได้เข้าสู่ระบบ กรุณาเปลี่ยนรหัสผ่าน",
                                        button: "ปิด"
                                    },
                                    en: {
                                        title: "Account accessed from another device",
                                        message: "Our system has detected that your account was recently accessed from another device. If this login was not you, please change for password.",
                                        button: "Close"
                                    }
                                },
                                500: {
                                    th: {
                                        title: "เกิดข้อขัดข้อง",
                                        message: "ระบบเกิดข้อผิดพลาดขึ้น กรุณาลองใหม่อีกครั้ง",
                                        button: "ตกลง"
                                    },
                                    en: {
                                        title: "Oops!",
                                        message: "Something went wrong. Please try again.",
                                        button: "Try Again"
                                    }
                                }
                            },
                            bannerCarouselSetting: {
                                dots: !0,
                                draggable: !1,
                                infinite: !0,
                                autoplay: !0,
                                autoplaySpeed: 5e3,
                                speed: 500,
                                slidesToShow: 1,
                                slidesToScroll: 1
                            },
                            bannerList: [],
                            categories: [],
                            menusByCat: [],
                            menusFilter: [],
                            currentCategory: ["all"],
                            catPages: {}
                        }
                    },
                    components: {
                        ListProduct: s.default,
                        CardReward: d.default,
                        CardNewsReward: c.default
                    },
                    computed: u(u({}, Object(n.c)({
                        currentAddress: "location/currentAddress",
                        hasCard: "member/hasCard",
                        store: "location/store"
                    })), {}, {
                        menusList: function() {
                            var t = this.currentCategory[0];
                            if ("all" === t) return this.menusByCat.forEach((function(t) {
                                t.groupMenu.forEach((function(t) {
                                    t.menus.forEach((function(e) {
                                        e.categoryName = t.categoryNameEn
                                    }))
                                }))
                            })), this.menusByCat;
                            var e = this.menusByCat.filter((function(e) {
                                return e.groupMenu.filter((function(e) {
                                    return ~~e.categoryId == ~~t
                                })).length > 0
                            }));
                            return e.forEach((function(t, e) {
                                t.groupMenu[e].menus.forEach((function(a) {
                                    a.categoryName = t.groupMenu[e].categoryNameEn
                                }))
                            })), this.doGoogleEventViewItemList(e[0].groupMenu), e
                        },
                        getStoreUid: function() {
                            var t = (this.store || {}).storeUid;
                            return void 0 === t ? "" : t
                        }
                    }),
                    methods: u(u({}, Object(n.b)({
                        getCurrentLocation: "location/getCurrent",
                        findStoreByCurrentLocation: "location/findStoreByCurrentLocation",
                        fetchMember: "member/fetch",
                        fetchCards: "member/fetchCards",
                        fetchCart: "cart/fetch",
                        logout: "account/logout"
                    })), {}, {
                        doGoogleEventViewItemList: function(t) {
                            var e = [];
                            t[0].menus.forEach((function(t) {
                                var a = {
                                    item_id: t.itemId,
                                    item_name: t.nameEn
                                };
                                e.push(a)
                            })), this.$gtag.event("view_item_list", {
                                item_list_id: t[0].categoryId,
                                item_list_name: t[0].categoryNameEn,
                                items: e,
                                send_to: this.$config.GOOGLE_ANALYTICS_ID
                            })
                        },
                        getPage: function(t) {
                            return void 0 !== this.catPages[t] && this.catPages[t] || 1
                        },
                        setPage: function(t) {
                            void 0 !== this.catPages[t] ? this.catPages[t] = this.catPages[t] + 1 : this.catPages[t] = 2, this.currentCategory = Object(i.a)(this.currentCategory)
                        },
                        displayErrorModal: function(t, e, a) {
                            if (e && a) {
                                var r = {
                                    th: {
                                        title: e,
                                        message: a,
                                        button: "ตกลง"
                                    },
                                    en: {
                                        title: e,
                                        message: a,
                                        button: "Close"
                                    }
                                };
                                this.errorModalData = u({}, r[this.$i18n.locale]), this.errorModalVisible = !0
                            } else this.errorData[t] && this.errorData[t][this.$i18n.locale] ? (this.errorModalData = u({}, this.errorData[t][this.$i18n.locale]), this.errorModalVisible = !0) : this.errorModalVisible = !1
                        },
                        logoutUser: function() {
                            this.errorModalVisible = !1, this.logout()
                        },
                        generateDeviceId: function() {
                            for (var t = [], e = "0123456789abcdef", a = 0; a < 36; a++) t[a] = e.substr(Math.floor(16 * Math.random()), 1);
                            return t[14] = "4", t[19] = e.substr(3 & t[19] | 8, 1), t[8] = t[13] = t[18] = t[23] = "-", t.join("")
                        }
                    }),
                    watch: {},
                    beforeMount: function() {
                        this.$gtag.event("page_view", {
                            page_title: "delivery",
                            page_location: this.$config.CONTENT_URL + "/delivery",
                            page_path: "/delivery",
                            send_to: this.$config.GOOGLE_ANALYTICS_ID
                        }), this.fetchMember(), this.fetchCards(), this.fetchCart()
                    },
                    mounted: function() {},
                    activated: function() {
                        this.$fetchState.timestamp <= Date.now() - 3e4 && this.$fetch()
                    },
                    fetchOnServer: !1,
                    fetch: function() {
                        var t = this;
                        return Object(r.a)(regeneratorRuntime.mark((function e() {
                            var a, r, i, o, n, s, d, c, l, u, p, g, m, v, f, h, b, x, w, y;
                            return regeneratorRuntime.wrap((function(e) {
                                for (;;) switch (e.prev = e.next) {
                                    case 0:
                                        return e.prev = 0, e.next = 3, t.$axios.$get("/member");
                                    case 3:
                                        a = e.sent, r = a.data, i = void 0 === r ? {} : r, "crossed-brand-game" == t.$route.query.from && (window.open("https://cross-brand.digitopolis.studio/game/?memberCode=" + i.t2pID + "&game=9082ef4474b391902db0dceb22b643639d3409195df900e3d140acc50991f455&locale=" + t.$i18n.locale.toUpperCase() + "&brand=SWN", "_blank"), t.$router.replace({
                                            query: null
                                        })), e.next = 13;
                                        break;
                                    case 10:
                                        e.prev = 10, e.t0 = e.catch(0);
                                    case 13:
                                        return e.prev = 13, e.next = 16, t.getCurrentLocation();
                                    case 16:
                                        return e.next = 18, t.findStoreByCurrentLocation(t.currentAddress);
                                    case 18:
                                        return e.next = 20, t.$axios.$get("/menu", {
                                            params: {
                                                storeUid: t.getStoreUid
                                            }
                                        });
                                    case 20:
                                        o = e.sent, n = o.data, d = (s = void 0 === n ? {} : n).categories, c = void 0 === d ? [] : d, l = s.menusByCat, u = void 0 === l ? [] : l, t.categories = c, t.menusByCat = u, e.next = 33;
                                        break;
                                    case 30:
                                        e.prev = 30, e.t1 = e.catch(13);
                                    case 33:
                                        return e.prev = 33, e.next = 36, t.$axios.$get("/devices/get-active-device");
                                    case 36:
                                        if (p = e.sent, g = p.data, m = (void 0 === g ? {} : g).activeDeviceId, v = void 0 === m ? "" : m, f = localStorage.getItem("deviceId"), v != f && t.displayErrorModal(403), "" != v) {
                                            e.next = 53;
                                            break
                                        }
                                        return t.generateDeviceId(), (h = localStorage.getItem("deviceId")) || (h = t.generateDeviceId(), localStorage.setItem("deviceId", h)), b = {
                                            fcm_token: h,
                                            device_id: h
                                        }, e.next = 51, t.$axios.$post("".concat(t.$config.SW_BASE_URL, "/devices/register"), b);
                                    case 51:
                                        e.sent;
                                    case 53:
                                        e.next = 63;
                                        break;
                                    case 55:
                                        e.prev = 55, e.t2 = e.catch(33), x = e.t2.response, w = (x = void 0 === x ? {} : x).data, y = (w = void 0 === w ? {} : w).statusCode, void 0 === y ? 500 : y;
                                    case 63:
                                    case "end":
                                        return e.stop()
                                }
                            }), e, null, [
                                [0, 10],
                                [13, 30],
                                [33, 55]
                            ])
                        })))()
                    }
                },
                g = (a(1487), a(16)),
                m = Object(g.a)(p, (function() {
                    var t = this,
                        e = t.$createElement,
                        a = t._self._c || e;
                    return a("div", {
                        staticClass: "page-wrapper"
                    }, [a("div", {
                        staticClass: "page-banner"
                    }, [a("div", {
                        staticClass: "banner-carousel"
                    }, [a("VueSlickCarousel", t._b({}, "VueSlickCarousel", t.bannerCarouselSetting, !1), [a("a", {
                        staticClass: "banner-item",
                        attrs: {
                            href: "#"
                        },
                        on: {
                            click: function(t) {
                                t.preventDefault()
                            }
                        }
                    }, [a("div", {
                        staticClass: "image"
                    }, [a("img", {
                        attrs: {
                            src: "https://firebasestorage.googleapis.com/v0/b/swensens-production.appspot.com/o/banner%2Fsw-banner.jpg?alt=media",
                            alt: ""
                        }
                    })])])])], 1)]), t._v(" "), a("div", {
                        staticClass: "page-navigation"
                    }, [a("div", {
                        staticClass: "container"
                    }, [t.$fetchState.pending ? [a("div", {
                        staticClass: "loading-wrap"
                    }, [a("a-spin")], 1)] : a("div", {
                        staticClass: "menu-tabs"
                    }, [a("a-menu", {
                        staticClass: "menu-desktop",
                        attrs: {
                            mode: "inline"
                        },
                        model: {
                            value: t.currentCategory,
                            callback: function(e) {
                                t.currentCategory = e
                            },
                            expression: "currentCategory"
                        }
                    }, [a("a-menu-item", {
                        key: "all"
                    }, [t._v(t._s(t.$t("all")))]), t._v(" "), t._l(t.categories, (function(e) {
                        return [a("a-menu-item", {
                            key: e.categoryId
                        }, [t._v(t._s(e.name))])]
                    }))], 2), t._v(" "), a("a-menu", {
                        staticClass: "menu-mobile",
                        attrs: {
                            mode: "horizontal"
                        },
                        model: {
                            value: t.currentCategory,
                            callback: function(e) {
                                t.currentCategory = e
                            },
                            expression: "currentCategory"
                        }
                    }, [a("a-menu-item", {
                        key: "all"
                    }, [t._v(t._s(t.$t("all")))]), t._v(" "), t._l(t.categories, (function(e) {
                        return [a("a-menu-item", {
                            key: e.categoryId
                        }, [t._v(t._s(e.name))])]
                    }))], 2)], 1)], 2)]), t._v(" "), a("div", {
                        staticClass: "page-body"
                    }, [t.$fetchState.pending ? [a("div", {
                        staticClass: "loading-wrap"
                    }, [a("a-spin")], 1)] : t._l(t.menusList, (function(e, r) {
                        return [t._l(e.groupMenu, (function(e, i) {
                            return [e.menus.length ? a("div", {
                                key: "cat-" + r + "-" + i,
                                staticClass: "sw-section section-product-grid section-product-category"
                            }, [a("div", {
                                staticClass: "container"
                            }, [a("div", {
                                staticClass: "section-header"
                            }, [a("h2", {
                                staticClass: "section-heading has-action"
                            }, [t._v("\n                " + t._s(e.categoryName) + "\n              ")])]), t._v(" "), a("div", {
                                staticClass: "product-grid"
                            }, [t.$fetchState.pending ? [a("a-spin", [a("a-icon", {
                                staticStyle: {
                                    "font-size": "24px"
                                },
                                attrs: {
                                    slot: "indicator",
                                    type: "loading",
                                    spin: ""
                                },
                                slot: "indicator"
                            })], 1)] : t.$fetchState.error ? [a("p", [t._v("Error while fetching products")])] : [e.menus.length ? a("ListProduct", {
                                attrs: {
                                    items: e.menus.slice(0, 4 * t.getPage(r + "_" + i))
                                }
                            }) : t._e()]], 2), t._v(" "), e.menus.length && e.menus.length > 4 * t.getPage(r + "_" + i) ? a("div", {
                                staticClass: "action"
                            }, [a("a-button", {
                                staticClass: "see-more",
                                attrs: {
                                    ghost: ""
                                },
                                on: {
                                    click: function(e) {
                                        return t.setPage(r + "_" + i)
                                    }
                                }
                            }, [t._v("\n                " + t._s(t.$t("show_more")) + "\n              ")])], 1) : t._e()])]) : t._e()]
                        }))]
                    }))], 2), t._v(" "), a("div", {
                        staticClass: "page-bottom",
                        staticStyle: {
                            "background-image": "url(/images/bg-page-bottom.jpg)"
                        }
                    }, [a("div", {
                        staticClass: "container"
                    }, [a("a-row", {
                        staticClass: "page-bottom-row-wrap",
                        attrs: {
                            type: "flex",
                            align: "middle"
                        }
                    }, [a("a-col", {
                        staticClass: "column-image",
                        attrs: {
                            md: {
                                span: 10,
                                offset: 2
                            }
                        }
                    }, [a("div", {
                        staticClass: "app-screen"
                    }, [a("img", {
                        attrs: {
                            src: "/images/app-screen-webp.webp",
                            alt: ""
                        }
                    })])]), t._v(" "), a("a-col", {
                        staticClass: "column-content",
                        attrs: {
                            md: {
                                span: 9,
                                offset: 1
                            }
                        }
                    }, [a("div", {
                        staticClass: "app-download"
                    }, [a("h2", {
                        staticClass: "heading"
                    }, ["th" === t.$i18n.locale ? [t._v("ดาวน์โหลดที่")] : [t._v("Download on")]], 2), t._v(" "), a("div", {
                        staticClass: "download-list"
                    }, [a("a-row", {
                        attrs: {
                            gutter: 24
                        }
                    }, [a("a-col", {
                        attrs: {
                            span: 12
                        }
                    }, [a("div", {
                        staticClass: "download-item"
                    }, [a("a", {
                        attrs: {
                            href: "https://play.google.com/store/apps/details?id=com.swensens1112.swensens",
                            target: "_blank"
                        }
                    }, [a("img", {
                        attrs: {
                            src: "/images/google-play.png",
                            alt: ""
                        }
                    })])])]), t._v(" "), a("a-col", {
                        attrs: {
                            span: 12
                        }
                    }, [a("div", {
                        staticClass: "download-item"
                    }, [a("a", {
                        attrs: {
                            href: "https://apps.apple.com/th/app/swensens/id1553427962",
                            target: "_blank"
                        }
                    }, [a("img", {
                        attrs: {
                            src: "/images/app-store.png",
                            alt: ""
                        }
                    })])])])], 1)], 1)])])], 1)], 1)]), t._v(" "), a("a-modal", {
                        staticClass: "sw-modal-info",
                        attrs: {
                            title: !1,
                            closable: !1,
                            maskClosable: !1,
                            keyboard: !1,
                            centered: ""
                        },
                        model: {
                            value: t.errorModalVisible,
                            callback: function(e) {
                                t.errorModalVisible = e
                            },
                            expression: "errorModalVisible"
                        }
                    }, [a("div", {
                        staticClass: "detail"
                    }, [a("h2", {
                        staticClass: "heading"
                    }, [t._v(t._s(t.errorModalData.title))]), t._v(" "), a("div", {
                        staticClass: "content"
                    }, [a("p", [t._v(t._s(t.errorModalData.message))])])]), t._v(" "), a("template", {
                        slot: "footer"
                    }, [a("div", [a("a-button", {
                        key: "submit",
                        attrs: {
                            type: "primary"
                        },
                        on: {
                            click: function(e) {
                                return t.logoutUser()
                            }
                        }
                    }, [t._v("\n          " + t._s(t.errorModalData.button) + "\n        ")])], 1)])], 2)], 1)
                }), [], !1, null, "493672e2", null);
            e.default = m.exports
        }
    }
]);