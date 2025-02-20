import { Currency, ETHER, Token } from '@piggycoin/sdk'

export function currencyId(currency: Currency): string {
  if (currency === ETHER) return 'BNB'
  if (currency instanceof Token) return currency.address
  throw new Error('invalid currency')
}
