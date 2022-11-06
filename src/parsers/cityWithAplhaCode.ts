import z from 'zod'
import type { City } from './city'
import { citySchema } from './city'

export type CityWithAplha2Code = City & { 'country-alpha-2': string }

const cityWithAplha2CodeSchema = citySchema.extend({
	'country-alpha-2': z.string().length(2)
})

export function parseCityWithAlpha2Code(city: unknown): CityWithAplha2Code {
	return cityWithAplha2CodeSchema.parse(city)
}

export function parseCitiesWithAlpha2Code(
	cities: unknown
): CityWithAplha2Code[] {
	return z.array(cityWithAplha2CodeSchema).parse(cities)
}
