const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254111240210";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_28_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDcwLFxuICAgICAgICAxMyxcbiAgICAgICAgMzUsXG4gICAgICAgIDc5LFxuICAgICAgICAxNCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMSxcbiAgICAgICAgMTg4LFxuICAgICAgICAxODUsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNjksXG4gICAgICAgIDE0OSxcbiAgICAgICAgODAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNTksXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzksXG4gICAgICAgIDI2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDcyLFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTIsXG4gICAgICAgIDc0LFxuICAgICAgICA4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDgzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM0LFxuICAgICAgICA1NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxMjgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTk5LFxuICAgICAgICAzMSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxODksXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzMyxcbiAgICAgICAgMjQyLFxuICAgICAgICAyLFxuICAgICAgICAxNTQsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA2OSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI4LFxuICAgICAgICA4OCxcbiAgICAgICAgMyxcbiAgICAgICAgMTIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTMsXG4gICAgICAgIDIyMixcbiAgICAgICAgMjMxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgNjIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNzIsXG4gICAgICAgIDIyNixcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxODIsXG4gICAgICAgIDgwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDI1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgODYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyLFxuICAgICAgICAxMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDU5LFxuICAgICAgICAwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDgyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNixcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTksXG4gICAgICAgIDEwMCxcbiAgICAgICAgMCxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNCxcbiAgICAgICAgMTY4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxLFxuICAgICAgICA0NyxcbiAgICAgICAgMTkxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDMzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAxMDksXG4gICAgICAgIDUyLFxuICAgICAgICA1MSxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMjBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDM5LFxuICAgICAgICA5NSxcbiAgICAgICAgMTQzLFxuICAgICAgICA1NCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICA0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAyNDksXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU1LFxuICAgICAgICA4NCxcbiAgICAgICAgNSxcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgODgsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDg3LFxuICAgICAgICA3NyxcbiAgICAgICAgODYsXG4gICAgICAgIDU1LFxuICAgICAgICAyNCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2OSxcbiAgICAgICAgMTIwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgOTksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgODBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDEwMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDExOCxcbiAgICAgICAgMzcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDQ2LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDM3LFxuICAgICAgICA2OSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDAsXG4gICAgICAgIDI2LFxuICAgICAgICA1NixcbiAgICAgICAgMzUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjEwLFxuICAgICAgICAyMzcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMTcyLFxuICAgICAgICA0MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTMsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNjAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjE0LFxuICAgICAgICA4MCxcbiAgICAgICAgMTMxLFxuICAgICAgICA1MixcbiAgICAgICAgMTE5LFxuICAgICAgICAxODcsXG4gICAgICAgIDYxLFxuICAgICAgICA1OSxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJRSEUrbDYxb2tJeFRwb0FuK3hNbTRMajFBU2dqYUtKbDJua3N4SWFWVGljPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDc0MDc0ODA5N0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiNkY1QzYyODQzQzUxNkMxRTlCQzA5NjA1RjU3OTU1MDNcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzIwNTQ5NzEzXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjJXTGlwTXhkVHZDZTlnNklUSGFVS3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiNDczZjNhOWUtNTM2OC00NjdhLThmMTMtNzBiODVjODljNzk1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEyMSxcbiAgICAgIDksXG4gICAgICAxMTMsXG4gICAgICAxNzEsXG4gICAgICAyMTMsXG4gICAgICAxMjEsXG4gICAgICA2MixcbiAgICAgIDI2LFxuICAgICAgMTYxLFxuICAgICAgMTU1LFxuICAgICAgMTI5LFxuICAgICAgMTEzLFxuICAgICAgNjMsXG4gICAgICAxMDQsXG4gICAgICA5NCxcbiAgICAgIDE2MixcbiAgICAgIDY1LFxuICAgICAgMjQ4LFxuICAgICAgNjUsXG4gICAgICA4NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDcsXG4gICAgICAxNjIsXG4gICAgICAxNzQsXG4gICAgICAxMTMsXG4gICAgICAxMyxcbiAgICAgIDcyLFxuICAgICAgMjQwLFxuICAgICAgNjgsXG4gICAgICAxMixcbiAgICAgIDE5MixcbiAgICAgIDExNyxcbiAgICAgIDY2LFxuICAgICAgMjQ0LFxuICAgICAgMTgxLFxuICAgICAgMTAzLFxuICAgICAgNjgsXG4gICAgICA2OCxcbiAgICAgIDIzOCxcbiAgICAgIDExMCxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJWSjRGUzg5WFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzQwNzQ4MDk3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwi8J2QjfCdkKLwnZCz8J2QhfCdkKvwnZCa8J2Qp/CdkKRcIixcbiAgICBcImxpZFwiOiBcIjEwODQxMzY5ODc2NTA1NDoxOEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNORFAxSEVReDRLMnRBWVlBU0FBS0FBPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjVmSU9tT093a1VLRlZpeGVTZmx2S2FheGMvN0ZZUlBNUk5lQk1xMEdmMTA9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwic3l1d0p1KzFEWmJHS3JNeTUvYnBjeUZVc0FvRlVObnhMN2xGZHE1UVdqY1NLUThmMTdLdVBKQTdaM1pSNlZ1Y1NweWtRa005TnQzMzVjUWhlRGp6RFE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiOHA3dC9rbklMK0dYbmN3S0t3cUJpZkQ4cUhYdm5ab1ZDenJ2N2VmZjhERDlMRU85eVBWdEs1a0NNM1pkQ1ZuWjNJSzB6QUo3TmZUcjRIN3lUaGlBaGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzQwNzQ4MDk3OjE4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjI5LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgOTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU0OTcwNyxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9jbFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2NsLmpzb24iOiAie1wia2V5RGF0YVwiOlwiZWdlZ05Ob1lqOFJxTmxmZWhCRUFmcUdvM1JlZTBGVWQ5WU5rMi83cmdBOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMzgzNjQ2MjEsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTcxNzgzODQ4OTI4MlwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "masked",
  packname: process.env.PACK_NAME || "masked",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "masked bettor",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
