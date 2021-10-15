import axios from 'axios';

export const postJsonCron = async (data: any): Promise<void> => {
    try {
        let url: string = process.env.URL_FRONT;
        await axios.post(url, data, {
            headers: {
                "Authorization": "8435b504-40b3-4542-af6a-c4450f442a4b"
            }
        })
    } catch (error) {
        console.log(error);
    }
}