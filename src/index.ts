import _ from 'lodash'
import { exportCountriesWithTranslations } from './scripts/exportCitiesWithTranslations'

async function main() {
	exportCountriesWithTranslations([
		'PL',
		'EN',
		'IT',
		'ES',
		'FR',
		'DA',
		'DE',
		'SV',
		'NO'
	])
}

void main()
