import { Outlet, useNavigate } from "react-router-dom";

const Layout = () => {
  const navigate = useNavigate();

  const goBack = () => {
    // navigate(-1) // 뒤로가기
    navigate(-1);
  };

  const goForward = () => {
    // navigate(1) // 앞으로가기
    navigate(1);
  }

  const goArticles = () => {
    // replace : 페이지를 이동할때 현재 페이지를 history 에 남기지 않음
    navigate("/articles", {replace: true});
  };

  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        <button onClick={goBack}>뒤로가기</button>
        <button onClick={goForward}>앞으로가기</button>
        <button onClick={goArticles}>게시글 목록</button>
      </header>
      <main>
        {/** App.js 에서 Route children 으로 들어있는 elements 보여줌*/}
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
