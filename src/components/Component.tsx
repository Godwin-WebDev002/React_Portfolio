import { useState } from "react";
import { About } from "./Pages/About";
import { Contact } from "./Pages/Contact";
import { Projects } from "./Pages/Projects";

const Component = () => {
  const [currComp, setCurrComp] = useState("About");

  const handleClick = (component: any) => {
    setCurrComp(component);
  };

  return (
    <div className="bg-[#383B65] w-[100%] my-5 mt-15 sm:mt-5 h-content pb-10 rounded-3xl border-2 border-[#A294C7] text-[#F1E3F0] overflow-auto ">
      <div className="w-[100%] flex justify-end relative ">
        <nav className="bg-[#A294C7] w-[100%] sm:w-110 h-10 sm:rounded-bl-xl sm:relative fixed absolute top-0 right-0 z-20 ">
          <ul className="h-[100%] flex justify-evenly items-center">
            <li>
              <button
                onClick={() => handleClick("About")}
                className={`cursor-pointer font-semibold hover:text-[#252525] ${
                  currComp === "About" ? "text-[#0C2A28]" : "text-[#E4E1B6]"
                }`}
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Project")}
                className={`cursor-pointer font-semibold hover:text-[#252525] ${
                  currComp === "Project" ? "text-[#0C2A28]" : "text-[#E4E1B6]"
                }`}
              >
                Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleClick("Contact")}
                className={`cursor-pointer font-semibold hover:text-[#252525] ${
                  currComp === "Contact" ? "text-[#0C2A28]" : "text-[#E4E1B6]"
                }`}
              >
                Contact
              </button>
            </li>
          </ul>
        </nav>
      </div>

      {currComp === "About" && <About />}
      {currComp === "Project" && <Projects />}
      {currComp === "Contact" && <Contact />}
    </div>
  );
};

export default Component;
