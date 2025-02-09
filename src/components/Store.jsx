import React, { useEffect, useState } from 'react'
import { FaRegHeart } from "react-icons/fa";

const Store = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchedProducts =async () => {
            const response = await fetch("/products.json")

            if (!response.ok){
                throw new Error("Failed to fetch products data")
            }
            const data = await response.json()
            setProducts(data)
        }
        fetchedProducts()
    },[])
    console.log(products)
  return (
    <section className='relative mx-auto container py-8'>
        <h1 className='text-2xl font-semibold'>Our Video Production Services</h1>
        <div className='container mx-auto flex items-center flex-wrap pt-4 pb-12'>
            {
                products.map((product) => (
                    <div key={product.id} className='w-full md:w-1/3 xl:w-1/4 p-6 flex flex-col'>
                        <a href='#'>
                            <img src={product.image} alt={`${product.name} Image`} className='hover:grow hover:shadow-lg rounded-lg border-2 border-gray-100'/>
                        </a>
                        <div className='pt-3 flex items-center justify-between'>
                            <p className='font-bold text-xl'>{product.name}</p>
                            <FaRegHeart className='h-6 w-6 text-gray-500 hover:text-black'/>
                        </div>
                        <p className='pt-1 text-gray-900 font-semibold'>
                            {product.price}
                        </p>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Store