import React, {useState, useEffect} from "react";
import axios from 'axios'
import Title from "./Components/Title"
import Explanation from './Components/Explaination'
import Image from './Components/Image'
import "./App.css";
import styled from 'styled-components'

const Styledsearch = styled.form`
    margin: 1rem auto;
    `
const StyledBttn = styled.button`
    transition: .5s;
    &:hover {opacity: 50%;}
    `

const blankSearch = {
  search: "",
}

function App() {
  const [info, setInfo] = useState([])
  const BASE_URL = 'https://api.nasa.gov/planetary/apod?api_key=pUxe64fv7f4vGRG91qDFNbEOH5m1OyVGUZfILdXR'
  const BASE_URL2 = 'https://api.nasa.gov/planetary/apod?api_key=pUxe64fv7f4vGRG91qDFNbEOH5m1OyVGUZfILdXR&date='
  const [search, setSearch] = useState(blankSearch)


  useEffect(() => {
    axios.get(`${BASE_URL}
    `).then(res => {
      setInfo(res.data)
    }).catch(err => {
      console.log('Error: '+err)
    })
  }, [])


    const helper = () => {
        const newSearch = {
            search: search.search,
        }
        axios.get(`${BASE_URL2}${newSearch.search}
        `).then(res => {
          setInfo(res.data)
        }).catch(err => {
          console.log('Error: '+err)
        })
    }


      const onSubmit = (event) => {
          event.preventDefault()
          helper()
      }

      const onChange = (event) => {
          setSearch({
              ...search, [event.target.name] : event.target.value
          })}


  return (
    <div className="App">
      <div className='flex'>

        <div className='contain submit'>
          <Styledsearch onSubmit = {onSubmit}>
                  <input type = 'text' name = 'search' placeholder='yyyy-mm-dd'
                  onChange = {onChange} value = {search.search}></input>
                  <StyledBttn type = 'submit'>Search</StyledBttn>
          </Styledsearch>
          <Explanation explain = {info.explanation}/>
        </div>
        
        <div className='contain title'>
          <Title title = {info.title} />
          <Image imageURL = {info.url}/>
        </div>
        
      </div>
    </div>
  );
}

export default App;