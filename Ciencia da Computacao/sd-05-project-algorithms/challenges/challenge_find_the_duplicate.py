from challenges.challenge_anagrams import merge_sort


def find_duplicate(nums):
    if not nums:
        return False
    ordenado = merge_sort(nums)
    for i in range(len(ordenado)-1):
        if (ordenado[i] == ordenado[i+1]):
            return ordenado[i]
