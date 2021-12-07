import Card from "./Card";
import CardList from "./CardList";
export default function Sidebar(){
    return (
        <div className="container-fluid">
            <div className="row md-4">
                <div className="col">
                    <Card />
                </div>
                <div className="col">
                <CardList />
                </div>
            </div>

        </div>
    )
};