const http = require("http");
http.createServer((req, res) => res.end("Case 3: root Node server is running")).listen(process.env.PORT || 3000);
