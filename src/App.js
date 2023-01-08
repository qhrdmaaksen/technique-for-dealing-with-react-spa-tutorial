import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Articles from "./pages/Articles";
import Article from "./pages/Article";
import Layout from "./Layout";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import MyPage from "./pages/MyPage";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />
        {/*URL 파라미터는 /profile/:username 과 같이 경로에 : 를 사용해서 설정함
--만약 url 파라미터가 여러개인경우에 /profiles/:username/:field 와 같은 형태로 설정할수있음*/}
        <Route path="/profile/:username" element={<Profile />} />
      </Route>
      <Route path="/articles" element={<Articles />}>
        <Route path=":id" element={<Article />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
      {/** 여기서 path 에 * 는 wildcard 문자이며 아무 텍스트나 매칭한다는 뜻임 위의 경로들을 거쳐서 규칙을 확인하고
       일치하는 라우트가 없다면 해당 not found 라우트가 화면에 나타나게됨*/}
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
