#!/bin/env bash
yarn doc
git push origin :gh-pages
git checkout -b gh-pages
mv - f doc/* ./
git add .
git commit -m "update gh-pages"
git push origin gh-pages
git checkout -