// 📍 FORM PAGE |: en esta vista se encontrará el formulario para crear un nuevo videojuego.

import { useState } from "react"

// Este formulario debe ser controlado completamente con JavaScritp. No se pueden utilizar validaciones HTML, ni utilizar librerías especiales para esto. Debe contar con los siguientes campos:

// .
// .
// .
// .
// .
// .
// Posibilidad de seleccionar/agregar varios géneros en simultáneo.
// Botón para crear el nuevo videojuego.
// [IMPORANTE]: es requisito que el formulario de creación esté validado sólo con JavaScript. 
//Puedes agregar las validaciones que consideres.
//Por ejemplo: que el nombre del videojuego no pueda contener símbolos, 
//o que el rating no pueda exceder determinado valor, etc.
 function FormPage(){
    const [input,setInput]= useState({
        name:'',
        imagen:'',
        descripcion:'',
        platForms:'',
        releasedDate:'',
        rating:'',
        genres:''
    })
    const handleChange= (event)=>{
        setInput({
            ...input,
        
        [event.target.name]:event.target.value
        })
    }

    return(
        <form >
        <label>Nombre:
        <input type="text" name="name" value={input.name} onChange={handleChange}/>
        
        </label>
        <label>Imagen:
        <input type="file" name="imagen" value={input.imagen} onChange={handleChange}/>
        </label>
        <label>Descripción:
        <textarea name="descripcion" value={input.descripcion} onChange={handleChange}></textarea>
        </label>
        <label>Plataformas:
        <input type="text" name="platForms" value={input.platForms} onChange={handleChange}/>
        </label>
        <label>Lanzamiento:
        <input type="date" name="releasedDate" value={input.releasedDate} onChange={handleChange}/>
        </label>
        <label>Calificacion:
        <input type="text" name="rating" min="0" max="5" value={input.rating} onChange={handleChange}/>
        </label>
        <label>Generos
        <input type="checkbox" name="genres" value={input.genres} onChange={handleChange}/>
        </label>
        <button type="submit">Crear videoGame</button>
        </form>
    )
}
export default FormPage