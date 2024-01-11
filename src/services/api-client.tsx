import axios from "axios";

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '00e3d0618ff849e096260d56f7af5d0b'
    }
})

