var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const request = require('request').defaults({ jar: true });
const jar = request.jar()

var fetch = async (url, options) => {
    return new Promise(function (resolve, reject) {
        request(url, options, (err, httpResponse, body) => {
            resolve(httpResponse)
        })
    });
}
var cookiestr = '__trackId=150342973042270; __city=nanning; __uuid=115034297307751.68e9a; Hm_lvt_5a727f1b4acc5725516637e03b07d3d2=1503429732; __t=ut599c400e629d69.92598327; __u=207062013; __c=711abb3e33431994039b9f48ef1ff0523281345a; __n=KamiSama639; _ga=GA1.2.164676344.1503430108; _gid=GA1.2.290939878.1503430108; Hm_lpvt_5a727f1b4acc5725516637e03b07d3d2=1503484153; mui=http%3A%2F%2Fimg4.baixing.net%2Ff2808ecaebf645e9aa3e1be464fccfd2.png_sq; mc=8%2C0%2C0; __chat_udid=00ef75be-59b4-4d22-98a6-500cadbfdace; verified_device_id=dddde5d94fb84a631f83304efc0576aa321f2cb5643424bb; _auth_redirect=http%3A%2F%2Fchengdu.baixing.com%2Ffabu%2F1193027435%3Ftoken%3D2f3289f7ad758dc34c38ed676601abd3; __sense_session_pv=1; _gat=1'
var cookies = cookiestr.split(';')
cookies.map(item => {
    jar.setCookie(item, 'http://chengdu.baixing.com')
})

app.post('/qq', async (req, res) => {
    console.log(req.body.qq)
    var qq = req.body.qq
    let data = await fetch('http://chengdu.baixing.com/fabu/1193027435', {
        method: 'GET',
        followRedirect: false,
        jar: jar,
    })
    console.log('1')
    var result = data.body.match('玩转视频发布</a> ）</small>"},.*],"forms":{"tabs"')[0]
    result = result.replace('玩转视频发布</a> ）</small>"},', '').replace('],"forms":{"tabs"', '')
    result = '[' + result
    result = result + ']'
    var config = JSON.parse(result)

    var token, _8cb44b44cba8fde
    config.map(item => {
        if (item.name === 'token') {
            token = item.value
        }
        if (item.name === '8cb44b44cba8fde') {
            _8cb44b44cba8fde = item.value
        }
    })
    var querystring = 'title=%E6%89%93%E5%AD%97%E5%91%98100%E6%AF%8F%E5%A4%A9&%E5%B7%A5%E8%B5%84=100&%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4=&%E6%8B%9B%E8%81%98%E4%BA%BA%E6%95%B0=&content=&%E5%85%AC%E5%8F%B8%E5%90%8D%E7%A7%B0=%E4%B8%AA%E4%BA%BA&lat=&lng=&geoCity=&%E5%9C%B0%E5%8C%BA%5B%5D=m7144&%E5%9C%B0%E5%8C%BA%5B%5D=m2971&%E5%85%B7%E4%BD%93%E5%9C%B0%E7%82%B9=%E7%8E%8B%E5%AE%B6%E5%A1%98%E8%A1%9784%E5%8F%B7&%E5%BE%AE%E4%BF%A1%E5%8F%B7=&QQ%E5%8F%B7='+qq+'&contact=13558886975&allowChatOnly=0&video=&token=' + token + '&8cb44b44cba8fde=' + _8cb44b44cba8fde + '&%E7%B1%BB%E5%9E%8B=&%E7%BB%93%E7%AE%97%E6%96%B9%E5%BC%8F=&images%5B%5D=&file=&video-file=&shortVideoUri=&pay=&agreement=on'
    let data2 = await fetch('http://chengdu.baixing.com/fabu/1193027435#', {
        method: 'POST',
        followRedirect: false,
        jar: jar,
        headers: {
            "Host": "chengdu.baixing.com",
            "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
            "Accept-Encoding": "gzip, deflate",
            "Content-Type": "application/x-www-form-urlencoded",
            "Content-Length": querystring.length,
            "Referer": "http://chengdu.baixing.com/fabu/1193027435",
            "Cookie": "__trackId=150342973042270; __city=nanning; __uuid=115034297307751.68e9a; Hm_lvt_5a727f1b4acc5725516637e03b07d3d2=1503429732; __t=ut599c400e629d69.92598327; __u=207062013; __c=711abb3e33431994039b9f48ef1ff0523281345a; __n=KamiSama639; _ga=GA1.2.164676344.1503430108; _gid=GA1.2.290939878.1503430108; Hm_lpvt_5a727f1b4acc5725516637e03b07d3d2=1503492390; mui=http%3A%2F%2Fimg4.baixing.net%2Ff2808ecaebf645e9aa3e1be464fccfd2.png_sq; mc=8%2C0%2C0; __chat_udid=00ef75be-59b4-4d22-98a6-500cadbfdace; verified_device_id=dddde5d94fb84a631f83304efc0576aa321f2cb5643424bb; _auth_redirect=http%3A%2F%2Fchengdu.baixing.com%2Ffabu%2F1193027435%3Ftoken%3D2f3289f7ad758dc34c38ed676601abd3; __sense_session_pv=2; _gat=1",
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": 1
        },
        body: querystring
    })
    console.log('2')
    if (data2.statusCode === 302) {
        let data3 = await fetch('http://chengdu.baixing.com/fabu/success?adId=1193027435&category=wangluojianzhi&city=chengdu', {
            method: 'GET',
            followRedirect: false,
            jar: jar,
            headers: {
                "Host": "chengdu.baixing.com",
                "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0",
                "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
                "Accept-Encoding": "gzip, deflate",
                "Connection": "keep-alive",
                "Pragma": "no-cache",
                "Cache-Control": "no-cache"
            }
        })
        console.log('3')
        console.log(data3.statusCode)
        if (data3.statusCode === 200) {
            let data4 = await fetch('http://www.baixing.com/oz/login/?redirect=http://chengdu.baixing.com/fabu/success?adId=1193027435&category=wangluojianzhi&city=chengdu', {
                method: 'GET',
                followRedirect: false,
                jar: jar,
                headers: {
                    "Host": "www.baixing.com",
                    "User-Agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10.12; rv:54.0) Gecko/20100101 Firefox/54.0",
                    "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
                    "Accept-Language": "zh-CN,zh;q=0.8,en-US;q=0.5,en;q=0.3",
                    "Accept-Encoding": "gzip, deflate",
                    "Connection": "keep-alive",
                    "Pragma": "no-cache",
                    "Cache-Control": "no-cache"
                }
            })
            if (data4.statusCode === 200) {
                console.log('成功')
                res.send('成功')
            }
        }
    }
})

app.get('/', async (req, res) => {

    res.sendFile(process.cwd() + '/index.html')
})
app.listen(4444)

