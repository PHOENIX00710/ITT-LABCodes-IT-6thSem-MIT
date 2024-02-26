message=input("Enter the message: ")
punctuation_marks=".!?;:"
newString=""
for j in punctuation_marks:
    message=message.replace(j,"")
print("Message after removing punctuations: ",message)
