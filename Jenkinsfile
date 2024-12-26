pipeline {
    agent any
    environment {
        GITHUB_REPO_URL = 'https://github.com/ankita101242/UpcomingUniverse_k8.git'
    }

    stages {
        stage('Checkout') {
            steps {
                script {
                    git branch: 'main', url: "${GITHUB_REPO_URL}"
                }
            }
        }

        stage('Maven Build') {
            environment {
                MVN_HOME = tool 'mvn'
            }
            steps {
                dir('./backend') {
                    sh "${MVN_HOME}/bin/mvn clean install"
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    dir('./backend') {
                        docker.build("ankitaagrawal12/backend:latest", '.')
                    }
                    dir('./FRONTEND') {
                        sh 'npm install'
                        sh 'npm run build'
                        docker.build("ankitaagrawal12/frontend:latest", '.')
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('', 'DockerHubCred') {
                        sh 'docker push ankitaagrawal12/frontend:latest'
                        sh 'docker push ankitaagrawal12/backend:latest'
                    }
                }
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                script {
                    sh 'kubectl apply -f ./kubernetes/frontend-deployment.yaml'
                    sh 'kubectl apply -f ./kubernetes/backend-deployment.yaml'
                }
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished.'
        }
        success {
            echo 'Pipeline succeeded!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}

