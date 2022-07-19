def is_palindrome_recursive(word, low, high):
    if (not word):
        return False
    if (not (high - low)):
        return True
    if (word[low] != word[high]):
        return False

    return is_palindrome_recursive(word, low + 1, high - 1)
