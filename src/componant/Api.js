import axios from 'axios'
import {useEffect, useState} from 'react';

export const LoadImages = (img) => {
    const count = 1
    const [state, setState] = useState();
    useEffect(() => {
        axios.get("https://api.unsplash.com/photos?client_id=aplGnGzWfNqq11cVrBZmf0qG_4v9C2nAJ8XGL225aeU")
    .then((data) => {
        setState(data.data)
    })
    }, [count])
    return state
}