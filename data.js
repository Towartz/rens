const fs = require('fs')

global.packname = ''
global.author = '\n\n\n\n\nCreated By Xion Botz\n\n• YouTube : @66XZD\n• Github : @Towartz\n• Telegram : @LexmoonVCT\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n '
global.mess = {
    success: 'Success',
    admin: 'Fitur Khusus Admin Group!',
    botAdmin: 'Saya Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Fitur Khusus Owner',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    wait: 'Loading...'
}
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
