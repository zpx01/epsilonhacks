from flask import Flask, render_template, url_for
app = Flask(__name__)

@app.route('/')
def start():
    return render_template('login.html')

@app.route('/index')
def index():
    return render_template('index.html')

@app.route('/main')
def main():
    return render_template('main.html')

@app.route('/login')
def login():
    return render_template('login.html')

@app.route('/signup')
def signup():
    return render_template('signup.html')

# @app.route('/testrun', methods = ['POST'])
# def test():

#     return 'cool info'

if __name__ == "__main__":
    app.run(debug=True)