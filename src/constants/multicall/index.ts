import { ChainId } from '@piggycoin/sdk'
import MULTICALL_ABI from './abi.json'

const MULTICALL_NETWORKS: { [chainId in ChainId]: string } = {
  [ChainId.BSC_MAINNET]: '0xA2e4607E0DbE2827c448940234129eda2154E023'
}

export { MULTICALL_ABI, MULTICALL_NETWORKS }
