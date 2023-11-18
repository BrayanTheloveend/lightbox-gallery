import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useGetPostQuery } from '../redux/reducer/reducerFetch';

const SearchBook = () => {

    const [title, setTitle] = useState("")

    //const state = useSelector(state => state.search)
    const state =[]
    const dispatch = useDispatch()

    //fetch data using RTK Query

        const {
            data: post,
            isLoading,
            isSuccess,
            isError,
            error

        }=useGetPostQuery()

    //react toastify 

    const notify = () => toast.success("Livre enregistrer avec success!");

    const handleSubmit =e=>{
        e.preventDefault()
        //dispatch(fecthBook(title))
    }


    const handleSave=(param)=>{
        notify()
        const data = {
            title: param.title,
            author: param.authors
        }

        //dispatch(addBook(data))
    }


    // Redux fetch data

    // const dispalyBooks = state.isLoading ? (
    //     <div className="d-flex justify-content-center flex-column text-center align-items-center">
    //         <div className="spinner-border text-info" role="status">
               
    //         </div>
    //         <span className='sr-only'>Loading...</span>
    //     </div>
    // ): state.error !== '' ? ( <p className='text-danger'>{state.error}</p>

    // ):
    // (
    //     state.fetchedBooks.map((elt,index) =>{
    //         return(
    //             <div className="accordion-item" key={elt.id}>
    //                 <h2 className='accordion-header' id={`heading${index}`}>
                        
    //                     <button 
    //                     className='accordion-button' 
    //                     data-bs-toggle="collapse"
    //                     data-bs-target= {`#${elt.id}`}
    //                     aria-expanded= {index=== 0 ? true : false}
    //                     aria-controls={elt.id}
    //                     >
    //                        {elt.volumeInfo.title}
    //                     </button> 
    //                 </h2>   
                        
                    
    //                 <div className={`accordion-collapse collapse ${index === 0 && "show"}`} data-bs-parent='#accordionExamples' id={elt.id} aria-labelledby={`heading${index}`}>
    //                     <div className="accordion-body">
    //                         <img src={ elt.volumeInfo.imageLinks?.thumbnail } alt={elt.volumeInfo.title} />
    //                         <br />
    //                         <h4 className='card-title my-2'>
    //                           Titre:  {elt.volumeInfo.title}
    //                         </h4>
    //                         <h5 className='card-title'>
    //                             Auteurs: {elt.volumeInfo.authors}
    //                         </h5>
    //                         <p className='card-text'>Description: {elt.volumeInfo.title}</p>

    //                         <a 
    //                             target='_blank' 
    //                             className='btn btn-outline-secondary mr-2' 
    //                             rel ="noopener noreferrer"
    //                             href={elt.volumeInfo.previewLink}
    //                         >Plus d'infos</a>

    //                         <button className='btn btn-danger' style={{marginLeft: "12px"}} onClick={()=>handleSave(elt.volumeInfo)}>Enregistrer</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         )
    //     })
    // )


    //RTK QUERY fetch data 


    let displayBooks;

    if(isLoading){
        displayBooks = (<div className="d-flex justify-content-center flex-column text-center align-items-center">
                <div className="spinner-border text-info" role="status"> 
                </div>
               <span className='sr-only'>Loading...</span>
           </div>)
    }else if (isSuccess){
        displayBooks = (
            
            
            post.map((elt,index)=>
            <div className="accordion-item" key={elt.id}>
                <h2 className='accordion-header' id={`heading${index}`}>                 
                    <button 
                    className='accordion-button' 
                    data-bs-toggle="collapse"
                    data-bs-target= {`#${elt.id}`}
                    aria-expanded= {index=== 0 ? true : false}
                    aria-controls={elt.id}
                    >
                       {elt.title}
                    </button> 
                </h2>   
                    
                
                <div className={`accordion-collapse collapse ${index === 0 && "show"}`} data-bs-parent='#accordionExamples' id={elt.id} aria-labelledby={`heading${index}`}>
                    <div className="accordion-body">
                        
                        <br />
                        <h4 className='card-title my-2'>
                          Titre:  {elt.title}
                        </h4>
                        <h5 className='card-title'>
                            Auteurs: {elt.id}
                        </h5>
                        <p className='card-text'>Description: {elt.body}</p>

                        <a 
                            target='_blank' 
                            className='btn btn-outline-secondary mr-2' 
                            rel ="noopener noreferrer"
                            href={'elt.volumeInfo.previewLink ?' }
                        >Plus d'infos</a>

                        <button className='btn btn-danger' style={{marginLeft: "12px"}} onClick={()=>handleSave(elt.id)}>Enregistrer</button>
                    </div>
                </div>
            </div>)
        )

        
    }else if (isError){
       displayBooks= <p className='text-danger'>{error}</p>
    }
    
  return (
    <main role='main' className='bg-light'>
        <div className='jumbotron jumbotron-fluid  mb-5'>
            <div className="container text-center">
                <h1 className='display-3'>SearchBook</h1>
                <p>Indiquer le sujet du livre a rechercher</p>

                <form className='form-inline justify-content-center'
                    onSubmit={handleSubmit}
                >

                    <div className='d-flex justify-content-center gap-2 mb-3 '>
                        <div className="form-group ">
                            <input 
                                type="text"
                                className='form-control'
                                placeholder='Quoi rechercher ?' 
                                required
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                                />
                        </div>
                        <div className="form-group">
                            <button className='btn btn-outline-secondary'
                            >Rechercher</button>
                        </div>
                    </div>
                    
                </form>
            </div>
        </div>

        <div className="container" style={{minHeight: "216px"}}>
            <div className="accordion" id='accordionExamples'>
                {displayBooks}
            </div>
        </div>
        <ToastContainer />
    </main>
  )
}

export default SearchBook
