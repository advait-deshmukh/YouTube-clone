import React, {useState, useRef, useEffect} from 'react';
import './SearchBar.css'

const SearchBar = ({onFSubmit}) => {

    const [term, setTerm] = useState("");
    const ref = useRef('');

    const onSubmit = (e) => {
        e.preventDefault(); 
        onFSubmit(term);
    }

    useEffect(()=>{
        ref.current.focus();
    }, [])
    

    return(
        <form className="ui form container" onSubmit={(e)=>{onSubmit(e)}}>
            <div className="field">
                <label><h3>Search video</h3></label>
                <input 
                    ref = {ref}
                    placeholder="Search.."
                    onChange = {(e)=> setTerm(e.target.value)}
                />
            </div>
        </form>    

    );
}

export default SearchBar;