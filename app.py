from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def root():
    #rotPds = list of rotational periods for all of the planets
    #rockets: dict of all rocket launches, saved as: {date:destination}
    return render_template("index.html",rotPds=[""],rockets={"date":"dest"})

if __name__ == '__main__':
    app.debug = True
    app.run()
