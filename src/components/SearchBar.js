import React from 'react'

const SearchBar = ({onChange, onKeyUp, value}) => (
  <input 
    onChange={onChange} 
    onKeyUp={onKeyUp} 
    value={value} 
    placeholder="Search for a title..."
  />
)

export default SearchBar;