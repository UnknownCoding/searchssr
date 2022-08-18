import { DotsVerticalIcon, MapIcon, MicrophoneIcon, NewspaperIcon, PhotographIcon, PlayIcon, SearchIcon, XIcon } from '@heroicons/react/solid';
import Head from 'next/head'
import Image from 'next/image';
import { useRouter } from 'next/router';
import React, { useRef } from 'react'
import Header from '../component/Header'
import HeaderOps from '../component/HeaderOps';
import PaginationComp from '../component/PaginationComp';
import SearchResults from '../component/SearchResults';
import { API_KEY, CONTEXT_KEY } from '../keys';
import response from '../response';

const Search = ({results}) => {
    console.log(results)
    const Router = useRouter();
    const searchv2Ref = useRef(null)
    
    const handleSearch = (e) => {
        e.preventDefault();
        const term = searchv2Ref.current.value;
        if(!term ) return;
        Router.push(`/search?term=${term}`)
    
    }
    
    return (
        <div>
            <Head>
                <title>{Router.query.term} -Search</title>
            </Head>
            {/* Header */}
            <header className='sticky top-0 bg-white flex flex-col'>
                <div className='flex w-full p-6 items-center'>
                    <Image onClick={()=>{Router.push('/')}} className='cursor-pointer' width={120} height={40} src='https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/272px-Google_2015_logo.svg.png?20160213081640'/>
                    <form className='flex flex-1 border border-gray-200 rounded-full shadow-lg max-w-3xl items-center px-6 py-2 ml-10 mr-5 '>
                        <input ref={searchv2Ref} type='text' className='w-full  focus:outline-none flex-1' />
                        <XIcon onClick={()=>{searchv2Ref.current.value = ''}} className='h-7 sm:mr-3 text-gray-500 cursor-pointer transition duration-500 transform hover:scale-125 '/>
                        <MicrophoneIcon className='mr-3 h-6 hidden sm:inline-flex text-blue-500 border-l-2 pl-3 border-gray-300'/>
                        <SearchIcon className='h-6 text-blue-500 hidden sm:inline-flex'/>
                        <button hidden type='submit' onClick={handleSearch}/>
                    </form>
                    <img loading='lazy' className='ml-auto rounded-full h-10 cursor-pointer transition duration-150 transform hover:scale-110' src="https://express-images.franklymedia.com/3745/sites/5/2019/03/21220936/IMG_4249.jpg" alt='Profile Pic' ></img>
                </div>
                <div className='flex w-full border-b-[1px] lg:space-x-36 lg:pl-52 text-gray-700 text-sm lg:text-base lg:justify-start justify-evenly '>
                    <div className='flex space-x-6'>
                        <HeaderOps title='All' selected Icon={SearchIcon}/>
                        <HeaderOps title='Images'    Icon={PhotographIcon}/>
                        <HeaderOps title='Videos'    Icon={PlayIcon}/>
                        <HeaderOps title='News'      Icon={NewspaperIcon}/>
                        <HeaderOps title='Maps'      Icon={MapIcon}/>
                        <HeaderOps title='More'      Icon={DotsVerticalIcon}/>
                    </div>

                    <div className='flex space-x-4'>
                        <p className='link'>Settings</p>
                        <p className='link'>Tools</p>
                    </div>
                </div>
            </header>

            {/* Search results */}
            <SearchResults results={results}/>
            <PaginationComp/>

        </div>
    )
}

export default Search

export async function getServerSideProps(context){
    const useDummyData = false;
    const startIndex = context?.query?.start || '0'
    const data = useDummyData ? response : await fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`).then((res)=>res.json());
    return{
        props:{
            results:data
        }
    }
}