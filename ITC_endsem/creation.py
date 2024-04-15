import sqlite3

con=sqlite3.connect("mydb.db")

cursor=con.cursor()

table="""CREATE TABLE IF NOT EXISTS patient(
        patient_id INTEGER PRIMARY KEY,
        patient_name VARCHAR(20) NOT NULL,
        DOA DATE,
        DOD DATE,
        rent INTEGER
        );
        """
        
try:
    cursor.execute(table)
    print("Patient table created successfully")
except Exception as e:
    print("Error in patient table creation ",e)

table2="""CREATE TABLE IF NOT EXISTS medical(
        patient_id INTEGER PRIMARY KEY,
        medicine_details VARCHAR(20) NOT NULL,
        amount INTEGER,
        particulars VARCHAR(20)
        );
        """
        
try:
    cursor.execute(table2)
    print("Medical table created successfully")
except Exception as e:
    print("Error in medical table creation ",e)

con.commit()