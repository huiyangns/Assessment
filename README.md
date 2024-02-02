# Assessment
## How to install dependencies
Under project folder, use ```npm ci ``` to install all dependencies

## Project structure
### cucumber-json folder
It will contain reports in json and html format when running in headless mode

### cucumberJsonFormatter folder
It contains a jar package which can covert the format of report from json to html

### cypress folder
It contains all the Feature Files, step definitons, .etc.

1. FFs are located at createAccount folder
```noOrInvalid-Email.feature``` focuses on "User cannot create an online account with incorrect email"
```createAccountWithAllCorrectInfo.feature``` focuses on "Sign up today to create your online account and join MYER one."
2. stepdefinitions folder includes all step definitions
3. support folder contains Custom Commands, helper functions and intercepted urls.

### How to run
1. Via test runner
```npx cypress open --browser chrome --e2e```
Open test runner and choose FF to run
2. Headless mode
FFs are organised by tags. For example, we can use the following command to run FFs tagged with ```@normalProcess```
```npx cypress run --env TAGS='@normalProcess' --headless --browser chrome --e2e```
3. Stress test
We can conduct stress test via the following command
```npx cypress-repeat run -n 5 --env TAGS='@normalProcess' --headless --browser chrome --e2e```
-n represents it will run Cypresss <N> times, exiting after the first failed run or after all runs finish successfully