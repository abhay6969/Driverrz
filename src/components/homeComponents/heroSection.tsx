import main1 from "../../assets/main1.png";
export const HeroSection = ()=>{
    return(
        <div className="w-full h-screen bg-cover bg-center relative">
            <div className="w-full flex flex-row justify-center items-center h-full bg-black bg-opacity-50">
               <div className="w-1/2 flex flex-col justify-center items-center border-2 border-gray-300 rounded-lg">
                     <h1 className="text-5xl text-white font-bold mb-4">Welcome to Driverrz</h1>
                     <p className="text-lg text-gray-300 mb-8">Your one-stop solution for all your travel needs.</p>
                     <button className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition duration-300">Get Started</button>
               </div>
               <div className="w-1/2 h-1/2 border-2 border-gray-300 rounded-lg overflow-hidden">    
                <img src={main1} alt="" className="w-full h-full object-cover overflow-x-clip "/>
               </div>
            </div>
            
        </div>
    )
}