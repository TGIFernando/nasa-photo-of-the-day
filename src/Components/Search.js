import React, {useState, useEffect} from 'react'
import styled from 'styled-components'

const blankSearch = {
    search: "",
}
function Search(){
    const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=pUxe64fv7f4vGRG91qDFNbEOH5m1OyVGUZfILdXR'
    const [search, setSearch] = useState(blankSearch)
    const Styledsearch = styled.form`
    margin: 0 70vh 2px 30vh;
    display:flex;
    `


    // useEffect(() => {
    //     axios.get(`${BASE_URL}+{search}
    //     `).then(res => {
    //       setInfo(res.data)
    //     }).catch(err => {
    //       console.log('Error: '+err)
    //     })
    //   }, [button])

      const onSubmit = (event) => {
          event.preventDefault()
          console.log(search)
      }

      const onChange = (event) => {
          setSearch({
              ...search, [event.target.name] : event.target.value
          })

      }


      return(
          <div className = 'search'>
              <Styledsearch onSubmit = {onSubmit}>
                  <input type = 'text' name = 'search' placeholder='yyyy/mm/dd'
                  onChange = {onChange} value = {search.search}></input>
                  <button type = 'submit'>Search</button>
              </Styledsearch>
          </div>
      )


}

export default Search