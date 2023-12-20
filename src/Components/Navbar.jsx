import React from "react";
import { BiAbacus } from "react-icons/bi";
import { Link } from "react-router-dom";
import Logo from "../assets/1.png";

const Navbar = () => {
	return (
		<div className='flex shadow-xl justify-between items-center h-[100px] bg-[#0d1117] text-center align-middle text-white border-b-[6px] border-[#161b22]'>
			<div className='ml-[100px]'>
				<Link to={"/"}>
					<img src={Logo} alt='logo' className='w-[128px]' />
				</Link>
			</div>
			<div className='flex space-x-10 items-center mr-[100px] text-2xl'>
				<Link to='/about-us' className=''>
					<h3 className='text-3xl font-bold from-purple-400 via-blue-600 to-blue-600 bg-gradient-to-r bg-clip-text text-transparent'>
						About Us
					</h3>
				</Link>
				<h3 className='font-bold text-2xl'>
					<Link to='/daa-course'>DAA Course</Link>
				</h3>
				<BiAbacus className='w-[48px] h-[48px] text-white mt-4' />
			</div>
		</div>
	);
};

export default Navbar;
