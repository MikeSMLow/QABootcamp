# QABootcamp FE Capstone Project

## Dotenv Note

In order for the project to run you will need to install dotenv and include a .env file on your cloned repository. The file contains 2 constants which you should modify with your own Todoist credentials

```
STANDARD_USER_USERNAME=[Valid Todoist Username]
STANDARD_USER_PASSWORD=[Valid Todoist Password]
```

## Included Test Cases

Login.test.js contains 4 test cases:

1. As a user I should be able to login succesfully by providing valid credentials
2. As a user I should not be able to login when no password is specified
3. As a user I should not be able to login when the email address format is invalid
4. As a user I should not be able to login when the entered password is invalid

InboxPage.test.js contains 3 test cases:

1. As a user I should be able to create a new task for today
2. As a user I should be able to create a new task for tomorrow
3. As a user I want to be able to create 10 tasks with due date for today

ProjectPage.test.js contains 1 test case:

1. As a user I should be able to create a new project of orange color and marked as favorite

All test cases have a final step to delete their created tasks (where applicable).
