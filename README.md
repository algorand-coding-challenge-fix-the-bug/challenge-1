# 🎮 Algorand Coding Challenge: Fix The Bug 🐞!

## 🚩 Challenge 1: I Can't Send My Transaction! 😭

> I want to send 1 ALGO to my friend to show how amazing Algorand is but I can't send my transaction! what's wrong???

Inside of `index.ts` file, there is a script that sends a payment transaction that sends 1,000,000 microAlgos (1 ALGO) to the receiver's wallet. However if you try running the `index.ts` file after opening Docker Desktop and then running:
```bash
algokit bootstrap all
algokit localnet start
npm run start
```
it will fail and show this error: `TypeError: Argument must be byte array`

This repository has the `challenge` folder on the root level, which contains the fix the bug challenge codebase.
Find the `index.ts` file inside of the `challenge` folder and **fix the bug! 🐞**

> 💬 Meet other hackers working on this challenge and get help in the [JavaScript SDK Discord Channel](https://discord.com/channels/491256308461207573/631209194967531559)!

## Checkpoint 1: 🧰 Prerequisites 

1. [Install AlgoKit](https://github.com/algorandfoundation/algokit-cli/tree/main?tab=readme-ov-file#install).
2. Install [Docker](https://www.docker.com/products/docker-desktop/). It is used to run a local Algorand network for development.
3. Install [Node.JS / npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm) 

**Make sure to install these 3 prerequisites before continuing!**

## Checkpoint 2: 💻 Set up your development environment 

1. [Fork this repository.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/working-with-forks/fork-a-repo)
2. Clone the repository
```bash
cd [DIRECTORY_OF_YOUR_CHOICE]
git clone [FORKED_REPO_URL]
```
3. Open the cloned repository with the code editor of your choosing.
4. Go into the `challenge` directory and run the following in your terminal:
```bash
algokit bootstrap all
```

Video walkthrough of forking and cloning this repository:

https://github.com/algorand-fix-the-bug-campaign/challenge-1/assets/52557585/acde8053-a8dd-4f53-8bad-45de1068bfda

Now you are ready to fix the bug!

## Checkpoint 3: 🐞 Fix the bug 🧐

1. Open Docker Desktop and launch Algorand localnet by running `algokit localnet start` in your terminal [For more info click me!](https://github.com/algorandfoundation/algokit-cli/blob/main/docs/features/localnet.md#creating--starting-the-localnet). 
2. Make sure you are inside the `challenge` directory and run `npm run start` in your terminal to run the `index.ts` file and see the error message.
3. Go to `index.ts` file and fix the code to make it work. 
4. Run `npm run start` inside of `challenge` directory again to run the `index.ts` file.
If you see: `Payment of 1000000 microAlgos was sent to [receiver's address]` in the console, you successfully fixed the bug! 👏

<img src="https://raw.githubusercontent.com/ubinix-warun/algorand-coding-challenge-1/main/asset/Screenshot%202567-03-06%20at%2014.49.13.png" />


**😰 Are you struggling?**
Here is a hint for you: https://developer.algorand.org/docs/sdks/javascript/

## Checkpoint 4: 💯 Submit your answer 

1. After fixing the bug, push your code to your forked Github repo and [make a PR to the original repo.](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork) 
2. Inside the PR include:
   1. What was the problem?
   2. How did you solve the problem?
   3. Screenshot of your terminal showing the logged sentence. `Payment of 1000000 microAlgos was sent to [receiver's address]`

## Checkpoint 5: 🏆 Claim your certificate of completion NFT! 🎓

The Algorand Developer Relations team will review the submission and "approve" the PR by labeling it `Approved`. Once it's approved, we will share the magic link to claim your certificate of completion NFT in the comment of the PR! 

🎉 Congratulations on completing the challenge Algodev! Now on to the next one 💪

## Cheatsheet

```
brew install algorandfoundation/tap/algokit

```
