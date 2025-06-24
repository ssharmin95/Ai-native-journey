#!/usr/bin/env python3
"""
Fruits Data Management System
A comprehensive tool for working with fruit data including search, filter, and analysis features.
"""

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

def display_all_fruits(fruits: List[Dict[str, Any]]) -> None:
    """Display all fruits in a formatted way."""
    print("\n🍎 ALL FRUITS IN DATABASE 🍎")
    print("=" * 50)
    for i, fruit in enumerate(fruits, 1):
        print(f"{i}. {fruit['name'].title()}")
        print(f"   Color: {fruit['color']}")
        print(f"   Taste: {fruit['taste']}")
        print(f"   Weight: {fruit['weight_grams']}g")
        print("-" * 30)

def search_fruit_by_name(fruits: List[Dict[str, Any]], name: str) -> List[Dict[str, Any]]:
    """Search for fruits by name (case-insensitive)."""
    name_lower = name.lower()
    return [fruit for fruit in fruits if name_lower in fruit['name'].lower()]

def filter_by_color(fruits: List[Dict[str, Any]], color: str) -> List[Dict[str, Any]]:
    """Filter fruits by color."""
    color_lower = color.lower()
    return [fruit for fruit in fruits if color_lower == fruit['color'].lower()]

def filter_by_taste(fruits: List[Dict[str, Any]], taste: str) -> List[Dict[str, Any]]:
    """Filter fruits by taste."""
    taste_lower = taste.lower()
    return [fruit for fruit in fruits if taste_lower == fruit['taste'].lower()]

def sort_by_weight(fruits: List[Dict[str, Any]], reverse: bool = False) -> List[Dict[str, Any]]:
    """Sort fruits by weight."""
    return sorted(fruits, key=lambda x: x['weight_grams'], reverse=reverse)

def get_average_weight(fruits: List[Dict[str, Any]]) -> float:
    """Calculate average weight of all fruits."""
    if not fruits:
        return 0
    total_weight = sum(fruit['weight_grams'] for fruit in fruits)
    return total_weight / len(fruits)

def get_heaviest_fruit(fruits: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Get the heaviest fruit."""
    return max(fruits, key=lambda x: x['weight_grams'])

def get_lightest_fruit(fruits: List[Dict[str, Any]]) -> Dict[str, Any]:
    """Get the lightest fruit."""
    return min(fruits, key=lambda x: x['weight_grams'])

def add_new_fruit(fruits: List[Dict[str, Any]], name: str, color: str, taste: str, weight: int) -> List[Dict[str, Any]]:
    """Add a new fruit to the database."""
    new_fruit = {
        "name": name.lower(),
        "color": color.lower(),
        "taste": taste.lower(),
        "weight_grams": weight
    }
    fruits.append(new_fruit)
    print(f"✅ Added {name.title()} to the database!")
    return fruits

def save_to_json(fruits: List[Dict[str, Any]], filename: str = "fruits_database.json") -> None:
    """Save fruits data to a JSON file."""
    with open(filename, 'w') as f:
        json.dump(fruits, f, indent=4)
    print(f"💾 Data saved to {filename}")

def load_from_json(filename: str = "fruits_database.json") -> List[Dict[str, Any]]:
    """Load fruits data from a JSON file."""
    try:
        with open(filename, 'r') as f:
            return json.load(f)
    except FileNotFoundError:
        print(f"❌ File {filename} not found. Starting with default data.")
        return fruits_data.copy()

def display_statistics(fruits: List[Dict[str, Any]]) -> None:
    """Display statistics about the fruits data."""
    print("\n📊 FRUITS STATISTICS 📊")
    print("=" * 30)
    print(f"Total fruits: {len(fruits)}")
    print(f"Average weight: {get_average_weight(fruits):.1f}g")
    
    heaviest = get_heaviest_fruit(fruits)
    lightest = get_lightest_fruit(fruits)
    print(f"Heaviest fruit: {heaviest['name'].title()} ({heaviest['weight_grams']}g)")
    print(f"Lightest fruit: {lightest['name'].title()} ({lightest['weight_grams']}g)")
    
    # Color distribution
    colors = {}
    for fruit in fruits:
        color = fruit['color']
        colors[color] = colors.get(color, 0) + 1
    
    print("\nColor distribution:")
    for color, count in colors.items():
        print(f"  {color.title()}: {count} fruit(s)")

def main():
    """Main function to run the fruits data management system."""
    print("🍎🍌🍊 FRUITS DATA MANAGEMENT SYSTEM 🍊🍌🍎")
    print("=" * 50)
    
    # Load data (or use default)
    fruits = load_from_json()
    
    while True:
        print("\n" + "=" * 50)
        print("MENU:")
        print("1. Display all fruits")
        print("2. Search fruit by name")
        print("3. Filter by color")
        print("4. Filter by taste")
        print("5. Sort by weight (lightest first)")
        print("6. Sort by weight (heaviest first)")
        print("7. Show statistics")
        print("8. Add new fruit")
        print("9. Save data to file")
        print("10. Load data from file")
        print("0. Exit")
        
        choice = input("\nEnter your choice (0-10): ").strip()
        
        if choice == "0":
            print("👋 Goodbye! Thanks for using the Fruits Data Management System!")
            break
            
        elif choice == "1":
            display_all_fruits(fruits)
            
        elif choice == "2":
            name = input("Enter fruit name to search: ").strip()
            results = search_fruit_by_name(fruits, name)
            if results:
                print(f"\nFound {len(results)} fruit(s):")
                display_all_fruits(results)
            else:
                print(f"❌ No fruits found with name containing '{name}'")
                
        elif choice == "3":
            color = input("Enter color to filter by: ").strip()
            results = filter_by_color(fruits, color)
            if results:
                print(f"\nFound {len(results)} fruit(s) with color '{color}':")
                display_all_fruits(results)
            else:
                print(f"❌ No fruits found with color '{color}'")
                
        elif choice == "4":
            taste = input("Enter taste to filter by: ").strip()
            results = filter_by_taste(fruits, taste)
            if results:
                print(f"\nFound {len(results)} fruit(s) with taste '{taste}':")
                display_all_fruits(results)
            else:
                print(f"❌ No fruits found with taste '{taste}'")
                
        elif choice == "5":
            sorted_fruits = sort_by_weight(fruits, reverse=False)
            print("\n🍎 FRUITS SORTED BY WEIGHT (LIGHTEST FIRST) 🍎")
            display_all_fruits(sorted_fruits)
            
        elif choice == "6":
            sorted_fruits = sort_by_weight(fruits, reverse=True)
            print("\n🍎 FRUITS SORTED BY WEIGHT (HEAVIEST FIRST) 🍎")
            display_all_fruits(sorted_fruits)
            
        elif choice == "7":
            display_statistics(fruits)
            
        elif choice == "8":
            print("\n🍎 ADD NEW FRUIT 🍎")
            name = input("Enter fruit name: ").strip()
            color = input("Enter fruit color: ").strip()
            taste = input("Enter fruit taste: ").strip()
            try:
                weight = int(input("Enter fruit weight in grams: ").strip())
                fruits = add_new_fruit(fruits, name, color, taste, weight)
            except ValueError:
                print("❌ Invalid weight. Please enter a number.")
                
        elif choice == "9":
            filename = input("Enter filename (or press Enter for default): ").strip()
            if not filename:
                filename = "fruits_database.json"
            save_to_json(fruits, filename)
            
        elif choice == "10":
            filename = input("Enter filename to load (or press Enter for default): ").strip()
            if not filename:
                filename = "fruits_database.json"
            fruits = load_from_json(filename)
            
        else:
            print("❌ Invalid choice. Please enter a number between 0 and 10.")

if __name__ == "__main__":
    main() 