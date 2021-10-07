import axios from 'axios'
import {useEffect, useState} from 'react';

const count = 1

export const LoadImages = (img) => {
    const [state, setState] = useState();
    useEffect(() => {
        axios.get("https://api.unsplash.com/photos?client_id=aplGnGzWfNqq11cVrBZmf0qG_4v9C2nAJ8XGL225aeU")
    .then((data) => {
        setState(data.data)
    })
    }, [count])
    return state
}

export const SearchImages = (query) => {
    const [state, setState] = useState();
    useEffect(() => {
        axios.get(`https://api.unsplash.com/search/photos?query=${query}&client_id=aplGnGzWfNqq11cVrBZmf0qG_4v9C2nAJ8XGL225aeU`)
    .then((data) => {
        setState(data.data.results)
    })
    }, [query])
    return state
}