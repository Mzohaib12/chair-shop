import "remixicon/fonts/remixicon.css";
export default function Top() {
  return (
    <>
      {/* Top Bar */}
      <div
        className="top flex flex-wrap items-center justify-between bg-[#272343] text-white text-xs py-2 px-300"
      >
        {/* Free Shipping Notice */}
        <div className="check flex items-center gap-2 ">
          <i className="ri-check-fill"></i>
          <p>Free shipping on all orders over $50</p>
        </div>

        {/* Language, FAQs, and Help */}
        <div className="lang flex items-center gap-6">
          <div className="eng flex items-center gap-1.5">
            <p>Eng</p>
            <i className="ri-arrow-down-s-line"></i>
          </div>
          <p>Faqs</p>
          <div className="help flex items-center gap-1.5">
            <i className="ri-information-line"></i>
            <p>Need Help</p>
          </div>
        </div>
      </div>

      {/* Middle Section */}
      <div
        className="middle flex flex-wrap items-center justify-between bg-[#F0F2F3] px-4 py-5"
      >
        {/* Logo Section */}
        <div className="sofa flex items-center gap-2">
          <img src="/sofa.svg" alt="Sofa" className="w-6 h-6" />
          <h1 className="text-xl font-medium">Comforty</h1>
        </div>

        {/* Cart Section */}
        <div
          className="user-link flex items-center gap-3 bg-white px-3 py-2 rounded-md"
        >
          <div className="cart flex items-center gap-2">
            <i className="ri-shopping-cart-line"></i>
            <p className="text-xs">Cart</p>
          </div>
          <img src="/no.svg" alt="User Icon" className="w-6 h-6" />
        </div>
      </div>
    </>
  );
}
