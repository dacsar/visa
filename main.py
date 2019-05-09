from flask import Flask, Response, request, render_template, send_from_directory, url_for, request
from flask_cors import CORS, cross_origin
import json
import firebase_admin
from firebase_admin import credentials, db


## flask appの設定
app = Flask(__name__, static_folder='./src/static', template_folder='./src/templates')
CORS(app)

## firebaseの設定
cred = credentials.Certificate('test-420c5-firebase-adminsdk-1mhrq-0e28e02834.json')
firebase_admin.initialize_app(cred, {
  'databaseURL' : 'https://test-420c5.firebaseio.com/',
  'databaseAuthVariableOverride' : {
    'uid' : 'my-service-worker'
  }
})
ref = db.reference('/another_resource')

users_ref = ref.child('users')
users_ref.set({
    'alanisawesome': {
        'date_of_birth': 'June 23, 1912',
        'full_name': 'Alan Turing'
        },
    'gracehop': {
        'date_of_birth': 'December 9, 1906',
        'full_name': 'Grace Hopper'
        }
    })

## routing
@app.route('/')
def index():
  return render_template('index.html')

@app.route('/post', methods = ['POST'])
def post():
  if request.method == 'POST':
    namelist = ['q1', 'q2', 'q3', 'q4', 'q5']
    result = 0
    for i in namelist:
      result += int(request.json[i])
    print(result)
    return render_template('index.html')

if __name__ == '__main__':
  app.run(debug = True)