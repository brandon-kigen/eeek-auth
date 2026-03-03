import { useState } from "react";
import { userLogIn } from "@/modules/submitNewUser";
import { useNavigate } from "react-router-dom";
import Error from "@/components/ErrorMessage";

const LoginForm = ({
  setLoading,
  setLoggedIn,
  setError,
  setErrorMsg,
  error,
  errorMsg,
  loading,
}: any) => {
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const inputClass =
    "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm shadow-sm focus:ring-2 focus:ring-ring focus:outline-none transition-shadow";

  return (
    <>
      <form
        id="loginUserForm"
        action=""
        name="Login"
        className="w-full max-w-sm space-y-4"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const response = await userLogIn(credential, password);
          setLoading(false);
          if (response.status === 200) {
            setLoggedIn(true);
            setTimeout(() => {
              navigate("/home");
            }, 3000);
          } else {
            setError(true);
            setErrorMsg(`${response.data.detail}`);
          }
        }}
      >
        <div>
          <label htmlFor="credential" className="text-sm font-semibold">
            Email or Username:
          </label>
          <input
            className={inputClass}
            type="text"
            name="credential"
            id="credential"
            value={credential}
            maxLength={256}
            onChange={(e) => setCredential(e.target.value)}
            onInput={() => setError(false)}
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="text-sm font-semibold">
            Password:
          </label>
          <input
            className={inputClass}
            type="password"
            name="password"
            id="password"
            value={password}
            minLength={8}
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
            maxLength={64}
            onChange={(e) => setPassword(e.target.value)}
            onInput={() => setError(false)}
            required
          />
        </div>
      </form>
      <div className="w-full max-w-sm text-right mt-1">
        <a
          href="/forgot-password"
          className="text-xs font-semibold text-primary underline hover:opacity-80 transition-opacity"
        >
          Forgot password?
        </a>
      </div>
      {error && !loading && (
        <div className="mt-2">
          <Error errorMsg={errorMsg} />
        </div>
      )}
    </>
  );
};

export default LoginForm;
