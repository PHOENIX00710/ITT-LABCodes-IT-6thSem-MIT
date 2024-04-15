import sqlite3

con=sqlite3.connect("mydb.db")
cursor=con.cursor()

cursor.execute("INSERT INTO patient VALUES (123,'Srijan','07-08-2021','09-10-2021',1000)")
cursor.execute("INSERT INTO medical VALUES (123,'Cough',2000,'Pain Relief')")
cursor.execute("INSERT INTO patient VALUES (122,'Ausaf','07-09-2021','09-11-2021',1200)")
cursor.execute("INSERT INTO medical VALUES (122,'Cold',3500,'Pain Relief')")
cursor.execute("INSERT INTO patient VALUES (111,'Rishabh','04-08-2021','09-18-2021',500)")
cursor.execute("INSERT INTO medical VALUES (111,'Cough',2000,'Sleep')")
cursor.execute("INSERT INTO patient VALUES (100,'Rishav','07-08-2020','09-10-2020',1500)")
cursor.execute("INSERT INTO medical VALUES (100,'Injury',2500,'Pain Relief')")
cursor.execute("INSERT INTO patient VALUES (99,'Hrishi','07-10-2021','09-10-2022',1000)")
cursor.execute("INSERT INTO medical VALUES (99,'Headache',2000,'Sleep')")

con.commit()
con.close()