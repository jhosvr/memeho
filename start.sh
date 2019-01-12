#!/bin/bash

# name: start.sh
# description: starts the memeho discord bot

msg(){ echo "$(date +%T) ${1}"; }
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
		echo "ERROR: unknown main file detected. A js file will need to be specified for this branch."
		exit 1
		;;
esac

msg "Terminating existing instance"
pkill -f $main

msg "runtime: Installing packages"
npm install

msg "runtime: Starting Memehobot"
node $main &
