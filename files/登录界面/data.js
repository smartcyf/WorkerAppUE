﻿$axure.loadCurrentPage({
  "url":"登录界面.html",
  "generationDate":new Date(1421557817523.88),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"1b318fec544f43c78d8c5b0623786402",
    "type":"Axure:Page",
    "name":"登录界面",
    "notes":{
},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
      "a":{
}},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"0a4220265c3b4e388dfe4c81b58335d9",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "size":{
              "width":320,
              "height":480}},
          "adaptiveStyles":{
            "a":{
}},
          "objects":[{
              "id":"c31f6af1142745d49b6bab96c0a15311",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":320,
                  "height":480}},
              "adaptiveStyles":{
                "a":{
}}}],
          "images":{
            "normal~":"images/登录界面/u0.png"}},
{
          "id":"0d70b64422704ccb9c5b5e388d0902a0",
          "label":"",
          "type":"imageBox",
          "styleType":"imageBox",
          "visible":true,
          "style":{
            "size":{
              "width":320,
              "height":480}},
          "adaptiveStyles":{
            "a":{
}},
          "objects":[{
              "id":"fb32268c1354420286cf7a0ac0c2f10a",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "size":{
                  "width":320,
                  "height":480}},
              "adaptiveStyles":{
                "a":{
}}}],
          "images":{
            "normal~":"images/登录界面/u2.png"}},
{
          "id":"943e27a82b624f938904567520a6b291",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":134,
              "y":50},
            "size":{
              "width":53,
              "height":16}},
          "adaptiveStyles":{
            "a":{
              "size":{
                "width":53,
                "height":16}}},
          "objects":[{
              "id":"024b5fe0eb80424997c783f38d2833d6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":134,
                  "y":50},
                "size":{
                  "width":53,
                  "height":16}},
              "adaptiveStyles":{
                "a":{
}}}],
          "images":{
            "normal~":"resources/images/transparent.gif",
            "normal~a":"resources/images/transparent.gif"}},
{
          "id":"c88d07bd043d43d1a80393f329ca7734",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":41,
              "y":155},
            "size":{
              "width":70,
              "height":25}},
          "adaptiveStyles":{
            "a":{
}},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"设置 (动态面板) to 状态1",
                      "panelsToStates":[{
                          "panelPath":["96db011cd61645dcae40fb340f7b94ad"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":1,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "compress":false}}}]}]}]}},
          "tabbable":true},
{
          "id":"e8e070860dea4856b70af7bbc8a7893b",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":111,
              "y":155},
            "size":{
              "width":70,
              "height":25}},
          "adaptiveStyles":{
            "a":{
}},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"设置 (动态面板) to 状态2",
                      "panelsToStates":[{
                          "panelPath":["96db011cd61645dcae40fb340f7b94ad"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":2,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "compress":false}}}]}]}]}},
          "tabbable":true},
{
          "id":"3a8f7c3f448d40309060ba9321952ef9",
          "label":"",
          "type":"button",
          "styleType":"button",
          "visible":true,
          "style":{
            "location":{
              "x":41,
              "y":350},
            "size":{
              "width":239,
              "height":30}},
          "adaptiveStyles":{
            "a":{
}},
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 主页",
                      "target":{
                        "targetType":"page",
                        "url":"主页.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true},
{
          "id":"96db011cd61645dcae40fb340f7b94ad",
          "label":"",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":41,
              "y":190},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
            "a":{
}},
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"94c55fdb38a2416e82a95bf6c25dd929",
              "label":"状态1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"fa59646aba2247f29d0d11b260ff3fe9",
                  "label":"",
                  "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":239,
                      "height":140}},
                  "adaptiveStyles":{
                    "a":{
}},
                  "objects":[{
                      "id":"557f949ead6640fdb630f7d1849b72fd",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":239,
                          "height":140}},
                      "adaptiveStyles":{
                        "a":{
}}}],
                  "images":{
                    "normal~":"images/登录界面/u10.png"}},
{
                  "id":"6b0fe0b0e42c4d6f86174d4d36cbe5c7",
                  "label":"",
                  "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":9,
                      "y":25},
                    "size":{
                      "width":137,
                      "height":25}},
                  "adaptiveStyles":{
                    "a":{
}}},
{
                  "id":"a65bdced02f749429990f79039ae5be2",
                  "label":"",
                  "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":9,
                      "y":75},
                    "size":{
                      "width":220,
                      "height":25}},
                  "adaptiveStyles":{
                    "a":{
}}},
{
                  "id":"a67045c6c3dc4923933aea336035cdbf",
                  "label":"",
                  "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                  "type":"button",
                  "styleType":"button",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":156,
                      "y":25},
                    "size":{
                      "width":73,
                      "height":25}},
                  "adaptiveStyles":{
                    "a":{
}}}]},
{
              "id":"4cba564a3424411880c060e69492b3c0",
              "label":"状态2",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"6f7759210aae4bf78b17500b91b0368a",
                  "label":"",
                  "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":239,
                      "height":140}},
                  "adaptiveStyles":{
                    "a":{
}},
                  "objects":[{
                      "id":"c885d0d61ce845adb61be4961400134c",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":239,
                          "height":140}},
                      "adaptiveStyles":{
                        "a":{
}}}],
                  "images":{
                    "normal~":"images/登录界面/u10.png"}},
{
                  "id":"cf2fa0cbe5e047fcb2b1916a85465d39",
                  "label":"",
                  "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":9,
                      "y":25},
                    "size":{
                      "width":220,
                      "height":25}},
                  "adaptiveStyles":{
                    "a":{
}}},
{
                  "id":"b5a5fe83899e4dc2a31e65173568620d",
                  "label":"",
                  "parentDynamicPanel":"96db011cd61645dcae40fb340f7b94ad",
                  "type":"textBox",
                  "styleType":"textBox",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":9,
                      "y":75},
                    "size":{
                      "width":220,
                      "height":25}},
                  "adaptiveStyles":{
                    "a":{
}}}]}]}]}},
  "masters":{
},
  "objectPaths":{
    "0a4220265c3b4e388dfe4c81b58335d9":{
      "scriptId":"u0"},
    "c31f6af1142745d49b6bab96c0a15311":{
      "scriptId":"u1"},
    "0d70b64422704ccb9c5b5e388d0902a0":{
      "scriptId":"u2"},
    "fb32268c1354420286cf7a0ac0c2f10a":{
      "scriptId":"u3"},
    "943e27a82b624f938904567520a6b291":{
      "scriptId":"u4"},
    "024b5fe0eb80424997c783f38d2833d6":{
      "scriptId":"u5"},
    "c88d07bd043d43d1a80393f329ca7734":{
      "scriptId":"u6"},
    "e8e070860dea4856b70af7bbc8a7893b":{
      "scriptId":"u7"},
    "3a8f7c3f448d40309060ba9321952ef9":{
      "scriptId":"u8"},
    "96db011cd61645dcae40fb340f7b94ad":{
      "scriptId":"u9"},
    "fa59646aba2247f29d0d11b260ff3fe9":{
      "scriptId":"u10"},
    "557f949ead6640fdb630f7d1849b72fd":{
      "scriptId":"u11"},
    "6b0fe0b0e42c4d6f86174d4d36cbe5c7":{
      "scriptId":"u12"},
    "a65bdced02f749429990f79039ae5be2":{
      "scriptId":"u13"},
    "a67045c6c3dc4923933aea336035cdbf":{
      "scriptId":"u14"},
    "6f7759210aae4bf78b17500b91b0368a":{
      "scriptId":"u15"},
    "c885d0d61ce845adb61be4961400134c":{
      "scriptId":"u16"},
    "cf2fa0cbe5e047fcb2b1916a85465d39":{
      "scriptId":"u17"},
    "b5a5fe83899e4dc2a31e65173568620d":{
      "scriptId":"u18"}}});