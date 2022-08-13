const normalRightPoint = document.querySelector(".main-container")?.getBoundingClientRect().right;

let overElms = []
document.querySelectorAll("*").forEach((elm)=>{
  const isOver = elm.getBoundingClientRect().right > normalRightPoint;
  if(isOver) {
    overElms.push(elm);
  }
})


console.log(overElms);

