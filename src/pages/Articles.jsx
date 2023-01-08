import { Link, Outlet } from "react-router-dom";

const Articles = () => {
  return (
    <div>
      <Outlet /> {/*Outlet : Route 의 children 으로 들어가는 JSX 엘리먼트를 보여주는 역할을 함*/}
        <ul>
          <li>
            <Link to="/articles/1">게시글 #1</Link>
          </li>
          <li>
            <Link to="/articles/2">게시글 #2</Link>
          </li>
          <li>
            <Link to="/articles/3">게시글 #3</Link>
          </li>
          <li>
            <Link to="/articles/4">게시글 #4</Link>
          </li>
        </ul>
    </div>
  );
};
export default Articles;
