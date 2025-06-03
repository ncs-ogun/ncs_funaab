const Products = () => {
  return (
    <main>
      <section className="py-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Our Products</h1>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="border rounded-lg overflow-hidden">
              <img src="/images/products/sample.jpg" alt="Product" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h2 className="font-semibold">Farm Equipment</h2>
                <p className="text-gray-600">High-quality farming tools</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Products; 