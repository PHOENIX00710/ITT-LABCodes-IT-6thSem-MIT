rows=int(input('Np. of rows: '))
cols=int(input('Np. of columns: '))
# Declare an empty array
array=[[None]*cols for _ in range(rows)]
print("Enter the elements row by row")
for i in range(rows):   
    for j in range(cols):
        array[i][j]=int(input(f"Enter the element at {i}th row and {j}th column: "))
print(array)
for i in range(rows):
    # We only need to consider upper or lower triangular as else swap at (i,j) will be reversed by swap at (j,i) hence (i+1) to cols
    for j in range(i+1,cols):
            array[i][j],array[j][i]=array[j][i],array[i][j]
print(array)            
