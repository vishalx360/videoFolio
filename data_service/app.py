from linkedin import *
from github import *
from flask import Flask, abort

app = Flask(__name__)

@app.route('/linkedin/<handle>')
def get_linkedin(handle):
    print("Started for " + handle)
    profile =  get_profile(handle)
    print("got profile")
    if profile is None:
        abort(404, description="Profile not found")
    # li_data = profile
    li_data = process_profile(profile)
    print("processed done")
    return li_data

@app.route('/github/<handle>')
def get_github(handle):
    print("Started for " + handle)
    profile =  get_github_data(handle)
    return profile

@app.route('/')
def health():
    return "healthy"
