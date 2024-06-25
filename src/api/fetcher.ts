import axios from 'axios';

const fetcher = async ({ url, params }: { url: string; params?: object }) => {
    const data = await axios.get(url, {
        params: params,
    }).then(res => {
        return res.data
    }).catch(
        err => {
            console.log("Error" + err + '\n' + err.response.message)
            return null;
        }
    )
    return data;
};

export default fetcher;