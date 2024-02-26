import re

string = input('Input the string to be checked and replaced: ')
# A regex to check for a string starting with a capital alphabet followed by either t or T and then an h
expression = r"[A-Z](t|T)h*"
matches = re.finditer(expression, string, flags=re.MULTILINE)

for match in matches:
    string=string.replace(match.group(),"The")
print(string)

# Input: Ath all hii athe Zthe
# Output: The all hii athe Thee