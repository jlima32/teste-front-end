import Brands from "./components/Brands/Brands";
import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
import Newsletter from "./components/Newsletter/Newsletter";
import Partners from "./components/Partners/Partners";
import Promotions from "./components/Promotions/Promotions";
import RelatedProducts from "./components/RelatedProducts/RelatedProducts";

function App() {

  return (
    <>
      <Header />
      <Promotions />
      <Categories />
      <RelatedProducts showNav={true}/>
      <Partners />
      <RelatedProducts showNav={false}/>
      <Partners />
      <Brands />
      <RelatedProducts showNav={false}/>
      <Newsletter />
    </>
  )
}

export default App
