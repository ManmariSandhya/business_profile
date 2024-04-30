import axios from "axios";
import { useState } from "react"

export function FileComponent(){
    const [file,setFile] = useState();

    const handleUpload=(e)=>{
     
     const formdata = new FormData()
     formdata.append('file', file)
     axios.post("http://localhost:4000/upload", formdata)
     .then((res) => console.log(res),
     alert("image saved in db"))
     .catch(err => console.log(err))
    }
    return(
     <div>
        <input type="file" onChange={e => setFile(e.target.files[0])}></input>
        <button onClick={handleUpload}>upload</button>
     </div>
    )
}