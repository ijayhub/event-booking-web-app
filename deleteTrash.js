const deleteTrash = document.querySelector('delete-trash')
deleteTrash.addEventListner('click',(e)=>{
  const endpoint=`/event/${deleteTrash.dataset.doc}`
  fetch (endpoint,{
    method:'DELETE'
  })
  .then((res)=>{
    res.json()
  })
  .then((data)=>{
    console.log(data)
  })
  .catch((err)=>{
    console.error(err)
  })
})