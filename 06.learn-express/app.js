const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');
const bodyParser = require('body-parser');

//dotenv 사용부분. .env내용을 process.env에 넣어준다.
dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

//morgan 사용부분. 요청에 대한 응답과 정보를 콘솔에 기록한다. dev는 개발모드이다.
app.use(morgan('dev'));
//static 사용부분. 정적파일을 제공하는 라우터 역할이다. public폴더로 정적파일 접근이 가능하다.
//단, 웹상에선 public를 입력하지않는다.(보안상이유 아직 안써봐서 확실하진않음.)
app.use('/', express.static(path.join(__dirname, 'public')));
//body-parser 사용부분. body-parser같은 경우 익스프레스4.16.0버젼부터 일부기능이 내장되어있다.
//요청의 본문을 해석해서 req.body객체로 만들어주는 역할을 한다. 보통 폼 데이터나 AJAX요청의 데이터를 처리한다.
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//JSON과 URL-encoded형식 외에 버퍼데이터나 텍스트 데이터를 해석 할 때는 body-parser을 설치해야한다. 버퍼는 raw, 텍스트는 text를 이용한다.
app.use(bodyParser.raw());
app.use(bodyParser.text());
//cookie-parser 사용부분. 요청에 동봉된 쿠키를 해석해서 req.cookies 객체로 만들어줌.
app.use(cookieParser(process.env.COOKIE_SECRET));
//express-session 사용부분. 세션관리용 미들웨어.
//예전에는 cookie-parser를 사용해서 cookie-parser 뒤에 놓아야 하지만 1.5버전이후론 사용하지 않아서 괜찮음.
app.use(session({
    resave : false,//요청이 올때 세션 수정사항이 없더라도 다시 저장할지 여부.
    saveUninitialized : false,//세션에 저장 할 내역이 없더라도 처음부터 세션을 생성할지 여부.
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
    name : 'session-cookie',
}));

app.use((req, res, next) => {
    console.log('모든 요청에 다 실행됩니다.');
    next();
});
app.get('/', (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
}, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});

app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
});