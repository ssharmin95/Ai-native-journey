#!/usr/bin/env python3
"""
Fruits Data Demo
A simple demonstration of working with the fruits data structure.
"""

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

def main():
    """Demonstrate various operations on fruits data."""
    print("🍎🍌🍊 FRUITS DATA DEMONSTRATION 🍊🍌🍎")
    print("=" * 50)
    
    # 1. Display all fruits
    print("\n1. ALL FRUITS:")
    for i, fruit in enumerate(fruits_data, 1):
        print(f"   {i}. {fruit['name'].title()} - {fruit['color']} - {fruit['taste']} - {fruit['weight_grams']}g")
    
    # 2. Find heaviest fruit
    heaviest = max(fruits_data, key=lambda x: x['weight_grams'])
    print(f"\n2. HEAVIEST FRUIT: {heaviest['name'].title()} ({heaviest['weight_grams']}g)")
    
    # 3. Find lightest fruit
    lightest = min(fruits_data, key=lambda x: x['weight_grams'])
    print(f"3. LIGHTEST FRUIT: {lightest['name'].title()} ({lightest['weight_grams']}g)")
    
    # 4. Calculate average weight
    total_weight = sum(fruit['weight_grams'] for fruit in fruits_data)
    avg_weight = total_weight / len(fruits_data)
    print(f"4. AVERAGE WEIGHT: {avg_weight:.1f}g")
    
    # 5. Group by color
    print("\n5. FRUITS BY COLOR:")
    colors = {}
    for fruit in fruits_data:
        color = fruit['color']
        if color not in colors:
            colors[color] = []
        colors[color].append(fruit['name'])
    
    for color, fruits in colors.items():
        print(f"   {color.title()}: {', '.join(f.title() for f in fruits)}")
    
    # 6. Find sweet fruits
    sweet_fruits = [fruit for fruit in fruits_data if fruit['taste'] == 'sweet']
    print(f"\n6. SWEET FRUITS: {', '.join(fruit['name'].title() for fruit in sweet_fruits)}")
    
    # 7. Sort by weight
    sorted_by_weight = sorted(fruits_data, key=lambda x: x['weight_grams'])
    print("\n7. FRUITS SORTED BY WEIGHT:")
    for fruit in sorted_by_weight:
        print(f"   {fruit['name'].title()}: {fruit['weight_grams']}g")
    
    # 8. Search for fruits containing 'a'
    fruits_with_a = [fruit for fruit in fruits_data if 'a' in fruit['name']]
    print(f"\n8. FRUITS WITH 'A' IN NAME: {', '.join(fruit['name'].title() for fruit in fruits_with_a)}")
    
    # 9. Create a summary dictionary
    summary = {
        'total_fruits': len(fruits_data),
        'total_weight': total_weight,
        'average_weight': avg_weight,
        'colors': list(colors.keys()),
        'tastes': list(set(fruit['taste'] for fruit in fruits_data))
    }
    
    print(f"\n9. SUMMARY:")
    print(f"   Total fruits: {summary['total_fruits']}")
    print(f"   Total weight: {summary['total_weight']}g")
    print(f"   Average weight: {summary['average_weight']:.1f}g")
    print(f"   Colors available: {', '.join(summary['colors'])}")
    print(f"   Tastes available: {', '.join(summary['tastes'])}")
    
    print("\n✅ Demonstration complete!")

if __name__ == "__main__":
    main() 