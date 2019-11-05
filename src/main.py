from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_heroku import Heroku
import os
import random

app = Flask(__name__)
heroku = Heroku(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://jbiuygvlnppoef:9342200691234fc39c18a70df098f414464a06382d8f1b4aff8b0d4213401c0c@ec2-54-243-239-199.compute-1.amazonaws.com:5432/ddt41r26n3800v"

db = SQLAlchemy(app)
ma = Marshmallow(app)

CORS(app)

class Player(db.Model):
    __tablename__ = "players"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(20), unique = False)
    datetime = db.Column(db.DateTime, unique = False)
    score = db.Column(db.Integer, unique = False)

    def __init__(self, name, datetime, score):
        self.name = name
        self.datetime = datetime
        self.score = score

class PlayerSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "datetime", "score")

single_jschema = PlayerSchema()
plural_jschema = PlayerSchema(many = True)

@app.route('/players', methods=['GET'])
def get_Players():
    all_players = Player.query.all()
    return jsonify(plural_jschema.dump(all_players))

@app.route('/getMoves/<id>', methods=['GET'])
def return_moves(id):
    student = Student.query.get(id)
    return jsonify(single_jschema.dump(student))

kpos = 0
upos = 8
f_lt_dir = 0
u_stay = 0
u_run = 0
u_look = 0

def user_pos(umoves):
    global f_lt_dir
    global u_run, u_stay
    u_stay += 1
    for move in umoves:
        if move == 0: continue
        if move >= 1: f_lt_dir = 1
        if move <= -1 : f_lt_dir = -1
        if move == -2 or move == 2: u_stay = 0
    if umoves == [0, 0, 0]:
        u_look = True
    else:
        u_look = False
    if umoves == [2, 2, 2] or umoves == [-2, -2, -2]:
        u_run += 1
    else:
        u_run = 0
    return

def uk_dist():
    global upos, kpos
    if upos - kpos > 8: return upos - kpos - 16
    if upos - kpos < -8: return upos - kpos + 16
    return upos - kpos
    
def u_corner():
    global upos
    if upos % 4 == 0: return True
    return False

def chase_direct():
    global kpos
    if uk_dist() <= -3: arr_temp = [-2, -2, -2]
    else: arr_temp = [2, 2, 2]
    print("Direct chase array : ", arr_temp)
    return arr_temp
        
def chase():
    global upos, kpos
    global f_lt_dir
    global u_stay, u_run
    print("Chase distance :", uk_dist())

    if f_lt_dir == 0:
        if random.random() < 0.5: arr_temp = [-2, -2, -2]
        else: arr_temp = [2, 2, 2]
        return arr_temp

    if abs(uk_dist()) <= 3:
        arr_temp = [0, 0, 0]
        for i in range(abs(uk_dist())):
            if uk_dist() > 0:
                arr_temp[i] = 2
            elif uk_dist() < 0:
                arr_temp[i] = -2
            else:
                continue
        return arr_temp

    if abs(uk_dist()) == 4:
        if uk_dist() * f_lt_dir < 0 or u_run < 4 or (u_run >= 4 and (kpos % 4 == 1 or kpos % 4 == 2)):
            arr_temp = chase_direct()
        else:
            arr_temp = (3 * [f_lt_dir * -2])
        return arr_temp

    if abs(uk_dist()) == 5:
        if u_corner():
            if uk_dist() * f_lt_dir > 0 or u_stay > 2 + random.randint(0, 2):
                arr_temp = chase_direct()
            else:
                if u_stay > 2 + random.randint(0, 2) or u_look:
                    arr_temp = (3 * [f_lt_dir * 2])
                else:
                    arr_temp = [0, 0, 0]
        else:
            arr_temp = [0, 0, 0]
            if uk_dist() > 0:
                for i in range(4 - upos % 4):
                    arr_temp[i] = 2
            else:
                for i in range(upos % 4):
                    arr_temp[i] = -2
        return arr_temp

    if abs(uk_dist()) == 6:
        if u_run > 2 + random.randint(0, 3):
            arr_temp = (3 * [f_lt_dir * -2])
        else:
            if uk_dist() * f_lt_dir > 0:
                if u_corner(): arr_temp = [2 * f_lt_dir, 0, 0]
                elif upos % 4 == 3: arr_temp = (2 * [2 * f_lt_dir], 0)
                else:
                    arr_temp = chase_direct()
            else:
                arr_temp = chase_direct()
        return arr_temp

    if abs(uk_dist()) == 7:
        if u_run > 1 + random.randint(0, 3):
            arr_temp = (3 * [f_lt_dir * -2])
        else:            
            if u_corner() and uk_dist() * f_lt_dir < 0:
                arr_temp = (2 * [f_lt_dir * 2])
                arr_temp.append(0)
            else:
                arr_temp = chase_direct()
        return arr_temp

    if abs(uk_dist()) == 8:
        if u_stay < 2 + random.randint(0, 3):
            arr_temp = (3 * [f_lt_dir * -2])
        else:
            arr_temp = (3 * [f_lt_dir * 2])
        return arr_temp

def pos_knife(arr_kmoves):
    global kpos
    for move in arr_kmoves:
        if move == -2: kpos -= 1
        if move == 2: kpos += 1
    if kpos < 0: kpos += 16
    if kpos > 15: kpos -= 16
    return kpos

@app.route('/moves', methods=['POST'])
def user_moves():
    global kpos, upos
    arr_umoves = request.json["umoves"]
    upos = request.json["uposition"]
    kpos = request.json["kposition"]
    print("Front-end - User moves:", arr_umoves, "pos:", upos, "Knife:", kpos)

    user_pos(arr_umoves)
    arr_kmoves = chase()
    knife_position = pos_knife(arr_kmoves)
    print("Knife moves array : ", arr_kmoves, "  Knife position -> ", knife_position)
    return str(knife_position)

if __name__ == '__main__':
    app.run(debug = True)
