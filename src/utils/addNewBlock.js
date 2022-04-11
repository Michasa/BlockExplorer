import { hexToNumber } from './dataStandardization'
import fetchEthereumData from './fetchEthereumData'
import { createToast, toast } from './Toast'

const generateErrorToast = error => {
  return (
    !toast.isActive('block-generate-error') &&
    createToast({
      id: 'block-generate-error',
      title: 'An error occurred.',
      description: error.message,
      status: 'error',
      duration: 9000,
    })
  )
}

export const fetchNewBlockNumber = async minedBlocks => {
  let { data, error } = await fetchEthereumData({ method: 'eth_blockNumber' })

  if (data) {
    let { result: blockNumber } = data
    if (!minedBlocks.find(block => block.number === hexToNumber(blockNumber))) {
      return blockNumber
    } else {
      !toast.isActive('latest-block') &&
        createToast({
          id: 'latest-block',
          title: 'Already Up-to-Date!',
          description:
            'The latest block avaliable has already been rendered below',
          status: 'warning',
        })
    }
  }

  if (error) generateErrorToast(error)
}

export const fetchNewBlockData = async blockNumber => {
  let { data, error } = await fetchEthereumData({
    method: 'eth_getBlockByNumber',
    params: [blockNumber, false],
  })

  if (data) {
    let { number, transactions, gasUsed, size, gasLimit, timestamp } =
      data.result

    //REVIEW interate over the object instead for next time
    let newBlock = {
      number: hexToNumber(number),
      time: hexToNumber(timestamp),
      transactions: transactions.length,
      averageGasPrice: hexToNumber(gasUsed),
      averageSize: hexToNumber(size),
      fullness: hexToNumber(gasLimit),
    }

    return newBlock
  }

  if (error) generateErrorToast(error)
}
