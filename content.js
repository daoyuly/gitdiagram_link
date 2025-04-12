(function(){
    var ul = document.querySelector('header .AppHeader-globalBar .AppHeader-globalBar-start .AppHeader-context-full nav ul')
    // ul 是否存在
    if (!ul) {
        return
    }
    var url = ul.innerText.replace(/\n/g, '')

    var li = document.createElement('li')
    li.innerHTML = '<a target="_blank" href="https://gitdiagram.com/'+url+'"><img src="./icon-32.png"></a>'
    ul.appendChild(li)
})()