/* eslint-disable react/jsx-key */
import { useSelector, useDispatch } from "react-redux";
import { load } from "../redux/slices/pictureSlice";


export const Picture = () => {
    const  { pictures }  = useSelector((state) => state.pictures)
    const dispatch = useDispatch();
    
    const handleChange = (e) => {
        const file = e.target.files
        for (let i = 0; i < file.length; i++){
            dispatch(load(file[i]))
        }
        
    }

    return (
        <>
            <input type='file' onChange={handleChange} multiple/>
            <div className="pictures">
                {
                    pictures.map(picture => 
                        <img className="picture" src={URL.createObjectURL(picture)}/>
                    )
                }
            </div>
            

        </>
    )
}