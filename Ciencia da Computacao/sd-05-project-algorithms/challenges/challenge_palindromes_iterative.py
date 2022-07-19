def is_palindrome_iterative(word):
    if not word:
        return False

    invertido = word[len(word)::-1]

    if (invertido == word):
        return True
    return False

# https://stackoverflow.com/questions/509211/understanding-slice-notation
