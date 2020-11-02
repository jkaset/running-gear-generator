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

eventHub.addEventListener("click", event => {
  if (event.target.id === "submitZip") {
    // console.log("I heard a zipcode click!")
    const zipSubmitted = document.querySelector("#zipcode").value 
    const zipEvent = new CustomEvent("zipSubmitted", {
      detail: {
          zipEntered: zipSubmitted
      }
  })
  eventHub.dispatchEvent(zipEvent)
  ZipFormComponent()
}})