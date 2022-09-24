import axios from 'axios';

const KEY = 'YOUR_KEY';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResult:5,
        key: KEY
    }
})