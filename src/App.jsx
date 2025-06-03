import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './components/Layout';
import AppRoutes from './routes';
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <Router>
      <CartProvider>
        <Layout>
          <AppRoutes />
        </Layout>
      </CartProvider>
    </Router>
  );
};

export default App;
