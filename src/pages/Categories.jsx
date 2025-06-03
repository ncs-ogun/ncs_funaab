const Categories = () => {
  return (
    <main>
      <section className="py-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Product Categories</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Crops & Grains</h2>
            </div>
            <div className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Livestock</h2>
            </div>
            <div className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">Farm Equipment</h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Categories; 