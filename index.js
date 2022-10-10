require('./data')
const fs = require('fs')
const util = require('util')
const os = require('os')
const moment = require('moment-timezone')
const speed = require('performance-now')
const { exec } = require("child_process")
const mel = require('kitsune-api')
const { formatp, runtime, jsonformat, isUrl, getRandom, getGroupAdmins } = require('./lib/myFunc')

module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        const body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        const budy = (typeof m.text == 'string' ? m.text : '')
        const prefix = /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : ''
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const botNumber = await client.decodeJid(client.user.id)
        const isOwner = [botNumber, '6283162498175'].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const pushname = m.pushName || "No Name"
        const typq = (m.quoted || m)
        const quoted = (typq.mtype == 'buttonsMessage') ? typq[Object.keys(typq)[1]] : (typq.mtype == 'templateMessage') ? typq.hydratedTemplate[Object.keys(typq.hydratedTemplate)[1]] : (typq.mtype == 'product') ? typq[Object.keys(typq)[0]] : m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const qmsg = (quoted.msg || quoted)
        const text = q = args.join(" ")
        // custom nya sebelah sini coegg
        const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myFunc')
        const deploy = (teks) => {
       client.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})}

        const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
        
        var sticWait = (hehe) => {
ano = fs.readFileSync('./lib/wait.webp')
client.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
}

/*
Custom here
*/
/*const ag = {
         contextInfo: { externalAdReply: { showAdAttribution: true,
            mediaUrl: "https://telegra.ph/file/b86a5ffe992bfc72116d7.jpg",
            mediaType: "PHOTO",
            description: "Yoww", 
            title: 'Hello Sir',
            body: 'Yoww',
            thumbnailUrl: "https://telegra.ph/file/b86a5ffe992bfc72116d7.jpg",
            sourceUrl: "https://enxionxv.go.studio/"
    }
    } }
*/
const ini_mark = `0@s.whatsapp.net`
const ownz = `6283162498175@s.whatsapp.net`

const hariini = moment.tz('Asia/Jakarta').format('dddd, DD MMMM YYYY')
const barat = moment.tz('Asia/Jakarta').format('HH:mm:ss')
const tengah = moment.tz('Asia/Makassar').format('HH:mm:ss')
const timur = moment.tz('Asia/Jayapura').format('HH:mm:ss')

const anjay = (teks) => {
 client.sendMessage(m.chat, { image: Dimage, caption: teks, contextInfo:{"externalAdReply": {"title": `Yowww`,"body": `Selamat ${salam} kak ${pushname}`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://nulled.to`,
thumbnailUrl: 'https://telegra.ph/file/b86a5ffe992bfc72116d7.jpg', 
thumbnail: Dimage,
}
}}, { quoted:m})
}
// Time & Date
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang'
 }
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore'
 }
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang'
 }
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi'
 }
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam'
 }
 
     //Fake
	/*    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: '©Diki', orderTitle: 'memek', sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: '©Diki',jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":'©Diki', "h": `Hmm`,'seconds': '359996400', 'gifPlayback': 'true', 'caption': '©Diki', 'jpegThumbnail': Dimage}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": "YT 66XZD", "caption": '©Diki', 'jpegThumbnail': Dimage}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":`${pushname}`, "h": `Hmm`,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': Dimage}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: 'Diki',jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': 'Diki', 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;Diki,;;;\nFN:Diki\nitem1.TEL;waid=6285875158363:6285875158363\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": '©Diki',"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./image/naze.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		*/
 
//document randomizer
const time = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('HH:mm:ss z')
const wita = moment(Date.now()).tz('Asia/Makassar').locale('id').format('HH:mm:ss z')
const wit = moment(Date.now()).tz('Asia/Jayapura').locale('id').format('HH:mm:ss z')
const salam = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
// Date
moment.tz.setDefault("Asia/Jakarta").locale("id");

const qtod = m.quoted? "true":"false"
global.thumb = fs.readFileSync("./lib/waifu.jpg")

const Dimage = fs.readFileSync ('./image/D.jpg')


const pay = (teks) => {
  client.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount1000: 1, noteMessage: {extendedTextMessage: {text: `hi, There is a Example Of Payment Message`}} }}}}, {})
}


/*
let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
for (let jid of mentionUser) {
let user = global.db.data.users[jid]
if (!user) continue
let afkTime = user.afkTime
if (!afkTime || afkTime < 0) continue
let reason = user.afkReason || ''
m.reply(`
Apakah Ada Yang Ingin Di Tanyakan ${reason ? 'Ada Yang Bisa Saya Bantu? ' + reason : 'Terima Kasih'}
Waktu ${clockString(new Date - afkTime)}
`.trim())
}
if (db.data.users[m.sender].afkTime > -1) {
let user = global.db.data.users[m.sender]
m.reply(`
Hello Saya Bot Hw Mods${user.afkReason ? ' Baiklah ' + user.afkReason : ''}
Selama ${clockString(new Date - user.afkTime)}
`.trim())
user.afkTime = -1
user.afkReason = ''
}
*/

        // Group
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false

        switch (command) {
            /*case "tes": {
               m.reply(`Kenapa Kak @${pushname.split('@')[0]}`)
                }
                break*/
            case 'q': case 'quoted': {
                if (!isOwner) return m.reply(mess.owner)
                if (!m.quoted) return m.reply('Reply Pesannya!!')
                let getQuoted = await client.serializeM(await m.getQuotedObj())
                if (!getQuoted.quoted) return m.reply('Pesan yang anda reply tidak mengandung reply')
                await getQuoted.quoted.copyNForward(m.chat, true)
                }
                break
            case 'sticker': case 's': case 'stickergif': case 'sgif': {
                if (/image/.test(mime)) {
                    m.reply('Wait ⏳')
                    let media = await client.downloadMediaMessage(qmsg)
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    m.reply('Wait ⏳')
                    if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await client.downloadMediaMessage(qmsg)
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }}
                break
            case 'stake': {
                if (/image/.test(mime)) {
                    // m.reply('Wait ⏳')
                    let media = await client.downloadMediaMessage(qmsg)
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                   // m.reply('Wait ⏳')
                    if (qmsg.seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await client.downloadMediaMessage(qmsg)
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                    await fs.unlinkSync(encmedia)
                } else {
                    m.reply(`Kirim/reply gambar/video/gif dengan caption ${prefix + command}\nDurasi Video/Gif 1-9 Detik`)
                }}
                break
            case 'setexif': {
                if (!isOwner) return m.reply(mess.owner)
                if (!text) throw `Example : ${prefix + command} packname|author`
                global.packname = text.split("|")[0]
                global.author = text.split("|")[1]
                m.reply(`Exif berhasil diubah menjadi\n\nPackname : ${global.packname}\nAuthor : ${global.author}`)
                }
                break
            case 'stickerwm': case 'swm': case 'stickergifwm': case 'sgifwm': {
                let [teks1, teks2] = text.split`|`
                if (!teks1) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
                if (!teks2) throw `Kirim/reply image/video dengan caption ${prefix + command} teks1|teks2`
            	m.reply('Wait ⏳')
                if (/image/.test(mime)) {
                    let media = await client.downloadMediaMessage(qmsg)
                    let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else if (/video/.test(mime)) {
                    if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                    let media = await client.downloadMediaMessage(qmsg)
                    let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: teks1, author: teks2 })
                    await fs.unlinkSync(encmedia)
                } else {
                    throw `Kirim Gambar/Video Dengan Caption ${prefix + command}\nDurasi Video 1-9 Detik`
                }}
                break
            case 'toimage': case 'toimg': {
                if (!/webp/.test(mime)) throw `Reply sticker dengan caption *${prefix + command}*`
                m.reply('Wait ⏳')
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    client.sendMessage(m.chat, { image: buffer }, { quoted: m })
                    fs.unlinkSync(ran)
                })}
                break
            case 'ping': case 'botstatus': case 'statusbot': {
                const used = process.memoryUsage()
                const cpus = os.cpus().map(cpu => {
                    cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
                    return cpu
                })
                const cpu = cpus.reduce((last, cpu, _, { length }) => {
                    last.total += cpu.total
                    last.speed += cpu.speed / length
                    last.times.user += cpu.times.user
                    last.times.nice += cpu.times.nice
                    last.times.sys += cpu.times.sys
                    last.times.idle += cpu.times.idle
                    last.times.irq += cpu.times.irq
                    return last
                }, {
                    speed: 0,
                    total: 0,
                    times: {
                        user: 0,
                        nice: 0,
                        sys: 0,
                        idle: 0,
                        irq: 0
                      }
                    })
                let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
                respon = `\nKecepatan Respon ${latensi.toFixed(4)} Second\n ${oldd - neww} Miliseconds\n\nRuntime : ${runtime(process.uptime())}\n\n🗃️ Info Server\nRAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}\n\nNodeJS Memory Usaage\n${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}\n\n${cpus[0] ? `Total CPU Usage\n${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + ' ').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}\nCPU Core(s) Usage (${cpus.length} Core CPU)\n${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- ${(type + ' ').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}`.trim()
                m.reply(respon)
                }
                break
            case 'speedtest': {
                m.reply('Testing Speed...')
                let cp = require('child_process')
                let { promisify } = require('util')
                let exec = promisify(cp.exec).bind(cp)
                let o
                try {
                    o = await exec('python speed.py')
                } catch (e) {
                    o = e
                } finally {
                    let { stdout, stderr } = o
                    if (stdout.trim()) m.reply(stdout)
                    if (stderr.trim()) m.reply(stderr)
                }}
                break
            case 'owner': case 'me': case 'creator': {
                let vcard = 'BEGIN:VCARD\n'
    + 'VERSION:3.0\n' 
    + 'N:;D2VXB;;;'
    + 'FN:Diki\n'
    + 'ORG:𝙸 𝙰𝚖 Diki Ganzz;\n' //Nama Kalian
    + 'item1.TEL;type=CELL;type=VOICE;waid=6283162498175:+62 831-6249-8175\n' //Nomor Kalian
    + 'item1.X-ABLabel: Introvert, Programmers, Modder & Content Creators YouTube \n' //Info Kalian
    + 'item2.X-ABLabel: Subscribe My Channel 66XZD !! \n' //Info Kalian
   // + 'item2.X-ABLabel: No Ambition = No Results \n' //Info Kalian
    + 'item2.EMAIL;type=INTERNET:66xzd.hz@gmail.com\n' // Email Kalian
    + 'item2.X-ABLabel:Email\n'
    + 'item3.LANG:en-US\n'
    + 'item3.URL:https://enxionxv.go.studio/\n' //Ig Kalian Atau Web Kalian
    + 'item3.URL:https://github.com/Towartz\n' //Ig Kalian Atau Web Kalian
    + 'item3.URL:https://t.me/Lexmoon\n' //Ig Kalian Atau Web Kalian
    + 'item3.X-ABLabel:Website\n'
    + 'item4.ADR:;;West Java, Indonesia;;;;\n' //Negara Kalian
    + 'item4.X-ABLabel:Region\n'
    + 'item5.NOTE: No Ambition = No Results\n'
    + 'item6.TITLE:Modder, Programer, Content Creator\n'
    + 'item7.BDAY:20070526\n'
    + 'END:VCARD'
client.sendMessage(m.chat, { contacts: { displayName: '𝙸 𝙰𝚖 Diki', contacts: [{ vcard }] } }, { quoted: m })
            }
break 

            case 'join': {
                if (!isOwner) return m.reply(mess.owner)
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                m.reply(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await client.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'leave': {
                if (!isOwner) return m.reply(mess.owner)
                await client.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'kick': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await client.groupParticipantsUpdate(m.chat, users, 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'add': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await client.groupParticipantsUpdate(m.chat, users, 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'promote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await client.groupParticipantsUpdate(m.chat, users, 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'demote': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                let users = m.mentionedJid[0] ? m.mentionedJid : m.quoted ? [m.quoted.sender] : [text.replace(/[^0-9]/g, '')+'@s.whatsapp.net']
                await client.groupParticipantsUpdate(m.chat, users, 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'block': {
                if (!isOwner) return m.reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await client.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'unblock': {
                if (!isOwner) return m.reply(mess.owner)
                let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
                await client.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await client.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await client.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
                }
                break
            case 'setppbot': {
                if (!isOwner) return m.reply(mess.owner)
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!isOwner) return m.reply(mess.owner)
                if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
                let media = await client.downloadAndSaveMediaMessage(qmsg)
                await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
            case 'tagall': {
                // if (!isOwner) return m.reply(mess.owner)
                // if (!m.isGroup) throw mess.group
                // if (!isBotAdmins) throw mess.botAdmin
                // if (!isAdmins) throw mess.admin
                let teks = `══✪〘 Tag All Participant 〙✪══\n\n➲ Pesan : ${q ? q : 'Tanpa Pesan'}\n\n`
                for (let mem of participants) {
                teks += `=> @${mem.id.split('@')[0]}\n`
                }
                client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
                }
                break
            case 'hidetag': case 'ht': case '"': {
                // if (!isOwner) return m.reply(mess.owner)
                // if (!m.isGroup) throw mess.group
                // if (!isBotAdmins) throw mess.botAdmin
                // if (!isAdmins) throw mess.admin
                client.sendMessage(m.chat, { text : q ? q : 'Hii :D' , mentions: participants.map(a => a.id)})
                }
                break

case 'react':
    {
        reactionMessage = {
            react: {
                text: args[0],
                key: {
                    remoteJid: m.chat,
                    fromMe: false,
                    id: quoted.id
                }
            }
        }
        client.sendMessage(m.chat, reactionMessage)
    }
    break
case 'poll': {
if (!isOwner) return m.reply(mess.owner)
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": "HALO 👋 SAYA BOT D2V CHAN",
"options": [
	{
"optionName": "OP1"
	},
	{
"optionName": "OP2"
	},
	{
"optionName": "OP3"
	},
	{
"optionName": "OP4"
	},
	{
"optionName": "OP5"
	},
	{
"optionName": "OP6"
	},
	{
"optionName": "OP7"
	},
	{
"optionName": "OP8"
	},
	{
"optionName": "OP9"
	},
	{
"optionName": "OP10"
	},
	{
"optionName": "OP11"
	},
	{
"optionName": "OP12"
	}
],
"selectableOptionsCount": 12
	}
}), { userJid: m.chat })
client.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
}
break

case 'once': case 'toonce': { 
if (!isOwner) return m.reply(mess.owner)
if (!quoted) throw 'Reply Image'
if (/image/.test(mime)) {
anu = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(m.chat, {image: {url: anu},viewOnce : true})
} else if (/video/.test(mime)) {
anu = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(m.chat, {video: {url: anu},viewOnce : true})
}
}
break
                // Ini buat slef Dan public
            case 'public': case 'pub': {
                if (!isOwner) return m.reply(mess.owner)
                client.public = true
                m.reply('Sukse Change To Public Usage')
            }
            break
            case 'self': {
                if (!isOwner) return m.reply(mess.owner)
                client.public = false
                m.reply('Sukses Change To Self Usage')
            }
            break
            case 'bgz': {
                if (!isOwner) return m.reply(mess.owner)
                pay('Hi Tuan Ku')
            }
            break
            case 'bgz1': {
                if (!isOwner) return m.reply(mess.owner)
                var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                "requestPaymentMessage": {
                "currencyCode": "IDR",
                "Amount1000": "10000000",
                }}), { userJid: m.chat})
                client.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
                //m.reply(``)
                }
                break
          
           
           


case 'ppb': {
if (!isOwner) return m.reply(mess.owner)
m.reply(mess.wait)
if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
var media = await client.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./lib/myFunc.js")
var { img } = await generateProfilePicture(media)
await client.query({ tag: 'iq',attrs: { to: botNumber, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await client.updateProfilePicture(botNumber, { url: media }) }
m.reply(mess.success)
} catch { m.reply('Failed to Change Photo Profile') }
}
break
case 'ppg': {
if (!isOwner) return m.reply(mess.owner)
m.reply(mess.wait)
if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
let media = await client.downloadAndSaveMediaMessage(quoted)
try {
if (args[0] == "/full") {
const { generateProfilePicture } = require("./lib/myFunc.js")
var { img } = await generateProfilePicture(media)
await client.query({ tag: 'iq',attrs: { to: m.chat, type:'set', xmlns: 'w:profile:picture'}, content: [{ tag: 'picture', attrs: { type: 'image' }, content: img }]})
} else { await client.updateProfilePicture(m.chat, { url: media }) }
m.reply(mess.success)
} catch { m.reply('Failed to Change Group Profile Photo') }
}
break

case 'yoo': {
if (!isOwner) return m.reply(mess.owner)
client.sendMessage(m.chat, { image: Dimage, caption: ` Yo What's Up My Owner`,
contextInfo:{
forwardingScore: 9999,
isForwarded: false,
externalAdReply: {"title": `Diki Ganzzz`,"body": `Yow, What's up??`,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: `https://wa.me/6283162498175`,
thumbnailUrl: `https://telegra.ph/file/b86a5ffe992bfc72116d7.jpg`, 
thumbnail: Dimage,
}
}})

//m.reply('Yowww',  { userJid: m.chat, quoted: ag })


}
break

case 'yow': {
            	//if (!text) throw 'Yow'
                //let anu = await fetchJson(`https://api.akuari.my.id/short/${command}?link=${text}`)
                let buttons = [
                    {buttonId: `hehehe`, buttonText: {displayText: 'Yo, Whats up?'}, type: 1},
                    {buttonId: `me`, buttonText: {displayText: 'Owner'}, type: 1}
                ]
                let buttonMessage = {
                    text: 'Yow',
                    footer: '© Diki',
                    buttons: buttons,
                    headerType: 2
                }
                client.sendMessage(m.chat, buttonMessage)
            }
            break

case 'payment': {
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"requestFrom": '6283162498175@s.whatsapp.net',
"expiryTimestamp": "8000",
"amount1000": "999000",
"noteMessage": {
"extendedTextMessage": {
"text": `
hi, There is a Example Of Payment Message`,
}
}}}), { userJid: m.chat, quoted: m })
client.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

case 'yo': {
let me = m.sender + '@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"requestFrom": '6283162498175@s.whatsapp.net',
"expiryTimestamp": "8000",
"amount1000": "9999999999000",
"noteMessage": {
"extendedTextMessage": {
"text": `
Yo, Whats up?? @${me.split('@')[0]} `,
}
}}}), { userJid: m.chat, quoted: m })
client.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

case 'tes': {
let me = m.sender + '@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"requestFrom": '6283162498175@s.whatsapp.net',
"expiryTimestamp": "8000",
"amount1000": "999000",
"noteMessage": {
"extendedTextMessage": {
"text": `
Kenapa kak?? ${pushname}`,
}
}}}), { userJid: m.chat, quoted: m })
client.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

case 'menu': case 'help': {
let me = m.sender + '@s.whatsapp.net'
var requestPaymentMessage = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "INR",
"requestFrom": '6283162498175@s.whatsapp.net',
"expiryTimestamp": "8000",
"amount1000": "9999999999000",
"noteMessage": {
"extendedTextMessage": {
"text": `
Selamat ${salam} Kak ${pushname}
╭──❍「 𝙄𝙉𝙁𝙊 𝙐𝙎𝙀𝙍 」❍
├ *Nama* : ${pushname}
├ *Number* : @${me.split('@')[0]}
├ *Limit* :  ♾Infinity
╰──❍

╭──❍「 𝙄𝙉𝙁𝙊 𝘽𝙊𝙏 」❍
├ *Nama Bot* : ${pushname}
├ *Powered* : @${ini_mark.split('@')[0]}
├ *Owner* : @${ownz.split('@')[0]}
├ *Mode* : ${client.public ? 'Public' : `Self`}
├ *Prefix* :「 NO-PREFIX 」
╰──❍

╭──❍「 𝙄𝙉𝘿𝙊𝙉𝙀𝙎𝙄𝘼𝙉 𝙏𝙄𝙈𝙀 」❍
├ *Hari Ini* : ${hariini}
├ *Wib* : ${barat} WIB
├ *Wita* : ${tengah} WITA
├ *Wit* : ${timur} WIT
╰──❍`,
}
}}}), { userJid: m.chat, quoted: m })
client.relayMessage(m.chat, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
break

case 'minggat':{
                //f (!isCreator) throw mess.owner
                if (!args[0]) throw `Mana ID Groupnya?`
                 m.reply(`Loading...`)
                 let gcpp = args[0]                
                 await client.groupLeave(gcpp)
             }
            break


    

case 'play': case 'ytplay': {
                if (!text) throw `Example : ${prefix + command} story wa anime`
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                let buttons = [
                    {buttonId: `ytmp3 ${anu.url}`, buttonText: {displayText: '♫ Audio'}, type: 1},
                    {buttonId: `ytmp4 ${anu.url}`, buttonText: {displayText: '► Video'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: anu.thumbnail },
                    caption: `
⭔ Title : ${anu.title}
⭔ Ext : Search
⭔ ID : ${anu.videoId}
⭔ Duration : ${anu.timestamp}
⭔ Viewers : ${anu.views}
⭔ Upload At : ${anu.ago}
⭔ Author : ${anu.author.name}
⭔ Channel : ${anu.author.url}
⭔ Description : ${anu.description}
⭔ Url : ${anu.url}`,
                    footer: client.user.name,
                    buttons: buttons,
                    headerType: 4
                }
                client.sendMessage(m.chat, buttonMessage, { quoted: m })
            }
            break
	    case 'ytmp3': case 'ytaudio': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
               m.reply(`Loading...`)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 10000000000) return m.reply('File Melebihi Batas '+util.format(media))
           //    client.sendMessage(m.chat, media.thumb, `➣ Title : ${media.title}\n➣ File Size : ${media.filesizeF}\n➣ Url : ${isUrl(text)}\n➣ Ext : MP3\n➣ Resolusi : ${args[1] || '128kbps'}`, m)
            //  client.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
                client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'ytmp4': case 'ytvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=%27 720p`
                let quality = args[1] ? args[1] : '720p'
                let media = await ytv(text, quality)
                if (media.filesize >= 10000000000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '720p'}` }, { quoted: m })
            }
            break
case 'github': case 'gh': case 'githubdl': case 'ghdl':{
        let regex = /(?:https?|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
	if (!args[0]) throw 'Ex: https://github.com/Nurutomo/wabot-aq' 
	if (!regex.test(args[0])) throw 'Invalid URL'
	let [, user, repo] = args[0].match(regex) || []
	repo = repo.replace(/.git$/, '')
	let url = `https://api.github.com/repos/${user}/${repo}/zipball`
	let res = await fetch(url, { method: 'head' })
	if (res.status !== 200) throw res.statusText
	let fileName = res.headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
	let mimetype = res.headers.get('content-type')
	await m.reply('_In progress, please wait..._')
	client.sendMessage(m.chat, { document: { url }, fileName, mimetype }, { quoted: m })
	}
        break


        case 'mediafire': case 'md':{
        let resd = await mediafireDl(text)
        if (!text) throw `Linknya mana ?`
        if (!isUrl(args[0]) && !args[0].includes('mediafire')) throw m.reply(mess.error)
       m.reply(`Loading...`)
        if (mediafireDl.size >= 300000) return m.reply(`*Nama :* ${resd[0].nama}
        *Ukuran :* ${resd[0].size}
        *Link :* ${resd[0].link}

        _Maaf size melebihi batas maksimal, Silahkan klik link diatas_`)
        m.reply(`Loading...`)       
      let resultd = `*Nama :* ${resd[0].nama}
        *Ukuran :* ${resd[0].size}

        _File sedang dikirim, Silahkan tunggu bebepemuda menit_`
        m.reply(resultd)
        client.sendMessage(m.chat, { document: { url: resd[0].link }, mimetype: `${resd[0].mime}`, fileName: `${resd[0].nama}` }, { quoted: m }) 
        }    
        break

        case 'zip': case 'zippydl': case 'zippy': case 'zippyshare':{
        let zsExtract = require('zs-extract')

        if (!args[0]) throw `Uhm...url nya mana?\n\n *Example:* ${prefix + command} https://www4.zippyshare.com/v/uBGCbNHt/file.html`
        let resk = await zsExtract.extract(args[0])
        let { download, filename } = resk
        m.reply(JSON.stringify(resk, null, 2))
        m.reply('Mohon tunggu selama *5 menit* sedang mendownload file dari _zippyshare_\n\nMinimal File *100MB* jika lebih dari yang ditentukan, Aine tidak akan mengirimkan file..!!')
 

        client.sendFile(m.chat, download, filename, filename, m)
        }
        break
	    case 'getmusic': {
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendImage(m.chat, media.thumb, `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}`, m)
                client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp3` }, { quoted: m })
            }
            break
            case 'getvideo': {
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                let quality = args[1] ? args[1] : '360p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${urls[text - 1]}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '360p'}` }, { quoted: m })
            }
            break


case 'setcmd': {
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                if (!text) throw `Untuk Command Apa?`
                let hash = m.quoted.fileSha256.toString('base64')
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
                global.db.data.sticker[hash] = {
                    text,
                    mentionedJid: m.mentionedJid,
                    creator: m.sender,
                    at: + new Date,
                    locked: false,
                }
                m.reply(`Done!`)
            }
            break
            case 'delcmd': {
                let hash = m.quoted.fileSha256.toString('base64')
                if (!hash) throw `Tidak ada hash`
                if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
                delete global.db.data.sticker[hash]
                m.reply(`Done!`)
            }
            break
            case 'listcmd': {
                let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
                client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'lockcmd': {
                if (!isOwner) return m.reply(mess.owner)
                if (!m.quoted) throw 'Reply Pesan!'
                if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
                let hash = m.quoted.fileSha256.toString('base64')
                if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
                global.db.data.sticker[hash].locked = !/^un/i.test(command)
                m.reply('Done!')
            }
            break







//=================================================//
case 'getname': {
if (!isOwner) return m.reply(mess.owner)
if (qtod === "true") {
namenye = await client.getName(m.quoted.sender)
m.reply(namenye)
} else if (qtod === "false") {
client.sendMessage(from, {text:"Reply orangnya"})
}
}
break
//=================================================//
case 'getpic': {
if (!isOwner) return m.reply(mess.owner)
if (qtod === "true") {
try {
pporg = await client.profilePictureUrl(m.quoted.sender, 'image')
} catch {
pporg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
client.sendMessage(m.chat, { image : { url : pporg }, caption:`Done` }, { quoted : m })
} else if (qtod === "false") {
try {
pporgs = await client.profilePictureUrl(from, 'image')
} catch {
pporgs = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
client.sendMessage(m.chat, { image : { url : pporgs }, caption:`Done` }, { quoted : m })
}
}
break


case 'inspect': {
if (!args[0]) return m.reply("Linknya?")
let linkRegex = args.join(" ")
let coded = linkRegex.split("https://chat.whatsapp.com/")[1]
if (!coded) return m.replt("Link Invalid")
client.query({
tag: "iq",
attrs: {
type: "get",
xmlns: "w:g2",
to: "@g.us"
},
content: [{ tag: "invite", attrs: { code: coded } }]
}).then(async(res) => { 
tekse = `「 Group Link Inspector 」
▸ ID : ${res.content[0].attrs.id ? res.content[0].attrs.id : "undefined"}
▸ Subject : ${res.content[0].attrs.subject ? res.content[0].attrs.subject : "undefined"}
▸ Subject update by : ${res.content[0].attrs.s_o.split("@")[0] ? "@" + res.content[0].attrs.s_o.split("@")[0] : "undefined"}
▸ Subject update at : ${res.content[0].attrs.s_t ? moment(res.content[0].attrs.s_t *1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Create by : ${res.content[0].attrs.creator ? "@" + res.content[0].attrs.creator.split("@")[0] : "undefined"}
▸ Create at : ${res.content[0].attrs.creation ? moment(res.content[0].attrs.creation * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Total Members : ${res.content[0].attrs.size ? res.content[0].attrs.size : "undefined"} Members
▸ Desc update by : ${res.content[0].content[0].attrs.participant ? "@" + res.content[0].content[0].attrs.participant.split("@")[0] : "undefined"}
▸ Desc update at : ${res.content[0].content[0].attrs.t ? moment(res.content[0].content[0].attrs.t * 1000).tz("Asia/Jakarta").format("DD-MM-YYYY, HH:mm:ss") : "undefined"}
▸ Desc id : ${res.content[0].content[0].attrs.id ? res.content[0].content[0].attrs.id : "undefined"}
▸ Description : ${res.content[0].content[0].content[0].content ? res.content[0].content[0].content[0].content.toString() : "No Description"}
`
try {
pp = await client.profilePictureUrl(res.content[0].attrs.id + "@g.us", "image")
} catch {
pp = "https://tse2.mm.bing.net/th?id=OIP.n1C1oxOvYLLyDIavrBFoNQHaHa&pid=Api&P=0&w=153&h=153"
}
client.sendFile(m.chat, pp, "", m, { caption: tekse, mentions: await client.parseMention(tekse) })
})
}
break

case 'searchgroups': case 'cgc': {
if (!q) return m.reply(`Example: ${prefix}searchgroups hacker`)
mel.linkwa(q)
.then(result => {
let res = '❰ *WHATSAPP GROUP LINKS* ❱\n\n'
for (let i of result) {
res += `*NAME*: *${i.nama}\n*Link*: ${i.link}\n\n`
}
anjay(res)
});
}
break



case 'ss': case 'ssweb': {
// if (isBan) throw sticBanLu(from)
// if (!isRegistered) return replyReg(mess.verif)
////if (isLimit(m.sender, isPremium, isCreator, limitCount, limit)) return anjay(mess.endLimit)
if (!text) throw `Example : ${command} Url`
anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`) 
buf = await getBuffer(anu.screenshot) 
client.sendMessage(m.chat, { image: { url: anu.screenshot }, jpegThumbnail:buf, caption: `*${command} From ${text}*` }).catch((err) => m.reply(jsonformat('*error*')))
}
break































// batas break sampe sini coeg
        default:
            if (budy.startsWith('=>')) {
                if (!isOwner) return m.reply(mess.owner)
                function Return(sul) {
                    sat = JSON.stringify(sul, null, 2)
                    bang = util.format(sat)
                if (sat == undefined) {
                    bang = util.format(sul)
                    }
                        return m.reply(bang)
                    }
                try {
                    m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                } catch (e) {
                    m.reply(String(e))
               }
            }
            if (budy.startsWith('>')) {
                if (!isOwner) return m.reply(mess.owner)
                try {
                    let evaled = await eval(budy.slice(2))
                    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                    await m.reply(evaled)
                } catch (err) {
                    await m.reply(String(err))
                }
            }
            if (budy.startsWith('$')) {
                if (!isOwner) return m.reply(mess.owner)
                exec(budy.slice(2), (err, stdout) => {
                    if (err) return m.reply(`${err}`)
                    if (stdout) return m.reply(stdout)
                })
            }
        }
    } catch (e) {
        m.reply(util.format(e))
    }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update ${__filename}`)
	delete require.cache[file]
	require(file)
})
