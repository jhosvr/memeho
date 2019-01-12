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
