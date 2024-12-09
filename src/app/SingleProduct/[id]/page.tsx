import Featured from "@/app/Featured/page";
import { useRouter } from "next/router";

interface Product {
  id: string;
  name: string;
  price: string;
  description: string;
  image: string;
  color: string;
}

// Mock product data for demonstration
const products: Product[] = [
  {
    id: "1",
    name: "Library School Chair",
    price: "20.00 USD",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    image: "/images/image1.png",
    color: "#029FAE",
  },
  {
    id: "2",
    name: "Office Desk Chair",
    price: "45.00 USD",
    description: "Ergonomic and stylish office desk chair.",
    image: "/images/image2.png",
    color: "#FF5733",
  },
  {
    id: "3",
    name: "Office Desk Chair",
    price: "45.00 USD",
    description: "Ergonomic and stylish office desk chair.",
    image: "/images/image2.png",
    color: "#FF5733",
  },
  {
    id: "4",
    name: "Office Desk Chair",
    price: "45.00 USD",
    description: "Ergonomic and stylish office desk chair.",
    image: "/images/image2.png",
    color: "#FF5733",
  },
];

const getProductById = (id: string) => {
  return products.find((product) => product.id === id);
};

export default function SingleProduct({ params }: { params: { id: string } }) {
  const product = getProductById(params.id);

  if (!product) {
    return (
      <div className="wrap w-[100%] flex justify-center">
        <h1>Product not found</h1>
      </div>
    );
  }

  return (
    <>
      <div className="wrap w-[100%] flex justify-center mt-10">
        <div
          className="item grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-[92%] h-auto "
          
        >
          <div className="image w-full h-full">
            <img
              className="h-full w-full  object-cover"
              src={product.image}
              alt={product.name}
            />
          </div>
          <div className="item-info pt-20 pl-10">
            <div
              className="top-info pb-4"
              style={{
                borderBottom: "1px solid black ",
              }}
            >
              <h1
                className="font-black"
                style={{ fontSize: "40px", width: "300px" }}
              >
                {product.name}
              </h1>
              <h1
                className="py-1 px-1 text-white mt-4"
                style={{
                  backgroundColor: product.color,
                  width: "100px",
                  borderRadius: "30px",
                }}
              >
                {product.price}
              </h1>
            </div>
            <p className="pt-4 text-gray-400 w-[60%]">
              {product.description}
            </p>
            <button className="py-2 px-2 rounded-full mt-6" style={{backgroundColor:product.color , color:"white"}}>Add to Cart</button>
          </div>
        </div>
      </div>
      <Featured/>
    </>
  );
}
