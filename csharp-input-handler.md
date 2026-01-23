# Reading Input conveniently

Because specific input can fail easily and needs to be repeated instead of just crashing, it made sense this was one of 
the first things I coded for myself. This way, all you need to do is "give me this" that is "used as this" (and an optional 
times to repeat before aborting) and you can focus on writing your implementation.
In addition, this exercise is useful in any language when it comes to handling user input interactively.


## Getting a string

Let's tackle this problem using C#, as this is the language currently used in our class. A input loop for a string is relatively straightforward:

```c
Console.Write("Input something> ");
// because ReadLine can fail, the questionmarks say "otherwise use this"
string input = Console.ReadLine() ?? string.Empty;
// trimming is always a good idea
input = input.Trim();
```

Even if we would not trim the input, 2 lines are always needed. Information for the user that an input is expected and reading the input. By putting this in a class, we can then use only 1 line, but have the power of extending this with additional checks and loops.

```c
namespace Utilities {
  class ConsoleInputHandler {

    public static string Input(string usage) {
      Console.Write($"{usage}> ");
      string input = Console.ReadLine() ?? string.Empty;
      return input.Trim();
    }

  }
}
```

This way, we just import this Utilities-Class using the keyword `using` and we can use it, but it gets interesting when it comes to getting numbers, boolean values or options from a list!
The name without a type and the generic usage string are intentional, as we will be using this method in all other methods, so it is really easy to change the prompt ^^


## Getting numbers

When dealing with numbers, it is easy to mistype and dealing with a loop each time you want to have a number as input is not just tedious but error prone. Let's write the algorithm once and let the user deal with repeated prompts.

```c
public static int InputInteger(string usage) {
  while (true) { // yes, an infinite loop is used, as we return when we're finished
    string input = Input($"Input integer for {usage}"); // we use the basic input function
    if (int.TryParse(input, out int result)) {
      return result;
    }
    Console.WriteLine("Please input a number.");
  }
}
```

We get an `input` and if `TryParse` was successful, we return the result.


## Options from a list

Using lists to restrict options comes before we even get a `true/false` value? That can't be right!
But actually, it is - when thinking about what is necessary for a boolean value, we have the user input in the form of a string and checking it against one or more keywords.

```c
public static string InputOption(string usage, List<string> options) {
  // TODO: Add display of options
  while (true) {
    string input = Input($"{usage} [options]");
    if (options.Contains(input)) {
      return input;
    }
    Console.WriteLine($"Choose between one of: {options}");
  }
}
```


## Boolean values

After this, boolean values are a breeze:

```c
public static bool InputBoolean(string usage) {
  // These should be declared as static members, so they are on top of the file for easy configuration
  string[] optionsYes = new(){"true", "yes", "y", "ja", "j", "sicha", "klar", "gerne", "sowieso"};
  string[] optionsNo = new(){"false", "no", "n", "nein", "oh no", "please don't", "bist deppad?", "nope"};
  // Using list.Concat(otherList) we create a new list containing all values of both lists
  string input = InputOption(usage, optionsYes.Concat(optionsNo));
  if (optionsYes.Contains(input)) {
    return true;
  }
  if (optionsNo.Contains(input)) {
    return false;
  }
}
```


## Exercises

Best thing to do now is to implement the rest of the functions yourself, but keeping in mind the steps above to have an easier time by reusing whatever possible.
* Number input, but is has to be positive
* Number input within a specific range
* A single character
* One word when the input consists more than one
