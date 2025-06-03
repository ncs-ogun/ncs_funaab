const Login = () => {
  return (
    <main>
      <section className="py-16">
        <div className="container max-w-md mx-auto">
          <h1 className="text-3xl font-bold mb-8 text-center">Login</h1>
          <form className="space-y-4">
            <div>
              <label className="block mb-1">Email</label>
              <input type="email" className="w-full border rounded-lg p-2" />
            </div>
            <div>
              <label className="block mb-1">Password</label>
              <input type="password" className="w-full border rounded-lg p-2" />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg">
              Login
            </button>
          </form>
        </div>
      </section>
    </main>
  );
};

export default Login; 