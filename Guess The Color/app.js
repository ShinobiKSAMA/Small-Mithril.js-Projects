var root = document.getElementById('root')
var colorArray = []
var curColor

function Truth(val) {
    if(val) {
        colorArray = Array(colorArray.length).fill(curColor)
    }
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random())
    var r = num >> 16
    var g = num >> 8 & 255
    var b = num & 255
    return 'rgb(' + r + ', ' + g + ', ' + b + ')'
}

function newSquare(data) {
    return m('div.square', {
        style: `background-color: ${data}`,
        onclick: function() {
            console.log(curColor)
            data == curColor ? Truth(true) : Truth(false)
        }
    })
}

m.mount(
    root, {
    view: function(scope){
        return m('main', [
            m('h1', [
                'The Great',
                m('span#color-display',curColor ? curColor : "RGB"),
                'Guessing Game',
            ]),
            m('div', {id: 'stripe'}, [
                m('button', {
                    class:'mode',
                    onclick: function() {  
                        colorArray = Array.from({length: 3}, (_) => getRandomRgb())
                        curColor = colorArray[(Math.random() * colorArray.length) | 0]
                    }
                }, 'New Easy Game'),
                m('button', {
                    class:'mode',
                    onclick: function() {
                        colorArray = Array.from({length: 6}, (_) => getRandomRgb())
                        curColor = colorArray[(Math.random() * colorArray.length) | 0]
                    }
                }, 'New Hard Game'),
            ]),
            m('div', {id:'container'}, [].concat(
                colorArray.map(data => newSquare(data))
            )),
        ])
    },
})