import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Leaderboard from "./pages/Leaderboard";
import Games from "./pages/Games";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Pricing from "./pages/Pricing";
import Login from "./pages/Login";
import Register from "./pages/Register";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Wishlist from "./pages/Wishlist";
import Compare from "./pages/Compare";
import HelpCenter from "./pages/HelpCenter";
import SellerProfile from "./pages/SellerProfile";
import CategoryLanding from "./pages/CategoryLanding";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import Dashboard from "./pages/account/Dashboard";
import Profile from "./pages/account/Profile";
import Wallet from "./pages/account/Wallet";
import Orders from "./pages/account/Orders";
import Notifications from "./pages/account/Notifications";
import Billing from "./pages/account/Billing";
import SellerDashboard from "./pages/seller/Dashboard";
import SellerProducts from "./pages/seller/Products";
import CreateProduct from "./pages/seller/CreateProduct";
import SellerOrders from "./pages/seller/Orders";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/games" element={<Games />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/category/:category" element={<CategoryLanding />} />
          <Route path="/pricing" element={<Pricing />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/help" element={<HelpCenter />} />
          <Route path="/seller/:seller" element={<SellerProfile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/about" element={<About />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/account" element={<Dashboard />} />
          <Route path="/account/profile" element={<Profile />} />
          <Route path="/account/wallet" element={<Wallet />} />
          <Route path="/account/orders" element={<Orders />} />
          <Route path="/account/notifications" element={<Notifications />} />
          <Route path="/account/billing" element={<Billing />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<SellerProducts />} />
          <Route path="/seller/products/create" element={<CreateProduct />} />
          <Route path="/seller/orders" element={<SellerOrders />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
