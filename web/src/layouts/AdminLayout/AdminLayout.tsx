import { useAuth } from '@redwoodjs/auth'
import { Link, routes } from '@redwoodjs/router'

type AdminLayoutProps = {
  children?: React.ReactNode
}

const AdminLayout = ({ children }: AdminLayoutProps) => {
  const { currentUser, logOut } = useAuth()

  return (
    <>
      <header>
        <div className="flex-between">
          <h1>
            <Link to={routes.home()}>Redwood Blog Admin</Link>
          </h1>
          <div>
            <span>Logged in as {currentUser.email}</span>{' '}
            <button type="button">
              <Link to={routes.home()}>Home</Link>
            </button>
            <button type="button" onClick={logOut}>
              Logout
            </button>
          </div>
        </div>
        <nav>
          <ul>
            <li>
              <button type="button">
                <Link to={routes.homeAdmin()}>Admin Home</Link>
              </button>
            </li>
            <li>
              <button type="button">
                <Link to={routes.posts()}>Posts</Link>
              </button>
            </li>
            <li>
              <button type="button">
                <Link to={routes.users()}>Users</Link>
              </button>
            </li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  )
}

export default AdminLayout
