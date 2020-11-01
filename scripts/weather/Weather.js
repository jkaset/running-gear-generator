const contentTarget = document.querySelector(".form__zip")
const eventHub = document.querySelector("#container")



const render = () => {
  contentTarget.innerHTML = `
        <label for="zip">Enter your zipcode:</label>
        <input type="text" id="zipcode" placeholder="37206" required>

        <button id="submitZip">Submit</button>
  `
}

export const ZipFormComponent = () => {
  render()
}

eventHub.addEventListener("click", clickEvent => {
  
  if (clickEvent.target.id === "submitZip") {
     //console.log("I clicked button", clickEvent)
 
     const zip = document.querySelector("#zipcode").value
     //console.log(zip)
     const submitButtonClicked = new CustomEvent("zipSubmitted", {
       detail: {
         zipEntered: zip
       }
     })
     eventHub.dispatchEvent(submitButtonClicked)
   }
 
 })

 