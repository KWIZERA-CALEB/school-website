import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { fetchAllEvents } from '../../services/EventService'

const ShortNews = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        const getFectchedBooks = async () => {
            try {
                const response = await fetchAllEvents()
                setNews(response.events)
            } catch(error) {
                console.log(error)
                throw error
            }
        }
        getFectchedBooks()
    }, [])

    const appendedNews = []
    news.map((news, index) => (
        appendedNews.push(
            <div key={index} className='drop-shadow-md border-[1px] border-solid cursor-pointer border-slate-200 p-[6px]'>
                <div className='w-full h-[170px]'>
                    <img src='/images/banner1.jfif' className='w-full h-full object-fit object-center' alt="Post" />
                </div>
                <div className='mt-[10px]'>
                    <p className='poppinsBold text-[15px] cursor-pointer'>{news.title}</p>
                    <p className='poppinsRegular text-[12px] cursor-pointer'>
                        {news.description}
                    </p>
                    <Link className='poppinsRegular mt-[4px] text-[12px] text-secondary'>View More</Link>
                </div>
            </div>
        )
    ))
  return (
    <div>
        <div className='pb-[15px]'><p className='poppinsBold text-[18px] text-center text-primaryGray cursor-pointer'>Our Community</p></div>
        <div className='w-full pr-[25px] pl-[25px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[4px]'>
            {appendedNews}
        </div>
    </div>
  )
}

export default ShortNews
