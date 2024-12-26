pipeline {
    agent any
    environment {
        GITHUB_REPO_URL = 'https://github.com/ankita101242/UpcomingUniverse_k8.git'
    }

    stages {
        stage('Cleanup') {
            steps {
                script {
                    sh 'docker rm -f uu-frontend || true'
                    sh 'docker rm -f uu-backend || true'
                    sh 'docker rm -f db-container || true'
                }
            }
        }

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
                dir('./BACKEND/ProsePetal') {
                    sh "${MVN_HOME}/bin/mvn clean install"
                }
            }
        }

        stage('Build Docker Images') {
            steps {
                script {
                    dir('./BACKEND') {
                        docker.build("ankita101242/uu-backend", '.')
                    }
                    dir('./FRONTEND') {
                        docker.build("ankita101242/uu-frontend", '.')
                    }
                }
            }
        }

        stage('Push Docker Images') {
            steps {
                script {
                    docker.withRegistry('', 'DockerHubCred') {
                        sh 'docker push ankita101242/prosepetals-frontend:latest'
                        sh 'docker push ankita101242/prosepetals-backend:latest'
                    }
                }
            }
        }

        stage('Run Ansible Playbook') {
            steps {
                ansiblePlaybook(
                    playbook: 'Playbook.yml',
                    inventory: 'Inventory'
                )
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
