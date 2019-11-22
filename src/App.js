import React from "react";
import { useState } from "react";
import { Box, Input } from "@chakra-ui/core";
import JSON from "./db.json";
import NewsItem from "./newsItem.js";

// import styled from 'styled-components'


function App() {
  const [ news, setNews ] = useState(JSON);
  const [ filtered, setFiltered ] = useState("")
  function getKeyword(e){
    let keyword = e.target.value
    let filtered = news.filter((x)=>{
      return x.title.indexOf(keyword) > -1
    })
    setFiltered(filtered)
  }

  return (
    <>
      <Header keyword={getKeyword} filtered={filtered}/>
      <NewsItem news={ filtered.length ===0 ? news : filtered} >
      <h3>The News are:</h3>
    </NewsItem>
    </>
  );
}
export default App; 

function Header({keyword, filtered}) {
  console.log(filtered)

  return (
    <>
      <Box background={!!filtered?"#03a9f4": "red"} textAlign="center">
        <Box color="#ffff" fontFamily="Anton" fontSize={40}>
          Logo
        </Box>

        <Input width={256} ml={550} onChange={keyword} />
      </Box>
    </>
  );
}
