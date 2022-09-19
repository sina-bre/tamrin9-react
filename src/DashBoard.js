import { useNavigate, Outlet } from "react-router-dom";

const DashBooard = () => {
  const navigate = useNavigate();
  return (
    <>
      <h1>DashBoard</h1>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        go back login
      </button>
      <Outlet />
    </>
  );
};
export default DashBooard;
