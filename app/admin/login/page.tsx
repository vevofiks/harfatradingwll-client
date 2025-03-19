'use client'
import Image from 'next/image'
import React from 'react'
import {motion} from 'framer-motion'

const login = () => {
  return (
    <div className='w-full flex bg-gradient-to-br from-black/90 via-red-900/40 to-black/90 h-screen'>
        <div className='flex-1 hidden md:block overflow-hidden'>
            <Image src="https://imgs.search.brave.com/juw2_ymqgAX0yicjgtuHJovshrcLZ7HYjMMx_JxVTN0/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL1Mv/YXBsdXMtbWVkaWEt/bGlicmFyeS1zZXJ2/aWNlLW1lZGlhL2Zj/MjI4NmM3LTdhNmQt/NGUxZi1iYzE3LTlm/MjM4MTllYTE4ZC5f/X0NSMCwwLDE5MjAs/MTE4OF9QVDBfU1g5/NzBfVjFfX18uanBn" alt='side imae'
            width={100}
            height={100}
            className='w-full h-full'></Image>
        </div>
        <div className='bg-gradient-to-br from-black/90 via-red-900/40 to-black/90 h-screen flex-1'>
        <motion.div
        initial={{y:20}}
        animate={{y:0}}
        transition={{duration:0.2,ease:'easeInOut'}}
        className='flex justify-center'>
            <p className='text-3xl font-bold'>welcome Home</p>
            </motion.div>
        <div className='bg-amber-300 border-2  border-amber-500 rounded-2xl m-10 h-auto flex-col justify-center items-center'>
        <form action="" className=''>
                <input  className='block border-2 rounded-2xl m-3' type="email" name="" id="" />
                <input className='block border-2 rounded-2xl m-3' type="password" name="" id="" />
                <button className='block border-2 rounded-2xl m-3' type="submit">login</button>
            </form>
        </div>
           
        </div>
    </div>
  )
}

export default login