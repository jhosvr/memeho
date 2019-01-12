node { 

checkoutScm()
npmInstall()
npmKill()
npmStart()

}

def checkoutScm() {
	stage('Checkout SCM') {
    if (env.BRANCH_NAME == 'master') {
		checkout([$class: 'GitSCM', branches: [[name: 'master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/jhosvr/memeho.git']]])
	  } elif (env.BRANCH_NAME == 'develop') {
    checkout([$class: 'GitSCM', branches: [[name: 'develop']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/jhosvr/memeho.git']]])
    } else {
    checkout([$class: 'GitSCM', branches: [[name: env.BRANCH_NAME]], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/jhosvr/memeho.git']]])
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
