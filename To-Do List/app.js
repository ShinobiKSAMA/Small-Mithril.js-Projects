var root = document.getElementById('root')
var taskArray = ['Sample']
var task

function newTask(data, ind) {
    return m('div.task', [
        m('input[type=checkbox]'),
        m('span.title', data),
        m('button.delete', {
            style : `background-color: transparent`,
            onclick: function() {
                console.log(ind)
                taskArray.splice(ind, 1)
            }
        })
    ])
}

m.mount(root, {
    view: function(scope) {
        return m('main', [
            m('div#inputWrap', [
                m('input[type=text]', {
                    placeholder: 'Enter A Task',
                    id: 'taskInp',
                    value: task,
                    oninput: function() {
                        task = this.value
                    }
                }),
                m('button#addSign', {
                    onclick: function(){
                        if(task) taskArray.push(task)
                        task = ""
                    },
                }),
            ]),
            m('div#taskWrap', [].concat(
                taskArray.map((data, index) => newTask(data, index))
            )),
        ])
    }
})