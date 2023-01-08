import { useLocation, useSearchParams } from "react-router-dom";

const About = () => {
  const location = useLocation();
  /** -useSearchParams : 배열 타입의 값을 반환하고 첫 번째 원소는 쿼리파라미터를 조회하거나 수정하는 메서드들이 담긴 객체를 반환함 /
	 *  get 메서드를 통해 특정 쿼리파라미터를 조회할수 있으며 set 메서드를 통해 특정 쿼리파라미터를 업데이트할수있음 / 
	 *  만약 조회시 쿼리파라미터가 존재하지 않는다면 null 로 조회됨 / 두 번째 원소는 쿼리파라미터를 객체 형태로 업데이트할수있는 함수를 반환함
-쿼리파라미터를 사용할때 주의점은 쿼리파라미터를 조회할때 값은 무조건 문자열 타입이라는 점임 /
	 true or false 값을 넣으면 값을 비교할때 꼭 'true' 와 같이 따옴표로 감싸서 비교를 해야하고
	 숫자를 다룬다면 parseInt 를 사용해 숫자 타입으로 반환을 해야함*/
  const [searchParams, setSearchParams] = useSearchParams();
  const detail = searchParams.get("detail");
  const mode = searchParams.get("mode");

  const onToggleDetail = () => {
    setSearchParams({ mode, detail: detail === "true" ? false : true });
  };

  const onIncreaseMode = () => {
    const nextMode = mode === null ? 1 : parseInt(mode) + 1;
    setSearchParams({ mode: nextMode, detail });
  };

  return (
    <div>
      <h1>소개</h1>
      <p>이 프로젝트는 리액트 라우터 기초를 실습해 보는 예제 프로젝트입니다.</p>
      <p>detail : {detail}</p>
      <p>mode : {mode}</p>
      <button onClick={onToggleDetail}>Toggle detail</button>
      <button onClick={onIncreaseMode}>mode + 1</button>
      <p>쿼리 스트링 : {location.search}</p>
    </div>
  );
};
export default About;
