rows = int(input('Np. of rows: '))
cols = int(input('Np. of columns: '))
rows2 = int(input('Np. of rows: '))
cols2 = int(input('Np. of columns: '))

# Function to add two matrices
def matrix_addition(matrix1, matrix2):
    result = []
    for i in range(len(matrix1)):
        row = []
        for j in range(len(matrix1[0])):
            row.append(matrix1[i][j] + matrix2[i][j])
        result.append(row)
    return result

# Function to multiply two matrices
def matrix_multiplication(matrix1, matrix2):
    result = []
    for i in range(len(matrix1)):
        row = []
        for j in range(len(matrix2[0])):
            sum = 0
            for k in range(len(matrix2)):
                sum += matrix1[i][k] * matrix2[k][j]
            row.append(sum)
        result.append(row)
    return result


# Declare an empty array
array = [[None]*cols2 for _ in range(rows2)]
print("Enter the elements row by row")
for i in range(rows2):
    for j in range(cols2):
        array[i][j] = int(
            input(f"Enter the element at {i}th row and {j}th column: "))
print(array)

# Declare an empty array
array2 = [[None]*cols2 for _ in range(rows2)]
print("Enter the elements row by row")
for i in range(rows2):
    for j in range(cols2):
        array2[i][j] = int(
            input(f"Enter the element at {i}th row and {j}th column: "))
print(array2)

# Perform matrix multiplication
if cols == rows2:
    result_multiplication = matrix_multiplication(array, array2)
    print("Result of matrix multiplication:")
    for row in result_multiplication:
        print(row)
else:
    print("Matrix multiplication is not possible as dimensions are incompatible.")

    # Perform matrix addition
if rows == rows2 and cols == cols2:
    result_addition = matrix_addition(array, array2)
    print("Result of matrix addition:")
    for row in result_addition:
        print(row)
else:
    print("Matrix addition is not possible as dimensions are different.")
