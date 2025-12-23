## 📌 Project Description

The Faulty Calculator takes two numbers and one arithmetic operator from the user.  
Normally, it performs the correct calculation, but **10% of the time** it deliberately performs a wrong operation.

This project is designed purely for **learning and practice purposes**.

## ⚙️ How It Works

1. Takes two numbers as input from the user
2. Takes one operator (+, -, *, /)
3. Generates a random number using `Math.random()`
4. If the random value is less than `0.1`, a faulty operation is performed
5. Otherwise, the correct operation is executed

## 🔁 Faulty Operation Logic

| User Operator | Faulty Operation |
|--------------|-----------------|
| `+` | `-` |
| `*` | `+` |
| `-` | `/` |
| `/` | `**` (Power) |

## 🧠 Concepts Used

- JavaScript Functions
- Conditional Statements (`if-else`)
- `Math.random()` for probability logic
- User input using `prompt()`
- Console output

## 🚀 How to Run

1. Open the project in a browser
2. Open Developer Console (Press `F12`)
3. Run the script
4. Enter values when prompted
5. View results in the console

## 📚 Learning Purpose

This project is part of my JavaScript learning journey and focuses on building a strong foundation before moving to advanced projects.


## 🏷️ Project Level

**Beginner**

---

## 📜 License

This project is open-source and free to use for educational purposes.
