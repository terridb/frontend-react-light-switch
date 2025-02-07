import './App.css';
import {useState} from "react";

function App() {
    const [light, setLight] = useState(false);
    console.log([light, setLight]);

    return (
        <main className={light ? "on" : "off"}>
            <section>
                <div className="dot"></div>
                <button type="button" onClick={() => {
                    !light ? setLight(true) : setLight(false);
                }}>
                    {!light ? "Turn on" : "Turn off"}
                </button>
            </section>
        </main>
    );
}

export default App;

