

import Delete from "./components/function/ObjFunction"

import ArrayOfObj from "./components/function/arrayOfObject"
import ApiUseEffect from "./components/function/forms/ApiByUsingUseeffect"
import ControlledComponent from "./components/function/forms/Controlled"
import ApiListFind from "./components/function/forms/FindTheIdOfList"
import ApiList from "./components/function/forms/OnSubmitApi"
import FormValidation from "./components/function/forms/formvalidation"
import Table from "./components/function/tableFormet"
import AppData from "./components/function/forms/CardAngular"
import NavigationRoot from "./components/NavegationFolder/NavigationRoot"
import { createContext, useState } from "react"


export const AppData2=createContext()
export const loginInfo=createContext()

export default function App(){
  const [name,setName]=useState("sudheer")
  const [login,setLogin]=useState(false)
  const loginUser=()=>{
    setLogin(true)
  }

 
  return(
    <div>
      <loginInfo.Provider value={{login:login,loginUser:loginUser}}>
      <AppData2.Provider value={name}>
     
      {/* <Delete/> */}
      {/* <ArrayOfObj/>  */}
      {/* <ControlledComponent/> */}
      {/* <FormValidation/> */}
      {/* <ApiUseEffect/> */}
      {/* <ApiListFind/> */}
      {/* <ApiList/> */}
      {/* <AppData/> */}
      <NavigationRoot/>
      </AppData2.Provider>
      </loginInfo.Provider>

    </div>
  )
}