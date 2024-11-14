
const Markiting = () => {
  return (
    <>
      <div className="grid items-center lg:grid-cols-2">
        <div className="flex flex-wrap z-[10]  bg-[#506dff]">
          <div className="w-full px-20 lg:w-full">
            <div className="max-w-[490px] py-[100px] lg:py-[97px]">
              <span className="block mb-3 text-base font-semibold text-white">
                Watch Our Intro Video
              </span>
              <h2 className="mb-6 text-3xl font-bold leading-snug text-white sm:text-4xl sm:leading-snug md:text-[40px] md:leading-snug">
                Making world a better place for you and us
              </h2>
              <p className="text-base leading-relaxed text-white mb-9">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
                at quam fringilla, scelerisque nisl in, accumsan diam. Quisque
                sollicitudin risus eu tortor euismod imperdiet.
              </p>
              <a href="javascript:void(0)" className="inline-block py-3 text-base font-medium text-white border border-white rounded-full px-9 hover:bg-white hover:text-[blue]">
                Know More
              </a>
            </div>
          </div>
        </div>
        <div className="">
           <a href="#!">
            {/* <img className="lg:h-24 h-16 absolute lg:mt-56 mt-40 lg:-mx-80 bg-blue-600 w-full" src="/public/Images/StartUp/playbtn.svg" alt="" /> */}
            </a> 
            <img  className="h-max w-full" src="/public/Images/StartUp/image-01.jpg" alt="" />
        </div>
      </div>
        
              </>
)
}

export default Markiting