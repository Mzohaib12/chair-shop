import About from "./About/page";
import Contact from "./Contact/page";
import Featured from "./Featured/page";
import Header from "./Header/page";
import NewStyles from "./NewStyles/page";
import OurProducts from "./OurProducts/page";
import SingleProduct from "./SingleProduct/[id]/page";
import TopProducts from "./TopProducts/page";


export default function Home() {
  return (
   <>
   
 <Header/>
 <Featured/>
 <TopProducts/>
 <NewStyles/>
 <OurProducts/>

   </>
  );
}
