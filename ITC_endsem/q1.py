import sqlite3

con=sqlite3.connect("mydb.db")

cursor=con.cursor()

patients=cursor.execute("SELECT * FROM patient").fetchall()
medicals=cursor.execute("SELECT * FROM medical").fetchall()

print("Patient content:")
for patient in patients:
    print(patient)
    
print("Medical content:")
for medical in medicals:
    print(medical)
    
con.close()