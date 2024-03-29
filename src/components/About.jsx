function About() {
  return (
    <>
      <div className="w-full p-20 bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black ">
        <h1 className="font-['Neue_Montreal'] text-[4vw] leading-[4.5vw] tracking-tight ">
          Ochi is a strategic partner for fast-growing tech businesses that need
          to raise funds, sell products, explain complex ideas, and hire great
          people.
        </h1>
        <div className=" flex gap-20 w-full border-t-[1px] pt-10 mt-20 border-[#a1b56b]">
          <div className="w-1/2">
            <h1 className="text-7xl">Our approach :</h1>
            <button className="flex uppercase gap-10 items-center justify-center px-10 py-6 bg-zinc-900 mt-10 rounded-full text-white">
              Read More
              <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
            </button>
          </div>
          <div className="w-1/2 h-[63vh] bg-red-600 rounded-xl overflow-hidden">
            <img
              className=" object-cover"
              src="https://ochi.design/wp-content/uploads/2022/05/Homepage-Photo-663x469.jpg"
            ></img>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
