import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <header style={{ background: "lightgray", padding: 16, fontSize: 24 }}>
        Header
      </header>
      <main>
				{/** App.js 에서 Route children 으로 들어있는 elements 보여줌*/}
        <Outlet />
      </main>
    </div>
  );
};
export default Layout;
