import React, { useRef } from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('');

  React.useEffect(()=> {
    searchValue.current.focus()
  })

const searchCocktail =()=> {setSearchTerm(searchValue.current.value)}
const handleSubmit = (e) => {
  e.preventDefault()
}

return (
<section classname="section search">
  <form className="search-form" onSubmit={handleSubmit}>
    <div classname="form-control">
      <label htmlFor="name">Search your drink here </label>
      <input
          type="text"
          id="name"
          ref={ searchValue }
          onChange={searchCocktail}
          />
    </div>
  </form>
</section>
  )
}

export default SearchForm
