#!/bin/bash

# name: start.sh
# description: starts the memeho discord bot

msg(){ echo "$(date +%Y%m%d-%T): ${1}"; }
branch=$(echo "${GIT_BRANCH##origin/}")

msg "Executing for branch $branch"
case $branch in
	develop)
		main="memeho-test.js"
		;;
	master)
		main="memeho.js"
		;;
	*)
		msg "ERROR: unknown main file detected. A js file will need to be specified for this branch."
		exit 1
		;;
esac

msg "Terminating existing instance"
pkill -f $main

msg "Installing packages"
npm install

msg "Starting Memehobot"
node $main > memeho-$branch.log 2>&1 &
