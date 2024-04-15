import sqlite3
import re

con=sqlite3.connect("mydb.db")
cursor=con.cursor()

expression=r".2."

patients=cursor.execute("SELECT * FROM patient")
for patient in patients:
    if re.search(expression,str(patient[0])):
        print(f"Patient {patient[0]} matches regex expression")
    else:
        con.execute("DELETE FROM patient where patient_id=?",(patient[0],))
        print(f"Patient {patient[0]} deleted")

con.commit()
con.close()