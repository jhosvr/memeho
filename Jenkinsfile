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

checkoutScm()
npmInstall()
npmKill()
npmStart()

}

def checkoutScm() {
	stage('Checkout SCM') {
		checkout([$class: 'GitSCM', branches: [[name: 'develop']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/jhosvr/memeho.git']]])
	}
}

def npmInstall() {
	stage('Install Dependencies') {
		sh ' npm install '
	}
}

def npmKill() {
	stage ('Kill existing instance') {
		sh ' if pgrep memeho-bot; then npm stop; else echo "No existing instance found"; fi '
	}
}

def npmStart() {
	stage ('Startup new instance') {
		
		sh ' JENKINS_NODE_COOKIE=dontKillMe npm start '
		sh ' pgrep memeho-bot '
	}
}
