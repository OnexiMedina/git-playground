function nextLine(line) {

	var poem = new Array("<p onClick=nextLine(1)>There once was a maintainer on github</p>",
"<p onClick=nextLine(2)>So many pull requests she did snub</p>",
"<p onClick=nextLine(3)>So I forked the repo</p>",
"<p onClick=nextLine(4)>Now they all send <em>me</em> changes, d'oh!</p>",
"<p onClick=nextLine(0)>Said the maintainer, 'Welcome to the club!'</p>");
    /* Problem: Poem does not restart at the beginning once iterated through
     * Solution: Add a check for the current line number and change the line
     * number to 1 once the line number > 5.
     */

	document.getElementById("line").innerHTML=poem[line];
}
