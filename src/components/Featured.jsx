import { motion, useAnimation } from "framer-motion";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <div className="w-full py-10">
      <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-7xl font-['Neue Montreal'] tracking-tight">
          Featured projects
        </h1>
      </div>
      <div className="px-20">
        <div className="card w-full flex mt-10 gap-5">
          <motion.div
            onHoverStart={() => handleHover(0)}
            onHoverEnd={() => handleHoverEnd(0)}
            className="cardcontainer w-1/2 h-[75vh] relative "
          >
            <h1 className="absolute flex text-[#CDEA68] overflow-hidden right-0 translate-x-1/2 top-1/2  -translate-y-1/2 left-1/9 z-[9] leading-none tracking-tight text-8xl">
              {"FYDE".split(" ").map((item, index) => (
                <motion.span
                  initial={{ y: "100%" }}
                  animate={cards[0]}
                  transition={{ ease: [0.22, 1, 0.36, 1], delay: index * 0.01 }}
                  key={index}
                  className="inline-block"
                >
                  {item}
                </motion.span>
              ))}
            </h1>
            <div className="card w-full h-full rounded-xl overflow-hidden">
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              ></img>
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handleHover(1)}
            onHoverEnd={() => handleHoverEnd(1)}
            className="cardcontainer relative w-1/2 h-[75vh] "
          >
            <div className="card w-full h-full rounded-xl overflow-hidden ">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2  -translate-y-1/2 left-1/9 z-[9] leading-none tracking-tight text-8xl">
                {"VISE".split(" ").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.01,
                    }}
                    key={index}
                    className="inline-block"
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              ></img>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
