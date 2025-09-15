
export default function Utilisateur({utilisateur}){

    return (
        <div>
            <h3>{utilisateur.nom}</h3>
            <p>
                <strong> {utilisateur.role}</strong>
            </p>
        </div>
    )

}