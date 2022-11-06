import fs from 'fs'
import path from 'path'
import { parseCountries } from '../parsers/country'
import { parseCountryTranslations } from '../parsers/countryTranslation'
import { LanguageCodeToName } from '../types'
import { exportDataToFile } from './exportData'

export function exportCountriesWithTranslations(
	languages: (keyof typeof LanguageCodeToName)[]
) {
	const pathToCountriesFile = path.join(__dirname, '../data/countries.json')
	const countries = parseCountries(
		JSON.parse(fs.readFileSync(pathToCountriesFile, 'utf-8'))
	)

	const pathToCountryTranslationsFile = path.join(
		__dirname,
		'../data/countries_translation.json'
	)
	const translations = parseCountryTranslations(
		JSON.parse(fs.readFileSync(pathToCountryTranslationsFile, 'utf-8'))
	)

	const countriesWithTranslations: any[] = []
	for (const country of countries) {
		const countryCodeToTranslations: Record<string, string> = {}
		for (const lang of languages) {
			const translation = translations.find(
				(t) =>
					t.LANG === lang &&
					country['alpha-2'] === t.COUNTRY_ALPHA2_CODE
			)
			if (translation) {
				countryCodeToTranslations[lang] = translation.COUNTRY_NAME
			}
		}

		countriesWithTranslations.push({
			...country,
			translations: countryCodeToTranslations
		})
	}

	console.log(countriesWithTranslations)

	exportDataToFile(
		JSON.stringify(countriesWithTranslations),
		'countries_with_translation.json'
	)
}
