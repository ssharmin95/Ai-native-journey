#!/usr/bin/env python3
"""
Fruits Quiz Application
A quiz game that tests knowledge about fruits using the fruits data structure.
"""

import random
import json
from typing import List, Dict, Any

# The fruits data
fruits_data = [
    {
        "name": "apple",
        "color": "red",
        "taste": "sweet",
        "weight_grams": 150
    },
    {
        "name": "banana",
        "color": "yellow",
        "taste": "creamy",
        "weight_grams": 120
    },
    {
        "name": "orange",
        "color": "orange",
        "taste": "citrus",
        "weight_grams": 200
    }
]

# Quiz questions data structure
quiz_questions = [
    {
        "question": "What color is an apple?",
        "options": ["red", "yellow", "orange", "green"],
        "correct_answer": "red",
        "category": "color",
        "fruit": "apple"
    },
    {
        "question": "What color is a banana?",
        "options": ["red", "yellow", "orange", "green"],
        "correct_answer": "yellow",
        "category": "color",
        "fruit": "banana"
    },
    {
        "question": "What color is an orange?",
        "options": ["red", "yellow", "orange", "green"],
        "correct_answer": "orange",
        "category": "color",
        "fruit": "orange"
    },
    {
        "question": "What is the taste of an apple?",
        "options": ["sweet", "creamy", "citrus", "sour"],
        "correct_answer": "sweet",
        "category": "taste",
        "fruit": "apple"
    },
    {
        "question": "What is the taste of a banana?",
        "options": ["sweet", "creamy", "citrus", "sour"],
        "correct_answer": "creamy",
        "category": "taste",
        "fruit": "banana"
    },
    {
        "question": "What is the taste of an orange?",
        "options": ["sweet", "creamy", "citrus", "sour"],
        "correct_answer": "citrus",
        "category": "taste",
        "fruit": "orange"
    },
    {
        "question": "How much does an apple weigh?",
        "options": ["120g", "150g", "200g", "180g"],
        "correct_answer": "150g",
        "category": "weight",
        "fruit": "apple"
    },
    {
        "question": "How much does a banana weigh?",
        "options": ["120g", "150g", "200g", "180g"],
        "correct_answer": "120g",
        "category": "weight",
        "fruit": "banana"
    },
    {
        "question": "How much does an orange weigh?",
        "options": ["120g", "150g", "200g", "180g"],
        "correct_answer": "200g",
        "category": "weight",
        "fruit": "orange"
    },
    {
        "question": "Which fruit is the heaviest?",
        "options": ["apple", "banana", "orange", "grape"],
        "correct_answer": "orange",
        "category": "comparison",
        "fruit": "multiple"
    },
    {
        "question": "Which fruit is the lightest?",
        "options": ["apple", "banana", "orange", "grape"],
        "correct_answer": "banana",
        "category": "comparison",
        "fruit": "multiple"
    },
    {
        "question": "Which fruit has a citrus taste?",
        "options": ["apple", "banana", "orange", "grape"],
        "correct_answer": "orange",
        "category": "taste",
        "fruit": "orange"
    }
]

def generate_questions_from_data(fruits: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    """Generate additional quiz questions from the fruits data."""
    questions = []
    
    # Generate color questions
    for fruit in fruits:
        question = {
            "question": f"What color is a {fruit['name']}?",
            "options": [fruit['color'], "yellow", "orange", "green"],
            "correct_answer": fruit['color'],
            "category": "color",
            "fruit": fruit['name']
        }
        # Shuffle options
        random.shuffle(question["options"])
        questions.append(question)
    
    # Generate taste questions
    for fruit in fruits:
        question = {
            "question": f"What is the taste of a {fruit['name']}?",
            "options": [fruit['taste'], "sweet", "creamy", "sour"],
            "correct_answer": fruit['taste'],
            "category": "taste",
            "fruit": fruit['name']
        }
        # Shuffle options
        random.shuffle(question["options"])
        questions.append(question)
    
    # Generate weight questions
    for fruit in fruits:
        question = {
            "question": f"How much does a {fruit['name']} weigh?",
            "options": [f"{fruit['weight_grams']}g", "120g", "150g", "200g"],
            "correct_answer": f"{fruit['weight_grams']}g",
            "category": "weight",
            "fruit": fruit['name']
        }
        # Shuffle options
        random.shuffle(question["options"])
        questions.append(question)
    
    return questions

def ask_question(question: Dict[str, Any]) -> bool:
    """Ask a single question and return True if correct, False otherwise."""
    print(f"\n❓ {question['question']}")
    print("-" * 40)
    
    # Display options
    for i, option in enumerate(question['options'], 1):
        print(f"{i}. {option}")
    
    # Get user answer
    while True:
        try:
            user_choice = input("\nEnter your answer (1-4): ").strip()
            choice_num = int(user_choice)
            
            if 1 <= choice_num <= 4:
                user_answer = question['options'][choice_num - 1]
                is_correct = user_answer == question['correct_answer']
                
                if is_correct:
                    print("✅ Correct! Well done!")
                else:
                    print(f"❌ Wrong! The correct answer is: {question['correct_answer']}")
                
                return is_correct
            else:
                print("❌ Please enter a number between 1 and 4.")
        except ValueError:
            print("❌ Please enter a valid number.")

def run_quiz(questions: List[Dict[str, Any]], num_questions: int = 5) -> Dict[str, Any]:
    """Run the quiz and return results."""
    print("🍎🍌🍊 FRUITS QUIZ 🍊🍌🍎")
    print("=" * 50)
    print(f"Welcome to the Fruits Quiz!")
    print(f"You will be asked {num_questions} questions.")
    print("Let's test your knowledge about fruits!")
    
    # Randomly select questions
    selected_questions = random.sample(questions, min(num_questions, len(questions)))
    
    correct_answers = 0
    total_questions = len(selected_questions)
    
    for i, question in enumerate(selected_questions, 1):
        print(f"\n--- Question {i} of {total_questions} ---")
        if ask_question(question):
            correct_answers += 1
    
    # Calculate score
    score_percentage = (correct_answers / total_questions) * 100
    
    # Display results
    print("\n" + "=" * 50)
    print("📊 QUIZ RESULTS 📊")
    print("=" * 50)
    print(f"Total Questions: {total_questions}")
    print(f"Correct Answers: {correct_answers}")
    print(f"Score: {score_percentage:.1f}%")
    
    # Give feedback based on score
    if score_percentage >= 90:
        print("🏆 Excellent! You're a fruit expert!")
    elif score_percentage >= 70:
        print("👍 Good job! You know your fruits well!")
    elif score_percentage >= 50:
        print("😊 Not bad! Keep learning about fruits!")
    else:
        print("📚 Keep studying! You'll get better!")
    
    return {
        "total_questions": total_questions,
        "correct_answers": correct_answers,
        "score_percentage": score_percentage
    }

def show_question_categories(questions: List[Dict[str, Any]]) -> None:
    """Show available question categories."""
    categories = {}
    for question in questions:
        cat = question['category']
        if cat not in categories:
            categories[cat] = 0
        categories[cat] += 1
    
    print("\n📋 Available Question Categories:")
    for category, count in categories.items():
        print(f"   {category.title()}: {count} questions")

def filter_questions_by_category(questions: List[Dict[str, Any]], category: str) -> List[Dict[str, Any]]:
    """Filter questions by category."""
    return [q for q in questions if q['category'].lower() == category.lower()]

def save_quiz_results(results: Dict[str, Any], filename: str = "quiz_results.json") -> None:
    """Save quiz results to a JSON file."""
    with open(filename, 'w') as f:
        json.dump(results, f, indent=4)
    print(f"💾 Quiz results saved to {filename}")

def main():
    """Main function to run the fruits quiz."""
    # Combine predefined questions with generated ones
    all_questions = quiz_questions + generate_questions_from_data(fruits_data)
    
    while True:
        print("\n" + "=" * 50)
        print("🍎🍌🍊 FRUITS QUIZ MENU 🍊🍌🍎")
        print("=" * 50)
        print("1. Start Quiz (5 questions)")
        print("2. Start Quiz (10 questions)")
        print("3. Start Quiz (All questions)")
        print("4. Quiz by Category")
        print("5. Show Question Categories")
        print("6. View Fruits Data")
        print("0. Exit")
        
        choice = input("\nEnter your choice (0-6): ").strip()
        
        if choice == "0":
            print("👋 Thanks for playing the Fruits Quiz!")
            break
            
        elif choice == "1":
            results = run_quiz(all_questions, 5)
            save_quiz_results(results)
            
        elif choice == "2":
            results = run_quiz(all_questions, 10)
            save_quiz_results(results)
            
        elif choice == "3":
            results = run_quiz(all_questions, len(all_questions))
            save_quiz_results(results)
            
        elif choice == "4":
            show_question_categories(all_questions)
            category = input("\nEnter category name: ").strip()
            filtered_questions = filter_questions_by_category(all_questions, category)
            
            if filtered_questions:
                num_questions = min(5, len(filtered_questions))
                results = run_quiz(filtered_questions, num_questions)
                save_quiz_results(results)
            else:
                print(f"❌ No questions found for category '{category}'")
                
        elif choice == "5":
            show_question_categories(all_questions)
            
        elif choice == "6":
            print("\n🍎 FRUITS DATA:")
            for fruit in fruits_data:
                print(f"   {fruit['name'].title()}: {fruit['color']}, {fruit['taste']}, {fruit['weight_grams']}g")
                
        else:
            print("❌ Invalid choice. Please enter a number between 0 and 6.")

if __name__ == "__main__":
    main() 