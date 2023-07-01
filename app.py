from flask import Flask, request, session, render_template


app = Flask(__name__)


@app.route("/", methods=['GET'])
def index():
    return render_template("index.html")
   
    
#Init Server
if __name__ == '__main__':
    app.run(debug=True)