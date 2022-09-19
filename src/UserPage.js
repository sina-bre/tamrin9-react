import { useNavigate } from "react-router-dom";
const UserPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>User Page</h1>
      <button
        onClick={() => {
          navigate("/dashBoard");
        }}
      >
        go back dashBoard
      </button>
    </>
  );
};
export default UserPage;
