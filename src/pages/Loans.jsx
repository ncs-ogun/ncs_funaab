const Loans = () => {
  return (
    <main>
      <section className="py-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Agricultural Loans</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg space-y-4">
              <h2 className="text-xl font-semibold">Small Farm Loan</h2>
              <p className="text-gray-600">Up to ₦500,000</p>
              <button className="bg-primary text-white px-4 py-2 rounded-lg w-full">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Loans; 