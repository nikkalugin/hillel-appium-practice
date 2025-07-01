import generateRandomEmail from "../utils/randomEmailGenerator";

export const randomUserEmail = generateRandomEmail();

export const users = {
    userRegistration: {
        name: 'TestFirstName',
        lastName: 'TestLastName',
        email: 'test@test.com',
        password: 'QweQwe123!'
    }
}