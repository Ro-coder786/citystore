import { MdAddShoppingCart } from "react-icons/md";
import Image from "next/image";
import { auth } from "@/firebaseConfig";

export default function Product({
    title,image,price,discount
}) {
    return (
        <div className="rounded-lg border border-gray-200 bg-white p-5 drop-shadow-md dark:border-gray-700 dark:bg-gray-800">
             <a href="#">
                    {/* <img className="mx-auto w-full"  src={image != "" ? image : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" } alt="title" /> */}
                    <Image className="" height={80} width={250}  src={image != "" ? image : "https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png" } alt="title" />
            </a>
            <div className="pt-6">                       
                <a href="#" className="text-l font-semibold  leading-[0.5rem] text-gray-900 dark:text-white">{ title}</a>
                <div className="mt-2 flex items-center gap-2">
                    <div className="flex items-center">
                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>

                        <svg className="h-4 w-4 text-yellow-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M13.8 4.2a2 2 0 0 0-3.6 0L8.4 8.4l-4.6.3a2 2 0 0 0-1.1 3.5l3.5 3-1 4.4c-.5 1.7 1.4 3 2.9 2.1l3.9-2.3 3.9 2.3c1.5 1 3.4-.4 3-2.1l-1-4.4 3.4-3a2 2 0 0 0-1.1-3.5l-4.6-.3-1.8-4.2Z" />
                        </svg>
                    </div>

                    <p className="text-sm font-medium text-gray-900 dark:text-white">5.0</p>
                    <p className="text-sm font-medium text-gray-500 dark:text-gray-400">(455)</p>
                </div>               

                <div className="mt-4 flex items-center justify-between gap-4">
                    <p className="text-l font-medium leading-tight text-gray-900 dark:text-white"> ₹ {price}</p>
                    <span className="me-2 rounded px-2.5 py-0.5 text-xs font-black text-green-800  dark:text-primary-300"> {discount}% off </span>                   
                </div>
                <div className="flex justify-between mt-2">
                    <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            Buy Now
                    </button>
                    <button type="button" className="inline-flex items-center rounded-lg bg-primary-700 px-4 py-2 text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4  focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
                            <MdAddShoppingCart size={20}/>
                    </button>
                </div>
            </div>
        </div>
    )
}