import { useState } from "react";
import { Link } from "react-router-dom";

export default function LoginPage() {

    const[email,setEmail] = useState()

  return ( 
    <div className="w-full h-screen bg-[url('/bg.jpg')] bg-center bg-cover bg-no-repeat flex ">
      <div className="w-[50%] h-full flex justify-center items-center flex-col">
        <img
          src="/logo.png"
          alt="logo"
          className="w-[200px] h-[200px] mb-[10px] drop-shadow-[0_0_70px_#e6c151] object-cover"
        />
        <h1 className="text-[50px] text-accent font-bold text-shadow-2xs text-center">
          Plug In. Power Up. Play Hard.
        </h1>
        <h2 className="text-[30px] text-white italic">
          Your Ultimate Destination for Gaming Gear
        </h2>
      </div>
      <div className="w-[50%] h-full flex justify-center items-center">
        <div className="w-[450px] h-[600px] backdrop-blur-lg shadow-2xl rounded-xl flex flex-col justify-center items-center p-[30px]">
          <h1 className="text-[40px] font-bold mb-[30px] text-primary text-shadow-white ">
            Login
          </h1>
          <input
            type="email"
            placeholder="Your email"
            className="w-full h-[50px] mb-[20px] text-primary rounded-lg border border-primary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <input
            type="password"
            placeholder="Your password"
            className="w-full h-[50px] text-primary rounded-lg border border-primary p-[10px] text-[20px] focus:outline-none focus:ring-2 focus:ring-accent"
          />
          <p className="text-primary not-italic w-full text-right mb-5">
            Forget your password?{" "}
            <Link to="/forget-password" className="text-accent italic">
              Reset it here
            </Link>
          </p>
          <button className="w-full h-[50px] bg-secondary text-primary font-bold text-[20px] rounded-lg border-2 border-secondary hover:bg-transparent hover:text-accent hover:border-accent cursor-pointer transition-all delay-200 ease-in-out">
            Login
          </button>
          <p className="text-primary not-italic">
            Dont't have an account?{" "}
            <Link to="/register" className="text-accent italic">
              Register here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
