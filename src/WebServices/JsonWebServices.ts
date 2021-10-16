import axios from 'axios';

export const postJsonCron = async (data: any): Promise<any> => {
    try {
        let url: string = process.env.URL_FRONT_PROD;
        let response = await axios.post(url, data, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': '8435b504-40b3-4542-af6a-c4450f442a4b'
            }
        });
        return response;
    } catch (error) {
        throw new Error('No se pudo enviar informacion a la pagina')
    }
}