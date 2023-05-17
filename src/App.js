import NoteForm from "./NoteForm"
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "./App.css"
function App(){

  


      return <div className="container">

                  <div class="row mt-5">
                      <div class="col-md-8 mx-auto">
                          <h5>Create Note <small className="note-counter"><a href='#'>Current Notes 0</a></small></h5>
                          <hr></hr>
                      </div>
                      

                      <div class="col-md-8 mt-3 mx-auto">
                      <NoteForm></NoteForm>
                      </div>
                  </div>

               </div>

}

export default App

