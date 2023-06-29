const panels = document.querySelectorAll('.panel') /*All helps to select all panels */

panels.forEach(panel => {
    panel.addEventListener('click', () =>{
        removeActiveClasses()
        panel.classList.add('active')
    })
})

function removeActiveClasses(){
    panels.forEach(panel => {
        panel.classList.remove('active')
    })
}