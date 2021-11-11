// localStorage.setItem('key', 'stas')
// localStorage.setItem('keys', 'khm')
// let value = localStorage.getItem('key')

// console.log(value)

// let value1 = localStorage.removeItem('keys') // удаление по ключю

// console.log(value1)

// localStorage.clear()



// let a = document.querySelector('h1')
// let b = 0

// let value = localStorage.getItem('key')


// if(value) {
//   let newValue = +value + 1
//   localStorage.setItem('key', newValue)
// } else {
//   localStorage.setItem('key', 0)
// }


// session storage  Закрывая вкладку оно удаляется

// sessionStorage.setItem('key')
// sessionStorage.getItem('key')
// sessionStorage.clear()
// sessionStorage.remove('key')

// const textarea = document.querySelector('textarea')
// const btn = document.querySelector('button')

// const a = localStorage.getItem('key')

// if(a) {
//   textarea.textContent = a
// }

// textarea.addEventListener('input', e => {
//   console.log(textarea.value)
//   localStorage.setItem('key', textarea.value)

// })

// btn.addEventListener('click', e => {
  
//   localStorage.removeItem('key')
//   textarea.textContent = ''


// })




// JSON

// let obj = {
//   name: 'Stas',
//   age: 20,
//   sports: ['footbol', 'valeibol']
// }

// const a = JSON.stringify(obj)

// console.log(a)
// console.log(JSON.parse(a))

let list = []

const ul = document.querySelector('ul')
const input = document.querySelector('input')
const btn = document.querySelector('button')
let asd = localStorage.getItem('key')




btn.addEventListener('click', e => {
  let obj = {
    text: input.value
  }

 

  list.push(obj)
  listCreate(list)
  localStorage.setItem('key', JSON.stringify(list))
})




function listCreate(list) {
 
  ul.innerHTML = ''
  list.forEach(el => {
    const li = document.createElement('li')
    li.textContent = el.text
    ul.append(li)
  })
}

listCreate(list)

if(asd) {
  list = JSON.parse(asd)
  listCreate(list)
}