import React from 'react'

import Category from "../containers/Category.js"

const ListCategory = ({searchUrl}) => {
	const arraycategory = [
      {title: 'Search Results', url: searchUrl},
      {title: 'Top TV picks for Jack', url: 'discover/tv?sort_by=popularity.desc&page=1'},
      {title: 'Trending now', url: 'discover/movie?sort_by=popularity.desc&page=1'},
      {title: 'Most watched in Horror', url: 'genre/27/movies?sort_by=popularity.desc&page=1'},
      {title: 'Sci-Fi greats', url: 'genre/878/movies?sort_by=popularity.desc&page=1'},
      {title: 'Comedy magic', url: 'genre/35/movies?sort_by=popularity.desc&page=1'}
    ]

	return (arraycategory.map(({title, url}, index) => {
	    return( 
	    	<Category 
	    		title={title} 
	    		url={url} 
	    		key={index} 
	    	/>
	    )
	}))
}

export default ListCategory