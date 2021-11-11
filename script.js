const input = document.createElement('input'),    // Реализовать через обьект
      btnAdd = document.createElement('button'),
      btnTasks = document.createElement('button'),
      btnDone = document.createElement('button'),
      div = document.createElement('div'),
      ulTasks = document.createElement('ul'),
      ulDone = document.createElement('ul'),
      divWrap = document.createElement('div')

btnAdd.textContent = 'Add Task'
btnTasks.textContent = 'Tasks'
btnDone.textContent = 'Done'
btnTasks.classList.add('btn')
btnDone.classList.add('btn')
btnAdd.classList.add('btn-add')
ulDone.classList.add('hide')
ulDone.classList.add('ul-done')
ulTasks.classList.add('ul-done')
divWrap.classList.add('wrapper')
div.classList.add('task-wrap')
input.placeholder = 'Task'

div.append(btnTasks)
div.append(btnDone)
div.append(ulTasks)
div.append(ulDone)
divWrap.append(input)
divWrap.append(btnAdd)
divWrap.append(div)
document.body.prepend(divWrap)

function deleteTask(list, li) {
  list.childNodes.forEach(el => {
        el.textContent === li.textContent ? el.remove() : null
      })
}

btnAdd.addEventListener('click', e => {
  const li = document.createElement('li')
  li.textContent = input.value
  const span = document.createElement('span')
  span.innerHTML = '<image src="./delete.png" class="img"></image>'
  li.append(span)
  ulTasks.append(li)
  input.value = ''
})

ulTasks.addEventListener('click', e => {
  if(e.target.tagName === 'LI') {
    e.target.classList.toggle('task-done')
    if(e.target.className === 'task-done') {
      let li = document.createElement('li')
      li.textContent = e.target.textContent
      ulDone.append(li)
    } else {
      deleteTask(ulDone, e.target)
    }
  }
  if(e.target.tagName === 'IMG') {
    e.target.closest('li').classList.add('del-li')
    deleteTask(ulDone, e.target.closest('li'))
    setTimeout(() => {                            // не знаю как по другому реализовать удаление элемента
      e.target.closest('li').remove()
    },600)
  }
})

btnDone.addEventListener('click', e => {
  ulTasks.classList.add('hide')
  ulTasks.classList.remove('show')
  ulDone.classList.remove('hide')
  ulDone.classList.add('show')
})

btnTasks.addEventListener('click', e => {
  ulDone.classList.add('hide')
  ulDone.classList.remove('show')
  ulTasks.classList.remove('hide')
  ulTasks.classList.add('show')
})
