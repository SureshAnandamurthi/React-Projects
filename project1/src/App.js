import react from "react";

class App extends react.Component{
    render(props){
        const {id, fname, lname} = this.props;
        return (
            <div>
                <nav>Hello {fname} {lname}</nav>
                <p>{id} Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reprehenderit debitis doloribus sunt ipsam esse alias consequatur explicabo enim. Pariatur, necessitatibus eaque ab iusto natus debitis ipsa ullam, aperiam veritatis saepe maiores quidem. Voluptas vel animi vero soluta, repudiandae saepe cupiditate inventore. Deserunt voluptas sed expedita aliquid recusandae dolor, vel inventore?</p>
            </div>
        )
    }

}

export default App;