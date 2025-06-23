import { v4 as uuidv4 } from 'uuid';

function generateRandomEmail() {
    const emailPrefix = 'expeditiontomysoul+aqa-user';
    const domain = 'gmail.com';
    const uuid = uuidv4().substring(0, 8);
    return `${emailPrefix}${uuid}@${domain}`;
}

export default generateRandomEmail;