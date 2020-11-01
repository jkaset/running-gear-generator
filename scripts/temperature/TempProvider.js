let temps = []

export const getTemps = () => {
  return fetch("http://localhost:8088/temps") // Fetch from the API
      .then(response => response.json())  // Parse as JSON
      .then(
        parsedTemps => {
          temps = parsedTemps
          // What should happen when we finally have the array?
      })
}

export const useTemps = () => temps.slice()
 