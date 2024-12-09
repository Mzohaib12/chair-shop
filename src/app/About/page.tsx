export default function About(){

     return(

<>

<div className="wrap w-full mt-10">
    <div className="cont1 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 w-[80%] m-auto gap-4" >

    <div className="left h-[478px] p-[64px] relative"style={{backgroundColor:"#007580"}}>
        <h1 className="text-white font-black text-lg">About Us - Comforty</h1>
        <p className="text-white pt-8">At Comforty, we believe that the right chair can transform your space and elevate your comfort. Specializing in ergonomic design, premium materials, and modern aesthetics, we craft chairs that seamlessly blend style with functionality. </p>
        <button className="text-white px-4 py-2 rounded absolute bottom-12" style={{backgroundColor:"#258992"}}>View Collection</button>
    </div>
    <div className="right h-[478px]">
        <img className="object-cover w-full h-full" src="/images/image2.png" alt="" />
    </div>
    </div>
    <h1 className="text-center mt-32 font-black text-xl">What makes our Brand Different</h1>
    <div className="cont2 w-[80%] m-auto  grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mt-16">
        <div className="box bg-gray-200 p-6" >
            <h1 className="font-black pb-3" style={{color:"#007580"}}>Next day as standard</h1>
            <p style={{color:"#007580"}}>Order before 3pm and get your order the next day as standard</p>
        </div>
        <div className="box bg-gray-200 p-6">
            <h1 className="font-black pb-3" style={{color:"#007580"}} >Made by true artisans</h1>
            <p style={{color:"#007580"}}>Handmade crafted goods made with real passion and craftmanship</p>
        </div>
        <div className="box bg-gray-200 p-6">
            <h1 className="font-black pb-3" style={{color:"#007580"}}>Unbeatable prices</h1>
            <p style={{color:"#007580"}}>For our materials and quality you won’t find better prices anywhere</p>
        </div>
        <div className="box bg-gray-200 p-6">
            <h1 className="font-black pb-3" style={{color:"#007580"}}>Recycled packaging</h1>
            <p style={{color:"#007580"}}>We use 100% recycled to ensure our footprint is more manageable</p>
        </div>
    </div>
</div>



</>

     );
}