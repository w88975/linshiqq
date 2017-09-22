var express = require('express')
var app = express()
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
const request = require('request').defaults({ jar: true });


var accounts = require('./accounts.js')

var fetch = async (url, options) => {
    return new Promise(function (resolve, reject) {
        request(url, options, (err, httpResponse, body) => {
            resolve(httpResponse)
        })
    });
}

var Haker = async function (phone, id, qq, cookie) {
    const jar = request.jar()
    var cookiestr = cookie
    var cookies = cookiestr.split(';')
    cookies.map(item => {
        jar.setCookie(item, 'http://chengdu.baixing.com')
    })
    let data = await fetch('http://chengdu.baixing.com/fabu/' + id, {
        method: 'GET',
        followRedirect: false,
        jar: jar,
    })
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
    var querystring = 'title=%E6%89%93%E5%AD%97%E5%91%98100%E6%AF%8F%E5%A4%A9&%E5%B7%A5%E8%B5%84=100&%E5%B7%A5%E4%BD%9C%E6%97%B6%E9%97%B4=&%E6%8B%9B%E8%81%98%E4%BA%BA%E6%95%B0=&content=&%E5%85%AC%E5%8F%B8%E5%90%8D%E7%A7%B0=%E4%B8%AA%E4%BA%BA&lat=&lng=&geoCity=&%E5%9C%B0%E5%8C%BA%5B%5D=m7144&%E5%9C%B0%E5%8C%BA%5B%5D=m2971&%E5%85%B7%E4%BD%93%E5%9C%B0%E7%82%B9=%E7%8E%8B%E5%AE%B6%E5%A1%98%E8%A1%9784%E5%8F%B7&%E5%BE%AE%E4%BF%A1%E5%8F%B7=&QQ%E5%8F%B7=' + qq + '&contact=13147083263&allowChatOnly=0&video=&token=' + token + '&8cb44b44cba8fde=' + _8cb44b44cba8fde + '&%E7%B1%BB%E5%9E%8B=&%E7%BB%93%E7%AE%97%E6%96%B9%E5%BC%8F=&images%5B%5D=&file=&video-file=&shortVideoUri=&pay=&agreement=on'
    let data2 = await fetch('http://chengdu.baixing.com/fabu/' + id + '#', {
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
            "Referer": "http://chengdu.baixing.com/fabu/" + id,
            "Cookie": cookiestr,
            "Connection": "keep-alive",
            "Upgrade-Insecure-Requests": 1
        },
        body: querystring
    })
    console.log('data2.statusCode', data2.statusCode)
    if (data2.statusCode === 302) {
        let data3 = await fetch('http://chengdu.baixing.com/fabu/success?adId=' + id + '&category=wangluojianzhi&city=chengdu', {
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
        console.log('data3.statusCode', data3.statusCode)
        if (data3.statusCode === 200) {
            let data4 = await fetch('http://www.baixing.com/oz/login/?redirect=http://chengdu.baixing.com/fabu/success?adId=' + id + '&category=wangluojianzhi&city=chengdu', {
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
            console.log('data4.statusCode', data4.statusCode)
            if (data4.statusCode === 200) {
                console.log('成功')
                return true
            }
        }
        return false
    }
    return false
}

//'80515552'
var HakerMap = async function (qq) {
    for (var i = 0; i < accounts.length; ++i) {
        console.log(`正在用: ${accounts[i].phone} 操作QQ: ${qq}`)
        let result = await Haker(accounts[i].phone, accounts[i].id, qq, accounts[i].cookie)
        if (result) {
            return {
                cg: true,
                qq,
                msg: '成功'
            }
        }
    }

    return {
        cg: false,
        qq,
        msg: '失败'
    }
}


// HakerMap('80515553')

var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};


app.post('/qq', async (req, res) => {
    var qqs = req.body.qq.split('\r\n')
    res.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8' });//设置response编码为utf-8
    for (var index = 0; index < qqs.length; index++) {
        let result = await HakerMap(qqs[index])
        res.write(`<div>QQ: [${qqs[index]}] ${result.msg} </div><br/>`)
        // res.write(`<div>等待5秒</div>`)
        await sleep(1000)
    }
    res.write(`<b>完成!</b>`)
    res.end()
})

app.get('/', async (req, res) => {
    res.sendFile(process.cwd() + '/index.html')
})
app.listen(4444)