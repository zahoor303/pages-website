import Link from "next/link"
export default function Navbar(){ 
    return<div className= 'bg-white h-12'>
           <div className=" text-purple-500 flex justify-between">
            <ul className= "flex gap-10">   
                <Link href="/">Home</Link>
                <Link href="/About">About</Link>
                <Link href="/Contact">Contact</Link>
                <Link href="/Email">Email</Link>
                <Link href="/Skills" >Skills</Link>
                <Link href="/Loading">Loading</Link>     
             
            </ul>
           </div>
    </div>

}
 

