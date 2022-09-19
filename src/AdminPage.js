import { useNavigate } from "react-router-dom";
const AdminPage = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>Admin Page</h1>
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
export default AdminPage;
