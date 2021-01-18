# Git Usage Guideline

## Description
In this project we will be using git for version control and we will be hosting our code on GitHub. What is git you ask, Git is a distributed version-control system for tracking changes in source code during software development. Git will allow us to have cleaner code better work flow and team dynamics overall.

While git is a very usefull piece of software it can also be very confusing and mistakes done in it might be disastrous. because of that in this project we will be following this guidline in dealing with Commits, Merges, and reverting changes.

---

## Git commands and their usage:

Here is some of the most used git commands and what they do, feel free to take a look at [git's official docs](https://git-scm.com/doc) for more info.

- **Git init:** initializes a git repository, no need to do this in projects which have git already initialized in them.

- **Git clone [REPOSITORYS_URL]:** clones a repository to the current folder form the selected [REPOSITORYS_URL].

- **Git add [file/files/directory path]:** adds changes files to the staging area, where we can after that commit them.

- **Git commit -m [Commit message:** commits the staged changes with [Commit message].

- **Git branch -a:** lists all the branches locally and remotely.

- **Git branch [BRANCHNAME]:** creates a brach with the name [BRANCHNAME].

- **Git checkout [BRANCHNAME]:** changes current branch to [BRANCHNAME].

- **Git merge [SOURCEBRANCH] [TARGETBRANCH]:** merges [SOURCEBRANCH] to [TARGETBRANCH]

- **Git log:** gives logs about the activities done in this branch.

- **Git log —summary:** gives a detailed log about the activities done in this repository.

- **Git diff [SOURCEBRANCH] [TARGETBRANCH]:** previews the changes between the [SOURCEBRANCH] and the [TARGETBRANCH].

- **Git pull:** updates the repository to the latest version.

- **Git push:** pushes changes to the remote repository.

**Note:** Git has lots of features and while I didn't cover all of them here please make sure to not use anything other then these commands without asking Project Leader first, because as I said git can be destructive and you might end up deleting the whole repo code by mistake, so lets avoid such miskates.

---

## Commit Naming Convention:

Whenever we add a function make some change or add some new feature, we have to commit our code with a commit message. And because we are working as a group and do not want the commits to be messy these messages should be very meaningful, yet short messages. Thus, there is a way to write these messages depending on the change that has been done.
The message should always start with one of these words:

Add: for newly added features, function etc.
Edit: for newly edited features, function etc.
Fix: for newly done fixes like removing a bug etc.
Merge: for merging branches.

And then you would state the feature that u created, added, edited, or fixed, And the propose of it.

**Example commit:** `Edit: changed encryption algo from SHA1 to SHA2 `

---

## Contributing
Feal free to open a Pull Request for any changes that you see fit for this Guidline.