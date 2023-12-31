// 'use client'
import BlogsList from '@/components/BlogsList';
import TopicList from '@/components/TopicList'
import Image from 'next/image'


export default async function Home() {
  // const articles = await getBlog()
  return (
    <div className='mt-4'>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
        <div>
          <h2 className='text-center text-3xl font-bold '>
            Blogs
          </h2>
          <BlogsList></BlogsList>
        </div>
        <div>
          <h2 className='text-center text-3xl font-bold '>
            Daily Activity
          </h2>
          <TopicList></TopicList>
        </div>
      </div>

    </div>
  )
}
