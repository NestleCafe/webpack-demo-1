import x from './x.js'
import img from './assets/37289166.jpg'

const div = document.getElementById('app')
div.innerHTML = `
<img src="${img}">
`


const button = document.createElement('button')
button.innerText= '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        let fn = module.default
        fn()
    }, ()=>{
        console.log('加载失败')
    })
}

div.appendChild(button)