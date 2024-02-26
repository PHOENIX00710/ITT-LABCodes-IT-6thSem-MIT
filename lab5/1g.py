def decimalToOthers(n,k):
    templist=[]
    while(n != 0):
        rem=n%k
        templist.append(str(rem))        # Conversion to string to join later
        n=int(n/k)                       # Explicitily cast as integer else it will consider as float/double
    # Joining into one string, works oppo to JS the parameter is the iterable ans it is called against the seperator
    res=''.join(templist[::-1])
    return(int(res))


number=int(input("Enter the value of n: "))

# Decimal to Binary
print(f"Decimal to Binary for {number} is {decimalToOthers(number,2)}")

# Decimal to Hexadecimal
print(f"Decimal to Binary for {number} is {decimalToOthers(number,16)}")

# Decimal to Octal
print(f"Decimal to Binary for {number} is {decimalToOthers(number,8)}")