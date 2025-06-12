pipeline {
    agent any

    environment {
        PROJECT_DIR = "${WORKSPACE}"
        VENV_DIR = "${WORKSPACE}/venv"
        PIP = "${WORKSPACE}/venv/bin/pip"
        PYTHON = "${WORKSPACE}/venv/bin/python"
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
                chmod +x ./venv/bin/pip
                ./venv/bin/pip install --upgrade pip --break-system-packages
                ./venv/bin/pip install -r requirements.txt --break-system-packages
                '''
            }
        }

        stage('Apply Migrations') {
            steps {
                sh '''
                ${PYTHON} manage.py makemigrations
                ${PYTHON} manage.py migrate
                '''
            }
        }

        stage('Collect Static Files') {
            steps {
                sh '${PYTHON} manage.py collectstatic --noinput'
            }
        }

        stage('Start Gunicorn') {
            steps {
                sh '''
                pkill -f gunicorn || true
                ${WORKSPACE}/venv/bin/gunicorn PCCM.wsgi:application --bind 0.0.0.0:8000 --daemon
                '''
            }
        }
    }
}

