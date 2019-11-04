kpos = 0
upos = 8
f_lt_dir = 0

lstkmoves = []
lstumoves = []

def user_pos(umoves):
    global upos
    for move in umoves:
        if move == 0: continue
        if move == 1: f_lt_dir = 1
        if move == -1 : f_lt_dir = -1
        if move == 2: upos += 1
        if upos == 16: upos = 0
        if move == -2 : upos -= 1
        if upos == -1: upos = 15

    lstumoves.extend(umoves)
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

def chase():
    global upos, kpos

    if abs(uk_dist()) <= 3:
        kpos = upos
    elif uk_dist() < -3:
        kpos -= 3
        if kpos < 0: kpos += 16
    else:
        kpos += 3
        if kpos > 15: kpos -= 16
    print("User pos : " + str(upos) + "   - Knife pos : " + str(kpos))
    return

    
        
def input_user():
    while kpos != upos:
        arr_umoves = []
        for i in range(3):
            arr_umoves.append(int(input("Enter USER move #" + str(i))))
        user_pos(arr_umoves)
        chase()

input_user()
