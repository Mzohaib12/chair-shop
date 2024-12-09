import Link from "next/link";


export default function TopProducts() {
    const data2 = [
      {
        url: "/images2/image1.png",
        name: "Library Stool Chair",
        price: "$20",
        texture: "#029FAE",
        color: "white",
        category:"Wing Chair",
        amount:"3445 Products",
        id:1
      },
      {
        url: "/images2/image2.png",
        name: "Library Stool Chair",
        price: "$30",
        texture: "#F0F2F3",
        color: "black",
        category:"Wooden Chair",
        amount:"157 Products",
        id:2
      },
      {
        url: "/images2/image3.png",
        name: "Library Stool Chair",
        price: "$40",
        texture: "#F0F2F3",
        color: "black",
        category:"Desk Chair",
        amount:"154 Products",
        id:3
      },
    ];
  
    return (
      <div className="toprated relative py-8 px-4 sm:px-6 lg:px-12">
        <div className="heading mb-6">
          <h1 className="text-2xl sm:text-3xl font-light text-left">Top Categories</h1>
        </div>
  
        {/* Grid Container with Larger Product Containers */}
        <div className="f-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
          {data2.map((single, index) => (
            <div
              key={index}
              className="product bg-white rounded-lg shadow-md overflow-hidden relative"
              style={{ height: "auto" }}
            >
              {/* Image */}
              <div className="image relative h-72 w-full"> {/* Increased height for images */}
                <img
                  src={single.url}
                  alt={single.name}
                  className="h-full w-full object-cover"
                />
                <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-2 py-1 rounded">
                  New
                </span>
                <span className="absolute bottom-0 w-full h-16" style={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}>
                    <h1 className=" absolute left-4 text-white" style={{fontSize:"20px"}}>{single.category}</h1>
                    <p className="absolute left-4 bottom-3 " style={{fontSize:"14px", color:"lightgray"}}>{single.amount}</p>
                </span>

              </div>
  
              {/* Info */}
              <div className="info p-4">
                <h1 className="text-sm md:text-base font-light">{single.name}</h1>
                <p className="text-lg md:text-xl font-semibold">{single.price}</p>
              </div>
  
              {/* Cart Icon */}
              <div
                className="c-icon absolute flex justify-center items-center"
                style={{
                  backgroundColor: single.texture,
                  height: "44px",
                  width: "44px",
                  borderRadius: "10px",
                  bottom: "16px",
                  right: "16px",
                }}
              >
              <Link href={`/SingleProduct/${single.id}`}>
                <i
                  className="ri-shopping-cart-line"
                  style={{ color: single.color }}
                ></i>
              </Link>

              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  