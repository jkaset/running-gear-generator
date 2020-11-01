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