const { REACT_APP_ACTIVE_ENDPOINT } = process.env

export const REQ_BODY_DEFAULT_VALUE = {
  jsonrpc: '2.0',
  method: 'eth_blockNumber',
  params: [],
  id: 1,
}

export const REQ_ENDPOINT = REACT_APP_ACTIVE_ENDPOINT
