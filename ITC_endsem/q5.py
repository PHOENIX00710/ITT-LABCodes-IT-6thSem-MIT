import sqlite3

con=sqlite3.connect("mydb.db")
cursor=con.cursor()

patients=cursor.execute("SELECT patient_id,patient_name,rent,amount from patient natural join medical").fetchall()

for patient in patients:
    print(f"ID: {patient[0]}, Name: {patient[1]}, Total_Amount: {patient[2]+patient[3]}")
