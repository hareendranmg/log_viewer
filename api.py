import http.client

conn = http.client.HTTPConnection("103.153.92.249", 90)
payload = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\r\n<soap:Envelope xmlns:soap=\"http://schemas.xmlsoap.org/soap/envelope/\">\r\n  <soap:Body>\r\n    <GetTransactionsLog xmlns=\"http://tempuri.org/\">\r\n      <FromDateTime>2023-08-14 09:00:01</FromDateTime>\r\n      <ToDateTime>2023-08-14 23:59:00</ToDateTime>\r\n      <SerialNumber>BJ2C184160599</SerialNumber>\r\n      <UserName>essl_api_user</UserName>\r\n      <UserPassword>eSSL@api123</UserPassword>\r\n      <strDataList></strDataList>\r\n    </GetTransactionsLog>\r\n  </soap:Body>\r\n</soap:Envelope>\r\n"
headers = {
  'Content-Type': 'text/xml'
}
conn.request("POST", "/iclock/WebAPIService.asmx?op=GetTransactionsLog", payload, headers)
res = conn.getresponse()
data = res.read()
print(data.decode("utf-8"))