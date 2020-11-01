const contentTarget = document.querySelector(".form")
const eventHub = document.querySelector(".container")

const render = () => {
  contentTarget.innerHTML = `
  <section class="location">
    <h2>What should I wear on my run today?</h2>
    <form action="" class="locationForm">
      <fieldset>
        <label for="temp">Current local temperature:</label>
        <input type="text" id="temperature" placeholder="70°" required>
      </fieldset>
    </form>
    <div class="btnContainer">
      <button id="submit">Submit</button>
    </div>
  </section>
  `
}

export const TempFormComponent = () => {
  render()
}