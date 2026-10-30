import { useState } from "react";
function Afficher({id,Liste,setListe,fermer}){
  const i=Liste.find(e=>e.id==id);  
  const [nnom,setnnom]=useState(i.nom);
    const [aage,setaage]=useState(i.age);
    const [ffiliere,setffiliere]=useState(i.filiere);
    const [nnote,setnnote]=useState(i.note);
  
  
  function modifier(){
    const p = {
            ...i,
            nom: nnom,
            age: aage,
            filiere: ffiliere,
            note: nnote
        };
    
    
    setListe(Liste.map(e=>e.id==id ? p : e));
    if (fermer) fermer();
    
    
  }
  return <><p>Nom: <input type="text" value={nnom} onChange={z=>setnnom(z.target.value)}/></p> 
  <p>age: <input type="text" value={aage} onChange={z=>setaage(z.target.value)}/></p>
  <p>filiere: <input type="text" value={ffiliere} onChange={z=>setffiliere(z.target.value)}/></p>
  <p>note: <input type="text" value={nnote} onChange={z=>setnnote(z.target.value)}/></p>
  <button onClick={modifier}>modifier</button> <button onClick={fermer}>fermer</button> </>
}
  export default Afficher