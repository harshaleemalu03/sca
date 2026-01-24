from database import get_db, init_db

init_db()
db = get_db()
cur = db.cursor()

rewards = [
    ("Canteen Coupon ₹50", 100, "Campus Canteen"),
    ("Canteen Coupon ₹100", 180, "Campus Canteen"),
    ("Zomato Discount ₹75", 150, "Zomato"),
    ("Swiggy Discount ₹75", 150, "Swiggy"),
    ("Amazon Voucher ₹100", 250, "Amazon")
]

cur.executemany(
    "INSERT INTO rewards (name, cost, partner) VALUES (?,?,?)",
    rewards
)

db.commit()
print("Rewards seeded successfully")
