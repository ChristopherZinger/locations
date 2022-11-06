import z from 'zod'
import type { City } from '../types'

export const citySchema = z.object({
	name: z.string().min(1),
	subcountry: z.string(),
	country: z.string().min(1),
	geonameid: z.string().min(1)
})

export function parseCity(city: unknown): City {
	return citySchema.parse(city)
}

export function parseCities(cities: unknown): City[] {
	return z.array(citySchema).parse(cities)
}
