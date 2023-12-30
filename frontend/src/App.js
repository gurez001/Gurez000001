import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Header } from "./components/layout/header/Header";
import { Home } from "./components/home/Home";
import { Footer } from "./components/layout/footer/Footer";
import Shop from "./components/shop/Shop";
import ProductDetails from "./components/productDetails/ProductDetails";
import LoginSingup from "./components/user/LoginSingup";
import { useEffect, useState } from "react";
import store from "./store";
import { LoadUser } from "./actions/UserAction";
import { Account } from "./components/account/Account";
import Loader from "./components/layout/loader/Loader";
import { useSelector } from "react-redux";
import { ProtectedRoute } from "./components/route/ProtectedRoute";
import { UpdateProfile } from "./components/account/assets/UpdateProfile";
import PasswordUpdate from "./components/account/assets/PasswordUpdate";
import Cart from "./components/cart/Cart";
import { Shipping } from "./components/shipping/Shipping";
import { ConfirmStep } from "./components/shipping/assets/ConfirmStep";
import ProccessPaymentStep from "./components/shipping/assets/ProccessPaymentStep";
import { OrderSuccess } from "./components/order/OrderSuccess";
import { OrderMe } from "./components/order/OrderMe";
import { OrderDetails } from "./components/order/assets/OrderDetails";
import { Dashboard } from "./components/admin/dashboard/Dashboard";
import { AllProducts } from "./components/admin/products/allproducts/AllProducts";
import { CreateProduct } from "./components/admin/products/createproduct/CreateProduct";
import UpdateProduct from "./components/admin/products/updateproduct/UpdateProduct";
import OrderList from "./components/admin/orders/orderlist/OrderList";
import { UpdateOrders } from "./components/admin/orders/updateorders/UpdateOrders";
import { AllUsers } from "./components/admin/users/allusers/AllUsers";
import UpdateUser from "./components/admin/users/updateuser/UpdateUser";
import { Reviews } from "./components/admin/productreviews/reviews/Reviews";
import AllImages from "./components/admin/ImageGellery/allImages/AllImages";
import PrivacyPolicy from "./components/layout/PrivacyPolicy";
import TermsAndConditions from "./components/layout/TermsAndConditions";
import Otpverification from "./components/user/Otpverification";
import ErrorPage from "./components/404Page/ErrorPage";
import ErrorBoundary from "./utils/ErrorBoundary";
import ForgetPassword from "./components/user/ForgetPassword";
import ResetPassword from "./components/user/ResetPassword";
import WishList from "./components/wishlist/WishList";
import Category from "./components/category/Category";
import ContactUs from "./components/contact us/ContactUs";
import Producttracking from "./components/tracking/Producttracking";
import Ordercancel from "./components/tracking/Ordercancel";
import CreatePost from "./components/admin/post/createpost/CreatePost";
import AllPost from "./components/admin/post/allpost/AllPost";
import SubCategory from "./components/subcategory/SubCategory";
import PaymentDetails from "./components/admin/orders/updateorders/assets/PaymentDetails";
import AllCategory from "./components/admin/category/allCategory/AllCategory";
import UpdateCategory from "./components/admin/category/updateCtegory/UpdateCategory";
import BottomNav from "./components/layout/BottomNav/BottomNav";
import Editor from "./components/admin/editor/Editor";
import { ImageUploaderForm } from "./components/admin/ImageGellery/uploadimage/ImageUploaderForm";



function App() {
  const { loading } = useSelector((state) => state.user);
  const [pageLoad, SetLoad] = useState(true);

  useEffect(() => {
    store.dispatch(LoadUser());
    if (!loading) {
      SetLoad(false);
    }
  }, []);

  return (
    <Router>
      {pageLoad ? (
        <Loader />
      ) : (
        <>
          <Header />
          <div className="page">
            <div className="main">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/shop" element={<Shop />} />
                <Route path="/product-category/:category" element={<Category />} />
                <Route path="/product-category/:category/:id" element={<SubCategory />} />
                <Route path="/wishlist" element={<WishList />} />
                <Route path="/otp-verification" element={<Otpverification />} />
                <Route path="/forget-password" element={<ForgetPassword />} />
                <Route path="/forget-password/:token" element={<ResetPassword />} />

                <Route
                  path="/product/:id"
                  element={
                    <ErrorBoundary>
                      <ProductDetails />
                    </ErrorBoundary>
                  }
                />

                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/editor" element={<Editor />} />
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
                <Route path="/registration" element={<LoginSingup />} />
                {/* <Route path="/category/:id" element={<Dolls />} /> */}
                <Route
                  path="/account"
                  element={<ProtectedRoute Component={Account} />}
                />
                <Route
                  path="/account/me/update"
                  element={<ProtectedRoute Component={UpdateProfile} />}
                />
                <Route
                  path="/account/password/update"
                  element={<ProtectedRoute Component={PasswordUpdate} />}
                />
                <Route
                  path="/shipping"
                  element={<ProtectedRoute Component={Shipping} />}
                />
                <Route
                  path="/shipping/order/confirm"
                  element={<ProtectedRoute Component={ConfirmStep} />}
                />
                <Route
                  path="/*"
                  element={<ProtectedRoute Component={ErrorPage} />}
                />
                <Route
                  path="/404"
                  element={<ProtectedRoute Component={ErrorPage} />}
                />
                <Route
                  path="/order/success"
                  element={<ProtectedRoute Component={OrderSuccess} />}
                />
                <Route
                  path="/order/me"
                  element={<ProtectedRoute Component={OrderMe} />}
                />
             
                <Route
                  path="/order/:id"
                  element={<ProtectedRoute Component={OrderDetails} />}
                />
                 <Route
                  path="/order/:id/:trackingid"
                  element={<ProtectedRoute Component={Producttracking} />}
                />
                 <Route
                  path="/order/ordercancel"
                  element={<ProtectedRoute Component={Ordercancel} />}
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedRoute isAdmin={true} Component={Dashboard} />
                  }
                />
                <Route
                  path="/admin/all-products"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllProducts} />
                  }
                />
                 <Route
                  path="/admin/post/all-post"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllPost} />
                  }
                />
                 <Route
                  path="/admin/post/add-new-post"
                  element={
                    <ProtectedRoute isAdmin={true} Component={CreatePost} />
                  }
                />
               
                <Route
                  path="/admin/create-product"
                  element={
                    <ProtectedRoute isAdmin={true} Component={CreateProduct} />
                  }
                />
                 <Route
                  path="/admin/categorie"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllCategory} />
                  }
                />
                  <Route
                  path="/admin/upsate-categorie/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateCategory} />
                  }
                />

                <Route
                  path="/admin/update-product/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateProduct} />
                  }
                />
                <Route
                  path="/admin/orders"
                  element={
                    <ProtectedRoute isAdmin={true} Component={OrderList} />
                  }
                />

                <Route
                  path="/admin/update-orders/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateOrders} />
                  }
                />
                 <Route
                  path="/admin/update-orders/:id/:paymentid"
                  element={
                    <ProtectedRoute isAdmin={true} Component={PaymentDetails} />
                  }
                />
                <Route
                  path="/admin/users"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllUsers} />
                  }
                />
                <Route
                  path="/admin/user-update/:id"
                  element={
                    <ProtectedRoute isAdmin={true} Component={UpdateUser} />
                  }
                />
                <Route
                  path="/admin/reviews"
                  element={
                    <ProtectedRoute isAdmin={true} Component={Reviews} />
                  }
                />
                <Route
                  path="/admin/upload/media-new"
                  element={
                    <ProtectedRoute isAdmin={true} Component={ImageUploaderForm} />
                  }
                />
                    <Route
                  path="/admin/upload/library"
                  element={
                    <ProtectedRoute isAdmin={true} Component={AllImages} />
                  }
                />
                <Route path="/cart" element={<Cart />} />
                {/* <Route
                  path="/shipping/proccess/payment"
                  element={
                    <ProtectedRoute Component={ProccessPaymentStep} />
                  }
                /> */}

                <Route
                  path="/shipping/proccess/payment"
                  element={<ProtectedRoute Component={ProccessPaymentStep} />}
                />
              </Routes>
            </div>
          </div>
          <Footer />
          <BottomNav />
        </>
      )}
    </Router>
  );
}

export default App;