import axios from 'axios'

export default () => {
    return axios.create({
        baseURL: 'https://api.github.com/users/',
        timeout: 10000
    })
}
