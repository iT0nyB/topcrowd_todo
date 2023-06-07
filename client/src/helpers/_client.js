import axios from 'axios';

// export const baseURL = "https://topcrowdtodobackend-production.up.railway.app/todos";
export const baseURL = "http://localhost:4000/todos";

const client = axios.create({baseURL});

export default client;

export const getter = (url) => client.get(url).then((res) => res.data)
export const sender = (url, data) => client.post(url, data).then((res) => res.data).catch((e) => {return e})
export const patcher = (url, data) => client.put(url, data).then((res) => res.data)
export const deleter = (url) => client.delete(url).then((res) => res.data)
