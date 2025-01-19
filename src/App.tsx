import Categories from "./components/Categories/Categories";
import Header from "./components/Header/Header";
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
    </>
  )
}

export default App
