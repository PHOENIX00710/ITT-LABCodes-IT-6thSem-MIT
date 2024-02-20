list1=list(input("Input the desired list: "))
print(list1)
new_list=[char for char in list1 if char != ' ']
print(new_list)
new_list.reverse()
reversed_list=new_list
# The reverse list doesn't seem to work i think it is probably because of the variables pointing at the same memory location
print(f"Reversed list: {reversed_list}")
new_list.reverse()
print(f"Reversed list: {reversed_list}")