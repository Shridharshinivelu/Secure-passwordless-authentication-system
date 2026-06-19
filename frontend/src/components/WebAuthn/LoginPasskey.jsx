import "./WebAuthn.css";

function LoginPasskey() {

  const handleAuthenticate = () => {

    localStorage.setItem(
      "authToken",
      "passkey-user"
    );

    alert(
      "Passkey Authentication Successful"
    );

    window.location.href =
      "/dashboard";
  };

  return (

    <div className="passkey-card">

      <h2>
        Login Using Passkey
      </h2>

      <p
        style={{
          color: "#dbeafe",
          marginBottom: "25px"
        }}
      >
        Authenticate securely using
        your registered passkey.
      </p>

      <button
        onClick={handleAuthenticate}
      >
        🔑 Authenticate
      </button>

    </div>

  );
}

export default LoginPasskey;