import { collection, getDocs, where, query } from 'firebase/firestore'
import React,{useEffect} from 'react'
import { useParams } from 'react-router-dom'
import {db} from "../../../FirebaseConfig"
function CategoryPage() {
    const params = useParams()
    const {category} = params

    const fetchData=async (category) => {
        const q=query(collection(db,"products"), where("products","==",true));
        const querySnapshot=await getDocs(q);
        querySnapshot.forEach((doc) => {
            console.log(doc.id,"=>", doc.data());
        })
    }
    useEffect(() => {
    //call firestore in product collect get all products where product category==category

   fetchData(category);
    }, [params])
  return (
    <div>
      Category Page {category}
    </div>
  )
}

export default CategoryPage
