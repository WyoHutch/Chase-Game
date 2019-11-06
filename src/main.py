from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from flask_marshmallow import Marshmallow
from flask_heroku import Heroku
from datetime import datetime
import os
import random

app = Flask(__name__)
heroku = Heroku(app)

app.config['SQLALCHEMY_DATABASE_URI'] = "postgres://jbiuygvlnppoef:9342200691234fc39c18a70df098f414464a06382d8f1b4aff8b0d4213401c0c@ec2-54-243-239-199.compute-1.amazonaws.com:5432/ddt41r26n3800v"

db = SQLAlchemy(app)
ma = Marshmallow(app)

CORS(app)

initPlayers = [
    { "name": "Adam", "datetime": datetime.now(), "gameid": 1, "score": 20 },
    { "name": "Bart", "datetime": datetime.now(), "gameid": 2, "score": 30 },
    { "name": "Carl", "datetime": datetime.now(), "gameid": 3, "score": 40 },
    { "name": "Adam", "datetime": datetime.now(), "gameid": 4, "score": 50 },
    { "name": "Adam", "datetime": datetime.now(), "gameid": 5, "score": 25 },
    { "name": "Bart", "datetime": datetime.now(), "gameid": 6, "score": 36 },
    { "name": "Carl", "datetime": datetime.now(), "gameid": 7, "score": 47 },
    { "name": "Adam", "datetime": datetime.now(), "gameid": 8, "score": 52 }
]

initMoves = [
    { "gameid": 1, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 1, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 2, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 2, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 3, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 4, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 4, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 5, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 5, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 6, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 6, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 7, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 8, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 8, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 8, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 },
    { "gameid": 8, "umove1": 0, "umove2": -1, "umove3": 1, "kmove1": 2, "kmove2": 2, "kmove3": 2 }
]

class Player(db.Model):
    __tablename__ = "players"
    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(20), unique = False)
    datetime = db.Column(db.DateTime, unique = False)
    gameid = db.Column(db.Integer, unique = True)
    score = db.Column(db.Integer, unique = False)

    def __init__(self, name, datetime, gameid, score):
        self.name = name
        self.datetime = datetime
        self.gameid = gameid
        self.score = score

class PlayerSchema(ma.Schema):
    class Meta:
        fields = ("id", "name", "datetime", "gameid" "score")

single_pschema = PlayerSchema()
plural_pschema = PlayerSchema(many = True)

class Moves(db.Model):
    __tablename__ = "moves"
    id = db.Column(db.Integer, primary_key = True)
    gameid = db.Column(db.Integer, unique = False)
    umove1 = db.Column(db.Integer, unique = False)
    umove2 = db.Column(db.Integer, unique = False)
    umove3 = db.Column(db.Integer, unique = False)
    kmove1 = db.Column(db.Integer, unique = False)
    kmove2 = db.Column(db.Integer, unique = False)
    kmove3 = db.Column(db.Integer, unique = False)

    def __init__(self, gameid, umove1, umove2, umove3, kmove1, kmove2, kmove3):
        self.gameid = gameid
        self.umove1 = umove1
        self.umove2 = umove2
        self.umove3 = umove3
        self.kmove1 = kmove1
        self.kmove2 = kmove2
        self.kmove3 = kmove3

class MoveSchema(ma.Schema):
    class Meta:
        fields = ("id", "gameid", "umove1", "umove2", "umove3", "kmove1", "kmove2", "kmove3",  )

single_mschema = MoveSchema()
plural_mschema = MoveSchema(many = True)

@app.route('/player', methods=['POST'])
def post_Player():
    gameid = get_Players() + 1
    name = request.json["name"]
    datetime = now()
    score = request.json["score"]
    new_player = Player(name, datetime, gameid, score)

    db.session.add(new_player)
    db.session.commit()
    return gameid

def get_Players():
    all_players = Player.query.all()
    new_gameid = 0
    for players in all_players:
        if players.gameid > new_gameid: new_gameid = players.gameid
    return new_gameid

gameid = 0
def post_Moves(umoves, arr_kmoves):
    global gameid
    umove1 = umoves[0]
    umove2 = umoves[1]
    umove3 = umoves[2]
    kmove1 = arr_kmoves[0]
    kmove2 = arr_kmoves[1]
    kmove3 = arr_kmoves[2]
    new_moves = Moves(gameid, umove1, umove2, umove3, kmove1, kmove2, kmove3)

    db.session.add(new_moves)
    db.session.commit()
    retstr = single_mschema.jsonify(Moves.query.get(new_moves.id))
    return retstr.json["id"]


# @app.route('/getMoves/<id>', methods=['GET'])
# def return_moves(id):
#     student = Student.query.get(id)
#     return jsonify(single_jschema.dump(student))

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
    return arr_temp
        
def chase():
    global upos, kpos
    global f_lt_dir
    global u_stay, u_run

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

    user_pos(arr_umoves)
    arr_kmoves = chase()
    knife_position = pos_knife(arr_kmoves)
    movesid = post_Moves(arr_umoves, arr_kmoves)
    return str(knife_position)


if __name__ == '__main__':
    app.run(debug = True)
