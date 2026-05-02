import { useUserContext } from "../hooks/contextHooks";

const Profile = () => {
  const { user } = useUserContext();

  return (
    <section className="relative min-h-[calc(100vh-90px)] flex items-center justify-center px-5 py-10">
      {/* Background effect */}
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_65%_60%_at_15%_110%,rgba(170,59,255,0.15),transparent),radial-gradient(ellipse_55%_50%_at_85%_-10%,rgba(170,59,255,0.1),transparent)]" />

      {user ? (
        <article className="w-full max-w-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-xl rounded-2xl p-8 space-y-6">
          <p className="text-xs font-mono uppercase tracking-widest text-purple-500">
            Account
          </p>

          <h2 className="text-3xl font-extrabold text-gray-900 dark:text-gray-100">
            {user.username}
          </h2>

          <div className="divide-y divide-gray-300 dark:divide-gray-700">
            <div className="flex justify-between py-3">
              <span className="text-xs font-mono uppercase tracking-wide text-gray-500">
                Email
              </span>
              <span className="text-gray-900 dark:text-gray-100 break-all">
                {user.email}
              </span>
            </div>

            <div className="flex justify-between py-3">
              <span className="text-xs font-mono uppercase tracking-wide text-gray-500">
                Member since
              </span>
              <span className="text-gray-900 dark:text-gray-100">
                {new Date(user.created_at).toLocaleString("fi-FI")}
              </span>
            </div>
          </div>
        </article>
      ) : (
        <article className="w-full max-w-xl bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 shadow-xl rounded-2xl p-8 text-center">
          <p className="text-xs font-mono uppercase tracking-widest text-purple-500">
            Loading
          </p>

          <h2 className="text-2xl font-bold text-gray-500 mt-2">
            Fetching profile…
          </h2>
        </article>
      )}
    </section>
  );
};

export default Profile;
