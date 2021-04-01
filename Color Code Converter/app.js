var root = document.getElementById('root')
var hexVal, rgbVal
var color = "#333333"

function chkDigit(vl) {
  vln = Number(vl).toString(16)
  return vln.length > 1 ? vln : "0"+vln
}

var rgbToHex = function(rgb) {
  hexVal = chkDigit(rgb[0])+chkDigit(rgb[1])+chkDigit(rgb[2])
  color = hexVal
}
var hexToRGB = function(hex) {
  rgbVal = hex.match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).join(',')
  color = hex
}

m.mount(root, {
  view: function(scope) {
    return m('main',{
      style: `background-color: #${color};`
    },
    [
      m('input[type=text]', {
        placeholder: "#HexCode",
        id: 'hex',
        value: hexVal,
        oninput: function() {
          hexVal = this.value
          hexToRGB(hexVal)
        },
      }),
      m('input[type=text]', {
        placeholder: "RGB(R, G, B)",
        id: 'rgb',
        value: rgbVal,
        oninput: function() {
          rgbVal = this.value.split(",")
          rgbToHex(rgbVal)
        },
      })
    ])
  }
})