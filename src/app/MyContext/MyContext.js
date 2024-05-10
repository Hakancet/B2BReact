'use client'
import React, { createContext, useEffect, useState } from "react"
import { getGroupName, getProduct } from "../service/api";
export const MyContext = createContext();
export const PostProvider = ({ children }) => {
  const [productData, setProductData] = useState([])
  const [groupData , setGroupData] = useState ([])

  /* const fetchData = async () => {
    const result = await getData()
    await setProductData(result.data)
  } */

  useEffect(()=>{
    handleGetProduct()
  },[])

  const handleGetProduct = async () => {
    await getProduct().then((res) =>
       {
        console.warn(res)
      setProductData(res.data.data)

    }).catch((res) => {
      console.log(res)
    })
  }

  const handleGetGroupName = async() => {
    await getGroupName().then((response) =>{
      console.warn(response)
      setGroupData(response.data.data)
    }).catch((response)=>{

    })
  }


  return (

    <MyContext.Provider value={({
      handleGetProduct, productData, setProductData,
      handleGetGroupName, groupData, setGroupData
    })} >
      <div>{children}</div>

    </MyContext.Provider>

  )

}
