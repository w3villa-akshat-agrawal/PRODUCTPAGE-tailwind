import React, { use, useState } from "react";
import "react-medium-image-zoom/dist/styles.css";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import ReactImageMagnify from "react-image-magnify";
import IMAGEZOOM from "./IMAGEZOOM";
const ProductPage = () => {
  const [show, setShow] = useState(false);
  const [mainImg, setmainImg] = useState("")
  const handelImgChange = (i)=>{
    setmainImg(i)
  }
 const products = [
  {
    id: 1,
    image: "/p11.png",
    onSale: true,
    rating: 4.5,
  },
  {
    id: 2,
    image: "/pp3.jpg",
    onSale: false,
    rating: 3.8,
  },
  {
    id: 3,
    image: "/pp4.jpeg",
    onSale: true,
    rating: 5.0,
  },
  {
    id: 4,
    image: "/pp5.jpeg",
    onSale: false,
    rating: 4.2,
  },
  {
    id: 5,
    image: "/p11.png",
    onSale: true,
    rating: 4.0,
  },
  {
    id: 6,
    image: "/pp6.jpg",
    onSale: true,
    rating: 3.9,
  },
  {
    id: 7,
    image: "/pp2.jpeg",
    onSale: false,
    rating: 4.7,
  }
];


  const handleClick = () => {
    setShow(true);
  };
  const handelClose = () => {
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/remixicon/4.6.0/remixicon.css"
      integrity="sha512-kJlvECunwXftkPwyvHbclArO8wszgBGisiLeuDFwNM8ws+wKIw0sv1os3ClWZOcrEB2eRXULYUsm8OVRGJKwGA=="
      crossorigin="anonymous"
      referrerpolicy="no-referrer"
    />;
    setShow(false);
  };

  return (
    <>
      <div className="container-fluid m-auto bg-[#F8F8F8] py-5  ">
        {/* top-section<i class="ri-facebook-line"></i> */}
        <div className="container-fluid border-b-2 border-gray-300">
          <div className="container m-auto">
            <div className="container m-auto pt-6 pb-3">
              <span className="text-2xl">Women's Maria Pump</span>
            </div>
            <hr className="border-b-2 border-red-600 w-25" />
          </div>
        </div>

        {/* product-section */}
        <div className="container m-auto py-8 ">
          <div className="grid grid-cols-2 gap-5 mb-10">
            {/* left-section */}
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-12 gap-1 ">
                <div className="col-span-2 ">
                  <div className="flex flex-col items-center gap-y-2  ">
                    {/* <div className=" h-[60px] w-[70px]">
                      <img
                        className="w-full h-full object-cover"
                        src="p1.png"
                        alt=""
                      />
                    </div>
                    <div className=" h-[60px] w-[70px]">
                      <img
                        className="w-full h-full object-cover"
                        src="p1.png"
                        alt=""
                      />
                    </div>
                    <div className=" h-[60px] w-[70px]">
                      <img
                        className="w-full h-full object-cover"
                        src="p1.png"
                        alt=""
                      />
                    </div>
                    <div className=" h-[60px] w-[70px]">
                      <img
                        className="w-full h-full object-cover"
                        src="p1.png"
                        alt=""
                      />
                    </div>
                    <div className=" h-[60px] w-[70px]">
                      <img
                        className="w-full h-full object-cover"
                        src="p1.png"
                        alt=""
                      />
                    </div>
                    <div className=" h-[60px] w-[70px]">
                      <img
                        className="w-full h-full object-cover"
                        src="p1.png"
                        alt=""
                      />
                    </div>
                    <div className=" h-[60px] w-[70px]">
                      <img
                        className="w-full h-full object-cover"
                        src="p1.png"
                        alt=""
                      />
                    </div> */}
                    {products.map((product)=>{
                       return ( <div onClick={()=>{
                            handelImgChange(product.image)
                       }} key={product.id} className=" h-[60px] w-[70px]">
                            <img className="h-full w-full object-cover" src ={product.image} alt="" />
                        </div>)
                    })}
                  </div>
                </div>

                <div className="col-span-10 h-[400px]  overflow-hidden ">
                    <IMAGEZOOM url = {mainImg} />
</div>
                {/* <div className="col-span-10 h-[500px] overflow-hidden group shadow">

    <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src:" /p11.png"
    },
    largeImage: {
        src: "/p1.png",
        width: 800,
        height: 800
    }
}} />
   <div className="w-[80%]">
             <ReactImageMagnify {...{
    smallImage: {
        alt: 'Wristwatch by Ted Baker London',
        isFluidWidth: true,
        src: " /p11.png"
    },
    largeImage: {
        src: "/p11.png",
        width: 836,
        height: 500
    },
    enlargedImagePosition: 'over',
    lensStyle:{ backgroundColor :'rgba(0,0,0,.6'}
}} />
   </div>
  
</div> */}
 {/* <div className="col-span-10 w-full h-[500px]  relative">
  <div className="w-100% h-[450px] border">
    <ReactImageMagnify 
        
      {...{
        smallImage: {
          alt: "Red high heel shoe",
          isFluidWidth: true,
          src: mainImg,
          width:"100px",
          height:"100px"
        },
        largeImage: {
          src: mainImg,
          width: 1600,
          height: 1600,
        },
        enlargedImageContainerDimensions: {
          width: "200%",
          height: "100%", // Full height of the container div (500px)
        },
        enlargedImagePosition: "beside",
        enlargedImageContainerStyle: {
          backgroundColor: "white",
          boxShadow: "0 5px 15px rgba(0,0,0,0.3)",
          borderRadius: "8px",
          zIndex: 100,
          height: "500px", // Fix the height to match container
          overflow: "hidden", // Prevent overflow
        },
        imageStyle: {
          height: "100%", // Stretch image to container height
          width: "auto",   // Maintain aspect ratio
          objectFit: "contain",
        },
        isHintEnabled: true,
      }}
    />
  </div>
</div> */}




              </div>
              <div className="mt-50">
                <ul className="flex items-center gap-1  ">
                  <li>tags:</li>
                  <li className="bg-gray-800 text-white rounded-2xl  text text-xs flex items-center justify-center px-3 py-1">
                    heels
                  </li>
                  <li className="bg-gray-800 text-white rounded-2xl  text text-xs flex items-center justify-center px-3 py-1">
                    heels
                  </li>
                  <li className="bg-gray-800 text-white rounded-2xl  text text-xs flex items-center justify-center px-3 py-1">
                    heels
                  </li>
                  <li className="bg-gray-800 text-white rounded-2xl  text text-xs flex items-center justify-center px-3 py-1">
                    heels
                  </li>
                </ul>
              </div>
            </div>

            {/* right-section */}
            <div>
              <div className="menu w-[60%] ">
                <ul className="flex justify-between text-xs">
                  <li className="text-gray-400 hover:font-bold hover:text-black hover:border-b hover:border-red-600 cursor-pointer">
                    DESCRIPTION
                  </li>
                  <li className="text-gray-400 hover:font-bold hover:text-black hover:border-b hover:border-red-600 cursor-pointer">
                    SPECIFICATIONS
                  </li>
                  <li className="text-gray-400 hover:font-bold hover:text-black hover:border-b hover:border-red-600 cursor-pointer">
                    REVIEWS
                  </li>
                  <li className="text-gray-400 hover:font-bold hover:text-black hover:border-b hover:border-red-600 cursor-pointer">
                    CUSTOM TAGS
                  </li>
                </ul>
              </div>

              {/* description */}
              <div className="description relative">
                <div
                  className={`overflow-hidden mt-3  ${
                    show ? "h-full" : "h-16"
                  }`}
                >
                  <p className="text-[13px]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
                    reiciendis exercitationem sequi voluptates ad, delectus
                    temporibus blanditiis magni facilis harum at ex similique
                    optio quae non laudantium quam sint. Assumenda quis ipsa
                    suscipit sint veritatis. Vitae, ut nihil sit expedita veniam
                    excepturi inventore, officia esse adipisci magnam autem
                    doloremque porro?Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Omnis, pariatur Lorem ipsum, dolor sit
                    amet consectetur adipisicing elit. Sunt magni optio
                    blanditiis accusantium! Totam explicabo culpa repellendus
                    eius consequuntur dolorum illum iusto id, dolores natus at?
                    Atque, eaque numquam, incidunt, sunt amet adipisci nisi
                    repudiandae maxime quaerat assumenda nobis. Repellendus?
                  </p>
                </div>

                <div
                  className={`absolute bottom-0 left-0 h-4 w-full bg-white opacity-75 z-10 ${
                    show ? "hidden" : "block"
                  }`}
                ></div>

                <button
                  onClick={handleClick}
                  className={`absolute z-20 -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-800 text-xs text-white px-4 py-1 rounded ${
                    show ? "hidden" : "block"
                  }`}
                >
                  Show More
                </button>

                <button
                  onClick={handelClose}
                  className={`absolute z-20 -bottom-7 left-1/2 transform -translate-x-1/2 bg-blue-800 text-xs text-white px-4 py-1 rounded ${
                    show ? "block" : "hidden"
                  }`}
                >
                  Show Less
                </button>
              </div>
              {/* stars */}
              <div className="mt-6 py-3 flex gap-3 items-center">
                <span className="text-sm text-gray-400">
                  <i class="ri-star-line"></i>
                  <i class="ri-star-line"></i>
                  <i class="ri-star-line"></i>
                  <i class="ri-star-line"></i>
                </span>
                <span className="text-blue-500 text-xs border-b">
                  Based on 5 reviews
                </span>
                <span className="text-blue-500 text-xs border-b">
                  {" "}
                  - Write a review{" "}
                </span>
              </div>
              {/* price section  */}
              <div className="w-full flex border-y-2 border-[#E2E2E2]">
                <div className="w-[15%] border-r border-[#E2E2E2]  flex flex-col pt-3 my-1 ">
                  <span className="text-2xl font-bold pr-3">$425.00</span>
                  <span className="text-xs text-gray-400">EX TAX $425.00</span>
                </div>
                <div className=" w-[85%] border-[#E2E2E2] flex justify-between">
                  <div className="ps-3 pt-3 text-sm">
                    <div className="text-rose-600">
                      <i class="ri-close-circle-line"></i> 2-3 day return
                    </div>
                    <span>Model:Model 6</span>
                  </div>
                  <div className="h-[90px] w-[90px] bg-white p-3 py-1 flex flex-col items-center border my-3">
                    <div className="bg-black text-white h-[60px] w-[60px] rounded-full flex flex-col justify-center items-center relative">
                      {/* <span className="absolute top-2 text-[8px] text-white">SOHO</span> */}
                      <span className="text-red-600 font-bold text-xs leading-tight text-center">
                        NEW
                        <br />
                        YORK
                      </span>
                      {/* <span className="absolute bottom-2 text-[8px] text-white">FASHION</span> */}
                    </div>
                    <a
                      href="#"
                      className="text-blue-600 mt-2 underline text-xs font-medium"
                    >
                      NY Fashion
                    </a>
                  </div>
                </div>
              </div>
              {/* select */}
              <div className="mt-3">
                <div className="flex flex-col gap-5">
                  <div>
                    <label for="fruits">Select list</label>
                    <br />
                    <select
                      className="border bg-white w-50 ps-2"
                      id="fruits"
                      name="fruits"
                    >
                      <option value=""> Select an option --</option>
                      <option value="apple">Apple</option>
                      <option value="banana">Banana</option>
                      <option value="mango">Mango</option>
                      <option value="grape">Grape</option>
                    </select>
                  </div>
                  <div>
                    {" "}
                    <span>Multiple Choices</span>
                    <ul className="flex items-center gap-5 mt-2">
                      <li className="p-2 py-1 bg-gray-100 border shadow-2xl">
                        Xl
                      </li>
                      <li className="p-2 py-1 bg-gray-100 border shadow-2xl">
                        L
                      </li>
                      <li className="p-2 py-1 bg-gray-100 border shadow-2xl">
                        M
                      </li>
                      <li className="p-2 py-1 bg-gray-100 border shadow-2xl">
                        S
                      </li>
                      <li className="p-2 py-1 bg-gray-100 border shadow-2xl">
                        XS
                      </li>
                    </ul>
                  </div>
                  <div>
                    <span>
                      Single Choice (With image{" "}
                      <span className="text-red-600">*</span> )
                    </span>
                    <ul className="flex items-center gap-3 mt-1">
                      <li className="h-[30px] w-[30px] rounded-full bg-violet-500"></li>
                      <li className="h-[30px] w-[30px] rounded-full bg-yellow-500"></li>
                      <li className="h-[30px] w-[30px] rounded-full bg-green-500"></li>
                    </ul>
                  </div>
                </div>
              </div>
              {/* Add to cart */}
              <div className=" py-3 mt-3 border-y-2 border-[#E2E2E2]">
                <div className="grid grid-cols-12 gap-x-1">
                  <div className="col-span-1 flex justify-center">
                    <input
                      className="w-full border  py-1 rounded ps-1 "
                      type="number"
                      min="1"
                      max="10"
                      step="1"
                      value="1"
                    />
                  </div>
                  <div className="col-span-7 ">
                    <button className="w-full py-2 rounded bg-blue-800  text-white">
                      {" "}
                      <i class="ri-shopping-cart-line"></i> Add to cart{" "}
                    </button>
                  </div>
                  <div className="col-span-3 ">
                    <button className="w-full py-2  rounded bg-green-800  text-white">
                      {" "}
                      <i class="ri-money-dollar-circle-line"></i> buy now{" "}
                    </button>
                  </div>
                  <div className="col-span-1  ">
                    <span className="bg-red-700 py-2 rounded  text-white w-[100%] flex items-center justify-center">
                      ?
                    </span>
                  </div>
                </div>
              </div>
              {/* last-section */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 mt-3 mb-2">
                  <span>
                    {" "}
                    <span className="text-red-600">
                      <i class="ri-heart-line"></i>
                    </span>{" "}
                    Add to Wish list
                  </span>
                  <span>
                    {" "}
                    <span>
                      <i class="ri-git-commit-fill"></i>
                    </span>
                    Compare this Product
                  </span>
                </div>
                <div className="">
                  <ul className="flex items-center gap-3">
                    <li className="bg-gray-400 px-2 py-1 text-white rounded">
                      <i class="ri-facebook-line"></i>
                    </li>
                    <li className="bg-gray-400 px-2 py-1 text-white rounded">
                      <i class="ri-twitter-line"></i>
                    </li>
                    <li className="bg-gray-400 px-2 py-1 text-white rounded">
                      <i class="ri-github-line"></i>
                    </li>
                    <li className="bg-gray-400 px-2 py-1 text-white rounded">
                      <i class="ri-youtube-line"></i>
                    </li>
                    <li className="bg-gray-400 px-2 pr-7 py-1 text-white rounded">
                      + 86
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid bg-[#F1F2F6] py-5 ">
        <div className="container m-auto flex flex-col gap-3 pb-8 ">
          <div>
            <span className="border-b border-red-600">Realted products</span>
          </div>
          <div className="card h-[300px] w-[220px] flex flex-col justify-between gap-2 bg-white  ">
            <div className="h-[60%] px-2 py-1">
              <img className="h-full w-full object-cover" src="p2.png" alt="" />
            </div>
            <div className="flex flex-col px-2">
              <span className="text-blue-500">Stilleto high heel shoes</span>
              <span>$450</span>
            </div>
            <div className="flex items-center justify-between px-2 py-2 border-t-1">
              <button className="bg-blue-700 text-white rounded px-2">
                Add to cart{" "}
              </button>
              <div>
                <span>
                  <i class="ri-heart-line"></i>
                </span>
                <span>
                  <i class="ri-compass-4-line"></i>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
