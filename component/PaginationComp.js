import { useRouter } from 'next/router'
import  Link  from 'next/link'
import React from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'

const PaginationComp = () => {
    const router = useRouter()
    const startIndex = Number(router?.query?.start) || 0
    
    
    console.log(startIndex)
    return (
        <div className='flex max-w-2xl justify-between text-blue-700 mb-10 mx-auto'>
            {startIndex >= 10 &&(
                <Link href={`/search?term=${router.query.term}&start=${startIndex - 10}`}>
                    <div className='flex flex-1 flex-col items-center cursor-pointer hover:underline'>
                        <ChevronLeftIcon className='h-5'/>
                        <p>Previous</p>
                    </div>
                </Link>
            )}
                <Link href={`/search?term=${router.query.term}&start=${startIndex + 10}`}>
                    <div className='flex flex-1 flex-col items-center cursor-pointer hover:underline'>
                        <ChevronRightIcon className='h-5'/>
                        <p>Next</p>
                    </div>
                </Link>
        </div>
    )
}

export default PaginationComp