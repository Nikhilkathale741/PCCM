pipeline {
    agent any

    environment {
        PROJECT_DIR = "${env.WORKSPACE}"
        VENV_DIR = "${env.WORKSPACE}/venv"
    }

    stages {
        stage('Clone Repo') {
            steps {
                git branch: 'main', url: 'https://github.com/Nikhilkathale741/PCCM.git'
            }
        }

        stage('Setup Virtual Environment') {
            steps {
                sh '''
                python3 -m venv venv
                ./venv/bin/pip install --upgrade pip --break-system-packages
                ./venv/bin/pip install -r requirements.txt --break-system-packages
                '''
            }
        }

        stage('Apply Migrations') {
            steps {
                sh '''
                ./venv/bin/python manage.py makemigrations
                ./venv/bin/python manage.py migrate
                '''
            }
        }

        stage('Collect Static Files') {
            steps {
                sh '''
                ./venv/bin/python manage.py collectstatic --noinput
                '''
            }
        }

        stage('Start Gunicorn') {
            steps {
                sh '''
                pkill -f gunicorn || true
                nohup ./venv/bin/gunicorn PCCM.wsgi:application --bind 0.0.0.0:8000 &
                '''
            }
        }
    }
}

