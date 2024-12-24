import { ChainId } from '@pancakeswap/chains'
import { Token } from '@pancakeswap/sdk'

export const MARMOT = {
  [ChainId.BSC]: new Token(
    ChainId.BSC,
    '0xc75fde2bcc1746ba058b4a14c898eae0cdff5a56',
    9,
    'Marmot',
    'Marmot Token',
    'https://marmot.finance',
    'https://quicknode.quicknode-ipfs.com/ipfs/QmQQcoMCJnELekCxPFF6w5Z6YS5P1AM6Tw3SfN5fFizrVa',
  ),
}
