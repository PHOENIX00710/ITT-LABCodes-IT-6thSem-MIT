def fibonacciSequence(n,list):
    if(n == 0):
        return 0
    if(n == 1):
        return 1
    nthNumber=fibonacciSequence(n-1,list)+(fibonacciSequence(n-2,list))
    list.append(nthNumber)
    return nthNumber

n=int(input("Enter the value of n: "))
print("Fibonacci sequence up to",n,"numbers is :")
numList=[]
finalAns=fibonacciSequence(n,numList)
print(finalAns,set(numList))
