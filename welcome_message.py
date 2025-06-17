# --- Python Script: Personalized Welcome Message ---

# 1. Request the user's name
# The `input()` function displays a message to the user and waits for them to type something.
# Whatever the user types is then stored in the 'user_name' variable.
user_name = input("Please enter your name: ")

# 2. Create the personalized welcome message
# We're combining (concatenating) different strings (text) together using the '+' operator.
# The 'user_name' variable's content (what the user typed) will be inserted into the message.
welcome_message = "Hello, " + user_name + "! Welcome to your AI Native Journey!"

# 3. Output the personalized message
# The `print()` function displays the content of the 'welcome_message' variable to the console.
print(welcome_message)

# --- End of Script ---