import React, {useState} from 'react';

function Form(){
    const[input, setinput] = useState('');

    const handleInputChange = (event) => {
        setinput(event.target.value);
    };

    const handleSubmit = (event) => {event.preventDefault();
        alert('Form submitted' + input);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Input:<input type="text" value={input} onChange={handleInputChange}></input>
            </label>
            <button type="submit">Submit</button>
        </form>
    );

}

export default Form;