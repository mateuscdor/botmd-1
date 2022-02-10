//Anu su

const fs = require('fs')

global.prefix = '.','!','#','','Z'
global.mode = 'publik'
global.packName = 'N A T S U K A W A - ＭＤ'
global.authorName = '✨ 𝙽𝚊𝚝𝚜𝚞𝚔𝚊𝚠𝚊-𝙼𝙳 ✨'
// global.thumb = fs.readFileSync('./thumb.jpeg')
global.ownerNumber = ['687813379', '19855311206', '50775506722']
global.thumbnailUrl = ['https://telegra.ph/file/360673fd0216377b50076.jpg', 'https://telegra.ph/file/87725aa44f572299bbdd1.jpg', 'https://telegra.ph/file/f1c33a88ebfd9144bbc80.jpg']
// global.db = JSON.parse(fs.readFileSync('./db.json'))

global.APIs = {
	zeks: 'https://api.zeks.me/api',
	popcat: 'https://api.popcat.xyz',
	hardianto: 'https://hardianto.xyz/api',
	zacros: 'https://api.zacros-team.com',
	nrtm: 'https://nurutomo.herokuapp.com',
	hadi: 'http://hadi-api.herokuapp.com/api',
	megayaa: 'https://megayaa.herokuapp.com/api'
}
global.APIKeys = {
	'https://api.zeks.me/api': 'Nyarlathotep',
	'https://hardianto.xyz/api': 'hardianto'
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`[UPDATE] '${__filename}'`)
	delete require.cache[file]
	require(file)
})
