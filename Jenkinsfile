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

npmInst()
npmDead()
npmAlive()

}

def npmInst() {
	stage('Install Dependencies') {
		sh " npm install "
	}
}

def npmDead() {
	stage ('Kill existing instance') {
		sh " npm stop "
	}
}

def npmAlive() {
	stage ('Startup new instance') {
		sh " npm start "
	}
}