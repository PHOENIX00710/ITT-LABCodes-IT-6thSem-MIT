def caesarCipher(str, shift=3):
    templist=list(str)
    print(templist)
    ans=""
    for i in range(0,len(templist)):
        print(templist[i])
        temp=templist[i]-'a'
    return "Hello"

#Testing the function

message=input("Enter a message: ")
shift = int(input("Enter the number: "))

print(f"The message after caesar ciphering is {caesarCipher(message,shift)}")