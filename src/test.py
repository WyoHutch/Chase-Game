from datetime import datetime

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

# class PlayerSchema(ma.Schema):
#     class Meta:
#         fields = ("id", "name", "datetime", "gameid" "score")

# single_pschema = PlayerSchema()


def new_Player():
    for player in initPlayers:
        name = player["name"]
        datetime = player["datetime"]
        gameid = player["gameid"]
        score = player["score"]
        print(name, datetime, gameid, score)
        # new_player = Player(name, datetime, gameid, score)

new_Player()