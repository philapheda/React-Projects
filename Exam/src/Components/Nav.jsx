import React , {useState}from 'react'
import { IoMdMenu } from "react-icons/io"
import { IoClose } from "react-icons/io5"
import { FaHome } from "react-icons/fa"
import { FaBookOpen } from "react-icons/fa"
import { MdAttachMoney } from "react-icons/md"
import { IoMdPerson } from "react-icons/io";
function Nav() {
    const[open,setopen] = useState(false)
    function change(){
        setopen((prevopen) => !prevopen)
    }
  return (
    <div className='p-7 fixed top-0 flex bg-white  justify-between items-center w-full shadow-md'>
        <h1 className='bg-gradient-to-r from-red-500 via-yellow-300 to-green-500 font-bold text-[1.5rem] bg-clip-text text-transparent' >Matric  prep</h1>
        <ul className=' gap-8 text-green-700 font-bold hidden sml:flex'>
            <li className='bg-green-200 p-2 rounded-md hover:p-1.5 flex gap-2 items-center'>{<FaHome />}Home</li>
            <li className='bg-green-200 p-2 rounded-md hover:p-1.5 flex gap-2 items-center'>{<FaBookOpen/>}Exams</li>
            <li className='bg-green-200 p-2 rounded-md hover:p-1.5 flex gap-2 items-center'>{<MdAttachMoney/>}Donate</li>
            <li className='bg-green-200 p-2 rounded-md hover:p-1.5 flex gap-2 items-center'>{<IoMdPerson/>}Login/SignUp</li>
        </ul>
        { !open && < button onClick = {change}className='sml:hidden text-2xl bg-green-200 p-2 rounded-md hover:p-1.5 block' >{<IoMdMenu/>}</button>}
        {open && <ul className='sml:hidden block p-7 gap-8 text-green-700 font-bold bg-transparent w-52 absolute top-0 right-0'>
            <button onClick={change}><IoClose/> </button>
            <li className='bg-green-200 p-2 hover:p-1.5 flex gap-2 items-center'>{<FaHome />}Home</li>
            <li className='bg-green-200 p-2 border-t-green-700 border-t-2 hover:p-1.5 flex gap-2 items-center'>{<FaBookOpen/>}Exams</li>
            <li className='bg-green-200 p-2 border-t-green-700 border-t-2 hover:p-1.5 flex gap-2 items-center'>{<MdAttachMoney/>}Donate</li>
            <li className='bg-green-200 p-2 border-t-green-700 border-t-2 hover:p-1.5 flex gap-2 items-center'>{<IoMdPerson/>}Login/SignUp</li>
        </ul>}
    </div>
  )
}

export default Nav