// var raw = `<?xml version="1.0" encoding="utf-8"?>
// <soap:Envelope xmlns:soap="http://schemas.xmlsoap.org/soap/envelope/">
//   <soap:Body>
//     <GetTransactionsLog xmlns="http://tempuri.org/">
//       <FromDateTime>2023-08-12 10:00:01</FromDateTime>
//       <ToDateTime>2023-08-12 23:59:00</ToDateTime>
//       <SerialNumber>BJ2C184160599</SerialNumber>
//       <UserName>essl_api_user</UserName>
//       <UserPassword>eSSL@api123</UserPassword>
//       <strDataList></strDataList>
//     </GetTransactionsLog>
//   </soap:Body>
// </soap:Envelope>`;

// var myHeaders = new Headers();
// myHeaders.append("Content-Type", "text/xml");


// var requestOptions = {
//     method: 'POST',
//     headers: myHeaders,
//     body: raw,
//     mode: 'no-cors', // Use no-cors mode
//     redirect: 'follow'
// };


// fetch("http://103.153.92.249:90/iclock/WebAPIService.asmx?op=GetTransactionsLog", requestOptions)
//     .then(response => response.text())
//     .then(result => console.log(result))
//     .catch(error => console.log('error', error));



var settings = {
    "url": "http://103.153.92.249:90/iclock/WebAPIService.asmx?op=GetTransactionsLog",
    "method": "POST",
    "timeout": 0,
    "headers": {
        "Content-Type": "text/xml"
    },
    "data": "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n  <soap:Body>\r\n    <GetTransactionsLog xmlns=\"http://tempuri.org/\">\r\n      <FromDateTime>2023-08-14 09:00:01</FromDateTime>\r\n      <ToDateTime>2023-08-14 23:59:00</ToDateTime>\r\n      <SerialNumber>BJ2C184160599</SerialNumber>\r\n      <UserName>essl_api_user</UserName>\r\n      <UserPassword>eSSL@api123</UserPassword>\r\n      <strDataList></strDataList>\r\n    </GetTransactionsLog>\r\n  </soap:Body>\r\n</soap:Envelope>\r\n",
};

$.ajax(settings).done(function (response) {
    console.log(response);
});

