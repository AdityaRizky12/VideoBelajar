import Navbar from "./component/navbar";
import Hero from "./component/hero";
import VideoCatalog from "./component/courseSection";
import FooterSection from "./component/footer"
import Newlesster from "./component/Newlesster";
import Kategori from "./component/kategori";

const Home = ({ courses }) => {
    return ( 
        <div>
          <Hero/>
          <Kategori/>
          <VideoCatalog courses={courses}/>
          <Newlesster/>
        </div>
     );
}
 
export default Home;