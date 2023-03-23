import {createBrowserRouter} from "react-router-dom";
import Header from "../components/header/Header.jsx";
import Footer from "../components/footer/Footer.jsx";
import Main from '../pages/Main.jsx'
import Catalogue from "../components/header/Catalogue.jsx";
import Cart from "../components/cart/Cart.jsx";
import Card from "../components/card/Card.jsx";
import NotFound from "../pages/NotFound.jsx";
import Registration from "../components/auth/Registration.jsx";
import Authorization from '../components/auth/Authorization.jsx'
import Password_recovery from "../components/auth/Password-recovery.jsx";
// import Catalog from '../pages/Catalog'
// import ProductPage from '../pages/ProductPage'

const path = (import.meta.env.PROD)? '/shop-template' : ''
  
const router = createBrowserRouter([
  {
    path: `${path}//`,
    element: (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/catalogue`,
    element: (
      <div>
        <Header />
        <Catalogue />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/cart`,
    element: (
      <div>
        <Header />
        <Cart />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/card`,
    element: (
      <div>
        <Header />
        <Card />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/registration`,
    element: (
      <div>
        <Header />
        <Registration />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/authorization`,
    element: (
      <div>
        <Header />
        <Authorization />
        <Footer />
      </div>
    )
  },
  {
    path: `${path}/recoverypasswoed`,
    element: (
      <div>
        <Header />
        <Password_recovery />
        <Footer />
      </div>
    )
  },
  // {
  //   path: `${path}/pagenofound`,
  //   element: (
  //     <div>
  //       <Header />
  //       <NotFound />
  //       <Footer />
  //     </div>
  //   )
  // },
  // {
  //   path: `${path}/products/:id`,
  //   element: <ProductPage />
  // },
]);

export default router;