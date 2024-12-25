import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { doApiMethod, } from '../services/apiService';
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend
} from "chart.js/auto";

ChartJS.register(
    Title,
    Tooltip,
    Legend
)

const Home = () => {
    const navigate = useNavigate();
    const [limit, setlimit] = useState("7");
    const [priceData, setPriceData] = useState([1, 2]);
    const [closeData, setCloseData] = useState([1, 2]);

    useEffect(() => {
        doApi(limit);
    }, []);

    const doApi = async (_limit) => {
        console.log(_limit);
        let url = `/crypto/${_limit}`;
        console.log(url);
        try {
            let resp = await doApiMethod(url, "GET");
            setPriceData(resp.data.price_close_data);
            setCloseData(resp.data.time_close_data);
            console.log(resp.data.price_close_Data.length);
        } catch (error) {
            console.log(error);
        }
    }

    const tologout = () => {
        navigate("/logout");
    };
    const toMonth = () => {
        setlimit("30")
        doApi("30");
    };
    const toWeek = () => {
        setlimit("7")
        doApi("7");
    };


    const options = {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: "top",
            },
            tooltip: {
                enabled: true,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: "Time",
                },
            },
            y: {
                title: {
                    display: true,
                    text: "Price",
                },
            },
        },
    };
    const data = {
        labels: closeData,
        datasets: [
            {
                lebel: "Steps",
                data: priceData,
                borderColor: "rgb(75,192,192)",
            }
        ]
    }

    return (
        <div className="container text-center" style={{ height: '100vh', padding: '20px', }}>
            <h1 className='mb-2'>Welcome to the Crypto Graph </h1>
            <div>
                <button onClick={toMonth} className="btn btn-outline-primary m-3">last month</button>
                <button onClick={toWeek} className="btn btn-outline-primary m-3 ">last week</button>
                <button onClick={tologout} className="btn btn-outline-danger m-5">Log Out</button>
            </div>

            <div>
                <Line options={options} data={data} />
            </div>
        </div>
    );
};

export default Home;