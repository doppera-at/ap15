# Logging output to know what's going on

There are many great libraries handling logging (even to multiple streams like console and file) but as with 
unit tests, this is a wonderful way of making something that is of use immediately and later switching to a 
full fledged library or framework.

Because I haven't made a logger in c# yet (as the assignments were rather small), I am going to provide my 
`Screeps` logger as code snippets. It is `JavaScript`, but as all of this is more about the concepts anyway 
the language of the code doesn't matter that much.

## Standardized output

One way I start logging is to have output that not only shows me what happens, but also where it happens. When 
working with console output, having to type the `where` part can be automated - and of course there is more that 
can be added ^^

## Getting basic output going

```JavaScript
class Logger {

  constructor(method) {
    this.method = method;
  }

  log(message, level) {
    console.log(`[${level}] ${this.method}> ${message}`);
  }
}
```

Sample output: `[1] main> This is an example`
I am aware that `level` could refer to anything right now, so `test` would be great too, which is why we move 
on to the next part ^^

## Limit output shown

As you start to use log messages (and there is a great debate about what and how much to log) it gets harder to 
distinguish what kind a message is. This and the fact that every logging tutorial does this to because it is god 
damn convenient, we are going to implement a level into our logger.

## Enums, freezed objects or structs

Whatever data structure your language uses to store grouped constants (similar values that cannot change), define 
a set of levels with any number assigned to it. The levels usually are (at least) `Error`, `Warning`, `Info`, `Debug` 
with their numbers reflecting their severity. The lower the number, the more important this message is, so 
`0, 1, 2, 3` would already be enough, but it is also often seen that something like `10, 30, 50, 100` is used. This 
is more flexible as in-between levels can be added more easily without invalidating old log files.

```JavaScript
const LOG_LEVELS = Object.freeze({
  ERROR: 10,
  WARNING: 30,
  INFO: 50,
  DEBUG: 100
});
```

Now just add a level parameter to the constructor and the log method and only log when the level is not higher than 
what we have chosen - in other words, we `return early`. This is a programming paradigm that would need an article 
by itself, but one I highly adore.

```JavaScript
log(message, level) {
  if (level > this.level) return;
  ...
}
```

## Specifying the level each time is not practical

If we would leave it like is, we would need to write something like `logger.log("Test message", LOG_LEVELS.INFO);` to 
have it restricted - let's fix this problem, before adding a visual output.
Instead of using the `log` method directly, we are going to write a separate method for each log level that themselves 
use our log method.

```JavaScript
log(message, level) {
  ...
}
error(message) {
  this.log(message, LOG_LEVELS.ERROR);
}
warning(message) {
  this.log(message, LOG_LEVELS.WARNING);
}
```

This is code written once to save many keystrokes later on. This way, we can just write `logger.info("Test message");` 
and be done with it. The output on the other hand looks still the same, so lets fix that

## Log Levels are numbers

Even though numbers are not convenient to read and in other cases it might make more sense to write the constant object 
from earlier to use strings instead of numbers. But in the case of the logger, the whole restriction relies on a 
comparison, so we have to take a detour to get a readable version.

Let's write a method (which could be static) that converts these levels to strings:

```JavaScript
getLevelString(level) {
  switch (level) {
    case LOG_LEVELS.ERROR: return "ERROR";
    case LOG_LEVELS.WARNING: return "WARN";
    case LOG_LEVELS.INFO: return "Info";
    case LOG_LEVELS.DEBUG: return "~";
    default: return "";
  }
}
```

Now we can add this information to out `log` output:

```JavaScript
console.log(`[${this.getLevelString(level)}] ${this.method}> ${message}`);
```

Our output will now look like this:
```
[Info] main> This is nice
[Info] paymentSystem> User 'username' started checkout process
[~] paymentSystem> Number of items in cart: 3
[ERROR] paymentSystem> Failed to retrieve price information!
```

Even with a graphical user interface, these type of messages or output in log files, will be one of the greatest resources 
for debugging. Being able to see what is going on under the hood is my first step, before the `debugger` becomes important. 
Adding log messages in every loop with finer and finer levels might seem tempting, but when turning all of this on at once 
will become an unreadable mess anyway - so use a debugger for this kind of fine grained detail.

# This is just the beginning

Of course this can be a wonderful base to add more content to it - which varies in ways depending on the language in question.
In languages like `JavaScript` or `Python` it is much easier to add additional information - for example a result translation 
as the game handles results in numerical values (`0` for OK, `-5` for NotFound, `-7` InvalidTarget).

```JavaScript
logger.info(`Tried to do something, the result is ${result}`);
```

This would result in the literal number being shown and while you learn them after a while, it is way more convenient to have 
more information that can be read and understood easily. Similar to the `getLevelString` method I wrote a `getResultString` 
method that gave me info to all stored result types.
After changing the log method, it was easy to have `(-5) NotFound` appended to the output if a result is provided.

```JavaScript
log(message, level, result=null) {
  if (level > this.level) return;
  let resultString = `[${this.getLevelString(level)}] ${this.method}> ${message}`;
  if (result) resultString += ` (${result}) ${this.getResultString(result)}`;
  console.log(resultString);
}
```

