# Instructions for marcie <3

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
