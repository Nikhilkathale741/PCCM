pipeline {
    agent any

    environment {
        PROJECT_DIR = "/home/ubuntu/PCCM"
        VENV = "/home/ubuntu/PCCM/venv/bin/activate"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Nikhilkathale741/PCCM.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                sh '''
                cd $PROJECT_DIR
                source $VENV
                pip install -r requirements.txt
                '''
            }
        }

        stage('Apply Migrations') {
            steps {
                sh '''
                cd $PROJECT_DIR
                source $VENV
                python manage.py makemigrations
                python manage.py migrate
                '''
            }
        }

        stage('Collect Static Files') {
            steps {
                sh '''
                cd $PROJECT_DIR
                source $VENV
                python manage.py collectstatic --noinput
                '''
            }
        }

        stage('Restart Gunicorn') {
            steps {
                sh 'sudo systemctl restart gunicorn'
            }
        }
    }
}
