#!/bin/bash

# name: start.sh
# description: starts the memeho discord bot

runtime(){ $(date +%T); }
branch=$(git branch | head -n1 | cut -d' ' -f2)

git branch
echo "$runtime: Executing for branch $branch"

case $branch in
	develop)
		main="memeho-test.js"
		;;
	master)
		main="memeho.js"
		;;
	*)
		echo "ERROR: unknown main file detected. A js file will need to be specified for this branch."
		exit 1
		;;
esac

echo "$runtime: Terminating existing instance"
pkill -f $main

echo "$runtime: Installing packages"
npm install

echo "$runtime: Starting Memehobot"
node $main &
