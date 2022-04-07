const sslCertificate = require('get-ssl-certificate')
let url = 'nodejs.org'

sslCertificate.get(url).then(function (certificate){
    // 顯示所有資訊
    // console.log(certificate)
    // issuer 發行人
    console.log(certificate.issuer)
    // valid_from 有效日期起始
    console.log(certificate.valid_from)
    // valid_to 有效日期結束
    console.log(certificate.valid_to)
})