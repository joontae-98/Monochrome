import React, {useState} from 'react';
import {
  InfoLink,
  JoinCheckMessage,
  JoinInput,
  LoginInput,
  LogoGray,
  PageInfo,
  PageTitle,
  UserLayout
} from "../style/UserStyle";
import {Col, Row} from "react-bootstrap";
import {Link} from "react-router-dom";
import {join} from "../../service/AuthApi";

function Join(props) {

  // 회원가입 정보
  const [joinInfo, setJoinInfo] = useState({
    email: '',
    password: '',
    name : '',
    phone : '',
  });

  // 유효성 검사용 배열, 성공하면 true 로 변경
  const [checkValidate, setCheckValidate] = useState([
    false, false, false, false]);

  // 유효성 검사에 모두 통과하면 disabled 를 false 로 바꾸기 위한 state
  const [isAnonymous, setIsAnonymous] = useState(true);

  const handleChange = (e) => {
    setJoinInfo({
      ...joinInfo,
      [e.target.name]: e.target.value
    });

    // 입력 변화와 함께 유효성 검사도 체크
    checkValid();
  };

  // 해당 컴포넌트의 유효성 검사 성공 여부, 통과하면 true로 state를 반환 받아 변경
  const checkFunction = (index, state) => {

    checkValidate[index] = state;
    setCheckValidate([
      ...checkValidate
    ]);

  };

  // 유효성 체크 배열이 모두 true라면 disabled 해놓은 버튼을 해제한다.
  const checkValid = () => {
    checkValidate.includes(false) ?
      setIsAnonymous(true) : setIsAnonymous(false);
  }

  const joinClicked = () => {
    join(joinInfo)
      .then(res => {
        console.log(res);
        alert(res + "님 가입을 환영합니다!");
        window.location.href = '/';
      })
      .catch(err => {
        console.log(err);
      });
  }

  return (
    <UserLayout>
      <LogoGray fontWeight={300} fontSize={'1.1rem'}>Monochrome</LogoGray>
      <PageTitle>회원가입</PageTitle>

      <PageInfo>
        회원 정보를 입력해주세요.
      </PageInfo>

      <Row className={'justify-content-center px-2'}>
        {/* 반복되는 컴포넌트들이므로 추후 map으로 활용할 수 있게 수정할 것 */}
        <Col md={5}>
          {/* 이메일 영역 */}
          <JoinInput index={0} type={"text"} name={"email"} value={joinInfo.email} onChange={handleChange} checkFunction={checkFunction} placeholder={"예) monochrome@gmail.com"}>
            이메일
          </JoinInput>

          {/* 비밀번호 영역 */}
          <JoinInput index={1} type={"password"} name={"password"} value={joinInfo.password} onChange={handleChange} checkFunction={checkFunction} placeholder={"영문, 숫자, 특수문자 조합 8자리 이상"}>
            비밀번호
          </JoinInput>

          {/* 이름 영역 */}
          <JoinInput index={2} type={"text"} name={"name"} value={joinInfo.name} onChange={handleChange} checkFunction={checkFunction} placeholder={"이름을 입력해주세요."}>
            이름
          </JoinInput>

          {/* 핸드폰 번호 영역 */}
          <JoinInput index={3} type={"text"} name={"phone"} value={joinInfo.phone} onChange={handleChange} checkFunction={checkFunction} placeholder={"-를 제외한 휴대폰 번호를 입력해주세요."}>
            휴대폰 번호
          </JoinInput>

          {/* 제출 영역 */}
          <div className={'d-grid gap-2 pt-3'}>
            <button className="btn btn-dark user-btn1" disabled={isAnonymous} onClick={joinClicked}>회원가입하기</button>
          </div>
        </Col>
      </Row>

    </UserLayout>
  )
}

export default Join;