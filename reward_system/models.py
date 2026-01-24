from database import get_db

def get_or_create_user(user_id):
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT * FROM users WHERE user_id=?", (user_id,))
    user = cur.fetchone()

    if not user:
        cur.execute("INSERT INTO users (user_id, points) VALUES (?,?)", (user_id, 0))
        db.commit()

def update_points(user_id, points):
    db = get_db()
    cur = db.cursor()
    cur.execute("UPDATE users SET points = points + ? WHERE user_id=?", (points, user_id))
    db.commit()

def log_transaction(user_id, points, reason):
    db = get_db()
    cur = db.cursor()
    cur.execute(
        "INSERT INTO transactions (user_id, points, reason) VALUES (?,?,?)",
        (user_id, points, reason)
    )
    db.commit()
