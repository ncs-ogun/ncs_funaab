const Footer = () => {
  return (
    <footer className="py-16">
      <div className="space-y-5">
        <div className="container flex md:flex-row flex-col justify-between gap-8">
          <div className="space-y-7">
            <div>
              <a href="/" className="flex items-center gap-2" id="logo">
                <img src="/images/logo.png" alt="AgroPlus Logo" width="34" height="34" />
                <span className="font-bold text-2xl">AgroPlus</span>
              </a>
            </div>

            <p className="text-sm text-gray-500 max-w-md">
              Connecting farmers with buyers and providing innovative financial solutions for agricultural growth. Your trusted partner in agricultural commerce and finance.
            </p>

            <div className="space-y-3">
              <p className="md:text-lg font-semibold">Payment Methods</p>
              <div className="flex items-center gap-2 flex-wrap max-w-lg">
                <div className="border rounded-md flex items-center justify-center px-4 min-h-10">
                  <img src="/images/payments/stripe.png" alt="" />
                </div>
                <div className="border rounded-md flex items-center justify-center px-4 min-h-10">
                  <img src="/images/payments/paystack.png" alt="" />
                </div>
                <div className="border rounded-md flex items-center justify-center px-4 min-h-10">
                  <img src="/images/payments/flutterwave.png" alt="" />
                </div>
                <div className="border rounded-md flex items-center justify-center px-4 min-h-10">
                  <img src="/images/payments/bank-transfer.png" alt="" />
                </div>
              </div>
            </div>
          </div>

          <div className="sm:flex flex-grow grid grid-cols-2 justify-between gap-4">
            <div className="space-y-4">
              <p className="font-semibold text-lg">Products</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-primary">Crops & Grains</a></li>
                <li><a href="#" className="hover:text-primary">Livestock</a></li>
                <li><a href="#" className="hover:text-primary">Farm Equipment</a></li>
                <li><a href="#" className="hover:text-primary">Agro-Chemicals</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-lg">Services</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-primary">Agricultural Loans</a></li>
                <li><a href="#" className="hover:text-primary">Farm Insurance</a></li>
                <li><a href="#" className="hover:text-primary">Financial Advisory</a></li>
                <li><a href="#" className="hover:text-primary">Market Analysis</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-lg">Company</p>
              <ul className="text-sm space-y-2">
                <li><a href="/about" className="hover:text-primary">About Us</a></li>
                <li><a href="#" className="hover:text-primary">Partners</a></li>
                <li><a href="#" className="hover:text-primary">Careers</a></li>
                <li><a href="/faq" className="hover:text-primary">FAQs</a></li>
              </ul>
            </div>
            <div className="space-y-4">
              <p className="font-semibold text-lg">Support</p>
              <ul className="text-sm space-y-2">
                <li><a href="#" className="hover:text-primary">Help Center</a></li>
                <li><a href="#" className="hover:text-primary">Contact Us</a></li>
                <li><a href="#" className="hover:text-primary">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-primary">Terms of Service</a></li>
              </ul>
            </div>
          </div>
        </div>
        <p className="text-center font-medium md:text-sm text-xs">&copy; 2025 AgroPlus. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 