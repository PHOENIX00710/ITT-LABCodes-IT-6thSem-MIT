words=input('Enter the sentence: ')
words=words.split(' ')
dict={}
for i in words:
    if(dict.get(i)): #To check if i have the key already existing would work without it
        continue
    else:
        dict[i]=words.count(i)  

for key in dict.keys():
    print(f"Occurence of {key} is {dict[key]}")