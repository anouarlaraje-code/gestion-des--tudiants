import { useState } from 'react'
import Afficher from './modifier'
import { etudiantsInitial } from './data'
function App() {
  
  const [Liste,setListe]=useState(etudiantsInitial)
  const [id,setId]=useState(Liste.reduce((max,p)=>max.id>p.id ? max.id :p.id)+1)
  const [nom,setNom]=useState("")
  const [age,setAge]=useState("")
  const [filiere,setFiliere]=useState("")
  const [note,setNote]=useState("")
  const [rechercher,setRechercher]=useState("")
  const [idModifier, setIdModifier] = useState(null);
function Ajouter(){
    const e={id:id,nom:nom,age:age,filiere:filiere,note:note};
    setListe([...Liste,e])
    setNom("");
    setAge("");
    setNote("");
}
function Rechercher(){
  const r=Liste.filter(e=>e.nom.toLowerCase().includes(rechercher.toLowerCase()))    
  return r;
}
function Supprimer(id){
    const t=Liste.filter(e=>e.id != id)
    setListe(t) ;
}


return <>
  <h1>Gestion des etudiants</h1>
  <input type="hidden" value={id} /><br />
  <input type="text" required value={nom} placeholder='Entrer votre nom' onChange={(e)=>setNom(e.target.value)}/> <br />
  <input type="number" min={15} max={60} value={age} placeholder="Entrer votre age" onChange={(e)=>setAge(e.target.value)}/> <br />
  <select name="" id="" required onChange={(e)=>setFiliere(e.target.value)}>   
    <option value="DEVOWFS">DEVOWFS</option>
    <option value="Gestion">Gestion</option>
  </select>
  <br />
  <input type="number" min={0} max={20} value={note} placeholder='Entrer votre note' onChange={(e)=>setNote(e.target.value)}/>
  <br />
  <button onClick={Ajouter}>Ajouter</button>
  <br />
  <input type="text" value={rechercher} onChange={(e)=>setRechercher(e.target.value)}/>
  <button onClick={Rechercher}>Rechercher</button>
  <br />
  <table border={2}>  <tr><th>Nom</th><th>Age</th><th>Filiere</th><th>Note</th><th>Action</th></tr>{Rechercher().map(e=>
    <><tr><td><strong> {e.nom}</strong></td>
    <td> {e.age}</td>
    <td> {e.filiere}</td>
    <td> {e.note}</td>
    <td><button onClick={() => setIdModifier(e.id)}>Modifier</button><button onClick={() => Supprimer(e.id)}>Supprimer</button></td>
    
    </tr>
    </>)}</table>

    {idModifier && (
        <div style={{ marginTop: "20px", border: "1px dashed black", padding: "10px", width: "300px" }}>
          <h3>Formulaire de modification</h3>
          <Afficher id={idModifier} Liste={Liste} setListe={setListe} fermer={() => setIdModifier(null)} />
        </div>
      )}
      </>
}

export default App
