pipeline {
    agent any

    environment {
        PROJECT_DIR = "${env.WORKSPACE}"
        VENV_DIR = "${env.WORKSPACE}/venv"
        PYTHON_BIN = "${env.WORKSPACE}/venv/bin/python"
        PIP_BIN = "${env.WORKSPACE}/venv/bin/pip"
        ACTIVATE = "source ${env.WORKSPACE}/venv/bin/activate"
    }

    stages {
        stage('Clone Repo') {
            steps {
                // Jenkins automatically checks out the repo; nothing needed here.
                echo "Repository cloned to ${env.WORKSPACE}"
            }
        }

        stage('Set up Virtual Environment') {
            steps {
                sh '''
                python3 -m venv venv
                . venv/bin/activate
                pip install --upgrade pip
                pip install --break-system-packages -r requirements.txt
                '''
            }
        }

        stage('Apply Migrations') {
            steps {
                sh '''
                . venv/bin/activate
                ${PYTHON_BIN} manage.py makemigrations
                ${PYTHON_BIN} manage.py migrate
                '''
            }
        }

        stage('Collect Static Files') {
            steps {
                sh '''
                . venv/bin/activate
                ${PYTHON_BIN} manage.py collectstatic --noinput
                '''
            }
        }

        stage('Start Gunicorn') {
            steps {
                sh '''
                . venv/bin/activate
                pkill gunicorn || true
                ${PYTHON_BIN} -m gunicorn PCCM.wsgi:application --bind 0.0.0.0:8000 --daemon
                '''
            }
        }
    }
}

