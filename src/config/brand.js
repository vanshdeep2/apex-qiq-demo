/**
 * The vocabulary layer. Every string in template code that names a side of
 * the client's business, a transaction, or the brand itself reads from here.
 *
 * Currently wired to: Apex Utilities (one-sided / regulated natural gas
 * distribution utility).
 */

export const BRAND = {
  name: 'Apex Utilities',
  logoPath: '/apex-utilities-logo.png',
  logoAlt: 'Apex Utilities',
}

export const MARKETPLACE_TYPE = 'one-sided' // 'two-sided' | 'one-sided'

export const IS_TWO_SIDED = MARKETPLACE_TYPE === 'two-sided'

export const NOUNS = {
  demandSide: 'customer',
  demandSidePlural: 'customers',
  supplySide: null,
  supplySidePlural: null,
  transaction: 'service request',
  transactionPlural: 'service requests',
  currency: 'CAD',
  currencySymbol: 'CA$',
  locale: 'en-CA',
}

export const CONTACT_INDEX_PATH = '/data/apex-utilities_contact_index.json'

export const NOUNS_CAP = {
  demandSide: cap(NOUNS.demandSide),
  demandSidePlural: cap(NOUNS.demandSidePlural),
  supplySide: cap(NOUNS.supplySide),
  supplySidePlural: cap(NOUNS.supplySidePlural),
  transaction: cap(NOUNS.transaction),
}

function cap(s) {
  if (!s) return ''
  return s.replace(/\b\w/g, (c) => c.toUpperCase())
}
