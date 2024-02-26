def caesarCipher(s, shift=3):
    ans = []
    for char in s:
        if char.isalpha():
            # Determine the Unicode code point of 'a' or 'A' based on the case
            base = ord('a') if char.islower() else ord('A')
            # Shift the character and wrap around the alphabet, preserving case
            temp = (ord(char) - base + shift) % 26 + base
            ans.append(chr(temp))
        else:
            # Non-alphabetic characters are appended without change
            ans.append(char)
    return ''.join(ans)

# Testing the function
message = input("Enter a message: ")
shift = int(input("Enter the number: "))

print(f"The message after Caesar ciphering is: {caesarCipher(message, shift)}")
