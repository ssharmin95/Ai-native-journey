# -valley_scene.py
# --- Python Script: Enhanced Personalized Welcome Message ---

# 1. Request the user's name
# The `input()` function displays a message and waits for user input.
user_name = input("Please enter your name: ")

# 2. Check if the entered name is "Sharmin"
# We use an if/else statement to make a decision based on the input.
if user_name.lower() == "sharmin":  # This checks if the text in 'user_name' is "Sharmin" (case-insensitive)
    # If the name IS "Sharmin", print the special message
    print("Hey, it's the awesome AI Director, Sharmin!")
else:
    # If the name is NOT "Sharmin", print the regular greeting
    welcome_message = f"Hello, {user_name}! Welcome to your AI Native Journey!"
    print(welcome_message)

# --- End of Script ---