import { robots } from "./Robots";

export default function CardList(){
    const robs = robots.map((element, index)=>{
        return (
            <div className="card" style={{width: '18rem'}} key={index}>
                <img src={`https://robohash.org/${element.id}`} className="card-img-top" alt="robots"/>
                <div className="card-body">
                    <p className="card-text">{`${element.comments} by ${element.name}`}</p>
                </div>
            </div>
        )
    });
    return robs;
}

// let rob = robots.map((element, index)=>{
//     <div className="card" style={{width: '18rem'}}>
//         <img src="https://robohash.org/{element.id}" className="card-img-top" alt="robots"/>
//         <div className="card-body">
//             <p className="card-text">abc</p>
//         </div>
//     </div>
// );
// });
// return(
// <>
//     {rob}
//     {/* <pre>{JSON.stringify(robots)}</pre> */}
// </>

// )