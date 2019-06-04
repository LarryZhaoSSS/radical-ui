#!/bin/env bash
yarn doc
git checkout gh-pages
doc/* ./
git add .
git commit -m "update gh-pages"
git push
git checkout -