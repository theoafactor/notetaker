import { useState } from "react"
import { axios } from 'axios'

function NoteForm(){

    const [currentFormState, setFormState] = useState({
        note_title: "",
        note_content: "",
        form_errors: []
    })
    
    const submitForm = async (event) => {
        event.preventDefault()

       let note_title = currentFormState.note_title.trim();
       let note_content = currentFormState.note_content.trim();

       if(note_title.length < 1){
            //there is an error
            setFormState({
                ...currentFormState,
                form_errors: currentFormState.form_errors.push("You did not enter note title")
            })
       }

       if(note_content.length < 1){
            setFormState({
                ...currentFormState,
                form_errors: currentFormState.form_errors.push("You did not enter note content")
        })
       }


       if(currentFormState.form_errors.length == 0){
            //there are no errors
            //we can proceed
            const result = await axios.post("/");

       }else{
            //we have errors in the form 
       }

    }

    const updateNoteTitle = (event) => {
        //console.log(event.target.value)

        setFormState({
            ...currentFormState,
            note_title: event.target.value
        })

    }

    const updateNoteContent = (event) => {
        
        setFormState({
            ...currentFormState,
            note_content: event.target.value
        })

    }


    return <div>
                <form className="form" onSubmit={submitForm}>
                    <div className="form-group">
                        <label>Note Title</label>
                        <input type="text" value={currentFormState.note_title} onChange={updateNoteTitle} className="form-control"></input>
                    </div>

                    <div className="form-group">
                        <label>Note Content</label>
                        <textarea className="form-control" onChange={updateNoteContent}>{currentFormState.note_content}</textarea>
                    </div>

                    <div className="form-group">
                        <button className="btn btn-block btn-primary">Create Note</button>
                    </div>

                </form>


             </div>


}

export default NoteForm