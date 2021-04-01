var root = document.getElementById('root')
var hexVal, rgbVal


var rgbToHex = function(rgbVal) {
  hexVal = ((1 << 24) + (rgbVal[0] << 16) + (rgbVal[1] << 8) + rgbVal[2]).toString(16).slice(1)
}
var hexToRGB = function(hex) {
  rgbVal = hex.match(new RegExp('(.{' + hex.length/3 + '})', 'g')).map(function(l) { return parseInt(hex.length%2 ? l+l : l, 16) }).join(',')
}

m.mount(root, {
  view: function(scope) {
    return m('main', [
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
          rgbVal = this.value
          rgbToHex(rgbVal)
        },
      })
    ])
  }
})