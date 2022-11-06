import fs from 'fs'
import path from 'path'

const PATH_TO_EXPORTS = path.join(__dirname, '../../export')

export function exportDataToFile(data: string, fileName: string) {
	if (!fs.existsSync(PATH_TO_EXPORTS)) {
		fs.mkdirSync(PATH_TO_EXPORTS, { recursive: true })
	}
	fs.writeFileSync(path.join(PATH_TO_EXPORTS, fileName), data, {})
}
