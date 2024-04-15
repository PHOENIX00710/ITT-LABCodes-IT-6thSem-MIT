import sqlite3

con=sqlite3.connect("mydb.db")
cursor=con.cursor()

patients=cursor.execute("SELECT * FROM medical as m natural join patient as p where m.particulars='Pain Relief' ").fetchall()

print("All patient details with particulars as Pain Relief are as follows:")
for patient in patients:
    print(patient)
    
con.close()