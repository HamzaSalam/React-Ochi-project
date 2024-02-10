import { motion } from "framer-motion";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1 overflow-hidden"
    >
      <div className="textstructure mt-36 px-20 overflow-hidden">
        {["We Create", "Eye Opening", "Presentation"].map((item, index) => {
          return (
            <div key={index} className="masker">
              <div className="w-fit flex items-end overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="mr-5 w-[9vw] rounded-md h-[4.8vw] -top-[.6vw] relative overflow-hidden "
                  >
                    <img
                      className="img w-full h-full bg-cover"
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSonmXybNcnTO6rFd0jjzW39LQoF5OD_uvUDA&usqp=CAU"
                    ></img>
                  </motion.div>
                )}
                <h1 className="pt-[2vw] mb-[2vw] uppercase text-[7vw] leading-[.38] tracking-tighter font-['Founders Grotesk X-Condensed'] font-bold">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[2px] border-zinc-700 mt-32 flex justify-between items-center py-5 px-20">
        {["For public and private companies", "the first pitch to IPO"].map(
          (item, index) => (
            <p
              key={index}
              className="text-md font-light tracking-tight leading-none"
            >
              {item}
            </p>
          )
        )}
        <div className="start flex items-center gap-1 overflow-hidden">
          <div className="px-5 py-2 border-[1px] border-zinc-400 rounded-full text-md uppercase">
            Start the Project
          </div>
          <div className="w-10 h-10 border-2 border-zinc-700 rounded-full flex items-center justify-center">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
