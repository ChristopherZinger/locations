import z from 'zod'

export type CountryTranslation = {
	LANG: string
	LANG_NAME: string
	COUNTRY_ALPHA2_CODE: string
	COUNTRY_ALPHA3_CODE: string
	COUNTRY_NUMERIC_CODE: string
	COUNTRY_NAME: string
}

export const countryTranslationSchema = z.object({
	LANG: z.string(),
	LANG_NAME: z.string(),
	COUNTRY_ALPHA2_CODE: z.string(),
	COUNTRY_ALPHA3_CODE: z.string(),
	COUNTRY_NUMERIC_CODE: z.string(),
	COUNTRY_NAME: z.string()
})

export function parseCountryTranslations(t: unknown): CountryTranslation[] {
	return z.array(countryTranslationSchema).parse(t)
}
