import sqlite3
con=sqlite3.connect("db.sqlite3")

cur=con.cursor()

cur.execute("DROP TABLE patient")
cur.execute("DROP TABLE medical")

con.commit()
con.close()