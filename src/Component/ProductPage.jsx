import React, { use, useState } from "react";

import IMAGEZOOM from "./IMAGEZOOM";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart } from "../features/Cart/CartSlice";
const ProductPage = () => {
  const [show, setShow] = useState(false);
  const [Rating, setRating] = useState("3.8")
  const [Onsale, setOnsale] = useState(true)
  const [price, setprice] = useState("")
  const [size, setsize] = useState("")
  const [pID, setpID] = useState("")
  const [productCount, setproductCount] = useState(0)
  const [cartItem, setcartItem] = useState({})
  const cart = useSelector((state)=> state.cart.value)
  const dispatch = useDispatch()
  const [mainImg, setmainImg] = useState("/pp3.jpg")
  const handelImgChange = (i) => {
    setmainImg(i.image)
    setRating(i.rating)
    setOnsale(i.onSale)
    setprice(i.payment)
    setpID(i.id)

  }
const products = [
  {
    id: "prod_001",
    image: "/pp-226.avif",
    onSale: true,
    rating: 4.5,
    payment: 1200,
  },
  {
    id: "prod_002",
    image: "/pp3.jpg",
    onSale: false,
    rating: 3.8,
    payment: 850,
  },
  {
    id: "prod_003",
    image: "/pp-21.avif",
    onSale: true,
    rating: 5.0,
    payment: 1500,
  },
  {
    id: "prod_004",
    image: "/pp-22.avif",
    onSale: false,
    rating: 4.2,
    payment: 950,
  },
  {
    id: "prod_005",
    image: "/pp-23.avif",
    onSale: true,
    rating: 4.0,
    payment: 1100,
  },
  {
    id: "prod_006",
    image: "/pp-21.avif",
    onSale: true,
    rating: 3.9,
    payment: 990,
  },
  {
    id: "prod_007",
    image: "/pp-25.avif",
    onSale: false,
    rating: 4.7,
    payment: 1400,
  }
];

const sizes = ["XL", "L", "M", "S", "XS"];

const handelSize = (selectedSize) => {
  setsize(selectedSize);
};

  const handleClick = () => {
    setShow(true);
  };
  // Add to cart function
 const handelAddToCart = () => {
  const item = {
    price,
    size,
    productCount,
    mainImg,
    pID
    
  };

  dispatch(AddtoCart(item));
  setsize("");
  setpID("")
  setproductCount(0);
  console.log(cart)
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
      <div className="container-fluid m-auto bg-[#F8F8F8] py-5 sm:px-0 px-2  ">
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
        <div className="container m-auto py-8  ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 sm:mb-10">
            {/* left-section */}
            <div className="flex flex-col justify-between">
              <div className="grid grid-cols-12 gap-1 ">
                <div className="sm:col-span-2 col-span-12 ">
                  <div className="flex sm:gap-x-0 gap-x-2 flex-wrap justify-center sm:flex-col items-center gap-y-2  ">

                    {products.map((product) => {
                      return (<div onClick={() => {
                        handelImgChange(product)
                      }} key={product.id} className=" h-[60px] w-[70px]">
                        <img className="h-full w-full object-cover" src={product.image} alt="" />
                      </div>)
                    })}
                  </div>
                </div>

                <div className="sm:col-span-10 col-span-12 h-[500px]  overflow-hidden relative ">
                  <IMAGEZOOM url={mainImg} />
                  <div className={`${Onsale ? "block" : "hidden"} sale absolute top-5 -left-5 bg-red-800 px-15 -rotate-[30deg]`}>
                    <div className=" text-white font-bold">
                      <span>onSale</span>
                    </div>
                  </div>
                  <div
                    className={`rating absolute top-2 right-2 ${Rating > 4 ? 'bg-green-800' : 'bg-yellow-400'
                      } text-white font-bold rounded`}
                  >
                    <div><span className="px-5">{Rating}</span></div>
                  </div>

                </div>




              </div>
              <div className=" sm:mt-50 mt-5 sm:mb-0 mb-3">
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
              <div className="menu sm:w-[60%] w-full ">
                <ul className="flex flex-wrap items-center justify-center gap-2 sm:justify-between text-xs">
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
                  className={`overflow-hidden mt-3  ${show ? "h-full" : "h-16"
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
                  className={`absolute bottom-0 left-0 h-4 w-full bg-white opacity-75 z-10 ${show ? "hidden" : "block"
                    }`}
                ></div>

                <button
                  onClick={handleClick}
                  className={`absolute z-20 -bottom-3 left-1/2 transform -translate-x-1/2 bg-blue-800 text-xs text-white px-4 py-1 rounded ${show ? "hidden" : "block"
                    }`}
                >
                  Show More
                </button>

                <button
                  onClick={handelClose}
                  className={`absolute z-20 -bottom-7 left-1/2 transform -translate-x-1/2 bg-blue-800 text-xs text-white px-4 py-1 rounded ${show ? "block" : "hidden"
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
              {/* price section <li>home</li> */}
              <div className="w-full flex sm:flex-row  border-y-2 border-[#E2E2E2]">
                <div className="sm:w-[15%] w-[40%] justify-center sm:justify-start border-r border-[#E2E2E2]  flex flex-col pt-3 my-1 ">
                  <span className="text-2xl font-bold pr-3">${price}</span>
                  <span className="text-xs text-gray-400">EX TAX $425.00</span>
                </div>
                <div className=" sm:w-[85%] w-[60%] border-[#E2E2E2] flex sm:flex-row flex-col sm:items-start items-center sm:justify-between">
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
  {sizes.map((s, idx) => (
    <li
      key={idx}
      onClick={() => handelSize(s)}
      className={`p-2 py-1 cursor-pointer border shadow-2xl ${
        size === s ? "bg-black text-white" : "bg-gray-100"
      }`}
    >
      {s}
    </li>
  ))}
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
                <div className="grid grid-cols-12 gap-x-1 gap-y-2">
                  <div className="sm:col-span-1 col-span-2 flex justify-center">
                    <input
                      onChange={(e)=>{
                          setproductCount(e.target.value)
                      }}  
                      className="w-full border  py-1 rounded ps-1 "
                      type="number"
                      min="1"
                      max="10"
                      step="1"
                      placeholder="1"
                      value={productCount}
                    />
                  </div>
                  <div className="sm:col-span-7 col-span-10 ">
                    <button onClick={handelAddToCart} className="w-full py-2 rounded bg-blue-800  text-white">
                      {" "}
                      <i class="ri-shopping-cart-line"></i> Add to cart{" "}
                    </button>
                  </div>
                  <div className="sm:col-span-3 col-span-6">
                    <button className="w-full py-2  rounded bg-green-800  text-white">
                      {" "}
                      <i class="ri-money-dollar-circle-line"></i> buy now{" "}
                    </button>
                  </div>
                  <div className="sm:col-span-1 col-span-6 ">
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
      {/* bottom-section */}
      <div className="container-fluid bg-[#F1F2F6] py-5 px-2 ">
        <div className="container m-auto flex flex-col gap-3 pb-8 ">
          <div>
            <span className="border-b border-red-600">Realted products</span>
          </div>
          <div className="card h-[300px] w-[220px] flex flex-col justify-between gap-2 bg-white  ">
            <div className="h-[60%] px-2 py-1">
              <img className="h-full w-full object-cover" src={mainImg} alt="mainImg" />
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
