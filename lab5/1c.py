import numpy as np

# Deal with second matrix
print("Enter values for matrix 1")
row1=int(input('Np. of rows: '))
col1=int(input('Np. of columns: '))
arr=np.zeros((row1,col1),dtype=int)
for i in range(row1):   
    for j in range(col1):
        arr[i][j]=int(input(f"Enter the element at {i}th row and {j}th column: "))

# Deal with second matrix
print("Enter values for matrix 2")
row2=int(input('Np. of rows: '))
col2=int(input('Np. of columns: '))
arr2=np.ones((row2,col2),dtype=int)
for i in range(row2):   
    for j in range(col2):
        arr2[i][j]=int(input(f"Enter the element at {i}th row and {j}th column: "))
        
print(arr2,arr)

'''''
    Using Numpy:-
    
    print(arr@arr2) # Matrix multiplication
    print(arr+arr2) # Matrix multiplication
    
'''''
