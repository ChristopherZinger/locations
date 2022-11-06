import fs from 'fs'
import path from 'path'

export function exportDataToFile(data: string, fileName: string) {
	fs.writeFileSync(path.join(__dirname, '../../export', fileName), data)
}
