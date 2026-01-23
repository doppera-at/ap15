# Menus with ease

Even though there might already consist a well made library for handling menus on the command line, it is a great exercise for dealing with dictionary like data structures and formatting output.
Let's think that through: A menu has a headline (with optional info about an object like I did in Java), then a list of possible ways showing the keyword (or number or actually whatever the key 
will be) and a description and finally an input regarding the users choice.

## Dictionaries

While a list contains multiple objects referenced by just a number that indicates the position of the object, a dictionary (sometimes also called `HashTable` and other names, but the behavior is 
the same) on the other hand uses a `key` instead of a number. This can be really useful when it's necessary to get a specific object often, or it can be used to provide additional information 
together with the objects which we will do:

```c
Dictionary<string, string> options = new(){
  "1": "Menu entry 1",
  "2": "Menu entry 2",
  "special": "I prefer keywords"
}
```

## Handling the menu

We get a dictionary and have to go over each of the items, printing them in a specific way. After that we return the result of `Input("Menu Choice")`.
The way how this foreach-loop has to be written can vary quite a bit, with python being `for key, value in options.items():`

```c
public static string mainMenu(Dictionary<string, string> options) {
  Console.WriteLine("===== MAIN MENU");
  for (KeyValuePair<string, string> option in options) {
    Console.WriteLine($"{option.Key}: {option.Value}");
  }
  return Input("menu");
}
```

There is one issue: each menu needs to have an option leaving the program or returning to the previous menu and having to add it to the options each time is not just cumbersome, it's a great example 
of automating things that occur repeatedly. Before we print the contents of the dictionary, we can add the entry automatically:

```c
options.TryAdd("quit", "Quit Program");
```

## Formatting output

Right now we are not using the additional information for each menu entry - the same result can be achieved by using a list of strings, each entry being one line. This results in misalignment between 
the keywords and the descriptions, making the menu way harder to understand. Instead we are going to use format strings to align the different parts of the menu.

```c
string keyword = entry.Key.PadRight(15).Replace(' ', '.');
```

Let's unpack: `entry.Key` is a string containing the keyword of the `dictionary`. In C#, strings can be aligned using built-in functions, in our case we want our result to be 15 characters long with empty space on the `right`. Because `PadRight` returns a string, we can use it directly to call the function `Replace`, changing the empty space to a `.`
This way of chaining method calls is really convenient. If it's hard to grasp, maybe looking at it this way makes it clearer:

```c
keyword = entry.Key.PadRight(15);
keyword = keyword.Replace(' ', '.');
```

Here, we save the result of `PadRight` into a variable before using it in the next line. With chaining, we don't save the result in-between but instead are using it to perform the function call directly.

## Sub-Menus

Not every program needs more than one menu, but many do as they grow bigger. Each exercise project from class will get one main menu and one sub menu for each of the exercises, except the case when the 
assignment only consists of a single exercise.

Using the main menu code from above, add a function that shows a sub menu: Alter the look a bit so it is clear that this isn't the main menu and use `back` as the keyword that is going to be added to the 
list of options. When this was easy, try to add a way to display information about the sub menu when calling the function.
