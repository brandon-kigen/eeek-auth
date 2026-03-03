import Throbber from "@/components/Throbber";

const ButtonAndError = ({ loading, signedUp, loggedIn }: any) => {
  let page = window.location.href;

  return (
    <div className="flex flex-col items-center my-4">
      {loading ? (
        <Throbber />
      ) : (
        <div>
          {page.includes("login") ? (
            <button
              className="px-8 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold
                         hover:opacity-90 transition-opacity shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              type="submit"
              form="loginUserForm"
              disabled={loggedIn}
            >
              Log In
            </button>
          ) : (
            <button
              className="px-8 py-2.5 rounded-lg bg-primary text-primary-foreground text-sm font-bold
                         hover:opacity-90 transition-opacity shadow-sm disabled:opacity-40 disabled:cursor-not-allowed"
              type="submit"
              form="newUserForm"
              disabled={signedUp}
            >
              Sign Up
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default ButtonAndError;
