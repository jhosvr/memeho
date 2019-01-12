/*
pipeline {
	agent any
	stages {
		stage('Install Dependencies') {
			steps {
				sh 'npm install'
			}
		}
		stage ('Kill existing instance') {
			steps {
				sh 'npm stop'
			}
		}
		stage ('Startup new instance') {
			steps {
				sh 'npm start'
			}
		}
	}
}
*/

node { 

npmInstall()
npmKill()
npmStart()

}

def npmInstall() {
	stage('Install Dependencies') {
		sh ' npm install '
	}
}

def npmKill() {
	stage ('Kill existing instance') {
		sh ' if pgrep memeho-bot; then npm stop; else echo "No existing instance found" '
	}
}

def npmStart() {
	stage ('Startup new instance') {
		sh ' npm start '
	}
}
