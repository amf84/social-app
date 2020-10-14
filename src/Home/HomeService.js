import axios from 'axios';

export const HomeService = async () => {
    const { data } = await axios.get('/api/list.json');
    return data;
}
