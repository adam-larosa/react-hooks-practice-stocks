
const stocksURL = 'http://localhost:3001/stocks'

const parseJSON = r => r.json()

export const getStocks = () => fetch( stocksURL ).then( parseJSON )