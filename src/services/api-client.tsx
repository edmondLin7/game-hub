import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '4ea11a1b4e1e40cc8375ccb1b2b687c5'
    }
})

