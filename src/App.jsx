import UserContextProvider from "./context/UserContext";
import "./App.css";
import Profile from "./components/Profile";

function App() {
  return (
    <>
      <UserContextProvider>
        <div>hi there</div>
        <Login />
        <Profile />
      </UserContextProvider>
    </>
  );
}

export default App;
