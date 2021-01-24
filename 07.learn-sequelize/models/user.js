const Sequelize = require('sequelize');
//Sequelize의 모델과 Mysql의 테이블을 Sequelize를 통해 연결한다.

module.exports = class User extends Sequelize.Model{
    //init메소드는 테이블에 대한 설정을 한다.
    static init(sequelize) {
        //super.init의 첫번째 인수는 테이블 컬럼에 대한 설정이고 두번째 인수는 테이블 자체에 대한 설정.
        return super.init({
            //Sequelize는 id를 알아서 기본키로 연결하므로 id컬럼은 적어주지 않아도 된다.
            name : {
                type : Sequelize.STRING(20),
                allowNull : false,
                unique : true,
            },
            age : {
                type : Sequelize.INTEGER.UNSIGNED,
                allowNull : false,
            },
            married : {
                type : Sequelize.BOOLEAN,
                allowNull : false,
            },
            comment : {
                type : Sequelize.TEXT,
                allowNull : true,
            },
            created_at : {
                type : Sequelize.DATE,
                allowNull : false,
                defaultValue : Sequelize.NOW,
            },
        }, {
            sequelize,
            timestamps : false,//자동으로 날짜 컬럼 추가 기능.
            underscored : false,//시퀄라이즈는 기본적으로 캐멀케이스로 만들지만 이 옵션이 true일시 스네이크 케이스로 바꿔줌.
            modelName : 'User',//모델 이름 설정. 노드 프로젝트에서 사용.
            tableName : 'users',//실제 데이터베이스의 테이블 이름이 됨. 기본적으론 모델이름을 소문자 및 복수형으로 만듬.
            paranoid : false,//true설정시 deleteAt컬럼을 생성해서 삭제시 생성된 컬럼에 삭제일시를 기록. 나중에 로우를 복원 할 수 있게 하기위한 기능.
            charset : 'utf8',
            collate : 'utf8_general_ci',
        });
    }
    //associate메소드는 다른 모델과의 관계를 적는다.
    static associate(db) {
        db.User.hasMany(db.Comment, { foreignKey : 'commenter', sourceKey : 'id'});
    }
};