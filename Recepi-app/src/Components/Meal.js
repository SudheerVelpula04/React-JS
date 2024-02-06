import React, { useEffect, useState } from "react";
import MealItem from "./MealItem";
import RecipeIndex from "./RecipeIndex";
import axios from "axios";
import image from "./images/cooking.png"
const Meal = () => {
    const [url, setUrl] = useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
    const [item, setItem] = useState();
    const [show, setShow] = useState(false)
    const [search, setSearch] = useState("")
    useEffect(() => {
        axios.get(url)
            .then(response => {
                console.log(response.data);
                setItem(response.data.meals)
                setShow(true)
            })
            .catch(error => {
                console.error("Error fetching data:", error);

            });

    }, [url]);

    const setIndex = (alpha) => {
        setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)
    }

    const searchRecipe = (evt) => {
        if (evt.key == "Enter") {
            setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
        }
    }




    // useEffect(()=>{
    //     fetch(url).then(res=>res.json()).then(data=>{
    //         console.log(data);
    //     })
    // },[url]) 




    return (
        <>
            <div className="main">
            <img src={image} alt="item"  width={50} height={100}/>
                <div className="heading">
                    
                    <h1>Search Your Food Recipe</h1>
                    <h4>One cannot think well, love well, sleep well, if one has not dined well.</h4>
                </div>
            </div>
            <div className="searchBox">
                <center><input type="search" className="search-bar" onChange={e => setSearch(e.target.value)} onKeyPress={searchRecipe} /></center>
            </div>
            <div className="container">

                {
                    show ? <MealItem data={item} /> : "Not Found"
                }

            </div>
            <div>
                <h2>Select A-Z Items </h2>
            </div>
            <div className="indexContainer">

                <RecipeIndex alphaIndex={(alpha) => setIndex(alpha)} />

            </div>

        </>
    )
}
export default Meal