// A mock function to mimic making an async request for data
export const fetchCount = (amount = 1) => {
  return new Promise(resolve => {

    const response = await fetch('http://localhost:8000')
    const data = await response.json()
    resolve({data})

  })
}
