def sumOfNaturalNumbers(n):
    if(n == 1):
        return 1
    return n+sumOfNaturalNumbers(n-1)

#Take input
n=int(input("Enter the natural number n: "))
if(n < 1):
    print("Invalid input")
else:
    print(f"Sum of first {n} natural numbers is {sumOfNaturalNumbers(n)}")