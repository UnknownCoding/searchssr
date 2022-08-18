import React from 'react'
import PaginationComp from './PaginationComp'

const SearchResults = ({results}) => {
    return (
        <div className='mx-auto w-full px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52'>
            <p className='text-md text-gray-600 mb-5 mt-3'>About {results.searchInformation?.formattedTotalResults} results {results.searchInformation?.formattedSearchTime} seconds</p>
            {results.items?.map((res)=>(
                <div className='max-w-xl mb-8 ' key={res.link}>
                    <div className='flex flex-col group'>
                        <a href={res.link} className='text-sml'>
                            {res.formattedUrl}
                        </a>
                        <a href={res.link} >
                            <h2 className='text-xl truncate text-blue-800 font-medium group-hover:underline '>
                                {res.title}
                            </h2>
                        </a>
                    </div>
                    <p className='line-clamp-2'>
                        {res.snippet}
                    </p>
                </div>
            ))}
        </div>
    )
}

export default SearchResults