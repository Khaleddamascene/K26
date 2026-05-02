import { useUser } from "../hooks/apiHooks";
import useForm from "../hooks/formHooks";

const RegisterForm = () => {
  const initValues = {
    username: "",
    password: "",
    email: "",
  };

  const { postUser, checkUser } = useUser();

  const {
    inputs,
    handleInputChange,
    handleSubmit,
    errors,
    handleError,
    clearErrors,
  } = useForm(doRegister, initValues);

  async function doRegister() {
    try {
      await postUser(inputs);
      alert("User created!");
    } catch (error) {
      alert(error.message);
    }
  }

  const handleUserBlur = async () => {
    clearErrors();
    try {
      const checkResult = await checkUser(inputs.username);
      if (!checkResult.available) {
        handleError("username", "Username not available");
      }
    } catch {}
  };

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
          onBlur={handleUserBlur}
          autoComplete="username"
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
        {errors?.username && (
          <p className="text-sm text-red-500 mt-1">{errors.username}</p>
        )}
      </div>

      <div className="flex flex-col">
        <label className="text-xs font-mono uppercase tracking-widest text-gray-500">
          Password
        </label>
        <input
          name="password"
          type="password"
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="flex flex-col">
        <label className="text-xs font-mono uppercase tracking-widest text-gray-500">
          Email
        </label>
        <input
          name="email"
          type="email"
          onChange={handleInputChange}
          className="mt-1 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <button
        type="submit"
        className="w-full mt-2 py-2 bg-purple-500 text-white font-mono uppercase tracking-widest rounded-md hover:bg-purple-600 transition"
      >
        Create account
      </button>
    </form>
  );
};

export default RegisterForm;
