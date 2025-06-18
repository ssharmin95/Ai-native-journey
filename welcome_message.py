# -valley_scene.py
# --- Python Script: Enhanced Personalized Welcome Message with Mood and Goals ---

# 1. Request the user's name
user_name = input("Please enter your name: ")

# 2. Check if the entered name is "Sharmin"
if user_name.lower() == "sharmin":  # This checks if the text in 'user_name' is "Sharmin" (case-insensitive)
    # If the name IS "Sharmin", print the special message
    print("\nHey, it's the awesome AI Director, Sharmin!")
else:
    # If the name is NOT "Sharmin", print the regular greeting
    print(f"\nHello, {user_name}!")

# 3. Ask about the user's mood
print("\nHow are you feeling today?")
print("1. Great!")
print("2. Good")
print("3. Okay")
print("4. Not so good")
mood_choice = input("Enter your choice (1-4): ")

# 4. Ask about the user's goal
print("\nWhat's your main goal for today?")
print("1. Learn Python basics")
print("2. Practice coding")
print("3. Build a project")
print("4. Review concepts")
goal_choice = input("Enter your choice (1-4): ")

# 5. Process the mood and provide appropriate response
mood_messages = {
    "1": "That's fantastic! Let's make the most of your great energy!",
    "2": "Good to hear! Let's keep that positive momentum going!",
    "3": "That's okay! We'll take it step by step together.",
    "4": "I'm here to help! Let's make this a better day together."
}

# 6. Process the goal and provide appropriate guidance
goal_resources = {
    "1": "I recommend starting with Python fundamentals and basic syntax.",
    "2": "Great choice! Let's focus on hands-on coding exercises.",
    "3": "Perfect! We'll work on building something meaningful together.",
    "4": "Good idea! Let's reinforce your understanding of key concepts."
}

# 7. Display mood-based message
print(mood_messages.get(mood_choice, "Let's make today count!"))

# 8. Display goal-based guidance
print("\nBased on your goal:")
print(goal_resources.get(goal_choice, "Let's work on achieving your goals!"))

# 9. Final encouraging message
if user_name.lower() == "sharmin":
    print("\nWelcome to your AI Native Journey, Director! Let's make it amazing together!")
else:
    print("\nWelcome to your AI Native Journey! Let's make it amazing together!")

# --- End of Script ---