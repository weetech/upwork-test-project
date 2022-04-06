1. What Happened when I Increated value of `NUMBER_OF_JOBS` and generated more Job offers.<br>
  Ans : Rendering of Job Offer List became slower as `NUMBER_OF_JOBS` got increased. In case of `NUMBER_OF_JOBS=100000`, App couldn't event start.<br>
Solution to the Problem: This is usual case, this is more or less handled by **Pagination** or **Infinite Scrolling**. I have used **Infinite Scrolling**. Because not whole list gets rendered so App performance improves. I have also used **memo** higher order component to stop rerendering of previously rendered components of the list. (However memo checks if your props are changed or not, so checking will happen every-time state inside parent component changes, changes using it should be avoided in more complex props)

<br>
2. No of different keys using `wp_generate_passowrd(8)`.
Ans: `wp_generate_passowrd` takes 3 arguments:
    1) No of char (default value 12)
    2) special_chars (default false)
    3) extra_special_chars (default false)
<br>
We have called this function with only 1st argument whose value is 8. so it will take only alpha numeric chars (2 * 26 + 10 = 62). So no of possible distinct keys possible for `wp_generate_passowrd(8)` will be 62 ** 8, which is **218340105584896**.
