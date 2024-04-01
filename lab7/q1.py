import sqlite3

conn=sqlite3.connect("database.db") #Connect to database

conn.execute("DROP TABLE student;")
conn.execute('''CREATE TABLE student(
        student_ID INTEGER PRIMARY KEY NOT NULL,
        reg_no INTEGER,
        branch VARCHAR(20),
        semester INTEGER,
        section VARCHAR(2),
        cgpa INTEGER,
        email VARCHAR(50) 
    );''')

print("Table Created Successfully")

conn.execute("INSERT INTO student values(1,210911,'IT',6,'A',5,'swapnil@gmail.com')")
print("Inserted")
conn.execute("INSERT INTO student values(2,210921,'IT',5,'A',2,'swapnil12@gmail.com')")
print("Inserted")
conn.execute("INSERT INTO student values(4,210922,'CCE',6,'B',5,'srijan@gmail.com')")
print("Inserted")
conn.execute("INSERT INTO student values(5,210321,'IT',6,'A',4,'hello@gmail.com')")
print("Inserted")
conn.execute("INSERT INTO student values(7,210844,'CSE',6,'A',4,'hii@gmail.com')")
print("Inserted")

#q1

cursor= conn.execute("SELECT * FROM student order by cgpa desc;")
for cur in cursor:
    print(cur)

#q2

student_ID=int(input('Enter the student ID: '))
reg_no=int(input('Enter the reg_no: '))
branch=input('Enter the branch: ')
semester=int(input('Enter the semester: '))
section=input('Enter the section: ')
cgpa=int(input('Enter the cgpa: '))
email=input('Enter the email: ')

query="SELECT * FROM student where student_ID=?;"
params= (student_ID,)
result = conn.execute(query,params).fetchone()
if(result == None):
    query="INSERT INTO student VALUES (?,?,?,?,?,?,?)"
    params=(student_ID,reg_no,branch,semester,section,cgpa,email)
    conn.execute(query,params)
print("New Student inserted")

#q3

r1=int(input('Enter the reg no: '))
query="SELECT * FROM student WHERE reg_no=?;"
params=(r1,)
result=conn.execute(query,params).fetchone()
print(result)

#q4
s1=int(input('Enter the student ID for detail to be updated: '))
cgpa=int(input('Enter the new cgpa: '))
query="UPDATE student SET cgpa=? WHERE student_ID=?"
params(cgpa,s1)
conn.execute(query,params)
print("CGPA Updated")

conn.close()

'''
10
210911292
CSE
7
A
5
swapnil123@gmail.com

'''