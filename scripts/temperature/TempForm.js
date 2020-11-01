

const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector("#container")


const render = () => {
  contentTarget.innerHTML = `
    <h2>Do I need a jacket?</h2>
    
        <label for="temp">Current local temperature:</label>
        <input type="text" id="temperature" placeholder="70" required>

        <button id="submitTemp">Submit</button>
  `
}


export const TempFormComponent = () => {
  render()
}


eventHub.addEventListener("click", clickEvent => {
  
 if (clickEvent.target.id === "submitTemp") {
    //console.log("I clicked button", clickEvent)

    const temp = document.querySelector("#temperature").value
    //console.log(temp)
    const submitButtonClicked = new CustomEvent("tempSubmitted", {
      detail: {
        tempEntered: temp
      }
    })
    
    eventHub.dispatchEvent(submitButtonClicked)
  }

})
  