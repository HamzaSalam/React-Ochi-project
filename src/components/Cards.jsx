function Cards() {
  return (
    <div className="w-full h-screen bg-zinc-100 flex items-center px-10 gap-5">
      <div className=" cardcantainer h-[55vh] w-1/2">
        <div className="relative card w-full h-full rounded-xl flex items-center justify-center bg-[#004D43]">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg"
          ></img>
          <button className="absolute -ml-5 px-4 py-1 left-10 bottom-10 border-[1px] rounded-full text-[#CDEA68] border-[#CDEA68] tracking-tighter">
            &copy;2019- 2022
          </button>
        </div>
      </div>
      <div className="cardcantainer h-[55vh] flex gap-5 w-1/2">
        <div className="relative card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg"
          ></img>
          <button className="absolute -ml-5 px-4 py-1 left-10 bottom-10 border-[1px] rounded-full tracking-tighter">
            RATING 5.0 ON CLUTCH
          </button>
        </div>
        <div className="relative card w-1/2 h-full rounded-xl bg-[#212121] flex items-center justify-center">
          <img
            className="w-32"
            src="https://ochi.design/wp-content/uploads/2022/04/logo003.png"
          ></img>
          <button className="absolute -ml-5 px-4 py-1 left-10 bottom-10 border-[1px] rounded-full tracking-tighter">
            BUSINESS BOOTCAMP ALUMNI
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cards;
