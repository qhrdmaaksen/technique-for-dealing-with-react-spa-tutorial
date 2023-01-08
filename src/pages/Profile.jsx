import { useParams } from "react-router-dom";

const data = {
  developer: {
    name: "김민우",
    description: "리액트를 좋아하는 개발자",
  },
  gildong: {
    name: "홍길동",
    description: "고전 소설 홍길동전의 주인공",
  },
};

const Profile = () => {
  // useParams()를 사용하여 URL 파라미터에 접근 가능 (URL 파라미터는 문자열 형태)
  const params = useParams();
  /** data 객체에 프로필 정보들을 key-value 형태로 담아두었음
   * Profile 컴포넌트에서는 username URL 파라미터를 통해 프로필을 조회한 뒤에 프로필이 존재하지 않는다면
   * 존재하지않는 사용자라고 문구를 보여주고 존재한다면 프로필 정보를 보여주도록 함
   * 여기서 username 은 App.js 에 Route path 의 :username 임*/
  const profile = data[params.username];

  return (
    <div>
      <h1>사용자 프로필</h1>
      {profile ? (
        <div>
          <h2>{profile.name}</h2>
          <p>{profile.description}</p>
        </div>
      ) : (
        <p>존재하지 않는 사용자입니다.</p>
      )}
    </div>
  );
};
export default Profile;
