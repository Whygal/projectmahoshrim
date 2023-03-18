import React, {useState} from 'react'

const SearchBar = () => {

    const [searchInput, setSearchInput] = useState("");
    const fruitsArr = ['apple', 'banana', 'kiwi']

    const handleChange = (e)=> {
        e.preventDefault();
        setSearchInput(e.traget.value)
    } 
    if(searchInput.length > 0){
        fruitsArr.filter((fruit)=> {
            return fruit.match(searchInput)
        })
    }

  return (
    <div>

<input type='text' placeholder='..חפש שאלה' onChange={handleChange} value={searchInput}></input>
<table>
    <tr>
        <th>Fruit</th>
    </tr>
    {fruitsArr.map((fruit, index)=> {
        <tr>
            <td>{fruitsArr}</td>
        </tr>
    })}
</table>
    </div>
  )
}

export default SearchBar