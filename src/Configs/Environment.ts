import * as Dotenv from 'dotenv';

export const getEnvironment = () => {
    let dev = Dotenv.config();
    return dev;
}