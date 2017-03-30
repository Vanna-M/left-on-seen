from flask import Flask, render_template
import csv

app = Flask(__name__)

@app.route('/')
def root():
    #rotPds = list of rotational periods for all of the planets
    #rockets: dict of all rocket launches, saved as: {date:destination}
    rotPds = get_rotPds()
    rockets = get_rockets()
    return render_template("index.html",rotPds=rotPds,rockets={"date":"dest"})


def get_rotPds():
    f = open('data/planets.csv','r')
    read = csv.reader(f)
    pds = []
    for row in read:
        if row[0] == 'Rotation Period (hours)':
            pds = row
    f.close()
    return pds


def get_rockets():
    f = open('data/rockets.csv','r')
    read = csv.reader(f)
    rockets = {}
    for row in read:
        rockets[row[1]] = row[2]
    return rockets

if __name__ == '__main__':
    app.debug = True
    app.run()
