//! OpenSeadragon 0.9.131
//! Built on 2013-09-23
//! Git commit: v0.9.131-0-g13249cc
//! http://openseadragon.github.io
//! License: http://openseadragon.github.io/license/
(window.OpenSeadragon =
  window.OpenSeadragon ||
  function (a) {
    return new OpenSeadragon.Viewer(a);
  }),
  (function (a) {
    var b = {
        "[object Boolean]": "boolean",
        "[object Number]": "number",
        "[object String]": "string",
        "[object Function]": "function",
        "[object Array]": "array",
        "[object Date]": "date",
        "[object RegExp]": "regexp",
        "[object Object]": "object",
      },
      c = Object.prototype.toString,
      d = Object.prototype.hasOwnProperty;
    (a.isFunction = function (b) {
      return "function" === a.type(b);
    }),
      (a.isArray =
        Array.isArray ||
        function (b) {
          return "array" === a.type(b);
        }),
      (a.isWindow = function (a) {
        return a && "object" == typeof a && "setInterval" in a;
      }),
      (a.type = function (a) {
        return null === a || void 0 === a
          ? String(a)
          : b[c.call(a)] || "object";
      }),
      (a.isPlainObject = function (b) {
        if (
          !b ||
          "object" !== OpenSeadragon.type(b) ||
          b.nodeType ||
          a.isWindow(b)
        )
          return !1;
        if (
          b.constructor &&
          !d.call(b, "constructor") &&
          !d.call(b.constructor.prototype, "isPrototypeOf")
        )
          return !1;
        var c;
        for (c in b);
        return void 0 === c || d.call(b, c);
      }),
      (a.isEmptyObject = function (a) {
        for (var b in a) return !1;
        return !0;
      });
  })(OpenSeadragon),
  (function (a) {
    function b(a, b) {
      return b && a != document.body ? document.body : a.offsetParent;
    }
    (a.extend = function () {
      var a,
        b,
        c,
        d,
        e,
        f,
        g = arguments[0] || {},
        h = arguments.length,
        i = !1,
        j = 1;
      for (
        "boolean" == typeof g && ((i = g), (g = arguments[1] || {}), (j = 2)),
          "object" == typeof g || OpenSeadragon.isFunction(g) || (g = {}),
          h === j && ((g = this), --j);
        h > j;
        j++
      )
        if (((a = arguments[j]), null !== a || void 0 !== a))
          for (b in a)
            (c = g[b]),
              (d = a[b]),
              g !== d &&
                (i &&
                d &&
                (OpenSeadragon.isPlainObject(d) ||
                  (e = OpenSeadragon.isArray(d)))
                  ? (e
                      ? ((e = !1), (f = c && OpenSeadragon.isArray(c) ? c : []))
                      : (f = c && OpenSeadragon.isPlainObject(c) ? c : {}),
                    (g[b] = OpenSeadragon.extend(i, f, d)))
                  : void 0 !== d && (g[b] = d));
      return g;
    }),
      a.extend(a, {
        DEFAULT_SETTINGS: {
          xmlPath: null,
          tileSources: null,
          tileHost: null,
          panHorizontal: !0,
          panVertical: !0,
          constrainDuringPan: !1,
          wrapHorizontal: !1,
          wrapVertical: !1,
          visibilityRatio: 0.5,
          minPixelRatio: 0.5,
          defaultZoomLevel: 0,
          minZoomLevel: null,
          maxZoomLevel: null,
          springStiffness: 7,
          clickTimeThreshold: 300,
          clickDistThreshold: 5,
          zoomPerClick: 2,
          zoomPerScroll: 1.2,
          zoomPerSecond: 1,
          animationTime: 1.2,
          blendTime: 0,
          alwaysBlend: !1,
          autoHideControls: !0,
          immediateRender: !1,
          minZoomImageRatio: 0.9,
          maxZoomPixelRatio: 1.1,
          showSequenceControl: !0,
          preserveViewport: !1,
          showNavigationControl: !0,
          controlsFadeDelay: 2e3,
          controlsFadeLength: 1500,
          mouseNavEnabled: !0,
          showNavigator: !1,
          navigatorId: null,
          navigatorHeight: null,
          navigatorWidth: null,
          navigatorPosition: null,
          navigatorSizeRatio: 0.2,
          degrees: 0,
          showReferenceStrip: !1,
          referenceStripScroll: "horizontal",
          referenceStripElement: null,
          referenceStripHeight: null,
          referenceStripWidth: null,
          referenceStripPosition: "BOTTOM_LEFT",
          referenceStripSizeRatio: 0.2,
          collectionRows: 3,
          collectionLayout: "horizontal",
          collectionMode: !1,
          collectionTileSize: 800,
          onPageChange: null,
          imageLoaderLimit: 0,
          maxImageCacheCount: 200,
          timeout: 3e4,
          prefixUrl: "/img/",
          navImages: {
            zoomIn: {
              REST: "zoomin_rest.png",
              GROUP: "zoomin_grouphover.png",
              HOVER: "zoomin_hover.png",
              DOWN: "zoomin_pressed.png",
            },
            zoomOut: {
              REST: "zoomout_rest.png",
              GROUP: "zoomout_grouphover.png",
              HOVER: "zoomout_hover.png",
              DOWN: "zoomout_pressed.png",
            },
            home: {
              REST: "home_rest.png",
              GROUP: "home_grouphover.png",
              HOVER: "home_hover.png",
              DOWN: "home_pressed.png",
            },
            fullpage: {
              REST: "fullpage_rest.png",
              GROUP: "fullpage_grouphover.png",
              HOVER: "fullpage_hover.png",
              DOWN: "fullpage_pressed.png",
            },
            previous: {
              REST: "previous_rest.png",
              GROUP: "previous_grouphover.png",
              HOVER: "previous_hover.png",
              DOWN: "previous_pressed.png",
            },
            next: {
              REST: "next_rest.png",
              GROUP: "next_grouphover.png",
              HOVER: "next_hover.png",
              DOWN: "next_pressed.png",
            },
          },
          navPrevNextWrap: !1,
          debugMode: !1,
          debugGridColor: "#437AB2",
        },
        SIGNAL: "----seadragon----",
        delegate: function (a, b) {
          return function () {
            var c = arguments;
            return void 0 === c && (c = []), b.apply(a, c);
          };
        },
        BROWSERS: {
          UNKNOWN: 0,
          IE: 1,
          FIREFOX: 2,
          SAFARI: 3,
          CHROME: 4,
          OPERA: 5,
        },
        getElement: function (a) {
          return "string" == typeof a && (a = document.getElementById(a)), a;
        },
        getElementPosition: function (c) {
          var d,
            e,
            f = new a.Point();
          for (
            c = a.getElement(c),
              d = "fixed" == a.getElementStyle(c).position,
              e = b(c, d);
            e;

          )
            (f.x += c.offsetLeft),
              (f.y += c.offsetTop),
              d && (f = f.plus(a.getPageScroll())),
              (c = e),
              (d = "fixed" == a.getElementStyle(c).position),
              (e = b(c, d));
          return f;
        },
        getElementSize: function (b) {
          return (
            (b = a.getElement(b)), new a.Point(b.clientWidth, b.clientHeight)
          );
        },
        getElementStyle: document.documentElement.currentStyle
          ? function (b) {
              return (b = a.getElement(b)), b.currentStyle;
            }
          : function (b) {
              return (b = a.getElement(b)), window.getComputedStyle(b, "");
            },
        getEvent: function (b) {
          return (
            (a.getEvent = b
              ? function (a) {
                  return a;
                }
              : function () {
                  return window.event;
                }),
            a.getEvent(b)
          );
        },
        getMousePosition: function (b) {
          if ("number" == typeof b.pageX)
            a.getMousePosition = function (b) {
              var c = new a.Point();
              return (b = a.getEvent(b)), (c.x = b.pageX), (c.y = b.pageY), c;
            };
          else {
            if ("number" != typeof b.clientX)
              throw new Error(
                "Unknown event mouse position, no known technique."
              );
            a.getMousePosition = function (b) {
              var c = new a.Point();
              return (
                (b = a.getEvent(b)),
                (c.x =
                  b.clientX +
                  document.body.scrollLeft +
                  document.documentElement.scrollLeft),
                (c.y =
                  b.clientY +
                  document.body.scrollTop +
                  document.documentElement.scrollTop),
                c
              );
            };
          }
          return a.getMousePosition(b);
        },
        getPageScroll: function () {
          var b = document.documentElement || {},
            c = document.body || {};
          return (
            (a.getPageScroll =
              "number" == typeof window.pageXOffset
                ? function () {
                    return new a.Point(window.pageXOffset, window.pageYOffset);
                  }
                : c.scrollLeft || c.scrollTop
                ? function () {
                    return new a.Point(
                      document.body.scrollLeft,
                      document.body.scrollTop
                    );
                  }
                : b.scrollLeft || b.scrollTop
                ? function () {
                    return new a.Point(
                      document.documentElement.scrollLeft,
                      document.documentElement.scrollTop
                    );
                  }
                : function () {
                    return new a.Point(0, 0);
                  }),
            a.getPageScroll()
          );
        },
        getWindowSize: function () {
          var b = document.documentElement || {},
            c = document.body || {};
          if ("number" == typeof window.innerWidth)
            a.getWindowSize = function () {
              return new a.Point(window.innerWidth, window.innerHeight);
            };
          else if (b.clientWidth || b.clientHeight)
            a.getWindowSize = function () {
              return new a.Point(
                document.documentElement.clientWidth,
                document.documentElement.clientHeight
              );
            };
          else {
            if (!c.clientWidth && !c.clientHeight)
              throw new Error("Unknown window size, no known technique.");
            a.getWindowSize = function () {
              return new a.Point(
                document.body.clientWidth,
                document.body.clientHeight
              );
            };
          }
          return a.getWindowSize();
        },
        makeCenteredNode: function (b) {
          b = a.getElement(b);
          var c = [
            a.makeNeutralElement("div"),
            a.makeNeutralElement("div"),
            a.makeNeutralElement("div"),
          ];
          return (
            a.extend(c[0].style, {
              display: "table",
              height: "100%",
              width: "100%",
            }),
            a.extend(c[1].style, {
              display: "table-row",
            }),
            a.extend(c[2].style, {
              display: "table-cell",
              verticalAlign: "middle",
              textAlign: "center",
            }),
            c[0].appendChild(c[1]),
            c[1].appendChild(c[2]),
            c[2].appendChild(b),
            c[0]
          );
        },
        makeNeutralElement: function (a) {
          var b = document.createElement(a),
            c = b.style;
          return (
            (c.background = "transparent none"),
            (c.border = "none"),
            (c.margin = "0px"),
            (c.padding = "0px"),
            (c.position = "static"),
            b
          );
        },
        now: function () {
          return (
            (a.now = Date.now
              ? Date.now
              : function () {
                  return new Date().getTime();
                }),
            a.now()
          );
        },
        makeTransparentImage: function (b) {
          return (
            (a.makeTransparentImage = function (b) {
              var c = a.makeNeutralElement("img");
              return (c.src = b), c;
            }),
            a.Browser.vendor == a.BROWSERS.IE &&
              a.Browser.version < 7 &&
              (a.makeTransparentImage = function (b) {
                var c = a.makeNeutralElement("img"),
                  d = null;
                return (
                  (d = a.makeNeutralElement("span")),
                  (d.style.display = "inline-block"),
                  (c.onload = function () {
                    (d.style.width = d.style.width || c.width + "px"),
                      (d.style.height = d.style.height || c.height + "px"),
                      (c.onload = null),
                      (c = null);
                  }),
                  (c.src = b),
                  (d.style.filter =
                    "progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" +
                    b +
                    "', sizingMethod='scale')"),
                  d
                );
              }),
            a.makeTransparentImage(b)
          );
        },
        setElementOpacity: function (b, c, d) {
          var e, f;
          (b = a.getElement(b)),
            d && !a.Browser.alpha && (c = Math.round(c)),
            a.Browser.opacity
              ? (b.style.opacity = 1 > c ? c : "")
              : 1 > c
              ? ((e = Math.round(100 * c)),
                (f = "alpha(opacity=" + e + ")"),
                (b.style.filter = f))
              : (b.style.filter = "");
        },
        addClass: function (b, c) {
          (b = a.getElement(b)),
            b.className
              ? -1 === (" " + b.className + " ").indexOf(" " + c + " ") &&
                (b.className += " " + c)
              : (b.className = c);
        },
        removeClass: function (b, c) {
          var d,
            e,
            f = [];
          for (
            b = a.getElement(b), d = b.className.split(/\s+/), e = 0;
            e < d.length;
            e++
          )
            d[e] && d[e] !== c && f.push(d[e]);
          b.className = f.join(" ");
        },
        addEvent: function (b, c, d, e) {
          if (((b = a.getElement(b)), b.addEventListener))
            a.addEvent = function (b, c, d, e) {
              (b = a.getElement(b)), b.addEventListener(c, d, e);
            };
          else {
            if (!b.attachEvent)
              throw new Error(
                "Unable to attach event handler, no known technique."
              );
            a.addEvent = function (b, c, d, e) {
              (b = a.getElement(b)),
                b.attachEvent("on" + c, d),
                e && b.setCapture && b.setCapture();
            };
          }
          return a.addEvent(b, c, d, e);
        },
        removeEvent: function (b, c, d, e) {
          if (((b = a.getElement(b)), b.removeEventListener))
            a.removeEvent = function (b, c, d, e) {
              (b = a.getElement(b)), b.removeEventListener(c, d, e);
            };
          else {
            if (!b.detachEvent)
              throw new Error(
                "Unable to detach event handler, no known technique."
              );
            a.removeEvent = function (b, c, d, e) {
              (b = a.getElement(b)),
                b.detachEvent("on" + c, d),
                e && b.releaseCapture && b.releaseCapture();
            };
          }
          return a.removeEvent(b, c, d, e);
        },
        cancelEvent: function (b) {
          (b = a.getEvent(b)),
            (a.cancelEvent = b.preventDefault
              ? function (a) {
                  a.preventDefault();
                }
              : function (b) {
                  (b = a.getEvent(b)), (b.cancel = !0), (b.returnValue = !1);
                }),
            a.cancelEvent(b);
        },
        stopEvent: function (b) {
          (b = a.getEvent(b)),
            (a.stopEvent = b.stopPropagation
              ? function (a) {
                  a.stopPropagation();
                }
              : function (b) {
                  (b = a.getEvent(b)), (b.cancelBubble = !0);
                }),
            a.stopEvent(b);
        },
        createCallback: function (a, b) {
          var c,
            d = [];
          for (c = 2; c < arguments.length; c++) d.push(arguments[c]);
          return function () {
            var c,
              e = d.concat([]);
            for (c = 0; c < arguments.length; c++) e.push(arguments[c]);
            return b.apply(a, e);
          };
        },
        getUrlParameter: function (a) {
          var b = e[a];
          return b ? b : null;
        },
        createAjaxRequest: function () {
          var b;
          if (window.XMLHttpRequest)
            (a.createAjaxRequest = function () {
              return new XMLHttpRequest();
            }),
              (b = new XMLHttpRequest());
          else if (window.ActiveXObject)
            for (var d = 0; d < c.length; d++)
              try {
                (b = new ActiveXObject(c[d])),
                  (a.createAjaxRequest = function () {
                    return new ActiveXObject(c[d]);
                  });
                break;
              } catch (e) {
                continue;
              }
          if (!b) throw new Error("Browser doesn't support XMLHttpRequest.");
          return b;
        },
        makeAjaxRequest: function (b, c, d) {
          var e = a.createAjaxRequest();
          if (!a.isFunction(c))
            throw new Error("makeAjaxRequest requires a success callback");
          e.onreadystatechange = function () {
            4 == e.readyState &&
              ((e.onreadystatechange = function () {}),
              200 == e.status
                ? c(e)
                : (a.console.log("AJAX request returned %s: %s", e.status, b),
                  a.isFunction(d) && d(e)));
          };
          try {
            e.open("GET", b, !0), e.send(null);
          } catch (f) {
            var g = f.message,
              h = a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 10;
            h &&
              "undefined" != typeof f.number &&
              -2147024891 == f.number &&
              (g +=
                "\nSee http://msdn.microsoft.com/en-us/library/ms537505(v=vs.85).aspx#xdomain"),
              a.console.log("%s while making AJAX request: %s", f.name, g),
              (e.onreadystatechange = function () {}),
              a.isFunction(d) && d(e, f);
          }
        },
        jsonp: function (b) {
          var c,
            d = b.url,
            e =
              document.head ||
              document.getElementsByTagName("head")[0] ||
              document.documentElement,
            f = b.callbackName || "openseadragon" + a.now(),
            g = window[f],
            h = "$1" + f + "$2",
            i = b.param || "callback",
            j = b.callback;
          (d = d.replace(/(\=)\?(&|$)|\?\?/i, h)),
            (d += (/\?/.test(d) ? "&" : "?") + i + "=" + f),
            (window[f] = function (b) {
              if (g) window[f] = g;
              else
                try {
                  delete window[f];
                } catch (c) {}
              j && a.isFunction(j) && j(b);
            }),
            (c = document.createElement("script")),
            (void 0 !== b.async || !1 !== b.async) && (c.async = "async"),
            b.scriptCharset && (c.charset = b.scriptCharset),
            (c.src = d),
            (c.onload = c.onreadystatechange =
              function (a, b) {
                (b || !c.readyState || /loaded|complete/.test(c.readyState)) &&
                  ((c.onload = c.onreadystatechange = null),
                  e && c.parentNode && e.removeChild(c),
                  (c = void 0));
              }),
            e.insertBefore(c, e.firstChild);
        },
        createFromDZI: function () {
          throw "OpenSeadragon.createFromDZI is deprecated, use Viewer.open.";
        },
        parseXml: function (b) {
          if (window.ActiveXObject)
            a.parseXml = function (a) {
              var b = null;
              return (
                (b = new ActiveXObject("Microsoft.XMLDOM")),
                (b.async = !1),
                b.loadXML(a),
                b
              );
            };
          else {
            if (!window.DOMParser)
              throw new Error("Browser doesn't support XML DOM.");
            a.parseXml = function (a) {
              var b,
                c = null;
              return (
                (b = new DOMParser()), (c = b.parseFromString(a, "text/xml"))
              );
            };
          }
          return a.parseXml(b);
        },
        imageFormatSupported: function (a) {
          return (a = a ? a : ""), !!d[a.toLowerCase()];
        },
      }),
      (a.Browser = {
        vendor: a.BROWSERS.UNKNOWN,
        version: 0,
        alpha: !0,
      });
    var c = ["Msxml2.XMLHTTP", "Msxml3.XMLHTTP", "Microsoft.XMLHTTP"],
      d = {
        bmp: !1,
        jpeg: !0,
        jpg: !0,
        png: !0,
        tif: !1,
        wdp: !1,
      },
      e = {};
    !(function () {
      var b = (navigator.appName, navigator.appVersion),
        c = navigator.userAgent;
      switch (navigator.appName) {
        case "Microsoft Internet Explorer":
          window.attachEvent &&
            window.ActiveXObject &&
            ((a.Browser.vendor = a.BROWSERS.IE),
            (a.Browser.version = parseFloat(
              c.substring(
                c.indexOf("MSIE") + 5,
                c.indexOf(";", c.indexOf("MSIE"))
              )
            )));
          break;
        case "Netscape":
          window.addEventListener &&
            (c.indexOf("Firefox") >= 0
              ? ((a.Browser.vendor = a.BROWSERS.FIREFOX),
                (a.Browser.version = parseFloat(
                  c.substring(c.indexOf("Firefox") + 8)
                )))
              : c.indexOf("Safari") >= 0 &&
                ((a.Browser.vendor =
                  c.indexOf("Chrome") >= 0
                    ? a.BROWSERS.CHROME
                    : a.BROWSERS.SAFARI),
                (a.Browser.version = parseFloat(
                  c.substring(
                    c.substring(0, c.indexOf("Safari")).lastIndexOf("/") + 1,
                    c.indexOf("Safari")
                  )
                ))));
          break;
        case "Opera":
          (a.Browser.vendor = a.BROWSERS.OPERA),
            (a.Browser.version = parseFloat(b));
      }
      var d,
        f,
        g,
        h = window.location.search.substring(1),
        i = h.split("&");
      for (g = 0; g < i.length; g++)
        (d = i[g]),
          (f = d.indexOf("=")),
          f > 0 &&
            (e[d.substring(0, f)] = decodeURIComponent(d.substring(f + 1)));
      (a.Browser.alpha = !(
        (a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9) ||
        (a.Browser.vendor == a.BROWSERS.CHROME && a.Browser.version < 2)
      )),
        (a.Browser.opacity = !(
          a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9
        ));
    })();
    var f = function () {};
    (a.console = window.console || {
      log: f,
      debug: f,
      info: f,
      warn: f,
      error: f,
    }),
      (function (b) {
        var c =
            b.requestAnimationFrame ||
            b.mozRequestAnimationFrame ||
            b.webkitRequestAnimationFrame ||
            b.msRequestAnimationFrame,
          d =
            b.cancelAnimationFrame ||
            b.mozCancelAnimationFrame ||
            b.webkitCancelAnimationFrame ||
            b.msCancelAnimationFrame;
        if (c && d)
          (a.requestAnimationFrame = function () {
            return c.apply(b, arguments);
          }),
            (a.cancelAnimationFrame = function () {
              return d.apply(b, arguments);
            });
        else {
          var e,
            f = [],
            g = [],
            h = 0;
          (a.requestAnimationFrame = function (b) {
            return (
              f.push([++h, b]),
              e ||
                (e = setInterval(function () {
                  if (f.length) {
                    var b = a.now(),
                      c = g;
                    for (g = f, f = c; g.length; ) g.shift()[1](b);
                  } else clearInterval(e), (e = void 0);
                }, 20)),
              h
            );
          }),
            (a.cancelAnimationFrame = function (a) {
              var b, c;
              for (b = 0, c = f.length; c > b; b += 1)
                if (f[b][0] === a) return f.splice(b, 1), void 0;
              for (b = 0, c = g.length; c > b; b += 1)
                if (g[b][0] === a) return g.splice(b, 1), void 0;
            });
        }
      })(window),
      (a._processDZIError = function (a) {
        var b = a.getElementsByTagName("Message")[0],
          c = b.firstChild.nodeValue;
        throw new Error(c);
      });
  })(OpenSeadragon),
  (function (a) {
    var b = {
        supportsFullScreen: !1,
        isFullScreen: function () {
          return !1;
        },
        requestFullScreen: function () {},
        cancelFullScreen: function () {},
        fullScreenEventName: "",
        prefix: "",
      },
      c = "webkit moz o ms khtml".split(" ");
    if ("undefined" != typeof document.cancelFullScreen)
      b.supportsFullScreen = !0;
    else
      for (var d = 0, e = c.length; e > d; d++)
        if (
          ((b.prefix = c[d]),
          "undefined" != typeof document[b.prefix + "CancelFullScreen"])
        ) {
          b.supportsFullScreen = !0;
          break;
        }
    b.supportsFullScreen
      ? ((b.fullScreenEventName = b.prefix + "fullscreenchange"),
        (b.isFullScreen = function () {
          switch (this.prefix) {
            case "":
              return document.fullScreen;
            case "webkit":
              return document.webkitIsFullScreen;
            default:
              return document[this.prefix + "FullScreen"];
          }
        }),
        (b.requestFullScreen = function (a) {
          return "" === this.prefix
            ? a.requestFullScreen()
            : a[this.prefix + "RequestFullScreen"]();
        }),
        (b.cancelFullScreen = function () {
          return "" === this.prefix
            ? document.cancelFullScreen()
            : document[this.prefix + "CancelFullScreen"]();
        }))
      : "undefined" != typeof window.ActiveXObject &&
        ((b.requestFullScreen = function () {
          var a = new ActiveXObject("WScript.Shell");
          return null !== a && a.SendKeys("{F11}"), !1;
        }),
        (b.cancelFullScreen = b.requestFullScreen)),
      a.extend(a, b);
  })(OpenSeadragon),
  (function (a) {
    (a.EventHandler = function () {
      this.events = {};
    }),
      (a.EventHandler.prototype = {
        addHandler: function (b, c, d) {
          var e = this.events[b];
          e || (this.events[b] = e = []),
            c &&
              a.isFunction(c) &&
              (e[e.length] = {
                handler: c,
                userData: d || null,
              });
        },
        removeHandler: function (b, c) {
          var d,
            e = this.events[b],
            f = [];
          if (e && a.isArray(e)) {
            for (d = 0; d < e.length; d++) e[d].handler !== c && f.push(e[d]);
            this.events[b] = f;
          }
        },
        removeAllHandlers: function (a) {
          if (a) this.events[a] = [];
          else for (var b in this.events) this.events[b] = [];
        },
        getHandler: function (a) {
          var b = this.events[a];
          return b && b.length
            ? ((b = 1 === b.length ? [b[0]] : Array.apply(null, b)),
              function (a, c) {
                var d,
                  e = b.length;
                for (d = 0; e > d; d++)
                  b[d] && ((c.userData = b[d].userData), b[d].handler(a, c));
              })
            : null;
        },
        raiseEvent: function (a, b) {
          var c = this.getHandler(a);
          c && (b || (b = {}), c(this, b));
        },
      });
  })(OpenSeadragon),
  (function (a) {
    function b(b) {
      var c,
        d,
        e = [
          "mouseover",
          "mouseout",
          "mousedown",
          "mouseup",
          "click",
          "DOMMouseScroll",
          "mousewheel",
          "touchstart",
          "touchmove",
          "touchend",
          "keypress",
          "focus",
          "blur",
        ],
        f = H[b.hash];
      if (!f.tracking) {
        for (d = 0; d < e.length; d++)
          (c = e[d]), a.addEvent(b.element, c, f[c], !1);
        (f.tracking = !0), (F[b.hash] = b);
      }
    }

    function c(b) {
      var c,
        d,
        e = [
          "mouseover",
          "mouseout",
          "mousedown",
          "mouseup",
          "click",
          "DOMMouseScroll",
          "mousewheel",
          "touchstart",
          "touchmove",
          "touchend",
          "keypress",
          "focus",
          "blur",
        ],
        g = H[b.hash];
      if (g.tracking) {
        for (d = 0; d < e.length; d++)
          (c = e[d]), a.removeEvent(b.element, c, g[c], !1);
        f(b), (g.tracking = !1), delete F[b.hash];
      }
    }

    function d(a) {
      return H[a.hash].insideElement;
    }

    function e(b) {
      var c = H[b.hash];
      c.capturing ||
        (a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9
          ? (a.removeEvent(b.element, "mouseup", c.mouseup, !1),
            a.addEvent(b.element, "mouseup", c.mouseupie, !0),
            a.addEvent(b.element, "mousemove", c.mousemoveie, !0))
          : (a.addEvent(window, "mouseup", c.mouseupwindow, !0),
            a.addEvent(window, "mousemove", c.mousemove, !0)),
        (c.capturing = !0));
    }

    function f(b) {
      var c = H[b.hash];
      c.capturing &&
        (a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9
          ? (a.removeEvent(b.element, "mousemove", c.mousemoveie, !0),
            a.removeEvent(b.element, "mouseup", c.mouseupie, !0),
            a.addEvent(b.element, "mouseup", c.mouseup, !1))
          : (a.removeEvent(window, "mousemove", c.mousemove, !0),
            a.removeEvent(window, "mouseup", c.mouseupwindow, !0)),
        (c.capturing = !1));
    }

    function g(a, b, c) {
      var d;
      for (d in F) F.hasOwnProperty(d) && a.hash != d && b(F[d], c);
    }

    function h(b, c) {
      var d;
      b.focusHandler &&
        ((d = b.focusHandler(b, c)), d === !1 && a.cancelEvent(c));
    }

    function i(b, c) {
      var d;
      b.blurHandler &&
        ((d = b.blurHandler(b, c)), d === !1 && a.cancelEvent(c));
    }

    function j(b, c) {
      var d;
      b.keyHandler &&
        ((d = b.keyHandler(b, c.keyCode ? c.keyCode : c.charCode, c.shiftKey)),
        d || a.cancelEvent(c));
    }

    function k(b, c) {
      var d,
        e = H[b.hash];
      (c = a.getEvent(c)),
        a.Browser.vendor == a.BROWSERS.IE &&
          a.Browser.version < 9 &&
          e.capturing &&
          !A(c.srcElement, b.element) &&
          g(b, k, c);
      var f = c.target ? c.target : c.srcElement,
        h = c.relatedTarget ? c.relatedTarget : c.fromElement;
      A(b.element, f) &&
        !A(b.element, h) &&
        ((e.insideElement = !0),
        b.enterHandler &&
          ((d = b.enterHandler(b, z(c, b.element), e.buttonDown, D)),
          d === !1 && a.cancelEvent(c)));
    }

    function l(b, c) {
      var d,
        e = H[b.hash];
      (c = a.getEvent(c)),
        a.Browser.vendor == a.BROWSERS.IE &&
          a.Browser.version < 9 &&
          e.capturing &&
          !A(c.srcElement, b.element) &&
          g(b, l, c);
      var f = c.target ? c.target : c.srcElement,
        h = c.relatedTarget ? c.relatedTarget : c.toElement;
      A(b.element, f) &&
        !A(b.element, h) &&
        ((e.insideElement = !1),
        b.exitHandler &&
          ((d = b.exitHandler(b, z(c, b.element), e.buttonDown, D)),
          d === !1 && a.cancelEvent(c)));
    }

    function m(b, c, d) {
      var f,
        g = H[b.hash];
      (c = a.getEvent(c)),
        2 != c.button &&
          ((g.buttonDown = !0),
          (g.lastPoint = y(c)),
          (g.lastMouseDownPoint = g.lastPoint),
          (g.lastMouseDownTime = a.now()),
          b.pressHandler &&
            ((f = b.pressHandler(b, z(c, b.element))),
            f === !1 && a.cancelEvent(c)),
          (b.pressHandler || b.dragHandler) && a.cancelEvent(c),
          d ||
            (a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9 && E
              ? a.Browser.vendor == a.BROWSERS.IE &&
                a.Browser.version < 9 &&
                G.push(b)
              : (e(b), (E = !0), (G = [b]))));
    }

    function n(b, c) {
      var d, e;
      1 == c.touches.length &&
        1 == c.targetTouches.length &&
        1 == c.changedTouches.length &&
        ((H[b.hash].lastTouch = c.touches[0]),
        k(b, c.changedTouches[0]),
        m(b, c.touches[0], !0)),
        2 == c.touches.length &&
          ((d = y(c.touches[0])),
          (e = y(c.touches[1])),
          (H[b.hash].lastPinchDelta =
            Math.abs(d.x - e.x) + Math.abs(d.y - e.y)),
          (H[b.hash].pinchMidpoint = new a.Point(
            (d.x + e.x) / 2,
            (d.y + e.y) / 2
          ))),
        c.preventDefault();
    }

    function o(b, c) {
      var d,
        e = H[b.hash],
        f = e.buttonDown,
        g = e.insideElement;
      (c = a.getEvent(c)),
        2 != c.button &&
          ((e.buttonDown = !1),
          b.releaseHandler &&
            ((d = b.releaseHandler(b, z(c, b.element), f, g)),
            d === !1 && a.cancelEvent(c)),
          f && g && u(b, c));
    }

    function p(a, b) {
      0 === b.touches.length &&
        0 === b.targetTouches.length &&
        1 == b.changedTouches.length &&
        ((H[a.hash].lastTouch = null),
        r(a, b.changedTouches[0], !0),
        l(a, b.changedTouches[0])),
        2 == b.touches.length + b.changedTouches.length &&
          ((H[a.hash].lastPinchDelta = null), (H[a.hash].pinchMidpoint = null)),
        b.preventDefault();
    }

    function q(b, c) {
      var e, g;
      if (((c = a.getEvent(c)), 2 != c.button)) {
        for (g = 0; g < G.length; g++) (e = G[g]), d(e) || o(e, c);
        f(b),
          (E = !1),
          c.srcElement.fireEvent("on" + c.type, document.createEventObject(c)),
          a.stopEvent(c);
      }
    }

    function r(a, b, c) {
      H[a.hash].insideElement || o(a, b), c || f(a);
    }

    function s(b, c) {
      b.clickHandler && a.cancelEvent(c);
    }

    function t(b, c) {
      var d,
        e = 0;
      c || (c = window.event),
        c.wheelDelta
          ? ((e = c.wheelDelta), window.opera && (e = -e))
          : c.detail && (e = -c.detail),
        (e = e > 0 ? 1 : -1),
        b.scrollHandler &&
          ((d = b.scrollHandler(b, z(c, b.element), e, c.shiftKey)),
          d === !1 && a.cancelEvent(c));
    }

    function u(b, c) {
      var d,
        e = H[b.hash];
      if (((c = a.getEvent(c)), 2 != c.button)) {
        var f = a.now() - e.lastMouseDownTime,
          g = y(c),
          h = e.lastMouseDownPoint.distanceTo(g),
          i = f <= b.clickTimeThreshold && h <= b.clickDistThreshold;
        b.clickHandler &&
          ((d = b.clickHandler(b, z(c, b.element), i, c.shiftKey)),
          d === !1 && a.cancelEvent(c));
      }
    }

    function v(b, c) {
      var d,
        e,
        f,
        g = H[b.hash];
      (c = a.getEvent(c)),
        (f = y(c)),
        (d = f.minus(g.lastPoint)),
        (g.lastPoint = f),
        b.dragHandler &&
          ((e = b.dragHandler(b, z(c, b.element), d, c.shiftKey)),
          e === !1 && a.cancelEvent(c));
    }

    function w(a, b) {
      var c, d, e;
      H[a.hash].lastTouch &&
        (1 === b.touches.length &&
        1 === b.targetTouches.length &&
        1 === b.changedTouches.length &&
        H[a.hash].lastTouch.identifier === b.touches[0].identifier
          ? v(a, b.touches[0])
          : 2 === b.touches.length &&
            ((c = y(b.touches[0])),
            (d = y(b.touches[1])),
            (e = Math.abs(c.x - d.x) + Math.abs(c.y - d.y)),
            Math.abs(H[a.hash].lastPinchDelta - e) > 75 &&
              (t(a, {
                shift: !1,
                pageX: H[a.hash].pinchMidpoint.x,
                pageY: H[a.hash].pinchMidpoint.y,
                detail: H[a.hash].lastPinchDelta > e ? 1 : -1,
              }),
              (H[a.hash].lastPinchDelta = e))),
        b.preventDefault());
    }

    function x(b, c) {
      var d;
      for (d = 0; d < G.length; d++) v(G[d], c);
      a.stopEvent(c);
    }

    function y(b) {
      return a.getMousePosition(b);
    }

    function z(b, c) {
      var d = a.getMousePosition(b),
        e = a.getElementPosition(c);
      return d.minus(e);
    }

    function A(a, b) {
      for (var c = document.body; b && a != b && c != b; )
        try {
          b = b.parentNode;
        } catch (d) {
          return !1;
        }
      return a == b;
    }

    function B() {
      D = !0;
    }

    function C() {
      D = !1;
    }
    var D = !1,
      E = !1,
      F = {},
      G = [],
      H = {};
    (a.MouseTracker = function (b) {
      var c = arguments;
      a.isPlainObject(b) ||
        (b = {
          element: c[0],
          clickTimeThreshold: c[1],
          clickDistThreshold: c[2],
        }),
        (this.hash = Math.random()),
        (this.element = a.getElement(b.element)),
        (this.clickTimeThreshold = b.clickTimeThreshold),
        (this.clickDistThreshold = b.clickDistThreshold),
        (this.enterHandler = b.enterHandler || null),
        (this.exitHandler = b.exitHandler || null),
        (this.pressHandler = b.pressHandler || null),
        (this.releaseHandler = b.releaseHandler || null),
        (this.scrollHandler = b.scrollHandler || null),
        (this.clickHandler = b.clickHandler || null),
        (this.dragHandler = b.dragHandler || null),
        (this.keyHandler = b.keyHandler || null),
        (this.focusHandler = b.focusHandler || null),
        (this.blurHandler = b.blurHandler || null);
      var d = this;
      H[this.hash] = {
        mouseover: function (a) {
          k(d, a);
        },
        mouseout: function (a) {
          l(d, a);
        },
        mousedown: function (a) {
          m(d, a);
        },
        mouseup: function (a) {
          o(d, a);
        },
        click: function (a) {
          s(d, a);
        },
        DOMMouseScroll: function (a) {
          t(d, a);
        },
        mousewheel: function (a) {
          t(d, a);
        },
        mouseupie: function (a) {
          q(d, a);
        },
        mousemoveie: function (a) {
          x(d, a);
        },
        mouseupwindow: function (a) {
          r(d, a);
        },
        mousemove: function (a) {
          v(d, a);
        },
        touchstart: function (a) {
          n(d, a);
        },
        touchmove: function (a) {
          w(d, a);
        },
        touchend: function (a) {
          p(d, a);
        },
        keypress: function (a) {
          j(d, a);
        },
        focus: function (a) {
          h(d, a);
        },
        blur: function (a) {
          i(d, a);
        },
        tracking: !1,
        capturing: !1,
        buttonDown: !1,
        insideElement: !1,
        lastPoint: null,
        lastMouseDownTime: null,
        lastMouseDownPoint: null,
        lastPinchDelta: 0,
      };
    }),
      (a.MouseTracker.prototype = {
        destroy: function () {
          c(this), (this.element = null);
        },
        isTracking: function () {
          return H[this.hash].tracking;
        },
        setTracking: function (a) {
          return a ? b(this) : c(this), this;
        },
        enterHandler: function () {},
        exitHandler: function () {},
        pressHandler: function () {},
        releaseHandler: function () {},
        scrollHandler: function () {},
        clickHandler: function () {},
        dragHandler: function () {},
        keyHandler: function () {},
        focusHandler: function () {},
        blurHandler: function () {},
      }),
      (function () {
        a.Browser.vendor == a.BROWSERS.IE && a.Browser.version < 9
          ? (a.addEvent(document, "mousedown", B, !1),
            a.addEvent(document, "mouseup", C, !1))
          : (a.addEvent(window, "mousedown", B, !0),
            a.addEvent(window, "mouseup", C, !0));
      })();
  })(OpenSeadragon),
  (function (a) {
    (a.ControlAnchor = {
      NONE: 0,
      TOP_LEFT: 1,
      TOP_RIGHT: 2,
      BOTTOM_RIGHT: 3,
      BOTTOM_LEFT: 4,
    }),
      (a.Control = function (b, c, d) {
        var e = b.parentNode;
        "number" == typeof c &&
          (a.console.error(
            "Passing an anchor directly into the OpenSeadragon.Control constructor is deprecated; please use an options object instead.  Support for this deprecated variant is scheduled for removal in December 2013"
          ),
          (c = {
            anchor: c,
          })),
          (c.attachToViewer =
            "undefined" == typeof c.attachToViewer ? !0 : c.attachToViewer),
          (this.autoFade = "undefined" == typeof c.autoFade ? !0 : c.autoFade),
          (this.element = b),
          (this.anchor = c.anchor),
          (this.container = d),
          (this.wrapper = a.makeNeutralElement("span")),
          (this.wrapper.style.display = "inline-block"),
          this.wrapper.appendChild(this.element),
          this.anchor == a.ControlAnchor.NONE &&
            (this.wrapper.style.width = this.wrapper.style.height = "100%"),
          c.attachToViewer
            ? this.anchor == a.ControlAnchor.TOP_RIGHT ||
              this.anchor == a.ControlAnchor.BOTTOM_RIGHT
              ? this.container.insertBefore(
                  this.wrapper,
                  this.container.firstChild
                )
              : this.container.appendChild(this.wrapper)
            : e.appendChild(this.wrapper);
      }),
      (a.Control.prototype = {
        destroy: function () {
          this.wrapper.removeChild(this.element),
            this.container.removeChild(this.wrapper);
        },
        isVisible: function () {
          return "none" != this.wrapper.style.display;
        },
        setVisible: function (a) {
          this.wrapper.style.display = a ? "inline-block" : "none";
        },
        setOpacity: function (b) {
          this.element[a.SIGNAL] && a.Browser.vendor == a.BROWSERS.IE
            ? a.setElementOpacity(this.element, b, !0)
            : a.setElementOpacity(this.wrapper, b, !0);
        },
      });
  })(OpenSeadragon),
  (function (a) {
    function b(a, b) {
      var c,
        d = a.controls;
      for (c = d.length - 1; c >= 0; c--) if (d[c].element == b) return c;
      return -1;
    }
    (a.ControlDock = function (b) {
      var c,
        d,
        e = ["topleft", "topright", "bottomright", "bottomleft"];
      for (
        a.extend(
          !0,
          this,
          {
            id:
              "controldock-" + a.now() + "-" + Math.floor(1e6 * Math.random()),
            container: a.makeNeutralElement("form"),
            controls: [],
          },
          b
        ),
          this.container.onsubmit = function () {
            return !1;
          },
          this.element &&
            ((this.element = a.getElement(this.element)),
            this.element.appendChild(this.container),
            (this.element.style.position = "relative"),
            (this.container.style.width = "100%"),
            (this.container.style.height = "100%")),
          d = 0;
        d < e.length;
        d++
      )
        (c = e[d]),
          (this.controls[c] = a.makeNeutralElement("div")),
          (this.controls[c].style.position = "absolute"),
          c.match("left") && (this.controls[c].style.left = "0px"),
          c.match("right") && (this.controls[c].style.right = "0px"),
          c.match("top") && (this.controls[c].style.top = "0px"),
          c.match("bottom") && (this.controls[c].style.bottom = "0px");
      this.container.appendChild(this.controls.topleft),
        this.container.appendChild(this.controls.topright),
        this.container.appendChild(this.controls.bottomright),
        this.container.appendChild(this.controls.bottomleft);
    }),
      (a.ControlDock.prototype = {
        addControl: function (c, d) {
          c = a.getElement(c);
          var e = null;
          if (!(b(this, c) >= 0)) {
            switch (d.anchor) {
              case a.ControlAnchor.TOP_RIGHT:
                (e = this.controls.topright),
                  (c.style.position = "relative"),
                  (c.style.paddingRight = "0px"),
                  (c.style.paddingTop = "0px");
                break;
              case a.ControlAnchor.BOTTOM_RIGHT:
                (e = this.controls.bottomright),
                  (c.style.position = "relative"),
                  (c.style.paddingRight = "0px"),
                  (c.style.paddingBottom = "0px");
                break;
              case a.ControlAnchor.BOTTOM_LEFT:
                (e = this.controls.bottomleft),
                  (c.style.position = "relative"),
                  (c.style.paddingLeft = "0px"),
                  (c.style.paddingBottom = "0px");
                break;
              case a.ControlAnchor.TOP_LEFT:
                (e = this.controls.topleft),
                  (c.style.position = "relative"),
                  (c.style.paddingLeft = "0px"),
                  (c.style.paddingTop = "0px");
                break;
              default:
              case a.ControlAnchor.NONE:
                (e = this.container),
                  (c.style.margin = "0px"),
                  (c.style.padding = "0px");
            }
            this.controls.push(new a.Control(c, d, e)),
              (c.style.display = "inline-block");
          }
        },
        removeControl: function (c) {
          c = a.getElement(c);
          var d = b(this, c);
          return (
            d >= 0 && (this.controls[d].destroy(), this.controls.splice(d, 1)),
            this
          );
        },
        clearControls: function () {
          for (; this.controls.length > 0; ) this.controls.pop().destroy();
          return this;
        },
        areControlsEnabled: function () {
          var a;
          for (a = this.controls.length - 1; a >= 0; a--)
            if (this.controls[a].isVisible()) return !0;
          return !1;
        },
        setControlsEnabled: function (a) {
          var b;
          for (b = this.controls.length - 1; b >= 0; b--)
            this.controls[b].setVisible(a);
          return this;
        },
      });
  })(OpenSeadragon),
  (function ($) {
    function _getSafeElemSize(a) {
      return (
        (a = $.getElement(a)),
        new $.Point(
          0 === a.clientWidth ? 1 : a.clientWidth,
          0 === a.clientHeight ? 1 : a.clientHeight
        )
      );
    }

    function openTileSource(a, b) {
      var c,
        d,
        e = a;
      for (
        e.source && e.close(),
          e.canvas.innerHTML = "",
          THIS[e.hash].prevContainerSize = _getSafeElemSize(e.container),
          e.collectionMode
            ? ((e.source = new $.TileSourceCollection({
                rows: e.collectionRows,
                layout: e.collectionLayout,
                tileSize: e.collectionTileSize,
                tileSources: e.tileSources,
                tileMargin: e.collectionTileMargin,
              })),
              (e.viewport = e.viewport
                ? e.viewport
                : new $.Viewport({
                    collectionMode: !0,
                    collectionTileSource: e.source,
                    containerSize: THIS[e.hash].prevContainerSize,
                    contentSize: e.source.dimensions,
                    springStiffness: e.springStiffness,
                    animationTime: e.animationTime,
                    showNavigator: !1,
                    minZoomImageRatio: 1,
                    maxZoomPixelRatio: 1,
                    viewer: e,
                  })))
            : (b && (e.source = b),
              (e.viewport = e.viewport
                ? e.viewport
                : new $.Viewport({
                    containerSize: THIS[e.hash].prevContainerSize,
                    contentSize: e.source.dimensions,
                    springStiffness: e.springStiffness,
                    animationTime: e.animationTime,
                    minZoomImageRatio: e.minZoomImageRatio,
                    maxZoomPixelRatio: e.maxZoomPixelRatio,
                    visibilityRatio: e.visibilityRatio,
                    wrapHorizontal: e.wrapHorizontal,
                    wrapVertical: e.wrapVertical,
                    defaultZoomLevel: e.defaultZoomLevel,
                    minZoomLevel: e.minZoomLevel,
                    maxZoomLevel: e.maxZoomLevel,
                    viewer: e,
                  }))),
          e.preserveViewport &&
            e.viewport.resetContentSize(e.source.dimensions),
          e.source.overlays = e.source.overlays || [],
          e.drawer = new $.Drawer({
            viewer: e,
            source: e.source,
            viewport: e.viewport,
            element: e.canvas,
            overlays: [].concat(e.overlays).concat(e.source.overlays),
            maxImageCacheCount: e.maxImageCacheCount,
            imageLoaderLimit: e.imageLoaderLimit,
            minZoomImageRatio: e.minZoomImageRatio,
            wrapHorizontal: e.wrapHorizontal,
            wrapVertical: e.wrapVertical,
            immediateRender: e.immediateRender,
            blendTime: e.blendTime,
            alwaysBlend: e.alwaysBlend,
            minPixelRatio: e.collectionMode ? 0 : e.minPixelRatio,
            timeout: e.timeout,
            debugMode: e.debugMode,
            debugGridColor: e.debugGridColor,
          }),
          e.showNavigator &&
            !e.collectionMode &&
            (e.navigator
              ? e.navigator.open(b)
              : (e.navigator = new $.Navigator({
                  id: e.navigatorId,
                  position: e.navigatorPosition,
                  sizeRatio: e.navigatorSizeRatio,
                  height: e.navigatorHeight,
                  width: e.navigatorWidth,
                  tileSources: b,
                  tileHost: e.tileHost,
                  prefixUrl: e.prefixUrl,
                  overlays: e.overlays,
                  viewer: e,
                }))),
          e.showReferenceStrip &&
            !e.referenceStrip &&
            (e.referenceStrip = new $.ReferenceStrip({
              id: e.referenceStripElement,
              position: e.referenceStripPosition,
              sizeRatio: e.referenceStripSizeRatio,
              scroll: e.referenceStripScroll,
              height: e.referenceStripHeight,
              width: e.referenceStripWidth,
              tileSources: e.tileSources,
              tileHost: e.tileHost,
              prefixUrl: e.prefixUrl,
              overlays: e.overlays,
              viewer: e,
            })),
          THIS[e.hash].animating = !1,
          THIS[e.hash].forceRedraw = !0,
          e._updateRequestId = scheduleUpdate(e, updateMulti),
          d = 0;
        d < e.overlayControls.length;
        d++
      )
        (c = e.overlayControls[d]),
          c.point
            ? e.drawer.addOverlay(
                c.id,
                new $.Point(c.point.X, c.point.Y),
                $.OverlayPlacement.TOP_LEFT
              )
            : e.drawer.addOverlay(
                c.id,
                new $.Rect(
                  c.rect.Point.X,
                  c.rect.Point.Y,
                  c.rect.Width,
                  c.rect.Height
                ),
                c.placement
              );
      return (
        (VIEWERS[e.hash] = e),
        e.raiseEvent("open", {
          source: b,
          viewer: e,
        }),
        e
      );
    }

    function scheduleUpdate(a, b) {
      return $.requestAnimationFrame(function () {
        b(a);
      });
    }

    function scheduleControlsFade(a) {
      $.requestAnimationFrame(function () {
        updateControlsFade(a);
      });
    }

    function beginControlsAutoHide(a) {
      a.autoHideControls &&
        ((a.controlsShouldFade = !0),
        (a.controlsFadeBeginTime = $.now() + a.controlsFadeDelay),
        window.setTimeout(function () {
          scheduleControlsFade(a);
        }, a.controlsFadeDelay));
    }

    function updateControlsFade(a) {
      var b, c, d, e;
      if (a.controlsShouldFade) {
        for (
          b = $.now(),
            c = b - a.controlsFadeBeginTime,
            d = 1 - c / a.controlsFadeLength,
            d = Math.min(1, d),
            d = Math.max(0, d),
            e = a.controls.length - 1;
          e >= 0;
          e--
        )
          a.controls[e].autoFade && a.controls[e].setOpacity(d);
        d > 0 && scheduleControlsFade(a);
      }
    }

    function abortControlsAutoHide(a) {
      var b;
      for (a.controlsShouldFade = !1, b = a.controls.length - 1; b >= 0; b--)
        a.controls[b].setOpacity(1);
    }

    function onFocus() {
      abortControlsAutoHide(this);
    }

    function onBlur() {
      beginControlsAutoHide(this);
    }

    function onCanvasClick(a, b, c, d) {
      var e, f;
      this.viewport &&
        c &&
        ((e = this.zoomPerClick),
        (f = d ? 1 / e : e),
        this.viewport.zoomBy(f, this.viewport.pointFromPixel(b, !0)),
        this.viewport.applyConstraints()),
        this.raiseEvent("canvas-click", {
          tracker: a,
          position: b,
          quick: c,
          shift: d,
        });
    }

    function onCanvasDrag(a, b, c, d) {
      this.viewport &&
        (this.panHorizontal || (c.x = 0),
        this.panVertical || (c.y = 0),
        this.viewport.panBy(this.viewport.deltaPointsFromPixels(c.negate())),
        this.constrainDuringPan && this.viewport.applyConstraints()),
        this.raiseEvent("canvas-drag", {
          tracker: a,
          position: b,
          delta: c,
          shift: d,
        });
    }

    function onCanvasRelease(a, b, c, d) {
      c && this.viewport && this.viewport.applyConstraints(),
        this.raiseEvent("canvas-release", {
          tracker: a,
          position: b,
          insideElementPress: c,
          insideElementRelease: d,
        });
    }

    function onCanvasScroll(a, b, c, d) {
      var e;
      return (
        this.viewport &&
          ((e = Math.pow(this.zoomPerScroll, c)),
          this.viewport.zoomBy(e, this.viewport.pointFromPixel(b, !0)),
          this.viewport.applyConstraints()),
        this.raiseEvent("canvas-scroll", {
          tracker: a,
          position: b,
          scroll: c,
          shift: d,
        }),
        !1
      );
    }

    function onContainerExit(a, b, c, d) {
      c ||
        ((THIS[this.hash].mouseInside = !1),
        THIS[this.hash].animating || beginControlsAutoHide(this)),
        this.raiseEvent("container-exit", {
          tracker: a,
          position: b,
          buttonDownElement: c,
          buttonDownAny: d,
        });
    }

    function onContainerRelease(a, b, c, d) {
      d ||
        ((THIS[this.hash].mouseInside = !1),
        THIS[this.hash].animating || beginControlsAutoHide(this)),
        this.raiseEvent("container-release", {
          tracker: a,
          position: b,
          insideElementPress: c,
          insideElementRelease: d,
        });
    }

    function onContainerEnter(a, b, c, d) {
      (THIS[this.hash].mouseInside = !0),
        abortControlsAutoHide(this),
        this.raiseEvent("container-enter", {
          tracker: a,
          position: b,
          buttonDownElement: c,
          buttonDownAny: d,
        });
    }

    function updateMulti(a) {
      return a.source
        ? (updateOnce(a),
          a.source && (a._updateRequestId = scheduleUpdate(a, updateMulti)),
          void 0)
        : ((a._updateRequestId = null), void 0);
    }

    function updateOnce(a) {
      var b, c;
      a.source &&
        ((b = _getSafeElemSize(a.container)),
        b.equals(THIS[a.hash].prevContainerSize) ||
          (a.viewport.resize(b, !0), (THIS[a.hash].prevContainerSize = b)),
        (c = a.viewport.update()),
        a.referenceStrip && (c = a.referenceStrip.update(a.viewport) || c),
        !THIS[a.hash].animating &&
          c &&
          (a.raiseEvent("animationstart"), abortControlsAutoHide(a)),
        c
          ? (a.drawer.update(),
            a.navigator && a.navigator.update(a.viewport),
            a.raiseEvent("animation"))
          : (THIS[a.hash].forceRedraw || a.drawer.needsUpdate()) &&
            (a.drawer.update(),
            a.navigator && a.navigator.update(a.viewport),
            (THIS[a.hash].forceRedraw = !1)),
        THIS[a.hash].animating &&
          !c &&
          (a.raiseEvent("animationfinish"),
          THIS[a.hash].mouseInside || beginControlsAutoHide(a)),
        (THIS[a.hash].animating = c));
    }

    function resolveUrl(a, b) {
      return a ? a + b : b;
    }

    function beginZoomingIn() {
      (THIS[this.hash].lastZoomTime = $.now()),
        (THIS[this.hash].zoomFactor = this.zoomPerSecond),
        (THIS[this.hash].zooming = !0),
        scheduleZoom(this);
    }

    function beginZoomingOut() {
      (THIS[this.hash].lastZoomTime = $.now()),
        (THIS[this.hash].zoomFactor = 1 / this.zoomPerSecond),
        (THIS[this.hash].zooming = !0),
        scheduleZoom(this);
    }

    function endZooming() {
      THIS[this.hash].zooming = !1;
    }

    function scheduleZoom(a) {
      $.requestAnimationFrame($.delegate(a, doZoom));
    }

    function doZoom() {
      var a, b, c;
      THIS[this.hash].zooming &&
        this.viewport &&
        ((a = $.now()),
        (b = a - THIS[this.hash].lastZoomTime),
        (c = Math.pow(THIS[this.hash].zoomFactor, b / 1e3)),
        this.viewport.zoomBy(c),
        this.viewport.applyConstraints(),
        (THIS[this.hash].lastZoomTime = a),
        scheduleZoom(this));
    }

    function doSingleZoomIn() {
      this.viewport &&
        ((THIS[this.hash].zooming = !1),
        this.viewport.zoomBy(this.zoomPerClick / 1),
        this.viewport.applyConstraints());
    }

    function doSingleZoomOut() {
      this.viewport &&
        ((THIS[this.hash].zooming = !1),
        this.viewport.zoomBy(1 / this.zoomPerClick),
        this.viewport.applyConstraints());
    }

    function lightUp() {
      this.buttons.emulateEnter(), this.buttons.emulateExit();
    }

    function onHome() {
      this.viewport && this.viewport.goHome();
    }

    function onFullPage() {
      this.setFullPage(!this.isFullPage()),
        this.buttons && this.buttons.emulateExit(),
        this.fullPageButton.element.focus(),
        this.viewport && this.viewport.applyConstraints();
    }

    function onPrevious() {
      var a = THIS[this.hash].sequence - 1;
      this.navPrevNextWrap && 0 > a && (a += this.tileSources.length),
        this.goToPage(a);
    }

    function onNext() {
      var a = THIS[this.hash].sequence + 1;
      this.navPrevNextWrap && a >= this.tileSources.length && (a = 0),
        this.goToPage(a);
    }
    var THIS = {},
      VIEWERS = {};
    ($.Viewer = function (a) {
      var b,
        c = arguments,
        d = this;
      $.isPlainObject(a) ||
        (a = {
          id: c[0],
          xmlPath: c.length > 1 ? c[1] : void 0,
          prefixUrl: c.length > 2 ? c[2] : void 0,
          controls: c.length > 3 ? c[3] : void 0,
          overlays: c.length > 4 ? c[4] : void 0,
          overlayControls: c.length > 5 ? c[5] : void 0,
        }),
        a.config && ($.extend(!0, a, a.config), delete a.config),
        $.extend(
          !0,
          this,
          {
            id: a.id,
            hash: a.id,
            element: null,
            canvas: null,
            container: null,
            overlays: [],
            overlayControls: [],
            previousBody: [],
            customControls: [],
            source: null,
            drawer: null,
            drawers: [],
            viewport: null,
            navigator: null,
            collectionViewport: null,
            collectionDrawer: null,
            navImages: null,
            buttons: null,
            profiler: null,
          },
          $.DEFAULT_SETTINGS,
          a
        ),
        (THIS[this.hash] = {
          fsBoundsDelta: new $.Point(1, 1),
          prevContainerSize: null,
          animating: !1,
          forceRedraw: !1,
          mouseInside: !1,
          group: null,
          zooming: !1,
          zoomFactor: null,
          lastZoomTime: null,
          sequenced: !1,
          sequence: 0,
          fullPage: !1,
          onfullscreenchange: null,
        }),
        (this._updateRequestId = null),
        $.EventHandler.call(this),
        this.addHandler("open-failed", function (a, b) {
          var c = $.getString("Errors.Open-Failed", b.source, b.message);
          d._showMessage(c);
        }),
        $.ControlDock.call(this, a);
      var e;
      for (
        this.xmlPath && (this.tileSources = [this.xmlPath]),
          this.tileSources &&
            ($.isArray(this.tileSources)
              ? (this.tileSources.length > 1 &&
                  (THIS[this.hash].sequenced = !0),
                (e = this.tileSources[0]))
              : (e = this.tileSources),
            this.open(e)),
          this.element = this.element || document.getElementById(this.id),
          this.canvas = $.makeNeutralElement("div"),
          this.keyboardCommandArea = $.makeNeutralElement("textarea"),
          this.canvas.className = "openseadragon-canvas",
          (function (a) {
            (a.width = "100%"),
              (a.height = "100%"),
              (a.overflow = "hidden"),
              (a.position = "absolute"),
              (a.top = "0px"),
              (a.left = "0px");
          })(this.canvas.style),
          this.container.className = "openseadragon-container",
          (function (a) {
            (a.width = "100%"),
              (a.height = "100%"),
              (a.position = "relative"),
              (a.overflow = "hidden"),
              (a.left = "0px"),
              (a.top = "0px"),
              (a.textAlign = "left");
          })(this.container.style),
          this.keyboardCommandArea.className = "keyboard-command-area",
          (function (a) {
            (a.width = "100%"),
              (a.height = "100%"),
              (a.overflow = "hidden"),
              (a.position = "absolute"),
              (a.top = "0px"),
              (a.left = "0px"),
              (a.resize = "none");
          })(this.keyboardCommandArea.style),
          this.container.insertBefore(this.canvas, this.container.firstChild),
          this.container.insertBefore(
            this.keyboardCommandArea,
            this.container.firstChild
          ),
          this.element.appendChild(this.container),
          this.bodyWidth = document.body.style.width,
          this.bodyHeight = document.body.style.height,
          this.bodyOverflow = document.body.style.overflow,
          this.docOverflow = document.documentElement.style.overflow,
          this.keyboardCommandArea.innerTracker = new $.MouseTracker({
            _this: this,
            element: this.keyboardCommandArea,
            focusHandler: function () {
              var a = $.getElementPosition(this.element);
              window.scrollTo(0, a.y);
            },
            keyHandler: function (a, b, c) {
              switch (b) {
                case 61:
                  return (
                    d.viewport.zoomBy(1.1), d.viewport.applyConstraints(), !1
                  );
                case 45:
                  return (
                    d.viewport.zoomBy(0.9), d.viewport.applyConstraints(), !1
                  );
                case 48:
                  return d.viewport.goHome(), d.viewport.applyConstraints(), !1;
                case 119:
                case 87:
                case 38:
                  return (
                    c
                      ? d.viewport.zoomBy(1.1)
                      : d.viewport.panBy(new $.Point(0, -0.05)),
                    d.viewport.applyConstraints(),
                    !1
                  );
                case 115:
                case 83:
                case 40:
                  return (
                    c
                      ? d.viewport.zoomBy(0.9)
                      : d.viewport.panBy(new $.Point(0, 0.05)),
                    d.viewport.applyConstraints(),
                    !1
                  );
                case 97:
                case 37:
                  return (
                    d.viewport.panBy(new $.Point(-0.05, 0)),
                    d.viewport.applyConstraints(),
                    !1
                  );
                case 100:
                case 39:
                  return (
                    d.viewport.panBy(new $.Point(0.05, 0)),
                    d.viewport.applyConstraints(),
                    !1
                  );
                default:
                  return !0;
              }
            },
          }).setTracking(!0),
          this.innerTracker = new $.MouseTracker({
            element: this.canvas,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            clickHandler: $.delegate(this, onCanvasClick),
            dragHandler: $.delegate(this, onCanvasDrag),
            releaseHandler: $.delegate(this, onCanvasRelease),
            scrollHandler: $.delegate(this, onCanvasScroll),
          }).setTracking(this.mouseNavEnabled ? !0 : !1),
          this.outerTracker = new $.MouseTracker({
            element: this.container,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            enterHandler: $.delegate(this, onContainerEnter),
            exitHandler: $.delegate(this, onContainerExit),
            releaseHandler: $.delegate(this, onContainerRelease),
          }).setTracking(this.mouseNavEnabled ? !0 : !1),
          this.toolbar &&
            (this.toolbar = new $.ControlDock({
              element: this.toolbar,
            })),
          this.bindStandardControls(),
          this.bindSequenceControls(),
          b = 0;
        b < this.customControls.length;
        b++
      )
        this.addControl(this.customControls[b].id, {
          anchor: this.customControls[b].anchor,
        });
      $.requestAnimationFrame(function () {
        beginControlsAutoHide(d);
      });
    }),
      $.extend(
        $.Viewer.prototype,
        $.EventHandler.prototype,
        $.ControlDock.prototype,
        {
          isOpen: function () {
            return !!this.source;
          },
          openDzi: function (a) {
            return this.open(a);
          },
          openTileSource: function (a) {
            return this.open(a);
          },
          open: function (tileSource) {
            var _this = this,
              customTileSource,
              readySource,
              $TileSource,
              options;
            return (
              _this._hideMessage(),
              "string" == $.type(tileSource) &&
                (tileSource.match(/\s*<.*/)
                  ? (tileSource = $.parseXml(tileSource))
                  : tileSource.match(/\s*[\{\[].*/) &&
                    (tileSource = eval("(" + tileSource + ")"))),
              setTimeout(function () {
                if ("string" == $.type(tileSource))
                  (tileSource = new $.TileSource(tileSource, function (a) {
                    openTileSource(_this, a);
                  })),
                    tileSource.addHandler("open-failed", function (a, b) {
                      _this.raiseEvent("open-failed", b);
                    });
                else if ($.isPlainObject(tileSource) || tileSource.nodeType)
                  if ($.isFunction(tileSource.getTileUrl))
                    (customTileSource = new $.TileSource(tileSource)),
                      (customTileSource.getTileUrl = tileSource.getTileUrl),
                      openTileSource(_this, customTileSource);
                  else {
                    if (
                      (($TileSource = $.TileSource.determineType(
                        _this,
                        tileSource
                      )),
                      !$TileSource)
                    )
                      return (
                        _this.raiseEvent("open-failed", {
                          message: "Unable to load TileSource",
                          source: tileSource,
                        }),
                        void 0
                      );
                    (options = $TileSource.prototype.configure.apply(_this, [
                      tileSource,
                    ])),
                      (readySource = new $TileSource(options)),
                      openTileSource(_this, readySource);
                  }
                else openTileSource(_this, tileSource);
              }, 1),
              this
            );
          },
          close: function () {
            return (
              null !== this._updateRequestId &&
                ($.cancelAnimationFrame(this._updateRequestId),
                (this._updateRequestId = null)),
              this.navigator && this.navigator.close(),
              this.drawer && this.drawer.clearOverlays(),
              (this.source = null),
              (this.drawer = null),
              (this.viewport = this.preserveViewport ? this.viewport : null),
              this.canvas && (this.canvas.innerHTML = ""),
              (VIEWERS[this.hash] = null),
              delete VIEWERS[this.hash],
              this.raiseEvent("close", {
                viewer: this,
              }),
              this
            );
          },
          destroy: function () {
            if ((this.close(), this.removeAllHandlers(), this.element))
              for (; this.element.firstChild; )
                this.element.removeChild(this.element.firstChild);
            this.keyboardCommandArea &&
              this.keyboardCommandArea.innerTracker.destroy(),
              this.innerTracker && this.innerTracker.destroy(),
              this.outerTracker && this.outerTracker.destroy(),
              (this.canvas = null),
              (this.keyboardCommandArea = null),
              (this.container = null),
              (this.element = null);
          },
          isMouseNavEnabled: function () {
            return this.innerTracker.isTracking();
          },
          setMouseNavEnabled: function (a) {
            return (
              this.innerTracker.setTracking(a),
              this.raiseEvent("mouse-enabled", {
                enabled: a,
                viewer: this,
              }),
              this
            );
          },
          areControlsEnabled: function () {
            var a,
              b = this.controls.length;
            for (a = 0; a < this.controls.length; a++)
              b = b && this.controls[a].isVisibile();
            return b;
          },
          setControlsEnabled: function (a) {
            return (
              a ? abortControlsAutoHide(this) : beginControlsAutoHide(this),
              this.raiseEvent("controls-enabled", {
                enabled: a,
                viewer: this,
              }),
              this
            );
          },
          isFullPage: function () {
            return THIS[this.hash].fullPage;
          },
          setFullPage: function (a) {
            var b,
              c,
              d,
              e,
              f,
              g,
              h = document.body,
              i = h.style,
              j = document.documentElement.style,
              k = this.canvas.style,
              l = this;
            if (a != this.isFullPage()) {
              if (a) {
                for (
                  this.bodyOverflow = i.overflow,
                    this.docOverflow = j.overflow,
                    i.overflow = "hidden",
                    j.overflow = "hidden",
                    this.bodyWidth = i.width,
                    this.bodyHeight = i.height,
                    i.width = "100%",
                    i.height = "100%",
                    this.previousBody = [],
                    THIS[this.hash].prevElementParent = this.element.parentNode,
                    THIS[this.hash].prevNextSibling = this.element.nextSibling,
                    THIS[this.hash].prevElementWidth = this.element.style.width,
                    THIS[this.hash].prevElementHeight =
                      this.element.style.height,
                    f = h.childNodes.length,
                    g = 0;
                  f > g;
                  g++
                )
                  this.previousBody.push(h.childNodes[0]),
                    h.removeChild(h.childNodes[0]);
                this.toolbar &&
                  this.toolbar.element &&
                  ((this.toolbar.parentNode = this.toolbar.element.parentNode),
                  (this.toolbar.nextSibling = this.toolbar.element.nextSibling),
                  h.appendChild(this.toolbar.element),
                  $.addClass(this.toolbar.element, "fullpage")),
                  $.addClass(this.element, "fullpage"),
                  h.appendChild(this.element),
                  $.supportsFullScreen
                    ? ((THIS[this.hash].onfullscreenchange = function () {
                        $.isFullScreen()
                          ? l.setFullPage(!0)
                          : l.setFullPage(!1);
                      }),
                      $.requestFullScreen(document.body),
                      document.addEventListener(
                        $.fullScreenEventName,
                        THIS[this.hash].onfullscreenchange
                      ),
                      (this.element.style.height = "100%"),
                      (this.element.style.width = "100%"))
                    : ((this.element.style.height = $.getWindowSize().y + "px"),
                      (this.element.style.width = $.getWindowSize().x + "px")),
                  this.toolbar &&
                    this.toolbar.element &&
                    (this.element.style.height =
                      $.getElementSize(this.element).y -
                      $.getElementSize(this.toolbar.element).y +
                      "px"),
                  (THIS[this.hash].fullPage = !0),
                  $.delegate(this, onContainerEnter)();
              } else {
                for (
                  $.supportsFullScreen &&
                    (document.removeEventListener(
                      $.fullScreenEventName,
                      THIS[this.hash].onfullscreenchange
                    ),
                    $.cancelFullScreen(document)),
                    i.overflow = this.bodyOverflow,
                    j.overflow = this.docOverflow,
                    i.width = this.bodyWidth,
                    i.height = this.bodyHeight,
                    k.backgroundColor = "",
                    k.color = "",
                    h.removeChild(this.element),
                    f = this.previousBody.length,
                    g = 0;
                  f > g;
                  g++
                )
                  h.appendChild(this.previousBody.shift());
                $.removeClass(this.element, "fullpage"),
                  THIS[this.hash].prevElementParent.insertBefore(
                    this.element,
                    THIS[this.hash].prevNextSibling
                  ),
                  this.toolbar &&
                    this.toolbar.element &&
                    (h.removeChild(this.toolbar.element),
                    $.removeClass(this.toolbar.element, "fullpage"),
                    this.toolbar.parentNode.insertBefore(
                      this.toolbar.element,
                      this.toolbar.nextSibling
                    ),
                    delete this.toolbar.parentNode,
                    delete this.toolbar.nextSibling),
                  (this.element.style.width = THIS[this.hash].prevElementWidth),
                  (this.element.style.height =
                    THIS[this.hash].prevElementHeight),
                  (THIS[this.hash].fullPage = !1),
                  $.delegate(this, onContainerExit)();
              }
              if (
                (this.raiseEvent("fullpage", {
                  fullpage: a,
                  viewer: this,
                }),
                this.viewport)
              ) {
                if (
                  ((b = this.viewport.getBounds()),
                  this.viewport.resize(THIS[this.hash].prevContainerSize),
                  (c = this.viewport.getBounds()),
                  a)
                )
                  THIS[this.hash].fsBoundsDelta = new $.Point(
                    c.width / b.width,
                    c.height / b.height
                  );
                else {
                  this.viewport.update(),
                    this.viewport.zoomBy(
                      Math.max(
                        THIS[this.hash].fsBoundsDelta.x,
                        THIS[this.hash].fsBoundsDelta.y
                      ),
                      null,
                      !0
                    );
                  for (e in VIEWERS)
                    (d = VIEWERS[e]),
                      d !== this &&
                        d != this.navigator &&
                        (d.open(d.source),
                        d.navigator && d.navigator.open(d.source));
                }
                (THIS[this.hash].forceRedraw = !0), updateOnce(this);
              }
              return this;
            }
          },
          isVisible: function () {
            return "hidden" != this.container.style.visibility;
          },
          setVisible: function (a) {
            return (
              (this.container.style.visibility = a ? "" : "hidden"),
              this.raiseEvent("visible", {
                visible: a,
                viewer: this,
              }),
              this
            );
          },
          bindSequenceControls: function () {
            var a = $.delegate(this, onFocus),
              b = $.delegate(this, onBlur),
              c = $.delegate(this, onNext),
              d = $.delegate(this, onPrevious),
              e = this.navImages,
              f = !0;
            return (
              this.showSequenceControl &&
                THIS[this.hash].sequenced &&
                ((this.previousButton || this.nextButton) && (f = !1),
                (this.previousButton = new $.Button({
                  element: this.previousButton
                    ? $.getElement(this.previousButton)
                    : null,
                  clickTimeThreshold: this.clickTimeThreshold,
                  clickDistThreshold: this.clickDistThreshold,
                  tooltip: $.getString("Tooltips.PreviousPage"),
                  srcRest: resolveUrl(this.prefixUrl, e.previous.REST),
                  srcGroup: resolveUrl(this.prefixUrl, e.previous.GROUP),
                  srcHover: resolveUrl(this.prefixUrl, e.previous.HOVER),
                  srcDown: resolveUrl(this.prefixUrl, e.previous.DOWN),
                  onRelease: d,
                  onFocus: a,
                  onBlur: b,
                })),
                (this.nextButton = new $.Button({
                  element: this.nextButton
                    ? $.getElement(this.nextButton)
                    : null,
                  clickTimeThreshold: this.clickTimeThreshold,
                  clickDistThreshold: this.clickDistThreshold,
                  tooltip: $.getString("Tooltips.NextPage"),
                  srcRest: resolveUrl(this.prefixUrl, e.next.REST),
                  srcGroup: resolveUrl(this.prefixUrl, e.next.GROUP),
                  srcHover: resolveUrl(this.prefixUrl, e.next.HOVER),
                  srcDown: resolveUrl(this.prefixUrl, e.next.DOWN),
                  onRelease: c,
                  onFocus: a,
                  onBlur: b,
                })),
                this.navPrevNextWrap || this.previousButton.disable(),
                f &&
                  ((this.paging = new $.ButtonGroup({
                    buttons: [this.previousButton, this.nextButton],
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                  })),
                  (this.pagingControl = this.paging.element),
                  this.toolbar
                    ? this.toolbar.addControl(this.pagingControl, {
                        anchor: $.ControlAnchor.BOTTOM_RIGHT,
                      })
                    : this.addControl(this.pagingControl, {
                        anchor: $.ControlAnchor.TOP_LEFT,
                      }))),
              this
            );
          },
          bindStandardControls: function () {
            var a = $.delegate(this, beginZoomingIn),
              b = $.delegate(this, endZooming),
              c = $.delegate(this, doSingleZoomIn),
              d = $.delegate(this, beginZoomingOut),
              e = $.delegate(this, doSingleZoomOut),
              f = $.delegate(this, onHome),
              g = $.delegate(this, onFullPage),
              h = $.delegate(this, onFocus),
              i = $.delegate(this, onBlur),
              j = this.navImages,
              k = [],
              l = !0;
            return (
              this.showNavigationControl &&
                ((this.zoomInButton ||
                  this.zoomOutButton ||
                  this.homeButton ||
                  this.fullPageButton) &&
                  (l = !1),
                k.push(
                  (this.zoomInButton = new $.Button({
                    element: this.zoomInButton
                      ? $.getElement(this.zoomInButton)
                      : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: $.getString("Tooltips.ZoomIn"),
                    srcRest: resolveUrl(this.prefixUrl, j.zoomIn.REST),
                    srcGroup: resolveUrl(this.prefixUrl, j.zoomIn.GROUP),
                    srcHover: resolveUrl(this.prefixUrl, j.zoomIn.HOVER),
                    srcDown: resolveUrl(this.prefixUrl, j.zoomIn.DOWN),
                    onPress: a,
                    onRelease: b,
                    onClick: c,
                    onEnter: a,
                    onExit: b,
                    onFocus: h,
                    onBlur: i,
                  }))
                ),
                k.push(
                  (this.zoomOutButton = new $.Button({
                    element: this.zoomOutButton
                      ? $.getElement(this.zoomOutButton)
                      : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: $.getString("Tooltips.ZoomOut"),
                    srcRest: resolveUrl(this.prefixUrl, j.zoomOut.REST),
                    srcGroup: resolveUrl(this.prefixUrl, j.zoomOut.GROUP),
                    srcHover: resolveUrl(this.prefixUrl, j.zoomOut.HOVER),
                    srcDown: resolveUrl(this.prefixUrl, j.zoomOut.DOWN),
                    onPress: d,
                    onRelease: b,
                    onClick: e,
                    onEnter: d,
                    onExit: b,
                    onFocus: h,
                    onBlur: i,
                  }))
                ),
                k.push(
                  (this.homeButton = new $.Button({
                    element: this.homeButton
                      ? $.getElement(this.homeButton)
                      : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: $.getString("Tooltips.Home"),
                    srcRest: resolveUrl(this.prefixUrl, j.home.REST),
                    srcGroup: resolveUrl(this.prefixUrl, j.home.GROUP),
                    srcHover: resolveUrl(this.prefixUrl, j.home.HOVER),
                    srcDown: resolveUrl(this.prefixUrl, j.home.DOWN),
                    onRelease: f,
                    onFocus: h,
                    onBlur: i,
                  }))
                ),
                k.push(
                  (this.fullPageButton = new $.Button({
                    element: this.fullPageButton
                      ? $.getElement(this.fullPageButton)
                      : null,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                    tooltip: $.getString("Tooltips.FullPage"),
                    srcRest: resolveUrl(this.prefixUrl, j.fullpage.REST),
                    srcGroup: resolveUrl(this.prefixUrl, j.fullpage.GROUP),
                    srcHover: resolveUrl(this.prefixUrl, j.fullpage.HOVER),
                    srcDown: resolveUrl(this.prefixUrl, j.fullpage.DOWN),
                    onRelease: g,
                    onFocus: h,
                    onBlur: i,
                  }))
                ),
                l &&
                  ((this.buttons = new $.ButtonGroup({
                    buttons: k,
                    clickTimeThreshold: this.clickTimeThreshold,
                    clickDistThreshold: this.clickDistThreshold,
                  })),
                  (this.navControl = this.buttons.element),
                  this.addHandler("open", $.delegate(this, lightUp)),
                  this.toolbar
                    ? this.toolbar.addControl(this.navControl, {
                        anchor: $.ControlAnchor.TOP_LEFT,
                      })
                    : this.addControl(this.navControl, {
                        anchor: $.ControlAnchor.TOP_LEFT,
                      }))),
              this
            );
          },
          goToPage: function (a) {
            return (
              this.raiseEvent("page", {
                page: a,
                viewer: this,
              }),
              this.tileSources.length > a &&
                ((THIS[this.hash].sequence = a),
                this.nextButton &&
                  (this.tileSources.length - 1 === a
                    ? this.navPrevNextWrap || this.nextButton.disable()
                    : this.nextButton.enable()),
                this.previousButton &&
                  (a > 0
                    ? this.previousButton.enable()
                    : this.navPrevNextWrap || this.previousButton.disable()),
                this.open(this.tileSources[a])),
              $.isFunction(this.onPageChange) &&
                this.onPageChange({
                  page: a,
                  viewer: this,
                }),
              this.referenceStrip && this.referenceStrip.setFocus(a),
              this
            );
          },
          _showMessage: function (a) {
            this._hideMessage();
            var b = $.makeNeutralElement("div");
            b.appendChild(document.createTextNode(a)),
              (this.messageDiv = $.makeCenteredNode(b)),
              $.addClass(this.messageDiv, "openseadragon-message"),
              this.container.appendChild(this.messageDiv);
          },
          _hideMessage: function () {
            var a = this.messageDiv;
            a && (a.parentNode.removeChild(a), delete this.messageDiv);
          },
        }
      );
  })(OpenSeadragon),
  (function (a) {
    function b(b, c) {
      var d, e, f;
      this.drag
        ? (this.drag = !1)
        : this.viewer.viewport &&
          ((e = this.viewport.deltaPointsFromPixels(c)),
          (f = this.viewer.viewport.getBounds().getSize()),
          (d = new a.Rect(e.x - f.x / 2, e.y - f.y / 2, f.x, f.y)),
          this.viewer.source.aspectRatio > this.viewer.viewport.getAspectRatio()
            ? (d.y =
                d.y -
                (this.viewerSizeInPoints.y -
                  1 / this.viewer.source.aspectRatio) /
                  2)
            : (d.x = d.x - (this.viewerSizeInPoints.x - 1) / 2),
          this.viewer.viewport.fitBounds(d),
          this.viewer.viewport.applyConstraints());
    }

    function c(a, b, c) {
      this.viewer.viewport &&
        ((this.drag = !0),
        this.panHorizontal || (c.x = 0),
        this.panVertical || (c.y = 0),
        this.viewer.viewport.panBy(this.viewport.deltaPointsFromPixels(c)));
    }

    function d(a, b, c) {
      c && this.viewer.viewport && this.viewer.viewport.applyConstraints();
    }
    (a.Navigator = function (e) {
      var f,
        g = e.viewer,
        h = a.getElementSize(g.element);
      e.id
        ? ((this.element = document.getElementById(e.id)),
          (e.controlOptions = {
            anchor: a.ControlAnchor.NONE,
            attachToViewer: !1,
            autoFade: !1,
          }))
        : ((e.id = "navigator-" + a.now()),
          (this.element = a.makeNeutralElement("div")),
          (e.controlOptions = {
            anchor: a.ControlAnchor.TOP_RIGHT,
            attachToViewer: !0,
            autoFade: !0,
          }),
          e.position &&
            ("BOTTOM_RIGHT" == e.position
              ? (e.controlOptions.anchor = a.ControlAnchor.BOTTOM_RIGHT)
              : "BOTTOM_LEFT" == e.position
              ? (e.controlOptions.anchor = a.ControlAnchor.BOTTOM_LEFT)
              : "TOP_RIGHT" == e.position
              ? (e.controlOptions.anchor = a.ControlAnchor.TOP_RIGHT)
              : "TOP_LEFT" == e.position &&
                (e.controlOptions.anchor = a.ControlAnchor.TOP_LEFT))),
        (this.element.id = e.id),
        (this.element.className += " navigator"),
        (e = a.extend(
          !0,
          {
            sizeRatio: a.DEFAULT_SETTINGS.navigatorSizeRatio,
          },
          e,
          {
            element: this.element,
            showNavigator: !1,
            mouseNavEnabled: !1,
            showNavigationControl: !1,
            showSequenceControl: !1,
            immediateRender: !0,
            blendTime: 0,
            animationTime: 0,
          }
        )),
        (e.minPixelRatio = this.minPixelRatio = g.minPixelRatio),
        (this.viewerSizeInPoints = g.viewport.deltaPointsFromPixels(h)),
        (this.borderWidth = 2),
        (this.fudge = new a.Point(1, 1)),
        (this.totalBorderWidths = new a.Point(
          2 * this.borderWidth,
          2 * this.borderWidth
        ).minus(this.fudge)),
        (function (a, b) {
          (a.margin = "0px"),
            (a.border = b + "px solid #555"),
            (a.padding = "0px"),
            (a.background = "#000"),
            (a.opacity = 0.8),
            (a.overflow = "hidden");
        })(this.element.style, this.borderWidth),
        (this.displayRegion = a.makeNeutralElement("div")),
        (this.displayRegion.id = this.element.id + "-displayregion"),
        (this.displayRegion.className = "displayregion"),
        (function (a, b) {
          (a.position = "relative"),
            (a.top = "0px"),
            (a.left = "0px"),
            (a.fontSize = "0px"),
            (a.overflow = "hidden"),
            (a.border = b + "px solid #900"),
            (a.margin = "0px"),
            (a.padding = "0px"),
            (a.background = "transparent"),
            (a["float"] = "left"),
            (a.cssFloat = "left"),
            (a.styleFloat = "left"),
            (a.zIndex = 999999999),
            (a.cursor = "default");
        })(this.displayRegion.style, this.borderWidth),
        (this.element.innerTracker = new a.MouseTracker({
          element: this.element,
          dragHandler: a.delegate(this, c),
          clickHandler: a.delegate(this, b),
          releaseHandler: a.delegate(this, d),
          scrollHandler: function () {
            return !1;
          },
        }).setTracking(!0)),
        g.addControl(this.element, e.controlOptions),
        e.width && e.height
          ? ((this.element.style.width = e.width + "px"),
            (this.element.style.height = e.height + "px"))
          : ((this.element.style.width = h.x * e.sizeRatio + "px"),
            (this.element.style.height = h.y * e.sizeRatio + "px")),
        a.Viewer.apply(this, [e]),
        this.element
          .getElementsByTagName("form")[0]
          .appendChild(this.displayRegion),
        (f = this.element.getElementsByTagName("textarea")[0]),
        f && f.parentNode.removeChild(f);
    }),
      a.extend(
        a.Navigator.prototype,
        a.EventHandler.prototype,
        a.Viewer.prototype,
        {
          update: function (a) {
            var b, c, d;
            a &&
              this.viewport &&
              ((b = a.getBounds(!0)),
              (c = this.viewport.pixelFromPoint(b.getTopLeft())),
              (d = this.viewport
                .pixelFromPoint(b.getBottomRight())
                .minus(this.totalBorderWidths)),
              (function (a) {
                (a.top = c.y + "px"), (a.left = c.x + "px");
                var b = Math.abs(c.x - d.x),
                  e = Math.abs(c.y - d.y);
                (a.width = Math.max(b, 0) + "px"),
                  (a.height = Math.max(e, 0) + "px");
              })(this.displayRegion.style));
          },
          open: function (b) {
            var c = this.viewer.viewport.containerSize.times(this.sizeRatio);
            return (
              (this.minPixelRatio =
                b.tileSize > c.x || b.tileSize > c.y
                  ? Math.min(c.x, c.y) / b.tileSize
                  : this.viewer.minPixelRatio),
              a.Viewer.prototype.open.apply(this, [b])
            );
          },
        }
      );
  })(OpenSeadragon),
  (function (a) {
    var b = {
      Errors: {
        Dzc: "Sorry, we don't support Deep Zoom Collections!",
        Dzi: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
        Xml: "Hmm, this doesn't appear to be a valid Deep Zoom Image.",
        ImageFormat: "Sorry, we don't support {0}-based Deep Zoom Images.",
        Security:
          "It looks like a security restriction stopped us from loading this Deep Zoom Image.",
        Status: "This space unintentionally left blank ({0} {1}).",
        "Open-Failed": "Unable to open {0}: {1}",
      },
      Tooltips: {
        FullPage: "Toggle full page",
        Home: "Go home",
        ZoomIn: "Zoom in",
        ZoomOut: "Zoom out",
        NextPage: "Next page",
        PreviousPage: "Previous page",
      },
    };
    a.extend(a, {
      getString: function (c) {
        var d,
          e = c.split("."),
          f = null,
          g = arguments,
          h = b;
        for (d = 0; d < e.length - 1; d++) h = h[e[d]] || {};
        return (
          (f = h[e[d]]),
          "string" != typeof f &&
            (a.console.debug("Untranslated source string:", c), (f = "")),
          f.replace(/\{\d+\}/g, function (a) {
            var b = parseInt(a.match(/\d+/), 10) + 1;
            return b < g.length ? g[b] : "";
          })
        );
      },
      setString: function (a, c) {
        var d,
          e = a.split("."),
          f = b;
        for (d = 0; d < e.length - 1; d++)
          f[e[d]] || (f[e[d]] = {}), (f = f[e[d]]);
        f[e[d]] = c;
      },
    });
  })(OpenSeadragon),
  (function (a) {
    (a.Point = function (a, b) {
      (this.x = "number" == typeof a ? a : 0),
        (this.y = "number" == typeof b ? b : 0);
    }),
      (a.Point.prototype = {
        plus: function (b) {
          return new a.Point(this.x + b.x, this.y + b.y);
        },
        minus: function (b) {
          return new a.Point(this.x - b.x, this.y - b.y);
        },
        times: function (b) {
          return new a.Point(this.x * b, this.y * b);
        },
        divide: function (b) {
          return new a.Point(this.x / b, this.y / b);
        },
        negate: function () {
          return new a.Point(-this.x, -this.y);
        },
        distanceTo: function (a) {
          return Math.sqrt(
            Math.pow(this.x - a.x, 2) + Math.pow(this.y - a.y, 2)
          );
        },
        apply: function (b) {
          return new a.Point(b(this.x), b(this.y));
        },
        equals: function (b) {
          return b instanceof a.Point && this.x === b.x && this.y === b.y;
        },
        rotate: function (b, c) {
          var d = (b * Math.PI) / 180,
            e =
              Math.cos(d) * (this.x - c.x) - Math.sin(d) * (this.y - c.y) + c.x,
            f =
              Math.sin(d) * (this.x - c.x) + Math.cos(d) * (this.y - c.y) + c.y;
          return new a.Point(e, f);
        },
        toString: function () {
          return "(" + Math.round(this.x) + "," + Math.round(this.y) + ")";
        },
      });
  })(OpenSeadragon),
  (function ($) {
    function processResponse(xhr) {
      var responseText = xhr.responseText,
        status = xhr.status,
        statusText,
        data;
      if (!xhr) throw new Error($.getString("Errors.Security"));
      if (200 !== xhr.status && 0 !== xhr.status)
        throw (
          ((status = xhr.status),
          (statusText = 404 == status ? "Not Found" : xhr.statusText),
          new Error($.getString("Errors.Status", status, statusText)))
        );
      if (responseText.match(/\s*<.*/))
        try {
          data =
            xhr.responseXML && xhr.responseXML.documentElement
              ? xhr.responseXML
              : $.parseXml(responseText);
        } catch (e) {
          data = xhr.responseText;
        }
      else
        data = responseText.match(/\s*[\{\[].*/)
          ? eval("(" + responseText + ")")
          : responseText;
      return data;
    }
    ($.TileSource = function (a) {
      var b,
        c,
        d = null,
        e = arguments;
      for (
        b = $.isPlainObject(a)
          ? a
          : {
              width: e[0],
              height: e[1],
              tileSize: e[2],
              tileOverlap: e[3],
              minLevel: e[4],
              maxLevel: e[5],
            },
          $.EventHandler.call(this),
          $.extend(!0, this, b),
          c = 0;
        c < arguments.length;
        c++
      )
        if ($.isFunction(arguments[c])) {
          (d = arguments[c]),
            this.addHandler("ready", function (a, b) {
              d(b);
            });
          break;
        }
      "string" == $.type(arguments[0])
        ? ((this.aspectRatio = 1),
          (this.dimensions = new $.Point(10, 10)),
          (this.tileSize = 0),
          (this.tileOverlap = 0),
          (this.minLevel = 0),
          (this.maxLevel = 0),
          (this.ready = !1),
          this.getImageInfo(arguments[0]))
        : ((this.ready = !0),
          (this.aspectRatio = b.width && b.height ? b.width / b.height : 1),
          (this.dimensions = new $.Point(b.width, b.height)),
          (this.tileSize = b.tileSize ? b.tileSize : 0),
          (this.tileOverlap = b.tileOverlap ? b.tileOverlap : 0),
          (this.minLevel = b.minLevel ? b.minLevel : 0),
          (this.maxLevel =
            void 0 !== b.maxLevel && null !== b.maxLevel
              ? b.maxLevel
              : b.width && b.height
              ? Math.ceil(Math.log(Math.max(b.width, b.height)) / Math.log(2))
              : 0),
          d && $.isFunction(d) && d(this));
    }),
      ($.TileSource.prototype = {
        getLevelScale: function (a) {
          var b,
            c = {};
          for (b = 0; b <= this.maxLevel; b++)
            c[b] = 1 / Math.pow(2, this.maxLevel - b);
          return (
            (this.getLevelScale = function (a) {
              return c[a];
            }),
            this.getLevelScale(a)
          );
        },
        getNumTiles: function (a) {
          var b = this.getLevelScale(a),
            c = Math.ceil((b * this.dimensions.x) / this.tileSize),
            d = Math.ceil((b * this.dimensions.y) / this.tileSize);
          return new $.Point(c, d);
        },
        getPixelRatio: function (a) {
          var b = this.dimensions.times(this.getLevelScale(a)),
            c = 1 / b.x,
            d = 1 / b.y;
          return new $.Point(c, d);
        },
        getClosestLevel: function (a) {
          var b,
            c,
            d = Math.floor(Math.max(a.x, a.y) / this.tileSize);
          for (
            b = this.minLevel;
            b < this.maxLevel &&
            ((c = this.getNumTiles(b)), !(Math.max(c.x, c.y) + 1 >= d));
            b++
          );
          return Math.max(0, b - 1);
        },
        getTileAtPoint: function (a, b) {
          var c = b.times(this.dimensions.x).times(this.getLevelScale(a)),
            d = Math.floor(c.x / this.tileSize),
            e = Math.floor(c.y / this.tileSize);
          return new $.Point(d, e);
        },
        getTileBounds: function (a, b, c) {
          var d = this.dimensions.times(this.getLevelScale(a)),
            e = 0 === b ? 0 : this.tileSize * b - this.tileOverlap,
            f = 0 === c ? 0 : this.tileSize * c - this.tileOverlap,
            g = this.tileSize + (0 === b ? 1 : 2) * this.tileOverlap,
            h = this.tileSize + (0 === c ? 1 : 2) * this.tileOverlap,
            i = 1 / d.x;
          return (
            (g = Math.min(g, d.x - e)),
            (h = Math.min(h, d.y - f)),
            new $.Rect(e * i, f * i, g * i, h * i)
          );
        },
        getImageInfo: function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i = this;
          a &&
            ((f = a.split("/")),
            (g = f[f.length - 1]),
            (h = g.lastIndexOf(".")),
            h > -1 && (f[f.length - 1] = g.slice(0, h))),
            (c = function (b) {
              var c = $.TileSource.determineType(i, b, a);
              return c
                ? ((e = c.prototype.configure.apply(i, [b, a])),
                  (d = new c(e)),
                  (i.ready = !0),
                  i.raiseEvent("ready", d),
                  void 0)
                : (i.raiseEvent("open-failed", {
                    message: "Unable to load TileSource",
                    source: a,
                  }),
                  void 0);
            }),
            a.match(/\.js$/)
              ? ((b = a.split("/").pop().replace(".js", "")),
                $.jsonp({
                  url: a,
                  async: !1,
                  callbackName: b,
                  callback: c,
                }))
              : $.makeAjaxRequest(
                  a,
                  function (a) {
                    var b = processResponse(a);
                    c(b);
                  },
                  function (b, c) {
                    var d;
                    try {
                      d = "HTTP " + b.status + " attempting to load TileSource";
                    } catch (e) {
                      var f;
                      (f =
                        "undefined" != typeof c && c.toString
                          ? c.toString()
                          : "Unknown error"),
                        (d = f + " attempting to load TileSource");
                    }
                    i.raiseEvent("open-failed", {
                      message: d,
                      source: a,
                    });
                  }
                );
        },
        supports: function () {
          return !1;
        },
        configure: function () {
          throw new Error("Method not implemented.");
        },
        getTileUrl: function () {
          throw new Error("Method not implemented.");
        },
        tileExists: function (a, b, c) {
          var d = this.getNumTiles(a);
          return (
            a >= this.minLevel &&
            a <= this.maxLevel &&
            b >= 0 &&
            c >= 0 &&
            b < d.x &&
            c < d.y
          );
        },
      }),
      $.extend(!0, $.TileSource.prototype, $.EventHandler.prototype),
      ($.TileSource.determineType = function (a, b, c) {
        var d;
        for (d in OpenSeadragon)
          if (
            d.match(/.+TileSource$/) &&
            $.isFunction(OpenSeadragon[d]) &&
            $.isFunction(OpenSeadragon[d].prototype.supports) &&
            OpenSeadragon[d].prototype.supports.call(a, b, c)
          )
            return OpenSeadragon[d];
        $.console.error("No TileSource was able to open %s %s", c, b);
      });
  })(OpenSeadragon),
  (function (a) {
    function b(b, d) {
      if (!d || !d.documentElement) throw new Error(a.getString("Errors.Xml"));
      var e,
        f,
        g,
        h,
        i,
        j = d.documentElement,
        k = j.tagName,
        l = null,
        m = [];
      if ("Image" == k)
        try {
          if (
            ((h = j.getElementsByTagName("Size")[0]),
            (l = {
              Image: {
                xmlns: "http://schemas.microsoft.com/deepzoom/2008",
                Url: j.getAttribute("Url"),
                Format: j.getAttribute("Format"),
                DisplayRect: null,
                Overlap: parseInt(j.getAttribute("Overlap"), 10),
                TileSize: parseInt(j.getAttribute("TileSize"), 10),
                Size: {
                  Height: parseInt(h.getAttribute("Height"), 10),
                  Width: parseInt(h.getAttribute("Width"), 10),
                },
              },
            }),
            !a.imageFormatSupported(l.Image.Format))
          )
            throw new Error(
              a.getString("Errors.ImageFormat", l.Image.Format.toUpperCase())
            );
          for (
            e = j.getElementsByTagName("DisplayRect"), i = 0;
            i < e.length;
            i++
          )
            (f = e[i]),
              (g = f.getElementsByTagName("Rect")[0]),
              m.push({
                Rect: {
                  X: parseInt(g.getAttribute("X"), 10),
                  Y: parseInt(g.getAttribute("Y"), 10),
                  Width: parseInt(g.getAttribute("Width"), 10),
                  Height: parseInt(g.getAttribute("Height"), 10),
                  MinLevel: parseInt(f.getAttribute("MinLevel"), 10),
                  MaxLevel: parseInt(f.getAttribute("MaxLevel"), 10),
                },
              });
          return m.length && (l.Image.DisplayRect = m), c(b, l);
        } catch (n) {
          throw n instanceof Error ? n : new Error(a.getString("Errors.Dzi"));
        }
      else {
        if ("Collection" == k) throw new Error(a.getString("Errors.Dzc"));
        if ("Error" == k) return a._processDZIError(j);
      }
      throw new Error(a.getString("Errors.Dzi"));
    }

    function c(b, c) {
      var d,
        e,
        f = c.Image,
        g = f.Url,
        h = f.Format,
        i = f.Size,
        j = f.DisplayRect || [],
        k = parseInt(i.Width, 10),
        l = parseInt(i.Height, 10),
        m = parseInt(f.TileSize, 10),
        n = parseInt(f.Overlap, 10),
        o = [];
      for (e = 0; e < j.length; e++)
        (d = j[e].Rect),
          o.push(
            new a.DisplayRect(
              parseInt(d.X, 10),
              parseInt(d.Y, 10),
              parseInt(d.Width, 10),
              parseInt(d.Height, 10),
              parseInt(d.MinLevel, 10),
              parseInt(d.MaxLevel, 10)
            )
          );
      return a.extend(
        !0,
        {
          width: k,
          height: l,
          tileSize: m,
          tileOverlap: n,
          minLevel: null,
          maxLevel: null,
          tilesUrl: g,
          fileFormat: h,
          displayRects: o,
        },
        c
      );
    }
    (a.DziTileSource = function (b) {
      var c, d, e, f;
      if (
        ((f = a.isPlainObject(b)
          ? b
          : {
              width: arguments[0],
              height: arguments[1],
              tileSize: arguments[2],
              tileOverlap: arguments[3],
              tilesUrl: arguments[4],
              fileFormat: arguments[5],
              displayRects: arguments[6],
              minLevel: arguments[7],
              maxLevel: arguments[8],
            }),
        (this._levelRects = {}),
        (this.tilesUrl = f.tilesUrl),
        (this.fileFormat = f.fileFormat),
        (this.displayRects = f.displayRects),
        this.displayRects)
      )
        for (c = this.displayRects.length - 1; c >= 0; c--)
          for (d = this.displayRects[c], e = d.minLevel; e <= d.maxLevel; e++)
            this._levelRects[e] || (this._levelRects[e] = []),
              this._levelRects[e].push(d);
      a.TileSource.apply(this, [f]);
    }),
      a.extend(a.DziTileSource.prototype, a.TileSource.prototype, {
        supports: function (a) {
          var b;
          return (
            a.Image
              ? (b = a.Image.xmlns)
              : a.documentElement &&
                "Image" == a.documentElement.tagName &&
                (b = a.documentElement.namespaceURI),
            "http://schemas.microsoft.com/deepzoom/2008" == b ||
              "http://schemas.microsoft.com/deepzoom/2009" == b
          );
        },
        configure: function (d, e) {
          var f;
          return (
            (f = a.isPlainObject(d) ? c(this, d) : b(this, d)),
            e &&
              !f.tilesUrl &&
              (f.tilesUrl = e.replace(/([^\/]+)\.(dzi|xml|js)$/, "$1_files/")),
            f
          );
        },
        getTileUrl: function (a, b, c) {
          return [this.tilesUrl, a, "/", b, "_", c, ".", this.fileFormat].join(
            ""
          );
        },
        tileExists: function (a, b, c) {
          var d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = this._levelRects[a];
          if (!k || !k.length) return !0;
          for (j = k.length - 1; j >= 0; j--)
            if (
              ((d = k[j]),
              !(a < d.minLevel || a > d.maxLevel) &&
                ((e = this.getLevelScale(a)),
                (f = d.x * e),
                (g = d.y * e),
                (h = f + d.width * e),
                (i = g + d.height * e),
                (f = Math.floor(f / this.tileSize)),
                (g = Math.floor(g / this.tileSize)),
                (h = Math.ceil(h / this.tileSize)),
                (i = Math.ceil(i / this.tileSize)),
                b >= f && h > b && c >= g && i > c))
            )
              return !0;
          return !1;
        },
      });
  })(OpenSeadragon),
  (function (a) {
    function b(b, e) {
      if (!e || !e.documentElement) throw new Error(a.getString("Errors.Xml"));
      var f = e.documentElement,
        g = f.tagName,
        h = null;
      if ("info" == g)
        try {
          return (
            (h = {
              ns: f.namespaceURI,
            }),
            c(f, h),
            d(b, h)
          );
        } catch (i) {
          throw i instanceof Error ? i : new Error(a.getString("Errors.IIIF"));
        }
      throw new Error(a.getString("Errors.IIIF"));
    }

    function c(b, d, e) {
      var f, g;
      if (3 == b.nodeType && e)
        (g = b.nodeValue.trim()),
          g.match(/^\d*$/) && (g = Number(g)),
          d[e]
            ? (a.isArray(d[e]) || (d[e] = [d[e]]), d[e].push(g))
            : (d[e] = g);
      else if (1 == b.nodeType)
        for (f = 0; f < b.childNodes.length; f++)
          c(b.childNodes[f], d, b.nodeName);
    }

    function d(a, b) {
      return b.image_host && (b.tilesUrl = b.image_host), b;
    }
    (a.IIIFTileSource = function (b) {
      if (
        (a.extend(!0, this, b),
        !(this.height && this.width && this.identifier && this.tilesUrl))
      )
        throw new Error("IIIF required parameters not provided.");
      if (((b.tileSize = this.tile_width), !b.maxLevel)) {
        var c = -1,
          d = this.scale_factors || this.scale_factor;
        if (d instanceof Array)
          for (var e = 0; e < d.length; e++) {
            var f = Number(d[e]);
            !isNaN(f) && f > c && (c = f);
          }
        b.maxLevel =
          0 > c
            ? Number(Math.ceil(Math.log(Math.max(this.width, this.height), 2)))
            : c;
      }
      a.TileSource.apply(this, [b]);
    }),
      a.extend(a.IIIFTileSource.prototype, a.TileSource.prototype, {
        supports: function (a) {
          return (
            (a.ns &&
              "http://library.stanford.edu/iiif/image-api/ns/" == a.ns) ||
            (a.profile &&
              ("http://library.stanford.edu/iiif/image-api/compliance.html#level1" ==
                a.profile ||
                "http://library.stanford.edu/iiif/image-api/compliance.html#level2" ==
                  a.profile ||
                "http://library.stanford.edu/iiif/image-api/compliance.html#level3" ==
                  a.profile ||
                "http://library.stanford.edu/iiif/image-api/compliance.html" ==
                  a.profile)) ||
            (a.documentElement &&
              "info" == a.documentElement.tagName &&
              "http://library.stanford.edu/iiif/image-api/ns/" ==
                a.documentElement.namespaceURI)
          );
        },
        configure: function (c, e) {
          var f, g, h;
          return (
            (g = a.isPlainObject(c) ? d(this, c) : b(this, c)),
            e &&
              !g.tilesUrl &&
              ((f = e.split("/")),
              f.pop(),
              (f = f.join("/")),
              "http" !== e.substring(0, 4) &&
                ((h = location.protocol + "//" + location.host), (f = h + f)),
              (g.tilesUrl = f.replace(c.identifier, ""))),
            g
          );
        },
        getTileUrl: function (a, b, c) {
          var d,
            e,
            f,
            g,
            h,
            i = "0",
            j = "native.jpg",
            k = Math.pow(0.5, this.maxLevel - a),
            l = "pct:" + 100 * k,
            m = Math.ceil(this.width * k),
            n = Math.ceil(this.height * k),
            o = Math.ceil(this.tileSize / k),
            p = Math.ceil(this.tileSize / k);
          return (
            m < this.tile_width && n < this.tile_height
              ? (d = "full")
              : ((e = b * o),
                (f = c * p),
                (g = Math.min(o, this.width - e)),
                (h = Math.min(p, this.height - f)),
                (d = [e, f, g, h].join(","))),
            [this.tilesUrl, this.identifier, d, l, i, j].join("/")
          );
        },
      });
  })(OpenSeadragon),
  (function (a) {
    (a.OsmTileSource = function (b) {
      var c;
      (c = a.isPlainObject(b)
        ? b
        : {
            width: arguments[0],
            height: arguments[1],
            tileSize: arguments[2],
            tileOverlap: arguments[3],
            tilesUrl: arguments[4],
          }),
        (c.width && c.height) || ((c.width = 65572864), (c.height = 65572864)),
        c.tileSize || ((c.tileSize = 256), (c.tileOverlap = 0)),
        c.tilesUrl || (c.tilesUrl = "http://tile.openstreetmap.org/"),
        (c.minLevel = 8),
        a.TileSource.apply(this, [c]);
    }),
      a.extend(a.OsmTileSource.prototype, a.TileSource.prototype, {
        supports: function (a) {
          return a.type && "openstreetmaps" == a.type;
        },
        configure: function (a) {
          return a;
        },
        getTileUrl: function (a, b, c) {
          return this.tilesUrl + (a - 8) + "/" + b + "/" + c + ".png";
        },
      });
  })(OpenSeadragon),
  (function (a) {
    (a.TmsTileSource = function (b) {
      var c;
      c = a.isPlainObject(b)
        ? b
        : {
            width: arguments[0],
            height: arguments[1],
            tileSize: arguments[2],
            tileOverlap: arguments[3],
            tilesUrl: arguments[4],
          };
      var d,
        e = 256 * Math.ceil(c.width / 256),
        f = 256 * Math.ceil(c.height / 256);
      (d = e > f ? e / 256 : f / 256),
        (c.maxLevel = Math.ceil(Math.log(d) / Math.log(2)) - 1),
        (c.tileSize = 256),
        (c.width = e),
        (c.height = f),
        a.TileSource.apply(this, [c]);
    }),
      a.extend(a.TmsTileSource.prototype, a.TileSource.prototype, {
        supports: function (a) {
          return a.type && "tiledmapservice" == a.type;
        },
        configure: function (a) {
          return a;
        },
        getTileUrl: function (a, b, c) {
          var d = this.getNumTiles(a).y - 1;
          return this.tilesUrl + a + "/" + b + "/" + (d - c) + ".png";
        },
      });
  })(OpenSeadragon),
  (function (a) {
    function b(b) {
      var c,
        d,
        e = [];
      for (d = 0; d < b.length; d++)
        (c = b[d]),
          c.height &&
          c.width &&
          c.url &&
          (c.url.toLowerCase().match(/^.*\.(png|jpg|jpeg|gif)$/) ||
            (c.mimetype &&
              c.mimetype.toLowerCase().match(/^.*\/(png|jpg|jpeg|gif)$/)))
            ? e.push({
                url: c.url,
                width: Number(c.width),
                height: Number(c.height),
              })
            : a.console.error(
                "Unsupported image format: %s",
                c.url ? c.url : "<no URL>"
              );
      return e.sort(function (a, b) {
        return a.height - b.height;
      });
    }

    function c(b, c) {
      if (!c || !c.documentElement) throw new Error(a.getString("Errors.Xml"));
      var e,
        f,
        g = c.documentElement,
        h = g.tagName,
        i = null,
        j = [];
      if ("image" == h)
        try {
          for (
            i = {
              type: g.getAttribute("type"),
              levels: [],
            },
              j = g.getElementsByTagName("level"),
              f = 0;
            f < j.length;
            f++
          )
            (e = j[f]),
              i.levels.push({
                url: e.getAttribute("url"),
                width: parseInt(e.getAttribute("width"), 10),
                height: parseInt(e.getAttribute("height"), 10),
              });
          return d(b, i);
        } catch (k) {
          throw k instanceof Error
            ? k
            : new Error("Unknown error parsing Legacy Image Pyramid XML.");
        }
      else {
        if ("collection" == h)
          throw new Error(
            "Legacy Image Pyramid Collections not yet supported."
          );
        if ("error" == h) throw new Error("Error: " + c);
      }
      throw new Error("Unknown element " + h);
    }

    function d(a, b) {
      return b.levels;
    }
    (a.LegacyTileSource = function (c) {
      var d, e, f;
      a.isArray(c) &&
        (d = {
          type: "legacy-image-pyramid",
          levels: c,
        }),
        (d.levels = b(d.levels)),
        d.levels.length > 0
          ? ((e = d.levels[d.levels.length - 1].width),
            (f = d.levels[d.levels.length - 1].height))
          : ((e = 0),
            (f = 0),
            a.console.error("No supported image formats found")),
        a.extend(!0, d, {
          width: e,
          height: f,
          tileSize: Math.max(f, e),
          tileOverlap: 0,
          minLevel: 0,
          maxLevel: d.levels.length > 0 ? d.levels.length - 1 : 0,
        }),
        a.TileSource.apply(this, [d]),
        (this.levels = d.levels);
    }),
      a.extend(a.LegacyTileSource.prototype, a.TileSource.prototype, {
        supports: function (a) {
          return (
            (a.type && "legacy-image-pyramid" == a.type) ||
            (a.documentElement &&
              "legacy-image-pyramid" == a.documentElement.getAttribute("type"))
          );
        },
        configure: function (b) {
          var e;
          return (e = a.isPlainObject(b) ? d(this, b) : c(this, b));
        },
        getLevelScale: function (a) {
          var b = 0 / 0;
          return (
            this.levels.length > 0 &&
              a >= this.minLevel &&
              a <= this.maxLevel &&
              (b = this.levels[a].width / this.levels[this.maxLevel].width),
            b
          );
        },
        getNumTiles: function (b) {
          var c = this.getLevelScale(b);
          return c ? new a.Point(1, 1) : new a.Point(0, 0);
        },
        getTileAtPoint: function () {
          return new a.Point(0, 0);
        },
        getTileUrl: function (a) {
          var b = null;
          return (
            this.levels.length > 0 &&
              a >= this.minLevel &&
              a <= this.maxLevel &&
              (b = this.levels[a].url),
            b
          );
        },
      });
  })(OpenSeadragon),
  (function (a) {
    (a.TileSourceCollection = function (b) {
      var c;
      (c = a.isPlainObject(b)
        ? b
        : {
            tileSize: arguments[0],
            tileSources: arguments[1],
            rows: arguments[2],
            layout: arguments[3],
          }),
        c.layout || (c.layout = "horizontal");
      var d = 0,
        e = 1,
        f = Math.ceil(c.tileSources.length / c.rows),
        g = f >= c.rows ? f : c.rows;
      for (
        "horizontal" == c.layout
          ? ((c.width = c.tileSize * f), (c.height = c.tileSize * c.rows))
          : ((c.height = c.tileSize * f), (c.width = c.tileSize * c.rows)),
          c.tileOverlap = -c.tileMargin,
          c.tilesPerRow = f;
        e < c.tileSize * g;

      )
        (e = 2 * e), d++;
      (c.minLevel = d), a.TileSource.apply(this, [c]);
    }),
      a.extend(a.TileSourceCollection.prototype, a.TileSource.prototype, {
        getTileBounds: function (b, c, d) {
          var e = this.dimensions.times(this.getLevelScale(b)),
            f = this.tileSize * c - this.tileOverlap,
            g = this.tileSize * d - this.tileOverlap,
            h = this.tileSize + 1 * this.tileOverlap,
            i = this.tileSize + 1 * this.tileOverlap,
            j = 1 / e.x;
          return (
            (h = Math.min(h, e.x - f)),
            (i = Math.min(i, e.y - g)),
            new a.Rect(f * j, g * j, h * j, i * j)
          );
        },
        configure: function () {},
        getTileUrl: function () {
          return null;
        },
      });
  })(OpenSeadragon),
  (function (a) {
    function b(b) {
      a.requestAnimationFrame(function () {
        c(b);
      });
    }

    function c(c) {
      var d, e, f;
      c.shouldFade &&
        ((d = a.now()),
        (e = d - c.fadeBeginTime),
        (f = 1 - e / c.fadeLength),
        (f = Math.min(1, f)),
        (f = Math.max(0, f)),
        c.imgGroup && a.setElementOpacity(c.imgGroup, f, !0),
        f > 0 && b(c));
    }

    function d(c) {
      (c.shouldFade = !0),
        (c.fadeBeginTime = a.now() + c.fadeDelay),
        window.setTimeout(function () {
          b(c);
        }, c.fadeDelay);
    }

    function e(b) {
      (b.shouldFade = !1), b.imgGroup && a.setElementOpacity(b.imgGroup, 1, !0);
    }

    function f(b, c) {
      b.element.disabled ||
        (c >= a.ButtonState.GROUP &&
          b.currentState == a.ButtonState.REST &&
          (e(b), (b.currentState = a.ButtonState.GROUP)),
        c >= a.ButtonState.HOVER &&
          b.currentState == a.ButtonState.GROUP &&
          (b.imgHover && (b.imgHover.style.visibility = ""),
          (b.currentState = a.ButtonState.HOVER)),
        c >= a.ButtonState.DOWN &&
          b.currentState == a.ButtonState.HOVER &&
          (b.imgDown && (b.imgDown.style.visibility = ""),
          (b.currentState = a.ButtonState.DOWN)));
    }

    function g(b, c) {
      b.element.disabled ||
        (c <= a.ButtonState.HOVER &&
          b.currentState == a.ButtonState.DOWN &&
          (b.imgDown && (b.imgDown.style.visibility = "hidden"),
          (b.currentState = a.ButtonState.HOVER)),
        c <= a.ButtonState.GROUP &&
          b.currentState == a.ButtonState.HOVER &&
          (b.imgHover && (b.imgHover.style.visibility = "hidden"),
          (b.currentState = a.ButtonState.GROUP)),
        c <= a.ButtonState.REST &&
          b.currentState == a.ButtonState.GROUP &&
          (d(b), (b.currentState = a.ButtonState.REST)));
    }
    (a.ButtonState = {
      REST: 0,
      GROUP: 1,
      HOVER: 2,
      DOWN: 3,
    }),
      (a.Button = function (b) {
        var c = this;
        a.EventHandler.call(this),
          a.extend(
            !0,
            this,
            {
              tooltip: null,
              srcRest: null,
              srcGroup: null,
              srcHover: null,
              srcDown: null,
              clickTimeThreshold: a.DEFAULT_SETTINGS.clickTimeThreshold,
              clickDistThreshold: a.DEFAULT_SETTINGS.clickDistThreshold,
              fadeDelay: 0,
              fadeLength: 2e3,
              onPress: null,
              onRelease: null,
              onClick: null,
              onEnter: null,
              onExit: null,
              onFocus: null,
              onBlur: null,
            },
            b
          ),
          (this.element = b.element || a.makeNeutralElement("button")),
          (this.element.href = this.element.href || "#"),
          b.element ||
            ((this.imgRest = a.makeTransparentImage(this.srcRest)),
            (this.imgGroup = a.makeTransparentImage(this.srcGroup)),
            (this.imgHover = a.makeTransparentImage(this.srcHover)),
            (this.imgDown = a.makeTransparentImage(this.srcDown)),
            this.element.appendChild(this.imgRest),
            this.element.appendChild(this.imgGroup),
            this.element.appendChild(this.imgHover),
            this.element.appendChild(this.imgDown),
            (this.imgGroup.style.position =
              this.imgHover.style.position =
              this.imgDown.style.position =
                "absolute"),
            (this.imgGroup.style.top =
              this.imgHover.style.top =
              this.imgDown.style.top =
                "0px"),
            (this.imgGroup.style.left =
              this.imgHover.style.left =
              this.imgDown.style.left =
                "0px"),
            (this.imgHover.style.visibility = this.imgDown.style.visibility =
              "hidden"),
            a.Browser.vendor == a.BROWSERS.FIREFOX &&
              a.Browser.version < 3 &&
              (this.imgGroup.style.top =
                this.imgHover.style.top =
                this.imgDown.style.top =
                  "")),
          this.addHandler("onPress", this.onPress),
          this.addHandler("onRelease", this.onRelease),
          this.addHandler("onClick", this.onClick),
          this.addHandler("onEnter", this.onEnter),
          this.addHandler("onExit", this.onExit),
          this.addHandler("onFocus", this.onFocus),
          this.addHandler("onBlur", this.onBlur),
          (this.currentState = a.ButtonState.GROUP),
          (this.fadeBeginTime = null),
          (this.shouldFade = !1),
          (this.element.style.display = "inline-block"),
          (this.element.style.position = "relative"),
          (this.element.title = this.tooltip),
          (this.tracker = new a.MouseTracker({
            element: this.element,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            enterHandler: function (b, d, e, g) {
              e
                ? (f(c, a.ButtonState.DOWN), c.raiseEvent("onEnter", c))
                : g || f(c, a.ButtonState.HOVER);
            },
            focusHandler: function (a, b, d, e) {
              this.enterHandler(a, b, d, e), c.raiseEvent("onFocus", c);
            },
            exitHandler: function (b, d, e) {
              g(c, a.ButtonState.GROUP), e && c.raiseEvent("onExit", c);
            },
            blurHandler: function (a, b, d, e) {
              this.exitHandler(a, b, d, e), c.raiseEvent("onBlur", c);
            },
            pressHandler: function () {
              f(c, a.ButtonState.DOWN), c.raiseEvent("onPress", c);
            },
            releaseHandler: function (b, d, e, h) {
              e && h
                ? (g(c, a.ButtonState.HOVER), c.raiseEvent("onRelease", c))
                : e
                ? g(c, a.ButtonState.GROUP)
                : f(c, a.ButtonState.HOVER);
            },
            clickHandler: function (a, b, d) {
              d && c.raiseEvent("onClick", c);
            },
            keyHandler: function (a, b) {
              return 13 === b
                ? (c.raiseEvent("onClick", c), c.raiseEvent("onRelease", c), !1)
                : !0;
            },
          }).setTracking(!0)),
          g(this, a.ButtonState.REST);
      }),
      a.extend(a.Button.prototype, a.EventHandler.prototype, {
        notifyGroupEnter: function () {
          f(this, a.ButtonState.GROUP);
        },
        notifyGroupExit: function () {
          g(this, a.ButtonState.REST);
        },
        disable: function () {
          this.notifyGroupExit(),
            (this.element.disabled = !0),
            a.setElementOpacity(this.element, 0.2, !0);
        },
        enable: function () {
          (this.element.disabled = !1),
            a.setElementOpacity(this.element, 1, !0),
            this.notifyGroupEnter();
        },
      });
  })(OpenSeadragon),
  (function (a) {
    (a.ButtonGroup = function (b) {
      a.extend(
        !0,
        this,
        {
          buttons: [],
          clickTimeThreshold: a.DEFAULT_SETTINGS.clickTimeThreshold,
          clickDistThreshold: a.DEFAULT_SETTINGS.clickDistThreshold,
          labelText: "",
        },
        b
      );
      var c,
        d = this.buttons.concat([]),
        e = this;
      if (
        ((this.element = b.element || a.makeNeutralElement("fieldgroup")),
        !b.group)
      )
        for (
          this.label = a.makeNeutralElement("label"),
            this.element.style.display = "inline-block",
            this.element.appendChild(this.label),
            c = 0;
          c < d.length;
          c++
        )
          this.element.appendChild(d[c].element);
      this.tracker = new a.MouseTracker({
        element: this.element,
        clickTimeThreshold: this.clickTimeThreshold,
        clickDistThreshold: this.clickDistThreshold,
        enterHandler: function () {
          var a;
          for (a = 0; a < e.buttons.length; a++)
            e.buttons[a].notifyGroupEnter();
        },
        exitHandler: function () {
          var a,
            b = arguments.length > 2 ? arguments[2] : null;
          if (!b)
            for (a = 0; a < e.buttons.length; a++)
              e.buttons[a].notifyGroupExit();
        },
        releaseHandler: function () {
          var a,
            b = arguments.length > 3 ? arguments[3] : null;
          if (!b)
            for (a = 0; a < e.buttons.length; a++)
              e.buttons[a].notifyGroupExit();
        },
      }).setTracking(!0);
    }),
      (a.ButtonGroup.prototype = {
        emulateEnter: function () {
          this.tracker.enterHandler();
        },
        emulateExit: function () {
          this.tracker.exitHandler();
        },
      });
  })(OpenSeadragon),
  (function (a) {
    (a.Rect = function (a, b, c, d) {
      (this.x = "number" == typeof a ? a : 0),
        (this.y = "number" == typeof b ? b : 0),
        (this.width = "number" == typeof c ? c : 0),
        (this.height = "number" == typeof d ? d : 0);
    }),
      (a.Rect.prototype = {
        getAspectRatio: function () {
          return this.width / this.height;
        },
        getTopLeft: function () {
          return new a.Point(this.x, this.y);
        },
        getBottomRight: function () {
          return new a.Point(this.x + this.width, this.y + this.height);
        },
        getTopRight: function () {
          return new a.Point(this.x + this.width, this.y);
        },
        getBottomLeft: function () {
          return new a.Point(this.x, this.y + this.height);
        },
        getCenter: function () {
          return new a.Point(this.x + this.width / 2, this.y + this.height / 2);
        },
        getSize: function () {
          return new a.Point(this.width, this.height);
        },
        equals: function (b) {
          return (
            b instanceof a.Rect &&
            this.x === b.x &&
            this.y === b.y &&
            this.width === b.width &&
            this.height === b.height
          );
        },
        rotate: function (b, c) {
          var d,
            e = this.width,
            f = this.height;
          if (((b = (b + 360) % 360), 0 !== b % 90))
            throw new Error(
              "Currently only 0, 90, 180, and 270 degrees are supported."
            );
          if (0 === b)
            return new a.Rect(this.x, this.y, this.width, this.height);
          switch (((c = c || this.getCenter()), b)) {
            case 90:
              (d = this.getBottomLeft()), (e = this.height), (f = this.width);
              break;
            case 180:
              d = this.getBottomRight();
              break;
            case 270:
              (d = this.getTopRight()), (e = this.height), (f = this.width);
              break;
            default:
              d = this.getTopLeft();
          }
          return (d = d.rotate(b, c)), new a.Rect(d.x, d.y, e, f);
        },
        toString: function () {
          return (
            "[" +
            Math.round(100 * this.x) +
            "," +
            Math.round(100 * this.y) +
            "," +
            Math.round(100 * this.width) +
            "x" +
            Math.round(100 * this.height) +
            "]"
          );
        },
      });
  })(OpenSeadragon),
  (function (a) {
    function b(b, c, e) {
      var f = Number(this.element.style.marginLeft.replace("px", "")),
        g = Number(this.element.style.marginTop.replace("px", "")),
        h = Number(this.element.style.width.replace("px", "")),
        i = Number(this.element.style.height.replace("px", "")),
        j = a.getElementSize(this.viewer.canvas);
      return (
        (this.dragging = !0),
        this.element &&
          ("horizontal" == this.scroll
            ? -e.x > 0
              ? f > -(h - j.x) &&
                ((this.element.style.marginLeft = f + 2 * e.x + "px"),
                d(this, j.x, f + 2 * e.x))
              : -e.x < 0 &&
                0 > f &&
                ((this.element.style.marginLeft = f + 2 * e.x + "px"),
                d(this, j.x, f + 2 * e.x))
            : -e.y > 0
            ? g > -(i - j.y) &&
              ((this.element.style.marginTop = g + 2 * e.y + "px"),
              d(this, j.y, g + 2 * e.y))
            : -e.y < 0 &&
              0 > g &&
              ((this.element.style.marginTop = g + 2 * e.y + "px"),
              d(this, j.y, g + 2 * e.y))),
        !1
      );
    }

    function c(b, c, e) {
      var f = Number(this.element.style.marginLeft.replace("px", "")),
        g = Number(this.element.style.marginTop.replace("px", "")),
        h = Number(this.element.style.width.replace("px", "")),
        i = Number(this.element.style.height.replace("px", "")),
        j = a.getElementSize(this.viewer.canvas);
      return (
        this.element &&
          ("horizontal" == this.scroll
            ? e > 0
              ? f > -(h - j.x) &&
                ((this.element.style.marginLeft = f - 60 * e + "px"),
                d(this, j.x, f - 60 * e))
              : 0 > e &&
                0 > f &&
                ((this.element.style.marginLeft = f - 60 * e + "px"),
                d(this, j.x, f - 60 * e))
            : 0 > e
            ? g > j.y - i &&
              ((this.element.style.marginTop = g + 60 * e + "px"),
              d(this, j.y, g + 60 * e))
            : e > 0 &&
              0 > g &&
              ((this.element.style.marginTop = g + 60 * e + "px"),
              d(this, j.y, g + 60 * e))),
        !1
      );
    }

    function d(b, c, d) {
      var e, f, g, h, i, j, k;
      for (
        e = "horizontal" == b.scroll ? b.panelWidth : b.panelHeight,
          f = Math.ceil(c / e) + 5,
          g = Math.ceil((Math.abs(d) + c) / e) + 1,
          f = g - f,
          f = 0 > f ? 0 : f,
          j = f;
        g > j && j < b.panels.length;
        j++
      )
        (k = b.panels[j]),
          k.activePanel ||
            ((h = new a.Viewer({
              id: k.id,
              tileSources: [b.viewer.tileSources[j]],
              element: k,
              navigatorSizeRatio: b.sizeRatio,
              showNavigator: !1,
              mouseNavEnabled: !1,
              showNavigationControl: !1,
              showSequenceControl: !1,
              immediateRender: !0,
              blendTime: 0,
              animationTime: 0,
            })),
            (h.displayRegion = a.makeNeutralElement("textarea")),
            (h.displayRegion.id = k.id + "-displayregion"),
            (h.displayRegion.className = "displayregion"),
            (i = h.displayRegion.style),
            (i.position = "relative"),
            (i.top = "0px"),
            (i.left = "0px"),
            (i.fontSize = "0px"),
            (i.overflow = "hidden"),
            (i.float = "left"),
            (i.cssFloat = "left"),
            (i.styleFloat = "left"),
            (i.zIndex = 999999999),
            (i.cursor = "default"),
            (i.width = b.panelWidth - 4 + "px"),
            (i.height = b.panelHeight - 4 + "px"),
            (h.displayRegion.innerTracker = new a.MouseTracker({
              element: h.displayRegion,
            })),
            k.getElementsByTagName("form")[0].appendChild(h.displayRegion),
            (k.activePanel = !0));
    }

    function e(a) {
      return (
        "horizontal" == this.scroll
          ? (a.element.style.marginBottom = "0px")
          : (a.element.style.marginLeft = "0px"),
        !1
      );
    }

    function f(b) {
      return (
        "horizontal" == this.scroll
          ? (b.element.style.marginBottom =
              "-" + a.getElementSize(b.element).y / 2 + "px")
          : (b.element.style.marginLeft =
              "-" + a.getElementSize(b.element).x / 2 + "px"),
        !1
      );
    }

    function g(a, b) {
      switch (b) {
        case 61:
          return c.call(this, this.tracker, null, 1, null), !1;
        case 45:
          return c.call(this, this.tracker, null, -1, null), !1;
        case 48:
        case 119:
        case 87:
        case 38:
          return c.call(this, this.tracker, null, 1, null), !1;
        case 115:
        case 83:
        case 40:
          return c.call(this, this.tracker, null, -1, null), !1;
        case 97:
        case 37:
          return c.call(this, this.tracker, null, -1, null), !1;
        case 100:
        case 39:
          return c.call(this, this.tracker, null, 1, null), !1;
        default:
          return !0;
      }
    }
    var h = {};
    (a.ReferenceStrip = function (i) {
      var j,
        k,
        l,
        m = this,
        n = i.viewer,
        o = a.getElementSize(n.element);
      for (
        i.id ||
          ((i.id = "referencestrip-" + a.now()),
          (this.element = a.makeNeutralElement("div")),
          (this.element.id = i.id),
          (this.element.className = "referencestrip")),
          i = a.extend(
            !0,
            {
              sizeRatio: a.DEFAULT_SETTINGS.referenceStripSizeRatio,
              position: a.DEFAULT_SETTINGS.referenceStripPosition,
              scroll: a.DEFAULT_SETTINGS.referenceStripScroll,
              clickTimeThreshold: a.DEFAULT_SETTINGS.clickTimeThreshold,
            },
            i,
            {
              element: this.element,
              showNavigator: !1,
              mouseNavEnabled: !1,
              showNavigationControl: !1,
              showSequenceControl: !1,
            }
          ),
          a.extend(this, i),
          h[this.id] = {
            animating: !1,
          },
          this.minPixelRatio = this.viewer.minPixelRatio,
          k = this.element.style,
          k.marginTop = "0px",
          k.marginRight = "0px",
          k.marginBottom = "0px",
          k.marginLeft = "0px",
          k.left = "0px",
          k.bottom = "0px",
          k.border = "0px",
          k.background = "#000",
          k.position = "relative",
          a.setElementOpacity(this.element, 0.8),
          this.viewer = n,
          this.innerTracker = new a.MouseTracker({
            element: this.element,
            dragHandler: a.delegate(this, b),
            scrollHandler: a.delegate(this, c),
            enterHandler: a.delegate(this, e),
            exitHandler: a.delegate(this, f),
            keyHandler: a.delegate(this, g),
          }).setTracking(!0),
          i.width && i.height
            ? ((this.element.style.width = i.width + "px"),
              (this.element.style.height = i.height + "px"),
              n.addControl(this.element, {
                anchor: a.ControlAnchor.BOTTOM_LEFT,
              }))
            : "horizontal" == i.scroll
            ? ((this.element.style.width =
                o.x * i.sizeRatio * n.tileSources.length +
                12 * n.tileSources.length +
                "px"),
              (this.element.style.height = o.y * i.sizeRatio + "px"),
              n.addControl(this.element, {
                anchor: a.ControlAnchor.BOTTOM_LEFT,
              }))
            : ((this.element.style.height =
                o.y * i.sizeRatio * n.tileSources.length +
                12 * n.tileSources.length +
                "px"),
              (this.element.style.width = o.x * i.sizeRatio + "px"),
              n.addControl(this.element, {
                anchor: a.ControlAnchor.TOP_LEFT,
              })),
          this.panelWidth = o.x * this.sizeRatio + 8,
          this.panelHeight = o.y * this.sizeRatio + 8,
          this.panels = [],
          l = 0;
        l < n.tileSources.length;
        l++
      )
        (j = a.makeNeutralElement("div")),
          (j.id = this.element.id + "-" + l),
          (j.style.width = m.panelWidth + "px"),
          (j.style.height = m.panelHeight + "px"),
          (j.style.display = "inline"),
          (j.style.float = "left"),
          (j.style.cssFloat = "left"),
          (j.style.styleFloat = "left"),
          (j.style.padding = "2px"),
          (j.innerTracker = new a.MouseTracker({
            element: j,
            clickTimeThreshold: this.clickTimeThreshold,
            clickDistThreshold: this.clickDistThreshold,
            pressHandler: function (b) {
              b.dragging = a.now();
            },
            releaseHandler: function (b, c, d, e) {
              var f = b.element.id,
                g = Number(f.split("-")[2]),
                h = a.now();
              d &&
                e &&
                b.dragging &&
                h - b.dragging < b.clickTimeThreshold &&
                ((b.dragging = null), n.goToPage(g));
            },
          }).setTracking(!0)),
          this.element.appendChild(j),
          (j.activePanel = !1),
          this.panels.push(j);
      d(this, "vertical" == this.scroll ? o.y : o.y, 0), this.setFocus(0);
    }),
      a.extend(
        a.ReferenceStrip.prototype,
        a.EventHandler.prototype,
        a.Viewer.prototype,
        {
          setFocus: function (b) {
            var c,
              f = a.getElement(this.element.id + "-" + b),
              g = a.getElementSize(this.viewer.canvas),
              h = Number(this.element.style.width.replace("px", "")),
              i = Number(this.element.style.height.replace("px", "")),
              j = -Number(this.element.style.marginLeft.replace("px", "")),
              k = -Number(this.element.style.marginTop.replace("px", ""));
            this.currentSelected !== f &&
              (this.currentSelected &&
                (this.currentSelected.style.background = "#000"),
              (this.currentSelected = f),
              (this.currentSelected.style.background = "#999"),
              "horizontal" == this.scroll
                ? ((c = Number(b) * (this.panelWidth + 3)),
                  c > j + g.x - this.panelWidth
                    ? ((c = Math.min(c, h - g.x)),
                      (this.element.style.marginLeft = -c + "px"),
                      d(this, g.x, -c))
                    : j > c &&
                      ((c = Math.max(0, c - g.x / 2)),
                      (this.element.style.marginLeft = -c + "px"),
                      d(this, g.x, -c)))
                : ((c = Number(b) * (this.panelHeight + 3)),
                  c > k + g.y - this.panelHeight
                    ? ((c = Math.min(c, i - g.y)),
                      (this.element.style.marginTop = -c + "px"),
                      d(this, g.y, -c))
                    : k > c &&
                      ((c = Math.max(0, c - g.y / 2)),
                      (this.element.style.marginTop = -c + "px"),
                      d(this, g.y, -c))),
              (this.currentPage = b),
              a.getElement(f.id + "-displayregion").focus(),
              e.call(this, this.innerTracker));
          },
          update: function () {
            return h[this.id].animating
              ? (a.console.log("image reference strip update"), !0)
              : !1;
          },
        }
      );
  })(OpenSeadragon),
  (function (a) {
    (a.DisplayRect = function (b, c, d, e, f, g) {
      a.Rect.apply(this, [b, c, d, e]),
        (this.minLevel = f),
        (this.maxLevel = g);
    }),
      a.extend(a.DisplayRect.prototype, a.Rect.prototype);
  })(OpenSeadragon),
  (function (a) {
    function b(a, b) {
      return (1 - Math.exp(a * -b)) / (1 - Math.exp(-a));
    }
    (a.Spring = function (b) {
      var c = arguments;
      "object" != typeof b &&
        (b = {
          initial: c.length && "number" == typeof c[0] ? c[0] : 0,
          springStiffness: c.length > 1 ? c[1].springStiffness : 5,
          animationTime: c.length > 1 ? c[1].animationTime : 1.5,
        }),
        a.extend(!0, this, b),
        (this.current = {
          value: "number" == typeof this.initial ? this.initial : 0,
          time: a.now(),
        }),
        (this.start = {
          value: this.current.value,
          time: this.current.time,
        }),
        (this.target = {
          value: this.current.value,
          time: this.current.time,
        });
    }),
      (a.Spring.prototype = {
        resetTo: function (a) {
          (this.target.value = a),
            (this.target.time = this.current.time),
            (this.start.value = this.target.value),
            (this.start.time = this.target.time);
        },
        springTo: function (a) {
          (this.start.value = this.current.value),
            (this.start.time = this.current.time),
            (this.target.value = a),
            (this.target.time = this.start.time + 1e3 * this.animationTime);
        },
        shiftBy: function (a) {
          (this.start.value += a), (this.target.value += a);
        },
        update: function () {
          (this.current.time = a.now()),
            (this.current.value =
              this.current.time >= this.target.time
                ? this.target.value
                : this.start.value +
                  (this.target.value - this.start.value) *
                    b(
                      this.springStiffness,
                      (this.current.time - this.start.time) /
                        (this.target.time - this.start.time)
                    ));
        },
      });
  })(OpenSeadragon),
  (function (a) {
    var b = {};
    (a.Tile = function (a, b, c, d, e, f) {
      (this.level = a),
        (this.x = b),
        (this.y = c),
        (this.bounds = d),
        (this.exists = e),
        (this.url = f),
        (this.loaded = !1),
        (this.loading = !1),
        (this.element = null),
        (this.image = null),
        (this.style = null),
        (this.position = null),
        (this.size = null),
        (this.blendStart = null),
        (this.opacity = null),
        (this.distance = null),
        (this.visibility = null),
        (this.beingDrawn = !1),
        (this.lastTouchTime = 0);
    }),
      (a.Tile.prototype = {
        toString: function () {
          return this.level + "/" + this.x + "_" + this.y;
        },
        drawHTML: function (b) {
          return this.loaded && this.image
            ? (this.element ||
                ((this.element = a.makeNeutralElement("img")),
                (this.element.src = this.url),
                (this.element.style.msInterpolationMode = "nearest-neighbor"),
                (this.style = this.element.style),
                (this.style.position = "absolute")),
              this.element.parentNode != b && b.appendChild(this.element),
              (this.style.top = this.position.y + "px"),
              (this.style.left = this.position.x + "px"),
              (this.style.height = this.size.y + "px"),
              (this.style.width = this.size.x + "px"),
              a.setElementOpacity(this.element, this.opacity),
              void 0)
            : (a.console.warn(
                "Attempting to draw tile %s when it's not yet loaded.",
                this.toString()
              ),
              void 0);
        },
        drawCanvas: function (c) {
          var d,
            e,
            f = this.position,
            g = this.size;
          return this.loaded && (this.image || b[this.url])
            ? ((c.globalAlpha = this.opacity),
              1 == c.globalAlpha &&
                this.url.match(".png") &&
                c.clearRect(f.x + 1, f.y + 1, g.x - 2, g.y - 2),
              b[this.url] ||
                ((e = document.createElement("canvas")),
                (e.width = this.image.width),
                (e.height = this.image.height),
                (d = e.getContext("2d")),
                d.drawImage(this.image, 0, 0),
                (b[this.url] = d),
                (this.image = null)),
              (d = b[this.url]),
              c.drawImage(
                d.canvas,
                0,
                0,
                d.canvas.width,
                d.canvas.height,
                f.x,
                f.y,
                g.x,
                g.y
              ),
              void 0)
            : (a.console.warn(
                "Attempting to draw tile %s when it's not yet loaded.",
                this.toString()
              ),
              void 0);
        },
        unload: function () {
          this.element &&
            this.element.parentNode &&
            this.element.parentNode.removeChild(this.element),
            b[this.url] && delete b[this.url],
            (this.element = null),
            (this.image = null),
            (this.loaded = !1),
            (this.loading = !1);
        },
      });
  })(OpenSeadragon),
  (function (a) {
    (a.OverlayPlacement = {
      CENTER: 0,
      TOP_LEFT: 1,
      TOP: 2,
      TOP_RIGHT: 3,
      RIGHT: 4,
      BOTTOM_RIGHT: 5,
      BOTTOM: 6,
      BOTTOM_LEFT: 7,
      LEFT: 8,
    }),
      (a.Overlay = function (b, c, d) {
        var e;
        (e = a.isPlainObject(b)
          ? b
          : {
              element: b,
              location: c,
              placement: d,
            }),
          (this.element = e.element),
          (this.scales = e.location instanceof a.Rect),
          (this.bounds = new a.Rect(
            e.location.x,
            e.location.y,
            e.location.width,
            e.location.height
          )),
          (this.position = new a.Point(e.location.x, e.location.y)),
          (this.size = new a.Point(e.location.width, e.location.height)),
          (this.style = e.element.style),
          (this.placement =
            e.location instanceof a.Point
              ? e.placement
              : a.OverlayPlacement.TOP_LEFT),
          (this.onDraw = e.onDraw);
      }),
      (a.Overlay.prototype = {
        adjust: function (b, c) {
          switch (this.placement) {
            case a.OverlayPlacement.TOP_LEFT:
              break;
            case a.OverlayPlacement.TOP:
              b.x -= c.x / 2;
              break;
            case a.OverlayPlacement.TOP_RIGHT:
              b.x -= c.x;
              break;
            case a.OverlayPlacement.RIGHT:
              (b.x -= c.x), (b.y -= c.y / 2);
              break;
            case a.OverlayPlacement.BOTTOM_RIGHT:
              (b.x -= c.x), (b.y -= c.y);
              break;
            case a.OverlayPlacement.BOTTOM:
              (b.x -= c.x / 2), (b.y -= c.y);
              break;
            case a.OverlayPlacement.BOTTOM_LEFT:
              b.y -= c.y;
              break;
            case a.OverlayPlacement.LEFT:
              b.y -= c.y / 2;
              break;
            default:
            case a.OverlayPlacement.CENTER:
              (b.x -= c.x / 2), (b.y -= c.y / 2);
          }
        },
        destroy: function () {
          var a = this.element,
            b = this.style;
          a.parentNode &&
            (a.parentNode.removeChild(a),
            a.prevElementParent &&
              ((b.display = "none"), document.body.appendChild(a))),
            (this.onDraw = null),
            (b.top = ""),
            (b.left = ""),
            (b.position = ""),
            this.scales && ((b.width = ""), (b.height = ""));
        },
        drawHTML: function (b, c) {
          var d,
            e,
            f,
            g = this.element,
            h = this.style,
            i = this.scales,
            j = new a.Point(
              c.viewer.drawer.canvas.width / 2,
              c.viewer.drawer.canvas.height / 2
            ),
            k = c.degrees;
          g.parentNode != b &&
            ((g.prevElementParent = g.parentNode),
            (g.prevNextSibling = g.nextSibling),
            b.appendChild(g)),
            i || (this.size = a.getElementSize(g)),
            (d = this.position),
            (e = this.size),
            this.adjust(d, e),
            (d = d.apply(Math.floor)),
            (e = e.apply(Math.ceil)),
            0 !== k &&
              this.scales &&
              ((f = new a.Point(e.x / 2, e.y / 2)),
              (d = d.plus(f).rotate(k, j).minus(f)),
              (e = e.rotate(k, new a.Point(0, 0))),
              (e = new a.Point(Math.abs(e.x), Math.abs(e.y)))),
            this.onDraw
              ? this.onDraw(d, e, g)
              : ((h.left = d.x + "px"),
                (h.top = d.y + "px"),
                (h.position = "absolute"),
                (h.display = "block"),
                i && ((h.width = e.x + "px"), (h.height = e.y + "px")));
        },
        update: function (b, c) {
          (this.scales = b instanceof a.Rect),
            (this.bounds = new a.Rect(b.x, b.y, b.width, b.height)),
            (this.placement =
              b instanceof a.Point ? c : a.OverlayPlacement.TOP_LEFT);
        },
      });
  })(OpenSeadragon),
  (function (a) {
    function b(b, c) {
      var d = null,
        e =
          c.height && c.width
            ? new a.Rect(c.x || c.px, c.y || c.py, c.width, c.height)
            : new a.Point(c.x || c.px, c.y || c.py),
        f = c.id
          ? c.id
          : "openseadragon-overlay-" + Math.floor(1e7 * Math.random());
      return (
        (d = a.getElement(c.id)),
        d || ((d = document.createElement("a")), (d.href = "#/overlay/" + f)),
        (d.id = f),
        a.addClass(d, c.className ? c.className : "openseadragon-overlay"),
        void 0 !== c.px && (e = b.viewport.imageToViewportRectangle(e)),
        c.placement
          ? new a.Overlay({
              element: d,
              location: b.viewport.pointFromPixel(e),
              placement: a.OverlayPlacement[c.placement.toUpperCase()],
              onDraw: c.onDraw,
            })
          : new a.Overlay({
              element: d,
              location: e,
              onDraw: c.onDraw,
            })
      );
    }

    function c(b) {
      (b.updateAgain = !1),
        b.viewer &&
          b.viewer.raiseEvent("update-viewport", {
            viewer: b.viewer,
          });
      for (
        var c,
          e,
          f,
          h,
          i,
          j,
          k,
          m,
          n = null,
          o = !1,
          p = a.now(),
          q = b.viewport.getContainerSize(),
          r = b.viewport.getBounds(!0),
          t = r.getTopLeft(),
          v = r.getBottomRight(),
          w = b.viewport.deltaPixelsFromPoints(b.source.getPixelRatio(0), !0).x,
          x = Math.max(
            b.source.minLevel,
            Math.floor(Math.log(b.minZoomImageRatio) / Math.log(2))
          ),
          y = Math.min(
            Math.abs(b.source.maxLevel),
            Math.abs(Math.floor(Math.log(w / b.minPixelRatio) / Math.log(2)))
          ),
          z = b.viewport.degrees;
        b.lastDrawn.length > 0;

      )
        (c = b.lastDrawn.pop()), (c.beingDrawn = !1);
      if (
        ((b.canvas.innerHTML = ""),
        C &&
          ((b.canvas.width != q.x || b.canvas.height != q.y) &&
            ((b.canvas.width = q.x), (b.canvas.height = q.y)),
          b.context.clearRect(0, 0, q.x, q.y)),
        90 === z || 270 === z)
      ) {
        var A = r.rotate(z);
        (t = A.getTopLeft()), (v = A.getBottomRight());
      }
      if (
        !(
          (!b.wrapHorizontal && (v.x < 0 || t.x > 1)) ||
          (!b.wrapVertical && (v.y < 0 || t.y > b.normHeight))
        )
      ) {
        b.wrapHorizontal ||
          ((t.x = Math.max(t.x, 0)), (v.x = Math.min(v.x, 1))),
          b.wrapVertical ||
            ((t.y = Math.max(t.y, 0)), (v.y = Math.min(v.y, b.normHeight))),
          (x = Math.min(x, y));
        var B;
        for (e = y; e >= x; e--) {
          if (
            ((B = !1),
            (f = b.viewport.deltaPixelsFromPoints(
              b.source.getPixelRatio(e),
              !0
            ).x),
            (!o && f >= b.minPixelRatio) || e == x)
          )
            (B = !0), (o = !0);
          else if (!o) continue;
          if (
            ((h = b.viewport.deltaPixelsFromPoints(
              b.source.getPixelRatio(e),
              !1
            ).x),
            (i = b.viewport.deltaPixelsFromPoints(
              b.source.getPixelRatio(
                Math.max(
                  b.source.getClosestLevel(b.viewport.containerSize) - 1,
                  0
                )
              ),
              !1
            ).x),
            (j = b.immediateRender ? 1 : i),
            (k = Math.min(1, (f - 0.5) / 0.5)),
            (m = j / Math.abs(j - h)),
            (n = d(b, o, B, e, k, m, t, v, p, n)),
            l(b.coverage, e))
          )
            break;
        }
        u(b, b.lastDrawn),
          s(b.viewport, b.overlays, b.container),
          n && (g(b, n, p), (b.updateAgain = !0));
      }
    }

    function d(a, b, c, d, f, g, h, i, j, k) {
      var l,
        m,
        n,
        p,
        q,
        r = a.viewport.pixelFromPoint(a.viewport.getCenter());
      for (
        a.viewer &&
          a.viewer.raiseEvent("update-level", {
            viewer: a.viewer,
            havedrawn: b,
            level: d,
            opacity: f,
            visibility: g,
            topleft: h,
            bottomright: i,
            currenttime: j,
            best: k,
          }),
          n = a.source.getTileAtPoint(d, h),
          p = a.source.getTileAtPoint(d, i),
          q = a.source.getNumTiles(d),
          o(a.coverage, d),
          a.wrapHorizontal || (p.x = Math.min(p.x, q.x - 1)),
          a.wrapVertical || (p.y = Math.min(p.y, q.y - 1)),
          l = n.x;
        l <= p.x;
        l++
      )
        for (m = n.y; m <= p.y; m++) k = e(a, c, b, l, m, d, f, g, r, q, j, k);
      return k;
    }

    function e(a, b, c, d, e, g, h, k, l, o, p, r) {
      var s = f(d, e, g, a.source, a.tilesMatrix, p, o, a.normHeight),
        t = b;
      if (
        (a.viewer &&
          a.viewer.raiseEvent("update-tile", {
            viewer: a.viewer,
            tile: s,
          }),
        n(a.coverage, g, d, e, !1),
        !s.exists)
      )
        return r;
      if (
        (c &&
          !t &&
          (m(a.coverage, g, d, e) ? n(a.coverage, g, d, e, !0) : (t = !0)),
        !t)
      )
        return r;
      if ((i(s, a.source.tileOverlap, a.viewport, l, k), s.loaded)) {
        var u = j(a, s, d, e, g, h, p);
        u && (a.updateAgain = !0);
      } else s.loading || (r = q(r, s));
      return r;
    }

    function f(b, c, d, e, f, g, h, i) {
      var j, k, l, m, n, o;
      return (
        f[d] || (f[d] = {}),
        f[d][b] || (f[d][b] = {}),
        f[d][b][c] ||
          ((j = (h.x + (b % h.x)) % h.x),
          (k = (h.y + (c % h.y)) % h.y),
          (l = e.getTileBounds(d, j, k)),
          (m = e.tileExists(d, j, k)),
          (n = e.getTileUrl(d, j, k)),
          (l.x += (1 * (b - j)) / h.x),
          (l.y += (i * (c - k)) / h.y),
          (f[d][b][c] = new a.Tile(d, b, c, l, m, n))),
        (o = f[d][b][c]),
        (o.lastTouchTime = g),
        o
      );
    }

    function g(a, b, c) {
      a.viewport.collectionMode
        ? ((a.midUpdate = !1), h(a, b, c))
        : (b.loading = a.loadImage(b.url, function (d) {
            h(a, b, c, d);
          }));
    }

    function h(b, c, d, e) {
      var f, g, h, i, j, k, l, m, n, o;
      if (((c.loading = !1), b.midUpdate))
        return (
          a.console.warn("Tile load callback in middle of drawing routine."),
          void 0
        );
      if (e || b.viewport.collectionMode) {
        if (d < b.lastResetTime)
          return (
            a.console.log("Ignoring tile %s loaded before reset: %s", c, c.url),
            void 0
          );
      } else if (
        (a.console.log("Tile %s failed to load: %s", c, c.url), !b.debugMode)
      )
        return (c.exists = !1), void 0;
      if (
        ((c.loaded = !0),
        (c.image = e),
        (f = b.tilesLoaded.length),
        b.tilesLoaded.length >= b.maxImageCacheCount)
      ) {
        for (
          g = Math.ceil(Math.log(b.source.tileSize) / Math.log(2)),
            h = null,
            k = -1,
            o = b.tilesLoaded.length - 1;
          o >= 0;
          o--
        )
          (l = b.tilesLoaded[o]),
            l.level <= b.cutoff ||
              l.beingDrawn ||
              (h
                ? ((m = l.lastTouchTime),
                  (i = h.lastTouchTime),
                  (n = l.level),
                  (j = h.level),
                  (i > m || (m == i && n > j)) && ((h = l), (k = o)))
                : ((h = l), (k = o)));
        h && k >= 0 && (h.unload(), (f = k));
      }
      (b.tilesLoaded[f] = c), (b.updateAgain = !0);
    }

    function i(b, c, d, e, f) {
      var g = b.bounds.getTopLeft(),
        h = b.bounds.getSize(),
        i = d.pixelFromPoint(g, !0),
        j = d.pixelFromPoint(g, !1),
        k = d.deltaPixelsFromPoints(h, !0),
        l = d.deltaPixelsFromPoints(h, !1),
        m = j.plus(l.divide(2)),
        n = e.distanceTo(m);
      c || (k = k.plus(new a.Point(1, 1))),
        (b.position = i),
        (b.size = k),
        (b.distance = n),
        (b.visibility = f);
    }

    function j(a, b, c, d, e, f, g) {
      var h,
        i,
        j = 1e3 * a.blendTime;
      if (
        (b.blendStart || (b.blendStart = g),
        (h = g - b.blendStart),
        (i = j ? Math.min(1, h / j) : 1),
        a.alwaysBlend && (i *= f),
        (b.opacity = i),
        a.lastDrawn.push(b),
        1 == i)
      )
        n(a.coverage, e, c, d, !0);
      else if (j > h) return !0;
      return !1;
    }

    function k(a) {
      (a.tilesMatrix = {}), (a.tilesLoaded = []);
    }

    function l(a, b, c, d) {
      var e, f, g, h;
      if (!a[b]) return !1;
      if (void 0 === c || void 0 === d) {
        e = a[b];
        for (g in e)
          if (e.hasOwnProperty(g)) {
            f = e[g];
            for (h in f) if (f.hasOwnProperty(h) && !f[h]) return !1;
          }
        return !0;
      }
      return void 0 === a[b][c] || void 0 === a[b][c][d] || a[b][c][d] === !0;
    }

    function m(a, b, c, d) {
      return void 0 === c || void 0 === d
        ? l(a, b + 1)
        : l(a, b + 1, 2 * c, 2 * d) &&
            l(a, b + 1, 2 * c, 2 * d + 1) &&
            l(a, b + 1, 2 * c + 1, 2 * d) &&
            l(a, b + 1, 2 * c + 1, 2 * d + 1);
    }

    function n(b, c, d, e, f) {
      return b[c]
        ? (b[c][d] || (b[c][d] = {}), (b[c][d][e] = f), void 0)
        : (a.console.warn(
            "Setting coverage for a tile before its level's coverage has been reset: %s",
            c
          ),
          void 0);
    }

    function o(a, b) {
      a[b] = {};
    }

    function p(a, b) {
      var c;
      for (c = a.length - 1; c >= 0; c--) if (a[c].element == b) return c;
      return -1;
    }

    function q(a, b) {
      return a
        ? b.visibility > a.visibility
          ? b
          : b.visibility == a.visibility && b.distance < a.distance
          ? b
          : a
        : b;
    }

    function r(b, c, d, e) {
      (b.onload = null),
        (b.onabort = null),
        (b.onerror = null),
        e && window.clearTimeout(e),
        a.requestAnimationFrame(function () {
          c(b.src, d ? b : null);
        });
    }

    function s(a, b, c) {
      var d,
        e = b.length;
      for (d = 0; e > d; d++) t(a, b[d], c);
    }

    function t(a, b, c) {
      (b.position = a.pixelFromPoint(b.bounds.getTopLeft(), !0)),
        (b.size = a.deltaPixelsFromPoints(b.bounds.getSize(), !0)),
        b.drawHTML(c, a);
    }

    function u(b, c) {
      var d, e, f, g, h, i, j, k;
      for (d = c.length - 1; d >= 0; d--) {
        if (
          ((e = c[d]),
          b.viewport.collectionMode
            ? ((f = e.x + "/" + e.y),
              (h = b.viewport),
              (k = h.collectionTileSource),
              b.collectionOverlays[f]
                ? ((g = b.collectionOverlays[f]),
                  g.viewport &&
                    (g.viewport.resize(e.size, !0), g.viewport.goHome(!0)))
                : ((i =
                    "horizontal" == k.layout
                      ? e.y + e.x * k.rows
                      : e.x + e.y * k.rows),
                  (j = i < k.tileSources.length ? k.tileSources[i] : null),
                  j &&
                    ((b.collectionOverlays[f] = g =
                      new a.Viewer({
                        element: a.makeNeutralElement("div"),
                        mouseNavEnabled: !1,
                        showNavigator: !1,
                        showSequenceControl: !1,
                        showNavigationControl: !1,
                        tileSources: [j],
                      })),
                    B &&
                      ((g.element.style.border =
                        "1px solid rgba(255,255,255,0.38)"),
                      (g.element.style["-webkit-box-reflect"] =
                        "below 0px -webkit-gradient(linear,left top,left bottom,from(transparent),color-stop(62%,transparent),to(rgba(255,255,255,0.62)))")),
                    b.addOverlay(g.element, e.bounds))))
            : (C
                ? 0 !== b.viewport.degrees
                  ? (v(e, b.canvas, b.context, b.viewport.degrees),
                    e.drawCanvas(b.context),
                    w(e, b.canvas, b.context))
                  : e.drawCanvas(b.context)
                : e.drawHTML(b.canvas),
              (e.beingDrawn = !0)),
          b.debugMode)
        )
          try {
            x(b, e, c.length, d);
          } catch (l) {
            a.console.error(l);
          }
        b.viewer &&
          b.viewer.raiseEvent("tile-drawn", {
            viewer: b.viewer,
            tile: e,
          });
      }
    }

    function v(a, b, c, d) {
      var e = b.width / 2,
        f = b.height / 2,
        g = a.position.x - e,
        h = a.position.y - f;
      c.save(),
        c.translate(e, f),
        c.rotate((Math.PI / 180) * d),
        (a.position.x = g),
        (a.position.y = h);
    }

    function w(a, b, c) {
      var d = b.width / 2,
        e = b.height / 2,
        f = a.position.x + d,
        g = a.position.y + e;
      (a.position.x = f), (a.position.y = g), c.restore();
    }

    function x(a, b, c, d) {
      C &&
        (a.context.save(),
        (a.context.lineWidth = 2),
        (a.context.font = "small-caps bold 13px ariel"),
        (a.context.strokeStyle = a.debugGridColor),
        (a.context.fillStyle = a.debugGridColor),
        a.context.strokeRect(b.position.x, b.position.y, b.size.x, b.size.y),
        0 === b.x &&
          0 === b.y &&
          (a.context.fillText(
            "Zoom: " + a.viewport.getZoom(),
            b.position.x,
            b.position.y - 30
          ),
          a.context.fillText(
            "Pan: " + a.viewport.getBounds().toString(),
            b.position.x,
            b.position.y - 20
          )),
        a.context.fillText(
          "Level: " + b.level,
          b.position.x + 10,
          b.position.y + 20
        ),
        a.context.fillText(
          "Column: " + b.x,
          b.position.x + 10,
          b.position.y + 30
        ),
        a.context.fillText("Row: " + b.y, b.position.x + 10, b.position.y + 40),
        a.context.fillText(
          "Order: " + d + " of " + c,
          b.position.x + 10,
          b.position.y + 50
        ),
        a.context.fillText(
          "Size: " + b.size.toString(),
          b.position.x + 10,
          b.position.y + 60
        ),
        a.context.fillText(
          "Position: " + b.position.toString(),
          b.position.x + 10,
          b.position.y + 70
        ),
        a.context.restore());
    }
    var y = a.getWindowSize(),
      z = a.Browser.vendor,
      A = a.Browser.version,
      B =
        z == a.BROWSERS.FIREFOX ||
        z == a.BROWSERS.OPERA ||
        (z == a.BROWSERS.SAFARI && A >= 4) ||
        (z == a.BROWSERS.CHROME && A >= 2) ||
        (z == a.BROWSERS.IE && A >= 9),
      C =
        B &&
        !(y.x <= 400 || y.y <= 400) &&
        !navigator.appVersion.match("Mobile") &&
        a.isFunction(document.createElement("canvas").getContext);
    (a.Drawer = function (c) {
      var d,
        e = arguments;
      for (
        a.isPlainObject(c) ||
          (c = {
            source: e[0],
            viewport: e[1],
            element: e[2],
          }),
          a.extend(
            !0,
            this,
            {
              viewer: null,
              downloading: 0,
              tilesMatrix: {},
              tilesLoaded: [],
              coverage: {},
              lastDrawn: [],
              lastResetTime: 0,
              midUpdate: !1,
              updateAgain: !0,
              overlays: [],
              collectionOverlays: {},
              maxImageCacheCount: a.DEFAULT_SETTINGS.maxImageCacheCount,
              imageLoaderLimit: a.DEFAULT_SETTINGS.imageLoaderLimit,
              minZoomImageRatio: a.DEFAULT_SETTINGS.minZoomImageRatio,
              wrapHorizontal: a.DEFAULT_SETTINGS.wrapHorizontal,
              wrapVertical: a.DEFAULT_SETTINGS.wrapVertical,
              immediateRender: a.DEFAULT_SETTINGS.immediateRender,
              blendTime: a.DEFAULT_SETTINGS.blendTime,
              alwaysBlend: a.DEFAULT_SETTINGS.alwaysBlend,
              minPixelRatio: a.DEFAULT_SETTINGS.minPixelRatio,
              debugMode: a.DEFAULT_SETTINGS.debugMode,
              timeout: a.DEFAULT_SETTINGS.timeout,
            },
            c
          ),
          this.container = a.getElement(this.element),
          this.canvas = a.makeNeutralElement(C ? "canvas" : "div"),
          this.context = C ? this.canvas.getContext("2d") : null,
          this.normHeight = this.source.dimensions.y / this.source.dimensions.x,
          this.element = this.container,
          this.container.dir = "ltr",
          this.canvas.style.width = "100%",
          this.canvas.style.height = "100%",
          this.canvas.style.position = "absolute",
          this.container.style.textAlign = "left",
          this.container.appendChild(this.canvas),
          d = 0;
        d < this.overlays.length;
        d++
      )
        a.isPlainObject(this.overlays[d])
          ? (this.overlays[d] = b(this, this.overlays[d]))
          : a.isFunction(this.overlays[d]);
    }),
      (a.Drawer.prototype = {
        addOverlay: function (b, c, d, e) {
          var f;
          return (
            (f = a.isPlainObject(b)
              ? b
              : {
                  element: b,
                  location: c,
                  placement: d,
                  onDraw: e,
                }),
            (b = a.getElement(f.element)),
            p(this.overlays, b) >= 0
              ? void 0
              : (this.overlays.push(
                  new a.Overlay({
                    element: b,
                    location: f.location,
                    placement: f.placement,
                    onDraw: f.onDraw,
                  })
                ),
                (this.updateAgain = !0),
                this.viewer &&
                  this.viewer.raiseEvent("add-overlay", {
                    viewer: this.viewer,
                    element: b,
                    location: f.location,
                    placement: f.placement,
                  }),
                this)
          );
        },
        updateOverlay: function (b, c, d) {
          var e;
          return (
            (b = a.getElement(b)),
            (e = p(this.overlays, b)),
            e >= 0 && (this.overlays[e].update(c, d), (this.updateAgain = !0)),
            this.viewer &&
              this.viewer.raiseEvent("update-overlay", {
                viewer: this.viewer,
                element: b,
                location: c,
                placement: d,
              }),
            this
          );
        },
        removeOverlay: function (b) {
          var c;
          return (
            (b = a.getElement(b)),
            (c = p(this.overlays, b)),
            c >= 0 &&
              (this.overlays[c].destroy(),
              this.overlays.splice(c, 1),
              (this.updateAgain = !0)),
            this.viewer &&
              this.viewer.raiseEvent("remove-overlay", {
                viewer: this.viewer,
                element: b,
              }),
            this
          );
        },
        clearOverlays: function () {
          for (; this.overlays.length > 0; )
            this.overlays.pop().destroy(), (this.updateAgain = !0);
          return (
            this.viewer &&
              this.viewer.raiseEvent("clear-overlay", {
                viewer: this.viewer,
              }),
            this
          );
        },
        needsUpdate: function () {
          return this.updateAgain;
        },
        numTilesLoaded: function () {
          return this.tilesLoaded.length;
        },
        reset: function () {
          return (
            k(this),
            (this.lastResetTime = a.now()),
            (this.updateAgain = !0),
            this
          );
        },
        update: function () {
          return (this.midUpdate = !0), c(this), (this.midUpdate = !1), this;
        },
        loadImage: function (b, c) {
          var d,
            e,
            f,
            g = this,
            h = !1;
          return (
            (!this.imageLoaderLimit ||
              this.downloading < this.imageLoaderLimit) &&
              (this.downloading++,
              (d = new Image()),
              (f = function (d, e) {
                if ((g.downloading--, "function" == typeof c))
                  try {
                    c(e);
                  } catch (f) {
                    a.console.error(
                      "%s while executing %s callback: %s",
                      f.name,
                      b,
                      f.message,
                      f
                    );
                  }
              }),
              (d.onload = function () {
                r(d, f, !0, e);
              }),
              (d.onabort = d.onerror =
                function () {
                  r(d, f, !1, e);
                }),
              (e = window.setTimeout(function () {
                r(d, f, !1, e);
              }, this.timeout)),
              (h = !0),
              (d.src = b)),
            h
          );
        },
        canRotate: function () {
          return C;
        },
      });
  })(OpenSeadragon),
  (function (a) {
    (a.Viewport = function (b) {
      var c = arguments;
      c.length &&
        c[0] instanceof a.Point &&
        (b = {
          containerSize: c[0],
          contentSize: c[1],
          config: c[2],
        }),
        b.config && (a.extend(!0, b, b.config), delete b.config),
        a.extend(
          !0,
          this,
          {
            containerSize: null,
            contentSize: null,
            zoomPoint: null,
            viewer: null,
            springStiffness: a.DEFAULT_SETTINGS.springStiffness,
            animationTime: a.DEFAULT_SETTINGS.animationTime,
            minZoomImageRatio: a.DEFAULT_SETTINGS.minZoomImageRatio,
            maxZoomPixelRatio: a.DEFAULT_SETTINGS.maxZoomPixelRatio,
            visibilityRatio: a.DEFAULT_SETTINGS.visibilityRatio,
            wrapHorizontal: a.DEFAULT_SETTINGS.wrapHorizontal,
            wrapVertical: a.DEFAULT_SETTINGS.wrapVertical,
            defaultZoomLevel: a.DEFAULT_SETTINGS.defaultZoomLevel,
            minZoomLevel: a.DEFAULT_SETTINGS.minZoomLevel,
            maxZoomLevel: a.DEFAULT_SETTINGS.maxZoomLevel,
            degrees: a.DEFAULT_SETTINGS.degrees,
          },
          b
        ),
        (this.centerSpringX = new a.Spring({
          initial: 0,
          springStiffness: this.springStiffness,
          animationTime: this.animationTime,
        })),
        (this.centerSpringY = new a.Spring({
          initial: 0,
          springStiffness: this.springStiffness,
          animationTime: this.animationTime,
        })),
        (this.zoomSpring = new a.Spring({
          initial: 1,
          springStiffness: this.springStiffness,
          animationTime: this.animationTime,
        })),
        this.resetContentSize(this.contentSize),
        this.goHome(!0),
        this.update();
    }),
      (a.Viewport.prototype = {
        resetContentSize: function (b) {
          return (
            (this.contentSize = b),
            (this.contentAspectX = this.contentSize.x / this.contentSize.y),
            (this.contentAspectY = this.contentSize.y / this.contentSize.x),
            (this.fitWidthBounds = new a.Rect(0, 0, 1, this.contentAspectY)),
            (this.fitHeightBounds = new a.Rect(
              0,
              0,
              this.contentAspectY,
              this.contentAspectY
            )),
            (this.homeBounds = new a.Rect(0, 0, 1, this.contentAspectY)),
            this.viewer &&
              this.viewer.raiseEvent("reset-size", {
                contentSize: b,
                viewer: this.viewer,
              }),
            this
          );
        },
        getHomeZoom: function () {
          var a = this.contentAspectX / this.getAspectRatio();
          return this.defaultZoomLevel ? this.defaultZoomLevel : a >= 1 ? 1 : a;
        },
        getHomeBounds: function () {
          var b = this.homeBounds.getCenter(),
            c = 1 / this.getHomeZoom(),
            d = c / this.getAspectRatio();
          return new a.Rect(b.x - c / 2, b.y - d / 2, c, d);
        },
        goHome: function (a) {
          return (
            this.viewer &&
              this.viewer.raiseEvent("home", {
                immediately: a,
                viewer: this.viewer,
              }),
            this.fitBounds(this.getHomeBounds(), a)
          );
        },
        getMinZoom: function () {
          var a = this.getHomeZoom(),
            b = this.minZoomLevel
              ? this.minZoomLevel
              : this.minZoomImageRatio * a;
          return Math.min(b, a);
        },
        getMaxZoom: function () {
          var a = this.maxZoomLevel
            ? this.maxZoomLevel
            : (this.contentSize.x * this.maxZoomPixelRatio) /
              this.containerSize.x;
          return Math.max(a, this.getHomeZoom());
        },
        getAspectRatio: function () {
          return this.containerSize.x / this.containerSize.y;
        },
        getContainerSize: function () {
          return new a.Point(this.containerSize.x, this.containerSize.y);
        },
        getBounds: function (b) {
          var c = this.getCenter(b),
            d = 1 / this.getZoom(b),
            e = d / this.getAspectRatio();
          return new a.Rect(c.x - d / 2, c.y - e / 2, d, e);
        },
        getCenter: function (b) {
          var c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k = new a.Point(
              this.centerSpringX.current.value,
              this.centerSpringY.current.value
            ),
            l = new a.Point(
              this.centerSpringX.target.value,
              this.centerSpringY.target.value
            );
          return b
            ? k
            : this.zoomPoint
            ? ((c = this.pixelFromPoint(this.zoomPoint, !0)),
              (d = this.getZoom()),
              (e = 1 / d),
              (f = e / this.getAspectRatio()),
              (g = new a.Rect(k.x - e / 2, k.y - f / 2, e, f)),
              (h = this.zoomPoint
                .minus(g.getTopLeft())
                .times(this.containerSize.x / g.width)),
              (i = h.minus(c)),
              (j = i.divide(this.containerSize.x * d)),
              l.plus(j))
            : l;
        },
        getZoom: function (a) {
          return a
            ? this.zoomSpring.current.value
            : this.zoomSpring.target.value;
        },
        applyConstraints: function (a) {
          var b,
            c,
            d,
            e,
            f,
            g,
            h,
            i = this.getZoom(),
            j = Math.max(Math.min(i, this.getMaxZoom()), this.getMinZoom()),
            k = 0,
            l = 0;
          return (
            i != j && this.zoomTo(j, this.zoomPoint, a),
            (b = this.getBounds()),
            (c = this.visibilityRatio * b.width),
            (d = this.visibilityRatio * b.height),
            (e = b.x + b.width),
            (f = 1 - b.x),
            (g = b.y + b.height),
            (h = this.contentAspectY - b.y),
            this.wrapHorizontal ||
              (c > e && (k = c - e),
              c > f && (k = k ? (k + f - c) / 2 : f - c)),
            this.wrapVertical ||
              (d > g && (l = d - g),
              d > h && (l = l ? (l + h - d) / 2 : h - d)),
            (k || l || a) &&
              ((b.x += k),
              (b.y += l),
              b.width > 1 && (b.x = 0.5 - b.width / 2),
              b.height > this.contentAspectY &&
                (b.y = this.contentAspectY / 2 - b.height / 2),
              this.fitBounds(b, a)),
            this.viewer &&
              this.viewer.raiseEvent("constrain", {
                immediately: a,
                viewer: this.viewer,
              }),
            this
          );
        },
        ensureVisible: function (a) {
          return this.applyConstraints(a);
        },
        fitBounds: function (b, c) {
          var d,
            e,
            f,
            g,
            h = this.getAspectRatio(),
            i = b.getCenter(),
            j = new a.Rect(b.x, b.y, b.width, b.height);
          return (
            j.getAspectRatio() >= h
              ? ((j.height = b.width / h), (j.y = i.y - j.height / 2))
              : ((j.width = b.height * h), (j.x = i.x - j.width / 2)),
            this.panTo(this.getCenter(!0), !0),
            this.zoomTo(this.getZoom(!0), null, !0),
            (d = this.getBounds()),
            (e = this.getZoom()),
            (f = 1 / j.width),
            f == e || j.width == d.width
              ? this.panTo(i, c)
              : ((g = d
                  .getTopLeft()
                  .times(this.containerSize.x / d.width)
                  .minus(j.getTopLeft().times(this.containerSize.x / j.width))
                  .divide(
                    this.containerSize.x / d.width -
                      this.containerSize.x / j.width
                  )),
                this.zoomTo(f, g, c))
          );
        },
        fitVertically: function (a) {
          var b = this.getCenter();
          return (
            this.wrapHorizontal &&
              ((b.x = (1 + (b.x % 1)) % 1),
              this.centerSpringX.resetTo(b.x),
              this.centerSpringX.update()),
            this.wrapVertical &&
              ((b.y =
                (this.contentAspectY + (b.y % this.contentAspectY)) %
                this.contentAspectY),
              this.centerSpringY.resetTo(b.y),
              this.centerSpringY.update()),
            this.fitBounds(this.fitHeightBounds, a)
          );
        },
        fitHorizontally: function (a) {
          var b = this.getCenter();
          return (
            this.wrapHorizontal &&
              ((b.x =
                (this.contentAspectX + (b.x % this.contentAspectX)) %
                this.contentAspectX),
              this.centerSpringX.resetTo(b.x),
              this.centerSpringX.update()),
            this.wrapVertical &&
              ((b.y = (1 + (b.y % 1)) % 1),
              this.centerSpringY.resetTo(b.y),
              this.centerSpringY.update()),
            this.fitBounds(this.fitWidthBounds, a)
          );
        },
        panBy: function (b, c) {
          var d = new a.Point(
            this.centerSpringX.target.value,
            this.centerSpringY.target.value
          );
          return (
            (b = b.rotate(-this.degrees, new a.Point(0, 0))),
            this.panTo(d.plus(b), c)
          );
        },
        panTo: function (a, b) {
          return (
            b
              ? (this.centerSpringX.resetTo(a.x),
                this.centerSpringY.resetTo(a.y))
              : (this.centerSpringX.springTo(a.x),
                this.centerSpringY.springTo(a.y)),
            this.viewer &&
              this.viewer.raiseEvent("pan", {
                center: a,
                immediately: b,
                viewer: this.viewer,
              }),
            this
          );
        },
        zoomBy: function (b, c, d) {
          return (
            c &&
              (c = c.rotate(
                -this.degrees,
                new a.Point(
                  this.centerSpringX.target.value,
                  this.centerSpringY.target.value
                )
              )),
            this.zoomTo(this.zoomSpring.target.value * b, c, d)
          );
        },
        zoomTo: function (b, c, d) {
          return (
            (this.zoomPoint = c instanceof a.Point ? c : null),
            d ? this.zoomSpring.resetTo(b) : this.zoomSpring.springTo(b),
            this.viewer &&
              this.viewer.raiseEvent("zoom", {
                zoom: b,
                refPoint: c,
                immediately: d,
                viewer: this.viewer,
              }),
            this
          );
        },
        setRotation: function (a) {
          if (!this.viewer || !this.viewer.drawer.canRotate()) return this;
          if (((a = (a + 360) % 360), 0 !== a % 90))
            throw new Error(
              "Currently only 0, 90, 180, and 270 degrees are supported."
            );
          return (this.degrees = a), this.viewer.drawer.update(), this;
        },
        getRotation: function () {
          return this.degrees;
        },
        resize: function (b, c) {
          var d = this.getBounds(),
            e = d,
            f = b.x / this.containerSize.x;
          return (
            (this.containerSize = new a.Point(b.x, b.y)),
            c &&
              ((e.width = d.width * f),
              (e.height = e.width / this.getAspectRatio())),
            this.viewer &&
              this.viewer.raiseEvent("resize", {
                newContainerSize: b,
                maintain: c,
                viewer: this.viewer,
              }),
            this.fitBounds(e, !0)
          );
        },
        update: function () {
          var a,
            b,
            c,
            d,
            e = this.centerSpringX.current.value,
            f = this.centerSpringY.current.value,
            g = this.zoomSpring.current.value;
          return (
            this.zoomPoint && (a = this.pixelFromPoint(this.zoomPoint, !0)),
            this.zoomSpring.update(),
            this.zoomPoint && this.zoomSpring.current.value != g
              ? ((b = this.pixelFromPoint(this.zoomPoint, !0)),
                (c = b.minus(a)),
                (d = this.deltaPointsFromPixels(c, !0)),
                this.centerSpringX.shiftBy(d.x),
                this.centerSpringY.shiftBy(d.y))
              : (this.zoomPoint = null),
            this.centerSpringX.update(),
            this.centerSpringY.update(),
            this.centerSpringX.current.value != e ||
              this.centerSpringY.current.value != f ||
              this.zoomSpring.current.value != g
          );
        },
        deltaPixelsFromPoints: function (a, b) {
          return a.times(this.containerSize.x * this.getZoom(b));
        },
        deltaPointsFromPixels: function (a, b) {
          return a.divide(this.containerSize.x * this.getZoom(b));
        },
        pixelFromPoint: function (a, b) {
          var c = this.getBounds(b);
          return a.minus(c.getTopLeft()).times(this.containerSize.x / c.width);
        },
        pointFromPixel: function (a, b) {
          var c = this.getBounds(b);
          return a.divide(this.containerSize.x / c.width).plus(c.getTopLeft());
        },
        viewportToImageCoordinates: function (b, c) {
          return 1 == arguments.length
            ? this.viewportToImageCoordinates(b.x, b.y)
            : new a.Point(
                b * this.contentSize.x,
                c * this.contentSize.y * this.contentAspectX
              );
        },
        imageToViewportCoordinates: function (b, c) {
          return 1 == arguments.length
            ? this.imageToViewportCoordinates(b.x, b.y)
            : new a.Point(
                b / this.contentSize.x,
                c / this.contentSize.y / this.contentAspectX
              );
        },
        imageToViewportRectangle: function (b, c, d, e) {
          var f, g, h;
          return 1 == arguments.length
            ? ((h = b),
              this.imageToViewportRectangle(h.x, h.y, h.width, h.height))
            : ((f = this.imageToViewportCoordinates(b, c)),
              (g = this.imageToViewportCoordinates(d, e)),
              new a.Rect(f.x, f.y, g.x, g.y));
        },
        viewportToImageRectangle: function (b, c, d, e) {
          var f, g, h;
          return 1 == arguments.length
            ? ((h = b),
              this.viewportToImageRectangle(h.x, h.y, h.width, h.height))
            : ((f = this.viewportToImageCoordinates(b, c)),
              (g = this.viewportToImageCoordinates(d, e)),
              new a.Rect(f.x, f.y, g.x, g.y));
        },
      });
  })(OpenSeadragon);
/*
//@ sourceMappingURL=openseadragon.min.js.map
*/
