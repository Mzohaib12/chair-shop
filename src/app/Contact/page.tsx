import "remixicon/fonts/remixicon.css";


export default function Contact(){

       return(

        <>
       <div className="wrap flex-col items-center mt-10">
        <h1 className="text-center font-black text-2xl">Get In Touch With Us</h1>
        <p className="text-center text-gray-500 px-2 sm:px-80 pt-4">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</p>
        <div className="form m-auto w-[70%] grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 mt-16 ">
<div className="left">
    <div className="box flex gap-2 mb-8">
    <i className="ri-map-pin-fill"></i>
        <div className="nested">
            <h1 className="font-black">Address</h1>
            <p className="text-gray-500 w-[150px]">236 5th SE Avenue, New York NY10000, United States</p>
        </div>
    </div>
    <div className="box flex gap-2 mb-8">
    <i className="ri-phone-fill"></i>
        <div className="nested">
            <h1 className="font-black">Phone</h1>
            <p className="text-gray-500 w-[150px]">Mobile: +(84) 546-6789<br/>
            Hotline: +(84) 456-6789</p>
        </div>
    </div>
    <div className="box flex gap-2 ">
    <i className="ri-time-fill"></i>
        <div className="nested">
            <h1 className="font-black">Working Time</h1>
            <p className="text-gray-500 w-[150px]">Monday-Friday: 9:00 - 22:00<br/>
            Saturday-Sunday: 9:00 - 21:00</p>
        </div>
    </div>
</div>
<div className="right flex-col items-center">
    <label htmlFor="myname" >Name:</label><br/>
    <input className="mb-6 p-4 rounded-lg" style={{border:"1px solid gray"}} type="text" name="" id="myname" placeholder="ABC" /><br/>
    <label htmlFor="myEmail">Email:</label><br/>
    <input style={{border:"1px solid gray"}} className="mb-6 p-4 rounded-lg"  type="email" name="" id="myEmail" placeholder="rameez2001@gmail.com"/><br/>
    <label htmlFor="mySubject">Subject:</label><br/>
    <input style={{border:"1px solid gray"}} className="mb-6 p-4 rounded-lg"  type="text" name="" id="mySubject" placeholder="Optional" /><br/>
    <label htmlFor="myMessage">Message:</label><br/>
    <textarea className="p-4 rounded" style={{border:"1px solid gray"}} name="" id="myMessage " placeholder="Hi I'd Like to ask About"></textarea><br/>
    <button className="py-2 px-16 rounded mt-4 text-white" style={{backgroundColor:"#029FAE"}}>Submit</button>
</div>
        </div>
        </div> 
        
        
        
        
        
        </>
       );
}