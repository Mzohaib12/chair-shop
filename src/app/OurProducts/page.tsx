import Link from "next/link";

export default function OurProducts(){
    const data = [
        {
          url: "/images/image1.png",
          name: "Library Stool Chair",
          price: "$20",
          texture: "#029FAE",
          color: "white",
          id:1
        },
        {
          url: "/images/image2.png",
          name: "Library Stool Chair",
          price: "$30",
          texture: "#F0F2F3",
          color: "black",
          id:2
        },
        {
          url: "/images/image3.png",
          name: "Library Stool Chair",
          price: "$40",
          texture: "#F0F2F3",
          color: "black",
          id:3
        },
        {
          url: "/images/image4.png",
          name: "Library Stool Chair",
          price: "$50",
          texture: "#F0F2F3",
          color: "black",
          id:4
        },
        {
          url: "/images2/image1.png",
          name: "Library Stool Chair",
          price: "$50",
          texture: "#F0F2F3",
          color: "black",
        },
        {
          url: "/images/image1.png",
          name: "Library Stool Chair",
          price: "$50",
          texture: "#F0F2F3",
          color: "black",
        },
        {
          url: "/images2/image2.png",
          name: "Library Stool Chair",
          price: "$50",
          texture: "#F0F2F3",
          color: "black",
        },
        {
          url: "/images2/image3.png",
          name: "Library Stool Chair",
          price: "$50",
          texture: "#F0F2F3",
          color: "black",
        },
      ];
    
      return (
        <div className="featured relative py-8 px-4 sm:px-6 lg:px-12">
          <div className="heading mb-6">
            <h1 className="text-2xl sm:text-3xl font-light text-center pt-32 font-black">Our Products</h1>
          </div>
          <div className="f-products grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {data.map((single, index) => (
              <div
                key={index}
                className="product bg-white rounded-lg shadow-md overflow-hidden relative"
              >
                {/* Image */}
                <div className="image relative h-56 w-full">
                  <img
                    src={single.url}
                    alt={single.name}
                    className="h-full w-full object-cover"
                  />
                  <span className="absolute top-4 left-4 bg-green-600 text-white text-xs px-2 py-1 rounded">
                    New
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