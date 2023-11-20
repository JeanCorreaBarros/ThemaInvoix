import React,{useState} from "react";
import AllRights from "./AllRights";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Sidebar from "./Sidebar";


const DashoboardLayouth = ({children}) => {
  const [isVisible, setIsVisible] = useState(true);
  return (
    <div className="">
      <NavBar isVisible={isVisible} setIsVisible={setIsVisible}/>
      <div className="flex overflow-hidden bg-white pt-16">
        {isVisible?<Sidebar/>:""}
        <div id="main-content" className={`h-full w-full bg-white relative overflow-y-auto ${isVisible?"lg:ml-64":""}`}>
          {children}
          <Footer />
          <AllRights/>
        </div>
      </div>
    </div>
  );
};

export default DashoboardLayouth;
