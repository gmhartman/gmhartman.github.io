#!/bin/bash

# build the React application
npm run build

# navigate into the build directory
cd build/

# create a new git repository
git init

# add all files to the git repository
git add .

# commit the changes
git commit -m "Deploy to GitHub Pages"

# set the remote URL to your GitHub Pages repository
git remote add origin https://github.com/<gmhartman>/<username>.github.io.git

# push the changes to the GitHub Pages repository
git push -f origin master
