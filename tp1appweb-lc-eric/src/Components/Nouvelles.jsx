import Nouvelle from "./Nouvelle.jsx";

export default function Nouvelles({news, setNews}){

    const nouvelles = news.map(news => <Nouvelle
        {...news}>
    </Nouvelle> )

    return(
        <div>
            {nouvelles}
        </div>
    );

}