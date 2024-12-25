import { useNavigate } from 'react-router-dom';

const Welcome = () => {
    let nav = useNavigate();

    const toSignIn = () => {
        nav("/login");
    };

    return (
        <div className="container-fluid mt-5">
            <div className="d-flex justify-content-around p-5 m-3" style={{ height: '350px' }}>
                <div className="text-center p-3" style={{ height: '100%', width: "40%" }}>
                    <div className="m-3"> <img style={{ height: '10%', width: "10%", borderRadius: "50px" }} src="src/assets/react.svg" alt="logo" /></div>
                    <button onClick={toSignIn} className="btn btn-outline-primary m-3 w-50">Sign In</button>
                </div>

                <div className="px-4" style={{ height: '100%', width: "60%" }}>
                    <div className="bg-white p-4 shadow-lg text-center" style={{ height: '100%', width: "80%", borderRadius: '16px' }}>
                        <h3 className="py-2">welcome</h3>
                        <p>On our website you can find a graph of Bitcoin valuations in different periods</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Welcome;
