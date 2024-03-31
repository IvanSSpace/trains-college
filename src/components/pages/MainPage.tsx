import { Link, Outlet } from 'react-router-dom';

const MainPage = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to='/'>Page One</Link>
          </li>
          <li>
            <Link to='/two'>Page Two</Link>
          </li>
        </ul>
      </nav>
      <hr />
      <div className="bg-blue-700 size-full flex flex-col min-h-screen items-center">
        <Outlet />
      </div>
    </>
  )
};

export default MainPage