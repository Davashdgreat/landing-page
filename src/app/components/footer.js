import Image from "next/image";

export default function Footer() {
  return (
    <div className="text-center px-6">

      <div className="pb-5">
        <Image 
        src="/logo.png" // Change to your actual image path
        alt="Logo"
        width={200}
        height={80}  
        />
      </div>

      <p className="text-3xl font-bold text-black mb-6 text-center w-[70%] mx-auto pb-7">
        Want To Be A Part Of Abuja’s Biggest Tech Community?
      </p>

      <button className="border-2 border-[#9524FF] rounded-2xl p-2 mb-7 items-center w-1/4 text-[#9524FF] hover:bg-[#9524FF] hover:text-white transition-all">
        <span>Register For Our Next Event</span>
        <span>  »</span>
      </button>

      <hr className="border-t border-[#ce9bfd] w-full my-4" />

      <div className="flex justify-between items-center">
      <div className="flex justify-center space-x-4 p-4">
  <a href="#" className="p-2 bg-[#a749ff] rounded-full">
    <Image 
      src="/fb.png" 
      alt="Facebook" 
      width={30}
      height={30}
      className=""
    />
  </a>
  <a href="#" className="p-2 bg-[#a749ff] rounded-full">
    <Image 
      src="/ig.png" 
      alt="Instagram" 
      width={30}
      height={30}
      className=""
    />
  </a>
  <a href="#" className="p-2 bg-[#a749ff] rounded-full">
    <Image 
      src="/x.png" 
      alt="X (Twitter)" 
      width={30}
      height={30}
      className=""
    />
  </a>
</div>


        <div className="space-x-6 text-lg text-black font-medium">
          <a href="#" className="hover:text-[#a749ff] transition-all">Home</a>
          <a href="#" className="hover:text-[#a749ff] transition-all">About Us</a>
          <a href="#" className="hover:text-[#a749ff] transition-all">Gallery</a>
          <a href="#" className="hover:text-[#a749ff] transition-all">Contact Us</a>
        </div>
      </div>
    </div>
  );
}
