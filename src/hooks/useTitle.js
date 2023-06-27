import { useEffect } from "react";

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Reflexlia`;
    },[title])

}

export default useTitle;