import dotenv from 'dotenv'
dotenv.config()

export const URLS = {
    LOGIN_URL: 'https://todoist.com/'
}

export const CREDENTIALS = {
    STANDARD_USER: {
        USERNAME: process.env.STANDARD_USER_USERNAME,
        PASSWORD: process.env.STANDARD_USER_PASSWORD
    }
}

export const PROJECTNAME = {
    NAME: 'TestProject'
}