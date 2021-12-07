import image1 from "./IMG-20190202-WA0010.jpg";
import image2 from "./IMG-20190816-WA0002.jpg";
import image3 from "./IMG-20181220-WA0004.jpg";
export default function Card (){
    const photo = "";
    return (
        <>
            {/*<div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image1} className="img-fluid rounded-start" alt="birthday"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Birthday Boys</h5>
                        <p className="card-text">Neeraj and Nehaal are celebrating their 4th Birthday on 06Dec21</p>
                        <p className="card-text"><small className="text-muted">You are all invited</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image2} className="img-fluid rounded-start" alt="birthday"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Birthday Boys</h5>
                        <p className="card-text">Neeraj and Nehaal are celebrating their 4th Birthday on 06Dec21</p>
                        <p className="card-text"><small className="text-muted">You are all invited</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={image3} className="img-fluid rounded-start" alt="birthday"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Birthday Boys</h5>
                        <p className="card-text">Neeraj and Nehaal are celebrating their 4th Birthday on 06Dec21</p>
                        <p className="card-text"><small className="text-muted">You are all invited</small></p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card mb-3">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={photo} className="img-fluid rounded-start" alt="birthday"/>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                        <h5 className="card-title">Birthday Boys</h5>
                        <p className="card-text">Neeraj and Nehaal are celebrating their 4th Birthday on 06Dec21</p>
                        <p className="card-text"><small className="text-muted">You are all invited</small></p>
                        </div>
                    </div>
                </div>
    </div>*/}
        <section className="container">
            <div className="row">
                <div className="col-md-4">
                        <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={photo} className="img-fluid rounded-start" alt="birthday"/>
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                <h5 className="card-title">Birthday Boys</h5>
                                <p className="card-text">Neeraj and Nehaal are celebrating their 4th Birthday on 06Dec21</p>
                                <p className="card-text"><small className="text-muted">You are all invited</small></p>
                                </div>
                            </div>
                        </div> 
                    </div>
                </div>
            </div>
        </section>
            
        </>
    )

}