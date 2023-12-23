Super Galactic Age Calculator
A solar year lasts 365 days on planet Earth. However, the length of a solar year varies from planet to planet. For instance, a solar year on Mercury lasts 88 days. Write an application that determines a user's age based on a planet's solar years.

You are not required to build a UI for this application. Instead, focus on thoroughly testing each piece of functionality. Normally, we want you to follow testing best practices, which includes committing your code and test once it is passing. However, for this project, we want you to follow a different commit workflow to demonstrate your understanding of the Red, Green, Refactor workflow. Make sure that you:

Commit each test after you have written it and before writing the corresponding method in your business logic. This is the Red phase.
Then, write the business logic that corresponds to the test, verify that your test passes, and then commit your code. This is the Green phase.
Refactor your code base and tests as necessary.
At the end of your work session, verify that you have 100% coverage on all tests.
The business logic of your application should take a person's age in years and create a class that does the following:

Returns their age in Mercury years. (A Mercury year is .24 Earth years.)
Returns their age in Venus years. (A Venus year is .62 Earth years.)
Returns their age in Mars years. (A Mars year is 1.88 Earth years.)
Returns their age in Jupiter years. (A Jupiter year is 11.86 Earth years.)
Determines how many years have passed on each planet since a past birthday. For example, if a user is 56 and we want to calculate how many years have passed since their 43 birthday, we would find the following results:
13 Earth years have passed.
54.16 Mercury years have passed.
20.96 Venus years have passed.
6.91 Mars years have passed.
1.09 Jupiter years have passed.
Determines how many years have yet to pass until a future birthday. For example, if a user is 56 years and we want to calculate how many years have yet to pass until they are 61 years old, we would find the following results:
5 Earth years have yet to pass.
20.83 Mercury years have yet to pass.
8.06 Venus years have yet to pass.
2.65 Mars years have yet to pass.
0.42 Jupiter years have yet to pass.
Keep it simple! You do not have to use the JavaScript Date object to complete this prompt.

Objectives
Your code will be reviewed for the following objectives:

Business logic has 100% line coverage with Jest.
Tests are included for each business logic behavior and code is committed after each test passes.
Project utilizes classes, a feature of ES6.
Dependencies are managed with npm.
webpack is used to lint, bundle, and process code.
Project is in a polished, portfolio-quality state.
The prompt’s required functionality and baseline project requirements are in place by the deadline.
What is a polished, portfolio-quality state?
When a project is both polished and in a portfolio-quality state, this means:

You've reviewed your project and your README prior to submitting it to make sure there are no errors or missing information and you are consistent in your indentation, spacing, and code structure.
You are following the best practices and coding conventions we teach.
What are the baseline project requirements?
All independent coding projects at Epicodus have these baseline requirements:

A complete and informative README
The project's commit history demonstrates that the project’s required work schedule and hours have been met:
8 hours completed on Friday is required for full-time students
4 hours completed over the weekend is required for part-time students
Completion of the project based on the prompt and objectives. The prompt contains details on the project's theme and features that are not always detailed in the objective. Carefully read through the prompt towards the end of your work session to make sure that you are not missing anything.
Further Exploration
If you're able to complete the project with time to spare, implement additional features such as:

Add a UI to your application.
Return the numbers of days until a user's next or last birthday on each planet. To do this, explore how to use the JavaScript Date object.
Return the age that your favorite public figure will be in dog years on the planet Jupiter in 2073.
Assuming that the average lifespan of a mayfly is 5 minutes, determine how many mayfly lifespans a human user has lived and then compare it to the current age (in Earth years) of our sun.
Make your application look nice and give it a solar theme!
Objectives
Your project will be reviewed on the following objectives:
Business logic has 100% line coverage with Jest.

Tests are included for each business logic behavior and code is committed after each test passes.

Project utilizes classes, a feature of ES6.

Dependencies are managed with npm.

webpack is used to lint, bundle, and process code.

Project is in a polished, portfolio-quality state.

The prompt's required functionality and baseline project requirements are in place by the deadline.

