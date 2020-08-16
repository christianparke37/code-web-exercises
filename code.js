@@ -13,7 +13,7 @@ This is an introduction to automated testing in JavaScript. The idea behind test

## Getting Started
1. Fork this repository to make a copy on your own GitHub account.
1. Make sure that your browser is showing this project in your own repositories list in your own account, not Codeup's.
1. Make sure that your browser is showing this project in your own repositories list in your own account.
1. Click the green button on the right that says "Clone or Download".
1. The clone address should look like `git@github.com:your-github-username/intro-to-testing-js.git`, where `your-github-username` is actually your own username on GitHub.
1. Once you've copied your repo's clone address, it's time to clone the project in one of two ways:
@@ -33,8 +33,8 @@ This is an introduction to automated testing in JavaScript. The idea behind test
1. Clone this repo to your projects folder following the "Getting Started" directions. Take a moment to orient yourself with the test runner, the existing tests, and the implementation inside of `code.js`.

1. Once you're comfortable, go to `code.js` and change the name of the `sayHello` function to `helloWorld`. Then refresh `report.html` in your browser.
- What do you notice about the test results?
    - What are some ways you think we could green the tests again?
    - What do you notice about the test results?
    - What are some ways you think we could get the tests to turn green again?

    1. In `tests.js`, change the name of every occurrence of `sayHello` to `helloWorld`. Keep your `helloWorld` function inside `code.js` the same.
- Refresh `report.html`
@@ -51,36 +51,39 @@ This is an introduction to automated testing in JavaScript. The idea behind test

1. Before moving on, ensure that all tests are green and that `helloWorld` is the function under test.

1. Commit and push your work to your GitHub repository.
1. Once you've renamed all the occurrences of `sayHello` to `helloWorld`, add, commit, and push your work to your GitHub repository:
- Open your terminal and navigate to the local directory where you cloned this project.
- First, `git status`. Notice which files are tracked by git.
- Second, type `git add -A` to tell git that you want to get all the changed files staged for commit.
                                                                                              - Now, type `git status`. You should see file names in green. This means that the files are ready for commit.
                                                                                                                                                                                                    - Next, type `git commit -m "adding the first execise for intro to testing"`
- Next, type `git commit -m "add the first execise for intro-to-testing"`
- Type `git status`, again, to make sure that all files are added and committed.
- Finally, push your work by running `git push`. Pushing uploads your new commits to your remote repository, meaning your own fork on GitHub.

    ## Test Driven Development workflow: Tests "drive" the development.
    [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development), TDD, is the process of writing a test before writing the code that passes the test. Here's the TDD workflow:
                                  1. Step 1: Write a (tiny) test: Identify the simplest, smallest thing you want to confirm. For example, before a function exists, assert that the function is defined.
    [Test Driven Development](https://en.wikipedia.org/wiki/Test-driven_development), TDD, is the process of authoring a test before writing any other code. Here's the TDD workflow:
                                  1. Step 1: Write the smallest possible test: Identify the simplest, smallest thing you want to confirm. For example, before a function exists, assert that the function is defined.
2. Step 2: Run all the tests to ensure that the new test fails. We're **supposed** to see a red, failing test, since there's no code yet to green it. Red means we did the first step correctly.
3. Step 3: Write only enough code to green that newest test. No more, no less.
4. Step 4: Run all tests. We're looking for green tests across the board.
5. Step 5: Refactor the code. [To refactor](https://martinfowler.com/bliki/DefinitionOfRefactoring.html) means to increase the code quality without changing its observable behavior. This is an opportunity to reduce duplication, increase readability, or increase the flexibility of your implementation.
                                                5. Step 5: Refactor the code. [Refactoring](https://martinfowler.com/bliki/DefinitionOfRefactoring.html) means to increase the code quality without changing its observable behavior. This is an opportunity to increase readability, increase flexibility, reduce duplication, or make the code more accessible for yourself and other developers moving forward.
6. Repeat.

    ## Our first "Test Drive"
## Take your first "Test Drive"
Our next exercise is to follow the TDD workflow to develop incremental tests and solutions for testing a `sayHello()` function that takes in a name as an argument and returns a string that says hello to that name.
- Step 1: Let's write the smallest test possible. Open up `tests.js` and add a `describe`, an `it`, and an `expect` to assert that `sayHello` is a defined function. Use your tests for `helloWorld` as a guide.
- Step 1: Let's write the smallest test possible. Open up `tests.js`. Add a `describe`, an `it`, and an `expect` to assert that `sayHello` is a defined function. Use your tests for `helloWorld` as a guide.
- `tests.js` should have the describe section and 3 expectations for `helloWorld`.
                                                                     - We're going to add a second describe, and one single `it('should be a defined function', ...)` statement with one, single, `expect` inside the `it`.
- Step 2: Run all the tests. At this point, we're expecting and *hoping* for a single red, failing test that we just now authored.
- Step 3: Now, let's
- Step 4: Run all the tests. We're expect
- Step 5: Given that this is our first (tiny) test and our first implementation, this
- Step 6: Repeat (move to the next section)
- Step 6: Repeat

- Git add, git commit, and push your work. `git add .`, `git commit -m "add first TDD workflow"`, then `git push`.
- Git add, git commit, and push your work.
1. `git add .`
2. `git commit -m "add first TDD workflow"`
3. `git push`

## Our second "Test Drive"

@@ -96,3 +99,31 @@ Our next exercise is to follow the TDD workflow to develop incremental tests and
- What happens when we call sayHello with no input? We get `"Hello, undefined!"` and that's silly!
- What happens if we send `true` or `false` `"Hello, true!"`
-




## Extra Exercises

### Practice writing code to make tests turn green

- check out the is-seven branch
- `git merge is-seven`


### Expand on the isSeven test and implementation
- Add a test that confirms if the input is the string 7
- Refresh to
- Now


## Test Cycles and changes to make
- remove the rename part or have it rename back
test that sayHello is a function
test that sayHello() returns a string
test that sayHello("Jane") returns "Hello, Jane!"
test that sayHello("Bob") returns "Hello, Bob!"
refactoring opportunity
test that sayHello(name) returns "Hello, " + name + "!";
what about sayHello(5)?
    what about sayHello() returning "Hello, undefined!"