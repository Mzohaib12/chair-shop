export default function NewStyles() {
    return (
      <>
      <div className="wrapper w-full h-[648px] flex justify-center mt-32">

        <div className="container grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 h-[100%] w-[92%] gap-3 " >
       <div className="left"  >
        <img className="w-full object-cover h-full" src="/images/image3.png" alt="" />
       </div>
        <div className="right grid grid-cols-2 grid-rows-2 gap-3"  >
         <div className="box">
            <img className="h-full w-full object-cover" src="/images2/image2.png" alt="" />
         </div>
         <div className="box">
         <img className="h-full w-full object-cover" src="/images/image2.png" alt="" />
         </div>
         <div className="box">
         <img className="h-full w-full object-cover" src="/images2/image3.png" alt="" />
         </div>
         <div className="box">
         <img className="h-full w-full object-cover"  src="/images/image4.png" alt="" />
         </div>
        </div>

        </div>

      </div>




        </>
    );
  }
  