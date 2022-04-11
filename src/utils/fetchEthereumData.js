import { REQ_BODY_DEFAULT_VALUE, REQ_ENDPOINT } from './constants'

async function fetchEthereumData(parameters) {
  try {
    const response = await fetch(REQ_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        ...REQ_BODY_DEFAULT_VALUE,
        ...parameters,
      }),
    })
    if (!response.ok) {
      let error = await response.text()
      throw new Error(error)
    }

    return { data: await response.json() }
  } catch (error) {
    return { error }
  }
}

export default fetchEthereumData
