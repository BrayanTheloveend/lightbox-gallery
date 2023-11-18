import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addBook, cleanBook, delBook } from '../redux/reducer/reducerAddBook'
import FlipMove from 'react-flip-move'



const AddBooks = () => {

    const initialState={
        title: "",
        author: ""
}

    const [data, setData] = useState(initialState)

    const libraryData = useSelector((state)=>state.library)

    const dispatch = useDispatch()
 

    const handleSbumit=e=>{
        e.preventDefault()
        console.log(libraryData)
        dispatch(addBook(data))

        //vider le input

        setData(initialState)
    }


    const list = libraryData.length > 0 ? 
    
        <FlipMove>
        {libraryData.map(elt =>{
            return(
                <li className='list-group-item list-group-item-light d-flex justify-content-between' key={elt.id}>
                    <span>Titre: &nbsp; <strong>{elt.title}</strong></span>
                    <span>Auteur:  &nbsp; <strong>{elt.author}</strong></span>
                    <span className='btn btn-danger' onClick={()=>dispatch(delBook(elt.id))}>X</span>
                </li>
            )
        })}
        </FlipMove>
        : (<li className="list-group-item list-group-item-light d-flex justify-content-center ">
                Aucun livres enregistré 🥺
            </li>)


    const deleteBtn = libraryData.length > 0 && <button className='btn btn-danger mt-4 mb-s' onClick={()=>dispatch(cleanBook())}>Effacer tous les livres</button>

  return (
    <main role='main' className='bg-light'>
      <div className='jumbotron jumbotron-fluid row  mb-5'>
        <div className="container  text-center">
            <h1 className='display-3'>Books</h1>
            <p>Ajouter un livre a votre bibliothéque</p>

            <form className='form-inline justify-content-center'>

                <div className='d-flex justify-content-center gap-2 mb-3 '>
                    <div className="form-group ">
                        <input 
                            value={data.title}
                            type="text"
                            className='form-control'
                            placeholder='Titre' 
                            required
                            onChange={e =>setData({...data, title: e.target.value})}
                            />
                        
                    </div>

                    <div className="form-group ">
                        <input 
                            value={data.author}
                            type="text"
                            className='form-control ml-3'
                            placeholder='Auteur' 
                            required
                            onChange={e =>setData({...data, author: e.target.value})}
                            />
                        
                    </div>
                </div>
                <div className="form-group">
                   <button className='btn btn-outline-secondary' onClick={handleSbumit}>Ajouter un livre 📚</button>
                </div>
            </form>
        </div>
      </div>

        <div className="container mt-5" style={{minHeight: "216px"}}>
            <div className="row">
                <div className="col-md-12">
                    <ul className="list-group">
                        {list}
                    </ul>


                    <div className="d-flex justify-content-center">
                      {deleteBtn}
                    </div>
                </div>
                
            </div>
        </div>
    </main> 
  )
}


// const mapStateToProps= state =>{
//     return {
//         libraryData: state.library
//     }
// }

// const mapDispatchToProps= dispatch =>{
//     return{
//         addBooker: param => dispatch(addBook(param)),
//         delBooker: id => dispatch(delBook(id)),
//         cleanBook: ()=> dispatch(clearBook())

//     }
// }


export default AddBooks
