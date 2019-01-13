node {
  checkoutScm()
  npmBuild()
  npmStop()
  npmStart()
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
		sh "if pgrep memeho-bot-${BRANCH_NAME}; then npm stop; else echo 'No existing instance found'; fi"
	}
}

def npmStart() {
	withCredentials([string(credentialsId: 'memeho-bot-develop', variable: 'DBOT_TOKEN')]) {
		stage ('Start new instance') {
			sh 'JENKINS_NODE_COOKIE=dontKillMe npm start'
			sh "pgrep memeho-bot-${BRANCH_NAME}"
		}
	}
}
