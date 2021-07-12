<div class="brinza-task-description">
<p>Rick is a fan of logic-based games. However, he is bored of the classic ones, like Sudoku and Mastermind, since he has solved so many of them. Recently he found a new game in which one is given a string with some question marks in it. The objective is to replace all of the question marks with letters (one letter per question mark) in such a way that no letter appears next to another letter of the same kind.</p>
<p>Write a function:</p>
<blockquote><p style="font-family: monospace; font-size: 9pt; display: block; white-space: pre-wrap"><tt>function solution(riddle);</tt></p></blockquote>
<p>that, given a string <tt style="white-space:pre-wrap">riddle</tt>, returns a copy of the string with all of the question marks replaced by lowercase letters (a−z) in such a way that the same letters do not occur next to each other. The result can be any of the possible answers as long as it fulfils the above requirements.</p>
<p><b><b>Examples:</b></b></p>
<p>1. Given <tt style="white-space:pre-wrap">riddle</tt> = "ab?ac?", your function might return "abcaca". Some other possible results are "abzacd", "abfacf".</p>
<p>2. Given <tt style="white-space:pre-wrap">riddle</tt> = "rd?e?wg??", your function might return "rdveawgab".</p>
<p>3. Given <tt style="white-space:pre-wrap">riddle</tt> = "????????", your function might return "codility".</p>
<p>Write an <b><b>efficient</b></b> algorithm for the following assumptions:</p>
<blockquote><ul style="margin: 10px;padding: 0px;"><li>the length of the string is within the range [1..100,000];</li>
<li>string <tt style="white-space:pre-wrap">riddle</tt> consists only of lowercases letters (a − z) or '?';</li>
<li>it is always possible to turn string 'riddle' into a string without two identical consecutive letters.</li>
</ul>
</blockquote></div> 
