import {useState} from "react";
const Login = ()=>{
    const [userInfo, setUserInfo] = useState({});
    const userInfoHandler = (event)=>{
        console.log(event.target.value);
        setUserInfo({[event.target.name] : event.target.value});
    }
    return (
        <>
            <pre>{JSON.stringify(userInfo)}</pre>
            <form action="">
                <div className="container-fluid mt-5">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="mb-3 row">
                                    <label for="staticEmail" className="col-sm-2 col-form-label" name="email" onChange={userInfoHandler} autoComplete="off">Email</label>
                                    <div className="col-sm-10">
                                    <input type="text" className="form-control" id="staticEmail" placeholder="email@example.com"/>
                                    </div>
                            </div>
                            <div className="mb-3 row">
                                <label for="inputPassword" className="col-sm-2 col-form-label" name="password" onChange={userInfoHandler}>Password</label>
                                <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword"/>
                                </div>
                            </div>
                            <div className="mb-3 row mx-5">
                                <input type="submit" className="col-sm-2 btn btn-primary mx-5" id="btn"/>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default Login;