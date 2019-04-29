import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID abbd5e95bd98e48abcbc41eca8f650e1d0b7de07b2488ab793b75a437d4976cb'
    }
});