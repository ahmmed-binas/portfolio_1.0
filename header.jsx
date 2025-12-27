import { Search, Volume, Wifi, Sun } from "lucide-react";

function HeaderMain(){
    return(
    <div>

     <header className="w-full h-20 flex items-center fixed top-0 left-0 bg-transparent z-50 px-12 sm:px-12 md:px-[60px]"
>
  {/* Left: Logo */}
  <div className="flex items-center gap-3 text-xl">
    <span className="font-bold text-blue-500">Ahmed</span>
    <span className="text-gray-500 opacity-70 -rotate-6 mb-[20px]">K</span>
    <span className="text-gray-500 opacity-70 rotate-6 mb-[-20px]">P</span>
    <span className="font-bold text-blue-500">Binas</span>
  </div>

  {/* Middle: Tabs */}
  <div className="hidden lg:flex gap-6 px-10 ml-10">
    <span className="text-black cursor-pointer font-normal text-[18px]">categories</span>
    <span className="text-black cursor-pointer font-normal text-[18px]">home</span>
    <span className="text-black cursor-pointer font-normal text-[18px]">about</span>
    <span className="text-black cursor-pointer font-normal text-[18px]">fun stuff</span>
  </div>

  {/* Right: Icons */}
  <div className="flex items-center gap-6 ml-auto text-xl">
    <Search size={18} className="text-gray-600" />
    <Volume size={18} className="text-gray-600" />
    <Sun size={18} className="text-gray-600" />
    <Wifi size={18} className="text-gray-600" />
    
  </div>

</header>


    </div>
    

);
}
export default HeaderMain