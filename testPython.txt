def count_words(string):
    # Split the string into words
    words = string.split()

    # Count the number of words
    num_words = len(words)

    # Initialize a dictionary to store word frequencies
    word_freq = {}

    # Initialize a dictionary to store word length distribution
    word_length_distribution = {}

    # Iterate through each word
    for word in words:
        # Update word frequency
        if word in word_freq:
            word_freq[word] += 1
        else:
            word_freq[word] = 1

        # Update word length distribution
        word_length = len(word)
        if word_length in word_length_distribution:
            word_length_distribution[word_length] += 1
        else:
            word_length_distribution[word_length] = 1

    # Print the results
    print("Number of words:", num_words)
    print("Word length distribution:")
    for length, frequency in sorted(word_length_distribution.items()):
        print(f"Length {length}: {frequency} words")
    print("Word frequency:")
    for word, frequency in word_freq.items():
        print(f"'{word}': {frequency}")

# Test the function
input_string = input("Enter a string: ")
count_words(input_string)
