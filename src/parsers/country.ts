import { z } from 'zod'
import type { Country, CountryWithTranslations } from '../types'

export const countrySchema = z.object({
	name: z.string(),
	'country-code': z.string(), // number
	'alpha-2': z.string(),
	'alpha-3': z.string(),
	region: z.string(), // continent
	'region-code': z.string(), // number "013"
	'sub-region': z.string(),
	'sub-region-code': z.string(),
	'intermediate-region': z.string(),
	'intermediate-region-code': z.string()
})

export function parseCountries(countries: unknown): Country[] {
	return z.array(countrySchema).parse(countries)
}
