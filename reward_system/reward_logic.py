from database import get_db
from models import get_or_create_user, update_points, log_transaction

def add_points(user_id, points, reason):
    get_or_create_user(user_id)
    update_points(user_id, points)
    log_transaction(user_id, points, reason)

def redeem_reward(user_id, reward_id):
    db = get_db()
    cur = db.cursor()

    cur.execute("SELECT cost FROM rewards WHERE reward_id=?", (reward_id,))
    reward = cur.fetchone()
    if not reward:
        return False, "Reward not found"

    cost = reward["cost"]

    cur.execute("SELECT points FROM users WHERE user_id=?", (user_id,))
    user = cur.fetchone()
    if not user or user["points"] < cost:
        return False, "Insufficient points"

    update_points(user_id, -cost)
    log_transaction(user_id, -cost, "Reward Redemption")

    return True, "Reward redeemed successfully"
