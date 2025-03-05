import { LoginForm } from "./components/LoginForm";
import { UserInfoTable } from "./components/UserInfoTable";
import { useAuth } from "./context/Authcontext";

function App() {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      <h1>Auth Practice</h1>
      {!isAuthenticated ? (
        <LoginForm />
      ) : (
        <>
          <button onClick={logout}>Logout</button>
          <UserInfoTable />
        </>
      )}
    </>
  );
}

export default App;
