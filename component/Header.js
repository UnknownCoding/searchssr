import Image from 'next/image'
import React, { useRef } from 'react'
import { useRouter } from 'next/router'
import { XIcon } from '@heroicons/react/solid';


const Header = () => {
    const Router = useRouter();
    const searchv2Ref = useRef(null)
    return (
        <header>
            <Image onClick={()=>{Router.push('/')}} className='cursor-pointer' width={120} height={40} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png?20160213081640'/>
            <form className='flex border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-3 ml-10 mr-5 '>
                <input ref={searchv2Ref} type='text' className='w-full  focus:outline-none flex-1' />
                <XIcon className='h-7 w-7 text-gray-500 cursor-pointer '/>
            </form>
        
        
        </header>
    )
}

export default Header