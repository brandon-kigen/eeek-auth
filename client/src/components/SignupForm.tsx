import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { userSignUp } from "@/modules/submitNewUser";
import { NewUserType } from "@/modules/submitNewUser";
import { initUsers } from "@/modules/fetchUsers";
import { debounce } from "@/modules/debouncer";
import Error from "@/components/ErrorMessage";

const SignupForm = ({
  setLoading,
  setSignedUp,
  setError,
  setErrorMsg,
  error,
  loading,
  errorMsg,
}: any) => {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [foundUser, setFoundUser] = useState<boolean | null>(null);
  const [passwordRules, setPasswordRules] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    initUsers();
  }, []);

  useEffect(() => {
    if (username) {
      debounce(username).then((found: boolean) => {
        setFoundUser(found);
      });
    }
  }, [username]);

  let newUser: NewUserType = { firstname, lastname, username, email, password };

  const inputClass =
    "w-full px-3 py-2 rounded-lg border border-input bg-background text-foreground text-sm shadow-sm focus:ring-2 focus:ring-ring focus:outline-none transition-shadow";

  return (
    <div>
      <form
        id="newUserForm"
        name="Signup"
        className="space-y-3"
        onSubmit={async (e) => {
          e.preventDefault();
          setLoading(true);
          const response = await userSignUp(newUser);
          setError(false);
          setLoading(false);
          if (response === 201) {
            setSignedUp(true);
            setTimeout(() => navigate("/login"), 3000);
          } else {
            setError(true);
            setErrorMsg(`${response.data.detail}`);
          }
        }}
      >
        {/* Names row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="firstname" className="text-sm font-semibold">
              Firstname:
            </label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              value={firstname}
              maxLength={32}
              onChange={(e) => setFirstname(e.target.value)}
              required
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="lastname" className="text-sm font-semibold">
              Lastname:
            </label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              value={lastname}
              maxLength={32}
              onChange={(e) => setLastname(e.target.value)}
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Credentials row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <div className="flex justify-between items-center">
              <label htmlFor="username" className="text-sm font-semibold">
                Username:
              </label>
              {username !== "" && foundUser !== null && (
                <span>
                  {foundUser ? (
                    <svg viewBox="0 0 12 12" width="12" height="12" fill="hsl(var(--destructive))">
                      <path d="M4.855.708c.5-.896 1.79-.896 2.29 0l4.675 8.351a1.312 1.312 0 0 1-1.146 1.954H1.33A1.313 1.313 0 0 1 .183 9.058ZM7 7V3H5v4Zm-1 3a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                    </svg>
                  ) : (
                    <svg viewBox="0 0 12 12" width="12" height="12" fill="hsl(142, 71%, 45%)">
                      <path d="M6 0a6 6 0 1 1 0 12A6 6 0 0 1 6 0Zm-.705 8.737L9.63 4.403 8.392 3.166 5.295 6.263l-1.7-1.702L2.356 5.8l2.938 2.938Z" />
                    </svg>
                  )}
                </span>
              )}
            </div>
            <input
              type="text"
              name="username"
              id="username"
              value={username}
              maxLength={32}
              onInput={(e) => {
                setError(false);
                setUsername(e.currentTarget.value);
              }}
              required
              className={inputClass}
              style={
                username === ""
                  ? {}
                  : foundUser
                  ? { borderColor: "hsl(0, 72%, 51%)" }
                  : { borderColor: "hsl(142, 71%, 45%)" }
              }
            />
          </div>
          <div>
            <label htmlFor="email" className="text-sm font-semibold">
              Email:
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              maxLength={256}
              onChange={(e) => setEmail(e.target.value)}
              required
              className={inputClass}
            />
          </div>
        </div>

        {/* Password row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <div>
            <label htmlFor="password" className="text-sm font-semibold">
              Password:
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              minLength={8}
              pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{12,}$"
              maxLength={64}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPasswordRules(true)}
              required
              title="See the password rules below. Characters allowed: @$!%*?&"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="password_assert" className="text-sm font-semibold">
              Confirm Password:
            </label>
            <input
              type="password"
              name="password_assert"
              id="password_assert"
              value={passwordConfirmation}
              minLength={8}
              pattern={password}
              maxLength={64}
              onChange={(e) => setPasswordConfirmation(e.target.value)}
              required
              className={inputClass}
              style={
                passwordConfirmation === ""
                  ? {}
                  : password === passwordConfirmation
                  ? { borderColor: "hsl(142, 71%, 45%)" }
                  : { borderColor: "hsl(0, 72%, 51%)" }
              }
            />
          </div>
        </div>
      </form>

      {passwordRules && (
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <p className="text-sm font-semibold mb-1">Your password must include:</p>
            <ul className="text-xs text-muted-foreground space-y-0.5">
              <li>• At least <strong>12 characters</strong></li>
              <li>
                • At least one <strong>upper</strong> &amp; <strong>lower</strong> case letter
              </li>
              <li>
                • At least one <strong>number</strong> and <strong>special</strong> character
              </li>
            </ul>
          </div>
          {error && !loading && (
            <div className="flex items-center">
              <Error errorMsg={errorMsg} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default SignupForm;
