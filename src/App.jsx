// import Navbar from "./Components/Navbar2";

// export default function App() {
//   return (
//     <>
//     <div className="">
//     <Navbar />
//     </div>
//     </>
//   )
// }

// App.js
import Asking from "./Components/A&Q";
import BusinessSite from "./Components/BusinessSite";
import Cards from "./Components/Cards";
import Client from "./Components/Client";
import DarkMood from "./Components/DarkMood";
import Dealing from "./Components/Dealing";
import Email from "./Components/Email";
import Footer from "./Components/Footer";
import Markiting from "./Components/Markiting";
import MemberShip from "./Components/MemberShip";
import Navbar from "./Components/Navbar2";
import Prising from "./Components/Prising";

export default function App() {
  return (
    <>
      <Navbar />
       <BusinessSite />
       <Cards />
       <Markiting />
       <Prising />
       <MemberShip />
       <Asking />
       <Dealing />
       <Client />
       <Email />
       <Footer />
       <DarkMood />
    </>
  );
}

