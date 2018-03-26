const Sass = require("node-sass")
const colorPalette = require("./palette")

const number = function(n) {
  const hasUnit = String(n).match(/(\d+?)(\%)/)
  return hasUnit ? parseFloat(n) / 100 : n
}

const colorFunctions = {
  hsv: function(h, s, v) {
    return colorFunctions.hsva(h, s, v, 1.0)
  },

  hsva: function(h, s, v, a) {
    h = (number(h) % 360) / 360 * 360
    s = number(s)
    v = number(v)
    a = number(a)

    var i, f
    i = Math.floor((h / 60) % 6)
    f = h / 60 - i

    var vs = [v, v * (1 - s), v * (1 - f * s), v * (1 - (1 - f) * s)]
    var perm = [[0, 3, 1], [2, 0, 1], [1, 0, 3], [1, 2, 0], [3, 1, 0], [0, 1, 2]]
    return new Sass.types.Color(vs[perm[i][0]] * 255, vs[perm[i][1]] * 255, vs[perm[i][2]] * 255, a)
  },
}

module.exports = {
  "hsv($h, $s, $v)": function($h, $s, $v) {
    return colorFunctions.hsv($h.getValue(), $s.getValue(), $v.getValue() / 100)
  },
  "colorPalette($color, $index)": function($color, $index) {
    const color = `rgba(${$color.getR()}, ${$color.getG()}, ${$color.getB()}, ${$color.getA()})`
    const index = $index.getValue()
    return Sass.types.String(colorPalette(color, $index.getValue()))
  },
}
