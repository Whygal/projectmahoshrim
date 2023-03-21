import React, {useState} from 'react'
import SearchBar from '../SearchBar/SearchBar'

const LastQuestion = ({input}) => {

const [data, setData] = useState([])


    const qsData = async ()=> {
        const response = await fetch('http://localhost:8000/api/getAllQ')
        const answer = await response.json()
        setData(answer)
    }



    const dinamicQuestion = ()=> {
        data.date.sort((a,b)=> {
            return a-b  
        } )
    }

  return (
    <div>
        {input.length ? <div></div> : <div><h4>:שאלות אחרונות</h4><div>{dinamicQuestion}</div></div>}
    </div>
  )
}

export default LastQuestion