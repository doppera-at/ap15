
# Git Overview



## Git vs. GitHub

### What is Git?
Git is one of many `Version Control Systems (VCS)` and it's most important task is to keep a record of changes so it is possible to revert back to a previous state when something went wrong. It is a standalone program only used locally, which is why it is commonly paired with a hosting service (for example `GitHub`)

### GitHub
Git alone is already a useful tool, but the strength of this workflow is to combine the `Git-History` with a cloud hosting service like `GitHub`. Changes made locally are uploaded, which makes it easy for multiple people to work on the same codebase. Without a `VCS` like `Git` it would be way more difficult to handle cases where multiple people change the same parts of a program - something that is even with `Git` sometimes a challenge.



## Getting started

### Initializing a repository
To enable working with the git history, the command `git init` can be used in the folder containing the code by moving into it using `cd`. This creates a (usually hidden) `.git` folder inside which will contain all information that git needs to function. The contents of this folder are writting by the git program itself and should not be changed manually.

### Cloning repositories
When working with `GitHub` an already existing repository can be cloned onto the local system so changes can be made. When looking at a repository at GitHub a green button labeled `Code` can be found at the upper right which shows the links that can be used to clone the code.
There are 3 options: `HTTPS` when no `SSH-Key` is saved for the device, `SSH` which is my preferred way of working with GitHub and `GitHub CLI` after installing the command line tool from GitHub (which I haven't used yet). To clone move to the directory you want the repository to be cloned into and use the following command: `git clone https://github.com/username/repository.git` or `git clone git@github.com:username/repository.git`. This will download the code into a new directory named after the repository.



## Making changes

After an initialization or cloning you can start working with the code as you are used to: Just open the folder in the IDE of your choice and make additions or changes.

### Staging


### Commits
### Fetch
### Pull
### Push
## Branches
### Creating
### Switching
### Merging
### Rebase

