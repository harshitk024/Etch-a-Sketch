document.addEventListener("DOMContentLoaded",()=>{

    makeGrids()

    button  = document.querySelector(".size-button")
    button.addEventListener("click",()=>{
       
       let size = parseInt(prompt("Enter the size ( 1 to 100) : "))
       while(size > 100 || size < 0){
         size = parseInt(prompt("Invalid Input ( 1 to 100) : "))
       }
       updateGrids(size)
    })

})





function updateGrids(size){

    let container = document.querySelector(".grids")
    container.innerHTML = ""
    makeGrids(size)
    
}



function makeGrids(size = 16){
      
    let container = document.querySelector(".grids")
    const sizePX = 500

    for(i = 0;i<size;i++){

        div_size = (sizePX/size)
        const divRows = document.createElement("div")
        divRows.setAttribute("style","border-bottom : 1px solid black;display : flex")
        divRows.style.height = `${div_size}px`
        container.append(divRows) 

        for(j = 0;j<size;j++){

            const divCols = document.createElement("div")
            divCols.setAttribute("style","border-right : 1px solid black")
            divCols.classList.add("grid")
            divCols.style.width = `${div_size}px`
            divRows.append(divCols)
        }
    }

    grid = document.querySelectorAll(".grid")

    grid.forEach(element => {
      
        element.addEventListener("mouseover",()=>{
            element.style.backgroundColor = "black"
        })
      
    
    });
}