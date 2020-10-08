import React, {useState, useEffect} from 'react'

const blankSearch = {
    search: "",
}
function Search(){
    const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=pUxe64fv7f4vGRG91qDFNbEOH5m1OyVGUZfILdXR'
    const [search, setSearch] = useState(blankSearch)


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
              <form onSubmit = {onSubmit}>
                  <input type = 'text' name = 'search' placeholder='yyyy/mm/dd'
                  onChange = {onChange} value = {search.search}></input>
                  <button type = 'submit'>Search</button>
              </form>
          </div>
      )


}

export default Search