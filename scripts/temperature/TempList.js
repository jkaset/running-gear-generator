
const eventHub = document.querySelector("#container")

eventHub.addEventListener("tempSubmitted", event => {
  //console.log("i hear", event)
  const contentTarget = document.querySelector(".renderGear")
  if (event.detail.tempEntered >= 65) {
    //console.log("No")
    contentTarget.innerHTML = `<p>No</p>`
  } else {
    //console.log("Yes")
    contentTarget.innerHTML = `<p>Yes</p>`
  }
})


