
export default function Nouvelle(props){
 return (
     <div>
         <h3>{props.date}</h3>
         <h2>{props.titre}</h2>
         <img src={props.src}/>
         <p>Catégorie : {props.categorie}</p>
     </div>
 );
}