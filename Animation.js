const obsever = new IntersectionObserver((entries)=>{
  entries.forEach((entry)=>{
    console.log(entry)
    if(entry.isIntersecting){
      entry.target.classList.add("show")
    }else{
      entry.target.classList.remove("show")
    }
  })
})

const hiddenEl = document.querySelectorAll('.hidden')
 hiddenEl.forEach((el)=>obsever.observe(el))