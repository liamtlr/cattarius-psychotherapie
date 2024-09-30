# Instructions for marcie <3

## Making changes 

1. Pull the repo

```
git pull origin main
```

2. Check out a new branch. This will store your changes in a way so that it
does not effect the 'main' branch - so you can't mess things up

```
git checkout -b [name of feature/changes]
```

3. Run the server

In command prompt, from the repo folder

```
docker compose up
```

4. Make your changes

5. Commit the changes

```
git status  # lists out the files that have been changes
git add [path to file you have changed]  # Only commit files you have changed
git commit -m "[a description of then changes you've made]"
```

6. Push the changes to GitHub

```
git push origin [name of branch]
```

7. In GitHub open a [pull request](https://github.com/liamtlr/cattarius-psychotherapie/pulls)


## Deploying changes

1. If you haven't already, open up the repo as a codespace
2. In the Dockerfile, ensure the CMD section to run the server in uncommented
- type "q" if there is no console
3. In the command line, run `docker compose build`
4. Then run `docker compose up`
5. Once completed, you should be able to run the site by entering http://localhost:8080/ into a browser
6. Check everything is working as expected
7. When you're happy, build the site. Switch over the Dockerfile to generate a version of the code to host
8. Run `docker compose build`, then `docker compose up` again
9. Check there are no errors, if so contact Liam xxx
10. Otherwise, the hostable version will be in the /.output/public folder. Upload the contents to the FTP

------

# Nuxt 3 Minimal Starter

Look at the [Nuxt 3 documentation](https://nuxt.com/docs/getting-started/introduction) to learn more.

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on `http://localhost:3000`

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.
