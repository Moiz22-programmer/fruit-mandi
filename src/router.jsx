import AdminLayout from './layouts/AdminLayout';
import Dashboard from './pages/Dashboard';
import Ledger from './pages/Ledger';
// ... all other imports

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/login', element: <Login /> },
  {
    path: '/admin',
    element: <ProtectedRoute allowedRoles={['admin']}><AdminLayout /></ProtectedRoute>,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'ledger', element: <Ledger /> },
      { path: 'beparis', element: <BepariList /> },
      { path: 'beparis/:id', element: <BepariProfile /> },
      // ... all other routes
    ],
  },
  // e-commerce public routes
  { path: '/products', element: <EcommerceHome /> },
  { path: '/product/:id', element: <ProductDetail /> },
  { path: '/cart', element: <Cart /> },
  { path: '/checkout', element: <Checkout /> },
  { path: '/order/:id', element: <OrderTracking /> },
]);