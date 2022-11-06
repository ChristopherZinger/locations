import z from 'zod'

export type City = {
	name: string
	subcountry: string
	country: string
	geonameid: string
}

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
