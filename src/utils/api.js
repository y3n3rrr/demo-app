import axios from 'axios'

export const getData = async (url) => {
    const response = await axios.get(url)
    console.log('response', response.data)
    return response.data
}
export const deleteData = async (url) => {
    const response = await axios.delete(url)
    return response.data
}