// Lessons data structure
const lessons = {
    // Module 1: Introduction to C
    "intro-to-c": {
        title: "Introduction to C Programming",
        content: `
## Introduction to C Programming

C is a general-purpose programming language created in the early 1970s by Dennis Ritchie at Bell Labs. It's one of the most influential and widely used programming languages in history, and many modern languages like C++, Java, JavaScript, and Python have borrowed syntax and concepts from C.

### Why Learn C?

1. **Foundation for other languages**: Understanding C makes it easier to learn other languages.
2. **Efficiency**: C programs are typically more efficient than those written in higher-level languages.
3. **Control**: C gives you fine-grained control over memory and hardware.
4. **Portability**: C code can be compiled on almost any platform.
5. **Embedded systems**: C is widely used in embedded systems, IoT devices, and operating systems.

### Key Characteristics of C

- **Procedural language**: C follows a top-down approach with functions as the basic building blocks.
- **Statically typed**: Variables must be declared before use, and their types are checked at compile time.
- **Mid-level language**: C combines features of both high-level and low-level languages.
- **Small core language**: C has a relatively small set of keywords and built-in functions.
- **Rich set of operators**: C provides many operators for complex operations.

### The C Programming Process

1. **Write** the source code in a text editor or IDE
2. **Compile** the code using a C compiler
3. **Link** the compiled code with libraries
4. **Execute** the resulting program

### History and Evolution

- **1972**: Initial development of C by Dennis Ritchie
- **1978**: Publication of "The C Programming Language" by Brian Kernighan and Dennis Ritchie
- **1989**: ANSI C standard (C89/C90)
- **1999**: C99 standard with new features
- **2011**: C11 standard with additional features
- **2018**: C17/C18 standard (minor updates to C11)

### Common Uses of C

- Operating Systems (e.g., Linux, Windows kernel)
- Embedded Systems
- System Tools and Utilities
- Game Development
- Database Systems
- Language Interpreters (e.g., Python's CPython implementation)

In the next lesson, we'll set up your development environment to start writing C programs.
`,
        starterCode: `// No coding exercise for this introductory lesson
// You'll start coding in the next lesson!`,
        exercises: `
1. Research and list three major software projects or systems that are written in C.

2. Compare C with another programming language you're familiar with. What are the main differences?

3. Why do you think C has remained relevant for over 50 years despite newer languages being developed?
`
    },
    
    "setting-up": {
        title: "Setting Up Your Environment",
        content: `
## Setting Up Your C Programming Environment

Before you can start writing C programs, you need to set up a development environment. In this course, we provide an online compiler, but for local development, you'll need a text editor and a C compiler.

### Online C Compiler (This Course)

This course includes an integrated C compiler that runs in your browser. You can write, compile, and run code directly in the editor provided. This is perfect for learning and completing the exercises in this course.

### Local Development Environment

For local development, you'll need:

1. **A Text Editor or IDE**
   - **Text Editors**: Visual Studio Code, Sublime Text, Notepad++, Vim, Emacs
   - **IDEs**: Code::Blocks, CLion, Visual Studio, Eclipse with C/C++ plugin

2. **A C Compiler**
   - **Windows**: MinGW (Minimalist GNU for Windows), Microsoft Visual C++
   - **macOS**: Clang (included with Xcode Command Line Tools), GCC via Homebrew
   - **Linux**: GCC (GNU Compiler Collection), usually pre-installed

### Setting Up on Different Operating Systems

#### Windows
1. **Install MinGW**:
   - Download the MinGW installer from the [MinGW website](http://mingw.org/)
   - Run the installer and select the C compiler package
   - Add MinGW bin directory to your PATH environment variable

2. **Or Install Visual Studio**:
   - Download Visual Studio Community Edition
   - During installation, select "Desktop development with C++" workload

#### macOS
1. **Install Command Line Tools**:
   - Open Terminal
   - Run \`xcode-select --install\`
   - This installs the clang compiler

2. **Or Install GCC via Homebrew**:
   - Install Homebrew first: \`/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"\`
   - Install GCC: \`brew install gcc\`

#### Linux
1. **Install GCC**:
   - Ubuntu/Debian: \`sudo apt-get update && sudo apt-get install build-essential\`
   - Fedora: \`sudo dnf install gcc\`
   - Arch Linux: \`sudo pacman -S base-devel\`

### Verifying Your Installation

To verify that your C compiler is installed correctly:
1. Open a terminal or command prompt
2. Type \`gcc --version\` or \`clang --version\` (depending on your compiler)
3. You should see version information if the installation was successful

### Creating Your First C Program File

1. Create a new file with a .c extension, for example, \`hello.c\`
2. Write your C program in this file
3. Save the file

### Compiling and Running from the Command Line

1. Open a terminal or command prompt
2. Navigate to the directory containing your C file
3. Compile: \`gcc hello.c -o hello\` (replace with your filename)
4. Run: \`./hello\` on macOS/Linux or \`hello\` on Windows

In the next lesson, we'll write our first C program!
`,
        starterCode: `// No coding exercise for this setup lesson
// We'll write our first program in the next lesson!`,
        exercises: `
1. Install a C compiler on your local machine (if you plan to code outside this online course environment).

2. Verify your compiler installation by checking the version in a terminal or command prompt.

3. Research IDEs for C programming. Which one seems most suitable for your learning style and operating system?
`
    },
    
    "first-program": {
        title: "Your First C Program",
        content: `
## Your First C Program

Now that your environment is set up, let's write the traditional "Hello, World!" program in C. This simple program is a standard first step in learning any programming language.

### The "Hello, World!" Program

Here's what a basic "Hello, World!" program looks like in C:

\`\`\`c
#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
\`\`\`

Let's break down each part of this program:

### Line-by-Line Explanation

1. **\`#include <stdio.h>\`**
   - This is a preprocessor directive that tells the compiler to include the standard input/output library (stdio.h)
   - This library contains functions like \`printf()\` that we need for input and output

2. **\`int main() {\`**
   - This declares the main function, which is the entry point of every C program
   - The \`int\` indicates that this function will return an integer value
   - Every C program must have a main function

3. **\`printf("Hello, World!\\n");\`**
   - This calls the \`printf()\` function to print text to the console
   - \`"Hello, World!\\n"\` is the string to be printed
   - \`\\n\` is an escape sequence that represents a newline character

4. **\`return 0;\`**
   - This returns the value 0 to the operating system
   - By convention, returning 0 indicates that the program executed successfully

5. **\`}\`**
   - This closes the main function block

### Understanding the Program Structure

Every C program has a similar basic structure:

1. **Include necessary header files**
2. **Define the main function**
3. **Write statements inside the main function**
4. **Return a value from main**

### Try It Yourself

Use the code editor on the right to write your first C program. Try modifying the "Hello, World!" message to display your own text.

### Compiling and Running

In this online environment, you can simply click the "Run" button to compile and execute your code. When working on your local machine, you would use commands like:

\`\`\`
gcc hello.c -o hello
./hello
\`\`\`

Where \`gcc\` is the compiler, \`hello.c\` is your source file, \`-o hello\` specifies the output filename, and \`./hello\` runs the compiled program.

### Common Mistakes to Avoid

- Forgetting the semicolon at the end of a statement
- Misspelling function names (C is case-sensitive)
- Missing brackets or mismatched brackets
- Forgetting to include necessary header files

In the next lesson, we'll dive deeper into the compilation process.
`,
        starterCode: `#include <stdio.h>

int main() {
    // Write your first C program here
    printf("Hello, World!\\n");
    return 0;
}`,
        solution: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    printf("My name is [Your Name]\\n");
    printf("This is my first C program!\\n");
    return 0;
}`,
        exercises: `
1. Modify the "Hello, World!" program to print your name on a new line.

2. Print three different lines of text with a single printf statement (hint: use \\n within the string).

3. Challenge: Make the program print "Hello, World!" five times using five separate printf statements.
`
    },
    
    "compilation": {
        title: "Compilation Process",
        content: `
## The C Compilation Process

Understanding how C programs are compiled is essential for becoming a proficient C programmer. Unlike interpreted languages, C code must be converted into machine code before it can be executed.

### The Four Stages of Compilation

The C compilation process consists of four main stages:

1. **Preprocessing**
2. **Compilation**
3. **Assembly**
4. **Linking**

Let's explore each stage in detail:

### 1. Preprocessing

The preprocessor handles directives that begin with a # symbol, such as #include, #define, and #ifdef.

**What happens during preprocessing:**
- Includes header files (#include)
- Expands macros (#define)
- Evaluates conditional compilation directives (#ifdef, #ifndef, #endif)
- Removes comments

**Example:**
When the preprocessor sees \`#include <stdio.h>\`, it replaces this line with the entire contents of the stdio.h file.

### 2. Compilation

The compiler translates the preprocessed code into assembly language, which is specific to the target processor architecture.

**What happens during compilation:**
- Syntax checking
- Type checking
- Optimization
- Generation of assembly code

### 3. Assembly

The assembler converts the assembly code into machine code (object files).

**What happens during assembly:**
- Converts assembly instructions into machine code (binary)
- Creates object files (usually with .o or .obj extension)

### 4. Linking

The linker combines multiple object files and resolves references to external symbols.

**What happens during linking:**
- Combines object files
- Links library functions (like printf)
- Resolves references between files
- Creates an executable file

### Compilation Commands

In a typical GCC environment, you can:

- **Preprocess only:** \`gcc -E file.c -o file.i\`
- **Compile only:** \`gcc -S file.i -o file.s\`
- **Assemble only:** \`gcc -c file.s -o file.o\`
- **Link:** \`gcc file.o -o file\`
- **Do all steps at once:** \`gcc file.c -o file\`

### Common Compilation Errors

1. **Syntax errors:** Missing semicolons, brackets, or typos
2. **Semantic errors:** Type mismatches, undeclared variables
3. **Linker errors:** Undefined references, missing libraries

### Compiler Warnings and Errors

- **Errors** prevent compilation from completing
- **Warnings** indicate potential problems but allow compilation to continue

It's good practice to treat warnings seriously, as they often indicate bugs or problematic code.

### Multiple File Compilation

For larger projects with multiple source files:

\`\`\`
gcc file1.c file2.c file3.c -o program
\`\`\`

Or compile them separately and then link:

\`\`\`
gcc -c file1.c
gcc -c file2.c
gcc -c file3.c
gcc file1.o file2.o file3.o -o program
\`\`\`

### Understanding the process in practice

Let's see a simple example of how a C program changes through the compilation process:

**Original C code (hello.c):**
\`\`\`c
#include <stdio.h>
#define MESSAGE "Hello, World!"

int main() {
    printf("%s\\n", MESSAGE);
    return 0;
}
\`\`\`

**After preprocessing (simplified):**
\`\`\`c
// Contents of stdio.h inserted here

int main() {
    printf("%s\\n", "Hello, World!");
    return 0;
}
\`\`\`

The compiler would then convert this to assembly, the assembler would create an object file, and the linker would produce the final executable.

Understanding the compilation process helps you debug issues more effectively and write more efficient code.
`,
        starterCode: `#include <stdio.h>

// This program demonstrates compilation errors
// Try to fix all the errors so the program compiles and runs correctly

int main() {
    // Missing semicolon in the next line
    printf("Starting the program\\n")
    
    // Undeclared variable
    count = 5;
    
    // Missing closing parenthesis
    printf("The count is: %d\\n", count;
    
    // Missing return statement
}`,
        solution: `#include <stdio.h>

// All errors have been fixed

int main() {
    // Fixed: Added semicolon
    printf("Starting the program\\n");
    
    // Fixed: Declared variable
    int count = 5;
    
    // Fixed: Added closing parenthesis and fixed semicolon position
    printf("The count is: %d\\n", count);
    
    // Fixed: Added return statement
    return 0;
}`,
        exercises: `
1. Fix all the syntax errors in the starter code so it compiles and runs correctly.

2. Add a comment above each line explaining what error was fixed.

3. Challenge: Intentionally introduce a different type of error (for example, a linker error by calling an undefined function) and observe the error message.
`
    },
    
    // Module 2: Basic Syntax & Data Types - First lesson example
    "variables": {
        title: "Variables & Constants",
        content: `
## Variables and Constants in C

Variables and constants are fundamental concepts in C programming. They allow you to store and manipulate data during program execution.

### Variables

A variable is a named storage location that can hold a value of a specific data type. The value stored in a variable can change during program execution.

#### Declaring Variables

In C, you must declare a variable before using it. The basic syntax is:

\`\`\`c
data_type variable_name;
\`\`\`

For example:

\`\`\`c
int age;           // Declares an integer variable named 'age'
float salary;      // Declares a floating-point variable named 'salary'
char grade;        // Declares a character variable named 'grade'
\`\`\`

#### Initializing Variables

You can assign an initial value to a variable when you declare it:

\`\`\`c
int age = 25;                  // Declares and initializes an integer variable
float salary = 50000.50;       // Declares and initializes a floating-point variable
char grade = 'A';              // Declares and initializes a character variable
\`\`\`

You can also declare multiple variables of the same type in a single statement:

\`\`\`c
int x, y, z;                   // Declares three integer variables
int a = 5, b = 10, c = 15;     // Declares and initializes three integer variables
\`\`\`

#### Variable Naming Rules

1. Names can contain letters, digits, and underscores
2. Names must begin with a letter or underscore
3. Names are case-sensitive (age, Age, and AGE are different variables)
4. Names cannot contain spaces or special characters like !, @, #, etc.
5. Names cannot be C keywords (int, float, if, else, etc.)

Good variable names are descriptive and follow a consistent style (e.g., camelCase or snake_case).

### Constants

A constant is a value that cannot be changed during program execution. There are two main ways to define constants in C:

#### 1. Using #define (Preprocessor Directive)

The syntax is:

\`\`\`c
#define CONSTANT_NAME value
\`\`\`

For example:

\`\`\`c
#define PI 3.14159
#define MAX_SIZE 100
#define COMPANY_NAME "Acme Inc."
\`\`\`

Note that there's no semicolon at the end of a #define directive, and by convention, constant names are in uppercase.

#### 2. Using const Keyword

The syntax is:

\`\`\`c
const data_type CONSTANT_NAME = value;
\`\`\`

For example:

\`\`\`c
const float PI = 3.14159;
const int MAX_SIZE = 100;
const char* COMPANY_NAME = "Acme Inc.";
\`\`\`

#### Differences Between #define and const

- \`#define\` is a preprocessor directive; the compiler replaces all occurrences of the constant name with its value before compilation.
- \`const\` is a keyword that creates a read-only variable; it has a data type and follows variable scoping rules.

### Variable Scope and Lifetime

#### Global Variables

Declared outside any function (including main), global variables can be accessed from any function in the file.

\`\`\`c
#include <stdio.h>

int globalVar = 100;  // Global variable

void someFunction() {
    printf("%d\\n", globalVar);  // Outputs 100
}

int main() {
    printf("%d\\n", globalVar);  // Outputs 100
    someFunction();
    return 0;
}
\`\`\`

#### Local Variables

Declared inside a function or a block, local variables can only be accessed within that function or block.

\`\`\`c
#include <stdio.h>

void someFunction() {
    int localVar = 50;  // Local variable
    printf("%d\\n", localVar);  // Outputs 50
}

int main() {
    // printf("%d\\n", localVar);  // Error: localVar is not defined here
    someFunction();
    return 0;
}
\`\`\`

### Memory Allocation

Variables are stored in different memory segments depending on how they're declared:

- **Stack**: Local variables (automatic storage)
- **Data segment**: Global variables, static variables
- **Heap**: Dynamically allocated memory (which we'll cover later)

Understanding variables and constants is crucial for effective C programming. They form the basis for storing and manipulating data in your programs.
`,
        starterCode: `#include <stdio.h>

// Define a constant for the conversion rate
#define CONVERSION_RATE 2.54

int main() {
    // Declare variables for inches and centimeters
    // Write code to convert inches to centimeters
    // Print the result
    
    return 0;
}`,
        solution: `#include <stdio.h>

// Define a constant for the conversion rate (1 inch = 2.54 cm)
#define CONVERSION_RATE 2.54

int main() {
    // Declare variables for inches and centimeters
    float inches = 10.0;
    float centimeters;
    
    // Convert inches to centimeters
    centimeters = inches * CONVERSION_RATE;
    
    // Print the result
    printf("%.2f inches is equal to %.2f centimeters\\n", inches, centimeters);
    
    return 0;
}`,
        exercises: `
1. Write a program that declares and initializes variables to store your age, height (in meters), and first initial. Print all three values.

2. Create a program that converts temperature from Fahrenheit to Celsius using the formula: C = (F - 32) * 5/9. Use appropriate variable names and a named constant.

3. Challenge: Write a program that calculates the area and perimeter of a rectangle. Define constants for the length and width, and store the calculated results in variables before printing them.
`
    }
};