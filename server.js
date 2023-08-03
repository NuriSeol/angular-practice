// Node.js의 require 함수를 사용하여 express와 cors 모듈을 불러옵니다. express는 웹 서버를 만들기 위해 사용되는 프레임워크이고, cors는 Cross-Origin Resource Sharing를 처리하기 위한 미들웨어입니다.
const express = require("express");
const cors = require("cors");

// Express 앱 생성: express()를 호출하여 Express 애플리케이션을 만듭니다. 이제 app 객체를 사용하여 앱의 미들웨어와 라우트를 설정할 수 있습니다.
const app = express();

// CORS 옵션 설정: corsOptions 객체를 생성하여 CORS 정책을 설정합니다. 여기서는 http://localhost:8081에서 오는 요청을 허용하는 옵션을 지정했습니다. 이것은 보안을 위해 실제 운영 환경에서 적절하게 설정되어야 합니다.
var corsOptions = {
    origin: "http://localhost:8081",
};
app.use(cors(corsOptions));

// Body 파서 설정: Express 앱에서 JSON 형식과 URL 인코딩된 데이터를 파싱하기 위해 express.json() 및 express.urlencoded() 미들웨어를 사용합니다. 이를 통해 POST 요청 등에서 클라이언트가 보낸 데이터를 쉽게 사용할 수 있습니다.
// parse requests of content-type - application/json
app.use(express.json());
// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// 라우트 정의: "/" 라우트에 대한 GET 요청에 대한 핸들러 함수를 정의합니다. 클라이언트가 서버의 루트 경로에 GET 요청을 보내면 JSON 형식의 응답으로 "Welcome to bezkoder application." 메시지가 반환됩니다.
app.get("/", (req, res) => {
    res.json({ message: "Welcome to bezkoder application." });
});

// 서버 시작: 서버를 시작하기 위해 app.listen 함수를 호출합니다. 포트 번호는 8080으로 설정되어 있으며, 서버가 시작되면 콘솔에 "Server is running on port 8080." 메시지가 출력됩니다. process.env.PORT를 사용하여 환경 변수로부터 포트 번호를 가져올 수 있습니다. 예를 들어, 배포 환경에서는 환경 변수를 통해 포트 번호를 동적으로 설정할 수 있습니다. 이렇게 설정된 서버는 npm start를 실행하여 시작할 수 있습니다. http://localhost:8080에서 브라우저를 열거나 API 테스트 도구를 사용하여 서버에 접속하여 "Welcome to bezkoder application." 메시지를 확인할 수 있습니다.
// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});


const db = require("./app/models");
db.mongoose
    .connect(db.url, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log("Connected to the database!");
    })
    .catch((err) => {
        console.log("Cannot connect to the database!", err);
        process.exit();
    });