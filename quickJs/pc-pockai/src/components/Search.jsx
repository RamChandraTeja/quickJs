import React, { useState } from "react";

const Search = ({country}) => {
    const [input, setInput] = useState("");
    
    return (
        <div>
            <input value={input} onChange={(e) => setInput(e.target.value)} />

            <ul>
                {country
                    .filter(c => c.toLowerCase().includes(input))
                    .map(c => <li key={c}>{c}</li>)
                }
            </ul>
        </div>
    );
}

export default Search