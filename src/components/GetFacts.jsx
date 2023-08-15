/* eslint-disable react/jsx-key */
import { useDispatch, useSelector } from "react-redux";
import { get } from "../redux/slices/factsSlice";


export const GetFacts = () => {
    const { facts } = useSelector((state) => state.facts)
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
		dispatch(get(e.target.value));
    }
    
    return (
        <div>
            <input type='number' min='1' max='5' onChange={handleChange}/>
            <ul className="list">
                {facts.map(fact => 
                    <li>{fact}</li>
                )}
            </ul>
        </div>
    )
}