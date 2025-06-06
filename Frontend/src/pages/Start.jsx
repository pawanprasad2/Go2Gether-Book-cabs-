import { Link } from "react-router-dom"


function Start() {
  return (
    <>
    <div className='home-container bg-contain  bg-no-repeat bg-[url(https://videos.openai.com/vg-assets/assets%2Ftask_01jvn53bzxf518rkaekwggyxx7%2F1747688007_img_0.webp?st=2025-05-28T10%3A50%3A14Z&se=2025-06-03T11%3A50%3A14Z&sks=b&skt=2025-05-28T10%3A50%3A14Z&ske=2025-06-03T11%3A50%3A14Z&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skoid=3d249c53-07fa-4ba4-9b65-0bf8eb4ea46a&skv=2019-02-02&sv=2018-11-09&sr=b&sp=r&spr=https%2Chttp&sig=q%2F8i0jK%2FXXXENKp%2FsgHe%2BR1PGsRn22IvD6Jr1cHoxL0%3D&az=oaivgprodscus)]  h-screen flex justify-between w-full flex-col '>
      <img className="" src="/" alt="" />
      <div className="bg-white  pb-7 py-3 px-3" >
        <h1 className="text-[15px]  ml-4   font-sans font-bold  " >Whenever, Wherever — Go with Go2Together.</h1>
        <Link to='/login' className=" flex items-center justify-center  w-full text-[18px]  font-semibold bg-[#fe742a] text-white py-3  rounded-xl mt-4" >Continue <i className=" ml-2  fa-solid fa-arrow-right-long"/></Link>

      </div>
     
    </div>
    </>
  )
}

export default Start