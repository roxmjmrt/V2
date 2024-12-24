import { ChainId } from '@pancakeswap/chains'

const COINGECKO = ''
export const PANCAKE_ETH_DEFAULT = ''
export const PANCAKE_ZKSYNC_DEFAULT = ''
export const PANCAKE_POLYGON_ZKEVM_DEFAULT = ''
export const PANCAKE_ARB_DEFAULT = ''
export const PANCAKE_LINEA_DEFAULT = ''
export const PANCAKE_BASE_DEFAULT = ''
export const PANCAKE_OPBNB_DEFAULT = ''

export const PANCAKE_ETH_MM = ''
export const PANCAKE_BSC_MM = ''
export const PANCAKE_ARB_MM = ''

const COINGECKO_ETH = ''
// export const CMC = '' // not updated for a while

const ETH_URLS = []
const BSC_URLS = []
const POLYGON_ZKEVM_URLS = []
const ARBITRUM_URLS = []
const LINEA_URLS = []
const ZKSYNC_URLS = []
const OP_SUPER_CHAIN_URL = ''
const BASE_URLS = []
const OPBNB_URLS = []

// List of official tokens list
export const OFFICIAL_LISTS = []

export const UNSUPPORTED_LIST_URLS: string[] = []
export const WARNING_LIST_URLS: string[] = []

// lower index == higher priority for token import
export const DEFAULT_LIST_OF_LISTS: string[] = []

// default lists to be 'active' aka searched across
export const DEFAULT_ACTIVE_LIST_URLS: string[] = []

export const MULTI_CHAIN_LIST_URLS: { [chainId: number]: string[] } = {
  [ChainId.BSC]: BSC_URLS,
}
