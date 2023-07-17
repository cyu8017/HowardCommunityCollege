def capitalize_sentence(sentence_input):
    words = sentence_input.split(" ")
    capitalized_words = [word.capitalize() for word in words]
    return " ".join(capitalized_words)


def main():
    sentence_input = input("Enter sentence to be capitalized: ")
    print(capitalize_sentence(sentence_input))


if __name__ == '__main__':
    main()
