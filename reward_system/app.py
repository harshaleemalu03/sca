from flask import Flask, jsonify, request
from flask_cors import CORS
from database import init_db, get_db
from reward_logic import add_points, redeem_reward

app = Flask(__name__)
CORS(app)
init_db()

@app.route("/api/add_points", methods=["POST"])
def api_add_points():
    data = request.json
    add_points(
        user_id=data["user_id"],
        points=data["points"],
        reason=data.get("reason", "Energy Saving")
    )
    return jsonify({"status": "success"})

@app.route("/api/user/<user_id>", methods=["GET"])
def get_user(user_id):
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT * FROM users WHERE user_id=?", (user_id,))
    user = cur.fetchone()
    return jsonify(dict(user)) if user else jsonify({"points": 0})

@app.route("/api/rewards", methods=["GET"])
def get_rewards():
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT * FROM rewards")
    rewards = [dict(row) for row in cur.fetchall()]
    return jsonify(rewards)

@app.route("/api/redeem", methods=["POST"])
def api_redeem():
    data = request.json
    success, message = redeem_reward(data["user_id"], data["reward_id"])
    return jsonify({"success": success, "message": message})

@app.route("/api/leaderboard", methods=["GET"])
def leaderboard():
    db = get_db()
    cur = db.cursor()
    cur.execute("SELECT user_id, points FROM users ORDER BY points DESC LIMIT 10")
    return jsonify([dict(row) for row in cur.fetchall()])

if __name__ == "__main__":
    app.run(port=7000, debug=True)
