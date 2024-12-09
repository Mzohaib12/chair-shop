import "remixicon/fonts/remixicon.css";

export default function Footer(){

     return(
<>
<div className="footer grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 min-h-[318px] bg-gray-100 px-[46px] mt-[98px]">
 <div className="cont" >
 <div className="sofa flex items-center gap-2 pt-[98px]">
          <img src="/sofa.svg" alt="Sofa" className="w-6 h-6" />
          <h1 className="text-xl font-medium">Comforty</h1>
        </div>
        <p className="pt-[6px] text-gray-500" style={{fontSize:"12px"}}>Vivamus tristique odio sit amet velit semper <br/>, eu posuere turpis interdum.<br/>
        Cras egestas purus </p>
        <div className="icons flex gap-x-4 mt-2">
        <i className="ri-facebook-circle-fill"></i>
        <i className="ri-twitter-fill"></i>
        <i className="ri-instagram-line"></i>
        <i className="ri-pinterest-line"></i>
        <i className="ri-youtube-fill"></i>
        </div>
 </div>
 <div className="cont pt-[98px]" >
    <h1 className="text-gray-500" style={{fontSize:"14px", fontWeight:"600"}}>CATEGORY</h1>
    <div className="list mt-4" style={{fontSize:"16px"}}>
        <h1>Sofa</h1>
        <h1>Arm Chair</h1>
        <h1>Wing Chair</h1>
        <h1>Desk Chair</h1>
        <h1>Wooden Chair</h1>
        <h1>Park Bench</h1>
    </div>
 </div>
 <div className="cont pt-[98px]">
 <h1 className="text-gray-500" style={{fontSize:"14px", fontWeight:"600"}}>SUPPORT</h1>
    <div className="list mt-4">
        <h1>Help & Support</h1>
        <h1>Teams & Conditions</h1>
        <h1>Privacy Policy</h1>
        <h1>Help</h1>
    </div>
 </div>
 <div className="cont pt-[98px]">
 <h1 className="text-gray-500" style={{fontSize:"14px", fontWeight:"600" }}>NEWSLETTER</h1>
 <div className="input mt-4 flex gap-1.5">
    <label htmlFor="email"></label>
    <input className="w-48" type="email" name="" id="email" />
    <button className="py-2 px-1 " style={{backgroundColor:"#029FAE",borderRadius:"8px"}}>Subscribe</button>
 </div>
 <p className="pt-[24px] text-gray-500" style={{fontSize:"12px"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur, optio.</p>
 </div>

</div>





</>





     );
}