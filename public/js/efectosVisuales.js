 //HITS

const el = document.getElementById('border-container')  
const height = el.clientHeight
const width = el.clientWidth

el.addEventListener('mousemove', (evt) =>{
    const {layerX, layerY} = evt 

    const yRotation = (
        (layerX - width / 2) / width
    ) * 20 
    
    const xRotation = (
        (layerY - height / 2) / height
    ) * 20 

    const string = `
     perspective(500px)
     scale(1.1)
     rotateX(${xRotation}deg) 
     rotateY(${yRotation}deg)
     `;
    el.style.transform = string


})

el.addEventListener('mouseout', () =>{
    el.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0) 
    rotateY(0)`
})

//SERVICE

const la = document.getElementById('border-service')   
const h = la.clientHeight
const w = la.clientWidth

  la.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt 

    const yRotation = (
        (layerX - w / 2) / w
    ) * 20 
    
    const xRotation = (
        (layerY - h / 2) / h
    ) * 20 

    const string = `
     perspective(500px)
     scale(1.1)
     rotateX(${xRotation}deg) 
     rotateY(${yRotation}deg)
     `;
    la.style.transform = string


})

la.addEventListener('mouseout', () =>{
    la.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0) 
    rotateY(0)`
})



//ERROR

const le = document.getElementById('border-error')   
const hi = le.clientHeight
const wi = le.clientWidth

  le.addEventListener('mousemove', (evt) => {
    const {layerX, layerY} = evt 

    const yRotation = (
        (layerX - wi / 2) / wi
    ) * 20 
    
    const xRotation = (
        (layerY - hi / 2) / hi
    ) * 20 

    const string = `
     perspective(500px)
     scale(1.1)
     rotateX(${xRotation}deg) 
     rotateY(${yRotation}deg)
     `;
    le.style.transform = string


})

le.addEventListener('mouseout', () =>{
    le.style.transform = `
    perspective(500px)
    scale(1)
    rotateX(0)
    rotateY(0)`
})
