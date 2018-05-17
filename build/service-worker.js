"use strict";
var precacheConfig = [["/index.html", "73a7664432af6c429a1e37416f139e4d"], ["/static/css/main.c17080f1.css", "302476b8b379a677f648aa1e48918ebd"], ["/static/js/main.772a759a.js", "9ebca236f0741e002bc76de3cb761e67"], ["/static/media/01.58c4a9b0.jpg", "58c4a9b0087e5fce68d8f280d87b7e0b"], ["/static/media/02.1d9fc98e.jpg", "1d9fc98e490e4387d7cd9ebd6d87e169"], ["/static/media/03.e4932743.jpg", "e4932743017d13a39c88dad980d21645"], ["/static/media/04.45afa78e.jpg", "45afa78e0cc30011d98f2d99bb648c73"], ["/static/media/05.0109abd9.jpg", "0109abd962d69962906ed997639fd57d"], ["/static/media/06.a28f7af1.jpg", "a28f7af1ab69650e1d9181f38b4c5d2e"], ["/static/media/app-store.50479964.png", "504799641cde9cedccc16856cc8ac117"], ["/static/media/background.de415d02.jpg", "de415d029c853d52195f6c0dc29e148c"], ["/static/media/choise1.76f40c37.jpg", "76f40c37fe3f8f65e51de3999f03c85d"], ["/static/media/choise2.1d8e19b8.jpg", "1d8e19b88b9533b211673df6116303c1"], ["/static/media/choise3.fba86ade.jpg", "fba86ade476e8f83ebdc4571ea0b1934"], ["/static/media/choise4.02fe9212.jpg", "02fe9212d08252af2a85357d40d73d65"], ["/static/media/choise5.94c5c3b1.jpg", "94c5c3b14c523557b5f8b1099dd9777c"], ["/static/media/couple.0f99e738.png", "0f99e738e6d7119a5be64eb0142734da"], ["/static/media/footer-logo.f1b1b0c6.png", "f1b1b0c653b86a75a46c1cb4fa5e6669"], ["/static/media/google-play.523ae596.png", "523ae596d1f2cd22958a6264825cc660"], ["/static/media/login_button_a.64f52143.png", "64f521437520360a15e8eea5b3fd24a0"], ["/static/media/logo.c3dd20df.png", "c3dd20df361f02f29b7e3de9b0a3a638"], ["/static/media/register-mobile.f8ee5133.png", "f8ee513377a82ac666f43f64bb6aa18d"], ["/static/media/richies-screen.42cae91b.png", "42cae91bab4ac194f06722c4786aea22"], ["/static/media/why1.5d3a2dfe.jpg", "5d3a2dfef2cbb4d965163c605228bb30"], ["/static/media/why2.bca5d80f.jpg", "bca5d80f3bca9e592c375dd2b0206cd1"], ["/static/media/why3.2bb54ca3.png", "2bb54ca35479554cd58c79b90da5b964"]],
    cacheName = "sw-precache-v3-sw-precache-webpack-plugin-" + (self.registration ? self.registration.scope : ""),
    ignoreUrlParametersMatching = [/^utm_/], addDirectoryIndex = function (e, a) {
        var t = new URL(e);
        return "/" === t.pathname.slice(-1) && (t.pathname += a), t.toString()
    }, cleanResponse = function (a) {
        return a.redirected ? ("body" in a ? Promise.resolve(a.body) : a.blob()).then(function (e) {
            return new Response(e, {headers: a.headers, status: a.status, statusText: a.statusText})
        }) : Promise.resolve(a)
    }, createCacheKey = function (e, a, t, c) {
        var n = new URL(e);
        return c && n.pathname.match(c) || (n.search += (n.search ? "&" : "") + encodeURIComponent(a) + "=" + encodeURIComponent(t)), n.toString()
    }, isPathWhitelisted = function (e, a) {
        if (0 === e.length)return !0;
        var t = new URL(a).pathname;
        return e.some(function (e) {
            return t.match(e)
        })
    }, stripIgnoredUrlParameters = function (e, t) {
        var a = new URL(e);
        return a.hash = "", a.search = a.search.slice(1).split("&").map(function (e) {
            return e.split("=")
        }).filter(function (a) {
            return t.every(function (e) {
                return !e.test(a[0])
            })
        }).map(function (e) {
            return e.join("=")
        }).join("&"), a.toString()
    }, hashParamName = "_sw-precache", urlsToCacheKeys = new Map(precacheConfig.map(function (e) {
        var a = e[0], t = e[1], c = new URL(a, self.location), n = createCacheKey(c, hashParamName, t, /\.\w{8}\./);
        return [c.toString(), n]
    }));
function setOfCachedUrls(e) {
    return e.keys().then(function (e) {
        return e.map(function (e) {
            return e.url
        })
    }).then(function (e) {
        return new Set(e)
    })
}
self.addEventListener("install", function (e) {
    e.waitUntil(caches.open(cacheName).then(function (c) {
        return setOfCachedUrls(c).then(function (t) {
            return Promise.all(Array.from(urlsToCacheKeys.values()).map(function (a) {
                if (!t.has(a)) {
                    var e = new Request(a, {credentials: "same-origin"});
                    return fetch(e).then(function (e) {
                        if (!e.ok)throw new Error("Request for " + a + " returned a response with status " + e.status);
                        return cleanResponse(e).then(function (e) {
                            return c.put(a, e)
                        })
                    })
                }
            }))
        })
    }).then(function () {
        return self.skipWaiting()
    }))
}), self.addEventListener("activate", function (e) {
    var t = new Set(urlsToCacheKeys.values());
    e.waitUntil(caches.open(cacheName).then(function (a) {
        return a.keys().then(function (e) {
            return Promise.all(e.map(function (e) {
                if (!t.has(e.url))return a.delete(e)
            }))
        })
    }).then(function () {
        return self.clients.claim()
    }))
}), self.addEventListener("fetch", function (a) {
    if ("GET" === a.request.method) {
        var e, t = stripIgnoredUrlParameters(a.request.url, ignoreUrlParametersMatching), c = "index.html";
        (e = urlsToCacheKeys.has(t)) || (t = addDirectoryIndex(t, c), e = urlsToCacheKeys.has(t));
        var n = "/index.html";
        !e && "navigate" === a.request.mode && isPathWhitelisted(["^(?!\\/__).*"], a.request.url) && (t = new URL(n, self.location).toString(), e = urlsToCacheKeys.has(t)), e && a.respondWith(caches.open(cacheName).then(function (e) {
            return e.match(urlsToCacheKeys.get(t)).then(function (e) {
                if (e)return e;
                throw Error("The cached response that was expected is missing.")
            })
        }).catch(function (e) {
            return console.warn('Couldn\'t serve response for "%s" from cache: %O', a.request.url, e), fetch(a.request)
        }))
    }
});