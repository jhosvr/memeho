node {

  checkoutScm()
  npmBuild()
  npmStop()
  npmStart()
  Validate()
}

def checkoutScm() {
	stage('Checkout SCM') {
    checkout([$class: 'GitSCM', 
      branches: [[name: env.BRANCH_NAME]], 
      doGenerateSubmoduleConfigurations: false, 
      extensions: [], 
      submoduleCfg: [], 
      userRemoteConfigs: [[url: 'https://github.com/jhosvr/memeho.git']]])
  }
} 

def npmBuild() {
	stage('Install Dependencies') {
		sh 'npm install'
	}
}

def npmStop() {
	stage ('Kill existing instance') {
		sh "if pgrep memeho-${BRANCH_NAME}; then npm stop; else echo 'No existing instance found'; fi"
	}
}

def npmStart() {
	if (env.BRANCH_NAME == 'develop'){
		withCredentials([string(credentialsId: 'memeho-bot-develop', variable: 'DBOT_TOKEN')]) {
			stage ('Start new instance') {
				sh 'JENKINS_NODE_COOKIE=dontKillMe npm start'
			}
		}
	} else if (env.BRANCH_NAME == 'master'){
		withCredentials([string(credentialsId: 'memeho-bot-master', variable: 'DBOT_TOKEN')]) {
			stage ('Start new instance') {
				sh 'JENKINS_NODE_COOKIE=dontKillMe npm start'
			}
		}
	}
}

def Validate() {
	stage ('Validating process') {
		sh 'sleep 3'
		sh "pgrep dbot-${BRANCH_NAME}"
	}
}
