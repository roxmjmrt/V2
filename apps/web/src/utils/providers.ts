import { createPublicClient, http } from 'viem'
import { polygon } from 'viem/chains'

export const polygonRpcProvider = createPublicClient({
  transport: http(),
  chain: polygon,
  batch: {
    multicall: {
      batchSize: 1024 * 200,
      wait: 16,
    },
  },
  pollingInterval: 6_000,
})

export function getEthereumProvider() {
  if (typeof window === 'undefined') return undefined
  
  try {
    // Try to get the provider from window.ethereum
    if (window.ethereum) {
      return window.ethereum
    }
    
    // If window.ethereum is not available, try to get it from providers array
    if (window.ethereum?.providers?.length) {
      // Prioritize MetaMask if available
      const metaMaskProvider = window.ethereum.providers.find((p: any) => p.isMetaMask)
      if (metaMaskProvider) return metaMaskProvider
      
      // Otherwise return the first provider
      return window.ethereum.providers[0]
    }
    
    return undefined
  } catch (error) {
    console.warn('Error accessing ethereum provider:', error)
    return undefined
  }
}

export function isInjectedProvider() {
  try {
    return Boolean(getEthereumProvider())
  } catch (error) {
    return false
  }
}
