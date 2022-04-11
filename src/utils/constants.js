const { REACT_APP_INFURA_ENDPOINT, REACT_APP_PROJECT_ID_KEY } = process.env

export const REQ_BODY_DEFAULT_VALUE = {
  jsonrpc: '2.0',
  params: [],
  id: 1,
}

export const REQ_ENDPOINT = `${REACT_APP_INFURA_ENDPOINT}/${REACT_APP_PROJECT_ID_KEY}`
