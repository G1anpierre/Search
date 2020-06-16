import React, { useState } from 'react'

const Input = ({data, handleFilter}) => {

    const [Search, setSearch, handleSpeechRecognition] = useState(''); 

    const handleSubmit = (event) => {
        event.preventDefault();
    
        const filtered = data.filter(element => {
          return element.name.toLowerCase().indexOf(Search.toLowerCase()) !== -1  
        })
    
        console.log(filtered); 
        handleFilter(filtered);
    }


    return (
        <div>
          <form onSubmit={handleSubmit}>
                <div className="wrapper">
                  <input

                  className="wrapper__input" 
                  type="text"
                  name="search"
                  value={Search}
                  onChange={(event) => setSearch(event.target.value)}/>
                  <button onClick={handleSpeechRecognition} className="btn btn-secondary">talk</button>
                  <button className="wrapper__button btn btn-primary"> Search </button>
                </div>
              </form>
        </div>
    )
}

export default Input;
