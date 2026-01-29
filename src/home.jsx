import Navbar from "./component/navbar";
import Hero from "./component/hero";
import CourseSection from "./component/courseSection"
import FooterSection from "./component/footer"

const Home = () => {
    return ( 
        <div>
          <Navbar/>
          <Hero/>
          <CourseSection/>
        <FooterSection/>
        </div>
     );
}
 
export default Home;