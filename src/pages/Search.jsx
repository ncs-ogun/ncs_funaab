const Search = () => {
  return (
    <main>
      <section className="py-16">
        <div className="container">
          <h1 className="text-3xl font-bold mb-8">Search Results</h1>
          <div className="space-y-4">
            <input 
              type="text" 
              placeholder="Search products..." 
              className="w-full max-w-xl border rounded-lg p-2"
            />
            <p className="text-gray-500">No results found</p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Search; 