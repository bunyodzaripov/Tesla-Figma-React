import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineMenu, AiOutlineSearch, AiOutlineUser } from "react-icons/ai";
import Logo from "../../images/logo.png";
const Navbar = ({ onModelChange }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleMenu = () => {
      setIsOpen(!isOpen);
   };

   const activeLinkStyle = "text-blue-500 border-b-2 border-blue-500";

   return (
      <header className="text-white">
         <div className="flex items-center justify-between p-4 max-w-full mx-auto my-6">
            <div className="text-xl font-bold">
               <NavLink to="/model-g">
                  <img src={Logo} alt="Tesla Logo" className="h-6" />
               </NavLink>
            </div>

            <nav className="hidden md:flex space-x-6 text-sm">
               <NavLink
                  onClick={() => onModelChange("model-g")}
                  to="/model-g"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model G
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("model-3")}
                  to="/model-3"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model 3
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("model-x")}
                  to="/model-x"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model X
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("model-y")}
                  to="/model-y"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model Y
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("solar-roof")}
                  to="/solar-roof"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Solar Roof
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("solar-panels")}
                  to="/solar-panels"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Solar Panels
               </NavLink>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
               <AiOutlineSearch size={24} />
               <AiOutlineUser size={24} />
               <AiOutlineMenu size={24} onClick={toggleMenu} />
            </div>

            <div className="md:hidden flex items-center cursor-pointer">
               <AiOutlineMenu size={24} onClick={toggleMenu} />
            </div>
         </div>

         {/* Mobile menu */}
         {isOpen && (
            <nav className="md:hidden bg-black flex flex-col space-y-4">
               <NavLink
                  onClick={() => onModelChange("model-g")}
                  to="/model-g"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model G
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("model-3")}
                  to="/model-3"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model 3
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("model-x")}
                  to="/model-x"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model X
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("model-y")}
                  to="/model-y"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Model Y
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("solar-roof")}
                  to="/solar-roof"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Solar Roof
               </NavLink>
               <NavLink
                  onClick={() => onModelChange("solar-panels")}
                  to="/solar-panels"
                  className={({ isActive }) =>
                     isActive ? activeLinkStyle : "hover:text-blue-500"
                  }
               >
                  Solar Panels
               </NavLink>
            </nav>
         )}
      </header>
   );
};

export default Navbar;
