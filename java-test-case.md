# Unit testing with custom suite

Disclaimer first (as always) that it would be better to move to a sophisticated
testing framework right after finishing this project (or extend it to minimize
manual input required). Most frameworks offer metrics, targeted testing and
configurability that can hardly be achieved by manual labor. Still I think this
was one exercise that helped me quite a bit, especially since this project grew
over time. Each day I used it, I found something else I wanted to change until I
was happy enough with the result.

## What is unit testing?

The smallest scope a test can have (hence the name of a single `unit`) with the
focus of a single unit (i.e. on function level) at a time and the goal to cover
each line of code. One extreme is the practice of "Test driven development"
where the tests are written before the actual code exists. By defining the
behavior of the future function, the implementation is (almost) guaranteed to be
correct once they pass.

Important when writing tests is to be creative and not just write a test with
"correct input produces correct outcome" - what if something unexpected comes
in? In the case of `null`, what should happen? Being thoughtful upfront will
help a lot in ensuring stability but will rarely fully prevent an edge case
coming up.

## Comparing the actual vs. expected result

Without a way of comparing values and verify equality (or boolean values, null,
etc), a test case would be of no use. In development these verifications are
often called "assertions".
