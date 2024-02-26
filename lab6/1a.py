message=input("Enter the message: ")

new_message=''.join(list(message)[::-1])

if(message == new_message):
    print("It is a plaindrome")
else:
    print("It is not a palindrome")