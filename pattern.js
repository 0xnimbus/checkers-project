let pattern = document.querySelectorAll(".square")
// console.log(pattern)
let rows = document.querySelectorAll('.row')

rows.forEach((row, idx) => {
  // console.log(row.children)
  const children = Array.from(row.children)
  if (idx % 2 === 0) {
    children.forEach((child, i) => {
      i % 2 == 0 ?
        child.style.backgroundColor = 'brown'
        : child.style.backgroundColor = 'gray'
    })
  } else {
    children.forEach((child, i) => {
      i % 2 !== 0 ?
        child.style.backgroundColor = 'brown'
        : child.style.backgroundColor = 'gray'
    })
  }
})



