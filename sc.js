const panels=document.querySelectorAll('.panel')

panels.forEach(panel=>{
    panel.addEventListener('click',()=>{
        removeActiveClasses()
        panel.classList.add('active')//add active class to the panel that is clicked
    })
})


function removeActiveClasses(){
    panels.forEach(panel=>{
        panel.classList.remove('active')//remove active class from all panels
    })
}
