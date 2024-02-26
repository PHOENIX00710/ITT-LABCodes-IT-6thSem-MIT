list1=list(input("Input the desired list: "))
print(list1)
new_list=[char for char in list1 if char != ' ']
print(new_list)
reversed_list=new_list[::-1] # Reverse list using step operator
print(f"Normal list: {reversed_list}")
print(f"Reversed list: {new_list}")
if(new_list == reversed_list):
    print("List is a palindrome")
else:
    print("The list is not a plaindrome")