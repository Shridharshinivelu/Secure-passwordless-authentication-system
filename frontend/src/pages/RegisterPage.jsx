import Register from "../components/Register/Register";

function RegisterPage() {
  return (
    <div
      style={{
        minHeight:"100vh",
        background:"#0f172a",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
      }}
    >
      <Register />
    </div>
  );
}

export default RegisterPage;