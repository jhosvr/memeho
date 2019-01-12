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

checkoutSCM()
npmInst()
npmDead()
npmAlive()

}

def checkoutSCM() {
	stage('Checkout SCM') {

		checkout([$class: 'GitSCM', branches: [[name: 'develop']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/jhosvr/memeho.git']]])
	}
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