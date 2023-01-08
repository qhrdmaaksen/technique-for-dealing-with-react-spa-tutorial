import { Link, NavLink, Outlet } from "react-router-dom";

const Articles = () => {
  return (
      <div>
        <Outlet />
        <ul>
          <ArticleItem id={1} />
          <ArticleItem id={2} />
          <ArticleItem id={3} />
          <ArticleItem id={4} />
        </ul>
      </div>
  )
}

const ArticleItem = ({id}) => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
      <li>
        <NavLink
          to={`/articles/${id}`}
          style={({isActive}) => isActive ? activeStyle : undefined}
        >
          게시글 id : {id}
        </NavLink>
      </li>
  )
}

/*const Articles = () => {
  const activeStyle = {
    color: "green",
    fontSize: 21,
  };

  return (
    <div>
      <Outlet />{" "}
      {/!*Outlet : Route 의 children 으로 들어가는 JSX 엘리먼트를 보여주는 역할을 함*!/}
      <ul>
        <li>
          <NavLink
            to="/articles/1"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 #1
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/2"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 #2
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/3"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 #3
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/articles/4"
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
          >
            게시글 #4
          </NavLink>
        </li>
      </ul>
    </div>
  );
};*/
export default Articles;
