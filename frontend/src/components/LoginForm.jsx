import useForm from "../hooks/formHooks";
import { useUserContext } from "../hooks/contextHooks";

const LoginForm = () => {
  const initValues = {
    username: "",
    password: "",
  };

  const { handleLogin } = useUserContext();

  const { inputs, handleInputChange, handleSubmit } = useForm(
    doLogin,
    initValues,
  );

  async function doLogin() {
    try {
      await handleLogin(inputs);
    } catch (error) {
      alert(error.message);
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label className="text-xs font-mono uppercase tracking-widest text-gray-500">
          Username
        </label>
        <input
          name="username"
          type="text"
          onChange={handleInputChange}
          autoComplete="username"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs font-mono uppercase tracking-widest text-gray-500">
          Password
        </label>
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          autoComplete="current-password"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 py-2 bg-purple-500 text-white font-mono uppercase tracking-widest rounded-md hover:bg-purple-600 transition"
      >
        Sign in
      </button>
    </form>
  );
};

export default LoginForm;
