import React from "react"
// var FontAwesomeIcon = require('react-fontawesome')


// props.bookMark(props.movie)
const MovieCard  = (props) => {

    const Year = props.movie.Year
    const Poster = props.movie.Poster
    const Title = props.movie.Title
    const Type = props.movie.Type
    

    const removeElementfromBookmark = ()=>{
        const imdbID = props.movie.imdbID
        delete props.bookMark[imdbID]
        console.log(props.bookMark)
    }
    // props.movie 
    // const data = props.movie
    // console.log(props.movie)
    return (<div className="movie" onClick={removeElementfromBookmark}>     
    {/* <button onClick={testFunction} style={{width:'20%', height:'10%'}}>Save</button>  */}
    <div>
        <p>{Year}</p>                  
    </div>
    <div>
        <img src={Poster !== 'N/A' ? Poster : 'https://via.placeholder.com/400'} alt={Title}/>
    </div>
    <div>
        <span>{Type}</span>
        <h3>{Title}</h3>
      
    </div>
</div>


);
}

export default MovieCard